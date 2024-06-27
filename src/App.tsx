import { useEffect, useState } from 'react'
import { Box, Container, styled } from '@mui/material'
import Header from './components/header'
import './App.css'
import Copyright from './components/copyright'
import AboutUs from './components/aboutus'
import BusinessHours from './components/businesshours'
import Pictures from './components/pictures'
import Reviews from './components/reviews'
import ServiceArea from './components/servicearea'
import ReturnToTop from './components/returntotop'
import { MainProps } from './common/entities'
import { LanguageProvider } from './contexts/LanguageContext'
import { TranslationKey } from './types/translations'

const sections: TranslationKey[] = ['ABOUT_US', 'SERVICE_AREA', 'PICTURES', 'REVIEWS', 'BUSINESS_HOURS']

const App: React.FC = () => {
  const [state, setState] = useState<MainProps['state']>(null)

  useEffect(() => {
    if (!state) {
      fetch('/env.json')
        .then(response => response.json())
        .then(data => setState(data))
        .catch(error => console.error('Error loading env.json:', error))
    }
  }, [])

  return (
    <LanguageProvider>
      <Root>
        <Header sections={sections} />
        <Container maxWidth="lg">
          <Box mt={8}>
            <Box id="about_us"><AboutUs state={state} /></Box>
            <Box id="service_area"><ServiceArea /></Box>
            <Box id="pictures"><Pictures /></Box>
            <Box id="reviews"><Reviews state={state} /></Box>
            <Box id="business_hours"><BusinessHours state={state} /></Box>
            <Copyright />
          </Box>
          <ReturnToTop />
        </Container>
      </Root>
    </LanguageProvider>
  )
}

const Root = styled('div')`
  padding: 1% 2% 10vh 2%;
  width: 100%;
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    text-decoration: none;
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
`

export default App
