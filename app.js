// import axios from 'axios';
// const axios = require('axios');

// import Axios from 'axios';

// const APIURL = 'https://cat-fact.herokuapp.com/facts';
// const APIURL = 'http://www.dnd5eapi.co/api/spells/acid-arrow/';
const APIURL = 'https://reqres.in/api/users';
let type = document.getElementsByClassName('type');
let textInfo = document.getElementsByClassName('text-info');
let upVotes = document.getElementsByClassName('upvotes');
let infoSection = document.getElementsByClassName('info-section');
let user = document.getElementsByClassName('user');
let loader = document.getElementsByClassName('loader');
let info = document.getElementsByClassName('cat-info');
let userId;

// toggle to none until that api informations are  loaded
info[0].style.display = 'none';

let settings = () => {
  loader[0].style.display = 'none';
  info[0].style.display = 'block';
};

const getData = () => {
  axios
    .get('https://reqres.in/api/users')
    .then((response) => {
      // console.log(response);
    })
    .catch((err) => {
      console.log('ups! Something is wrong ', err);
    });
};


// https://reqres.in/api/users?page=2
userId = 1;
const makeRequest = async () => {
  try {
    settings();
    let response = await axios.get(`https://reqres.in/api/users/`);
    let dataArr = response.data.data;
    console.log(dataArr[0].email);
  } catch (err) {
    console.log(err);
  }
};

makeRequest();

// getData();
