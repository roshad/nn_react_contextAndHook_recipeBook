import React, { useContext,useState } from "react";
import "./App.css";

import { Button, Card } from "antd";
import ThemeContextProvider, { ThemeContext } from "./context";
import AuthContextProvider, { AuthContext } from "./authContext";
import BookListContextProvider, { BookListContext } from "./bookListContext";
function App() {
   const [state,setState]= useState([])
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <BookListContextProvider>
            <BookList />
          </BookListContextProvider>
          <Toggle />
        </ThemeContextProvider>
      </AuthContextProvider>
        {
            state
        }
      <Button type="primary" onClick={()=>{setState([...state,<Card>good</Card>])}}>
        Button
      </Button>
    </div>
  );
}
function mCard() {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      Some Text
    </Card>
  );
}
function Toggle() {
  const { auth, toggle: authToggle } = useContext(AuthContext);
  const { toggle } = useContext(ThemeContext);

  return (
    <div>
      <input type="checkbox" name="themeToggle" onClick={toggle} />
      <label onClick={authToggle} htmlFor="themeToggle">
        {auth ? "in" : "out"}
      </label>
    </div>
  );
}
class Navbar extends React.Component {
  static contextType = ThemeContext;
  render() {
    const { isLight, light, dark } = this.context;
    const style = isLight ? light : dark;
    return (
      <nav className="Navbar" style={{ ...style }}>
        <h1>ABC</h1>
        <ul>
          <li>thing1</li>
          <li>thing2</li>
          <li>thing3</li>
        </ul>
      </nav>
    );
  }
}

function BookList() {
  const { isLight, light, dark } = useContext(ThemeContext);
  const { booklist } = useContext(BookListContext);

  const style = isLight ? light : dark;
  return (
    <ul className="booklist" style={{ ...style }}>
      {booklist.map((obj) => (
        <li>{obj.title}</li>
      ))}
    </ul>
  );
}

export default App;
