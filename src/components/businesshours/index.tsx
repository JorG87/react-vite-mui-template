import { Typography, Paper, Grid, Box, Link, IconButton } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { MainProps } from '../../common/entities'
import { useTranslations } from '../../utils/useTranslations'

const BusinessHours: React.FC<MainProps> = (props: MainProps) => {
  const { t } = useTranslations()
  const state = props.state ?? null

  return (
    <Paper elevation={3} sx={{ p: 3, my: 2 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>{t('BUSINESS_HOURS')}</Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <AccessTimeIcon sx={{ mr: 1 }} />
            <Typography variant="h6">Open 24/7</Typography>
          </Box>
          <Typography>
            {t('OPEN_HOURS')}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>{t('CONTACT_US')}</Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <IconButton color="primary" aria-label="call us" component="a" href={`tel:${state?.PHONE_NUMBER}`}>
              <PhoneIcon />
            </IconButton>
            <Link href={`tel:${state?.PHONE_NUMBER}`} underline="hover">
              {state?.PHONE_NUMBER}
            </Link>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton color="primary" aria-label="email us" component="a" href={`mailto:${state?.EMAIL_ADDRESS}`}>
              <EmailIcon />
            </IconButton>
            <Link href={`mailto:${state?.EMAIL_ADDRESS}`} underline="hover">
              {state?.EMAIL_ADDRESS}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default BusinessHours
