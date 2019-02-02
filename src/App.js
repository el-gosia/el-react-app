import React, { Component } from 'react';
import Loader from 'react-loader';

import { Window } from './components/Window';

import './App.scss';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      issues: [],
    };
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:9000/register');
    const issues = await response.json();
    this.setState({ issues, isLoading: false });
  }

  render() {
    const { isLoading, issues } = this.state;

    if (isLoading) return <Loader />;
    return (
      <div className="app">
        <Window issues={issues} />
      </div>
    );
  }
}
