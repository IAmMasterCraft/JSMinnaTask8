# JSMinnaTask8
My Solution to JS Minna task 8

# Tasks
 1. Create a module that accepts a file name as an input and deletes it (Assuming the file is in the same folder as the module)
 
 2. Create a module that reads a file and logs its content to the console

 3. Create a basic HTTP server that listens to a request on a certain port and echoes the body of the request(If it’s exists) as a response.  The server should Listen to the following request;  POST, PUT, DELETE
 
 *Remove the echo feature from the above server and do the following:*
 
 _Given an array of state objects, each object in the array contains the name of a state as its key, and the capital as its value. I.e { lagos: ‘ikeja’ }. Hardcode this array of objects on the backend and do the following:_
 
    a. A GET request made to the server should return the state array as a response.
    b. A POST request made to the server with the state object as the request body should add a new state-capital object to the arrays and return the newly updated object as a response.
    c. A PUT request made should update an already existing capital of a particular state and respond with the Updated Object.
    d. A DELETE request should delete a particular state-capital pair from the array and respond with the updated Object.
    
    Additionally, the body of each request should only contain an Object as such; {‘Osun’: ‘Osogbo’}.
