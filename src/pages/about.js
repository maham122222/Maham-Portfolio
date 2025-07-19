import AboutCard from '@/components/aboutCard';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { FaReact } from 'react-icons/fa6';

const About = ({id}) => {
    const theme = useTheme();
    const isMdScreen = useMediaQuery(theme.breakpoints.up('md')); 
  return (
   <Box id={id} sx={{ml:{xs :5, md:20,}, mb:{xs: 10, md:15},mr:{xs:5 , md:20},mt:{xs:5,md:10}}}>
   <Typography sx={{color:'#fff', fontSize:'20px'}}>Introduction</Typography>
   <Typography sx={{color:'#087EA4', fontSize:'50px', fontWeight:700}}>Overview</Typography>
   <Typography sx={{ color: '#fff',
          maxWidth: isMdScreen ? '900px': 'unset', // Adjust width to control line breaks
          fontSize: '18px',
          lineHeight: '1.6',
          
        //   textAlign: 'center',
          display: '-webkit-box',
          WebkitLineClamp: isMdScreen ? 5 : 'unset',
          WebkitBoxOrient: 'vertical',
        //   overflow: 'hidden',
        //   textOverflow: 'ellipsis'
          }}>


I am a Computer Science graduate with a strong foundation in web development. I began my professional journey as a Freelance QA Engineer at Test IO, where I tested 120+ websites and mobile applications from August 2021 to February 2022. I later worked as an Associate Software Engineer at Chainfore, contributing to feature-rich platforms using React.js, Next.js, Redux Toolkit, TypeScript, and Node.js.

<br/> Currently, I’m working at StrategistHub as a Full Stack Developer, where I’ve developed production-ready websites using Strapi and Next.js, implemented multilingual support, and enhanced UI/UX with Material UI.

I’m passionate about learning modern technologies, writing clean and scalable code, and creating impactful digital experiences..</Typography>
          
<Grid container  sx={{ mt: 12 }}>
        {/* Each Grid item takes 6 columns (50% width) on xs screens and 3 columns (25% width) on md screens */}
        <Grid item xs={6} md={2.5}>
          <AboutCard title="Web Developer" Icon={FaReact} iconColor="#087EA4" />
        </Grid>
        <Grid item xs={6} md={2.5}>
          <AboutCard title="React Developer" Icon={FaReact} iconColor="#087EA4" />
        </Grid>
        <Grid item xs={6} md={2.5}>
          <AboutCard title="Frontend Developer" Icon={FaReact} iconColor="#087EA4" />
        </Grid>
        <Grid item xs={6} md={2.5}>
          <AboutCard title="Quality Engineer" Icon={FaReact} iconColor="#087EA4" />
        </Grid>
        
      </Grid>
   </Box>
  )
}

export default About
