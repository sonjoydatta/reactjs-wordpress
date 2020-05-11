import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';

import SidebarAds from '../../images/ads/sidebar.jpg';
import Ads from '../Ads';
import AppContext from '../context/AppContext';
import { ListBlock } from '../Block';

const Sidebar = () => {
  const { recentArticles, popularArticles } = useContext(AppContext);

  return (
    <aside className="Sidebar">
      <Ads
        slug="!#"
        adImage={SidebarAds}
      />
      <Row>
        <Col xs={12} md={6} lg={12}>
          <ListBlock 
            title="সর্বশেষ"
            listData={recentArticles} 
          />
        </Col>
        <Col xs={12} md={6} lg={12}>
          <ListBlock 
            title="সর্বাধিক পঠিত"
            listData={popularArticles} 
          />
        </Col>
      </Row>
      <Ads
        slug="!#"
        adImage={SidebarAds}
      />
    </aside>
  );
}

export default Sidebar;