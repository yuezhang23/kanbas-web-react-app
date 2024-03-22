import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { addModule, setModule, updateModule, updateModuleSingle} from "../../Redux/kanbasReducer";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";


function Editor() {
    const { courseId } = useParams();
    const dispatch = useDispatch();
    const {item} = useSelector((state: KanbasState) => state.moduleReducer);
    const {pathname} =useLocation();
    const path = pathname.substring(0,pathname.lastIndexOf("/"));
    return (
     <>
         {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}
         <div className='my-2'>
            <div className="d-flex" >
                <input value={item.name} className="form-control w-50"
                    onChange={(e) => dispatch(setModule({ ...item, name: e.target.value }))
                }/>     
                <button className="ms-2 btn btn-sm btn-primary"
                    onClick={() => dispatch(addModule({ ...item, course: courseId }))}>
                    Add 
                </button>
                <button className="ms-2 btn btn-sm btn-warning"
                    onClick={() => dispatch(updateModule(item))}>
                    Update
                </button>
                <Link className="ms-2 btn btn-sm btn-success text-white"
                   to={path}>
                    Publish
                </Link>
            </div>
            <input value={item.description} className=" form-control w-50"
                onChange={(e) => dispatch(setModule({ ...item, description: e.target.value }))
            }/>  

        </div>
        {item.lessons.map((lesson :any, index : number) => (
            <li key= {index} className="list-group-item pt-3">
                <textarea value={lesson.lname} className="form-control w-50"
                onChange={(e) => dispatch(updateModuleSingle({ ...item, lessons : [{...lesson, lname: e.target.value}]}))}
                />
            </li>
        ))}    
    </>
    );
}
export default Editor