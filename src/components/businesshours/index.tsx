import { Typography, Paper, Grid, Box, Link, IconButton } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
// import ContactModal from '../contactmodal'
import { MainProps } from '../../common/entities'

const BusinessHours: React.FC<MainProps> = (props: MainProps) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  // const [modalOpen, setModalOpen] = useState(false)
  const state = props.state ?? null
  return (
    <Paper elevation={3} sx={{ p: 3, my: 2 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>Business Hours</Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <AccessTimeIcon sx={{ mr: 1 }} />
            <Typography variant="h6">Open 24/7</Typography>
          </Box>
          {days.map((day) => (
            <Box key={day} display="flex" justifyContent="space-between" mb={1}>
              <Typography>{day}</Typography>
              <Typography>12:00 AM to 11:59 PM</Typography>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>Contact Us</Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <IconButton color="primary" aria-label="call us" component="a" href="tel:+12395412255">
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
          {/* <Box display="flex" alignItems="center" mt={3} ml={1}>
            <Button variant="contained" color="primary" onClick={() => setModalOpen(true)}>
              Contact Us
            </Button>
          </Box> */}
        </Grid>
      </Grid>
      {/* <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} state={state} /> */}
    </Paper>
  )
}

export default BusinessHours
