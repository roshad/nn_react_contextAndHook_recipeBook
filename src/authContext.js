import React,{createContext} from 'react'

export const AuthContext = createContext()
class AuthContextProvider extends React.Component {
    state = {
        auth:false
    }
    toggle= ()=>{
        this.setState({auth:!this.state.auth})
    }
    render() {
        return (
            <AuthContext.Provider value={{...this.state,toggle:this.toggle}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider;
