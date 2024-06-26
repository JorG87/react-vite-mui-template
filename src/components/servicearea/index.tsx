import React from 'react'
import { Typography, Paper } from '@mui/material'
import Map from '../map'

const ServiceArea: React.FC = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, my: 2 }}>
      <Typography variant="h4" gutterBottom>Service Area</Typography>
      <Map />
    </Paper>
  )
}

export default ServiceArea
