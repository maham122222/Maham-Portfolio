import React from "react";
import { FaReact, FaNodeJs, FaJava, FaGithub, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiRedux, SiNextdotjs, SiTypescript, SiFirebase, SiMui } from "react-icons/si";
import { Box, Typography } from "@mui/material";

const Technologies = () => {
  return (
    <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', ml:2,mr:2 }}>
      <Typography sx={{ color: "#fff", fontSize: "24px", fontWeight: 700 }}>Technologies I Know</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mt: 3, justifyContent: "center" }}>
        {/* Technology Icons */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <FaReact size={40} color="#61DBFB" />
          <Typography sx={{ color: "#fff", mt: 1 }}>React</Typography>
        </Box>
        
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiNextdotjs size={40} color="#000" />
          <Typography sx={{ color: "#fff", mt: 1 }}>Next.js</Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiTypescript size={40} color="#3178C6" />
          <Typography sx={{ color: "#fff", mt: 1 }}>TypeScript</Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <FaNodeJs size={40} color="#68A063" />
          <Typography sx={{ color: "#fff", mt: 1 }}>Node.js</Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiRedux size={40} color="#764ABC" />
          <Typography sx={{ color: "#fff", mt: 1 }}>Redux</Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <DiMongodb size={40} color="#4DB33D" />
          <Typography sx={{ color: "#fff", mt: 1 }}>MongoDB</Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <FaGithub size={40} color="#181717" />
          <Typography sx={{ color: "#fff", mt: 1 }}>GitHub</Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <FaHtml5 size={40} color="#E34F26" />
          <Typography sx={{ color: "#fff", mt: 1 }}>HTML5</Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <FaCss3Alt size={40} color="#1572B6" />
          <Typography sx={{ color: "#fff", mt: 1 }}>CSS3</Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <FaJsSquare size={40} color="#F7DF1E" />
          <Typography sx={{ color: "#fff", mt: 1 }}>JavaScript</Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiMui size={40} color="#007FFF" />
          <Typography sx={{ color: "#fff", mt: 1 }}>MUI</Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiFirebase size={40} color="#FFCA28" />
          <Typography sx={{ color: "#fff", mt: 1 }}>Firebase</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Technologies;
