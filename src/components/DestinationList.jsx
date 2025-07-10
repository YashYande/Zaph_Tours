import { Grid } from "@mui/material";
import MediaCard from "./DestinationCard";
import TopAppBar from "./TopAppBar";

const object = [
  {
    id: 1,
    name: "Nairobi National Park",
    numberOfReviews: 462,
    price: 465,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",

    image: "../images/Nairobi National Park.jpg",
    pricePergroup: "KSH 5000 per group of 6",
    pricePerPerson: "KSH 1000",
  },
  {
    id: 2,
    name: "Tsavo National Park",
    numberOfReviews: 641,
    price: 385,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",

    image: "../images/Tsavo National Park.jpg",
    pricePergroup: "Ksh 6000 per group of 10",
    pricePerPerson: "KSH 1000",
  },
  {
    id: 3,
    name: "Lake Nakuru",
    numberOfReviews: 133,
    price: 144,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",

    image: "../images/Lake Nakuru National park1.avif",
    pricePergroup: "Ksh 3000 per group of 4",
    pricePerPerson: "Ksh 500",
  },
  {
    id: 4,
    name: "Hell's Gate",
    numberOfReviews: 133,
    price: 144,
    image: "../images/Hell's gate.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",

    pricePergroup: "",
    pricePerPerson: "",
  },

  {
    id: 5,
    name: "Mt. Ruwenzori",
    numberOfReviews: 133,
    price: 144,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",

    image: "../images/mt. ruwenzori.jpg",
    pricePergroup: "Ksh 15000 per group of 8",
    pricePerPerson: "Ksh 2000",
  },
  {
    id: 6,
    name: "Maasai Mara National Park",
    numberOfReviews: 133,
    price: 144,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",

    image: "../images/maasaimara image.jpeg",
    pricePergroup: "Ksh 6000 per group of 8",
    pricePerPerson: "Ksh 1000",
  },
  {
    id: 7,
    name: "Ndere Island National Park",
    numberOfReviews: 133,
    price: 144,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",

    image: "../images/Ndere Island National park.webp",
    pricePergroup: "Ksh. 3000 per group of 8",
    pricePerPerson: "Ksh. 1000",
  },
  {
    id: 8,
    name: "Lake Victoria",
    numberOfReviews: 133,
    price: 144,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",

    image: "../images/Lake victoria.avif",
    pricePergroup: "Ksh. 3000 per group of 8",
    pricePerPerson: "Ksh. 500",
  },
  {
    id: 5,
    name: "Kit Mikayi",
    numberOfReviews: 133,
    price: 144,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus quasi aliquam deleniti perferendis soluta velit eum, voluptatem voluptatum!",

    image: "../images/Kit Mikayi.jpg",
    pricePergroup: "Ksh 15000 per group of 8",
    pricePerPerson: "Ksh 2000",
  },
];
function DestinationList() {
  return (
    <>
      <TopAppBar />
      <Grid container spacing={2}>
        {object.map((obj) => (
          <MediaCard object={obj} key={obj.id} />
        ))}
      </Grid>
    </>
  );
}

export default DestinationList;
