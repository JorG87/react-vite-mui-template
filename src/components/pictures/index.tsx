import React, { Suspense } from 'react'
import { Typography, Paper, Box } from '@mui/material'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useTranslations } from '../../utils/useTranslations'
import Loading from '../loading'
import ImageSlider from '../imageslider'

export interface Photo {
  img: string
  title: string
}

const Pictures: React.FC = () => {
  const { t } = useTranslations()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <Paper elevation={3} sx={{ p: 3, my: 2 }}>
      <Typography variant="h4" gutterBottom>{t('PICTURES')}</Typography>
      <Box sx={{ maxWidth: '100%', margin: 'auto' }}>
        <Suspense fallback={<Loading message={t('LOADING_IMAGES')} />}>
          <ImageSlider settings={settings} />
        </Suspense>
      </Box>
    </Paper>
  )
}

export default Pictures
