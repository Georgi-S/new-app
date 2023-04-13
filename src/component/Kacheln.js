import React, { useState, useEffect } from "react";
import "./style/Ninetilecomponent.css";

function Kacheln(props) {
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
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.id === "") {
      return;
    }

    console.log("https://api.opensensemap.org/boxes/" + props.id);
    fetch("https://api.opensensemap.org/boxes/" + props.id)
      .then((response) => response.json())
      .then((data) => setData(data.sensors))
      .catch((error) => console.log(error));
  }, [props]);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  if (data.length === 0) {
    return (
      <div
        className="tile"
        style={{
          backgroundColor: colors[0 % colors.length],
          transform: 0 ? "scale(1.4)" : "scale(1)",
          zIndex: 0 ? 1 : 0,
        }}
      >
        <div className="content">Keine Daten</div>
      </div>
    );
  }

  const tiles = data.map((sensor, index) => {
    const isHovered = index === hoveredIndex;
    const tileStyles = {
      backgroundColor: colors[index % colors.length],
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
        <div className="content">
          <h2>{sensor.title}</h2>
          <p>
            {sensor.lastMeasurement.value} {sensor.unit}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="nine-tile-component">
      <div className="tiles-container">{tiles}</div>
    </div>
  );
}

export default Kacheln;
