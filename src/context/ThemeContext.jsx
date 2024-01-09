import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{
    const [isDarkTheme, setIsDarkTheme] = useState(true)

    const toggleTheme = ()=>{
        setIsDarkTheme((isDarkTheme)=> !isDarkTheme)
    }

    useEffect(()=>{
        const body = document.body
        body.className = isDarkTheme ? 'dark-theme':''
    })

    return(
        <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeProvider.prototype = {
    children:PropTypes.node.isRequired
}