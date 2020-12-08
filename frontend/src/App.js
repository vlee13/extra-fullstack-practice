import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import AllTheBooks from "./components/AllTheBooks";
import NewBooks from "./components/NewBooks";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <h1>Welcome, Book Nerds!</h1>
      </Link>
      <nav>
        <Link to="/books">
          <h2>All The Books</h2>
        </Link>
        <Link to="/addNewBook">
          <h2>Add New Books</h2>
        </Link>
      </nav>
      <Switch>
        <Route exact path="/books" render={() => <AllTheBooks />} />
        <Route
          exact
          path="/addNewBook"
          render={(props) => <NewBooks {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
