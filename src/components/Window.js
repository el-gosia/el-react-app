import React from 'react';

import { Sidebar } from './Sidebar';

import './Window.scss';

export const Window = () => (
  <div className="window">
    <Sidebar />
    <div className="content" />
  </div>
);
