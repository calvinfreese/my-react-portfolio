(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{23:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a(1),c=a.n(s),n=a(15),r=a.n(n),o=(a(23),a(17)),l=a(9);var d=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(i.jsxs)("nav",{className:"navbar is-info",role:"navigation","aria-label":"main navigation",children:[Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)("a",{class:"navbar-item",href:"my-react-portfolio/",children:Object(i.jsx)("figure",{className:"image is-32x32",children:Object(i.jsx)("img",{className:"is-rounded",src:"/Assets/Images/logo.png",alt:"logo"})})}),Object(i.jsxs)("a",{onClick:function(){c(!a)},role:"button",className:"navbar-burger burger ".concat(a?"is-active":""),"aria-label":"menu","aria-expanded":"false","data-target":"navbarLinks",children:[Object(i.jsx)("span",{"aria-hidden":"true"}),Object(i.jsx)("span",{"aria-hidden":"true"}),Object(i.jsx)("span",{"aria-hidden":"true"})]})]}),Object(i.jsx)("div",{id:"navbarLinks",className:"navbar-menu ".concat(a?"is-active":""),children:Object(i.jsxs)("div",{className:"navbar-start",children:[Object(i.jsx)(l.b,{exact:!0,className:"navbar-item",to:"my-react-portfolio/",children:"Portfolio"}),Object(i.jsx)(l.b,{exact:!0,className:"navbar-item",to:"my-react-portfolio/about",children:"About"})]})})]})},j=[{id:1,title:"Eat Da Burger!",image:"./images/eat-da-burger.png",description:"Have you ever wanted to keep track of all the burgers you've consumed and have yet to consume? Then this is the app for you! Eat-Da-Burger allows users to add burgers via text-input and then devour them. Burgers devoured move to a separate list. All urgers added and devoured are stored in a SQL database table.",repo:"https://github.com/whackingMUFN/Eat-Da-Burger",live_site:"https://whispering-bayou-19745.herokuapp.com/",technologies:["HTML/CSS","JavaScript","MySQL & MySQL Workbench","Bootstrap","Node & NPM","VS Code","cmder"]},{id:2,title:"Employee Manager",image:"./images/viewAll.gif",description:"Use this application to manage your company's employees, roles, and departments. Employee Manager uses a series of CLI prompts that kick off queries to a MySQL database based on the user's input.",repo:"https://github.com/whackingMUFN/Employee_Manager",technologies:["JavaScript","Node & NPM","MySQL & MySQL Workbench"]},{id:3,title:"Jasmine-RPG",image:"./images/jasmine-rpg.gif",description:"Create a fantasy character to take on adventures or send to the fight pits! Adventures allow characters to find ancient relics, armor, or weapons that will boost character stats.",repo:"https://github.com/whackingMUFN/Jasmine-RPG",live_site:"https://team-jasmine-rpg.herokuapp.com/",technologies:["HTML/CSS","JavaScript/jQuery/Ajax","Node & NPM","MySQL & MySQL Workbench","Heroku"]},{id:4,title:"React Employee Directory",image:"./images/react-directory-display.png",description:"Construcuted with React, this application pulls in employee data from an API and maps each user to a row. Employees can be filtered by typing any portion of their name, phone, email, or birth year. Sorting by [A-Z] or [Z-A] can be performed on Name and Email, and by [0-9] or [9-0] Phone and DOB. Image is not a sortable item.",repo:"https://github.com/whackingMUFN/react-employee-directory",live_site:"https://whackingmufn.github.io/react-employee-directory/",technologies:["HTML/CSS","JavaScript","React","Node & NPM"]},{id:5,title:"Budget Tracker",image:"./images/budget-sample.png",description:"Track your incoming and outgoing transactions on or offline! While offline, transactions are cached using indexedDB. As soon as the application goes online, the records in indexedDB are pushed to a mongo database.",repo:"https://github.com/whackingMUFN/Budget-Tracker",live_site:"https://radiant-chamber-05596.herokuapp.com/",technologies:["HTML/CSS","JavaScript","MongoDB","Node & NPM","Heroku"]},{id:6,title:"Worldwide COVID-19",image:"./images/worldwide-covid-19.png",description:"Delivers COVID-19 statistics, news articles, and visual data for a selected country by utilizing API calls with jQuery/Ajax.",live_site:"https://afazeez82.github.io/worldwidecovid19-githubio.com/",technologies:["HTML/CSS","UIKit","JavaScript/jQuery/Ajax","RapidAPI"]}],h=Object(s.createContext)(j);var m=function(){var e=Object(s.useContext)(h);return console.log(e),Object(i.jsxs)("div",{className:"container ",children:[Object(i.jsx)("div",{className:"level"}),Object(i.jsx)("div",{className:"columns is-multiline is-centered is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-1-fullhd",children:e.map((function(e,t){return console.log(e),e.live_site?Object(i.jsx)("div",{className:"column is-4",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"card-image",children:Object(i.jsx)("figure",{className:"image is-3by2",children:Object(i.jsx)("img",{src:e.image,className:"card-img-top",alt:e.title})})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("div",{className:"media-content",children:Object(i.jsx)("p",{className:"title is-centered notification is-warning",children:e.title})}),Object(i.jsx)("div",{className:"content pt-2",children:Object(i.jsx)("p",{children:e.description})}),Object(i.jsxs)("footer",{className:"card-footer",children:[Object(i.jsx)("a",{href:e.repo,rel:"noreferrer",target:"_blank",className:"card-footer-item",children:"Github Repository"}),Object(i.jsx)("a",{href:e.live_site,rel:"noreferrer",target:"_blank",className:"card-footer-item",children:"Live Site"})]})]})]},t)}):Object(i.jsx)("div",{className:"column is-4",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"card-image",children:Object(i.jsx)("figure",{className:"image is-3by2",children:Object(i.jsx)("img",{src:e.image,className:"card-img-top",alt:e.title})})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("div",{className:"media-content",children:Object(i.jsx)("p",{className:"title is-centered notification is-warning",children:e.title})}),Object(i.jsx)("div",{className:"content pt-2",children:Object(i.jsx)("p",{children:e.description})}),Object(i.jsx)("footer",{className:"card-footer",children:Object(i.jsx)("a",{href:e.repo,rel:"noreferrer",target:"_blank",className:"card-footer-item",children:"Github Repository"})})]})]},t)})}))}),Object(i.jsx)("div",{className:"level"})]})};var b=function(){return Object(i.jsx)("footer",{className:"footer notification is-warning",children:Object(i.jsx)("div",{className:"content has-text-centered",children:Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{className:"no-decoration",children:["GitHub Profile: ",Object(i.jsx)("a",{href:"https://github.com/whackingMUFN",target:"_blank",rel:"noreferrer",children:"Here"})]}),Object(i.jsx)("li",{className:"no-decoration",children:" || "}),Object(i.jsxs)("li",{className:"no-decoration",children:["LinkedIn: ",Object(i.jsx)("a",{href:"https://www.linkedin.com/in/calvin-freese-68376a121/",children:"Here "})]})]})})})};var u=function(){return Object(i.jsx)("section",{className:"section is-tall-container",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"columns about-container-bg",children:[Object(i.jsxs)("div",{className:"column",children:[Object(i.jsx)("h1",{className:"title notification is-info",children:" About Me"}),Object(i.jsx)("div",{className:"columns is-mobile is-centered",children:Object(i.jsxs)("div",{className:"column",children:[Object(i.jsx)("img",{className:"profile-img",src:window.location.origin+"/Assets/Images/Photo_of_Me.jpg",alt:"my face"}),Object(i.jsx)("h3",{className:"subtitle",children:"Full Stack Web Developer, cat dad, and video game fanatic."}),Object(i.jsx)("p",{className:"about-p",children:"Dedicated Full Stack Web Developer intent on providing thorough and creative solutions while using empathy, problem-solving, and leadership skills refined by years of working in the IT space supporting customers in retail, corporate, and distribution environments. Web development certificate achieved through University of Minnesota College of Continuing and Professional Studies, St. Paul, MN. Aim to deliver responsive websites, catered to the functional requirements of the client without sacrificing design by utilizing my skills in React, Express, and Node."}),Object(i.jsx)("p",{className:"about-p",children:" In my free time, I can be found buried beneath a pile of sci-fi/fantasy novels, jamming on my guitar, exploring the vast world of Hyrule, or amongst the crowd at a local music venue.  "})]})})]}),Object(i.jsxs)("div",{className:"column",children:[Object(i.jsx)("h1",{className:"title notification is-warning",children:"Contact Me"}),Object(i.jsx)("div",{className:"columns is-mobile",children:Object(i.jsx)("div",{className:"column",children:Object(i.jsxs)("ul",{className:"block-list has-radius is-dark is-outlined is-medium is-centered",children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("i",{class:"fa fa-phone-square"}),Object(i.jsx)("span",{children:" Phone Number:"}),Object(i.jsx)("a",{href:"tel:7638439369",children:" (763) 843-9369"})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("i",{class:"fa fa-envelope-square"}),Object(i.jsx)("span",{children:" Email Address:"}),Object(i.jsx)("a",{href:"mailto: calvin.freese@hotmail.com",children:" calvin.freese@hotmail.com"})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("i",{class:"fa fa-file"}),Object(i.jsx)("span",{children:" PDF Resume: "}),Object(i.jsx)("a",{href:"./Assets/Resume/CF-Resume-2020.pdf",rel:"noreferrer",target:"_blank",children:" Open"})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("i",{class:"fa fa-github-square"}),Object(i.jsx)("span",{children:" GitHub:"}),Object(i.jsx)("a",{href:"https://github.com/whackingMUFN",rel:"noreferrer",target:"_blank",children:" whackingMUFN"})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("i",{class:"fa fa-linkedin"})," ",Object(i.jsx)("span",{children:" LinkedIn:"}),Object(i.jsx)("a",{href:"https://www.linkedin.com/in/calvin-freese-68376a121/",rel:"noreferrer",target:"_blank",children:" Calvin Freese"})]})]})})})]})]})})})},p=(a(29),a(2));var g=function(){return Object(i.jsxs)(l.a,{basename:"/my-react-portfolio",children:[Object(i.jsx)(d,{}),Object(i.jsx)("main",{className:"is-tall",children:Object(i.jsxs)(p.c,{children:[Object(i.jsx)(p.a,{exact:!0,path:"/",component:m}),Object(i.jsx)(p.a,{path:"/about",component:u})]})}),Object(i.jsx)(b,{})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),i(e),s(e),c(e),n(e)}))};a(30);r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),f()}},[[31,1,2]]]);
//# sourceMappingURL=main.9d6dbfb6.chunk.js.map