import { useState, useEffect } from "react";

function Animation({ style }) {
  const items = ["Content writer", "JS Developer.", "UI/UX Designer.", "Bootstrap"];
  const [array, setArray] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setArray((prev) => (prev < items.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(intervalId);
  }, [items.length]);

  return <div className={style}>{items[array]}</div>;
}

export default Animation;
