$('#user-proflie').click(function(){
    $('#user-login').toggle(100);
})

$('body').scrollTop(300);
$('.one, .two, .three').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top - 90
    }, 1500);
});


$('.try-again').click(function(){
    window.history.back();
})