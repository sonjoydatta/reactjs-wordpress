import React, { useState, useEffect, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import Layout from '../Layout';
import Sidebar from '../Sidebar';
import { PairBlock } from '../Block';
import ArticlePagination from '../ArticlePagination';
import ArticleNotFound from '../NotFound/ArticleNotFound';
import NotFound from '../pages/NotFound';

const CategoryArchive = (props) => {
  let categoryId;
  if (props.location.state !== undefined && props.location.state.id !== undefined) {
    categoryId = props.location.state.id;
  }
  const [isLoaded, setIsLoaded] = useState(false);
  const [resData, setResData] = useState({
    articles: null,
    currentPage: 1,
    totalPages: 1
  });

  useEffect(() => {
    if (categoryId) {
      setIsLoaded(false);

      const fetchData = async () => {
        const articlesRes = await axios(
          `${process.env.REACT_APP_API_URL}/posts/?categories=${categoryId}&status=publish&page=1&_embed`
        );

        setResData({
          articles: articlesRes.data,
          currentPage: 1,
          totalPages: articlesRes.headers['x-wp-totalpages']
        });
        setIsLoaded(true);
      }

      fetchData();
    }
  }, [categoryId]);

  const handlePagination = (event) => {
    setIsLoaded(false);

    const fetchData = async () => {
      const articlesRes = await axios(
        `${process.env.REACT_APP_API_URL}/posts/?categories=${categoryId}&status=publish&page=${event}&_embed`
      );

      setResData({
        ...resData,
        articles: articlesRes.data,
        currentPage: event
      });
      setIsLoaded(true);
    }

    fetchData();
  }

  if (categoryId) {
    return (
      <Layout 
        pageIsLoading={isLoaded} 
        metaTitle={
          resData.articles !== null && resData.articles.length > 0 ?
            `${resData.articles[0]._embedded['wp:term'][0][0].name} - Muslim BD` :
            'Muslim BD | শান্তির ধর্ম ইসলাম | সত্যের পথে আমাদের পথ চলা'
        }
      >
        <div className="pt-5 pb-5">
          <Container>
            <Row>
              <Col lg={8}>
                {
                  resData.articles !== null && resData.articles.length > 0 ?
                    <Fragment>
                      <PairBlock data={resData.articles} />
                      <ArticlePagination 
                        currentPage={parseInt(resData.currentPage)}
                        totalPages={parseInt(resData.totalPages)}
                        clickHandler={handlePagination}
                      />
                    </Fragment> :
                    <ArticleNotFound />
                }
              </Col>
              <Col lg={4}>
                <Sidebar />
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    );
  }

  return <NotFound />;
}

export default CategoryArchive;