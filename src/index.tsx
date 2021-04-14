import React from 'react'
import { ThemeProvider } from 'react-jss'

import Props from './types/Props'

import Yamde from './Yamde'
import { lightTheme } from './themes/light'
import { darkTheme } from './themes/dark'

const YamdeComp = ({ value, handler, theme }: Props) => {
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Yamde value={value} handler={handler} />
    </ThemeProvider>
  )
}

export default YamdeComp