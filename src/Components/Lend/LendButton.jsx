import React from "react";

const LendButton = ({ name, wide, id }) => {
  return (
    <div className={id}>
      <button style={{ width: `${wide}px` }}>{name}</button>
    </div>
  );
};

export default LendButton;
