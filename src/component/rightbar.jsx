import React from 'react'

const rightbar = () => {
    return (
    <div>
        <div className="w-70 h-screen bg-black text-white p-8 py-10 fixed right-0 top-0 z-49 border-l-1 border-gray-600 gap-5">
            <div className="subricribtionbox bg-zinc-900 p-8 rounded-2xl">
                <h2 className="font-bold text-lg mb-4">Subscribe to Premium</h2>
                <p className="text-sm mb-4">Get access to exclusive features and content by subscribing to our premium plan.</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 mt-5">Subscribe Now</button>
            </div>

            <div className="suggestedaccounts bg-zinc-900 p-8 mt-5 rounded-2xl">
                <h2 className="font-bold text-lg mb-4">SUGGESTED ACCOUNTS</h2>
                <ul className="list-disc list-inside">
                    <li>@john_doe</li>
                    <li>@jane_smith</li>
                    <li>@tech_guru</li>
                    <li>@travel_explorer</li>
                </ul>
            </div>

            <div className="trendingtopics bg-zinc-900 p-8 mt-5 rounded-2xl">
                <h2 className="font-bold text-lg mb-4">TRENDING TOPICS</h2>
                <ul className="list-disc list-inside">
                    <li>#ReactJS</li>
                    <li>#JavaScript</li>
                    <li>#Programming</li>
                    <li>#TechNews</li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default rightbar