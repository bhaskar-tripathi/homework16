// import axios from "axios";
import axios from "axios";

const profData = {
  name: "Bhaskar Tripathi",
  tagline: "SAP HCM Consultant",
  phone: "949-294-6447",
  email: "b108t@outlook.com",
  summary: `A self motivated critical thinker with a strong background in SAP HCM. Robust knowledge and deep experience in technical as well as functional SAP HR. Also crossed skilled in other technologies like integration and full stack development (MERN)`,
  background: ["Bhaskar Tripathi has over 13 years of IT experience, including 12 years in SAP HCM experience in both Implementation and Support Projects.",
    "He has significant experience in US Payroll, Time Management, Organizational Management, Personnel Administration, HR Renewal, SAP-SF EC integration.",
    "Certified in Employee Central (SuccessFactors) , Performance Management Goal Manage (PMGM).",
    "Certified in Dell Boomi Integration.",
    "MS in Software Engineering, Birla Institute of Technology and Science."
  ],
  linkedIn: "https://www.linkedin.com/in/bhaskar-tripathi-b231b714",
  github: "https://github.com/bhaskar-tripathi",
  projects: [
    {
      id: "project1",
      name: "Note Taker App",
      description: "This app lets you save you notes and keep the list of stored notes handy for you to look up later. It also let you delete the note you no longer wish to keep.",
      url: "https://note-taker-app-bt.herokuapp.com/"
    },
    {
      id: "project2",
      name: "Weekly Meal Planner",
      description: `As a health-conscious person with a busy schedule, I want to be able to look up recipes and be able to add them to my calendar so that I can plan my weekly meal plans.
          Delivered using:
          UIKit Edamam API Google Calendar API
          Search bar allows for up to 100 recipes
          The results are displayed in an accordion that has the ingredients, a picture, and the link to the recipe.
          A calendar button allows the user to add it to their calendar.`,
      url: "https://hollyisaredhead.github.io/Weekly-meal-planner/"
    },
    {
      id: "project3",
      name: "Budget Tracker",
      description: `An application that allows you to track your budget. This app works offline too. That means... 
          you can add expenses and deposits to your budget with or without a connection. You can download the app
          on your phone or on your mobile device using "Add to Home Screen" option from browser menu.`,
      url: "https://bt-budget-app.herokuapp.com/"
    },
    {
      id: "project4",
      name: "Weather Dashboard",
      description: `An application that lets to check the weather forcast for any city. The city search allows to 
          pick a city as you type. This app also stores your last 5 city searches which you can click directly to get
          their current weather.`,
      url: "https://bhaskar-tripathi.github.io/homework6/"
    },
    {
      id: "project5",
      name: "Employee Data Search",
      description: `An application that let you view your employee's database. It allows you to filter or sort by
          any column.`,
      url: "https://bhaskar-tripathi.github.io/homework15/"
    },
    {
      id: "project6",
      name: "Fitness Tracker",
      description: `An application that you can use to view, create and track daily workouts. you can 
          log multiple exercises in a workout on a given day. It allows you to track the name,
          type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, 
          you are able to track the distance traveled`,
      url: "https://bt-fitness.herokuapp.com/"
    }
  ]
};
export default {
  getProfileData: function (profUser) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (profUser !== "bhaskar") {
          reject(new Error("No Profile Data Found!!!"))
        }
        else {
          resolve(profData);
        }
      }, 100);
    })
  },
  getMyBlogs: function (user = "bhaskar.tripathi") {
    return axios.get(`https://content.services.sap.com/cs/searches/userProfile?userName=${user}&objectTypes=blogpost&sort=published,desc&size=20&page=0`,
      {
        headers: {
          // 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          // 'crossdomain': true
    }
      })
      .then(res => {
        return res.data._embedded.contents;
      })
  }
};
