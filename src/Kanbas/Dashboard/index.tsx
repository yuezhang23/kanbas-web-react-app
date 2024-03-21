import "../cssSRC/index.css";
import "../cssSRC/module-index.css";
import CourseEditor from "./courseEditor";
import PublishedCourse from "./coursePublished";


function Dashboard() {
    // const [courses, setCourses] = useState(db.courses);

    // const [course, setCourse] = useState({
    //     _id: "0", name: "New Course", number: "New Number",
    //     startDate: "2023-09-10", endDate: "2023-12-15",
    //     text: "Introduction to",
    //     image: "/images/reactjs.jpg"
    //   });
    

    // const addNewCourse = () => {
    //     const newCourse = { ...course,
    //                         _id: new Date().getTime().toString() };
    //     setCourses([...courses, { ...course, ...newCourse}]);
    // };

    // const deleteCourse = (id : string) => {
    //     const newCourses = courses.filter((course) => course._id !== id);
    //     setCourses(newCourses);
    // };

    // const updateCourse = (course : any) => {
    //     const newCourses  = courses.map((item) => item._id === course._id ? course : item);
    //     setCourses(newCourses);
    // };
    return (
        <div >
            <div className="px-5 ms-4 pt-4">
                <h1>Dashboard</h1>  
                <hr />
                <CourseEditor/>
            </div>
            <br/>
            <div >
                <PublishedCourse/>
            </div>
        </div>
    );
}
export default Dashboard;