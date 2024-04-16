"use client"
import { useNoteStore } from "@/lib/store"
import { Edit } from "lucide-react"

export const NotesList = ({notes}: any) => {
  const filterByColors = useNoteStore((state) => state.filterByColors)

  if (filterByColors && filterByColors !== "no filter") {
    notes = notes.filter((note: any) => note.color === filterByColors)
  }

  return <>
    <div className="flex relative flex-wrap mt-10 gap-10 justify-center p-3">
      {notes.map((note: any) => (
        <div 
        key={note.id} 
        onClick={() => console.log(note)}
        style={{backgroundColor: note.color}}
        className="flex w-[500px] relative h-[400px] flex-col p-2 border border-gray-200 rounded-lg">
          <h1 className="text-lg font-bold">{note.title}</h1>
          <p>{note.content}</p>

          <div className="flex absolute bottom-0 w-full items-center justify-between p-5">
            {note.createdAt.toLocaleString()}
            <Edit className="cursor-pointer" size={24} />
          </div>
        </div>
      ))}
    </div>
  </>
}