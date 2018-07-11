
$('#submitMessage').hide();

$('#submitButton').click(function(e){
  e.preventDefault();
  $('#submitMessage')
  .slideDown(1000)
  .delay(3000)
  .slideUp();
  
});