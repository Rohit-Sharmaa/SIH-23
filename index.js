import express from "express";
import { PORT } from "./config.js";
import ejs from "ejs";

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");


const quizArr = [
  {
    section: "Emotional Well-being",
    question:[ 
      {
      "q1": "On a scale of 1 to 10, how would you rate your overall emotional well-being, with 1 being very poor and 10 being excellent?",
   
    },
  ]
  },
  {
    section:  "Mood Disorders",
    question: [
      {

      "q1": "How often have you felt overwhelmed by stress or anxiety in the past week?",
      "q2": "How often have you experienced periods of unusually elevated mood, increased energy, and impulsivity?",
    },
    ]
  },

  {
    section: "Mood and Happiness",
    question: [{
      "q1": "On average, how would you rate your mood over the past week?",
      "q2": "How often do you experience moments of happiness or joy?",
    },]
  },

  {
    section: "Relationships",
    question:[ {
      "q1": "How satisfied are you with your current social relationships and support system?",
      "q2": "Rate your level of loneliness or isolation over the past week.",
    },]
  },

  {
    section: "Self-esteem and Self-worth",
    question: [{
      "q1": "How would you rate your self-esteem and self-worth",

    },]
  },

  {
    section: "Coping Mechanisms",
    question: [{
      "q1": "How often did you engage in self-care activities or coping strategies to manage your mental health in the past week?",
      "q2": "How would you rate your ability to express your emotions and seek support when needed?",
    },]
  },

  {
    section:  "Overall Life Satisfaction",
    question:[ {
      "q1": "How satisfied are you with your overall life circumstances at the moment?",
    },]
  },

  {
    section: "Future Outlook ",
    question: [{
      "q1": "How optimistic are you about your future?",
    },]
  },
  ];





app.get("/quiz", (req, res) => {

  res.render("quiz", {quizArr});
});

app.listen(PORT, (req, res) => {
  console.log("app is listening");
});

