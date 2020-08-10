import React from 'react';
import Home from '../client/components/home';
import {renderToString} from 'react-dom/server'
import { StaticRouter } from "react-router-dom";
import Routes from '../client/routes';

export default (req) => {
    const content = renderToString(
                <StaticRouter location={req.path} context={{}}>
                    <Routes/>
                </StaticRouter>);

    return ` <html>
                <head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script defer src="bundle.js"></script>
                    <link rel="stylesheet" href="main.css" />
                </body>
        </html>`;
}

