import React from 'react'
import { getNotesById } from '@/server/Actions'
import { EditNote } from '@/components/EditNote'

interface NotesEditProps {
  params: {
    id: string
  }
}

const NotesEdit = async ({params}: NotesEditProps) => {
  const note = await getNotesById(params.id)
  
  return (
    <EditNote note={note} />
  )
}

export default NotesEdit