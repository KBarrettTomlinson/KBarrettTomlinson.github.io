var main=function()
{
  
$('.tab').on("click",function()
{
 var id=$(this).attr('id');
 if(id==="HAbout")
  {
  $('.tab').removeClass('current');
  $(this).addClass('current');
  $('.jumbotron').removeClass('hide');
  $('.jumbotron').removeClass('show');
  $("#JHome.jumbotron").addClass('hide');
  $("#JAbout.jumbotron").addClass('show');
  $("#JEducation.jumbotron").addClass('hide');
  $("#JEmploymentHistory.jumbotron").addClass('hide');
  $("#JEmploymentPeaceCoffee1.jumbotron").addClass('hide');
  $("#JEmploymentPeaceCoffee2.jumbotron").addClass('hide');
  $("#JEmploymentBarista.jumbotron").addClass('hide');
  $("#JEmploymentPeaceCoffee3.jumbotron").addClass('hide');
  }
  
); 
};
$(document).ready(main);

