import { NoteListDB } from "@/post/NoteListDB"
import { Navbar } from "./Navbar"

export const Main = () => {
  return <>
  <div className="flex ml-20 w-full flex-col">
    <Navbar />
    <NoteListDB />
  </div>
  </>
}