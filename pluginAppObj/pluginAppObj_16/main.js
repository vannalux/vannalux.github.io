function animatedimage_pluginAppObj_16(){var hoverEvent_pluginAppObj_16;$(document).ready(function(){switch("timer"){case"click":$("#iandt_pluginAppObj_16 .wrapper").click(function(){$(this).toggleClass("back-visible")});break;case"timer":setInterval(function(){$("#iandt_pluginAppObj_16 .wrapper").toggleClass("back-visible")},2e3);break;case"mouseover":$("#iandt_pluginAppObj_16 .wrapper").hover(function(){hoverEvent_pluginAppObj_16=!0;$(this).addClass("back-visible");setTimeout(function(){hoverEvent_pluginAppObj_16=!1},100)},function(){hoverEvent_pluginAppObj_16=!1;$(this).removeClass("back-visible")})}var isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);isMobile&&!1&&$("#iandt_pluginAppObj_16 .wrapper a").each(function(){var existing_event=this.onclick;this.onclick=null;$(this).click(function(){if(!hoverEvent_pluginAppObj_16&&$("#iandt_pluginAppObj_16 .wrapper").hasClass("back-visible"))existing_event&&$(this).click(existing_event);else return hoverEvent_pluginAppObj_16=!1,!1})})})}