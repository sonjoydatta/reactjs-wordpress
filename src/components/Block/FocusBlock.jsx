import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { dateToBangla } from '../utils';

const FocusBlock = ({ focusData }) => {
  const articles = focusData;
  const restArticles = articles.slice(1);

  if (articles && articles.length > 0) {
    return (
      <div className="FocusBlock">
        <Row>
          <Col xs={12}>
            <h3 className="FocusBlock-SectionHeading">
              {articles[0]._embedded['wp:term'][0][0].name}
            </h3>
          </Col>
          <Col md={6}>
            <article>
              <Link to={{ pathname: '/' + articles[0]._embedded['wp:term'][0][0].slug + '/' + articles[0].slug, state: { id: articles[0].id } }}>
                <Image 
                  src={articles[0]._embedded['wp:featuredmedia'][0].media_details.sizes.main_block.source_url} 
                  className="FocusBlock-Hero__Media"
                />
              </Link>
              
              <div className="FocusBlock-Hero__Meta">
                <time dateTime={articles[0].date}>{dateToBangla(articles[0].date)}</time>
              </div>
              <Link 
                to={{ pathname: '/' + articles[0]._embedded['wp:term'][0][0].slug + '/' + articles[0].slug, state: { id: articles[0].id } }} 
                className="FocusBlock-Hero__Heading"
                dangerouslySetInnerHTML={{ __html: articles[0].title.rendered }} 
              />
              <div className="FocusBlock-Hero__Excerpt" dangerouslySetInnerHTML={{ __html: articles[0].excerpt.rendered.substring(0, 120) }} />
            </article>
          </Col>
          <Col md={6}>
            {
              restArticles.length > 0 &&
                <ul className="FocusBlock-List">
                  {
                    restArticles.map(ra => (
                      <li className="FocusBlock-ListItem" key={ra.id}>
                        <Link to={{ pathname: '/' + ra._embedded['wp:term'][0][0].slug + '/' + ra.slug, state: { id: ra.id } }} >
                          <Image 
                            src={ra._embedded['wp:featuredmedia'][0].media_details.sizes.post_thumbnail.source_url} 
                            className="FocusBlock-ListItem__Media"
                          />
                        </Link>
                        <div className="FocusBlock-ListItem__Content">
                          <Link 
                            to={{ pathname: '/' + ra._embedded['wp:term'][0][0].slug + '/' + ra.slug, state: { id: ra.id } }}  
                            className="FocusBlock-ListItem__Heading"
                            dangerouslySetInnerHTML={{ __html: ra.title.rendered }} 
                          />
                        </div>
                      </li>
                    ))
                  }
                </ul>
            }
          </Col>
        </Row>
      </div>
    );
  }

  return null;
}

export default FocusBlock;