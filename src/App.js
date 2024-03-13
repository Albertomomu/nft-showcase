import { Features, SectionWrapper, Download} from "./components";
import assets from './assets'

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
    </>
  );
}

export default App;
