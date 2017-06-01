/* eslint-disable global-require */
import React from 'react';

import TabBar from '../../components/TabBar';
import explorePage from '../explore';
import accountPage from '../account';
import newsPage from '../news';
import likePage from '../like';
import mapPage from '../map';


const tabs = [
  {
    name: 'Explore',
    component: explorePage,
    icon: require('../../assets/images/ic_polular.png'),
  },
  {
    name: 'Map',
    component: mapPage,
    icon: require('../../assets//images/ic_trending.png'),
  },
  {
    name: 'Like',
    component: likePage,
    icon: require('../../assets/images/ic_favorite.png'),
  },
  {
    name: 'News',
    component: newsPage,
    icon: require('../../assets/images/ic_my.png'),
  },
  {
    name: 'Account',
    component: accountPage,
    icon: require('../../assets/images/ic_polular.png'),
  },
];

const HomePage = () => {
  return (
    <TabBar tabs={tabs} />
  );
};

export default HomePage;
