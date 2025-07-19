import { Box, Card, Typography } from "@mui/material";
import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { FaReact } from "react-icons/fa6";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const Experience = ({ id }) => {
  return (
    <Box id={id} sx={{ padding: { xs: '0px', md: '20px' }, minHeight: "100vh" }}>
      <Typography sx={{ color: '#087EA4', fontSize: '50px', fontWeight: 700, ml: { xs: 5, md: 20, }, mr: { xs: 5, md: 20 } }}>Experience</Typography>
      <Timeline position="alternate">
        {/* First Timeline Item */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{
              backgroundColor: "white",
              width: "40px",  // Increase the size of the dot to fit the icon
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <IoCheckmarkDoneCircleSharp style={{ fontSize: "24px", color: "#087EA4" }} />  {/* React Icon */}
            </TimelineDot>

            <TimelineConnector sx={{ backgroundColor: "white", height: "50px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ display: "flex", justifyContent: "flex-start", my: 2 }}>
            <Card sx={{ minWidth: 250, maxWidth: 400, border: '1px solid #6A5ACD', boxShadow: '0px 10px 20px rgba(8, 39, 96, 0.3)', backgroundColor: "#082567", p: 2 }}>
              <Typography sx={{ color: "#fff", fontSize: "20px", fontWeight: 600 }}>
                Quality Assurance Engineer
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.3 }}>
                <Typography sx={{ color: "grey", fontSize: "15px", fontWeight: 400, mb: 1.5 }}>
                  TestIO
                </Typography>
                <Typography sx={{ color: 'grey', fontSize: '12px' }}>
                  (2021-2022)
                </Typography>
              </Box>
              <Typography color="#fff">
                At Testio, I worked as a Quality Assurance Engineer, testing websites and mobile applications to ensure their functionality and performance. I collaborated with developers to identify and resolve issues, ensuring high-quality and user-friendly software.
              </Typography>
            </Card>
          </TimelineContent>
        </TimelineItem>

        {/* Second Timeline Item */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{
              backgroundColor: "white",
              width: "40px",  // Increase the size of the dot to fit the icon
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <FaReact style={{ fontSize: "24px", color: "#087EA4" }} />  {/* React Icon */}
            </TimelineDot>

            <TimelineConnector sx={{ backgroundColor: "white", height: "50px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ display: "flex", justifyContent: "flex-end", my: 2 }}>
            <Card sx={{
              minWidth: 250, maxWidth: 400,
              backgroundColor: "#082567", p: 2, border: '1px solid #6A5ACD',
              boxShadow: '0px 10px 20px rgba(8, 39, 96, 0.3)'
            }}>
              <Typography sx={{ color: "#fff", fontSize: "20px", fontWeight: 600, textAlign: "left" }}>
                Software Engineer
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.3 }}>
                <Typography sx={{ color: "grey", fontSize: "15px", fontWeight: 400, mb: 1.5 }}>
                  Chainfore
                </Typography>
                <Typography sx={{ color: 'grey', fontSize: '12px' }}>
                  (2024-2025)
                </Typography>
              </Box>
              <Typography color="#fff" sx={{ textAlign: "left" }}>
                At Chainfore, I worked as an Associate Software Engineer, specializing in React.js, Next.js, Redux Toolkit, JavaScript, and TypeScript. I contributed to building dynamic web applications, collaborating with
                teams to deliver high-quality software solutions.
              </Typography>
            </Card>
          </TimelineContent>
        </TimelineItem>

        {/* Third Timeline Item */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{
              backgroundColor: "white",
              width: "40px",  // Increase the size of the dot to fit the icon
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <FaReact style={{ fontSize: "24px", color: "#087EA4" }} />  {/* React Icon */}
            </TimelineDot>

            <TimelineConnector sx={{ backgroundColor: "white", height: "50px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ my: 2 }}>
            <Card sx={{
              minWidth: 250, maxWidth: 400,
              backgroundColor: "#082567", p: 2, border: '1px solid #6A5ACD',
              boxShadow: '0px 10px 20px rgba(8, 39, 96, 0.3)'
            }}>
              <Typography sx={{ color: "#fff", fontSize: "20px", fontWeight: 600, textAlign: "left" }}>
                Software Engineer
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.3 }}>
                <Typography sx={{ color: "grey", fontSize: "15px", fontWeight: 400, mb: 1.5 }}>
                  StrategistHub
                </Typography>
                <Typography sx={{ color: 'grey', fontSize: '12px' }}>
                  (2025-Present)
                </Typography>
              </Box>
              <Typography color="#fff" sx={{ textAlign: "left" }}>
                At StrategistHub, I work as a Full Stack Developer, building and maintaining scalable web applications. On the frontend, I use React.js, Next.js, and TypeScript to create responsive user interfaces. For the backend, I work with Node.js and Strapi to develop robust APIs and manage content efficiently. I collaborate closely with the team to deliver high-performance, full-stack solutions.
              </Typography>

            </Card>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

export default Experience;
