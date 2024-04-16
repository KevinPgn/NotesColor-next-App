"use server"
import { revalidatePath } from "next/cache";
import {prisma} from "../lib/db";
import {z} from "zod";

const NoteSchema = z.object({
    title: z.string(),
    content: z.string(),
    color: z.string()
})

export async function addNotes(formData: FormData){
  const notes = NoteSchema.safeParse(Object.fromEntries(formData.entries()))

  if(!notes.success){
    throw new Error("Invalid data")
  }

  const note = notes.data
  

  await prisma.notes.create({
    data: {
      title: note.title,
      content: note.content,
      color: note.color
    }
  })

  revalidatePath("/")
}

export async function getNotesColor(){
  const colors = await prisma.notes.findMany({
    select: {
      color: true
    }
  })

  return colors
}

export async function getNotes(){
  const notes = await prisma.notes.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      color: true,
      createdAt: true
    }
  })

  return notes
}