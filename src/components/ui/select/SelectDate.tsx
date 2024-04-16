import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select"

export const SelectDate = () => {
  return <>
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter by Date" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Date</SelectLabel>
          <SelectItem value="today">Today</SelectItem>
          <SelectItem value="yesterday">Yesterday</SelectItem>
          <SelectItem value="last7days">Last 7 days</SelectItem>
          <SelectItem value="last30days">Last 30 days</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </>
}