import { useState } from "react"
import Form from "./components/Form"
import Notes from "./components/Notes"

function App() {

  const [notes, setNotes] = useState([])
  const addNote = (note) => {
    setNotes((prev) => [...prev, note])
  }

  return (
    <div className="h-screen w-full bg-black flex p-2 gap-2">
      <div className="w-1/2">
        <Form addNote={addNote}/>
      </div>
      <div className="w-1/2 flex flex-wrap overflow-auto gap-2 p-2">
        {
          notes.map((note, index) => (
            <Notes 
              key={index}
              heading={note.heading}
              details={note.details}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
