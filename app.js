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
  
  /*
  else if(id==="HEducation")
    {
    $('.tab').removeClass('current');
    $(this).addClass('current');
    $('.jumbotron').removeClass('hide');
    $()
    }
    */
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

