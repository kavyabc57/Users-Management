

import React from 'react';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import AppRouts from './AppRouts';

function App() {
  return (
    <div className="d-flex flex-column">
      <Header />
      <div className="d-flex">
        <Sidebar />
        <main className="content flex-grow-1">
          <AppRouts />
        </main>
      </div>
    </div>
  );
}

export default App;
