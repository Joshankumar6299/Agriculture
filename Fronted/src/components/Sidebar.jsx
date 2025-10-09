import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const activeLink = "flex items-center p-2 text-base font-normal text-white bg-green-700 rounded-lg";
  const normalLink = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100";

  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 h-full">
        <ul className="space-y-2">
          <li>
            <NavLink to="/admin/users" className={({ isActive }) => isActive ? activeLink : normalLink}>
              <span className="ml-3">Users</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;