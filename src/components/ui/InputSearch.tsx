import { Search } from "lucide-react"
import { Input } from "./input"

export const InputSearch = () => {
  return <>
    <div className="flex items-center gap-2">
      <Search size={24} className="cursor-pointer" />
      <Input placeholder="Search notes" />
    </div>
  </>
}