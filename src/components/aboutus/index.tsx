import React from 'react'
import { Typography, Paper, Box, Grid, CardMedia } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import BadgeIcon from '@mui/icons-material/Badge'
import SecurityIcon from '@mui/icons-material/Security'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom'
import WarningIcon from '@mui/icons-material/Warning'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import aboutUsImage from '../../assets/1U2A6396.jpg'
import { max } from '../../common/max.en_us'
import { MainProps } from '../../common/entities'

const AboutUs: React.FC<MainProps> = (props: MainProps) => {
  const state = props.state ?? null
  const { YEAR_CREATED, LICENCE_NUMBER } = state || { YEAR_CREATED: '', LICENCE_NUMBER: '' }
  const yearsOfService = new Date().getFullYear() - parseInt(YEAR_CREATED)

  return (
    <Paper elevation={3} sx={{ p: 3, my: 2 }}>
      <CardMedia
        component="img"
        image={aboutUsImage}
        alt="AC repair tools"
        sx={{ 
          height: 270, 
          mb: 3, 
          objectFit: 'cover',
          borderRadius: 1
        }}
      />
      
      <Typography variant="h4" gutterBottom>{max.ABOUT_US_TEXT}</Typography>
      
      <Typography paragraph>{max.ABOUT_US_DESCRIPTION}</Typography>
      
      <Typography paragraph>{max.ABOUT_US_TECHNICIANS}</Typography>
      
      <Typography paragraph>{max.ABOUT_US_MISSION}</Typography>
      
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" alignItems="center">
            <AccessTimeIcon sx={{ mr: 1 }} />
            <Typography>{`${yearsOfService} ${max.ABOUT_US_YEARS_BUSINESS}`}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" alignItems="center">
            <BadgeIcon sx={{ mr: 1 }} />
            <Typography>{max.ABOUT_US_LICENSE} {LICENCE_NUMBER}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" alignItems="center">
            <SecurityIcon sx={{ mr: 1 }} />
            <Typography>{max.ABOUT_US_INSURED}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" alignItems="center">
            <FamilyRestroomIcon sx={{ mr: 1 }} />
            <Typography>{max.ABOUT_US_FAMILY_OWNED}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" alignItems="center">
            <WarningIcon sx={{ mr: 1 }} />
            <Typography>{max.ABOUT_US_EMERGENCY_SERVICES}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" alignItems="center">
            <ThumbUpIcon sx={{ mr: 1 }} />
            <Typography>{max.ABOUT_US_REPAIRS_GUARANTEED}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default AboutUs
