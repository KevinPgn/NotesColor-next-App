"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select"
import { useNoteStore } from "@/lib/store"

export const SelectColor = () => {
  const colorsZustand = useNoteStore((state) => state.colorsZustand).map((color:any) => color.color).filter((value, index, self) => self.indexOf(value) === index)
  const filterByColors = useNoteStore((state) => state.filterByColors)
  const setFilterByColors = useNoteStore((state) => state.setFilterByColors)
  
  return <>
    <Select
      onValueChange={(value) => setFilterByColors(value)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter by color" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Color</SelectLabel>
          <SelectItem className="cursor-pointer mb-2" value="no filter" key="all">
            No filter
          </SelectItem>
          {colorsZustand.map((color: any) => (
            <SelectItem className="cursor-pointer mb-2" style={{backgroundColor: color}}
              key={color}
              value={color}
            >
              {color}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </>
}