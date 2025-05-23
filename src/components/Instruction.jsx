import React from "react";

function Instruction() {
  return (
    <div className="instruction">
      <ul>
        <li>Enter any five-letter word.</li>
        <li>
          <strong>Feedback:</strong>
          <ul>
            <li style={{ color: "green" }}>Green = correct spot</li>
            <li style={{ color: "yellow" }}>yellow = wrong spot</li>
            <li style={{ color: "red" }}>red = not in word</li>
          </ul>
        </li>
        <li>Use hint feedbacks to eliminate or reposition Your letters.</li>
        <li>Guess Again a new word based on your analysis.</li>
      </ul>
    </div>
  );
}

export default Instruction;
