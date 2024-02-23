import ModuleList from "./List";
import {FaCheckCircle, FaChevronDown, FaEllipsisV, FaPlus} from "react-icons/fa";
function Modules() {
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
                <button className="form-control btn btn-danger p-1  me-2" type="button"> + Module </button>
                <button className="btn btn-light p-1 rounded-0" type="button"> <FaEllipsisV/> </button>
            </div>
            <ModuleList />
        </div>
    );
}
export default Modules;

