'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const store = require('./store.js')

$(() => {
  store.userSignedIn = false
  if (store.userSignedIn === false) {
    $('#sign-up-btn').show()
    $('#sign-in-btn').show()
    $('#sign-out-btn').hide()
    $('#password-btn').hide()
    $('#showModal').hide()
  }
  // Auth CRUD Actions
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-form').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  $('#recipe-create').on('submit', authEvents.onRecipeCreate)
  $('#recipe-index').on('submit', authEvents.onRecipeIndex)
  $('#recipe-show').on('submit', authEvents.onRecipeShow)
  $('#recipe-delete').on('submit', authEvents.onRecipeDelete)
  $('#recipe-update').on('submit', authEvents.onRecipeUpdate)
})
