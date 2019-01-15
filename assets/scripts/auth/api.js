'use strict'

const config = require('../config.js')
const store = require('../store.js')

// taken from class lecture and TTT
const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

// taken from class lecture and TTT
const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

// taken from class lecture and TTT
const changePassword = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// taken from class lecture and TTT
const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const recipeCreate = data => {
//   return $.ajax({
//     url: config.apiUrl + '/recipes',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: data
//   })
// }

// pulled from class lectures
// const recipeUpdate = (data, id) => {
//   return $.ajax({
//     url: config.apiUrl + '/recipes/' + id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
// // pulled from class lectures
// const recipeDelete = id => {
//   return $.ajax({
//     url: config.apiUrl + '/recipes/' + id,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
// // pulled from class lectures
// const recipeIndex = () => {
//   return $.ajax({
//     url: config.apiUrl + '/recipes',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//     // data: data
//   })
// }

// const recipeShow = id => {
//   return $.ajax({
//     url: config.apiUrl + '/recipes/' + id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//     // data: {}
//   })
// }

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
  // recipeCreate,
  // recipeUpdate,
  // recipeDelete,
  // recipeIndex
  // recipeShow
}
