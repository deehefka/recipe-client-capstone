'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.signUp(data)
    .then(ui.signUpSuccess) // if your request was succesful
    .catch(ui.signUpFailure) // if your request failed
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onRecipeCreate = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.recipeCreate(data)
    .then(ui.recipeCreateSuccess)
    .catch(ui.recipeCreateFailure)
}

const onRecipeUpdate = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // pulling specific data from id of to-do item
  api.recipeUpdate(data, data.recipe.id)
    .then(ui.recipeUpdateSuccess) // if your request was succesful
    .catch(ui.recipeUpdateFailure) // if your request failed
}

// const onTodoListShow = event => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.todoListShow(data)
//     .then(ui.todoListShowSuccess) // if your request was succesful
//     .catch(ui.todoListShowFailure) // if your request failed
// }

const onRecipeIndex = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.recipeIndex(data)
    .then(ui.recipeIndexSuccess) // if your request was succesful
    .catch(ui.recipeIndexFailure) // if your request failed
}

const onRecipeDelete = event => {
  event.preventDefault()
  // deleting data input on click
  const data = $('#delete-task').val()
  // const data = $('#delete-todo_list[id]').val()
  api.recipeDelete(data)
    .then(ui.recipeDeleteSuccess) // if your request was succesful
    .catch(ui.recipeDeleteFailure) // if your request failed
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onRecipeCreate,
  onRecipeUpdate,
  onRecipeIndex,
  // onTodoListShow,
  onRecipeDelete
}
