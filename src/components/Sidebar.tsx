import { AddNotes } from "./AddNotes"
import { getNotesColor } from "@/server/Actions"
import { GetColors } from "./GetColors"

export const Sidebar = async () => {
  const colors = await getNotesColor()
  
  return <>
    <div className="w-[100px] fixed pt-2 flex flex-col items-center border-r-2 border-slate-800 h-screen">
      <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer bg-black">
        <div className="w-5 h-5 rounded-full bg-slate-200"></div>
      </div>
    
      <div className="w-full border-b-2 border-slate-500 mt-3 mb-3"></div>

      <AddNotes />
      <GetColors colors={colors} />
    </div>
  </>
}