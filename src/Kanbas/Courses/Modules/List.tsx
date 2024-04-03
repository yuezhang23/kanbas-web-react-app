import "../../cssSRC/index.css";
import "../../cssSRC/module-index.css";
import {FaEllipsisV, FaCheckCircle, FaPlusCircle, FaGlasses, FaChevronDown} from "react-icons/fa";
import {Link, useLocation, useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {deleteModule, setModule, setModules} from "../../Redux/kanbasReducer";
import { useEffect, useState } from "react";
import { deleteItemD, findAllData, initializeItem, setItemD } from "../../client";
import { KanbasState } from "../../store";


function ModuleList() {
    const {courseId} = useParams();
    const COURSES_API=  "http://localhost:4000/api/courses";
    const dispatch = useDispatch();
    const {pathname} = useLocation();

    useEffect(() => {
        findAllData(`${COURSES_API}/${courseId}/modules`).then((data)=>  {dispatch(setModules(data))});
        initializeItem(`${COURSES_API}/${courseId}/modules`).then((data)=> {dispatch(setModule(data))});
    }, [courseId]);

    const {items} = useSelector((state: KanbasState) => state.moduleReducer)
    const handleDeleteModule = (id:any) =>{
        deleteItemD(`${COURSES_API}/${courseId}/modules`, id).then((status) => {dispatch(deleteModule(id))});
    }
    const [selectedModule, setSelectedModule] = useState({...items[0]});
    
    return (
        <>
            {items.map((module: any) => (
            <li className="list-group-item p-0 mx-4" onClick={() => setSelectedModule(module)}>
                <div className='my-2 '>
                    <FaGlasses className="me-2" /> {module.name}
                    <button 
                        className={pathname.includes("editCourse") ? "ms-2 btn btn-sm btn-primary" : "d-none"}
                        onClick={() => dispatch(setModule({...module}))}>
                        Edit
                    </button>
                        <button 
                            className={pathname.includes("editCourse") ? "ms-2 btn btn-sm btn-danger" : "d-none"}
                        onClick={() => handleDeleteModule(module._id)}>
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
                {selectedModule._id === module._id && (
                    <ul id= "1tier" className="list-group">
                        {module.lessons.map((lesson : any, step:number) => (
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
        </>
    );
}
export default ModuleList;