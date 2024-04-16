import { NoteListDB } from "@/post/NoteListDB"
import { Navbar } from "./Navbar"
import { ModalAdd } from "./ModalAdd"

export const Main = () => {
  return <>
  <div className="flex ml-20 w-full flex-col">
    <Navbar />
    <NoteListDB />
    <ModalAdd />
  </div>
  </>
}