import React, {FC} from 'react';
import './App.css';
import {Sidebar} from "./component/Sidebar/Sidebar";

export const App: FC = () => {
  return (
    <div className="App">
        <Sidebar />
    </div>
  );
}

