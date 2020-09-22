const PostArrival = require("../models/postPage");


module.exports = {
    index,
    create,
    update,
    delete: deleteOne
}

function create(req,res) {
    req.body.toDo = req.body.toDo.split(',');
    PostArrival.create(req.body)
    .then(post => {res.json(post)})
    .catch(err => {res.json(err)})
}

function index(req,res) {
    PostArrival.find({})
    .populate('')
    .then(post => {res.json(post)})
    .catch(err => {res.json(err)})
}

function update(req, res) {
    PostArrival.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .populate('addedBy')
    .then(postArrival => {res.json(postArrival)})
    .catch(err => {res.json(err)})
  }

  function deleteOne(req, res) {
    PostArrival.findByIdAndDelete(req.params.id)
    .then(postArrival => {res.json(postArrival)})
    .catch(err => {res.json(err)})
  }