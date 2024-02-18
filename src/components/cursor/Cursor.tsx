import React from "react";
import CursorSVG from "../../../public/assets/CursorSVG";
interface CursorProps {
  color: string;
  x: number;
  y: number;
  message: string;
}
const Cursor = ({ color, x, y, message }: CursorProps) => {
  return <div
  className="pointer-events-none absolute top-0 left-0"
  style={{
    transform: `translate(${x}px, ${y}px)`, // translate the cursor to the x and y position of the user
  }}
  >
   <CursorSVG color={color} />
   {/* TODO: Add message to the cursor */}
  </div>;
};

export default Cursor;
