import React from 'react';
import Loader from 'react-loader';

import { Sidebar } from './Sidebar';
import { Content } from './Content';

import './Window.scss';

export const Window = ({ isLoading, register }) => {
  if (isLoading) return <Loader />;

  return (
    <div className="window">
      <div className="mask background" />
      <Sidebar />
      <Content register={register} />
    </div>
  );
};
