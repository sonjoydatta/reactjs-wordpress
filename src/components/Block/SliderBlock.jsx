import React from 'react';
import Slider from 'react-slick';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SliderBlock = ({ sliderData }) => {
  const articles = sliderData;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    ]
  };

  if (articles && articles.length > 0) {
    return (
      <div className="SliderBlock">
        <h3 className="SliderBlock-SectionHeading">
          {articles[0]._embedded['wp:term'][0][0].name}
        </h3>
        <Slider {...settings}>
          {
            articles.map(article => (
              <div key={article.id}>
                <div className="SliderBlock-Item">
                  <Link to={{ pathname: '/' + article._embedded['wp:term'][0][0].slug + '/' + article.slug, state: { id: article.id } }}>
                    <Image 
                      src={article._embedded['wp:featuredmedia'][0].media_details.sizes.grid_small.source_url} 
                      className="SliderBlock-Hero__Media"
                    />
                  </Link>
                  <Link 
                    to={{ pathname: '/' + article._embedded['wp:term'][0][0].slug + '/' + article.slug, state: { id: article.id } }} 
                    className="SliderBlock-Item__Heading"
                    dangerouslySetInnerHTML={{ __html: article.title.rendered }} 
                  />
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    );
  }

  return null;
}

export default SliderBlock;