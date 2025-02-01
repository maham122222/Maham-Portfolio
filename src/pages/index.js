import Navbar from '@/components/navbar';
import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { PiReadCvLogoDuotone } from "react-icons/pi";
import About from './about';
import { motion } from 'framer-motion';
import Experience from './experience';
import Projects from './projects';
import { FaGithub } from "react-icons/fa";
import Contact from './contact';
import Technologies from './technologies';

const Home = () => {
  const handleDownload = () => {
    const resumeUrl = "/mahamResume.pdf"; // Make sure resume.pdf is inside the public folder
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Maham_Jamil_Resume.pdf"; // Change the name accordingly
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const rotateX = (clientY - centerY) / 25; // Adjust tilt sensitivity
    const rotateY = (clientX - centerX) / 25;

    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  return (
    <Box>
      <Navbar />
      <Box sx={{ display: 'flex', flexDirection: { xs: "column", md: "row" }, alignItems: 'center', m: { xs: '20px', md: '100px' },
       justifyContent: 'space-evenly', gap: { xs: '30px', md: '0px' } }}>
        <Box>
        <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay:0.6 }}
        > 
          <Typography sx={{ color: 'white', fontSize: '30px', textAlign: 'center' }}>
            Hi I'm <span style={{ color: '#087EA4' }}>Maham</span>
          </Typography>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          >   
          <Typography sx={{
            color: "white",
            fontSize: "30px",
            textAlign: "center",
            display: "-webkit-box",
            WebkitLineClamp: 3, // Limit text to 3 lines
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis", // Adds "..." if the text is longer than 3 lines
            maxWidth: "600px", // Adjust width to control line breaks
            margin: "0 auto",
          }}>
            I'm a Software Engineer passionate about  building dynamic and user-friendly websites. 🚀
          </Typography>
          <Box sx={{display:'flex', justifyContent:'center',gap:5,mt:2, alignItems:'center'}}>
            <Button variant='text' sx={{cursor:'pointer'}}  onClick={handleDownload} startIcon={<PiReadCvLogoDuotone />}>Resume</Button>
            <Button variant='text' sx={{cursor:'pointer'}} component="a" href="https://github.com/maham122222?tab=repositories" target="_blank" startIcon={<FaGithub/>}>Github</Button>
          </Box>
          </motion.div>
          
        </Box>

        {/* 3D Effect on Image */}
        <Box sx={{}}>
          <motion.div
            style={{
              perspective: '1000px', // Perspective for 3D depth
              display: 'inline-block',
            }}
          >
            <motion.img
              src="/image.png"
              alt="Maham Jamil"
              style={{
                width: '100%',
                maxWidth: '330px',
                borderRadius: '10px',
                border: '2px solid #087EA4',
                boxShadow: '0px 10px 20px rgba(27, 86, 196, 0.3)',
              }}
              animate={{ rotateX, rotateY }}
              transition={{ type: 'spring', stiffness: 100, damping: 10 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setRotateX(0) & setRotateY(0)} // Reset on mouse leave
            />
          </motion.div>
        </Box>
      </Box>

      <About id='about'/>
      <Experience id='experience'/>
      <Technologies/>
      <Projects id='projects' />
      <Contact id='contact'/>
    </Box>
  );
};

export default Home;
