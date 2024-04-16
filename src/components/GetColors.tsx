"use client"
export const GetColors = ({ colors }: any) => {

  return (
    <>
      {colors.map((color: any, index: number) => (
        <div
        key={index}
        onClick={() => console.log(color.color)}
        className={`w-6 h-6 rounded-full cursor-pointer mb-2`}
        style={{ backgroundColor: color.color }}
      ></div>
      ))}
    </>
  );
}