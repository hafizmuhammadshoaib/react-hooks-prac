import React, { useMemo, useState } from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import { UserContext } from './UserContext';
import { Index } from './pages';
import { About } from './pages/about';
import { LoaderContext } from './LoaderContext';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const value = useMemo(() => ({ user, setUser }), [user, setUser])
  const loadingValue = useMemo(() => ({ isLoading, setIsLoading }), [isLoading, setIsLoading])
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={value}>
          <LoaderContext.Provider value={loadingValue}>
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
          </LoaderContext.Provider>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
