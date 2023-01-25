import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import Technology from "./components/technology/Technology";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Projects></Projects>
      <Technology></Technology>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
