import { useState, useEffect } from "react";

export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
    </div>
  );
};
