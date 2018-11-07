## Custom Hook:

This app uses a custom hook called `useApi` to fetch data. (useApi.hook.tsx)

The `useApi` hook is reused across `ComponentA` and `ComponentB`.

The `useApi` hook will return two pieces of information: 
1) The result of the HTTP request
2) The loading status of the HTTP request

Notice how `useApi` encapsulates the loading state of the request? This way, the developer does not need to check `this.props.data` in the component to check if the data is loading. That has been abstracted by `useApi` hook.

### Credits

This code was based on the work of @skovy

Check out [this post to create a React TypeScript app from scratch with support for React Hooks](https://medium.com/@skovy/using-react-hooks-with-typescript-aae6c7b2a3a9)


