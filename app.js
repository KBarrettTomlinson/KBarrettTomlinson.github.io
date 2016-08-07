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
  $("#JHome.jumbotron").addClass('hide');
  }
}


/*
$('.tab').click(function()
{
$('.tab').removeClass('current');
$(this).addClass('current');
$('.jumbotron').removeClass('hide');
}
*/
/*
$('.jumbotron').hide()
$('Home.jumbotron').show()
$('.p1').click(function()
  {
  $('.jumbotron').hide();
  $('Home.jumbotron').show();
  }
$('.p2').click(function()
  {
  $('.jumbotron').hide();
  $('About.jumbotron').show();
  }
$('.p3').click(function()
  {
  $('.jumbotron').hide();
  $('Education.jumbotron').show();
  }
$('.p4').click(function()
  {
  $('jumbotron').hide();
  $('EmploymentHistory.jumbotron').show();
  $('EmploymentPeaceCoffee1.jumbotron').show();
  $('EmploymentPeaceCoffee2.jumbotron').show();
  $('EmploymentBarista.jumbotron').show();
  $('EmploymentPeaceCoffee3.jumbotron').show();
  }
*/

); 
};
$(document).ready(main);

