import React, { createContext } from "react";

export const ThemeContext = createContext();
class ThemeContextProvider extends React.Component {
    state = {
        isLight: false,
        light: {
            background: "grey"            
        },
        dark: { background: "black" ,color:'white'}        
    };
    toggle= ()=>{
        this.setState({isLight:!this.state.isLight})
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state,toggle:this.toggle }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;
