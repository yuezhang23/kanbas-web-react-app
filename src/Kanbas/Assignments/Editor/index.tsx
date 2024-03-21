import { useState } from "react";
import { useParams, Link, useLocation} from "react-router-dom";
import DropdownEdit from "../dropdownEdit";
import {FaCheckCircle} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { addAssignment, setAssignment, updateAssignment } from "../../Redux/kanbasReducer";

function AssignmentEditor() {
    const {pathname} = useLocation();
    const { courseId } = useParams();
    const {item} = useSelector((state: KanbasState)=> state.assignmentReducer);
    const dispatch = useDispatch();
    const [points, modPoints] = useState("100");
    const [availFromDate, modFromDate] = useState(new Date());
    const [availToDate, modToDate] = useState(new Date());
    const [availDue, modDue] = useState(new Date());
    const dateToString = (date: Date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
          date.getMonth() + 1
        }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
      };
    const newDescription = "Available from " + dateToString(availFromDate) 
    + " ~ "+ dateToString(availToDate)+" | "+"Due: "+dateToString(availDue)+ " | "+"Points: "+ points;

    // const navigate = useNavigate();
    // const handleSave = () => {
    //     console.log("Actually saving assignment TBD in later assignments");
    //     navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    // };
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
                <input value={item.name} 
                    onChange={(e) => dispatch(setAssignment({...item, name : e.target.value}))}
                    className = {pathname.includes("Add") ? "form-control mt-4" :"d-none" }/>
                <input value={item.catalog[0].title} 
                    onChange={(e) => dispatch(setAssignment({...item, catalog: [{...item.catalog[0], title: e.target.value}]}))}
                    className="form-control mt-4" />
                <label htmlFor="textarea1" className="form-label"></label>
                <textarea 
                    value= {item.catalog[0].description} 
                    className="form-control border rounded-1" id="textarea1"
                    onChange={(e) => dispatch(setAssignment({...item, catalog: [{...item.catalog[0], description: e.target.value}]}))}>
                </textarea>
            </div>
            <div className="d-flex justify-content-end">

                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                      className="my-3 btn mx-2 btn-success"
                      onClick={(e) => pathname.includes("Add") ? dispatch(addAssignment(item)) :dispatch(updateAssignment(item))}>
                    Save
                </Link>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                      className="my-3 btn btn-danger">
                    Cancel
                </Link>
            </div>

            <form className="form">
                <div className="row form-group my-3">
                    <div className="col-4 text-end px-1">
                        Points
                    </div>
                    <div className="col-4">
                        <input className="border rounded-1 px-1 form-control" id="hw-score"
                                defaultValue={points}
                                onChange={(e) => modPoints(e.target.value)}
                                />
                    </div>
                </div>

                <div className = {pathname.includes("Add") ? "d-none" : "row form-group my-3"} >
                    <div className="col-4 text-end px-1">
                        <label htmlFor="agCheck">
                            Assignment Group</label>
                    </div>
                    <div className="col-4">
                        <select className="form-select border rounded-1 px-1 form-control"
                                id="agCheck">
                            <option>ASSIGNMENTS</option>
                            <option>QUIZZES</option>
                            <option>EXAMS</option>
                            <option>PROJECTS</option>
                        </select>
                    </div>
                </div>
                <div  className = {pathname.includes("Add") ? "d-none" : "row form-group my-3"}>
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
                <div className = {pathname.includes("Add") ? "d-none" : "row form-group my-3"}>
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
                <div className = {pathname.includes("Add") ? "d-none" : "row form-group my-4"}>
                    <div className="col-4 text-end mx-2"></div>
                    <div className="col-4 form-check">
                        <input type="checkbox" className="form-check-input border"
                                id="ckgd1"/>
                            <label className="form-check-label" htmlFor="ckgd1">do not
                                account this assignment into final grade</label>
                    </div>
                </div>
                <div className="row form-group my-3">
                    <div className="col-4 text-end px-1">
                        Assign
                    </div>
                    <div className="col-4">
                        <div className="form px-1 form-control rounded-0">
                            <div className = {pathname.includes("Add") ? "d-none" : "form-group m-1 p-2"}>
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
                                        value={dateToString(availDue)}
                                        onChange={(e) => modDue(new Date(e.target.value))}
                                        />
                            </div>
                            <div className="form-group m-1 p-2 d-inline-flex">
                                <div className='me-1'>
                                    <label className="fw-bold"
                                            htmlFor="due-date1"> Available from </label>
                                    <input className="border rounded-1 form-control pe-1"
                                            type="date"
                                            id="due-date1"
                                            value={dateToString(availFromDate)}
                                            onChange={(e) => modFromDate(new Date(e.target.value))}
                                            />
                                </div >
                                <div>
                                    <label className="fw-bold"
                                            htmlFor="due-date2"> Until </label>
                                    <input className="border rounded-1 form-control ps-1"
                                            type="date"
                                            id="due-date2"
                                            value={dateToString(availToDate)}
                                            onChange={(e) => modToDate(new Date(e.target.value))}
                                            />
                                </div>
                            </div>
                        </div>
                        <div className="form ">
                            <button
                                className="form-control btn btn-secondary rounded-0 rounded-bottom-1"
                                onClick={(e) => dispatch(setAssignment({...item, catalog: [{...item.catalog[0], description: newDescription}]}))}
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
                    {/* <div className="col"> */}
                        {/* <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                                className="my-3 btn btn-danger float-end ms-2">
                            Cancel
                        </Link>
                        <button onClick={handleSave} 
                            className="my-3 btn btn-success float-end">
                            Save
                        </button> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}
export default AssignmentEditor