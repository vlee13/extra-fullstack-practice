const mongoose = require("mongoose");
const Books = require("./models/Book");

const books = [
  {
    image_url:
      "http://www.myiconfinder.com/uploads/iconsets/256-256-ba33c22572830316754a0293c91526b4-books.png",
    title: "The Hunger Games",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    rating: "10",
  },
  {
    image_url:
      "http://www.myiconfinder.com/uploads/iconsets/256-256-ba33c22572830316754a0293c91526b4-books.png",
    title: "Harry Potter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    rating: "9",
  },
  {
    image_url:
      "http://www.myiconfinder.com/uploads/iconsets/256-256-ba33c22572830316754a0293c91526b4-books.png",
    title: "To Kill a Mockingbird",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    rating: "8",
  },
  {
    image_url:
      "http://www.myiconfinder.com/uploads/iconsets/256-256-ba33c22572830316754a0293c91526b4-books.png",
    title: "Pride and Prejudice",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    rating: "9",
  },
  {
    image_url:
      "http://www.myiconfinder.com/uploads/iconsets/256-256-ba33c22572830316754a0293c91526b4-books.png",
    title: "Twilight",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    rating: "10",
  },
  {
    image_url:
      "http://www.myiconfinder.com/uploads/iconsets/256-256-ba33c22572830316754a0293c91526b4-books.png",
    title: "The Book Thief",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    rating: "7",
  },
  {
    image_url:
      "http://www.myiconfinder.com/uploads/iconsets/256-256-ba33c22572830316754a0293c91526b4-books.png",
    title: "The Chronicles of Narnia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    rating: "8",
  },
  {
    image_url:
      "http://www.myiconfinder.com/uploads/iconsets/256-256-ba33c22572830316754a0293c91526b4-books.png",
    title: "Animal Farm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    rating: "9",
  },
  {
    image_url:
      "http://www.myiconfinder.com/uploads/iconsets/256-256-ba33c22572830316754a0293c91526b4-books.png",
    title: "Gone with the Wind ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    rating: "10",
  },
  {
    image_url:
      "http://www.myiconfinder.com/uploads/iconsets/256-256-ba33c22572830316754a0293c91526b4-books.png",
    title: "The Fault in Our Stars ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    rating: "8",
  },
  {
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/412W7VNY0FL._SX295_BO1,204,203,200_.jpg",
    description: "Memories",

    rating: "8",
  },
  {
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/412W7VNY0FL._SX295_BO1,204,203,200_.jpg",
    description: "Best book evah",

    rating: "10",
  },
  {
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/412W7VNY0FL._SX295_BO1,204,203,200_.jpg",
    title: "Philosopher's Stone",
    description: "Pretty book",

    rating: "10",
  },
];

mongoose
  .connect("mongodb://localhost/practiceDB", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .then(async () => {
    let res = await Books.insertMany(books);
    console.log(res);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("Error connecting to mongo", err);
  });
