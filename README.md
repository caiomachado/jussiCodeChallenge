![foto_1](https://user-images.githubusercontent.com/67983948/112389961-54e23b80-8cd4-11eb-8a06-43b3a41808aa.png)
![foto_2](https://user-images.githubusercontent.com/67983948/112389985-5ad81c80-8cd4-11eb-8a92-5d57203a65a1.png)
# Introduction

This project is a code challenge for Jüssi in which my challenge was to replicate this landing page using nothing but React.

## Dependencies

For this project I used 3 dependencies:

- Styled Components: I used styled components for the whole page's styling.
  Styled components not only makes styling easier to do but also it makes the file a lot cleaner and with less code written in it. It is very dynamic and it allows you to interact with props.

- React Icons: I used react-icons to get some of the icons used in this page such as the social media ones and the hamburger menu.
  React Icons is such a simple tool, easy to import and use.

- Axios: I used axios to do the API fetch. Axios is very simple to use and to set up.
  Speaking of API, for this project, I used the GitHub API to get the user's information.
  Although this information isn't being printed on the screen, it is showed on the console log if successful.

## How to run the project

To run this project, you must first install all the dependencies with:
`npm install` or `yarn` (depends on which one you use).
Once you have all the dependencies installed, just run `yarn start` or `npm run start`

## Responsive

This project is 100% responsive and it works on every screen size from 300px wide to as much as you need.

## Observation

Some of the hrefs are referencing to # because there were no other places to redirect it to.
So theoretically, it is supposed to be redirected to another page when clicked.

## File's Structure

For this project specifically I left all the components inside the global components folder.
However, if there were more pages, I would create a component folder for each page that contains the specific components used in that page. That way I would only leave the global components on the global component folder. In this particular case, I would leave the Footer, Header and Menu component in the global folder.
