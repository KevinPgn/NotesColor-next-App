import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select"

export const SelectColor = () => {
  return <>
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter by color" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Color</SelectLabel>
          <SelectItem value="red">Red</SelectItem>
          <SelectItem value="blue">Blue</SelectItem>
          <SelectItem value="green">Green</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </>
}