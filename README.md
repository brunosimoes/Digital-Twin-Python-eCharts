# Python Microfrontend

## Configuration

This documentation outlines the steps required to configure the microfrontend for a web application.

1. Open the file ./config/settings.json in your preferred code editor.

2. Modify the following fields as per your requirements:

    - `devServerPort`: Update this field with a free port number to run the development server.
    - `name`: Change the module name to one of your choosing.

4. To expose new components, add the following line of code to the `exposes` field:

```
    "./pages/UseCase1": "./src/components/pages/UseCase1.tsx",
    "./pages/UseCase2": "./src/components/pages/UseCase2.tsx"
```

   Here, `./pages/UseCase1` is the endpoint (virtual) that other microfrontends will use to consume the component, and `./src/components/pages/UseCase1.tsx` is the location of the component's code on your local machine.


4. In the remotes field, list other projects you want to use in this module. For example:

```
"remotes": ["dtmServicesIntegration", "dtmUX"]
```

5. In case you are not utilizing a microfrontends cluster that automatically generates the file `./microfrontend/src/contants/registry.json`, it is important to note that any modifications made to properties such as port and name must also be manually updated in this file. However, all other settings should remain unchanged.

## Developing the Microfrontends

1. Open the `microfrontend` folder with a terminal
2. If needed, use `yarn install` and `yarn add` to install any necessary dependencies.
3. Start developing using the command `yarn start:live`. Use `yarn build` to generate a new version to use with the docker image.
4. Create your components inside the `src/components` directory.
5. To modify the main UI or add new interfaces to the main menu, open the `src/App.tsx` file.
   In the `src/App.tsx` file, you can modify the `components` array to include your components. For example:

```
const components: Service[] = [
  { name: "Use-Case 1", comp: UseCase1 },
  { name: "Use-Case 2", comp: UseCase2 },
];

const App = () => (
  <React.Suspense fallback="Loading Module">
    <ServicesLayout components={components} />
  </React.Suspense>
);
```

## Developing the Python

Write you python code inside microservice endpoints: `./microservice/endpoints`

## Build and Run

Run `docker compose up -d --build`

## Conclusion

In conclusion, this documentation provides a simple and easy-to-follow guide to configure the microfrontend for your web application. By following these steps, you can ensure that your microfrontend is correctly configured and ready to use.