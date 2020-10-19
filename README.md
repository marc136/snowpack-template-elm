# Example for the Snowpack Elm plugin

[snowpack-plugin-elm](https://github.com/marc136/snowpack-plugin-elm)

## Usage
Install the dependencies, e.g. `npm install`.

To start the live-reload [Snowpack dev server](https://www.snowpack.dev/), use  
`npm run dev` or `npx snowpack dev`

To create a build, execute  
`npm run build` or `npx snowpack build`

Then you can serve the content of the folder `build` to all browsers that support ES modules.
For instance like this with [caddy](https://caddyserver.com):

```sh
caddy file-server --root build --listen :8080
```

