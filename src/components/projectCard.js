import { Box, Button, Card, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import {project} from '../../public/image.png'
import { FaGithub } from 'react-icons/fa6'
import { OpenInBrowser } from '@mui/icons-material'

const ProjectCard = ({title,desc,technology,img, githubLink,livedemolink}) => {
  return (
    <Card sx={{
        maxWidth: 300, maxHeight: 340, mt: 3, backgroundColor: '#0C2340'
        , boxShadow: '0px 4px 6px rgba(82, 73, 213, 0.7)', // Box shadow
        borderRadius: '10px',
        
    }}>
    <CardMedia
          component="img"
          height="150"
          width="100"
          image={img}
          alt="green iguana"
          sx={{p:1, borderRadius:'13px'}}
        />
    <Typography sx={{fontSize:'18px',fontWeight:600, color:'#fff',pl:1}}>{title}</Typography>
    <Typography sx={{fontSize: '11px',
    fontWeight: 200,
    color: '#fff',
    p: 1,
    pb: 0,
    maxHeight: '100px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3, 
    WebkitBoxOrient: 'vertical', }}>
    {desc}
     </Typography>
      <Typography sx={{fontSize:'11px', fontWeight:'300', color:'grey',pl:1, pb:1}}>{technology}</Typography>
     <Box sx={{display:'flex', justifyContent:'space-between',flexDirection:'row'}}>
     {/* <Button variant='outlined' sx={{fontSize:'10px',mb:1,ml:1}}>View</Button> */}
     {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <IconButton>
              <FaGithub color='#000000'/>
            </IconButton>
          </a>
        )}
        {livedemolink && (
          <a href={livedemolink} target='_blank'>
          <Button sx={{pr:1, color:'grey',fontSize:'15px',fontStyle:'bold'}}>website demo</Button>

        </a>
        )}
        
     </Box>
   </Card>
  )
}

export default ProjectCard
