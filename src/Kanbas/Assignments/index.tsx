import {FaBook,FaCheckCircle, FaChevronDown,FaEllipsisV} from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import DropdownEdit from "./dropdownEdit";
import DropdownHW from "./dropdownHW";
import "../cssSRC/hw-index.css";
import "../cssSRC/module-index.css"
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../store";
import { deleteAssignment, setAssignment, setAssignments, updateAssignment} from "../Redux/kanbasReducer";
import { useEffect, useState } from "react";
import * as client from "../client";


function Assignments() {
    const { courseId } = useParams();
    const {pathname} = useLocation();
    const colorBlack = { color: "black", fontWeight: 'bold'};
    
    const weights = [{label:"ASSIGNMENTS", weights:"40%"}, {label:"QUIZZES", weights:"10%"},
        {label:"PROJECTS", weights:"20%"},{label:"EXAMS", weights:"30%"},
    ]
    
    const dispatch = useDispatch();
    useEffect(() => {
        client.findAllData(`${client.COURSES_API}/${courseId}/assignments`).then((data)=>  {dispatch(setAssignments(data))});
        client.initializeItem(`${client.COURSES_API}/${courseId}/assignments`).then((data)=> {dispatch(setAssignment(data))});
    }, [courseId]);
    
    const {items} = useSelector((state: KanbasState)=> state.assignmentReducer);
    const [selectedHW, setSelectedHW] = useState({...items[0]});
   
    const handleEdit = (item : any) => {
        if (Object.keys(item).length === 0) {
            client.initializeItem(`${client.COURSES_API}/${courseId}/assignments`).then((data)=> {dispatch(setAssignment(data))});
        } else {
            dispatch(setAssignment(item));
        }
    };
    
    const handleDeleteAssignemnt = (id :any, sid : any) =>{
        const result = window.confirm('Do you want to DELETE?');
        if (result && id === sid) {
            client.deleteItemD(`${client.COURSES_API}/${courseId}/assignments`, id).then((status) => {dispatch(deleteAssignment(id))});
        } 
        if (result && id !== sid) {         
            client.deleteSubItemD(`${client.COURSES_API}/${courseId}/assignments`, id, sid).then((data) => {dispatch(updateAssignment(data))});
        }
    }
    return (
        <div className="col mx-1 mt-2">
            {/* <pre>{JSON.stringify(items, null,2)}</pre> */}
            <div className="row pb-2 border-bottom m-4">
                <input className="border w-25 form-control ps-2 rounded-1"
                       placeholder="Search for Assignment"/>
                <div className="col d-flex justify-content-end p-0">
                    <button className="btn btn-light rounded-1 me-2"> + Group</button>
                    <Link className="text-white btn btn-danger me-2"
                        to={`/Kanbas/Courses/${courseId}/Assignments/Edit/Add`}
                        onClick={() => handleEdit({})}>
                            + Assignment 
                    </Link>
                    <Link className="text-white btn btn-primary me-2"
                        to={`/Kanbas/Courses/${courseId}/Assignments/Delete`}>
                            + Edit
                    </Link>
                    <Link className={pathname.includes("Delete")? "btn me-2 btn btn-success text-white":"d-none"}
                        to={`/Kanbas/Courses/${courseId}/Assignments`}
                        >
                            Publish
                    </Link>

                    <div className="float-end ms-2">
                        <DropdownEdit/>
                    </div>
                </div>
            </div>
            <div className='row ps-2'>
                <ul className="list-group rounded-0 wd-modules" >
                    {items != undefined && items.map((assignment) => {
                        if (assignment.catalog.length > 0) {
                            return (                      
                                <li className="list-group-item p-0 mx-4" onClick={() => setSelectedHW(assignment)} >
                                    <div className='my-2 wd-fg-black'>
                                        <FaEllipsisV className="me-2" />
                                        <FaChevronDown className="me-2"/>
                                        {assignment.name}
                                        <span className="d-inline-flex float-end">
                                            <button className={pathname.includes("Delete")? "btn me-2 btn-sm btn-primary":"d-none"}
                                            onClick={()=> handleDeleteAssignemnt(assignment._id, assignment._id)}
                                            >
                                                x
                                            </button>
                                            <span className="float-start border rounded-4 px-1 me-2">
                                                {weights.filter((i)=> i.label === assignment.name).map((i)=>i.weights)}
                                                of Total
                                            </span>
                                            +
                                            <DropdownHW/>
                                        </span>
                                    </div>
                                    <ul className="list-group rounded-0">
                                        { selectedHW._id ==  assignment._id && assignment.catalog.map((cat:any) => (
                                        <li className="list-group-item">
                                            <div className='d-flex flex-row'>
                                                <FaEllipsisV className='mt-1 me-3'/>
                                                <FaBook className="text-success mt-1 me-3"/>
                                                <div className='flex-grow-1'>
                                                    <Link style={colorBlack}
                                                        to={`/Kanbas/Courses/${courseId}/Assignments/Edit/${assignment._id}:${cat._id}`}
                                                        onClick={() => handleEdit({...assignment, catalog: [cat]})}>{cat.title}
                                                        <br/>
                                                    </Link>
                                                    <div className='small'>
                                                        {cat.description}
                                                    </div>
                                                </div>
                                                <span className="float-end">
                                                    <button className={pathname.includes("Delete")? "btn btn-sm btn-primary me-2":"d-none"}
                                                        onClick={()=> handleDeleteAssignemnt(assignment._id, cat._id)}
                                                            >
                                                                x
                                                    </button>
                                                    <FaCheckCircle 
                                                        className={pathname.includes("Delete")? "d-none":"text-success"}/>
                                                    <FaEllipsisV className="ms-2" />
                                                </span>
                                            </div>
                                        </li>))}
                                    </ul>
                                </li>);
                            }
                        }
                )}
                </ul>
            </div>
        </div>
    );}
export default Assignments;





