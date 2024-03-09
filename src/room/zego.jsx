import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Roompage = () => {
  const { roomId } = useParams();

  const meeting = async (element) => {
    const appId = 937444212;
    const serverSecret = '5d58791e6292f74c9b9bfea0961fdff3';
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      'Sourav'
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks:[{
        name:'copy link',
        url:`http//localhost:5173/room/${roomId}`
      }],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
    });
  };
  return (
    <div>
      <div ref={meeting}/>
    </div>
  );
};

export default Roompage;
