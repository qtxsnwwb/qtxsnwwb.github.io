$(document).ready(function() {
  AOS.init( {
	  
  }); // initialize animate on scroll library
  
  // Smooth scroll for links with hashes
  $('a.smooth-scroll')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  
  $('#emailForm #sendEmail').click(function(){
    window.location.href = "mailto:1624949784@qq.com?subject=" + $('#emailForm *[name=subject]').val() + "&body=" + $('#emailForm *[name=body]').val();
    alert("发送成功");
    return false;
  });
});

