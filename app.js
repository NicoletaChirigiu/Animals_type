import Axios from 'axios';

const APIURL = 'http://www.dnd5eapi.co/api/spells/acid-arrow/';
let type = document.getElementsByClassName('type');
let textInfo = document.getElementsByClassName('text-info');
let upVotes = document.getElementsByClassName('upvotes');
let infoSection = document.getElementsByClassName('info-section');
let user = document.getElementsByClassName('user');
let loader = document.getElementsByClassName('loader');

window.onload = () => {
  // console.log('test');

  // setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.

  loader.style.display = 'none';
  user.style.display = 'block';
  upVotes.style.display = 'block';
  type.style.display = 'block';
  textInfo.style.display = 'block';
};

// fetch(APIURL)
//   .then((response) => {
//     console.log(response);

//     // return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(' this is not working');
//   });

axios.get('http://www.dnd5eapi.co/api/spells/acid-arrow/')
  .then((response) => {
    console.log(reponse);
  })
  .catch((error) => {
    console.log('nu merge');
  });
