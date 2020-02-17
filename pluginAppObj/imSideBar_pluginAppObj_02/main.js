function blogwidget_imSideBar_pluginAppObj_02() {
    
    x5engine.boot.push(function(){

       if ("online" != 'uipreview') {
            $("#imSideBar_pluginAppObj_02 .post_title").on("click", function (event) {
                
                var link = "";
                if($(location).attr("href").indexOf("blog/") == -1){
                   link += "blog/";
                }
                link += $(this).attr("data-link");
                $(this).attr("href",  link);
                $(this)[0].click();
                event.stopPropagation();
            }); 
        }

    });//close boot
}