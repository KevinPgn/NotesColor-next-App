import React from 'react'
import { getNotes } from '@/server/Actions'
import { Archived } from '@/components/Archived'

const ArchivedList = async () => {
  const notes = await getNotes()
 
  return (
    <Archived notes={notes} />
  )
}

export default ArchivedList