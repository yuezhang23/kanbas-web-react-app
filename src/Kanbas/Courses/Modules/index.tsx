import { useLocation, useParams } from "react-router";
import ModuleList from "./List";
import {FaCheckCircle, FaEllipsisV} from "react-icons/fa";
import { Link } from "react-router-dom";

function Modules() {
    const { pathname } = useLocation();
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
                        to={`editCourse`} className="text-white form-control btn btn-danger" >
                            Module + 
                    </Link>
                <button className="btn btn-light p-1 rounded-0" type="button"> <FaEllipsisV/> </button>
            </div>
            <div>
                <ModuleList />
            </div>
        </div>
    );
}
export default Modules;

