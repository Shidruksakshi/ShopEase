import React, { useEffect, useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function UsersData() {
  const [users, setUsers] = useState([]);
  const [openMenu, setopenMenu] = useState(null);

  const toggleMenu = (id) => {
    setopenMenu(openMenu === id ? null : id);
  };

 useEffect(() => {
  const fetchUsers = async () => {
    const adminToken = localStorage.getItem("adminToken");

    const res = await fetch("http://localhost:8000/api/admin/userdata", {
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
    });

    const data = await res.json();
    setUsers(data?.data || []);  
  };

  fetchUsers();
}, []);


  return (
    <div className="p-6 shadow bg-[#efdde8] rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4">Users Data</h2>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">

        <div className="grid grid-cols-4 text-sm font-semibold text-gray-600 px-6 py-4 border-b">
          <div>Username</div>
          <div>Email</div>
          <div>Created At</div>
          <div>Action</div>
        </div>

        <div>
          {users?.length > 0 ? (
            users.map((user) => (
              <div
                key={user._id}
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center px-6 py-4 border-b
                last:border-none hover:bg-gray-100 transition"
              >
                <div className="font-medium text-gray-900">{user.username}</div>

                <div className="text-gray-700">{user.email}</div>

                <div className="text-gray-600">
                  {new Date(user.createdAt).toLocaleDateString()}
                </div>

                <div className="text-gray-600 relative">
                  <MoreVertIcon
                    onClick={() => toggleMenu(user._id)}
                    className="cursor-pointer"
                  />

                  {openMenu === user._id && (
                    <div className="absolute right-0 mt-2 w-28 bg-white shadow-lg rounded-md border z-10">
                      <button
                        className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                      >
                        Edit
                      </button>

                      <button
                        className="block px-4 py-2 w-full text-left text-red-600 hover:bg-gray-100" 
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>

              </div>
            ))
          ) : (
            <div className="px-6 py-4 text-center text-gray-500">
              No users found
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
