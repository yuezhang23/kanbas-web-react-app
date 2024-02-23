import "../../cssSRC/index.css";
import "../../cssSRC/module-index.css";
import {modules} from "../../Database";
import {FaEllipsisV, FaCheckCircle, FaPlusCircle, FaGlasses, FaChevronDown} from "react-icons/fa";
import { useParams } from "react-router";
import {useState} from "react";
import {Link} from "react-router-dom";

function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <>
            <ul className="list-group wd-modules rounded-top-0">
                {modulesList.map((module) => (
                <li className="list-group-item p-0 mx-4" onClick={() => setSelectedModule(module)}>
                    <div className='my-2 '>
                        <FaGlasses className="me-2" /> {module.name}
                        <span className="float-end">
                            <FaCheckCircle className="text-success"/> <FaChevronDown className='small me-2'/>
                            <FaPlusCircle className="ms-2" />
                            <FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    {selectedModule._id === module._id && (
                        <ul className="list-group">
                            {module.lessons?.map((lesson) => (
                                <li className="list-group-item pt-3">
                                    <FaEllipsisV className="me-2" />
                                    {lesson.name}
                                    <span className="float-end">
                                        <FaCheckCircle className="text-success" />
                                        <FaEllipsisV className="ms-2" />
                                    </span>
                                    <ul className="list-group mt-2">
                                        { lesson.description.map((link)=> (
                                            <li className="list-group-item mx-2">
                                                <Link className={lesson.name.includes('Slides')? "":"inactive"} to={`/Kanbas/${link.pos}`} >
                                                     {link.content} </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
                ))}
            </ul>
        </>
    );
}
export default ModuleList;