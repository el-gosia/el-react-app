import React from 'react';

import { Sidebar } from './Sidebar';
import { Content } from './Content';

import './Window.scss';

export const Window = () => (
  <div className="window">
    <Sidebar />
    <Content />
  </div>
);
