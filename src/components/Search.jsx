import React from 'react';

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find a user' />
      </div>
      <div className='userChat'>
        <img src='https://media.istockphoto.com/id/1170154554/photo/young-handsome-business-man-dressed-in-casual-denim-shirt-with-smartwatch-on-wrist-isolated.jpg?s=612x612&w=0&k=20&c=DOZVh06WmLM7Pcuh07Glxtr54d-LfMZX4dxVGhVTELk=' />
        <div className='userChatInfo'>
          <span>Sourav</span>
        </div>
      </div>
    </div>
  );
};
export default Search;
