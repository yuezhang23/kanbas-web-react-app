import { useLocation } from "react-router";
import db from "../../Database/Database";
import { Link } from "react-router-dom";

function AccountNavigation() {
    const { pathname } = useLocation();
    
    return (
    <>
      <ul className="wd-kanbas-navigation menu-2 me-4">
            {db.account_menu.map((link, index) => (
                <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
                    <Link to={link}>{link}</Link>
                </li>
            ))}
        </ul>
    </>
    );
}
export default AccountNavigation