import React, { createElement as element } from 'react';

function App() {
  // console.log() //!return React.createElement('h1', {}, 'Hello, Igor' )
  return element('div', { className: 'container' }, [
    element('h1', { className: 'font-bold', key: 1 }, 'Hello, Igor'),
    element(
      'button',
      {
        className: 'py-2 px-4 border',
        key: 2,
        onClick: () => console.log('Cliked'),
      },
      'Click me'
    ),
  ]);
}

export default App;
