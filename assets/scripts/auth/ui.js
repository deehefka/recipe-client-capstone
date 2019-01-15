'use strict'

const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('You signed up! Please sign in!')
  $('#message').removeClass()
  $('#message').addClass('success')
  // clears sign up information
  $('#sign-up').trigger('reset')
  // console.log('signUpSuccess ran. Data is :', data)
  $('#sign-up').hide()
}

const signUpFailure = data => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // clears sign up information
  $('#sign-up').trigger('reset')
  // console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = data => {
  store.user = data.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  // // $('#showButton').show()
  // $('#sign-out').show()
  // $('#change-password').show()
  // hiding or showing elements after click
  document.getElementById('change-password').hidden = false
  // document.getElementById('my-to-dos').hidden = false
  // document.getElementById('todo_list-create').hidden = false
  // document.getElementById('todo_list-update').hidden = false
  // document.getElementById('todo_list-index').hidden = false
  // document.getElementById('todo_list-delete').hidden = false
  document.getElementById('sign-out').hidden = false
  // document.getElementById('showButton').hidden = false
  // document.getElementById('deleteButton').hidden = false
  $('#message').text('You signed in! Create some Recipes!')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('signInSuccess ran. Data is :', data)
  $('#sign-in').trigger('reset')
}

const signInFailure = data => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#sign-in').trigger('reset')
  // console.error('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  $('#message').text('You changed your password!')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('changePasswordSuccess ran. Data is :', data)
  $('#change-password').trigger('reset')
}

const changePasswordFailure = data => {
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('changePasswordFailure ran. Error is :', error)
  $('#change-password').trigger('reset')
}

const signOutSuccess = data => {
  $('#message').text('Bye now!')
  store.user = null
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('signOutSuccess ran. Data is :', data)
  $('#sign-out').trigger('reset')
}

const signOutFailure = data => {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('signOutFailure ran. Error is :', error)
  $('#sign-out').trigger('reset')
}

// const recipeCreateSuccess = data => {
//   store.todo_lists = data.todo_lists
//   $('#message').text('You created an item for your recipe!')
//   // document.getElementById('todo-item').hidden = false
//   $('#message').removeClass()
//   $('#message').addClass('success')
//   $('#recipe-create').trigger('reset')
// }

// const recipeCreateFailure = data => {
//   $('#message').text('Error on recipe creation')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
//   // console.error('signUpFailure ran. Error is :', error)
//   $('#recipe-create').trigger('reset')
// }

// const recipeShowSuccess = data => {
//   // store.schemes = data.schemes
//   $('#message').text('Here is one of your recipes!')
//   $('#message').removeClass()
//   $('#message').addClass('success')
// }
//
// const recipeShowFailure = data => {
//   $('#message').text('Failure on recipe show')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
// }

// const recipeDeleteSuccess = data => {
//   $('#message').text('You deleted a recipe!')
//   $('#message').removeClass()
//   $('#message').addClass('success')
//   $('#recipe-delete').trigger('reset')
// }

// const recipeDeleteFailure = data => {
//   $('#message').text('Failure on recipe delete')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
//   $('#recipe-delete').trigger('reset')
// }

// const recipeUpdateSuccess = data => {
//   // store.todo_lists = data.todo_lists
//   $('#message').text('You updated a recipe!')
//   $('#message').removeClass()
//   $('#message').addClass('success')
//   $('#recipe-update').trigger('reset')
// }

// const recipeUpdateFailure = data => {
//   $('#message').text('Error on recipe update')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
//   // console.error('signUpFailure ran. Error is :', error)
//   $('#recipe-update').trigger('reset')
// }

// const recipeIndexSuccess = data => {
//   store.recipes = data.recipes
//   // display tasks on show all click
//   document.getElementById('output').hidden = false
//   $('#message').text('Here are all your recipes!')
//   // empties output
//   $('#output').empty()
//   // function - for each todo list item
//   data.recipes.forEach(recipe => {
//     // add to output
//     $('#output').append(
//       // formatting how the tasks show to the user
//       `<div id=${recipe.id}> <p> ${recipe.id} </p> </div>`)
//     // calling the keys and their values and printing them out (user input)
//     for (const key in recipe) {
//       if (key !== 'id') {
//         $(`#${recipe.id}`).append(`<p>${key}: ${recipe[key]}</p>`)
//       }
//     }
//   })
//   $('#message').removeClass()
//   $('#message').addClass('success')
// }

// const recipeIndexFailure = data => {
//   $('#message').text('Failure on recipe index')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
// }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
  // recipeCreateSuccess,
  // recipeCreateFailure,
  // // recipeShowSuccess,
  // // recipeShowFailure,
  // recipeDeleteSuccess,
  // recipeDeleteFailure,
  // recipeUpdateSuccess,
  // recipeUpdateFailure,
  // recipeIndexSuccess,
  // recipeIndexFailure
}
