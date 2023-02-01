import ContactForm from "../ContactForm";
import News from "../News";
import Pricing from "../Pricing";
import Hero from "../Hero";
import HowItWorks from "../HowItWorks";
import ClientsCarousel from "../ClientsCarousel";

const Home = () => {
     return (
        <>
<Hero />
<ClientsCarousel />
<HowItWorks />
<Pricing />
<ContactForm />
<News />
        </>
     );
  };
  
  export default Home;