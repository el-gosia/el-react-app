import PropTypes from 'prop-types';
import React from 'react';
import Loader from 'react-loader';

import Sidebar from '../containers/SidebarContainer';
import Content from '../containers/ContentContainer';

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
