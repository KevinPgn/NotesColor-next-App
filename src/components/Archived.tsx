export const Archived = ({notes}: any) => {
  return <>
     {
        notes.map((note: any) => {
          if (note.archived) {
            return (
              <div 
                key={note.id} 
                style={{backgroundColor: note.color}}
                className="flex w-[500px] relative h-[400px] flex-col p-2 border border-gray-200 rounded-lg"
              >
                <h1 className="text-lg font-bold">{note.title}</h1>
                <p>{note.content}</p>
              </div>
            )
          }
          return null;
        })
     }
  </>
}