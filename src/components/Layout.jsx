import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';

const Layout = (props) => {
  const { metaTitle, metaData } = props;

  return (
    <Fragment>
      <Helmet>
        <link rel="canonical" href={window.location.href} />
        {
          metaTitle !== null &&
            <title>{metaTitle}</title>
        }
        {
          metaData !== undefined && metaData !== null && metaData.length > 0 &&
            metaData.map((meta, index) => (
              <meta key={index} property={meta.property} content={meta.content} />
            ))
        }
      </Helmet>
      <Header />
      {
        props.pageIsLoading === true ?
          <main className="Main">
            {props.children}
          </main> : <Loader />
      }
      <Footer />
    </Fragment>
  );
}

export default Layout;