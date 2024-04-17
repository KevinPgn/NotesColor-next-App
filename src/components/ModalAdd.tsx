"use client"
import { addNotes } from "@/server/Actions"
import { Button } from "./ui/button"
import { useNoteStore } from "@/lib/store"
import { SelectExistingColors } from "./ui/select/SelectExistingColors"
import { useState } from "react"

export const ModalAdd = () => {
  const setModalAdd = useNoteStore((state) => state.setModalAdd)
  const modalAdd = useNoteStore((state) => state.modalAdd)
  const [colorDefault, setColorDefault] = useState('')

  const handleAction = (form: FormData) => {
    const title = form.get("title") as string
    const content = form.get("content") as string
    const color = form.get("color") as string

    if(!title || !content || !color) {
      return alert("Fill all fields")
    }

    try {
      if (colorDefault !== "") {
        form.set("color", colorDefault)
      }
      addNotes(form)
      setModalAdd(false)
    } catch (error) {
      console.error(error)
    }
  }

  return <>
     {modalAdd && (
      <div onClick={() => setModalAdd(false)} className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div onClick={e => e.stopPropagation()} className="w-1/2 bg-slate-800 p-5 rounded-lg">
        <h1 className="text-white font-bold text-2xl">Add Notes</h1>
        <form className="mt-5 flex flex-col gap-5" action={handleAction}>
          <input type="text" name="title" placeholder="Title" className="w-full p-2 bg-slate-700 text-white rounded-lg" />
          <textarea placeholder="Description" name="content" className="w-full p-2 bg-slate-700 text-white rounded-lg mt-3"></textarea>
          <div className="flex items-center gap-3">
            <span className="text-white text-lg mr-5">color: </span>
            <input type="color" name="color"
            className="w-20 h-10 mt-3 mb-3 cursor-pointer"
            />

            <SelectExistingColors setColorDefault={setColorDefault} />
          </div>
          <Button type="submit" variant='outline' className="w-40">Add</Button>
        </form>
      </div>
    </div>
    )}
  </>
}