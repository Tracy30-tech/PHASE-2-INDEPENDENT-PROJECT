import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  return (
    <div style={{ position: 'relative', zIndex: '-1' }}>
    <MDBCarousel showIndicators showControls fade >
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://elle.in/wp-content/uploads/2023/01/2.png'
        alt='...'
      >
        <h5 className='carol'>FASHION</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mymodernmet.com/wp/wp-content/uploads/2021/10/charis-tsevis-african-bricks-mosaic-portrait-art-5.jpeg'
        alt='...'
      >
        <h5 className='carol'>ARTWORK</h5>
        <p>Kizuri chajiuza kibaya chajitembeza.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://img.freepik.com/premium-photo/3d-rendering-design-modern-exterior-house-model-illustration-with-swimming-pool_437476-344.jpg?w=2000'
        alt='...'
      >
        <h5 className='carol'>CONSTRUCTION</h5>
        <p>Quality construction better lifestyle.</p>
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  );
}