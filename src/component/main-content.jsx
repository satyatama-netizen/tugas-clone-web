import React from "react";
import { useEffect, useState } from "react";

// import user from '../assets/user.png'
// import search from '../assets/search.svg'
// import gif from '../assets/gif.svg'
// import schedule from '../assets/schedule.svg'
// import location from '../assets/location.svg'
// import emoji from '../assets/happy-face.svg'
// import gallery from '../assets/gallery (1).svg'
// import report from '../assets/flag.svg'
// import poll from '../assets/checklist.svg'

const MainContent = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      <div className="post-content justify-center z-0">
        <div className="post-bar font-bold bg-black p-5 py-3 gap-5 ">
          <div className="post-header flex gap-5 m-4 mb-4 justify-center">
            <img
              src="./src/assets/user.png"
              alt=""
              srcSet=""
              className="w-10 h-10"
            />
            <input
              type="text"
              placeholder="What's happening?"
              className="bg-black outline-none border-b-1"
            />
          </div>

          <div className="post-options flex p-3 gap-5 bg-black justify-center align-items-center">
            <img
              src="./src/assets/gallery (1).svg"
              alt=""
              srcSet=""
              className="w-5 h-5"
            />
            <img
              src="./src/assets/gif.svg"
              alt=""
              srcSet=""
              className="w-5 h-5"
            />
            <img
              src="./src/assets/grok.png"
              alt=""
              srcSet=""
              className="w-5 h-5"
            />
            <img
              src="./src/assets/checklist.svg"
              alt=""
              srcSet=""
              className="w-5 h-5"
            />
            <img
              src="./src/assets/happy-face.svg"
              alt=""
              srcSet=""
              className="w-5 h-5"
            />
            <img
              src="./src/assets/location.svg"
              alt=""
              srcSet=""
              className="w-5 h-5"
            />
            <img
              src="./src/assets/flag.svg"
              alt=""
              srcSet=""
              className="w-5 h-5"
            />
            <button className="bg-blue-500 text-black px-5 py-2 rounded-full text-sm ml-20">
              Post
            </button>
          </div>
        </div>

        <div className="main-content flex flex-wrap gap-5 justify-center bg-black">
          <div>
            {comments.map((comment) => (
              <div  key={comment.id}>
                <div className="border-1 text-center p-25 flex flex-col justify-center">

                <div className="max-w-screen p-5 text-lg-10 ">
                  <h1 >{comment.title}</h1>
                </div>

                <div className="bg-zinc-900 max-w-screen text-3xl">
                  <p>{comment.body}</p>
                </div>

                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MainContent;
