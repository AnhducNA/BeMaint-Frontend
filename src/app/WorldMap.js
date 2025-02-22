"use client";

// @ts-ignore
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world.js";
import { useEffect } from "react";

export default function WorldMap() {
  useEffect(() => {
    new jsVectorMap({
      selector: "#map",
      map: "world",
    });
  }, []);

  return (
    <div className="h-[500px] bg-gray-100">
      <div id={"map"}></div>
    </div>
  );
}
