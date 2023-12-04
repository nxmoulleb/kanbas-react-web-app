import Signin from "../users/signin";
import Signup from "../users/signup";
import Account from "../users/account";
import UserTable from "../users/table";
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
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
        </Routes>
      </div>
    </div>
  );
}
export default Project;