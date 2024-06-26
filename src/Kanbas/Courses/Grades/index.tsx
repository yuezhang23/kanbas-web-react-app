import db from "../../Database/Database";
import { useParams } from "react-router-dom";
import {FaFilter, FaSearch, FaSignInAlt, FaSignOutAlt} from "react-icons/fa";
import {FaGear} from "react-icons/fa6";
import "../../cssSRC/index.css";
import "../../cssSRC/module-index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { useEffect, } from "react";
import * as client from "../../client";
import { setAssignments } from "../../Redux/kanbasReducer";


function Grades() {
    const { courseId } = useParams();
    
    useEffect(() => {
        client.findAllData(`${client.COURSES_API}/${courseId}/assignments`).then((data)=>  {dispatch(setAssignments(data))});
    }, []);
    
    const assignments = useSelector((state: KanbasState)=> state.assignmentReducer.items);
    const dispatch = useDispatch();
    const es_id = db.enrollment.filter((enrollment) => enrollment.course === courseId).map((st)=>st.user);
    const es = db.users.filter((st)=> es_id.includes(st.id));

    // on click error on catalog
    const as = [...assignments.find((i )=> i.name === "ASSIGNMENTS").catalog];

    return (
        <>
            {/* <pre> {JSON.stringify(assignments,null,2) }</pre> */}
            <div className="wd-modules px-5 mt-3">
                <div className="text-end">
                    <span className="dropdown">
                        <a className="btn btn-light border rounded-1 p-1 me-2 dropdown-toggle"
                           href="#" role="button" id="dropdownMenuImpt"
                           data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <FaSignInAlt/> Import</a>
                        <span className="dropdown-menu" aria-labelledby="dropdownMenuImpt">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </span>
                    </span>
                    <span className="dropdown">
                    <a className="btn border btn-light rounded-1 p-1 me-2 dropdown-toggle"
                       href="#" role="button" id="dropdownMenuExpt"
                       data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FaSignOutAlt/> Export
                    </a>
                    <span className="dropdown-menu" aria-labelledby="dropdownMenuExpt">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </span>
                </span>
                    <button className="btn btn-light">
                        <FaGear/>
                    </button>
                </div>
                <div className="d-flex mt-3 my-3">
                    <div className="from-group my-1 me-1 flex-grow-1 ">
                        <label className="fw-bold m-2" htmlFor="agCheck">Student Names</label>
                        <select className="form-select border rounded-1 px-2 form-control" id="agCheck">
                            <option>Search Students</option>
                            <option>All</option>
                            {es.map((user)=> {
                                  return (
                                      <option>{user.firstName} {user.lastName}</option>
                                  );})}
                        </select>
                    </div>
                    <div className="from-group my-1 flex-grow-1 ">
                        <label className="fw-bold m-2" htmlFor="gdCheck">Assignment Names</label>
                        <select className="form-select border rounded-1 px-2 form-control" id="gdCheck">
                            <option>Search Assignments</option>
                            <option >All</option>
                            {assignments.map((assignment) => {
                                return (
                                    <option >{assignment.name}</option>
                                );})}

                        </select>
                    </div>
                </div>
                <div >
                    <button className="btn btn-light border rounded-1 p-1 my-3">
                        <FaFilter/> Apply Filters
                    </button>
                </div>
            </div>
            <div className="table-responsive px-5">
                <table className="table table-bordered align-middle text-center table-striped">
                    <thead className='border'>
                        <th className='align-middle'>Student Name</th>
                        {as.map((assignment :any) => (
                            <th className='border'>{assignment.title}<br/>{"out of 100"}</th>))}
                    </thead>
                    <tbody>
                        {es.map((user)=> {
                            return (
                                <tr>
                                    <td className='text-danger'>{user.firstName} {user.lastName}</td>
                                    {as.map((assignment : any) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === user.id
                                                && grade.assignment === assignment._id);
                                        return (
                                            <td>{(grade?.grade + '%') || " "}</td>
                                        );})}
                                </tr>
                            );})}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default Grades;
