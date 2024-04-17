"use client"
import { useNoteStore } from "@/lib/store"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select"

export const SelectExistingColors = ({setColorDefault}: any) => {
  const colorsZustand = useNoteStore((state) => state.colorsZustand).map((color:any) => color.color).filter((value, index, self) => self.indexOf(value) === index)

  return <>
    <Select
    onValueChange={(value) => setColorDefault(value)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select color" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Color</SelectLabel>
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