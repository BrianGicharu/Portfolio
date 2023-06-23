$(document).ready(() => {
  // variables (modals)
  var eduModal = new bootstrap.Modal($('#edu'), { keyboard: false })
  var expModal = new bootstrap.Modal($('#exp'), { keyboard: false })

  //education
  $('#education-tab').on('click', () => {
    eduModal.show()
  })

  $('#closeEdu').on('click', () => {
    var btn = new bootstrap.Modal($('#edu'), { keyboard: false })
    btn.hide()
  })

  // experience
  $('#experience-tab').on('click', () => {
    expModal.show()
  })

  $('#closeExp').on('click', () => {
    var btn = new bootstrap.Modal($('#exp'), { keyboard: false })
    btn.hide()
  })
})
