import React from 'react';

import './loader.scss';

const Loader = () => (
  <div className="loader">
    <div className="ui segment">
      <div className="ui active inverted dimmer">
        <div className="ui large text loader">Loading</div>
      </div>
      <p />
      <p />
      <p />
    </div>
  </div>
);

export default Loader;
