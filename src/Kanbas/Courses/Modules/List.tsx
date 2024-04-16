import "../../cssSRC/index.css";
import "../../cssSRC/module-index.css";
import {FaEllipsisV, FaCheckCircle, FaPlusCircle, FaGlasses, FaChevronDown} from "react-icons/fa";
import {Link, useLocation, useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addModule, deleteModule, setModule, setModules, updateModule} from "../../Redux/kanbasReducer";
import { useEffect, useState } from "react";
import * as client from "../../client";
import { KanbasState } from "../../store";


function ModuleList() {
    const {courseId} = useParams();
    const {pathname} = useLocation();
    const path = pathname.substring(0,pathname.lastIndexOf("/"));

    const dispatch = useDispatch();
    const {item, items} = useSelector((state: KanbasState) => state.moduleReducer)

    useEffect(() => {
        client.findAllData(`${client.COURSES_API}/${courseId}/modules`).then((data)=>  {dispatch(setModules(data))});
        client.initializeItem(`${client.COURSES_API}/${courseId}/modules`).then((data)=> {dispatch(setModule(data))});
    }, [courseId]);

    const handleDeleteModule = (id:any) =>{
        client.deleteItemD(`${client.COURSES_API}/${courseId}/modules`, id).then((status) => {dispatch(deleteModule(id))});
    }

    // after each add operation, the input window will reset to default settings
    const handleAddNewModule = () => {
        client.addNewItemD(`${client.COURSES_API}/${courseId}/modules`, item).then((item)=> {dispatch(addModule({...item}))});
        client.initializeItem(`${client.COURSES_API}/${courseId}/modules`).then((item)=> {dispatch(setModule(item))});
    };

    // after each update operation, the input window will reset to default settings
    const handleUpdateModule = () =>{
        client.updateItemD(`${client.COURSES_API}/${courseId}/modules`, item.mid, item).then((status)=> {dispatch(updateModule(item))});
        client.initializeItem(`${client.COURSES_API}/${courseId}/modules`).then((item)=> {dispatch(setModule(item))});
    }

    const handleUpdateLesson = (newLesson : any) =>{
        const les =  item.lessons.map((lesson : any) => lesson.lid == newLesson.lid ? newLesson : lesson);
        dispatch(setModule({...item, lessons : les}));
    }

    const [selectedModule, setSelectedModule] = useState({...items[0]});
    
    return (
    <ul className="list-group wd-modules rounded-top-0"> 
        <li className={pathname.includes("editCourse") ? "list-group-item p-0 mx-4" : "d-none"}>
            <div className="d-flex" >
                <input value={item.name} className="form-control w-50"
                    onChange={(e) => dispatch(setModule({ ...item, name: e.target.value }))
                }/>     
                <button className="ms-2 btn btn-sm btn-primary"
                    onClick={() => handleAddNewModule()}>
                    Add 
                </button>
                <button className="ms-2 btn btn-sm btn-warning"
                    onClick={() => handleUpdateModule()}>
                    Update
                </button>
                <Link className="ms-2 btn btn-sm btn-success text-white"
                    to={path}>
                    Publish
                </Link>
            </div>
            <input value={item.description} className="form-control w-50 m-1"
                onChange={(e) => dispatch(setModule({ ...item, description: e.target.value }))
            }/>  
            {item.lessons !== undefined  && item.lessons.map((lesson :any) => (
                <li className="list-group-item pt-3">
                    <textarea value={lesson.lname} className="form-control w-50"
                    onChange={(e) => handleUpdateLesson({...lesson, lname: e.target.value})}
                    />
                </li>
            ))}
        </li>


        {items && items.map((module: any) => (
        <li className="list-group-item p-0 mx-4" 
        onClick={() => setSelectedModule(module)}
        >
            <div className='my-2 '>
                <FaGlasses className="me-2" /> {module.name}
                <button 
                    className={pathname.includes("editCourse") ? "ms-2 btn btn-sm btn-primary" : "d-none"}
                    onClick={() => { dispatch(setModule({...module}));}}>
                    Edit
                </button>
                    <button 
                        className={pathname.includes("editCourse") ? "ms-2 btn btn-sm btn-danger" : "d-none"}
                    onClick={() => { handleDeleteModule(module._id);}}>
                    Deleted
                </button>
                <span className="float-end">
                    <FaCheckCircle 
                        className={pathname.includes("editCourse")? "d-none":"text-success me-2"}/>
                    <FaChevronDown className='small me-2'/>
                    <FaPlusCircle className="ms-2" />
                    <FaEllipsisV className="ms-2" />
                </span>
                <div className="ms-4">
                    {module.description}
                </div>
            </div>
            {selectedModule.mid === module.mid && (
                <ul id= "1tier" className="list-group">
                    {module.lessons && module.lessons.map((lesson : any, step:number) => (
                        <li key={step} className="list-group-item pt-3">
                            <FaEllipsisV className="me-2" />
                            {lesson.lname}
                            <span className="float-end">
                                <FaCheckCircle 
                                className={pathname.includes("editCourse")? "d-none":"text-success"}/>                    
                                <FaEllipsisV className="ms-2" />
                            </span>
                            <ul id="2tier" className="list-group mt-2">
                                { lesson.description.map((link: any, index: number)=> (
                                    <li key={index} className="list-group-item mx-2">
                                        <Link className={lesson.lname.includes('Slides')? "":"inactive"} to={`/Kanbas/${link}`} >
                                                {link} </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                )} 
        </li>
        ))}
    </ul>
);}
export default ModuleList;