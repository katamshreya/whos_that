import michaelJackson from "../assets/Michael_Jackson.webp";
import arianaGrande from "../assets/ariana_grande.webp";
import billieEilish from "../assets/billie_eilish.webp";
import brunoMars from "../assets/bruno_mars.jpeg";
import charliXcx from "../assets/charli_xcx.webp";
import lanaDelRay from "../assets/lana_del_ray.webp";
import pinkPantheress from "../assets/pink_panthress.jpg";
import rihanna from "../assets/rihanna.webp";
import selenaGomez from "../assets/selena_gomez.jpg";
import theWeeknd from "../assets/the_weeknd.webp";

const cards = [
  {
    id: 1,
    name: "Michael Jackson",
    hint: "This person sold over 750 million records — more than almost any artist in history.",
    imageUrl: michaelJackson,
    // Just the eyes, very tight
    cropPosition: "50% 35%",
    cropScale: "380%",
  },
  {
    id: 2,
    name: "Ariana Grande",
    hint: "This person holds a Guinness World Record for being the first artist to have their first 3 albums debut at #1.",
    imageUrl: arianaGrande,
    // Just the eyes
    cropPosition: "50% 30%",
    cropScale: "400%",
  },
  {
    id: 3,
    name: "Billie Eilish",
    hint: "This person became the youngest artist ever to win all four main Grammy categories in a single year.",
    imageUrl: billieEilish,
    // Blue eyes tight
    cropPosition: "50% 32%",
    cropScale: "400%",
  },
  {
    id: 4,
    name: "Bruno Mars",
    hint: "This person has won more Grammy Awards for Record of the Year than any other solo artist.",
    imageUrl: brunoMars,
    // Just the eyes under the hat brim
    cropPosition: "50% 58%",
    cropScale: "420%",
  },
  {
    id: 5,
    name: "Charli XCX",
    hint: "This person's album title became the defining word for an entire cultural moment in summer 2024.",
    imageUrl: charliXcx,
    // Tight on the bold liner eye
    cropPosition: "38% 30%",
    cropScale: "420%",
  },
  {
    id: 6,
    name: "Lana Del Rey",
    hint: "This person is known for a cinematic, melancholic sound she calls 'Hollywood sadcore.'",
    imageUrl: lanaDelRay,
    // Just the eyes + brow
    cropPosition: "50% 28%",
    cropScale: "400%",
  },
  {
    id: 7,
    name: "Pink Pantheress",
    hint: "This person blew up overnight after a TikTok went viral in 2021, blending Y2K sounds with drum and bass.",
    imageUrl: pinkPantheress,
    // Eyes under the bangs
    cropPosition: "50% 32%",
    cropScale: "420%",
  },
  {
    id: 8,
    name: "Rihanna",
    hint: "This person performed at the Super Bowl Halftime Show while secretly pregnant — and didn't tell anyone until after.",
    imageUrl: rihanna,
    // Just the eyes, dramatic makeup
    cropPosition: "50% 30%",
    cropScale: "420%",
  },
  {
    id: 9,
    name: "Selena Gomez",
    hint: "This person is the most-followed woman on Instagram and owns a billion-dollar beauty brand.",
    imageUrl: selenaGomez,
    // Tight on the eyes
    cropPosition: "50% 28%",
    cropScale: "400%",
  },
  {
    id: 10,
    name: "The Weeknd",
    hint: "This person's 'Blinding Lights' spent more weeks on the Billboard Hot 100 than any song in chart history.",
    imageUrl: theWeeknd,
    // Just the eyes
    cropPosition: "50% 32%",
    cropScale: "400%",
  },
];

export default cards;