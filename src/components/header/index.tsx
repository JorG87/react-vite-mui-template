import { AppBar, Avatar, Box, IconButton, Tab, Tabs, Toolbar, Tooltip, useScrollTrigger } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import logoSrc from '../../assets/Logo-Layer-3..png'
import DarkModeToggle from './DarkModeToggle'
import { useLanguage } from '../../contexts/LanguageContext'
import { TranslationKey } from '../../types/translations'
import { useTranslations } from '../../utils/useTranslations'

import { ESFlag, USFlag } from '../flagicons'

interface HeaderProps {
  sections: TranslationKey[]
}

const Header: FC<HeaderProps> = ({ sections }) => {
  const [value, setValue] = useState(0);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  const { language, setLanguage } = useLanguage()
  const { t } = useTranslations()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  const FlagIcon = language === 'en' ? USFlag : ESFlag

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
            <Tab key={section} label={t(section)} />
          ))}
        </Tabs>
        <Box flexGrow={1} />
        <Tooltip title={language === 'en' ? 'Current language: English' : 'Idioma actual: Español'}>
          <IconButton color="inherit" onClick={toggleLanguage} sx={{ padding: 0, mr: 5 }}>
            <FlagIcon width={24} height={24} />
          </IconButton>
        </Tooltip>
        <DarkModeToggle />
      </Toolbar>
    </AppBar>
  )
}

export default Header
