import React, {  useState } from "react";
import "./App.css";

import { Button, Card } from "antd";

function App() {
  const [state, setState] = useState([]);
  return (
    <div className="App">
      {state}
      <Button
        type="primary"
        onClick={() => {
          const mKey = state.length || 0;

          setState([
            ...state,
            <Card
              key={mKey}
              onClick={() =>
                setState((state) => state.filter((ele) => ele.key != mKey))
              }
            >
              {mKey}
            </Card>,
          ]);
        }}
      >
        Button
      </Button>
    </div>
  );
}

export default App;
