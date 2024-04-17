import { Button } from "../button"
import { archivedNotes } from "@/server/Actions"

export const ButtonArchived = ({id}: any) => {
  return <>
    <Button 
    onClick={() => archivedNotes(id)}
    className="bg-yellow-500 text-white">
      Archived
    </Button>
  </>
}