import React, { useState, useEffect, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const NavigateBlock = ({ prevArticle, nextArticle, categorySlug }) => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

  if (prevArticle || nextArticle) {
    return (
      <div className="NavigateBlock">
        <Row className="align-items-center" ref={ref}>
          <Col xs={5} className="pr-0">
            {
              prevArticle &&
                <div className="NavigateBlock-Prev">
                  <span className="NavigateBlock-Title">
                    <FontAwesomeIcon icon={faAngleLeft} /> পূর্ববর্তী লেখাঃ
                  </span>
                  <Link 
                    to={{ pathname: '/' + categorySlug + '/' + prevArticle.slug, state: { id: prevArticle.id } }} 
                    className="NavigateBlock-Heading"
                    dangerouslySetInnerHTML={{ __html: prevArticle.title }}
                  />
                </div>
            }
          </Col>
          <Col xs={2}>
            <div className="NavigateBlock-Divider" style={{ height: `${height}px` }}></div>
          </Col>
          <Col xs={5} className="pl-0">
            {
              nextArticle &&
                <div className="NavigateBlock-Prev">
                  <span className="NavigateBlock-Title">
                    পরবর্তী লেখাঃ <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                  <Link 
                    to={{ pathname: '/' + categorySlug + '/' + nextArticle.slug, state: { id: nextArticle.id } }} 
                    className="NavigateBlock-Heading"
                    dangerouslySetInnerHTML={{ __html: nextArticle.title }}
                  />
                </div>
            }
          </Col>
        </Row>
      </div>
    );
  }

  return null;
}

export default NavigateBlock;