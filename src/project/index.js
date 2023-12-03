import Signin from "../users/signin";
import Account from "../users/account";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
function Project() {
  return (
    <div className="row">
      <Nav />
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="/project/signin" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
}
export default Project;