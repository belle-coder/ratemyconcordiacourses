import { DataT } from "../../types";
import IMAGE_01 from "../images/11.jpg";
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
    isOnline: true,
    match: "78",
    description:
      "Introduction to Java and Object Oriented Programming",
    message:
      "",
    image: IMAGE_01,
  },
  {
    id: 2,
    name: "COMP 228",
    match: "93",
    description:
      "Computer Hardware",
    isOnline: false,
    message: "",
    image: IMAGE_02,
  },
  {
    id: 3,
    name: "COMP 353",
    match: "45",
    description:
      "Database and storage",
    isOnline: false,
    message:
      "  ",
    image: IMAGE_03,
  },
  {
    id: 4,
    name: "COMP 445",
    match: "88",
    description:
      "Computer Networks and Communications",
    isOnline: true,
    message: "",
    image: IMAGE_04,
  },
  {
    id: 5,
    name: "SOEN 357",
    match: "76",
    description:
      "User Interface and Design",
    isOnline: false,
    message: " ",
    image: IMAGE_05,
  },
  {
    id: 6,
    name: "SOEN 228",
    match: "95",
    description:
      "Web design",
    isOnline: true,
    message:
      " ",
    image: IMAGE_06,
  },
  {
    id: 7,
    name: "COMP 352",
    match: "67",
    description:
      "Data Structure and Algorithms",
    isOnline: true,
    message:
      "",
    image: IMAGE_07,
  },
  {
    id: 8,
    name: "PHIL 210",
    match: "85",
    description:
      "Introduction to Critical Thinking",
    age: "27",
    location: "location",
    info1: 'Approved general electives',
    info2: "Can be taken remote",
    info3: "Can be taken remote",
    info4: "Last seen: test ago",
    isOnline: true,
    message:
      "hellon.",
    image: IMAGE_08,
  },
  {
    id: 9,
    name: "MANA 202",
    match: "74",
    description:
      "Introduction to Human Behavior in Organisations",
    isOnline: true,
    message:
      "nothing",
    image: IMAGE_09,
  },
  {
    id: 10,
    name: "MARK 201",
    match: "98",
    description:
      "Introduction to Marketing",
    isOnline: false,
    message:
      "messages in dms",
    image: IMAGE_10,
  },
];

export default data;
