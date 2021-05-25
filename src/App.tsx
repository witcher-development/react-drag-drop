import React from 'react';
import { useDrag } from 'react-dnd'

import './App.scss';

import { LibraryComponent } from './features/Library';

function App() {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: 'test',
      item: { text: 'text' },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    []
  )
  return (
    <div className="app">
      {/*<div ref={dragRef} style={{ opacity }}>*/}
      {/*</div>*/}
      <LibraryComponent />
    </div>
  )
}

export default App;
