import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookMessenger, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SocialShare = () => {
  const shareUrl = window.location.href;
  const shareTitle = document.title;

  return (
    <ul className="SocialShare">
      <li>
        <a 
          target="_blank"
          rel="noopener noreferrer"
          href={`http://www.facebook.com/dialog/feed?app_id=${process.env.REACT_APP_FB_APP_ID}&link=${shareUrl}&redirect_uri=${shareUrl}`}
          title="Share on Facebook"
        >
          <FontAwesomeIcon 
            size="2x"
            color="#3b5998"
            icon={faFacebook} 
          />
        </a>
      </li>
      <li>
        <a 
          target="_blank"
          rel="noopener noreferrer"
          href={`http://www.facebook.com/dialog/send?app_id=${process.env.REACT_APP_FB_APP_ID}&link=${shareUrl}&redirect_uri=${shareUrl}`}
          title="Share on Messenger"
        >
          <FontAwesomeIcon 
            size="2x"
            color="#0084FF"
            icon={faFacebookMessenger} 
          />
        </a>
      </li>
      <li>
        <a 
          target="_blank"
          rel="noopener noreferrer"
          href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
          title="Share on Twitter"
        >
          <FontAwesomeIcon 
            size="2x"
            color="#0084FF"
            icon={faTwitter} 
          />
        </a>
      </li>
      <li className="d-inline-block d-lg-none">
        <a 
          href={`whatsapp://send?text=${shareTitle}`}
          data-action="share/whatsapp/share"
          title="Share on WhatsApp"
        >
          <FontAwesomeIcon 
            size="2x"
            color="#075e54"
            icon={faWhatsapp} 
          />
        </a>
      </li>
    </ul>
  );
}

export default SocialShare;