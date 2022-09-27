import {createContext, useState} from 'react'

export const ThemeContext = createContext({})

const ChangeTheme = () => {
  const isLight = localStorage.getItem('theme')
  const [theme, setTheme] = useState(isLight);
  const toogleTheme = () => {
    setTheme((e) => (e === "light")? "dark" : "light");
    (isLight === "light")? localStorage.setItem('theme','dark') : localStorage.setItem('theme','light');
  }
  return {
    theme,
    toogleTheme
  }
}

export default ChangeTheme;