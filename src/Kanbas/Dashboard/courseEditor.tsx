import { useDispatch, useSelector } from "react-redux";
import { addCourse, setCourse, updateCourse} from "../Redux/kanbasReducer";
import { KanbasState } from "../store";
import { addNewItemD, initializeItem, updateItemD } from "../client";


function CourseEditor(courseIP : any) {

    const course = useSelector((state: KanbasState) => state.courseReducer.item);
    const dispatch = useDispatch();

    const handleAddNewCourse = () => {
        addNewItemD(courseIP.ip, course).then((item)=> {dispatch(addCourse({...item}))});
    };

    const handleUpdateCourse = () =>{
        updateItemD(courseIP.ip, course).then((status)=> {dispatch(updateCourse(course))});
        initializeItem(courseIP.ip).then((item)=> {dispatch(setCourse(item))});
    }

    return (
    <div className="mb-2 form-control">
         <h3 className="mb-2">Course</h3>
        <input value={course.name} className="form-control"
        onChange={(e) => dispatch(setCourse({...course, name : e.target.value})) } />
        <input value={course.number} className="form-control"
                onChange={(e) => dispatch(setCourse({ ...course, number: e.target.value })) } />
        <input value={course.startDate} className="form-control" type="date"
                onChange={(e) => dispatch(setCourse({ ...course, startDate: e.target.value })) }/>
        <input value={course.endDate} className="form-control" type="date"
                onChange={(e) => dispatch(setCourse({ ...course, endDate: e.target.value })) } />
        <input value={course.description} className="form-control" 
            onChange={(e) => dispatch(setCourse({ ...course, description: e.target.value })) } />
        <input value={course.image} className="form-control" 
            onChange={(e) => dispatch(setCourse({ ...course, image: e.target.value })) } />
        <button className="mt-1 btn btn-sm btn-primary" onClick={() => handleAddNewCourse()}>
            Add
        </button>
        <button className="mt-1 ms-1 btn btn-sm btn-warning" onClick={() => handleUpdateCourse()} >
            Update
        </button>
    </div>
    );
}
export default CourseEditor