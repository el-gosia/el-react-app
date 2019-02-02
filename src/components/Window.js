import PropTypes from 'prop-types';
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

Window.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  register: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      issues: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          open: PropTypes.bool.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired
  ),
};
