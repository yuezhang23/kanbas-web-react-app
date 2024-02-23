import React from "react";
import {useNavigate, useParams, Link, useLocation} from "react-router-dom";
import { assignments } from "../../Database";
import DropdownEdit from "../dropdownEdit";
import {FaCheckCircle} from "react-icons/fa";
function AssignmentEditor() {
    const {pathname} = useLocation();
    const path_arr = pathname.substring(pathname.lastIndexOf('/')+1).split(':');
    const assignment = assignments.filter((assignment) => assignment._id === path_arr.at(0))[0].catalog;
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className='wd-modules mx-5 mt-5'>
            <div className="text-success pb-5">
                <span className='float-end'>
                    <DropdownEdit />
                </span>
                <span className='float-end mt-2'>
                    <FaCheckCircle/> Published
                </span>
            </div>
            <div className="border-top border-bottom py-2">
                Assignment Name
                <input placeholder={assignment.filter((index)=>index._id === path_arr.at(1))[0].title} className="form-control mb-4 my-2" />
                <button onClick={handleSave} className="my-3 btn btn-success ms-2 float-end">
                    Save
                </button>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                      className="my-3 btn btn-danger float-end">
                    Cancel
                </Link>
            </div>
            <div className="mt-1">
                <label htmlFor="textarea1" className="form-label"></label>
                <textarea className="form-control border rounded-1 p-1" id="textarea1">
                    This assigment gives how to install the development environment for creating and working with web applications we will developing this semester. we will add new content every week, pushing the code to github. What's more, there be quizzes and exams, where each quiz will start at the end of each class and the date of each exam is yet to be released.
                </textarea>
                <div className="col">
                    <form className="form">
                        <div className="row from-group my-3">
                            <div className="col-4 text-end px-1">
                                Points
                            </div>
                            <div className="col-4">
                                <input className="border rounded-1 px-1 form-control" id="hw-score"
                                       value="100"/>
                            </div>
                        </div>
                        <div className="row from-group my-3">
                            <div className="col-4 text-end px-1">
                                <label htmlFor="agCheck">Assignment Group</label>
                            </div>
                            <div className="col-4">
                                <select className="form-select border rounded-1 px-1 form-control"
                                        id="agCheck">
                                    <option>ASSIGNMENT</option>
                                    <option>ASSIGNMENT2</option>
                                </select>
                            </div>
                        </div>
                        <div className="row from-group my-3">
                            <div className="col-4 text-end px-1">
                                <label htmlFor="gdCheck">Display Grade as</label>
                            </div>
                            <div className="col-4">
                                <select className="form-select border rounded-1 px-1 form-control"
                                        id="gdCheck">
                                    <option>Percentage</option>
                                    <option>Number</option>
                                </select>
                            </div>
                        </div>
                        <div className="row from-group my-3">
                            <div className="col-4 text-end px-1">
                                <label htmlFor="stCheck">Submission Type</label>
                            </div>
                            <div className="col-4">
                                <select className="form-select border rounded-1 px-1 form-control"
                                        id="stCheck">
                                    <option>In person</option>
                                    <option>Online</option>
                                </select>
                            </div>
                        </div>
                        <div className="row from-group my-4">
                            <div className="col-4 text-end mx-2"></div>
                            <div className="col-4 form-check">
                                <input type="checkbox" className="form-check-input border"
                                       id="ckgd1"/>
                                    <label className="form-check-label" htmlFor="ckgd1">do not
                                        account this assignment into final grade</label>
                            </div>
                        </div>
                        <div className="row from-group my-3">
                            <div className="col-4 text-end px-1">
                                Assign
                            </div>
                            <div className="col-4">
                                <div className="form px-1 form-control rounded-0">
                                    <div className="form-group m-1 p-2">
                                        <label className="fw-bold" htmlFor="btas">Assign to</label>
                                        <span className="border rounded-1 form-control">
                                        <button id="btas"
                                                className="btn btn-secondary btn-sm p-1 rounded-1">Everyone +
                                         </button>
                                    </span>
                                    </div>
                                    <div className="form-group m-1 p-2">
                                        <label className="fw-bold" htmlFor="due-date"> Due </label>
                                        <input className="border rounded-1 form-control" type="date"
                                               id="due-date"
                                               value="2000-01-21"/>
                                    </div>
                                    <div className="form-group m-1 p-2 d-inline-flex">
                                        <div className='me-1'>
                                            <label className="fw-bold"
                                                   htmlFor="due-date1"> Available from </label>
                                            <input className="border rounded-1 form-control pe-1"
                                                   type="date"
                                                   id="due-date1"
                                                   value="2000-01-21"/>
                                        </div >
                                        <div>
                                            <label className="fw-bold"
                                                   htmlFor="due-date2"> Until </label>
                                            <input className="border rounded-1 form-control ps-1"
                                                   type="date"
                                                   id="due-date2"
                                                   value="2000-01-21"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form ">
                                    <button
                                        className="form-control btn btn-secondary rounded-0 rounded-bottom-1"
                                        type="button">
                                        + Add</button>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="my-3 border-top border-bottom">
                        <div className="row my-4">
                            <div className="col ms-4 form-check">
                                <input type="checkbox" className="form-check-input border"
                                       id="kgd1"/>
                                    <label className="form-check-label" htmlFor="kgd1">notify users
                                        that this content has changed</label>
                            </div>
                            <div className="col">
                                <button onClick={handleSave} className="my-3 btn btn-success ms-2 float-end">
                                    Save
                                </button>
                                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                                      className="my-3 btn btn-danger float-end">
                                    Cancel
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AssignmentEditor