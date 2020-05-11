import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import Layout from '../Layout';
import { FeaturedBlock, HighlightBlock, HighlightBlockB, FocusBlock, SliderBlock } from '../Block';
import Sidebar from '../Sidebar';

const Homepage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [resData, setResData] = useState({
    featured: null,
    highlightOne: null,
    highlightTwo: null,
    focused: null,
    highlightThree: null,
    sliders: null
  });

  useEffect(() => {
    setIsLoaded(false);

    const fetchData = async () => {
      const featuredRes = await axios(
        `${process.env.REACT_APP_API_URL}/posts?per_page=4&sticky=true&status=publish&_embed`
      );
      const highlightOneRes = await axios(
        `${process.env.REACT_APP_API_URL}/posts?categories=3&per_page=4&sticky=false&status=publish&_embed`
      );
      const highlightTwoRes = await axios(
        `${process.env.REACT_APP_API_URL}/posts?categories=7&per_page=4&sticky=false&status=publish&_embed`
      );
      const focusedRes = await axios(
        `${process.env.REACT_APP_API_URL}/posts?categories=8&per_page=5&sticky=false&status=publish&_embed`
      );
      const highlightThreeRes = await axios(
        `${process.env.REACT_APP_API_URL}/posts?categories=9&per_page=8&sticky=false&status=publish&_embed`
      );
      const slidersRes = await axios(
        `${process.env.REACT_APP_API_URL}/posts?categories=5&per_page=9&sticky=false&status=publish&_embed`
      );

      setResData({
        featured: featuredRes.data,
        highlightOne: highlightOneRes.data,
        highlightTwo: highlightTwoRes.data,
        focused: focusedRes.data,
        highlightThree: highlightThreeRes.data,
        sliders: slidersRes.data
      });
      setIsLoaded(true);
    }

    fetchData();
  }, []);

  const metaData = [
    {
      "name": "description",
      "content": "অনলাইন ভিত্তিক ইসলামিক তথ্য বহুল একটি প্রচার মাধ্যম 'শান্তির ধর্ম ইসলাম'। যা www.muslim-bd.com এর মাধ্যমে যাবতীয় ইসলামিক আর্টিকেল প্রকাশিত হয়।"
    },
    {
      "property": "og:locale",
      "content": "en_US"
    },
    {
      "property": "og:type",
      "content": "website"
    },
    {
      "property": "og:title",
      "content": "Muslim BD | শান্তির ধর্ম ইসলাম | সত্যের পথে আমাদের পথ চলা"
    },
    {
      "property": "og:description",
      "content": "অনলাইন ভিত্তিক ইসলামিক তথ্য বহুল একটি প্রচার মাধ্যম 'শান্তির ধর্ম ইসলাম'। যা www.muslim-bd.com এর মাধ্যমে যাবতীয় ইসলামিক আর্টিকেল প্রকাশিত হয়।"
    },
    {
      "property": "og:url",
      "content": "https://muslim-bd.com"
    },
    {
      "property": "og:site_name",
      "content": "Muslim BD"
    },
    {
      "property": "og:image",
      "content": "https://muslim-bd.com/wp-content/uploads/2020/05/Logo-islam-1-1.png"
    },
    {
      "property": "og:image:width",
      "content": "1000"
    },
    {
      "property": "og:image:height",
      "content": "1000"
    },
    {
      "name": "twitter:card",
      "content": "summary_large_image"
    }
  ];
  
  return (
    <Layout 
      pageIsLoading={isLoaded} 
      metaTitle="Muslim BD | শান্তির ধর্ম ইসলাম | সত্যের পথে আমাদের পথ চলা"
      metaData={metaData}
    >
      <div className="Homepage">
        <FeaturedBlock featuredData={resData.featured}  />
        <div className="pt-5 pb-5">
          <Container>
            <Row>
              <Col lg={8}>
                <Row>
                  <Col md={6}>
                    <HighlightBlock highlightData={resData.highlightOne} />
                  </Col>
                  <Col md={6}>
                    <HighlightBlock highlightData={resData.highlightTwo} />
                  </Col>
                </Row>
                <FocusBlock focusData={resData.focused} />
                <HighlightBlockB highlightData={resData.highlightThree} />
                <SliderBlock sliderData={resData.sliders} />
              </Col>
              <Col lg={4}>
                <Sidebar />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Layout>
  );
}

export default Homepage;