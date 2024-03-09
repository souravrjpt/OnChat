import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContextProvider } from '../context/AuthContext';

const VideoPage = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const handlejoin = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);
  return (
    <div className='videopage'>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type='text'
        placeholder='Enter the key'
      />
      <button onClick={handlejoin}>Join</button>
    </div>
  );
};
export default VideoPage;
