import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import ScrollIntoView from './components/ScrollIntoView';
import { Homepage, SingleArticle, CategoryArchive, NotFound } from './components/pages';
import AppContext from './components/context/AppContext';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [resData, setResData] = useState({
    categories: null,
    recent: null
  });

  useEffect(() => {
    setIsLoaded(false);
    
    const fetchData = async () => {
      const categoriesRes = await axios(
        `${process.env.REACT_APP_API_URL}/categories`
      );

      const recentRes = await axios(
        `${process.env.REACT_APP_API_URL}/posts?per_page=5&status=publish&_embed`
      );

      setResData({
        categories: categoriesRes.data,
        recent: recentRes.data
      });
      setIsLoaded(true);
    }

    fetchData();
  }, []);

  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <AppContext.Provider value={{
        pageIsLoading: isLoaded,
        categories: resData.categories,
        recentArticles: resData.recent,
        popularArticles: resData.recent
      }}
      >
        <ScrollIntoView>
          <div className="App">
            <Switch>
              <Route path="/" component={Homepage} exact />
              <Route path="/:slug" component={CategoryArchive} exact />
              <Route path="/:category/:slug" component={SingleArticle} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </ScrollIntoView>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
