/* eslint-disable react/prop-types */
import { Grid, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ object }) {
  return (
    <Grid size={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image={object.image}
          title={object.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {object.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {object.description}
          </Typography>
          <Stack direction="row" spacing={3}>
            <Typography
              variant="paragraph"
              component="p"
              sx={{ color: "text.primary" }}
            >
              Number Of Reviews:{object.numberOfReviews}
            </Typography>
            <Typography
              variant="paragraph"
              component="p"
              sx={{ color: "text.primary" }}
            >
              Rating:{object.Rating}/10
            </Typography>
          </Stack>
          <Stack>
            <Typography
              variant="paragraph"
              component="p"
              sx={{ color: "text.primary" }}
            >
              Price Per Group:{object.pricePergroup}
            </Typography>
            <Typography
              variant="paragraph"
              component="p"
              sx={{ color: "text.primary" }}
            >
              Price Per Person:{object.pricePerPerson}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
