function animatedimage_pluginAppObj_14(){var hoverEvent_pluginAppObj_14;$(document).ready(function(){switch("mouseover"){case"click":$("#iandt_pluginAppObj_14 .wrapper").click(function(){$(this).toggleClass("back-visible")});break;case"timer":setInterval(function(){$("#iandt_pluginAppObj_14 .wrapper").toggleClass("back-visible")},2e3);break;case"mouseover":$("#iandt_pluginAppObj_14 .wrapper").hover(function(){hoverEvent_pluginAppObj_14=!0;$(this).addClass("back-visible");setTimeout(function(){hoverEvent_pluginAppObj_14=!1},100)},function(){hoverEvent_pluginAppObj_14=!1;$(this).removeClass("back-visible")})}var isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);isMobile&&!1&&$("#iandt_pluginAppObj_14 .wrapper a").each(function(){var existing_event=this.onclick;this.onclick=null;$(this).click(function(){if(!hoverEvent_pluginAppObj_14&&$("#iandt_pluginAppObj_14 .wrapper").hasClass("back-visible"))existing_event&&$(this).click(existing_event);else return hoverEvent_pluginAppObj_14=!1,!1})})})}