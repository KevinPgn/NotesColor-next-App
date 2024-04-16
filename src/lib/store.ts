import {create} from "zustand"

interface NoteStore {
  modalAdd: boolean
  filterByColors: string
  colorsZustand: string[]
  setColorZustand: (value: string[]) => void
  setModalAdd: (value: boolean) => void
  setFilterByColors: (value: string) => void
}

export const useNoteStore = create<NoteStore>((set) => ({
  modalAdd: false,
  filterByColors: "",
  colorsZustand: [],
  setModalAdd: (value) => set({modalAdd: value}),
  setFilterByColors: (value) => set({filterByColors: value}),
  setColorZustand: (value) => set({colorsZustand: value})
}))