import React from 'react'
import { Typography, Paper } from '@mui/material'
import Map from '../map'
import { useTranslations } from '../../utils/useTranslations'

const ServiceArea: React.FC = () => {
  const { t } = useTranslations()
  return (
    <Paper elevation={3} sx={{ p: 3, my: 2 }}>
      <Typography variant="h4" gutterBottom>{t('SERVICE_AREA')}</Typography>
      <Map />
    </Paper>
  )
}

export default ServiceArea
