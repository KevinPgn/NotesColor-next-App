import {create} from "zustand"

interface NoteStore {
  modalAdd: boolean
  setModalAdd: (value: boolean) => void
}

export const useNoteStore = create<NoteStore>((set) => ({
  modalAdd: false,
  setModalAdd: (value) => set({modalAdd: value}),
}))