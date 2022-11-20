
document.addEventListener('DOMContentLoaded',function(event)
{if(hasCookie('darktheme'))
{document.documentElement.classList.add('darktheme');}});$(document).ready(function()
{$('#wb_indexShape3').addClass('visibility-hidden');$("a[href*='#header']").click(function(event)
{event.preventDefault();$('html, body').stop().animate({scrollTop:$('#wb_header').offset().top},600,'easeOutCirc');});function skrollrInit()
{skrollr.init({forceHeight:false,mobileCheck:function(){return false;},smoothScrolling:false});}
skrollrInit();$('#wb_VideoBackground').parallax();$("a[data-rel='gallery']").attr('rel','gallery');$("#gallery").magnificPopup({delegate:'a',type:'image',gallery:{enabled:true,navigateByImgClick:true}});function onScrollindexShape3()
{var $obj=$("#wb_indexShape3");if(!$obj.hasClass("in-viewport")&&$obj.inViewPort(false))
{$obj.addClass("in-viewport");AnimateCss('wb_indexShape3','slide-right-in',0,2000);}}
onScrollindexShape3();$(window).scroll(function(event)
{onScrollindexShape3();});$("#indexAccordion1").accordion({event:'click',animate:'linear',icons:null,active:false,collapsible:true,header:'h4',heightStyle:'content'});$("#indexAccordion1").data("height",$("#indexAccordion1").outerWidth());$(window).resize(function()
{if($("#indexAccordion1").data("height")!=$("#indexAccordion1").outerWidth())
{$("#indexAccordion1").accordion("refresh");$("#indexAccordion1").data("height",$("#indexAccordion1").outerWidth());}});$("a[href*='#LayoutGrid4']").click(function(event)
{event.preventDefault();$('html, body').stop().animate({scrollTop:$('#wb_LayoutGrid4').offset().top-88},600,'easeOutCirc');});});