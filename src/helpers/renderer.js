import React from 'react';
import {renderToString} from 'react-dom/server'
import { StaticRouter } from "react-router-dom";
import Routes from '../client/routes';

export default (req) => {
    const content = renderToString(
                <StaticRouter location={req.path} context={{}}>
                    <Routes/>
                </StaticRouter>);

    return `<!DOCTYPE html> 
            <html lang="en">
                <head>
                    <title>APP</title>
                    <meta content="width=device-width, initial-scale=1" name="viewport" />
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script defer src="bundle.js"></script>
                    <script defer src="1.bundle.js"></script>
                    <link rel="stylesheet" href="main.css" />
                </body>
        </html>`;
}

