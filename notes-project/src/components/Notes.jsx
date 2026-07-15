import React from "react";

function Notes({heading, details}) {
    
  return (
      <div className="bg-white h-70 w-50 rounded-2xl flex flex-col">
        <h1 className="font-medium p-2 text-xl text-center border-b-1 ">{heading}</h1>
        <div className="h-55 rounded-2xl m-2 p-2 text-xs font-medium overflow-auto">
            <p>
                {details}
            </p>
        </div>
      </div>
  );
}

export default Notes;
