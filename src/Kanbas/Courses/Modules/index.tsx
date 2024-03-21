import { useLocation } from "react-router";
import ModuleList from "./List";
import {FaCheckCircle, FaEllipsisV} from "react-icons/fa";
import { Link } from "react-router-dom";
import Editor from "./Editor";


function Modules() {
    const {pathname} = useLocation();

    return (
        <div className='mt-2'>
            <div className="d-flex form pb-2 border-bottom m-4">
                <button className="form-control btn btn-light me-2" type="button"> View Progress </button>
                <button className="form-control btn btn-light me-2" type="button"> Collapse All </button>
                <button className="dropdown form-control btn btn-light me-2 dropdown-toggle" type="button"
                        id="dd" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FaCheckCircle className="text-success" />  Publish All
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Publish All</a>
                    <a className="dropdown-item" href="#">Selection One</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
                    <Link 
                        to={`${pathname}/editCourse`} className="text-white form-control btn btn-danger" >
                            Module + 
                    </Link>
                <button className="btn btn-light p-1 rounded-0" type="button"> <FaEllipsisV/> </button>
            </div>
            <div>
                <ul className="list-group wd-modules rounded-top-0"> 
                    <li 
                        className={pathname.includes("editCourse") ? "list-group-item p-0 mx-4" : "d-none"}>
                        <Editor/>
                    </li>
                    <ModuleList />
                </ul>
            </div>
        </div>
    );
}
export default Modules;

