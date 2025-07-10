import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DestinationImage from "./DestinationImage";
import TopAppBar from "./TopAppBar";
import { FaLongArrowAltRight } from "react-icons/fa";
const images = [
  "../images/african-woman-9157860_1280.jpg",
  "../images/elephant-8253639_1280.jpg",
  "../images/lady-4628418_1280.jpg",
];

const destinationList = [
  {
    id: 1,
    name: "Coastal Kenya",
    image: "../images/Coastal Kenya.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",
    price: 20000,
  },
  {
    id: 2,
    name: "Nairobi National Park",
    image: "../images/Nairobi National Park.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",
    price: 70000,
  },
  {
    id: 3,
    name: "Lake Nakuru",
    image: "../images/Lake Nakuru.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",
    price: 80000,
  },
  {
    id: 4,
    name: "The Tsavo National Park",
    image: "../images/Tsavo National Park.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",
    price: 80000,
  },
  {
    id: 5,
    name: "Mt. Ruwenzori",
    image: "../images/mt. ruwenzori.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",
    price: 80000,
  },
  {
    id: 6,
    name: "Mt. Kenya",
    image: "../images/mount-kenya-7377735_1280.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",
    price: 80000,
  },
];

function AppBar() {
  const [image, setImage] = useState(0);

  useEffect(() => {
    const inteval = setInterval(() => {
      setImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return clearInterval(inteval);
  }, []);
  return (
    <>
      <TopAppBar />
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to left,rgba(115, 188, 157, 0.36),rgba(122, 152, 201, 0.32)),url('../images/mount-kenya-7377735_1280.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

          marginLeft: "1em",
          marginRight: "1em",

          display: "flex",
          justifyContent: "center",
          position: "relative",

          height: "90vh",
          marginBottom: "2em",
        }}
      >
        <Typography
          variant="subtitle1"
          component="p"
          sx={{
            fontWeight: "Bold",
            fontSize: "4em",
            color: "#d4a373",
            position: "relative",
            top: "40%",
          }}
        >
          Best safaris and adventures
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to left,rgba(115, 188, 158, 0.6),rgba(122, 152, 201, 0.56)),url(${images[image]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

          marginLeft: "1em",
          marginRight: "1em",

          display: "flex",
          justifyContent: "center",
          position: "relative",

          height: "60vh",
          marginBottom: "2em",
        }}
      >
        <Stack
          sx={{
            position: "relative",
            top: "20%",
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{ textAlign: "center", fontSize: "5em", color: "#fff" }}
          >
            About US
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            dicta aperiam fuga ullam excepturi animi. Voluptas amet blanditiis
            voluptatem veniam, accusantium distinctio, quaerat itaque aspernatur
            a ipsum voluptatum maxime debitis explicabo velit consequatur, harum
            accusamus aliquid. Expedita, aliquid, exercitationem iste inventore
            ut rerum a sequi quasi similique at ea. Repellendus illum iste nam
            harum distinctio illo, voluptatem doloremque deserunt labore fuga
            ipsum necessitatibus mollitia inventore aut beatae, quidem
            provident! Consectetur!
          </Typography>
        </Stack>
      </Box>

      <Typography
        variant="h2"
        component="h2"
        sx={{
          textAlign: "center",
          color: "white",
          fontSize: "5em",
        }}
      >
        Featured Destinations
      </Typography>
      <Grid container spacing={0.5}>
        {destinationList.map((destination) => (
          <Grid size={4} key={destination.id}>
            <DestinationImage
              image={destination.image}
              name={destination.name}
              description={destination.description}
              price={destination.price}
            />
          </Grid>
        ))}
      </Grid>
      <Typography
        sx={{
          textAlign: "center",
          color: "white",
          fontSize: "5em",
        }}
      >
        Testimonials
      </Typography>

      <Stack direction={"row"} spacing={0.5} sx={{ marginBottom: "20px" }}>
        <Stack
          direction={"row"}
          spacing={2}
          sx={{
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
            marginBottom: "20px",
            border: "solid 1px gray",
          }}
        >
          <Box sx={{ width: "10em" }}>
            <img
              src="../images/Community Architect.jpg"
              alt="Ronny Ian"
              width="100%"
              className="profile-img"
            />
          </Box>
          <Box>
            <Typography>Community Architect</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              maxime.
            </Typography>
          </Box>
        </Stack>
        <Stack
          direction={"row"}
          spacing={2}
          sx={{
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
            marginBottom: "20px",
            border: "solid 1px gray",
          }}
        >
          <Box sx={{ width: "10em" }}>
            <img
              src="../images/First Lady.jpg"
              alt="First Lady"
              width="100%"
              className="profile-img"
            />
          </Box>
          <Box>
            <Typography>First Lady</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              maxime.
            </Typography>
          </Box>
        </Stack>
        <Stack
          direction={"row"}
          spacing={2}
          sx={{
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
            marginBottom: "20px",
            border: "solid 1px gray",
          }}
        >
          <Box sx={{ width: "10em" }}>
            <img
              src="../images/Deno.jpg"
              alt="JamieDennis"
              width="100%"
              className="profile-img"
            />
          </Box>
          <Box>
            <Typography>JamieDennis</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              maxime.
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <Typography>Join the newsletter</Typography>
      <Stack direction={"row"}>
        <TextField
          label="Your Email"
          type="text"
          sx={{ marginLeft: "2px", marginBottom: "20px" }}
        />
        <Button
          variant="contained"
          endIcon={<FaLongArrowAltRight />}
          sx={{ marginLeft: "2px", marginBottom: "20px" }}
        >
          Join Free
        </Button>
      </Stack>
    </>
  );
}

export default AppBar;
