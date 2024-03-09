import React, { useContext, useState } from 'react';
import Add from '../images/add.png';
import Cam from '../images/camera.png';
import Vid from '../images/video.png';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';
import { Link } from 'react-router-dom';
import { LiveStreamingMode } from '@zegocloud/zego-uikit-prebuilt';

const Chat = () => {
  const [vid, setVid] = useState('');

  const { data } = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
        <div className='chatIcons'>
          <img src={Add} alt='' />
          <img src={Cam} alt='' />
          <Link to="/videopage">
            <img src={Vid} />
          </Link>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
export default Chat;
