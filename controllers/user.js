const { response, request } = require('express');

const userGet = (req = request, res = response) => {

    const {age, city = 'not city'} = req.query;

    res.json({
        msg: 'get API - controller',
        age,
        city
    });
}

const userPost = (req, res = response) => {
    const {name, age} = req.body;
    res.status(500).json({
        msg: 'post API - controller',
        name,
        age
    })
}

const userPut = (req, res = response) => {
    const {id} = req.params;
    res.status(201).json({
        msg: 'put API - controller',
        id
    })
}

const userPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    })
}

const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    })
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete
}