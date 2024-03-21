import {Navigate, Route, Routes, useLocation, useParams} from "react-router-dom";
import "../cssSRC/index.css";
import "../cssSRC/module-index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadNav from "../Navigation/headNav";
import AccountNavigation from "./Navigation";
import Profile from "./Profile/Content";


function Account() {
    // const { personalID } = useParams();
    // const { pathname } = useLocation();
    // const pID = accounts.filter((account) => account.account_id === personalID)[0];

    return (
        <>
            <div className="d-flex d-block d-md-none bg-dark text-white py-2">
                <div className="col">
                    <HeadNav/>
                </div>
                {/* <div className="col text-center">
                    {pathname.substring(pathname.lastIndexOf('/') +1 )}
                </div> */}
             
            </div>
            <div className='d-flex mt-4'>
                <div className='d-none d-md-block'>
                    <AccountNavigation/>
                </div>
                <div className="overflow-y-scroll bottom-0 end-0 flex-fill"
                    style={{left: "320px", top: "120px" }} >
                    <Routes>
                        <Route path="/" element={<Navigate to="Profile" />} />
                        <Route path="Profile" element={<Profile/>} />      
                        <Route path="Notification" element={<h1>Notification</h1>} />
                        <Route path="ePortfolios" element={<h1>ePortfolios</h1>} />
                        <Route path="Files" element={<h1>Files</h1>} />
                        <Route path="Settings" element={<h1>Settings</h1>} />
                    </Routes>
                </div>
            </div>
        </>
    );
}
export default Account