import { useState } from "react";

const Demo = () => {
  const [text, setText] = useState(0);
  return (
    <div className="border rahega">
      <div className="input rahega">
        <input
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Demo;
