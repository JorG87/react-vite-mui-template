import { FC } from 'react'
import { AppBar, Toolbar } from '@mui/material'

import DarkModeToggle from './DarkModeToggle.tsx'

const Header: FC = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar variant='dense'>
        <DarkModeToggle />
      </Toolbar>
    </AppBar>
  )
}

export default Header
