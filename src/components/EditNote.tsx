"use client"
import { useNoteStore } from "@/lib/store"
import { updateNotes } from "@/server/Actions"

export const EditNote = ({note}: any) => {  
  const colorsZustand = useNoteStore((state) => state.colorsZustand).map((color: any) => color.color).filter((color: any, index: any, self: any) => self.indexOf(color) === index)

  console.log(colorsZustand)


  const handleUpdateAction = (form: FormData) => {
    const title = form.get("title") as string
    const content = form.get("content") as string

    if (!title || !content) {
      alert("Please fill in all fields")
      return
    }

    try{
      updateNotes(note.id, form)
      alert("Note updated")
    } catch (error) {
      alert("An error occurred")
    }
  }
  
  return <>
      {
        note ? (
          <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="text-2xl font-bold">Edit Note</h1>
            <form action={handleUpdateAction} className="flex flex-col">
              <input type="text" defaultValue={note.title} name="title" className="border border-gray-200 p-2 rounded-lg mt-5" />
              <textarea defaultValue={note.content} name="content" className="border border-gray-200 p-2 rounded-lg mt-5"></textarea>
              <button className="bg-blue-500 text-white w-40 p-2 rounded-lg mt-5">Save</button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="text-2xl font-bold">Note not found</h1>
          </div>
        )
      }
  </>
}