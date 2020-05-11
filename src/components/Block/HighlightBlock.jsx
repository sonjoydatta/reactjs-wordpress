import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { dateToBangla } from '../utils';

const HighlightBlock = ({ highlightData }) => {
  const articles = highlightData;
  const restArticles = articles.slice(1);

  if (articles && articles.length > 0) {
    return (
      <div className="HighlightBlock">
        <article>
          <Link to={{ pathname: '/' + articles[0]._embedded['wp:term'][0][0].slug + '/' + articles[0].slug, state: { id: articles[0].id } }} >
            <Image 
              src={articles[0]._embedded['wp:featuredmedia'][0].media_details.sizes.main_block.source_url} 
              className="HighlightBlock-Hero__Media"
            />
          </Link>

          <span className="HighlightBlock-Hero__CatTitle">
            {articles[0]._embedded['wp:term'][0][0].name}
          </span>
          
          <div className="HighlightBlock-Hero__Meta">
            <time dateTime={articles[0].date}>{dateToBangla(articles[0].date)}</time>
          </div>
          <Link 
            to={{ pathname: '/' + articles[0]._embedded['wp:term'][0][0].slug + '/' + articles[0].slug, state: { id: articles[0].id } }} 
            className="HighlightBlock-Hero__Heading"
            dangerouslySetInnerHTML={{ __html: articles[0].title.rendered }} 
          />
          <div className="HighlightBlock-Hero__Excerpt" dangerouslySetInnerHTML={{ __html: articles[0].excerpt.rendered.substring(0, 120) }} />
        </article>
        {
          restArticles.length > 0 &&
            <ul className="HighlightBlock-List">
              {
                restArticles.map(ra => (
                  <li className="HighlightBlock-ListItem" key={ra.id}>
                    <Link to={{ pathname: '/' + ra._embedded['wp:term'][0][0].slug + '/' + ra.slug, state: { id: ra.id } }} >
                      <Image 
                        src={ra._embedded['wp:featuredmedia'][0].media_details.sizes.post_thumbnail.source_url} 
                        className="HighlightBlock-ListItem__Media"
                      />
                    </Link>
                    <div className="HighlightBlock-ListItem__Content">
                      <Link 
                        to={{ pathname: '/' + ra._embedded['wp:term'][0][0].slug + '/' + ra.slug, state: { id: ra.id } }}  
                        className="HighlightBlock-ListItem__Heading"
                        dangerouslySetInnerHTML={{ __html: ra.title.rendered }} 
                      />
                    </div>
                  </li>
                ))
              }
            </ul>
        }
      </div>
    );
  }

  return null;
}

export default HighlightBlock;