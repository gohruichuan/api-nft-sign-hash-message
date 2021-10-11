require('dotenv').config()
var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000;
bodyParser = require('body-parser');


const signature = require('./signature'); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/get', signature);
  // .post(todoList.create_a_task);


// app.route('/tasks/:taskId')
//   .get(todoList.read_a_task)
//   .put(todoList.update_a_task)
//   .delete(todoList.delete_a_task);

// routes(app); //register the route

app.listen(port);

console.log('RESTful API NFT Placeholder server started on: ' + port)


