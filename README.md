# PropMan

You can find the deployed project at [PropMan](https://propman.netlify.com).

## Contributors

|                                                   [Tyler Turnipseed](https://techturnip.us/)                                                   |                                                      [Ian Bryant](https://github.com/)                                                      |                                                    [Elvis Gonzalez](https://github.com/)                                                    |                                               [Teddy Zenebe](https://github.com/Teddyzenebe)                                                |                                       [Anthony Vigliotta](https:/www.anthonyvigliotta.com)                                       |
| :--------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://techturnip.us/) | [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/) | [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/) | [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/) |                 [<img src="https://i.imgur.com/ADKOTbq.jpg" width = "200" />](https://www.anthonyvigliotta.com)                  |
|                            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/techturnip)                             |                           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/honda0306)                            |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Mister-Corn)                           |                         [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/NandoTheessen)                          |                     [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/anthonyvigz)                     |
|       [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/tyler-turnipseed/)        |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)                |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)                |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)                | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/anthonyvigliotta) |

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/React-^16.11.0-blue.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/83bda242-4235-4808-9210-bb1de95fce6a/deploy-status)](https://propman.netlify.com/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Project Overview

[Trello Board](https://trello.com/b/mKfgx81y/property-manager)

[Product Canvas](https://www.notion.so/Property-Manager-bd4c33b5c8974b8aa938512b993f9108)

[UX Design files](https://www.figma.com/file/Mtjt9s7kxfGmh6fIgEszRY/PropMan?node-id=0%3A1)

PropMan is a property management application intended to become a one stop shop for all property management needs. A property manager can manage their properties, tenants and work orders all in one dashboard.

### Key Features

- Create and Edit Properties
- Add Tenants to Properties
- Edit Tenants
- Create and Edit Work Orders

## Tech Stack

### Front end built using:

#### _React w/ Redux_

- Create React App
- Material UI
- Reach Router
- React Spring

#### Front end deployed to `Netlify`

#### [Back end](https://github.com/Lambda-School-Labs/property-manager-be) built using:

#### Node and Express

- Firebase Auth
- Jest
- PostgreSQL
- Knex

# APIs

## Firebase Auth

User management and Authentication is handled with the Firebase Authentication API implemented on the backend. This allows us to leverage the security of offloading the auth process to a more secure and robust service while still being able to manage data with our backend.

<!--
## 2️⃣ Payment API here

🚫Replace text below with a description of the API

This is the way you take out your flustrations. Get away from those little Christmas tree things we used to make in school. Isn't it fantastic that you can change your mind and create all these happy things? Everything's not great in life, but we can still find beauty in it.

## 3️⃣ Misc API here

🚫Replace text below with a description of the API

You can do anything your heart can imagine. In life you need colors. This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. I'm sort of a softy, I couldn't shoot Bambi except with a camera. Trees get lonely too, so we'll give him a little friend. We'll lay all these little funky little things in there.

## 3️⃣ Misc API here

🚫Replace text below with a description of the API

When you do it your way you can go anywhere you choose. Let your heart take you to wherever you want to be. If I paint something, I don't want to have to explain what it is. A tree needs to be your friend if you're going to paint him. That's a son of a gun of a cloud. Even the worst thing we can do here is good.

## 3️⃣ Misc API here

🚫Replace text below with a description of the API

Volunteering your time; it pays you and your whole community fantastic dividends. Maybe there's a happy little waterfall happening over here. You can spend all day playing with mountains. We don't have to be committed. We are just playing here. You have freedom here. The only guide is your heart. It's cold, but it's beautiful.

# 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

🚫These are just examples, replace them with the specifics for your app

    *  REACT_APP_apiKey - this is your Google API key, which can be generated in the Google Cloud Console
    *  REACT_APP_authDomain - when you set up your Firebase project, this information will be in the dashboard
    *  REACT_APP_databaseURL - in the Firebase dashboard
    *  REACT_APP_projectID - in the Firebase dashboard
    *  REACT_APP_storageBucket - in the Firebase dashboard
    *  REACT_APP_messagingSenderId - in the Firebase dashboard
    *  REACT_APP_stripe_API - this is your public Stripe API key, generated in the Stripe dashboard
    *  REACT_APP_backendURL - optional for your local development server
    *  REACT_APP_clientid - this is the Stripe_connect clientID, generated in Stripe_connect settings
    *  REACT_APP_stripe_plan - this is the ID for a second Stripe subscription plan, generated under Stripe products

# 5️⃣ Content Licenses

🚫For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             | -->

# Testing

We are using React Testing Library / Jest for testing the front-end.

# Installation Instructions

The dev environment is simple.

```
git clone

npm install

npm start
```

<!-- ## Other Scripts

🚫replace these examples with your own

    * typecheck - runs the TypeScript compiler
    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them -->

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://pt6-propman.herokuapp.com/) for details on the backend of our project.
