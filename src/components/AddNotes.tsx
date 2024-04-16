'use client'
import { Plus } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"
import { addNotes } from "@/server/Actions"

export const AddNotes = () => {
  const [modal, setModal] = useState(false)
  
  const handleAction = (form: FormData) => {
    const title = form.get("title") as string
    const content = form.get("content") as string
    const color = form.get("color") as string

    if(!title || !content || !color) {
      return alert("Fill all fields")
    }

    try {
      addNotes(form)
      setModal(false)
    } catch (error) {
      console.error(error)
    }
  }

  return <>
  <div 
  onClick={() => setModal(true)}
  className="mt-5 mb-10 cursor-pointer bg-slate-800 p-3 rounded-full text-white font-bold">
      <Plus size={26} />
  </div>

    {modal && (
    <div onClick={() => setModal(false)} className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div onClick={e => e.stopPropagation()} className="w-1/2 bg-slate-800 p-5 rounded-lg">
        <h1 className="text-white font-bold text-2xl">Add Notes</h1>
        <form className="mt-5 flex flex-col gap-5" action={handleAction}>
          <input type="text" name="title" placeholder="Title" className="w-full p-2 bg-slate-700 text-white rounded-lg" />
          <textarea placeholder="Description" name="content" className="w-full p-2 bg-slate-700 text-white rounded-lg mt-3"></textarea>
          <div className="flex items-center">
            <span className="text-white text-lg mr-5">color: </span>
            <input type="color" name="color"
            className="w-20 h-10 mt-3 mb-3 cursor-pointer"
            />
          </div>
          <Button type="submit" variant='outline' className="w-40">Add</Button>
        </form>
      </div>
    </div>
    )}
  </>
}