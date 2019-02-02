import React from 'react';
import Loader from 'react-loader';

import { Sidebar } from './Sidebar';
import { Content } from './Content';

import './Window.scss';

export const Window = ({ isLoading }) => {
  if (isLoading) return <Loader />;

  return (
    <div className="window">
      <Sidebar />
      <Content />
    </div>
  );
};
