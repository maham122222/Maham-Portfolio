import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import React from 'react'
import { FaReact } from 'react-icons/fa6'


const AboutCard = ({ title, Icon,iconColor }) => {
    return (
        <Card sx={{
            maxWidth: 130, minHeight: 140, mt: 3, backgroundColor: '#0C2340'
            , boxShadow: '0px 4px 6px rgba(82, 73, 213, 0.7)', // Box shadow
            borderRadius: '10px', border: '2px solid blue',
            transition: 'transform 0.5s ease-in-out', // Smooth animation
        '&:hover': {
          transform: 'rotateY(360deg)', // Full rotation on hover
        },
        }}>
            <CardActionArea sx={{
                display: 'flex',
                flexDirection: 'column', alignItems: 'center',
                mt: 2
            }}>
                <Icon size={30} color={iconColor} />
                <CardContent>
                    <Typography sx={{ textAlign: 'center', color: '#fff', fontWeight: 700 }}>
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>



        </Card>
    )
}

export default AboutCard
