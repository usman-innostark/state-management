import "./App.css";
import Movies from "./components/Movies";
import { MovieProvider } from "./context/MovieContext";
import AddMovie from "./components/AddMovie";
import Footer from "./components/Footer";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <AddMovie />
        <Movies />
        <Footer/>
      </div>
    </MovieProvider>
  );
}

export default App;
