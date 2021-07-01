import React, { useState } from "react";
import "../App.css";
import Modal from "react-modal";

function Modalview() {
  const [state, setState] = useState(true);
  return (
    <div>
      {/* <button onClick={() => setState(true)}>open modal</button> */}
      <Modal
        isOpen={state}
        onRequestClose={() => setState(false)}
        style={{ overlay: { backgroundColor: "grey" } }}
      >
        <h2>modal</h2>
        <p>modal body</p>
        <button onClick={() => setState(false)}>close</button>
      </Modal>
    </div>
  );
}

export default Modalview;
