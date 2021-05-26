import React from 'react';

import './App.scss';

import { LibraryComponent } from './features/Library';
import { PipeComponent } from './features/Pipe';

function App() {
  return (
    <div className="app">
      <LibraryComponent />
      <PipeComponent />
    </div>
  )
}

export default App;
