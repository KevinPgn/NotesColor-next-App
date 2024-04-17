"use client"
import { Search } from "lucide-react"
import { Input } from "./input"
import { useNoteStore } from "@/lib/store"

export const InputSearch = () => {
  const search = useNoteStore(state => state.searchFilter)
  const setSearch = useNoteStore(state => state.setSearchFilter)
  
  return <>
    <div className="flex items-center gap-2">
      <Search size={24} className="cursor-pointer" />
      <Input placeholder="Search notes" value={search} onChange={e => setSearch(e.target.value)}/>
    </div>
  </>
}