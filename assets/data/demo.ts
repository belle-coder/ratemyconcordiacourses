import { DataT } from "../../types";
import IMAGE_01 from "../images/java.jpg";
import IMAGE_02 from "../images/mother.jpg";
import IMAGE_03 from "../images/database.jpg";
import IMAGE_04 from "../images/network.jpg";
import IMAGE_05 from "../images/interaction1.jpg";
import IMAGE_06 from "../images/brush1.jpg";
import IMAGE_07 from "../images/structure.jpg";
import IMAGE_08 from "../images/brain.jpg";
import IMAGE_09 from "../images/ob2.jpg";
import IMAGE_10 from "../images/analytics2.jpg";

const data: DataT[] = [
  {
    id: 1,
    name: "COMP 248",
    match: "78",
    description:"Introduction to Java and Object Oriented Programming",
    image: IMAGE_01,
    reviews:2,
  },
  {
    id: 2,
    name: "COMP 228",
    match: "93",
    description:"Computer Hardware",
    image: IMAGE_02,
    reviews:2,
  },
  {
    id: 3,
    name: "COMP 353",
    match: "45",
    description: "Database and storage",
    image: IMAGE_03,
    reviews: 2,
  },
  {
    id: 4,
    name: "COMP 445",
    match: "88",
    description:"Computer Networks and Communications",
    image: IMAGE_04,
    reviews: 2,
  },
  {
    id: 5,
    name: "SOEN 357",
    match: "76",
    description:"User Interface and Design",
    image: IMAGE_05,
    reviews: 2,
  },
  {
    id: 6,
    name: "SOEN 228",
    match: "95",
    description:"Web design",
    image: IMAGE_06,
    reviews: 2,
  },
  {
    id: 7,
    name: "COMP 352",
    match: "67",
    description:"Data Structure and Algorithms",
    image: IMAGE_07,
    reviews: 2,
  },
  {
    id: 8,
    name: "PHIL 210",
    match: "85",
    description:"Introduction to Critical Thinking",
    image: IMAGE_08,
    reviews: 2,
  },
  {
    id: 9,
    name: "MANA 202",
    match: "74",
    description: "Introduction to Human Behavior in Organisations",
    image: IMAGE_09,
    reviews: 2,
  },
  {
    id: 10,
    name: "MARK 201",
    match: "98",
    description:"Introduction to Marketing",
    image: IMAGE_10,
    reviews: 2,
  },
];

export default data;
