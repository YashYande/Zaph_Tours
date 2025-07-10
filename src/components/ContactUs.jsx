import { Button, Stack, Typography } from "@mui/material";

import TextField from "@mui/material/TextField";
import TopAppBar from "./TopAppBar";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

function ContactUs() {
  return (
    <>
      <TopAppBar />
      <Stack
        direction={"row"}
        margin={"2em"}
        sx={{ boxShadow: "4px 4px 10px rgba(14, 12, 12, 0.25)" }}
      >
        <Stack
          component="form"
          spacing={2}
          sx={{
            backgroundColor: "#94735179;",
            width: "50%",
            display: "flex",
            color: "white",
            fontSize: "0.9em",
            flexDirection: "column",
            // justifyContent: "center",
            // alignContent: "center",
          }}
        >
          <Typography sx={{ textAlign: "center", color: "blue" }}>
            Contact Us
          </Typography>
          <Stack direction={"row"} spacing={2} sx={{ padding: "2em" }}>
            <Typography>FirstName</Typography>
            <TextField required defaultValue="John" />
            <Typography>LastName</Typography>
            <TextField defaultValue="Doe" />
          </Stack>
          <Stack direction={"row"} sx={{ padding: "1.5em" }}>
            <Typography>Email Address</Typography>
            <TextField id="outlined" />
            <Typography>Phone Number</Typography>
            <TextField id="outlined" />
          </Stack>
          <Stack direction={"column"} sx={{}}>
            <Typography>Message</Typography>
            <TextField id="outlined" multiline rows={4} />
            <Button variant="contained" sx={{ marginTop: "0.5em" }}>
              Submit
            </Button>
          </Stack>
          <Typography>
            <IoMdMail />
            Mail: Zaph2356@gmail.com
          </Typography>
          <Typography>
            <FaPhoneAlt />
            Contact: 0769827645
          </Typography>
        </Stack>
        <img src="../images/map_image.jsx.png" width="50%" height="500vh" />
      </Stack>
    </>
  );
}

export default ContactUs;
