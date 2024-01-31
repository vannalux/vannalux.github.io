document.addEventListener('DOMContentLoaded', function(event)
{
   var Carousel1 = new bootstrap.Carousel('#Carousel1', {interval: 4000, pause: false});
});
$(document).ready(function()
{
   $('#wb_LayoutGrid1').parallax();
   $("a[href*='#LayoutGrid4']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid4').offset().top-88 }, 600, 'easeOutCirc');
   });
   $("a[href*='#LayoutGrid3']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid3').offset().top-88 }, 600, 'easeOutCirc');
   });
   function skrollrInit()
   {
      skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
   }
   skrollrInit();
});
