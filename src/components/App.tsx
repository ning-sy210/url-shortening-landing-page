import BoostCta from "./BoostCta";
import Header from "./header/Header";
import MainSection from "./mainSection/MainSection";

const App = () => {
  return (
    <>
      <Header />
      <MainSection />
      <BoostCta />
      <div className="full-width h-32 bg-neutral-4"></div>
    </>
  );
};

export default App;
