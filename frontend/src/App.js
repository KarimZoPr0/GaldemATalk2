import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { PartnerMarquee } from "@/components/site/PartnerMarquee";
import { OmOss } from "@/components/site/OmOss";
import { Poddfestivalen } from "@/components/site/Poddfestivalen";
import { Articles } from "@/components/site/Articles";
import { Membership } from "@/components/site/Membership";
import { Footer } from "@/components/site/Footer";

const Home = () => {
  return (
    <main data-testid="home-page">
      <Header />
      <Hero />
      <PartnerMarquee />
      <OmOss />
      <Poddfestivalen />
      <Articles />
      <Membership />
      <Footer />
    </main>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
