import React from "react";

const Leftbar = () => {
  return (
    <div className="w-70 h-screen bg-black text-white p-8 py-10 fixed left-0 top-0 z-50 border-r-1 border-gray-600">
      <img src="./src/assets/500px-X_logo_2023_(white).png" alt="" srcset="" className="w-10 h-10 mb-8" />
      
        <div className="flex flex-col gap-4">
          <div className="px-4 py-3 hover:bg-zinc-900 flex gap-4 rounded-2xl">
            <img src="./src/assets/house-64.png" alt="" srcset="" className="w-5 h-5 mb-4" />
            HOME
          </div>
          
          <div className="px-4 py-3 hover:bg-zinc-900 flex gap-4 rounded-2xl">
            <img src="./src/assets/search-3-512.png" alt="" srcset="" className="w-5 h-5 mb-4" />
            SEARCH
          </div>

          <div className="px-4 py-3 hover:bg-zinc-900 flex gap-4 rounded-2xl">
            <img src="./src/assets/bell-2-512.png" alt="" srcset="" className="w-5 h-5 mb-4" />
            NOTIFICATIONS
          </div>

          <div className="px-4 py-3 hover:bg-zinc-900 flex gap-4 rounded-2xl">
            <img src="./src/assets/bookmark-5-512.png" alt="" srcset="" className="w-5 h-5 mb-4" />
            BOOKMARKS
          </div>
          
          <div className="px-4 py-3 hover:bg-zinc-900 flex gap-4 rounded-2xl">
            <img src="./src/assets/user-2-512.png" alt="" srcset="" className="w-5 h-5 mb-4" />
            PROFILE
          </div>
        </div>

    </div>
  );
};

export default Leftbar;
