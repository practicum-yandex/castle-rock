import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import serialize from "serialize-javascript";

export const BUNDLE_FILE_NAME = "bundle.js";

const renderObject = (data: unknown) =>
  serialize(data).replace(/</g, "\\\u003c");

export function makeHTMLPage(content: string, store: any) {
  const scriptStore = renderToStaticMarkup(
    <script
      dangerouslySetInnerHTML={{
        __html: `window.__PRELOADED_STATE__ = ${renderObject(
          store.getState()
        )}`,
      }}
    />
  );

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>21 points</title>
      </head>
      <body>
        <div id="root">${content}</div>
        ${scriptStore}
        <script src='/${BUNDLE_FILE_NAME}'></script>
      </body>
    </html>
  `;
}
