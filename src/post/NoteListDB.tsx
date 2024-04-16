import { NotesList } from "@/components/NotesList"
import { getNotes } from "@/server/Actions"

export const NoteListDB = async () => {
  const notes = await getNotes()
  
  return <>
    <NotesList notes={notes} />
  </>
}