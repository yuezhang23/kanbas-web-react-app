import {
    FaBook,
    FaCheckCircle, FaChevronDown,
    FaEllipsisV
} from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import DropdownEdit from "./dropdownEdit";
import DropdownHW from "./dropdownHW";
import "../cssSRC/hw-index.css";
import "../cssSRC/module-index.css"
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../store";
import { deleteAssignment, setAssignment, updateAssignmentList} from "../Redux/kanbasReducer";

function Assignments() {
    const {pathname} = useLocation();
    const colorBlack = { color: "black", fontWeight: 'bold'};
    const { courseId } = useParams();
    const weights = [{label:"ASSIGNMENTS", weights:"40%"}, {label:"QUIZZES", weights:"10%"},
        {label:"PROJECTS", weights:"20%"},{label:"EXAMS", weights:"30%"},
    ]

    const {items, item} = useSelector((state: KanbasState)=> state.assignmentReducer);
    const dispatch = useDispatch();
    const initItem = {
            name: "New Assigment",
            catalog: [
              { _id: "-1", 
               title: "New Title", 
               course: courseId,
               description: "New Assignment Description" }]
            };

    const handleAlert = (comp : any, subComp : any) => {
        const result = window.confirm('Do you want to DELETE?');
        if (result && comp == subComp) {
            dispatch(deleteAssignment(comp._id));
        } 

        // review
        if (result && comp !== subComp) {
            const {catalog, ...rest} = comp;
            const index = catalog.indexOf(subComp);
            const replacement = {catalog: catalog.slice(0, index).concat(catalog.slice(index+1)), ...rest}
            dispatch(updateAssignmentList(replacement));
        }
        };
    
    return (
        <div className="col mx-1 mt-2">
            <div className="row pb-2 border-bottom m-4">
                <input className="border w-25 form-control ps-2 rounded-1"
                       placeholder="Search for Assignment"/>
                <div className="col d-flex justify-content-end p-0">
                    <button className="btn btn-light rounded-1 me-2"> + Group</button>
                    <button className="btn btn-danger me-2" >
                        <Link className="text-white"
                            to={`/Kanbas/Courses/${courseId}/Assignments/Edit/Add`}
                            onClick={() => dispatch(setAssignment({...item, ...initItem}))}>
                                + Assignment 
                        </Link>
                    </button>
                    <button className="btn btn-primary me-2" >
                        <Link className="text-white"
                            to={`/Kanbas/Courses/${courseId}/Assignments/Delete`}
                            onClick={() => dispatch(setAssignment({...item, ...initItem}))}>
                                + Edit
                        </Link>
                    </button>
                    <button  className={pathname.includes("Delete")? "btn me-2 btn-sm btn-success":"d-none"}>
                        <Link className="text-white"
                            to={`/Kanbas/Courses/${courseId}/Assignments`}
                          >
                                Publish
                        </Link>
                    </button>
                    <div className="float-end ms-2">
                        <DropdownEdit/>
                    </div>
                </div>
            </div>
            <div className='row ps-2'>
                <ul className="list-group rounded-0 wd-modules">
                    {items.map((assignment) => (
                        <li className="list-group-item p-0 mx-4" >
                            <div className='my-2 wd-fg-black'>
                                <FaEllipsisV className="me-2" />
                                <FaChevronDown className="me-2"/>
                                {assignment.name}
                                <span className="d-inline-flex float-end">
                                    <button className={pathname.includes("Delete")? "btn me-2 btn-sm btn-primary":"d-none"}
                                    onClick={()=> handleAlert(assignment, assignment)}
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
                                { assignment.catalog.filter((content : any) => (content.course) === courseId).map((cat:any) => (
                                <li className="list-group-item">
                                    <div className='d-flex flex-row'>
                                        <FaEllipsisV className='mt-1 me-3'/>
                                        <FaBook className="text-success mt-1 me-3"/>
                                        <div className='flex-grow-1'>
                                            <Link style={colorBlack}
                                                to={`/Kanbas/Courses/${courseId}/Assignments/Edit/${assignment._id}:${cat._id}`}
                                                onClick={() => dispatch(setAssignment(
                                                    {...assignment, catalog: [cat]}
                                                ))}>{cat.title}
                                                <br/>
                                            </Link>
                                            <div className='small'>
                                                {cat.description}
                                            </div>
                                        </div>
                                        <span className="float-end">
                                            <button className={pathname.includes("Delete")? "btn btn-sm btn-primary me-2":"d-none"}
                                                onClick={()=> handleAlert(assignment, cat)}
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
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );}
export default Assignments;





