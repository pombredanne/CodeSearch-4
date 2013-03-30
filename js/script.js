$(document).ready(function() {
  $('div.accordion> div').hide();
  $('div.accordion> h3').click(function() {
    $(this).next().slideToggle('fast')
    .siblings('div:visible').slideUp('fast');
  });
});