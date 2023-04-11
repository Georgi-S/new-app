import React, { useEffect, useState } from "react";

function Call() {
  const [sensor, setSensor] = useState([]);

  useEffect(() => {
    fetch("https://api.opensensemap.org/boxes/5e9e9b7b45f937001c50c332")
      .then((response) => response.json())
      .then((sensor) => setSensor(sensor));
  }, []);

  return (
    <div>
      <div key={sensor.id}>{sensor.name}</div>
    </div>
  );
}

export default Call;
