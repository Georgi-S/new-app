import React, { useState } from "react";

function NineTileComponent() {
  const colors = [
    "#B5EAD7",
    "#F7E1C5",
    "#F4AFA9",
    "#CBB4D4",
    "#F8ED8B",
    "#7FB7BE",
    "#C7CEEA",
    "#F1B7B0",
    "#8DB897",
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const tiles = colors.map((color, index) => {
    const isHovered = index === hoveredIndex;
    const tileStyles = {
      backgroundColor: color,
      transform: isHovered ? "scale(1.4)" : "scale(1)",
      zIndex: isHovered ? 1 : 0,
    };
    return (
      <div
        className="tile"
        key={index}
        style={tileStyles}
        onMouseEnter={() => handleHover(index)}
        onMouseLeave={() => handleHover(null)}
      >
        <div className="content">Kachel {index + 1}</div>
      </div>
    );
  });

  return (
    <div className="nine-tile-component">
      <div className="tiles-container">{tiles}</div>
      <style jsx>{`
        .nine-tile-component {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .tiles-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 15px;
        }
        .tile {
          width: 300px;
          height: 200px;
          background-color: #ccc;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          transition: all 0.5s ease-out;
          cursor: pointer;
        }
        .content {
          font-size: 20px;
        }
        @media screen and (max-width: 768px) {
          .tiles-container {
            transform: scale(0.8);
          }
        }
      `}</style>
    </div>
  );
}

export default NineTileComponent;
