import React from 'react';
import { Row, Col } from 'react-bootstrap';

import HighlightBlock from './HighlightBlock';

const HightlightBlockB = ({ highlightData }) => {
  const articles = highlightData;
  const firstHalf = articles.splice(0, Math.ceil(articles.length/2));
  const secondHalf = articles;
  
  if (articles && articles.length > 0) {
    return (
      <div className="HightlightBlockB">
        <Row>
          <Col xs={12}>
            <h3 className="HightlightBlockB-SectionHeading">
              {articles[0]._embedded['wp:term'][0][0].name}
            </h3>
          </Col>
          <Col md={6}>
            <HighlightBlock highlightData={firstHalf} />
          </Col>
          <Col md={6}>
            {
              secondHalf.length > 0 &&
                <HighlightBlock highlightData={secondHalf} />
            }
          </Col>
        </Row>
      </div>
    );
  }

  return null;
}

export default HightlightBlockB;