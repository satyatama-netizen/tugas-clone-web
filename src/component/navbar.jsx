import React from "react";

const navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="FyPbar bg-black flex justify-center items-center p-10 gap-50 border-b-1 border-gray-600 z-1 text-5xl">
          <div className="ForYouPage text-white">
            <a href="/">For You</a>
          </div>
          <div className="followingpage text-white">
            <a href="/following">Following</a>
          </div>
        </div>
      </nav>
    </div>
  );
};





export default navbar;
