var main=function()
{
$('.jumbotron').hide()
$('home.jumbotron').show()
$('p1').click(function()
  {
  $('.jumbotron').hide();
  $('Home.jumbotron').show();
  }
$('p2').click(function()
  {
  $('.jumbotron').hide();
  $('About.jumbotron').show();
  }
$('p3').click(function()
  {
  $('.jumbotron').hide();
  $('Education.jumbotron').show();
  }
$('p4').click(function()
  {
  $('jumbotron').hide();
  $('EmploymentHistory.jumbotron').show();
  $('EmploymentHistory.jumbotron').show();
  $('EmploymentHistory.jumbotron').show();
  $('EmploymentHistory.jumbotron').show();
  $('EmploymentHistory.jumbotron').show();
  }




); 
};
$(document).ready(main);

