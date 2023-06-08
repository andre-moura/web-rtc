import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  options: NavbarOption[];
  userRole: string;
  isLoggedIn: boolean;
}

interface NavbarOption {
  label: string;
  roles: string[];
  loggedIn: boolean;
  link: string;
}

const Navbar: React.FC<NavbarProps> = ({ options, userRole, isLoggedIn }) => {
  const filteredOptions = options.filter((option) => {
    const { roles, loggedIn } = option;
    return (
      (roles.length === 0 || roles.includes(userRole)) &&
      (loggedIn === isLoggedIn)
    );
  });

  return (
    <nav>
      <ul>
        {filteredOptions.map((option, index) => (
          <li key={index}>
            <Link to={option.link}>{option.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;