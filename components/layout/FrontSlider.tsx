"use client";
import { Carousel } from "react-bootstrap";
// import LikeComponent from "../components/LikeComponent.tsx";

function FrontSlider() {
  return (
    <>
      {/* .........Carousel......... */}
      {/*<LikeComponent onClick={()=>console.log("click")}/>*/}
      <Carousel
        indicators={false}
        interval={3000}
        className="carousel slide !hidden md:!block"
      >
        <Carousel.Item>
          <img className="d-block w-100" src="/assets/images/slider/3.jpeg" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/assets/images/slider/2.jpeg" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/assets/images/slider/1.png" />
        </Carousel.Item>
      </Carousel>
      {/* <section>*/}
      {/*     <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">*/}
      {/*         <div className="carousel-inner">*/}
      {/*             <div className="carousel-item active">*/}
      {/*                 <img src="/assets/images/slider/3.jpeg" className="d-block w-100" alt="..."/>*/}
      {/*             </div>*/}
      {/*             <div className="carousel-item">*/}
      {/*                 <img src="/assets/images/slider/1.png" className="d-block w-100" alt="..."/>*/}
      {/*             </div>*/}
      {/*             <div className="carousel-item">*/}
      {/*                 <img src="/assets/images/slider/2.jpeg" className="d-block w-100" alt="..."/>*/}
      {/*             </div>*/}
      {/*         </div>*/}
      {/*         <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls"*/}
      {/*                 data-slide="prev">*/}
      {/*             <span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
      {/*             <span className="sr-only">Previous</span>*/}
      {/*         </button>*/}
      {/*         <button className="carousel-control-next" type="button" data-target="#carouselExampleControls"*/}
      {/*                 data-slide="next">*/}
      {/*             <span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
      {/*             <span className="sr-only">Next</span>*/}
      {/*         </button>*/}
      {/*     </div>*/}
      {/* </section>*/}
    </>
  );
}

export default FrontSlider;
