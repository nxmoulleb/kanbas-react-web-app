import { Link, useLocation } from "react-router-dom";
import { FaCircleUser, FaGaugeHigh, FaBook, FaCalendarDays } from "react-icons/fa6";
import './index.css';
import '../index.css'

function KanbasNavigation() {
  const links = [[<FaCircleUser size={35} style={{color: '#aaa'}}/>, "Account"], 
  [<FaGaugeHigh size={35} style={{color: "#ff0000"}}/>, "Dashboard"], 
  [<FaBook size={35} style={{color: "#ff0000"}}/>, "Courses"], 
  [<FaCalendarDays size={35} style={{color: "#ff0000"}}/>, "Calendar"]];
  const { pathname } = useLocation();
  return (
    <div className="list-group navigation" style={{ width: 100 }}>
        <p id="N" style={{color: '#f00', fontSize: 75}}>N</p>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link[1]}`}
          className={`list-group-item ${pathname.includes(link[1]) && "active"}`}>
          {link[0]}
          <br/>
          <p>{link[1]}</p>
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;