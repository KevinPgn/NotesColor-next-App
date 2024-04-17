import { Edit } from "lucide-react"
import Link from "next/link"
import { InputSearch } from "./ui/InputSearch"
import { SelectColor } from "./ui/select/SelectColor"
import { SelectDate } from "./ui/select/SelectDate"

export const Navbar = () => {
  return <>
    <header className="w-full h-16 p-2 pl-16 pr-16">
      <nav className="h-full flex items-center justify-between">
        <h1 className="flex items-center gap-1 text-xl font-bold"><Edit size={30}/> Notes</h1>

        <div className="flex items-center gap-5">
          <Link href="/">Home</Link>
          <SelectColor />
          <SelectDate />
          <Link href="/archived">Archived</Link>
        </div>
        
        <InputSearch />
      </nav>
    </header>
  </>
}