import React, { useState, useEffect, Fragment } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';

import Layout from '../Layout';
import Sidebar from '../Sidebar';
import { dateToBangla } from '../utils';
import { NavigateBlock, RelatedBlock } from '../Block';
import SocialShare from '../SocialShare';
import ArticleNotFound from '../NotFound/ArticleNotFound';
import NotFound from '../pages/NotFound';

const SingleArticle = (props) => {
  let articleId;
  if (props.location.state !== undefined && props.location.state.id !== undefined) {
    articleId = props.location.state.id;
  }
  const [isLoaded, setIsLoaded] = useState(false);
  const [resData, setResData] = useState({
    article: null,
    related: null
  });

  useEffect(() => {
    if (articleId) {
      setIsLoaded(false);

      const fetchData = async () => {
        const articleRes = await axios(
          `${process.env.REACT_APP_API_URL}/posts/${articleId}/?status=publish&_embed`
        );

        const articleCatId = articleRes.data.categories[0];
        const relatedRes = await axios(
          `${process.env.REACT_APP_API_URL}/posts/?exclude=${articleId}&categories=${articleCatId}&per_page=3&status=publish&_embed`
        );

        setResData({
          article: articleRes.data,
          related: relatedRes.data
        });
        setIsLoaded(true);
      }

      fetchData();
    }
  }, [articleId]);

  const { article, related } = resData;

  if (articleId) {
    return (
      <Layout 
        pageIsLoading={isLoaded} 
        metaTitle={article && article.yoast_title ? article.yoast_title : null}
        metaData={article && article.yoast_meta ? article.yoast_meta : null}
      >
        <div className="pt-5 pb-5">
          <Container>
            <Row>
              <Col lg={8}>
                {
                  article !== null ?
                    <Fragment>
                      <article className="SingleArticle">
                        <span className="SingleArticle-CatTitle">{article._embedded['wp:term'][0][0].name}</span>
                        <h1 
                          className="SingleArticle-Heading"
                          dangerouslySetInnerHTML={{ __html: article.title.rendered }}
                        />
                  
                        <Row>
                          <Col sm={6}>
                            <div className="SingleArticle-Meta">
                              প্রকাশকালঃ <time dateTime={article.date}>{dateToBangla(article.date, true)}</time>
                            </div>
                          </Col>
                          <Col sm={6}>
                            <SocialShare />
                          </Col>
                        </Row>

                        <div className="SingleArticle-Media">
                          <Image fluid src={article._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} alt={article.title.rendered} />
                          <div 
                            className="SingleArticle-Media__CaptionText"
                            dangerouslySetInnerHTML={{ __html: article._embedded['wp:featuredmedia'][0].caption.rendered }}
                          />
                        </div>
                        <div
                          className="SingleArticle-Content"
                          dangerouslySetInnerHTML={{ __html: article.content.rendered }}
                        />
                      </article>
                      <NavigateBlock 
                        categorySlug={article._embedded['wp:term'][0][0].slug}
                        prevArticle={article.previous}
                        nextArticle={article.next}
                      />
                      { related && <RelatedBlock relatedData={related} /> }
                    </Fragment> : <ArticleNotFound />
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

export default SingleArticle;