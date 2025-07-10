/* eslint-disable react/prop-types */
import { Box, Container, Typography } from "@mui/material";
import "../App.css";

const DestinationImage = ({ name, image, price, description }) => {
  return (
    <Container
      sx={{
        width: "16em",
        margin: 0,
        boxShadow: "2px 3px 6px rgba(0, 0, 0, 0.3)",
      }}
      className="image-container"
    >
      <img src={image} alt={name} width="100%" />
      <Box>
        <Typography sx={{ fontSize: "1.5em" }}>{name}</Typography>
      </Box>
      <Box>
        <Typography sx={{ fontFamily: "monospace" }}>{description}</Typography>
      </Box>
      <Box>
        <Typography sx={{ fontWeight: "Bold", margin: "0.5em" }}>
          price:{price}
        </Typography>
      </Box>
    </Container>
  );
};

export default DestinationImage;
