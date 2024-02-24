import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>OnChat</span>
      <div className='user'>
        <img src='' alt='' />
        <span>Sourav</span>
        <button>Logout</button>
      </div>
    </div>
  );
};
export default Navbar;
