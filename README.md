# README

### This is a Ruby on Rails and Jquery app as an instant messenger and real time chat app.

### First you create the landing page by typing in the command  rails g controller Landing index. You also change the routes.rb and add in `root landing#index`

### After you spin up the server to test we will be creating a model to house the messages by typing this in the terminal `rails g model  Message content:text`

### Also create  a controller to channel the data bvy typing in the terminal this `rails g controller MessageController`

### After the controller is created we will create a channel room like so `rails g channel room`. 