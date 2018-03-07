## What is this?

This is a sample project using the Unsplash API for searching for photos. It uses a buggy alpha version of `@ionic/core` and `@stencil/core`. There are definitely Javascript exceptions in Ionic since it is alpha software presently, so ignore those for now as they're not relevant to the remainder of the exercise.

Rather than using React or Angular, I wanted to build a real app with a React-like Web Component compiler that we are building at my (former) day job. It uses JSX for templating, and Decorators for things like props, events, listening for events on the host element, etc.

Ultimately, I wanted to do something different and to stand out from the crowd that likely submits React and Bootstrap apps for their "homework assignment".

## Pre-reqs

This applications assumes you're running `npm 5.7.1` so lockfiles are respected and the correct versions of dependencies are used. `@ionic/core` and `@stencil/core` are very much in alpha and changing (breaking) frequently. If you use a different version, there is no guarantee this will work, and that would be most unfortunate.

## API Limitations

The API that I chose produces great data and cool images but it is important to note it only supports 5000 requests per hour. Please do not spam it too much.

## How to run the app

1. Run `npm install`
2. Run `npm run dev`

This will launch a live-reloading web server with the app.

## Code Details

The code is found in the `src/components` directory. The entry point is the `my-app` component, that handles the responsive layout.

We have the `list-page` component that renders a list and emits an event when a list entry is tapped/clicked. It renders a list of items returned by the Unsplash photo API.

The `detail-page` is rendered when an item is selected.

The API that talks to Unsplash is located in `src/utils/unsplash-api.ts`. It uses vanilla fetch (it's automatically polyfilled by Stencil if it's not there) to make the request and convert it from a JSON string into an Object (in this case an array).

## Quirks

The Unsplash API documentation says that a user can make 5000 requests per hour, but I have seen it error out and start returning bad responses with significantly less requests. Please keep this in mind and I did not code around it since it is merely a simple academic exercise.

