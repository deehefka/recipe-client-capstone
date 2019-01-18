'use strict'

const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('You signed up! Please sign in!')
  $('#message').removeClass()
  $('#message').addClass('success')
  // clears sign up information
  $('#sign-up-form').trigger('reset')
  // console.log('signUpSuccess ran. Data is :', data)
  window.setTimeout(function () {
    $('#signUpModal').modal('hide')
  }, 500)
}

const signUpFailure = data => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // clears sign up information
  $('#sign-up-form').trigger('reset')
  // console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = data => {
  store.user = data.user
  store.userSignedIn = true
  $('#sign-up-btn').hide()
  $('#sign-in-btn').hide()
  $('#sign-out-btn').show()
  $('#password-btn').show()
  $('#showModal').show()
  $('#showEditModal').show()
  // $('#showEditModal').show()
  $('#message2').text('Signed In Successfully')
  $('#message2').removeClass()
  $('#message2').addClass('success')
  $('#sign-in-form').trigger('reset')
  // document.getElementById('my-to-dos').hidden = false
  document.getElementById('recipe-create').hidden = false
  document.getElementById('recipe-update').hidden = false
  document.getElementById('recipe-index').hidden = false
  document.getElementById('recipe-delete').hidden = false
  document.getElementById('showButton').hidden = false
  document.getElementById('deleteButton').hidden = false
  window.setTimeout(function () {
    $('#signInModal').modal('hide')
  }, 500)
}

const signInFailure = data => {
  $('#message2').text('Error on SignIn')
  $('#message2').removeClass()
  $('#message2').addClass('failure')
  $('#sign-in-form').trigger('reset')
  // console.error('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  $('#message4').text('You changed your password!')
  $('#message4').removeClass()
  $('#message4').addClass('success')
  $('#change-password-form').trigger('reset')
  // console.log('changePasswordSuccess ran. Data is :', data)
  // $('#changePasswordModal').modal('hide')
  window.setTimeout(function () {
    $('#changePasswordModal').modal('hide')
  }, 500)
}

const changePasswordFailure = data => {
  $('#message4').text('Error on Change Password')
  $('#message4').removeClass()
  $('#message4').addClass('failure')
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = data => {
  store.userSignedIn = false
  $('#sign-up-btn').show()
  $('#sign-in-btn').show()
  $('#sign-out-btn').hide()
  $('#password-btn').hide()
  $('#showModal').hide()
  $('#showEditModal').hide()
  //$('#message5').text('Bye now!')
  store.user = null
  $('#message3').removeClass()
  $('#message3').addClass('success')
  $('#message3').empty()
  document.getElementById('output').hidden = true
  document.getElementById('recipe-create').hidden = true
  document.getElementById('recipe-update').hidden = true
  document.getElementById('recipe-index').hidden = true
  document.getElementById('recipe-delete').hidden = true
  document.getElementById('showButton').hidden = true
  document.getElementById('deleteButton').hidden = true
  window.setTimeout(function () {
    $('#signOutModal').modal('hide')
  }, 500)
}

const signOutFailure = data => {
  store.user = null
  $('#message3').text('Error on SignOut')
  $('#message3').removeClass()
  $('#message3').addClass('failure')
}

const recipeCreateSuccess = data => {
  store.recipes = data.recipes
  $('#message5').text('You created an item for your recipe!')
  // document.getElementById('todo-item').hidden = false
  $('#message5').removeClass()
  $('#message5').addClass('success')
  $('#recipe-create').trigger('reset')
}

const recipeCreateFailure = data => {
  $('#message5').text('Error on recipe creation')
  $('#message5').removeClass()
  $('#message5').addClass('failure')
  // console.error('signUpFailure ran. Error is :', error)
  $('#recipe-create').trigger('reset')
}

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

const recipeDeleteSuccess = data => {
  $('#message5').text('You deleted a recipe!')
  $('#message5').removeClass()
  $('#message5').addClass('success')
  $('#recipe-delete').trigger('reset')
}

const recipeDeleteFailure = data => {
  $('#message5').text('Failure on recipe delete')
  $('#message5').removeClass()
  $('#message5').addClass('failure')
  $('#recipe-delete').trigger('reset')
}

const recipeUpdateSuccess = data => {
  // store.todo_lists = data.todo_lists
  $('#message5').text('You updated a recipe!')
  $('#message5').removeClass()
  $('#message5').addClass('success')
  $('#recipe-update').trigger('reset')
}

const recipeUpdateFailure = data => {
  $('#message5').text('Error on recipe update')
  $('#message5').removeClass()
  $('#message5').addClass('failure')
  // console.error('signUpFailure ran. Error is :', error)
  $('#recipe-update').trigger('reset')
}

const recipeIndexSuccess = data => {
  store.recipes = data.recipes
  // display tasks on show all click
  document.getElementById('output').hidden = false
  $('#message5').text('Here are all your recipes!')
  // empties output
  $('#output').empty()
  // function - for each todo list item
  data.recipes.forEach(recipe => {
    // add to output
    $('#output').append(
      // formatting how the tasks show to the user
      `<div id=${recipe.id}> <p> ${recipe.id} </p> </div>`)
    // calling the keys and their values and printing them out (user input)
    for (const key in recipe) {
      if (key !== 'id') {
        $(`#${recipe.id}`).append(`<p>${key}: ${recipe[key]}</p>`)
      }
    }
  })
  $('#message5').removeClass()
  $('#message5').addClass('success')
}

const recipeIndexFailure = data => {
  $('#message5').text('Failure on recipe index')
  $('#message5').removeClass()
  $('#message5').addClass('failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  recipeCreateSuccess,
  recipeCreateFailure,
  // // recipeShowSuccess,
  // // recipeShowFailure,
  recipeDeleteSuccess,
  recipeDeleteFailure,
  recipeUpdateSuccess,
  recipeUpdateFailure,
  recipeIndexSuccess,
  recipeIndexFailure
}
