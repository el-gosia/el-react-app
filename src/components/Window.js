import React from 'react';

import './Window.scss';

const controlButtons = ['close', 'minimize', 'maximize'];

export const Window = () => (
  <div className="window">
    <div className="sidebar">
      <ul class="sidebar__controls">
        {controlButtons.map(type => (
          <li>
            <button className={`sidebar__control sidebar__control--${type}`} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);
