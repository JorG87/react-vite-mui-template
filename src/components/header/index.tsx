import React, { FC, useState, useEffect } from 'react'
import { AppBar, Toolbar, Tabs, Tab, useScrollTrigger, Box, Avatar } from '@mui/material'
import DarkModeToggle from './DarkModeToggle'
import logoSrc from '../../assets/Logo-Layer-3..png'

interface HeaderProps {
  sections: string[]
}

const Header: FC<HeaderProps> = ({ sections }) => {
  const [value, setValue] = useState(0);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    const element = document.getElementById(sections[newValue].toLowerCase().replace(' ', '-'))
    if (element) {
      const yOffset = -60 // Adjust this value to account for the header height plus 10px
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      let newValue = 0;
      sections.forEach((section, index) => {
        const element = document.getElementById(section.toLowerCase().replace(' ', '-'));
        if (element && window.scrollY >= element.offsetTop - 100) {
          newValue = index;
        }
      });
      setValue(newValue);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections])

  return (
    <AppBar position="fixed" color={trigger ? 'primary' : 'transparent'} elevation={trigger ? 4 : 0}>
      <Toolbar variant="dense">
        <Avatar
          src={logoSrc}
          alt="Logo"
          sx={{
            width: 100,
            height: 50,
            marginRight: 2,
            cursor: 'pointer'
          }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setValue(0)
          }}
        />

        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
        >
          {sections.map((section) => (
            <Tab key={section} label={section} />
          ))}
        </Tabs>
        <Box flexGrow={1} />
        <DarkModeToggle />
      </Toolbar>
    </AppBar>
  )
}

export default Header
