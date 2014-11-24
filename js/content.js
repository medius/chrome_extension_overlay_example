var existingModal = $("body .modal")
console.log(config);

if (existingModal.length) {
  existingModal.remove();
} else {
  var modal = '<div class="modal" id="modal-one"></div>';
  var modalDialog = '<div class="modal-dialog"></div>';
  var iframe = '<iframe src="https://www.bing.com"></iframe>'

  $("body").append(modal);
  $("body .modal").append(modalDialog);
  $("body .modal .modal-dialog").append(iframe);
}

