import React, { useState, useEffect, useCallback, useMemo } from "react";
import Child from "./child";

export default function HOOKS() {
  //   Tham so 1 là state, tham số 2 là setState tương đương với bên class
  const [number, setNumber] = useState(0);

  const handleTangSo = () => {
    setNumber(number + 1);
  };

  useEffect(() => {
    // Tuong duong componentDidMount ben class component, tham số thứ 2 nhận vào mảng rỗng []
    console.log("useEffect - componentDidMount");
  });

  useEffect(() => {
    // Tuong duong componentDidUpdate ben class component, tham số thứ 2 nhận vào state thay thay đổi
    console.log("useEffect - update");
  }, [number]);

  useEffect(() => {
    console.log("useEffect - componentWillUnmount");
    let interval = setInterval(() => {
      console.log("Hello");
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const showNumber = () => {
    console.log("showNumber");
  };

  const showNumberCallback = useCallback(showNumber, []);

  const numberUp = () => {
    let i = 0;
    while (i < 1000) i++;
    console.log(i);
    return i;
  };

  const memoNumberUp = useMemo(() => numberUp(), []);

  return (
    <div>
      <h3>HOOKS</h3>
      <h3>Number: {number}</h3>
      <button className="btn btn-success" onClick={handleTangSo}>
        Tăng số
      </button>
      <Child showNumber={showNumberCallback} />
      <h3>NumberUp: {memoNumberUp}</h3>
    </div>
  );
}
