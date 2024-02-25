import React from 'react';
import img from '../images/file_profile.png';

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src={img} alt='' />
        <span>just now</span>
      </div>
        <div className='messageContent'>
          <p>hello hi my name is sourav</p>
          <img src={img} alt='' />
        </div>
    </div>
  );
};
export default Message;
