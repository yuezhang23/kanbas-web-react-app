import {HiMiniBars3} from "react-icons/hi2";

const BreadcrumbNav  = ({pathname, course} :{pathname : string; course: any}) => {
    const path = pathname.substring(pathname.indexOf(course._id)).replace(course._id, course.name+"."+course.number);
    const path_arr = path.split('/');
    const highlight = path_arr.pop();
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

// function calHeadings(path : string, target : string) {
//     if(path.includes("Assignments/")) {
//         const idl = target.split(':');
//         return (
//             db.assignments.filter((ele)=> ele._id === idl.at(0))[0]?.catalog
//                 .filter((ele)=>ele._id === idl.at(1))[0].title
//         );
//     }
//     else if (path.includes("Modules/")) {
//         return (<h2>Modules</h2>);
//     }
//     else {
//         return (target);
//     }
// }

