import React, {Component} from 'react';
import axios from 'axios';

let polizasUrl = 'https://ronchon-choucroute-16574.herokuapp.com/api/polizas/';

axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

const api = {
  getPerfil: () => {

    const userToken = JSON.parse(localStorage.getItem('userToken'));

    return new Promise(function(resolve, reject) {
      const instance = axios.create({
        baseURL: perfilUrl,
        //timeout: 2000,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token' + userToken
        }
      });
      instance.get().then(function(response) {

        resolve(response.data);
      }).catch(function(error) {
        console.log(error.response);
        reject(error);
      });

    });
  },
