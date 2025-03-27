import { useRef, useEffect, useState } from 'react';

function RefExample() {
  // 1. Creating a ref for DOM access
  const inputRef = useRef(null);
  
  // 2. Creating a ref for tracking mutable values
  const renderCount = useRef(0);
  const prevName = useRef('');
  
  const [name, setName] = useState('');

  // Focus the input on component mount
  useEffect(() => {
    inputRef.current.focus();
    console.log('Input focused');
  }, []);

  // Track render count (won't cause re-renders)
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  // Track previous name
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h2>useRef Example</h2>
      
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type something..."
      />
      
      <p>Current value: {name}</p>
      <p>Previous value: {prevName.current}</p>
      <p>Component has rendered {renderCount.current} times</p>
      
      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>
    </div>
  );
}

export default RefExample;