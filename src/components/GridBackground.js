// src/components/GridBackground.js
import React from "react";

function GridBackground({ children }) {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-white">
      {/* Grid background */}
      <div
        className="
          absolute inset-0 -z-10
          [background-size:40px_40px]
          [background-image:linear-gradient(to_right,black_1px,transparent_1px),
                             linear-gradient(to_bottom,black_1px,transparent_1px)]
        "
      />

      {/* Portfolio content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

export default GridBackground;
