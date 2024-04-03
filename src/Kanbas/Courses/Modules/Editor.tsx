import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { addModule, setModule, updateModule} from "../../Redux/kanbasReducer";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import * as client from "../../client";


function Editor() {
    const { courseId } = useParams();
    const {pathname} =useLocation();
    const path = pathname.substring(0,pathname.lastIndexOf("/"));
 
    const dispatch = useDispatch();
    const {item} = useSelector((state: KanbasState) => state.moduleReducer);

    const handleAddNewModule = () => {
        client.addNewItemD(`${client.COURSES_API}/${courseId}/modules`, item).then((item)=> {dispatch(addModule({...item}))});
    };

    const handleUpdateModule = () =>{
        client.updateItemD(`${client.COURSES_API}/${courseId}/modules`, item).then((status)=> {dispatch(updateModule(item))});
        client.initializeItem(`${client.COURSES_API}/${courseId}/modules`).then((item)=> {dispatch(setModule(item))});
    }

    const handleUpdateLesson = (newLesson : any) =>{
        const les =  item.lessons.map((lesson : any) => lesson._id == newLesson._id ? newLesson : lesson);
        dispatch(setModule({...item, lessons : les}));
    }

    return (
     <>
        <div className='my-2'>
            <div className="d-flex" >
                <input value={item.name} className="form-control w-50"
                    onChange={(e) => dispatch(setModule({ ...item, name: e.target.value }))
                }/>     
                <button className="ms-2 btn btn-sm btn-primary"
                    onClick={() => handleAddNewModule()}>
                    Add 
                </button>
                <button className="ms-2 btn btn-sm btn-warning"
                    onClick={() => handleUpdateModule()}>
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
        {item.lessons !== undefined  && item.lessons.map((lesson :any) => (
            <li className="list-group-item pt-3">
                <textarea value={lesson.lname} className="form-control w-50"
                onChange={(e) => handleUpdateLesson({...lesson, lname: e.target.value})}
                />
            </li>
        ))}    
    </>
    );
}
export default Editor