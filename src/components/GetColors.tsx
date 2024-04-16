"use client"
export const GetColors = ({ colors }: any) => {
  //cree un tableau avec les couleurs, les couleurs qui sont dupliquées sont supprimées pour donner un tableau avec des couleurs uniques

  const colorsTab = colors.map((color: any) => color.color)
  .filter((value: any, index: any, self: any) => self.indexOf(value) === index);
  
  return (
    <>
      {colorsTab.map((color: any, index: number) => (
        <div
        key={index}
        onClick={() => console.log(color)}
        className={`w-6 h-6 rounded-full cursor-pointer mb-3`}
        style={{ backgroundColor: color }}
      ></div>
      ))}
    </>
  );
}