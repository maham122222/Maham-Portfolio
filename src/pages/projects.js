import ProjectCard from '@/components/projectCard';
import { Box, Typography,Card,useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const Projects = ({id}) => {
    const theme = useTheme();
    const isMdScreen = useMediaQuery(theme.breakpoints.up('md')); 
  return (
   <Box id={id} sx={{ml:{xs :5, md:20,}, mb:{xs: 10, md:15},mr:{xs:5 , md:20},mt:{xs:5,md:10}}}>
   <Typography sx={{color:'#fff', fontSize:'20px'}}>My work</Typography>
   <Typography sx={{color:'#087EA4', fontSize:'50px', fontWeight:700}}>Projects</Typography>
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
          }}>This section showcases my projects in web and mobile app development, highlighting my expertise in React.js, Next.js, Redux, and React Native. Each project reflects my passion for building high-quality, functional applications.</Typography>
  
  <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, gap:3}}>  
   <ProjectCard title="EZ Park App" desc="EZ Park is a React Native app that allows users to book parking spaces effortlessly. It features a unique homeowner option, enabling property owners to rent out their parking spots and earn money. With a seamless booking system, online payments, and a user-friendly
    interface, EZ Park makes parking convenient and efficient." githubLink='https://github.com/maham122222?tab=repositories' technology="ReactNative , clerk , firebase" img='/EzPark.png'/>

<ProjectCard githubLink='' title="SpaceShare Website (In Progress)" desc="Space Share is a smart parking solution that connects homeowners with unused spaces to drivers in need of parking. Homeowners can list their available spots and earn money, while users can easily find and book convenient parking locations. With a seamless booking system, secure payments, and a user-friendly interface, Space Share makes parking hassle-free and efficient. 🚗✨" technology="Next.js, MUI, javascript" img='/black.png'/>

{/* <ProjectCard title="EZ Park App" desc="React automatically updates the DOM to match your render output, so your components won’t often need to manipulate it. However, sometimes you might need access to the DOM elements managed by React—for example, to 
   focus a node, scroll to" technology="ReactNative , clerk , firebase" img='/EzPark.png'/> */}
   </Box>

   </Box>
  )
}

export default Projects
