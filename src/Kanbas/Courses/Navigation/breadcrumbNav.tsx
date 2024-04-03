import {HiMiniBars3} from "react-icons/hi2";

const BreadcrumbNav  = ({pathname} :{pathname : string}) => {
    const path_arr = pathname.split('/');
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

