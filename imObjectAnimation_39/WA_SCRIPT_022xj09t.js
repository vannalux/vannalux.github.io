(function ( $ ) { 

function loadjscssfile(filename, filetype) {
    
    if (filetype=="js") { 

        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filename);
    }
    else if (filetype=="css") { 

        var fileref=document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }

    if (typeof fileref!="undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
}



var functs = Array();
window.fC75397A3DE627B87EFCE53277BC5E06F = function(callback) { if (!window.WA) { setTimeout(function () { fC75397A3DE627B87EFCE53277BC5E06F(callback) }, 100); } else { for (var i = 0; i < functs.length; i++) { functs[i](); } if ($.isFunction(callback)) { callback(); } } };

function addLoadEvent(func) {
	functs.push(func);
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
       window.onload = func
    } else {
       window.onload = function() {
           if (oldonload) {
                  oldonload()
          }
          func()
       }
   }
} 


function loadResources(thisId) {

   var firstWaDiv = $('.wascript:first');
       
       var firstId = $(firstWaDiv).attr('id');
       
       if(firstId == thisId) {

            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_39/WA.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "wa-animations/modernizr.custom.43133.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "wa-animations/spin.min.js", "js");

            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_39/JQ_Textualizer.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_39/WA.min.css", "css");            
       }
	   
	   loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_39/ani.css", "css");                          
}
	// Global variables




function New_Projectstart() {    

    try
    {   
        if (navigator.userAgent.match(/msie/i))
		{			
            
		    return;            
		}

    var New_Project = new WA();
New_Project.custom = {
}

New_Project.stage = [{            

            // SCENE 1
            'Oid': 'X666bb31_9ba7de7d1e38695067096f9c242cb3ee',
            'Name': 'SCENE_1',
            'Autostart': 'true',
            'BackgroundColor': '#ffffff',
            'SceneEnd': 10400,
            'Position': 'absolute',
            'Perspective': '800px',
            'Top': '0px',
            'Left': '0px',
  'NextSceneTransition': 'instant',                 // instant, slide, fade
                                'NextSceneTransitionDirection': '',   // only active with slide transition => left, right, up, down
                                'NextSceneTransitionSpeed': '0','OnAnimationFinished': 2,
                              'OnAnimationFinishedParam': 'X666bb31_9ba7de7d1e38695067096f9c242cb3ee',





                            'Timelines': [
            {
                'Oid': 'MAIN_TIMELINE',
                'Name': 'Main timeline',
                'Objects': [
                
                    
                    
                {
                    'Oid': 'X666bb33_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '-728px',
                    'Height': '100px',
                    'Width': '728px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/298cb4b0-5294-483a-97d3-dde9876d74d2.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666bb36_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '100px',
                    'Left': '728px',
                    'Height': '100px',
                    'Width': '728px',
                    'ZIndex': '2','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/b4248dac-2351-4fc0-8806-dff3ef51ec90.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666bb39_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '200px',
                    'Left': '-728px',
                    'Height': '100px',
                    'Width': '728px',
                    'ZIndex': '3','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/00171d38-a042-4a18-9de5-fa773e21a29a.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666bb3c_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': '  <div style=\"width:100%; text-align:center; display: table; height: 100%; #position: relative; overflow: hidden;\">      <div style=\"#position: absolute; #top: 50%; display: table-cell; vertical-align: middle;\">        <div style=\"#position: relative; #top: -50%;\">          На сайт на системе управления HostCMS        </div>      </div>    </div>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '104px',
                    'Left': '-735px',
                    'Height': '42px',
                    'Width': '735px',
                    'ZIndex': '4','BackgroundColor': '#FFFFFF','Display': 'block','TextAlign': 'center',

                'TextColor': '#DC143C',
                'Opacity': '1',
                'FontFamily': 'Verdana',
                'FontSize': '30px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666bb3d_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': '  <div style=\"width:100%; text-align:center; display: table; height: 100%; #position: relative; overflow: hidden;\">      <div style=\"#position: absolute; #top: 50%; display: table-cell; vertical-align: middle;\">        <div style=\"#position: relative; #top: -50%;\">          Поддержка. Оперативная и квалифицированная техническая поддержка.        </div>      </div>    </div>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '150px',
                    'Left': '-1305px',
                    'Height': '42px',
                    'Width': '1305px',
                    'ZIndex': '5','BackgroundColor': '#FFFFFF','Display': 'block','TextAlign': 'center',

                'TextColor': '#DC143C',
                'Opacity': '1',
                'FontFamily': 'Verdana',
                'FontSize': '30px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666bb40_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '-242px',
                    'Height': '300px',
                    'Width': '242px',
                    'ZIndex': '6','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/06057a21-918d-4646-8941-14fdea93fdf8.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666bb43_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '-242px',
                    'Height': '300px',
                    'Width': '242px',
                    'ZIndex': '7','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/50834d04-c9b5-49bb-9465-2970b2d30ad8.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666bb46_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '-244px',
                    'Height': '300px',
                    'Width': '244px',
                    'ZIndex': '8','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/a1551602-2857-4e54-9d9e-d848990d161f.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666bb49_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '300px',
                    'Width': '72px',
                    'ZIndex': '9','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/571674d1-42d9-45ab-b723-2ccae2466691.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',
'Transform':[{
'RotateY': '90deg'
}],

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'false',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666bb4e_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '72px',
                    'Height': '300px',
                    'Width': '72px',
                    'ZIndex': '10','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/28cc69f0-9d8a-46fe-bc13-1d209f7d9c53.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',
'Transform':[{
'RotateY': '90deg'
}],

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'false',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666bb53_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '144px',
                    'Height': '300px',
                    'Width': '72px',
                    'ZIndex': '11','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/7f9764cd-14d7-4bc8-b8b8-7965bf8a0838.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',
'Transform':[{
'RotateY': '90deg'
}],

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'false',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666bb58_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '216px',
                    'Height': '300px',
                    'Width': '72px',
                    'ZIndex': '12','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/a11279c2-77ec-4f35-93ec-2995cce22523.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',
'Transform':[{
'RotateY': '90deg'
}],

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'false',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666bb5d_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '288px',
                    'Height': '300px',
                    'Width': '72px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/96e5a76b-1aa6-4303-9944-02aafd478145.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',
'Transform':[{
'RotateY': '90deg'
}],

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'false',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666bb62_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '360px',
                    'Height': '300px',
                    'Width': '72px',
                    'ZIndex': '14','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/98c20dc4-c813-4cad-8a50-f3e8cbd43927.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',
'Transform':[{
'RotateY': '90deg'
}],

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'false',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666bb67_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '432px',
                    'Height': '300px',
                    'Width': '72px',
                    'ZIndex': '15','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/27f61e23-3d13-4fb4-9a7a-fdd1f69b4ea7.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',
'Transform':[{
'RotateY': '90deg'
}],

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'false',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666bb6c_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '504px',
                    'Height': '300px',
                    'Width': '72px',
                    'ZIndex': '16','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/67020b1b-f1c4-40e0-b767-c39124262335.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',
'Transform':[{
'RotateY': '90deg'
}],

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'false',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666bb71_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '576px',
                    'Height': '300px',
                    'Width': '72px',
                    'ZIndex': '17','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/9ba3532a-3c8e-4cca-8b98-687679720f6c.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',
'Transform':[{
'RotateY': '90deg'
}],

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'false',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666bb76_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '648px',
                    'Height': '300px',
                    'Width': '80px',
                    'ZIndex': '18','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/25915dd1-80d1-41a7-bc04-e621a0bcb559.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',
'Transform':[{
'RotateY': '90deg'
}],

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'false',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    {
                            'ObjectId':'X666bb49_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateY',
                            'Duration':'0.3s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0deg'
                        }]
},
{
                            'ObjectId':'X666bb4e_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateY',
                            'Duration':'0.3s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0deg'
                        }]
},
{
                            'ObjectId':'X666bb53_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateY',
                            'Duration':'0.3s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0deg'
                        }]
},
{
                            'ObjectId':'X666bb58_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateY',
                            'Duration':'0.3s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0deg'
                        }]
},
{
                            'ObjectId':'X666bb5d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateY',
                            'Duration':'0.3s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0deg'
                        }]
},
{
                            'ObjectId':'X666bb62_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateY',
                            'Duration':'0.3s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0deg'
                        }]
},
{
                            'ObjectId':'X666bb67_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateY',
                            'Duration':'0.3s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0deg'
                        }]
},
{
                            'ObjectId':'X666bb6c_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateY',
                            'Duration':'0.3s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0deg'
                        }]
},
{
                            'ObjectId':'X666bb71_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateY',
                            'Duration':'0.3s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0deg'
                        }]
},
{
                            'ObjectId':'X666bb76_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateY',
                            'Duration':'0.3s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0deg'
                        }]
},


			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X666bb33_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0px'
                        }]
},
{
                            'ObjectId':'X666bb36_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0px'
                        }]
},
{
                            'ObjectId':'X666bb39_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0px'
                        }]
},
{
                            'ObjectId':'X666bb3c_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':400,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '-3px'
                        }]
},
{
                            'ObjectId':'X666bb3d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':500,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '-289px'
                        }]
},
{
                            'ObjectId':'X666bb40_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':3600,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0px'
                        }]
},
{
                            'ObjectId':'X666bb43_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':3600,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.5s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '242px'
                        }]
},
{
                            'ObjectId':'X666bb46_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':3600,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.6s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '484px'
                        }]
},


			    ],
                'Changes': [
			
                    {
                            'ObjectId':'X666bb49_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': 'true'
                        }]
},
{
                            'ObjectId':'X666bb4e_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': 'true'
                        }]
},
{
                            'ObjectId':'X666bb53_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': 'true'
                        }]
},
{
                            'ObjectId':'X666bb58_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': 'true'
                        }]
},
{
                            'ObjectId':'X666bb5d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': 'true'
                        }]
},
{
                            'ObjectId':'X666bb62_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': 'true'
                        }]
},
{
                            'ObjectId':'X666bb67_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': 'true'
                        }]
},
{
                            'ObjectId':'X666bb6c_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': 'true'
                        }]
},
{
                            'ObjectId':'X666bb71_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': 'true'
                        }]
},
{
                            'ObjectId':'X666bb76_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': 'true'
                        }]
},


			    ],
                'Events': [
			
                    

			    ]
            }]
}];

            New_Project.init();
            New_Project.stageHeight = 300;
            New_Project.stageWidth  = 728;
            New_Project.t  = '463006411271517642672191389446519804999';
            New_Project.stageInitialTransition = 'instant';
            New_Project.stageInitialTransitionDirection = 'left';
            New_Project.stageInitialTransitionSpeed = 1000;

            New_Project.responsiveStage = false;
            New_Project.responsiveStageKeepRatio = false;
            New_Project.scaleX = 1;
            New_Project.scaleY = 1;
            New_Project.scale = 1;

            New_Project.showBrowserCompatibilityCheck = false;
                New_Project.loaderType = 1;
                New_Project.loaderBackgroundColor = '#000';
                New_Project.loaderForegroundColor = '#fff';
            New_Project.stageInitialScene = 'X666bb31_9ba7de7d1e38695067096f9c242cb3ee';
            New_Project.debug = false;
            New_Project.preloadImages = true;
New_Project.imagesToPreload = [
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/298cb4b0-5294-483a-97d3-dde9876d74d2.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/b4248dac-2351-4fc0-8806-dff3ef51ec90.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/00171d38-a042-4a18-9de5-fa773e21a29a.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/06057a21-918d-4646-8941-14fdea93fdf8.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/50834d04-c9b5-49bb-9465-2970b2d30ad8.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/a1551602-2857-4e54-9d9e-d848990d161f.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/571674d1-42d9-45ab-b723-2ccae2466691.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/28cc69f0-9d8a-46fe-bc13-1d209f7d9c53.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/7f9764cd-14d7-4bc8-b8b8-7965bf8a0838.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/a11279c2-77ec-4f35-93ec-2995cce22523.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/96e5a76b-1aa6-4303-9944-02aafd478145.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/98c20dc4-c813-4cad-8a50-f3e8cbd43927.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/27f61e23-3d13-4fb4-9a7a-fdd1f69b4ea7.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/67020b1b-f1c4-40e0-b767-c39124262335.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/9ba3532a-3c8e-4cca-8b98-687679720f6c.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/25915dd1-80d1-41a7-bc04-e621a0bcb559.jpg'
];New_Project.createWorkspace('imObjectAnimation_39_stage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('imObjectAnimation_39_stage');
addLoadEvent(New_Projectstart);


 })( wajq );