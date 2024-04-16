"use client"
import { Edit } from "lucide-react"

export const NotesList = ({notes}: any) => {
  console.log(notes)
  return <>
    <div className="flex flex-wrap gap-10 justify-center p-3">
      {notes.map((note: any) => (
        <div key={note.id} 
        style={{backgroundColor: note.color}}
        className="flex w-[500px] h-[400px] flex-col p-2 border border-gray-200 rounded-lg">
          <h1 className="text-lg font-bold">{note.title}</h1>
          <p>{note.content}</p>

          <div className="flex w-full items-center justify-between p-2">
            {note.createdAt.toLocaleString()}
            <Edit className="cursor-pointer" size={24} />
          </div>
        </div>
      ))}
    </div>
  </>
}