import React from 'react';
import { Tabs } from 'antd';

import MoviesList from '../movies-list/movies-list';
import RatedMoviesList from '../rated/rated';

function Header() {
  const items = [
    {
      label: 'Search',
      key: '1',
      children: <MoviesList />,
    },
    {
      label: 'Rated',
      key: '2',
      children: <RatedMoviesList />, 
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <Tabs defaultActiveKey="1" centered items={items} style={{ width: '100%', margin: 'auto' }} />
    </div>
  );
}

export default Header;
