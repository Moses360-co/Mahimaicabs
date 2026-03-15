import Coach from "./images/coach.jpeg";
import Crysta from "./images/crysta.jpeg";
import Ertiga from "./images/ertiga.jpeg";
import Etios from "./images/etios.jpeg";
import Innova from "./images/innova.jpeg";
import Rumaion from "./images/rumaion.jpeg";
import Tempo from "./images/tempo.jpeg";

const tariffData = [
  {
    id: 1,
    vehicleName: "Sedan (Etios GD / Swift Dzire)",
    image: Etios,
    seating: "4+1",
    minKmLimit: 300,
    tariff: {
      aboveKm: {
        perKm: 14,
        driverBata: 400,
      },
      belowKm: {
        charges: 10,
        dayRent: 1600,
      },
    },
  },
  {
    id: 2,
    vehicleName: "SUV (Innova)",
    image: Innova,
    seating: "7+1",
    minKmLimit: 300,
    tariff: {
      aboveKm: {
        perKm: 18,
        driverBata: 500,
      },
      belowKm: {
        charges: 13,
        dayRent: 2100,
      },
    },
  },
  {
    id: 3,
    vehicleName: "SUV (Ertiga)",
    image: Ertiga,
    seating: "6+1",
    minKmLimit: 300,
    tariff: {
      aboveKm: {
        perKm: 18,
        driverBata: 500,
      },
      belowKm: {
        charges: 13,
        dayRent: 2100,
      },
    },
  },
  {
    id: 4,
    vehicleName: "SUV (Toyota Rumion)",
    image: Rumaion,
    seating: "6+1",
    minKmLimit: 300,
    tariff: {
      aboveKm: {
        perKm: 18,
        driverBata: 500,
      },
      belowKm: {
        charges: 13,
        dayRent: 2100,
      },
    },
  },
  {
    id: 5,
    vehicleName: "SUV (Innova Crysta)",
    image: Crysta,
    seating: "7+1",
    minKmLimit: 300,
    tariff: {
      aboveKm: {
        perKm: 22,
        driverBata: 800,
      },
      belowKm: {
        charges: 14,
        dayRent: 2500,
      },
    },
  },
  {
    id: 6,
    vehicleName: "Tempo Traveller (12+1)",
    image: Tempo,
    seating: "12+1",
    minKmLimit: 350,
    tariff: {
      aboveKm: {
        perKm: 24,
        driverBata: 800,
      },
      belowKm: {
        charges: 18,
        dayRent: 2800,
      },
    },
  },
  {
    id: 7,
    vehicleName: "Tempo Traveller (14+1)",
    image: Tempo,
    seating: "14+1",
    minKmLimit: 350,
    tariff: {
      aboveKm: {
        perKm: 24,
        driverBata: 800,
      },
      belowKm: {
        charges: 18,
        dayRent: 2800,
      },
    },
  },
  {
    id: 8,
    vehicleName: "Tempo Traveller (16+1)",
    image: Tempo,
    seating: "16+1",
    minKmLimit: 350,
    tariff: {
      aboveKm: {
        perKm: 26,
        driverBata: 800,
      },
      belowKm: {
        charges: 25,
        dayRent: 3000,
      },
    },
  },
  {
    id: 9,
    vehicleName: "Tempo Traveller (18+1)",
    image: Tempo,
    seating: "18+1",
    minKmLimit: 350,
    tariff: {
      aboveKm: {
        perKm: 25,
        driverBata: 800,
      },
      belowKm: {
        charges: 19,
        dayRent: 3000,
      },
    },
  },
  {
    id: 10,
    vehicleName:
      "Coach (Van Non-AC) – Tamil Nadu & Pondicherry Only",
    image: Coach,
    seating: "21+1",
    minKmLimit: 350,
    tariff: {
      aboveKm: {
        perKm: 25,
        driverBata: 1000,
      },
      belowKm: {
        charges: 19,
        dayRent: 3500,
      },
    },
  },
  {
    id: 11,
    vehicleName:
      "Coach (Van AC) – Tamil Nadu & Pondicherry Only",
    image: Coach,
    seating: "21+1",
    minKmLimit: 350,
    tariff: {
      aboveKm: {
        perKm: 26,
        driverBata: 1000,
      },
      belowKm: {
        charges: 20,
        dayRent: 3800,
      },
    },
  },
  
];

export default tariffData;