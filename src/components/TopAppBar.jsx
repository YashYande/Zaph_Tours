import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
function TopAppBar() {
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          margin: "1.5em",
          borderRadius: "1.2em",
          backgroundColor: "#e9edc9",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
        spacing={10}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: "2em",
            marginLeft: "1em",
            fontWeight: "Bold",
          }}
        >
          <NavLink to="/" className="linkdeco1">
            ZAPH TOURS
          </NavLink>
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: "1.5em",
              marginLeft: "1em",
              fontWeight: "Bold",
            }}
          >
            <NavLink to={"/Places"} className="linkdeco2">
              Destinations
            </NavLink>
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: "1.5em",

              fontWeight: "Bold",
            }}
          >
            <NavLink to={"/TripTypes"} className="linkdeco2">
              Trip Types
            </NavLink>
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: "1.5em",
              marginLeft: "1em",
              fontWeight: "Bold",
            }}
          >
            <NavLink to={"/Contact Us"} className="linkdeco2">
              Contact Us
            </NavLink>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default TopAppBar;
