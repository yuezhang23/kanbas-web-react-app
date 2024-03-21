import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { addModule, setModule, updateModule} from "../../Redux/kanbasReducer";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";


function Editor() {
    const { courseId } = useParams();
    const dispatch = useDispatch();
    const module = useSelector((state: KanbasState) => state.moduleReducer.item);
    const {pathname} =useLocation();
    const path = pathname.substring(0,pathname.lastIndexOf("/"));
    return (
     <>
         <div className='my-2'>
            <div className="d-flex" >
                <input value={module.name} className="form-control w-50"
                    onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
                }/>     
                <button className="ms-2 btn btn-sm btn-primary"
                    onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                    Add 
                </button>
                <button className="ms-2 btn btn-sm btn-warning"
                    onClick={() => dispatch(updateModule(module))}>
                    Update
                </button>
                <Link className="ms-2 btn btn-sm btn-success text-white"
                   to={path}>
                    Publish
                </Link>
            </div>
            <textarea value={module.description} className=" form-control w-50"
                onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
            }/>  

        </div>
        {/* {module.lessons.map((lesson :any, index : number) => (
            <li key= {index} className="list-group-item pt-3">
                <textarea value={lesson.lname} className="form-control w-50"
                onChange={(e) => dispatch(updateModuleSingle({ ...module, lessons : [{...lesson, lname: e.target.value}]}))}
                />
            </li>
        ))}     */}
    </>
    );
}
export default Editor