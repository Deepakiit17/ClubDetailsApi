import React, { useState, useEffect } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";

function APIComponent() {
  const clubID = 12;

  useEffect(() => {
    fetch("https://example.com/api1")
      .then((response) => response.json())
      .then((data) => (data.clubID))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {clubID && (
        <>
          <Component1 club_id={clubID} />
          <Component2 club_id={clubID} />
          <Component3 club_id={clubID} />
        </>
      )}
    </div>
  );
}

export default APIComponent;
