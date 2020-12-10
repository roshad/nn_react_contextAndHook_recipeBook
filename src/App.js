import React, { useContext, useState } from "react";
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
          console.log(state.filter((ele) => ele.key != mKey))
          setState([
            ...state,
            <Card
              key={mKey}
              onClick={() => setState(state.filter((ele) => ele.key != mKey))}
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
