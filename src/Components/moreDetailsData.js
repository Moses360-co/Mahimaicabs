import Crysta from "./images/crysta.jpeg";
import Ertiga from "./images/ertiga.jpeg";
import Etios from "./images/etios.jpeg";
import Innova from "./images/innova.jpeg";
import Rumaion from "./images/rumaion.jpeg";
import Dzire from "./images/Dzire.jpeg";


import Kodai from "./images/Kodaikanal.jpeg"
import Madurai from "./images/Madurai.jpeg"
import Rameshwaram from "./images/Rameshwaram.jpeg"
import Kochi from "./images/Kochi.jpeg"
import Velankanni from "./images/Velankanni.jpeg"
import Gova from "./images/Gova.jpeg"
import Thoothukudi from "./images/Thoothukudi.jpeg"
import Ooty from "./images/Ooty.jpeg"




const tourPackages = [
  {
    id: "Madurai",
    title: "Madurai Tour Package",
    heroImage:
      [Madurai],
    description:
      "Explore the spiritual and historical beauty of Madurai with famous temples and cultural landmarks.",
    popularPlaces: [
      "Meenakshi Amman Temple",
      "Koodal Azhagar Temple",
      "Thirumalai Nayakkar Palace",
      "Gandhi Memorial Museum",
      "Alagar Kovil",
      "Vandiyur Teppakulam",
      "Thirupparamkunram",
      "Samanar Hills",
      "Keeladi Museum"
    ],
    vehicles: [
       {
        id: 1,
        model: "Etios",
        seating: "4+1",
        ac: false,
        image: [Etios],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2800 },
          { id: 2, days: "2 Days", km: "200 KM", price: 5600 },
          { id: 3, days: "3 Days", km: "300 KM", price: 8400 },
          { id: 4, days: "4 Days", km: "300 KM", price: 11200 },
          { id: 5, days: "5 Days", km: "300 KM", price: 14000},
          { id: 6, days: "6 Days", km: "300 KM", price: 16800 },
          { id: 7, days: "7 Days", km: "300 KM", price: 19600 },
        ]
      },
      {
        id: 2,
        model: "Swift Dzire",
        seating: "4+1",
        ac: true,
        image: [Dzire],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2800 },
          { id: 2, days: "2 Days", km: "200 KM", price: 5600 },
          { id: 3, days: "3 Days", km: "300 KM", price: 8400 },
          { id: 4, days: "4 Days", km: "300 KM", price: 11200 },
          { id: 5, days: "5 Days", km: "300 KM", price: 14000},
          { id: 6, days: "6 Days", km: "300 KM", price: 16800 },
          { id: 7, days: "7 Days", km: "300 KM", price: 19600 },
          
        ]
      },
          {
        id: 3,
        model: "Innova",
        seating: "4+1",
        ac: true,
        image: [Innova],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 3400 },
          { id: 2, days: "2 Days", km: "200 KM", price: 6800 },
          { id: 3, days: "3 Days", km: "300 KM", price: 10200 },
          { id: 4, days: "4 Days", km: "300 KM", price: 13600 },
          { id: 5, days: "5 Days", km: "300 KM", price: 17000},
          { id: 6, days: "6 Days", km: "300 KM", price: 20400 },
          { id: 7, days: "7 Days", km: "300 KM", price: 23800 },
        ]
      },
         {
        id: 4,
        model: "Ertiga",
        seating: "4+1",
        ac: true,
        image: [Ertiga],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 3400 },
          { id: 2, days: "2 Days", km: "200 KM", price: 6800 },
          { id: 3, days: "3 Days", km: "300 KM", price: 10200 },
          { id: 4, days: "4 Days", km: "300 KM", price: 13600 },
          { id: 5, days: "5 Days", km: "300 KM", price: 17000},
          { id: 6, days: "6 Days", km: "300 KM", price: 20400 },
          { id: 7, days: "7 Days", km: "300 KM", price: 23800 },
        ]
      },
         {
        id: 5,
        model: "Toyota Rumion",
        seating: "4+1",
        ac: true,
        image: [Rumaion],
        pricing: [
         { id: 1, days: "1 Day", km: "100 KM", price: 3400 },
          { id: 2, days: "2 Days", km: "200 KM", price: 6800 },
          { id: 3, days: "3 Days", km: "300 KM", price: 10200 },
          { id: 4, days: "4 Days", km: "300 KM", price: 13600 },
          { id: 5, days: "5 Days", km: "300 KM", price: 17000},
          { id: 6, days: "6 Days", km: "300 KM", price: 20400 },
          { id: 7, days: "7 Days", km: "300 KM", price: 23800 },
        ]
      },
         {
        id: 6,
        model: "Innova Crysta",
        seating: "4+1",
        ac: true,
        image: [Crysta],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 4300 },
          { id: 2, days: "2 Days", km: "200 KM", price: 8600 },
          { id: 3, days: "3 Days", km: "300 KM", price: 12900 },
          { id: 4, days: "4 Days", km: "300 KM", price: 17200},
          { id: 5, days: "5 Days", km: "300 KM", price: 21500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 25800 },
          { id: 7, days: "7 Days", km: "300 KM", price: 30100 },
        ]
      }
         
     
     
    ]
  },

{
    id: "kodaikanal",
    title: "Madurai to Kodaikanal Tour Package",
    heroImage:
      [Kodai],
    description:
      "Enjoy the misty hills, lakes, and waterfalls of Kodaikanal with a peaceful hill-station experience.",
    popularPlaces: [
      "Kodaikanal Lake",
      "Coaker’s Walk",
      "Bryant Park",
      "Pillar Rocks",
      "Silver Cascade Falls",
      "Bear Shola Falls",
      "Guna Caves",
      "Pine Forest"
    ],
    vehicles: [
      {
        id: 1,
        model: "Etios",
        seating: "4+1",
        ac: false,
        image: [Etios],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
      {
        id: 2,
        model: "Swift Dzire",
        seating: "4+1",
        ac: true,
        image: [Dzire],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
          {
        id: 3,
        model: "Innova",
        seating: "4+1",
        ac: true,
        image: [Innova],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
         {
        id: 4,
        model: "Ertiga",
        seating: "4+1",
        ac: true,
        image: [Ertiga],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
         {
        id: 5,
        model: "Toyota Rumion",
        seating: "4+1",
        ac: true,
        image: [Rumaion],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
         {
        id: 6,
        model: "Innova Crysta",
        seating: "4+1",
        ac: true,
        image: [Crysta],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      }
    ]
  },
  {
    id: "Rameshwaram",
    title: "Madurai to Rameshwaram Tour Package",
    heroImage:
      [Rameshwaram],
    description:
      "Visit the sacred pilgrimage destination of Rameshwaram, renowned for Ramanathaswamy Temple, spiritual rituals, and the historic Pamban Bridge.",
    popularPlaces: [
      "Ramanathaswamy Temple",
      "Dhanushkodi",
      "Pamban Bridge",
      "Agnitheertham",
      "Kothandaramaswamy Temple",
    ],
    vehicles: [
      {
        id: 1,
        model: "Etios",
        seating: "4+1",
        ac: false,
        image: [Etios],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
      {
        id: 2,
        model: "Swift Dzire",
        seating: "4+1",
        ac: true,
        image: [Dzire],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
          {
        id: 3,
        model: "Innova",
        seating: "4+1",
        ac: true,
        image: [Innova],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
         {
        id: 4,
        model: "Ertiga",
        seating: "4+1",
        ac: true,
        image: [Ertiga],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
         {
        id: 5,
        model: "Toyota Rumion",
        seating: "4+1",
        ac: true,
        image: [Rumaion],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
         {
        id: 6,
        model: "Innova Crysta",
        seating: "4+1",
        ac: true,
        image: [Crysta],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      }
    ]
  },
  {
    id: "Kochi",
    title: "Madurai to Kochi Tour Package",
    heroImage:
      [Kochi],
    description:
      "Discover the coastal beauty of Kochi with its colonial heritage, Chinese fishing nets, beaches, and vibrant Kerala culture.",
    popularPlaces: [
      "Fort Kochi",
      "Chinese Fishing Nets",
      "Mattancherry Palace",
      "Marine Drive",
      "Cherai Beach",
    ],
    vehicles: [
      {
        id: 1,
        model: "Etios",
        seating: "4+1",
        ac: false,
        image: [Etios],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
      {
        id: 2,
        model: "Swift Dzire",
        seating: "4+1",
        ac: true,
        image: [Dzire],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
          {
        id: 3,
        model: "Innova",
        seating: "4+1",
        ac: true,
        image: [Innova],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
         {
        id: 4,
        model: "Ertiga",
        seating: "4+1",
        ac: true,
        image: [Ertiga],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
         {
        id: 5,
        model: "Toyota Rumion",
        seating: "4+1",
        ac: true,
        image: [Rumaion],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
         {
        id: 6,
        model: "Innova Crysta",
        seating: "4+1",
        ac: true,
        image: [Crysta],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      }
    ]
  },
  {
    id: "Velankanni",
    title: "Madurai to Velankanni Tour Package",
    heroImage:
    [Velankanni],
    description:
      "Relax at Varkala’s stunning cliff-side beaches, known for breathtaking sunsets, yoga retreats, and Ayurvedic experiences.",
    popularPlaces: [
      "Varkala Beach",
      "Varkala Cliff",
      "Janardhana Swamy Temple",
      "Sivagiri Mutt",
    ],
    vehicles: [
      {
        id: 1,
        model: "Etios",
        seating: "4+1",
        ac: false,
        image: [Etios],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
      {
        id: 2,
        model: "Swift Dzire",
        seating: "4+1",
        ac: true,
        image: [Dzire],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
          {
        id: 3,
        model: "Innova",
        seating: "4+1",
        ac: true,
        image: [Innova],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
         {
        id: 4,
        model: "Ertiga",
        seating: "4+1",
        ac: true,
        image: [Ertiga],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
         {
        id: 5,
        model: "Toyota Rumion",
        seating: "4+1",
        ac: true,
        image: [Rumaion],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
         {
        id: 6,
        model: "Innova Crysta",
        seating: "4+1",
        ac: true,
        image: [Crysta],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      }
    ]
  },
  
  {
    id: "Gova",
    title: "Madurai to Gova  Tour Package",
    heroImage:
      [Gova],
    description:
      "Enjoy the lively beaches, nightlife, water sports, and Portuguese heritage architecture that make Goa a top holiday destination.",
    popularPlaces: [
      "Baga Beach",
      "Calangute Beach",
      "Dudhsagar Falls",
      "Fort Aguada",
      "Basilica of Bom Jesus",
    ],
    vehicles: [
      {
        id: 1,
        model: "Etios",
        seating: "4+1",
        ac: false,
        image: [Etios],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
      {
        id: 2,
        model: "Swift Dzire",
        seating: "4+1",
        ac: true,
        image: [Dzire],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
          {
        id: 3,
        model: "Innova",
        seating: "4+1",
        ac: true,
        image: [Innova],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
         {
        id: 4,
        model: "Ertiga",
        seating: "4+1",
        ac: true,
        image: [Ertiga],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
         {
        id: 5,
        model: "Toyota Rumion",
        seating: "4+1",
        ac: true,
        image: [Rumaion],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
         {
        id: 6,
        model: "Innova Crysta",
        seating: "4+1",
        ac: true,
        image: [Crysta],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      }
    ]
  },
  {
    id: "Thoothukudi",
    title: "Madurai to Thoothukudi Tour Package",
    heroImage:
      [Thoothukudi],
    description:
      "Explore the port city of Thoothukudi, famous for its beaches, historic churches, salt pans, and peaceful coastal atmosphere.",

    popularPlaces: [
      "Our Lady of Snows Basilica",
      "Thoothukudi Beach",
      "Hare Island",
      "Kalugumalai",
    ],
    vehicles: [
      {
        id: 1,
        model: "Etios",
        seating: "4+1",
        ac: false,
        image: [Etios],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
      {
        id: 2,
        model: "Swift Dzire",
        seating: "4+1",
        ac: true,
        image: [Dzire],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
          {
        id: 3,
        model: "Innova",
        seating: "4+1",
        ac: true,
        image: [Innova],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
         {
        id: 4,
        model: "Ertiga",
        seating: "4+1",
        ac: true,
        image: [Ertiga],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
         {
        id: 5,
        model: "Toyota Rumion",
        seating: "4+1",
        ac: true,
        image: [Rumaion],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
         {
        id: 6,
        model: "Innova Crysta",
        seating: "4+1",
        ac: true,
        image: [Crysta],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      }
    ]
  },
  {
    id: "ooty",
    title: "Madurai to ooty Tour Package",
    heroImage:
      [Ooty],
    description:
      "Experience the breathtaking beauty of Ooty (Udhagamandalam), the Queen of Hill Stations, known for its misty mountains, tea gardens, cool climate, and scenic viewpoints.",

    popularPlaces: [
      "Ooty Lake",
    "Botanical Garden",
    "Doddabetta Peak",
    "Rose Garden",
    "Tea Factory & Tea Museum",
    "Pykara Lake",
    "Pykara Waterfalls",
    "Nilgiri Mountain Railway",
    "Emerald Lake"
    ],
    vehicles: [
      {
        id: 1,
        model: "Etios",
        seating: "4+1",
        ac: false,
        image: [Etios],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
      {
        id: 2,
        model: "Swift Dzire",
        seating: "4+1",
        ac: true,
        image: [Dzire],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
          {
        id: 3,
        model: "Innova",
        seating: "4+1",
        ac: true,
        image: [Innova],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
         {
        id: 4,
        model: "Ertiga",
        seating: "4+1",
        ac: true,
        image: [Ertiga],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
         {
        id: 5,
        model: "Toyota Rumion",
        seating: "4+1",
        ac: true,
        image: [Rumaion],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      },
         {
        id: 6,
        model: "Innova Crysta",
        seating: "4+1",
        ac: true,
        image: [Crysta],
        pricing: [
          { id: 1, days: "1 Day", km: "100 KM", price: 2500 },
          { id: 2, days: "2 Days", km: "200 KM", price: 4500 },
          { id: 3, days: "3 Days", km: "300 KM", price: 6500 },
          { id: 4, days: "4 Days", km: "300 KM", price: 6500 },
          { id: 5, days: "5 Days", km: "300 KM", price: 6500 },
          { id: 6, days: "6 Days", km: "300 KM", price: 6500 },
          { id: 7, days: "7 Days", km: "300 KM", price: 6500 },
        ]
      }
    ]
  }
];

export default tourPackages;
