import { useDispatch, useSelector } from "react-redux";
import { addCourse, setCourse, updateCourse} from "../Redux/kanbasReducer";
import { KanbasState } from "../store";

function CourseEditor() {
    const course = useSelector((state: KanbasState) => state.courseReducer.item);
    const dispatch = useDispatch();
    return (
    <div className="mb-2 form-control">
         <h3 className="mb-2">Course</h3>
        <input value={course.name} className="form-control"
        onChange={(e) => dispatch(setCourse({...course, name : e.target.value})) } />
        <input value={course.number} className="form-control"
                onChange={(e) => dispatch(setCourse({ ...course, number: e.target.value })) } />
        <input value={course.startDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
        <input value={course.endDate} className="form-control" type="date"
                onChange={(e) => dispatch(setCourse({ ...course, endDate: e.target.value })) } />
        <input value={course.text} className="form-control" 
            onChange={(e) => dispatch(setCourse({ ...course, text: e.target.value })) } />
        <input value={course.image} className="form-control" 
            onChange={(e) => dispatch(setCourse({ ...course, image: e.target.value })) } />
        <button className="mt-1 btn btn-sm btn-primary" onClick={() => dispatch(addCourse(course))}>
            Add
        </button>
        <button className="mt-1 ms-1 btn btn-sm btn-warning" onClick={() => dispatch(updateCourse(course))} >
            Update
        </button>
    </div>
    );
}
export default CourseEditor