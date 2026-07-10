import React from "react";

function Card({username, btnText="Know More"}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-80 bg-gray-800 rounded-xl overflow-hidden shadow-lg">
        <img
          src="https://wallpapercave.com/wp/wp9425207.jpg"
          alt="Attack on Titan"
          className="w-full h-52 object-cover"
        />

        <div className="p-4">
          <h2 className="text-white text-2xl font-bold">{username}</h2>

          <p className="text-gray-400 text-sm mt-2">
            Humanity fights for survival against gigantic Titans behind massive
            walls.
          </p>

          <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
