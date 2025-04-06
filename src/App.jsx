import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import RecentSummaries from "./components/RecentSummaries";
import VideoSummaryTab from "./components/VideoSummaryTab";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Header />
      {/* <VideoSummary /> */}
      <VideoSummaryTab />
      <RecentSummaries />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
