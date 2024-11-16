import React from "react";
function Text({ text, style }) {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className={style}>
      {text}
    </div>
  );
}

export default Text;
