const icons = {
  react: {
    filename: "react.svg",
    iconWidth: 30,
    iconHeight: 30,
  },
  mysql: {
    filename: "mysql.png",
    iconWidth: 30,
    iconHeight: 30
  },
  mongodb: {
    filename: "mongodb.svg",
    className: "mongo-icon",
    iconWidth: 70,
    iconHeight: 30,
  },
  nodejs: {
    filename: "nodejs.svg",
    iconWidth: 30,
    iconHeight: 30
  },
  svelte: {
    filename: "svelte.svg",
    iconWidth: 30,
    iconHeight: 30
  }
}


const products = [
  // {
  //   name: "Hi! I'm a React developer with professional experience",
  //   icons: [ ],
  //   github: "https://github.com/red365/",
  //   strapline: "Stay tuned to view some personal projects I have worked on as well as the tech stack used...",
  //   description: "",
  //   image: ""
  // },
  {
    name: "Invoicer",
    icons: [{icon:"bxl-react", iconName: "React"}, {icon:"bxl-typescript", iconName: "Typescript"}, {icon: "bxs-data", iconName: "MySQL"}, {icon:"bxl-nodejs", iconName: "NodeJS"} ],
    github: "https://github.com/red365/invoicer",
    strapline: "Store invoice data and create printable invoices",
    description: "",
    problem: "I was wasting too much time each month converting timesheet data into invoices",
    solutionHeader: "An app that produces printable and itemised invoices.",
    solutionText: [
      "Invoice data is entered and saved to the database along with a timesheet reference.", 
      "Timesheets can be exported from Excel in CSV format and imported and processed by Invoicer", 
      "The timesheet reference acts as a hook to retrieve the CSV data and import it to the invoice ready for printing.", 
      "Written in the functional component React style",
      "Features pagination component to help the user browse through invoices",
      "Uses custom hook to manage status notifications returned from API calls",
      "Uses Typescript to make the development process more efficient"
    ],
    image: "invoicer.PNG"
  },
  {
    name: "Fridge Note",
    icons: [{icon: "svelte", iconName: "Svelte"}, {icon: "bxl-mongodb", iconName: "MongoDB"}, {icon:"bxl-nodejs", iconName: "NodeJS"} ],
    // icons: [icons.svelte, icons.mongodb, icons.nodejs],
    github: "https://github.com/red365/fridge-note-2-revenge-of-the-fridge",
    strapline: "Place reminder notes on a virtual fridge",
    description: "",
    problem: "I wanted to make a to-do list that was a bit more interesting than a typical list",
    solutionHeader: "An app modelled on the real world scenario of putting sticky notes on a fridge.",
    solutionText: ["Notes have a random tilt applied.", "Originally written in plain Javascript with no data storage.", "Refactored to explore the Svelte programming workflow.", "A MongoDB back-end was added to store the note data"],
    image: "fridge-note-screenshot.PNG"
  },
    {
    name: "Home VJ",
    icons: [{icon:"bxl-react", iconName: "React"}, {icon: "bxs-data", iconName: "MySQL"}, {icon:"bxl-nodejs", iconName: "NodeJS"} ],
    // icons: [icons.react, icons.mysql, icons.nodejs ],
    github: "https://github.com/red365/home-vj",
    strapline: "Aggregate slideshows and videos and trigger them on the fly from a mobile device",
    description: "",
    problem: "I wanted to quickly select slideshows and videos to play through a projector whilst playing music at home",
    solutionHeader: "An app that uses Javascript functionality to automate switching between slideshows and videos.",
    solutionText: ["Takes advantage of the asynchronous nature of Javascrpt to sequence slideshows and videos", "Slideshows and videos can be triggered individually or combined in 'stories'", "The mobile interface allows the user to trigger the various media.", "An admin interface can be used to upload media and create stories with various settings for duration and randomness", "Originally written in class component style React", "Admin and Launcher re-written to use functional React and custom hooks"],
    image: "home-vj-final.png"
  },
]

export default products;