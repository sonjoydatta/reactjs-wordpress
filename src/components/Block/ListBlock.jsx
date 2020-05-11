import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { dateToBangla } from '../utils';

const ListBlock = (props) => {
  const articles = props.listData;

  if (articles && articles.length > 0) {
    return (
      <div className="RecentBlock">
        <h3 className="RecentBlock-SectionHeading">{props.title}</h3>
        {
          articles.length > 0 &&
            <ul className="RecentBlock-List">
              {
                articles.map(article => (
                  <li className="RecentBlock-ListItem" key={article.id}>
                    <Link to={{ pathname: '/' + article._embedded['wp:term'][0][0].slug + '/' + article.slug, state: { id: article.id } }}>
                      <Image 
                        src={article._embedded['wp:featuredmedia'][0].media_details.sizes.post_thumbnail.source_url} 
                        className="RecentBlock-ListItem__Media"
                      />
                    </Link>
                    <div className="RecentBlock-ListItem__Content">
                      <Link 
                        to={{ pathname: '/' + article._embedded['wp:term'][0][0].slug + '/' + article.slug, state: { id: article.id } }}  
                        className="RecentBlock-ListItem__Heading"
                        dangerouslySetInnerHTML={{ __html: article.title.rendered }} 
                      />
                      <div className="RecentBlock-ListItem__Meta">
                        <time dateTime={article.date}>{dateToBangla(article.date)}</time>
                      </div>
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

export default ListBlock;