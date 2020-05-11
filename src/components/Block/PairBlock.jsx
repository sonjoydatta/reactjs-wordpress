import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { dateToBangla } from '../utils';

const PairBlock = ({ data }) => {
  const articles = data;

  if (articles && articles.length > 0) {
    return (
      <div className="PairBlock">
        <Row>
          {
            articles.map(article => (
              <Col md={6} key={article.id}>
                <article>
                  <Link to={{ pathname: '/' + article._embedded['wp:term'][0][0].slug + '/' + article.slug, state: { id: article.id } }} >
                    <Image 
                      src={article._embedded['wp:featuredmedia'][0].media_details.sizes.main_block.source_url} 
                      className="PairBlock-Hero__Media"
                    />
                  </Link>

                  <span className="PairBlock-Hero__CatTitle">
                    {article._embedded['wp:term'][0][0].name}
                  </span>
                  
                  <div className="PairBlock-Hero__Meta">
                    <time dateTime={article.date}>{dateToBangla(article.date)}</time>
                  </div>
                  <Link 
                    to={{ pathname: '/' + article._embedded['wp:term'][0][0].slug + '/' + article.slug, state: { id: article.id } }} 
                    className="PairBlock-Hero__Heading"
                    dangerouslySetInnerHTML={{ __html: article.title.rendered }} 
                  />
                  <div className="PairBlock-Hero__Excerpt" dangerouslySetInnerHTML={{ __html: article.excerpt.rendered.substring(0, 120) }} />
                </article>
              </Col>
            ))
          }
        </Row>
      </div>
    );
  }

  return null;
}

export default PairBlock;