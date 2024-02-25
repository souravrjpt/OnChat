import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>OnChat</span>
      <div className='user'>
        <img
          src='https://media.istockphoto.com/id/1170154554/photo/young-handsome-business-man-dressed-in-casual-denim-shirt-with-smartwatch-on-wrist-isolated.jpg?s=612x612&w=0&k=20&c=DOZVh06WmLM7Pcuh07Glxtr54d-LfMZX4dxVGhVTELk='
          alt=''
        />
        <span>Sourav</span>
        <button>Logout</button>
      </div>
    </div>
  );
};
export default Navbar;
