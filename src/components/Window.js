import PropTypes from 'prop-types';
import React from 'react';
import Loader from 'react-loader';

import { Sidebar } from './Sidebar';
import { Content } from './Content';

import './Window.scss';

export const Window = ({ isLoading }) => {
  if (isLoading) return <Loader />;

  return (
    <section className="window">
      <div className="mask background" />
      <Sidebar />
      <Content />
    </section>
  );
};

Window.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

Loader.displayName = 'Loader';
