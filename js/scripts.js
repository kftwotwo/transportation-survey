$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();
    $("#work-results").show();
    $("input:checkbox[name=work]:checked").each(function(){
      var workMode = $(this).val();
      $('#work-results').append(workMode + "<br>");
    });
    $("#recreational-results").show();
    $("input:checkbox[name=recreational]:checked").each(function(){
      var recreationalMode = $(this).val();
      $('#recreational-results').append(recreationalMode + "<br>");
    });
    $('form#input').hide();
  });
});
