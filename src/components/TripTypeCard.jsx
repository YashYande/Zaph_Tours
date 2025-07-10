/* eslint-disable react/prop-types */
import { Grid, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
function TripTypeCard({ object }) {
  return (
    <Grid size={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image={object.img}
          title={object.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {object.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {object.description}
          </Typography>
          <Stack direction="row" spacing={3}>
            <Typography
              variant="paragraph"
              component="p"
              sx={{ color: "text.primary", textAlign: "center" }}
            >
              Pricing:{object.pricing}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default TripTypeCard;
