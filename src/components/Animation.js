import { useState } from "react";
function Animation({ style }) {
  const items = ["Content writer", "JS Developer.", "UI/UX Designer."];
  const [array, setArray] = useState(0);
  const lenghtData = array < items.length - 1;
  let data = items[array];
  setInterval(() => {
    lenghtData ? setArray(array + 1) : setArray(0);
  }, 4000);
  return <div className={style}>{data}</div>;
}

export default Animation;
