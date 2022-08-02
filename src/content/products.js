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
    name: "Invoicer",
    icons: [icons.react, icons.mysql, icons.nodejs],
    github: "https://github.com/red365/invoicer",
    strapline: "Store invoice data and create printable invoices",
    description: "",
    image: "invoicer.PNG"
  },
  {
    name: "Fridge Note",
    icons: [icons.svelte, icons.mongodb, icons.nodejs],
    github: "https://github.com/red365/fridge-note-2-revenge-of-the-fridge",
    strapline: "Place reminder notes on a virtual fridge",
    description: "",
    image: "fridge-note-screenshot.PNG"
  },
    {
    name: "Home VJ",
    icons: [icons.react, icons.mysql, icons.nodejs ],
    github: "https://github.com/red365/home-vj",
    strapline: "Create visuals that can be triggered on the fly during a DJ set",
    description: "",
    image: ""
  },
]

export default products;