import React from "react";
import CardEditor from "../../components/dashboard/CardEditor";
import AdminDashboard from "../../components/admin/Admin";

export default function Dashboard() {
  const type = localStorage.getItem("type");
  return (
    <div>
      <section
        style={{ paddingTop: 0 }}
        className="header2 cid-sAZwEPawSr mbr-fullscreen mbr-parallax-background"
        id=""
      >
        {type === "U" ? 
          <CardEditor />
         : 
          <AdminDashboard />
         }
      </section>
    </div>
  );
}
