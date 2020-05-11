import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FeaturedBlock = ({ featuredData }) => {
  const articles = featuredData;

  if (articles && articles.length > 0) {
    return (
      <div className="FeaturedArticles">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="FeaturedArticles-Hero">
                <Link to={{ pathname: '/' + articles[0]._embedded['wp:term'][0][0].slug + '/' + articles[0].slug, state: { id: articles[0].id } }}>
                  <Image 
                    src={articles[0]._embedded['wp:featuredmedia'][0].media_details.sizes.main_slider.source_url} 
                    className="FeaturedArticles-Hero__Media"
                  />
                </Link>
                <div className="FeaturedArticles-Caption">
                  <Link 
                    to={'/' + articles[0]._embedded['wp:term'][0][0].slug + '/' + articles[0].slug} 
                    className="FeaturedArticles-Hero__Heading"
                    dangerouslySetInnerHTML={{ __html: articles[0].title.rendered }}
                  />
                </div>
              </div>
            </Col>
            <Col lg={4}>
              {
                articles[1] !== undefined &&
                  <div className="FeaturedArticles-Large">
                    <Link to={{ pathname: '/' + articles[1]._embedded['wp:term'][0][0].slug + '/' + articles[1].slug, state: { id: articles[1].id } }}>
                      <Image 
                        src={articles[1]._embedded['wp:featuredmedia'][0].media_details.sizes.main_block.source_url} 
                        className="FeaturedArticles-Large__Media"
                      />
                    </Link>
                    <div className="FeaturedArticles-Caption">
                      <Link 
                        to={{ pathname: '/' + articles[1]._embedded['wp:term'][0][0].slug + '/' + articles[1].slug, state: { id: articles[1].id } }} 
                        className="FeaturedArticles-Large__Heading"
                        dangerouslySetInnerHTML={{ __html: articles[1].title.rendered }}
                      />
                    </div>
                  </div>
              }
              <Row>
                {
                  articles[2] !== undefined &&
                    <Col>
                      <div className="FeaturedArticles-Small">
                        <Link to={{ pathname: '/' + articles[2]._embedded['wp:term'][0][0].slug + '/' + articles[2].slug, state: { id: articles[2].id } }}>
                          <Image 
                            src={articles[2]._embedded['wp:featuredmedia'][0].media_details.sizes.slider_small.source_url} 
                            className="FeaturedArticles-Large__Media"
                          />
                        </Link>
                        <div className="FeaturedArticles-Caption">
                          <Link 
                            to={{ pathname: '/' + articles[2]._embedded['wp:term'][0][0].slug + '/' + articles[2].slug, state: { id: articles[2].id } }} 
                            className="FeaturedArticles-Large__Heading"
                            dangerouslySetInnerHTML={{ __html: articles[2].title.rendered }}
                          />
                        </div>
                      </div>
                    </Col>
                }
                {
                  articles[3] !== undefined &&
                    <Col>
                      <div className="FeaturedArticles-Small">
                        <Link to={{ pathname: '/' + articles[3]._embedded['wp:term'][0][0].slug + '/' + articles[3].slug, state: { id: articles[3].id } }}>
                          <Image 
                            src={articles[3]._embedded['wp:featuredmedia'][0].media_details.sizes.slider_small.source_url} 
                            className="FeaturedArticles-Large__Media"
                          />
                        </Link>
                        <div className="FeaturedArticles-Caption">
                          <Link 
                            to={{ pathname: '/' + articles[3]._embedded['wp:term'][0][0].slug + '/' + articles[3].slug, state: { id: articles[3].id } }} 
                            className="FeaturedArticles-Large__Heading"
                            dangerouslySetInnerHTML={{ __html: articles[3].title.rendered }}
                          />
                        </div>
                      </div>
                    </Col>
                }
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return null;
};

export default FeaturedBlock;