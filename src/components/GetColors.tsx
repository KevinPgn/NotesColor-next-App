"use client"

import { useNoteStore } from "@/lib/store";
import { useEffect } from "react";

export const GetColors = ({ colors }: any) => {
  const setColorZustand = useNoteStore((state) => state.setColorZustand)
  
  useEffect(() => {
    setColorZustand(colors)
  }, [colors])
  
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