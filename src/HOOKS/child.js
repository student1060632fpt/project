import React, { memo } from "react";

function Child() {
  console.log("Child");
  return (
    <div>
      <h3>* Child Component</h3>
    </div>
  );
}
export default memo(Child);
