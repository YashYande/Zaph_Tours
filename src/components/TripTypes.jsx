import { Grid } from "@mui/material";
import TopAppBar from "./TopAppBar";

import TripTypeCard from "./TripTypeCard";

const tripTypes = [
  {
    id: 1,
    title: "honeymoon",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",

    pricing: 500000,

    img: "../trip_type_images/Honeymoon_trip.webp",
  },
  {
    id: 2,
    title: "family",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",

    pricing: 45600,
    img: "../trip_type_images/Family trip.avif",
  },
  {
    id: 3,
    title: "adventure",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",

    pricing: 80401,
    img: "../trip_type_images/Adventure trip.avif",
  },
  {
    id: 4,
    title: "cultural tours",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",

    pricing: 23410,
    img: "../trip_type_images/Cultural tours.avif",
  },
  {
    id: 5,
    title: " wildlife safaris",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",

    pricing: 65420,
    img: "../trip_type_images/Wildlife Safaris.webp",
  },
  {
    id: 6,
    title: "eco-tours",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",

    pricing: 32560,
    img: "../trip_type_images/Ecotours.avif",
  },
  {
    id: 7,
    title: "luxury vacations",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",

    pricing: 40120,
    img: "../trip_type_images/vacation tour.avif",
  },
  {
    id: 8,
    title: "beach holidays",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",

    pricing: 60501,
    img: "../trip_type_images/beach holiday.avif",
  },
  {
    id: 9,
    title: " wellness retreats",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",

    pricing: 70302,
    img: "../trip_type_images/Wellness retreat.avif",
  },
  {
    id: 10,
    title: "culinary tours",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",

    pricing: 105506,
    img: "../trip_type_images/culinary tours.avif",
  },
];
function TripTypes() {
  return (
    <>
      <TopAppBar />
      <Grid container spacing={2}>
        {tripTypes.map((obj) => (
          <TripTypeCard object={obj} key={obj.id} />
        ))}
      </Grid>
    </>
  );
}

export default TripTypes;
