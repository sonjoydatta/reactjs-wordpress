import React from 'react';
import { Image } from 'react-bootstrap';

const Ads = (props) => {
  return (
    <div className="Ads">
      <a href={props.slug}>
        <Image fluid src={props.adImage} />
      </a>
    </div>
  );
}

export default Ads;