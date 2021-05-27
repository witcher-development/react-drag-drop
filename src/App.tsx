import React from 'react';

import './App.scss';

import { LibraryComponent } from './features/Library';
import { WorkspaceComponent } from './features/Workspace';

function App() {
  return (
    <div className="app">
      <LibraryComponent />
      <WorkspaceComponent />
    </div>
  )
}

export default App;
