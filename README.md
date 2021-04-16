# Docker React App

React web application running in Docker container with Typescript.

This repo provides basic examples of a redux toolkit implementation that abstracts and simplifies API integration.

## Folder Structure

| Path              | Description                                            |
| ----------------- | ------------------------------------------------------ |
| `/src`            | React application source code.                         |
| `/src/components` | Common shared components.                              |
| `/src/store`      | Application Redux store, actions, reducers, slices.    |
| `/src/libs`       | Common utility library code.                           |
| `/src/libs/hooks` | Common shared hooks, specifically axios and api hooks. |
| `/src/features`   | Application feature components.                        |
| `/src/types`      | Location to declare modules without their own types.   |

## Additional Documentation

- [Setup](docs/setup.md)
- [React](docs/React.md)
- [Redux](docs/Redux.md)

## Redux Async Implementation

Redux is implemented through the redux-toolkit and an abstraction of the API for async requests.
Using the toolkit reduces the boilerplate code that adds no value to the application.
All reducers are implemented through an abstraction for each feature set (i.e. a hook to manage users).
All requests made to any API should have its own hook.
All reducers that require async will then use the appropriate api hook.
This will ensure all code related to the store is in one place.
This will ensure all code related to API requests is in one place.

## Bootstrap Removed

Bootstrap generates ugly HTML.
Due to its construction far too many div elements are generated.
CSS Grid is a far better option and provides much better support for responsive design.
The only possible downside is backward support for IE and older browsers (which shouldn't be an issue for most projects).

## Prettier and Eslint

Code is configured to be linted and formatted by Prettier and Eslint.

## Styled Components and SASS

In an effort to tightly couple CSS with components to improve maintainability Styled Components with SASS has been implemented.
To enable overriding, components should use a standardized class naming convention `class="your-name-here"`.
This will allow custom CSS to override through specificity, as this will ensure the last name applied to the class is the custom name.

Global variables through themes are supported.
