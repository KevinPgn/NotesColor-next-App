'use client'
import { useNoteStore } from "@/lib/store"
import { Plus } from "lucide-react"

export const AddNotes = () => {  
  const setModalAdd = useNoteStore((state) => state.setModalAdd)


  return <>
  <div 
  onClick={() => setModalAdd(true)}
  className="mt-5 mb-10 cursor-pointer bg-slate-800 p-3 rounded-full text-white font-bold">
  <Plus size={26} />
  </div>
    
  </>
}