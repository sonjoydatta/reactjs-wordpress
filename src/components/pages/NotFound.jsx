import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Layout from '../Layout';

const NotFound = () => {
  return (
    <Layout 
      pageIsLoading={true} 
      metaTitle="পেজ খুঁজে পাওয়া যায়নি - Muslim BD"
    >
      <div className="pt-5 pb-5">
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <div className="w-100 text-center">
                <h2 className="text-dark mb-3">পেজ খুঁজে পাওয়া যায়নি!</h2>
                <h4 className="text-secondary mb-4">আমরা দুঃখিত। আপনি যে পেজটি সন্ধান করেছিলেন তা আমরা খুঁজে পাইনি। এটি সম্ভবত এমন কিছু যা আমরা ভুল করেছি তবে এখন আমরা এটি সম্পর্কে জানি এবং আমরা এটি ঠিক করার চেষ্টা করব।</h4>
                <Link 
                  to="/"
                  className="btn btn-primary"
                >হোমপেজ দেখুন</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

export default NotFound;