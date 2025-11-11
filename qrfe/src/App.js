import React, { useState } from 'react';
import './App.css';

// The main component that renders the counter application.
const App = () => {
  // Initialize state for the counter value.
  const [count, setCount] = useState(0);

  // Handler functions for counter operations
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <div className="app-root">
      <div className="card">
        <h1 className="title">12 out of 12 baby ... send me awaaayy !!!</h1>

        {/* Display Area */}
        <div className="display-area">
          <p className="label">Current Value</p>
          <p className="value">{count}</p>
        </div>

        {/* Control Buttons (Add and Subtract) */}
        <div className="controls">
          <button
            onClick={decrement}
            className="btn btn-decrement"
            aria-label="Decrement count"
            disabled={count === 0}
          >
            Subtract
          </button>
          <button
            onClick={increment}
            className="btn btn-increment"
            aria-label="Increment count"
          >
            Add
          </button>
        </div>

        {/* Reset Button */}
        <button
          onClick={reset}
          disabled={count === 0}
          className={`reset-btn ${count === 0 ? 'is-disabled' : ''}`}
          aria-label="Reset count to zero"
        >
          Reset to Zero
        </button>
      </div>
    </div>
  );
};

export default App;