import React from 'react';
import { Box } from '@chakra-ui/react';

const Dashboard = () => {
  const theme = {
    width: "100%",
    height: "700px",
    background: `
      radial-gradient(circle farthest-side at 0% 50%, #282828 23.5%, rgba(255, 170, 0, 0) 0) 21px 30px,
      radial-gradient(circle farthest-side at 0% 50%, #2c3539 24%, rgba(240, 166, 17, 0) 0) 19px 30px,
      linear-gradient(#282828 14%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 85%, #282828 0) 0 0,
      linear-gradient(150deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0,
      linear-gradient(30deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0,
      linear-gradient(90deg, #2c3539 2%, #282828 0, #282828 98%, #2c3539 0%) 0 0 #282828`,
    backgroundSize: "40px 60px",
    color: "white"  // Ensures the text is visible against the dark background
  };

  return (
    <Box
      style={{
        width: theme.width,
        height: theme.height,
        background: theme.background,
        backgroundSize: theme.backgroundSize,
        color: theme.color  // Apply the text color
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="490px"
        height="404px"
        bg="rgb(223, 225, 235)"
        borderRadius="50px"
        sx={{
          boxShadow: `
            rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
            rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
            rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
            rgba(0, 0, 0, 0.06) 0px 2px 1px,
            rgba(0, 0, 0, 0.09) 0px 4px 2px,
            rgba(0, 0, 0, 0.09) 0px 8px 4px,
            rgba(0, 0, 0, 0.09) 0px 16px 8px,
            rgba(0, 0, 0, 0.09) 0px 32px 16px
          `,
        }}

       
      >
        
      </Box>
    </Box>
  );
};

export default Dashboard;
