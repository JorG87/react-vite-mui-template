import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Snackbar,
  Box,
  FormControlLabel,
  Checkbox,
} from '@mui/material'
import recaptchaImage from '../../assets/reCaptcha.png'

interface ContactModalProps {
  open: boolean
  onClose: () => void
  state: { EMAIL_ADDRESS: string } | null
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose, state }) => {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [details, setDetails] = useState('')
  const [isRobot, setIsRobot] = useState(true)
  const [snackbarOpen, setSnackbarOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isRobot) {
      alert("Please verify that you're not a robot.")
      return
    }
    
    // Here you would typically send this data to your backend
    // For this example, we'll just log it and simulate sending an email
    console.log({ name, contact, details })

    // Simulating sending an email (replace with actual email sending logic)
    if (state?.EMAIL_ADDRESS) {
      const emailBody = `
        Name: ${name}
        Contact: ${contact}
        Details: ${details}
      `
      
      // In a real application, you'd send this to your backend
      console.log(`Sending email to ${state.EMAIL_ADDRESS}:\n${emailBody}`)
      
      // Show success message
      setSnackbarOpen(true)
      
      // Close the modal
      onClose()
      
      // Reset form
      setName('')
      setContact('')
      setDetails('')
    }
  }

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Contact Us</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              type="text"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              margin="dense"
              label="Phone or Email"
              type="text"
              fullWidth
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
            <TextField
              margin="dense"
              label="Details"
              multiline
              rows={4}
              fullWidth
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              required
            />
            <Box mt={2} sx={{ border: '1px solid #ccc', borderRadius: 1, p: 1, display: 'inline-flex', alignItems: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!isRobot}
                    onChange={() => setIsRobot(!isRobot)}
                    color="primary"
                  />
                }
                label="I'm not a robot"
              />
              <img src={recaptchaImage} alt="reCAPTCHA" style={{ height: 40, marginLeft: 10 }} />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message="Your message has been sent!"
      />
    </>
  )
}

export default ContactModal
