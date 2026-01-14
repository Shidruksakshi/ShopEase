import { Outlet } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import AdminNavbar from "./components/AdminNavbar";


export default function AdminHomepage() {
  return (
    <div className="flex h-screen">
      
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Section */}
      <div className="flex flex-col flex-grow">
        
        {/* Navbar */}
        <AdminNavbar />

        {/* Content Area */}
        <div className="p-6 overflow-y-auto">
          <Outlet />
        </div>

      </div>
    </div>
  );
}
