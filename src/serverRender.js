import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom'
import App from './App';

export function render(req, res) {
  return renderToString(
    <StaticRouter location={req.url}>
      <App/>
    </StaticRouter>
  )
}
