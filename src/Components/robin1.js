import React from "react";
import { useState } from "react";

function Robin1(props) {
  const [state, setState] = useState(false);

  if (state) {
    return (
      <div>
        <h1>logged in</h1>

        <button onClick={() => setState(!state)}> login</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>logged out</h1>

        <button onClick={() => setState(!state)}> login</button>
      </div>
    );
  }
}

function Robin2(props) {
  return (
    <div>
      <Robin1 />
      <p>jgeruagfu</p>
    </div>
  );
}

export default Robin2;
