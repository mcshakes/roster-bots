# README

## Build Instructions:
1) Clone the repo
2) Run `bundle install` at the root of the project

*You will need to ensure postgres is running in the background and run `rake db:create && rake db:migrate`*

3) On this terminal window/pane, run `rails s -p 3001` to start the rails server
4) Open a second terminal window and go within the client folder with `cd client`
5) Within the client folder, run `npm install` or `yarn install`
6) Within that very same client folder, run `yarn --cwd client start` or `npm start`
7) This should automatically open a browser and take you to login/root page

## Test Instructions:
1) Run `rspec` at the root of the project


## CI
- On Gitlab CI hopefully