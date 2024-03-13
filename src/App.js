import { Features, SectionWrapper, Download} from "./components";
import assets from './assets'
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Your own store on Nifty NFTs, Start selling & growing"
        description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Smart User Interface Marketplace"
        description="Experience a buterry UI of ProNef Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Deployment"
        description="ProNef is built using Expo which runs on all user's devices. You can easily get your app into peoples hands."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details on a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made by {" "} <span className="bold">Alberto Moreno</span></p>
      </div>
    </>
  );
}

export default App;
