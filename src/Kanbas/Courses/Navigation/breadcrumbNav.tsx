import {assignments, courses, modules} from "../../Database";
import {HiMiniBars3} from "react-icons/hi2";
import {useLocation, useParams} from "react-router-dom";

function BreadcrumbNav() {
    const { courseId} = useParams();
    const { pathname } = useLocation();
    const course = courses.filter((course) => course._id === courseId)[0];
    const target = pathname.substring(pathname.lastIndexOf('/')+1);
    const path = pathname.substring(pathname.indexOf(course._id), pathname.lastIndexOf('/')).replace(course._id, course.name);
    const highlight = calHeadings(pathname, target);
    const path_arr = path.split('/');
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                        <HiMiniBars3 />
                    </li>
                    {path_arr.map((link) => (
                        <li className="breadcrumb-item">
                            {link} </li>
                    ))}
                    <li className="col-3 breadcrumb-item text-truncate active" aria-current="page">
                        {highlight}
                    </li>
                </ol>
            </nav>
        </>
    )
}
export default BreadcrumbNav

function calHeadings(path : string, target : string) {
    if(path.includes("Assignments/")) {
        const idl = target.split(':');
        return (
            assignments.filter((ele)=> ele._id === idl.at(0))[0]?.catalog
                .filter((ele)=>ele._id === idl.at(1))[0].title
        );
    }
    else if (path.includes("Modules/")) {
        return (<h2>Modules</h2>);
    }
    else {
        return (target);
    }
}

