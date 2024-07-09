import React, { useState } from "react";
import "./App.css";
import Backlog from "./components/Backlog";
import Progress from "./components/Progress";
import Done from "./components/Done";


const App = () => {
  const containerStyle = {
    display: 'flex',
    gap: '150px',
    justifyContent: 'center',

  };

  return (
    <div style={containerStyle}>
        <div>
      <Backlog />
      </div>
      <div>
      <Progress/>
      </div>
      <div>
      <Done/>
      </div>
    </div>
  );
};

export default App;