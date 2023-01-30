import ContactForm from "../ContactForm";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Home = () => {
     return (
        <>
        <section id="hero_section" className="text-center">
    <div className="w-50 m-auto">
      <span className="mini-title d-inline-block mb-2">Live Your Dream</span>
      <h1>Discover Great Healthcare</h1>
      <h4>Healthier employees showcase increased productivity.With
        our benefits ensure that your team.</h4>
        <a href="" className="btn btn-lg btn-primary mt-2">View Insurance Plans</a>
      </div>
  </section>
   <section id="carousel_section">
    <div className="container">
   <OwlCarousel className='owl-theme' items={5} autoplay={true} loop margin={100}>
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

<ContactForm />
        </>
     );
  };
  
  export default Home;