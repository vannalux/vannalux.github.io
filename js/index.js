document.addEventListener('DOMContentLoaded', function(event)
{
   var Carousel1 = new bootstrap.Carousel('#Carousel1', {interval: 4000, pause: false});
});
$(document).ready(function()
{
   $('#wb_Card4').addClass('visibility-hidden');
   $('#wb_Card5').addClass('visibility-hidden');
   $('#wb_Card6').addClass('visibility-hidden');
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
   function onScrollCard4()
   {
      var $obj = $("#wb_Card4");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Card4', 'slide-left-in', 0, 1250);
      }
   }
   onScrollCard4();
   $(window).scroll(function(event)
   {
      onScrollCard4();
   });
   function onScrollCard5()
   {
      var $obj = $("#wb_Card5");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Card5', 'slide-up-in', 0, 1250);
      }
   }
   onScrollCard5();
   $(window).scroll(function(event)
   {
      onScrollCard5();
   });
   function onScrollCard6()
   {
      var $obj = $("#wb_Card6");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Card6', 'slide-right-in', 0, 1250);
      }
   }
   onScrollCard6();
   $(window).scroll(function(event)
   {
      onScrollCard6();
   });
   function skrollrInit()
   {
      skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
   }
   skrollrInit();
});
