import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { dateToBangla } from '../utils';

const RelatedBlock = ({ relatedData }) => {
  const articles = relatedData;

  if (articles && articles.length > 0) {
    return (
      <div className="RelatedBlock">
        <h3 className="RelatedBlock-SectionHeading">সম্পর্কিত লেখাঃ</h3>
        <div className="RelatedBlock-List">
          <Row>
            {
              articles.map(article => (
                <Col xs={6} md={4} key={article.id}>
                  <div className="RelatedBlock-Item">
                    <Link to={{ pathname: '/' + article._embedded['wp:term'][0][0].slug + '/' + article.slug, state: { id: article.id } }}>
                      <Image 
                        src={article._embedded['wp:featuredmedia'][0].media_details.sizes.grid_small.source_url} 
                        className="RelatedBlock-Item__Media"
                      />
                    </Link>
              
                    <div className="RelatedBlock-Item__Meta">
                      <time dateTime={articles[0].date}>{dateToBangla(articles[0].date)}</time>
                    </div>

                    <Link 
                      to={{ pathname: '/' + article._embedded['wp:term'][0][0].slug + '/' + article.slug, state: { id: article.id } }} 
                      className="RelatedBlock-Item__Heading"
                      dangerouslySetInnerHTML={{ __html: article.title.rendered }} 
                    />
                  </div>
                </Col>
              ))
            }
          </Row>
        </div>
      </div>
    );
  }

  return null;
}

export default RelatedBlock;