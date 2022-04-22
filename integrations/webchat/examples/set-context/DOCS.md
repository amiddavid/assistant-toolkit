To send the information to the assistant from your web application you can set the value of variables in message context whenever a message is sent to the assistant. In this example we will be setting the name of your user so you can display a customized welcome message with the user's name in it. You could also use this to set other pieces of information about your user that could be used by your skill. This can be used at any point in time to update any variable used by your skill.

To set the value of a variable follow the steps:

1. Write a function that can assign the value of a variable to the value you wish to set.
2. Register a listener for the `pre:send` event that calls the function to set the value.
