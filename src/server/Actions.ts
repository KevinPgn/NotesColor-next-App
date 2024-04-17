"use server"
import { revalidatePath } from "next/cache";
import {prisma} from "../lib/db";
import {z} from "zod";
import { redirect } from "next/navigation";

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
      createdAt: true,
      archived: true
    }
  })

  return notes
}

export async function getNotesById(id: string){
  const note = await prisma.notes.findUnique({
    where: {
      id
    },
    select: {
      id: true,
      title: true,
      content: true,
      color: true,
      createdAt: true
    }
  })

  return note
}

/* edit section */

const EditNoteSchema = z.object({
  title: z.string(),
  content: z.string(),
})

export async function updateNotes(id: string, formData: FormData){
  const notes = EditNoteSchema.safeParse(Object.fromEntries(formData.entries()))

  if(!notes.success){
    throw new Error("Invalid data")
  }

  const note = notes.data

  await prisma.notes.update({
    where: {
      id
    },
    data: {
      title: note.title,
      content: note.content,
    }
  })

  revalidatePath("/")
  redirect("/")
}

/* archived */

export async function archivedNotes(id: string){
  await prisma.notes.update({
    where: {
      id
    },
    data: {
      archived: true
    }
  })

  revalidatePath("/")
  redirect("/")
}