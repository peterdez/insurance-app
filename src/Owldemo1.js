import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function MyOwlItem({title, url}) {
    return <div><img title={title} src={url }/> </div>;
  }

const Owldemo1 = () => {
    const images = [
        {id: 1, title: "client 1", url: "/assets/images/01.png"},
        {id: 2, title: "client 2", url: "/assets/images/02.png"},
        {id: 3, title: "client 3", url: "/assets/images/03.png"},
        {id: 4, title: "client 4", url: "/assets/images/04.png"},
        {id: 5, title: "client 5", url: "/assets/images/05.png"},
        {id: 6, title: "client 6", url: "/assets/images/06.png"},
        {id: 7, title: "client 7", url: "/assets/images/07.png"},
        {id: 8, title: "client 8", url: "/assets/images/08.png"},
        {id: 9, title: "client 9", url: "/assets/images/01.png"},
        {id: 10, title: "client 10", url: "/assets/images/02.png"},
        {id: 11, title: "client 11", url: "/assets/images/03.png"},
        {id: 12, title: "client 12", url: "/assets/images/04.png"}
    ];
    return (
   <section id="carousel_section">
    <div className="container">
      <h3 className="text-center mb-5">More Than A 300+ Companies Have Moved To Instive</h3>
   <OwlCarousel className='owl-theme' items={5} autoplay={true} loop margin={120}>
    {images.map((image) => <MyOwlItem key={image.id} title={image.title} url={image.url} />)}
</OwlCarousel>
</div>
</section>
    );
}

export default Owldemo1;