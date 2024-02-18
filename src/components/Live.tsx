import React, { useCallback } from "react";
import LiveCursor from "./cursor/LiveCursor";
import { useMyPresence, useOthers } from "../../liveblocks.config";

const Live = () => {
  const others = useOthers();
  const [{ cursor }, updateMyPresence] = useMyPresence() as any;

  //update the cursor position when the user moves the mouse
  const handlePointerMove = useCallback((event: React.PointerEvent) => {
    event.preventDefault();

    //calculating this if only user is on the canvas area (Where editing is allowed)
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    updateMyPresence({ cursor: { x, y } });
  }, []);

  const handlePointerLeave = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    updateMyPresence({ cursor: null, message: null });
  }, []);

  const handlePointerDown = useCallback((event: React.PointerEvent) => {
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
    updateMyPresence({ cursor: { x, y } });
  }, []);
  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className=" h-screen text-center flex w-full justify-center items-center"
    >
      <h1 className=" text-2xl text-white">Sigma - The figma Clone</h1>;
      <LiveCursor others={others} />
    </div>
  );
};

export default Live;
