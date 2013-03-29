$(document).ready(function() {
  $('div.accordion:eq(0)> div').hide();
  $('div.accordion:eq(0)> h3').click(function() {
    $(this).next().slideToggle('fast')
    .siblings('div:visible').slideUp('fast');
  });

  $('div.accordion2:eq(0)> div').hide();
  $('div.accordion2:eq(0)> h3').click(function() {
    $(this).next().slideToggle('fast')
    .siblings('div:visible').slideUp('fast');
  });

  $('div.accordion3:eq(0)> div').hide();
  $('div.accordion3:eq(0)> h3').click(function() {
    $(this).next().slideToggle('fast')
    .siblings('div:visible').slideUp('fast');
  });
});