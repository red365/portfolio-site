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
  {
    name: "Hi! I'm a React developer with professional experience",
    icons: [ ],
    github: "https://github.com/red365/invoicer",
    strapline: "Stay tuned for some personal projects I have worked on...",
    description: "",
    image: ""
  },
  {
    name: "Invoicer",
    icons: [{icon:"bxl-react", iconName: "React"}, {icon: "bxs-data", iconName: "MySQL"}, {icon:"bxl-nodejs", iconName: "NodeJS"} ],
    // icons: [icons.react, icons.mysql, icons.nodejs],
    github: "https://github.com/red365/invoicer",
    strapline: "Store invoice data and create printable invoices",
    description: "",
    image: "invoicer.PNG"
  },
  {
    name: "Fridge Note",
    icons: [{icon: "svelte", iconName: "Svelte"}, {icon: "bxl-mongodb", iconName: "MongoDB"}, {icon:"bxl-nodejs", iconName: "NodeJS"} ],
    // icons: [icons.svelte, icons.mongodb, icons.nodejs],
    github: "https://github.com/red365/fridge-note-2-revenge-of-the-fridge",
    strapline: "Place reminder notes on a virtual fridge",
    description: "",
    image: "fridge-note-screenshot.PNG"
  },
    {
    name: "Home VJ",
    icons: [{icon:"bxl-react", iconName: "React"}, {icon: "bxs-data", iconName: "MySQL"}, {icon:"bxl-nodejs", iconName: "NodeJS"} ],
    // icons: [icons.react, icons.mysql, icons.nodejs ],
    github: "https://github.com/red365/home-vj",
    strapline: "Aggregate slideshows and videos and trigger them on the fly from a mobile device",
    description: "",
    image: "home-vj-final.png"
  },
]

export default products;