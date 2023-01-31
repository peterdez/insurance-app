import ContactForm from "../ContactForm";
import News from "../News";
import Pricing from "../Pricing";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import HowItWorks from "../HowItWorks";

const Home = () => {
     return (
        <>
        <section id="hero_section" className="text-center">
    <div className="w-50 m-auto">
      <span className="mini-title d-inline-block mb-2">Live Your Dream</span>
      <h1>Discover Great Healthcare</h1>
      <p className="fs-4">Healthier employees showcase increased productivity. <br></br>With
        our benefits ensure that your team.</p>
        <a href="" className="btn btn-lg btn-secondary mt-2 fw-bold">View Insurance Plans</a>
      </div>
  </section>
   <section id="carousel_section">
    <div className="container">
      <h3 className="text-center mb-5">More Than A 300+ Companies Have Moved To Instive</h3>
   <OwlCarousel className='owl-theme' items={5} autoplay={true} loop margin={120}>
    <div className='item'>
        <img src="/companies_logo_2.png"/>
    </div>
    <div className='item'>
    <img src="/companies_logo_2.png"/>
    </div>
    <div className='item'>
    <img src="/companies_logo_2.png"/>
    </div>
    <div className='item'>
    <img src="/companies_logo_2.png"/>
    </div>
    <div className='item'>
    <img src="/companies_logo_2.png"/>
    </div>
    <div className='item'>
    <img src="/companies_logo_2.png"/>
    </div>
    <div className='item'>
    <img src="/companies_logo_2.png"/>
    </div>
    <div className='item'>
    <img src="/companies_logo_2.png"/>
    </div>
    <div className='item'>
    <img src="/companies_logo_2.png"/>
    </div>
    <div className='item'>
    <img src="/companies_logo_2.png"/>
    </div>
    <div className='item'>
    <img src="/companies_logo_2.png"/>
    </div>
</OwlCarousel>
</div>
</section>
<HowItWorks />
<Pricing />
<ContactForm />
<News />
        </>
     );
  };
  
  export default Home;