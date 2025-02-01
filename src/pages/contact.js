import { Box, Button, TextField, Typography, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

const Contact = ({id}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [openDialog, setOpenDialog] = useState(false); // State to manage Dialog visibility

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    // Send email using EmailJS
    emailjs
      .send(
        'service_nnw1s9u', // Replace with your service ID
        'template_rnqvmuj', // Replace with your template ID
        templateParams,
        'XRQ-8dKZzSWHuEsq_' // Replace with your user ID
      )
      .then(
        (response) => {
          setOpenDialog(true); // Open the dialog on success
        },
        (error) => {
          alert('Failed to send the message. Please try again later.');
        }
      );
  };

  const handleDialogClose = () => {
    setOpenDialog(false); // Close the dialog when "OK" is clicked
  };

  return (
    <Box
      id={id}
      sx={{
        ml: { xs: 5, md: 20 },
        mb: { xs: 10, md: 15 },
        mr: { xs: 5, md: 20 },
        mt: { xs: 5, md: 10 },
        backgroundColor: '#141414',
        boxShadow: '0px 4px 6px rgba(164, 160, 212, 0.7)',
        borderRadius: '10px',
        p: 2,
      }}
    >
      <Typography sx={{ fontSize: '15px', color: '#fff' }}>GET IN TOUCH</Typography>
      <Typography sx={{ color: '#087EA4', fontSize: '50px', fontWeight: 700 }}>Contact</Typography>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 4 }}
        component="form"
        onSubmit={handleSubmit} // Add form submission handler
      >
        <TextField
          required
          placeholder="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' },
            },
            '& .MuiInputBase-input': {
              color: 'white',
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'white',
              opacity: 1,
            },
          }}
        />
        <TextField
          required
          placeholder="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' },
            },
            '& .MuiInputBase-input': {
              color: 'white',
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'white',
              opacity: 1,
            },
          }}
        />
        <TextField
          required
          placeholder="Your Message"
          fullWidth
          multiline
          minRows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' },
            },
            '& .MuiInputBase-input': {
              color: 'white',
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'white',
              opacity: 1,
            },
          }}
        />
        <Box>
        <Button type="submit" variant="outlined" sx={{ mt: 1 }}>
          Send
        </Button>
        </Box>
        
      </Box>
      

      {/* Dialog for success message */}
      <Dialog open={openDialog} onClose={handleDialogClose} >
        <DialogTitle>Message Sent</DialogTitle>
        <DialogContent>
          <Typography>Your message was sent successfully!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Contact;
