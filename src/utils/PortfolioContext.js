import React, {createContext} from 'react';

let portfolioItems = [
    {
        id: 1,
        title: "Eat Da Burger!",
        image: "./images/eat-da-burger.png",
        description: "Have you ever wanted to keep track of all the burgers you've consumed and have yet to consume? Then this is the app for you! Eat-Da-Burger allows users to add burgers via text-input and then devour them. Burgers devoured move to a separate list. All urgers added and devoured are stored in a SQL database table.",
        repo: "https://github.com/whackingMUFN/Eat-Da-Burger",
        live_site: "https://whispering-bayou-19745.herokuapp.com/",
        technologies: [
            "HTML/CSS",
            "JavaScript",
            "MySQL & MySQL Workbench",
            "Bootstrap",
            "Node & NPM",
            "VS Code",
            "cmder"
        ]
    },
    {
        id: 2,
        title: "Employee Manager",
        image: "./images/viewAll.gif",
        description: "Use this application to manage your company's employees, roles, and departments. Employee Manager uses a series of CLI prompts that kick off queries to a MySQL database based on the user's input.",
        repo: "https://github.com/whackingMUFN/Employee_Manager",
        technologies: [
            "JavaScript",
            "Node & NPM",
            "MySQL & MySQL Workbench"
        ]
    },
    {
        id: 3,
        title: "Jasmine-RPG",
        image: "./images/jasmine-rpg.gif",
        description: "Create a fantasy character to take on adventures or send to the fight pits! Adventures allow characters to find ancient relics, armor, or weapons that will boost character stats.",
        repo: "https://github.com/whackingMUFN/Jasmine-RPG",
        live_site: "https://team-jasmine-rpg.herokuapp.com/",
        technologies: [
            "HTML/CSS",
            "JavaScript/jQuery/Ajax",
            "Node & NPM",
            "MySQL & MySQL Workbench",
            "Heroku"
        ]
    },
    {
        id: 4,
        title: "React Employee Directory",
        image: "./images/react-directory-display.png",
        description: "Construcuted with React, this application pulls in employee data from an API and maps each user to a row. Employees can be filtered by typing any portion of their name, phone, email, or birth year. Sorting by [A-Z] or [Z-A] can be performed on Name and Email, and by [0-9] or [9-0] Phone and DOB. Image is not a sortable item.",
        repo: "https://github.com/whackingMUFN/react-employee-directory",
        live_site: "https://whackingmufn.github.io/react-employee-directory/",
        technologies: [
            "HTML/CSS",
            "JavaScript",
            "React",
            "Node & NPM"
        ]
    },
    {
        id: 5,
        title: "Budget Tracker",
        image: "./images/budget-sample.png",
        description: "Track your incoming and outgoing transactions on or offline! While offline, transactions are cached using indexedDB. As soon as the application goes online, the records in indexedDB are pushed to a mongo database.",
        repo: "https://github.com/whackingMUFN/Budget-Tracker",
        live_site: "https://radiant-chamber-05596.herokuapp.com/",
        technologies: [
            "HTML/CSS",
            "JavaScript",
            "MongoDB",
            "Node & NPM",
            "Heroku"
        ]
    },
    {
        id: 6,
        title: "Worldwide COVID-19",
        image: "./images/worldwide-covid-19.png",
        description: "Delivers COVID-19 statistics, news articles, and visual data for a selected country by utilizing API calls with jQuery/Ajax.",
        live_site: "https://afazeez82.github.io/worldwidecovid19-githubio.com/",
        technologies: [
            "HTML/CSS",
            "UIKit",
            "JavaScript/jQuery/Ajax",
            "RapidAPI"
        ]
    }
]

export const PortfolioContext = createContext(portfolioItems);