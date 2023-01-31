// const User = require('../models/User');
// const cloudinary = require('../utils/cloudinary');
// const auth = require('../utils/auth');
// const router = require('express').Router();
// const Project = require('../models/Project');
// const Technology = require('../models/Technology');

// Fill in content for explore page test.html

let user1 = "";
let user2 = "";
let user3 = "";
let user4 = "";
let user5 = "";

let project1 = "";
let project2 = "";
let project3 = "";
let project4 = "";

const usergallery = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/users', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/explore');
        user2.id = Math.random()*usergallery.length;

    } else {
        alert(response.statusText);
    }

}

const projectgallery = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/projects', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/explore');
    } else {
        alert(response.statusText);
    }

}
