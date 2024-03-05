import React, { useContext } from 'react';
import Add from '../images/add.png';
import Cam from '../images/camera.png';
import Vid from '../images/video.png';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
        <div className='chatIcons'>
          <img src={Add} alt='' />
          <img src={Cam} alt='' />
          <img src={Vid} alt='' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
export default Chat;
