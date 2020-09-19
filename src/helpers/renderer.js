import React from 'react';
import {renderToString} from 'react-dom/server'
import { StaticRouter } from "react-router-dom";
import Routes from '../client/routes';
import {Provider} from 'react-redux';
import {renderRoutes} from "react-router-config";

export default (req, store) => {
    const content = renderToString(
                <Provider store={store}>
                    <StaticRouter location={req.path} context={{}}>
                        <div> {renderRoutes(Routes)} </div>
                    </StaticRouter>
                </Provider>);

    return `<!DOCTYPE html> 
            <html lang="en">
                <head>
                    <title>APP</title>
                    <meta content="width=device-width, initial-scale=1" name="viewport" />
                    <meta name="Description" content="SpaceX test project for learning.">
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script defer src="bundle.js"></script>
                    <script defer src="1.bundle.js"></script>
                    <link rel="stylesheet" href="main.css" />
                </body>
        </html>`;
}

