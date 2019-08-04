import React from "react";
import './App.css'
function App() {
    return (
        <div className="App">
            <Navbar />
            <BookList />
        </div>
    );
}

function Navbar() {
    return (
        <nav className='Navbar'>
            <h1>something</h1>
            <ul>
                <li>thing1</li>
                <li>thing2</li>
                <li>thing3</li>
            </ul>
        </nav>
    );
}

function BookList() {
    return (
        <ul>
            <li>book1</li>
            <li>book2</li>
            <li>book3</li>
        </ul>
    );
}
export default App;
