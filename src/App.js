import './App.css';
import { Navbar, Header, AboutMe, Interest, Project, Footer } from "./components"


function App() {
  return (
    <main>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <AboutMe />
      <Interest />
      <Project />
      <Footer />
    </main>
  );
}

export default App;
