import React from 'react';
import './App.css';
import Posts from './components/Posts';

function App() {
    return (
        <div className="App">
            <h1 className="text-center">SpaceX Blog</h1>
            <Posts />
        </div>
    );
}

export default App;
