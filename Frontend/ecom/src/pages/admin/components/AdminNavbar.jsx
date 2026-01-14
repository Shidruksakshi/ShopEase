import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Admin Dashboard</h1>
      <Link to={"/"}>Go Back To Home</Link>
      
    </header>
  );
}
