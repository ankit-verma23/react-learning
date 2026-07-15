import React, { useState } from "react";

function Form({ addNote }) {
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const [text, setText] = useState("");
  const textHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addNote({
      heading: input,
      details: text,
    });
    setInput("");
    setText("");
  };

  return (
    <div className="text-white p-5 w-full">
      <h1 className="px-2 mb-2 font-bold text-2xl">Add Notes</h1>
      <form
        className="flex flex-col justify-center content-center"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          className="text-white font-medium border border-1 border-white rounded-xl text-sm outline-white mt-2 mb-5 py-2 px-2"
          type="text"
          placeholder="Enter Heading"
          value={input}
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        <textarea
          className="text-white font-medium border border-1 border-white rounded-xl text-sm outline-white mb-5 min-h-32 overflow-auto resize-y p-2"
          placeholder="Enter Details"
          value={text}
          onChange={(e) => {
            textHandler(e);
          }}
        />
        <button className="bg-white text-black font-bold cursor-pointer p-2 rounded-full">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
