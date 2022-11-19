import Carousel from "react-bootstrap/Carousel";
import NftImgOne from "../images/1.webp";
import NftImgTwo from "../images/6.webp";
import NftImgThree from "../images/11.webp";

function NftCarousel() {
  return (
    <div className="Carousel-box">
    <Carousel className="Carousel">
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={NftImgOne} alt="First slide" />
        <Carousel.Caption>
          <h3>Watching Eyes NFT</h3>
          <p>Mint to get one of the WatchingEyes NFT Collection</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={NftImgTwo} alt="Second slide" />
        <Carousel.Caption>
          <h3>Watching Eyes NFT</h3>
          <p>Mint to get one of the WatchingEyes NFT Collection</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={NftImgThree} alt="Third slide" />
        <Carousel.Caption>
          <h3>Watching Eyes NFT</h3>
          <p>Mint to get one of the WatchingEyes NFT Collection</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default NftCarousel;
