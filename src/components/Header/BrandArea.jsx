import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logo from '../../images/logo.png';
import HeaderAd from '../../images/ads/header.png';
import Ads from '../Ads';

const BrandArea = () => {
  return (
    <div className="d-none d-lg-block">
      <Container>
        <Row>
          <Col>
            <div className="Header-BrandArea">
              <Link to="/">
                <Image 
                  fluid 
                  src={Logo} 
                  alt="Muslim BD" 
                  className="Header-BrandArea__Logo"
                />
              </Link>
              <Ads
                slug="!#"
                adImage={HeaderAd}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BrandArea;