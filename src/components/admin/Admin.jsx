import React from "react";
import "../../assets/css/pages/admin.css";
import Usertable from "./usertable";

const AdminDashboard = ({ users }) => {
  return (
    <>
      <div>
        <div className="admin-table">
          <Usertable users={users} />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
