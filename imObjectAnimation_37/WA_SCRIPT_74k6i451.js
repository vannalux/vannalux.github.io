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
window.fFD11065C249CFF970DDA5D175FEE05D1 = function(callback) { if (!window.WA) { setTimeout(function () { fFD11065C249CFF970DDA5D175FEE05D1(callback) }, 100); } else { for (var i = 0; i < functs.length; i++) { functs[i](); } if ($.isFunction(callback)) { callback(); } } };

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

            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_37/WA.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "wa-animations/modernizr.custom.43133.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "wa-animations/spin.min.js", "js");

            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_37/JQ_Textualizer.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_37/WA.min.css", "css");            
       }
	   
	   loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_37/ani.css", "css");                          
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
            'Oid': 'X6662860_79b28848157db078ce60ea26997260d2',
            'Name': 'SCENE_1',
            'Autostart': 'true',
            'BackgroundColor': '#ffffff',
            'SceneEnd': 2000,
            'Position': 'absolute',
            'Perspective': '800px',
            'Top': '0px',
            'Left': '0px',
  'NextSceneTransition': 'instant',                 // instant, slide, fade
                                'NextSceneTransitionDirection': '',   // only active with slide transition => left, right, up, down
                                'NextSceneTransitionSpeed': '0','OnAnimationFinished': 2,
                              'OnAnimationFinishedParam': 'X6662868_79b28848157db078ce60ea26997260d2',





                            'Timelines': [
            {
                'Oid': 'MAIN_TIMELINE',
                'Name': 'Main timeline',
                'Objects': [
                
                    
                    
                {
                    'Oid': 'X6662862_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '252px',
                    'Width': '336px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_37/cvf2.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X6662863_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '280px',
                    'Width': '336px',
                    'ZIndex': '2','BackgroundColor': '#000000','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.9',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X6662865_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': '  <div style=\"width:100%; text-align:center; display: table; height: 100%; #position: relative; overflow: hidden;\">      <div style=\"#position: absolute; #top: 50%; display: table-cell; vertical-align: middle;\">        <div style=\"#position: relative; #top: -50%;\">          Text        </div>      </div>    </div>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '115px',
                    'Left': '-81px',
                    'Height': '51px',
                    'Width': '81px',
                    'ZIndex': '3','Display': 'block','TextAlign': 'center',

                'TextColor': '#ffffff',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '20px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X6662863_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0.3'
                        }]
},
{
                            'ObjectId':'X6662865_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X6662865_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.6s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '158px'
                        }]
},
{
                            'ObjectId':'X6662865_79b28848157db078ce60ea26997260d2',
                            'StartTime':600,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '128px'
                        }]
},
{
                            'ObjectId':'X6662863_79b28848157db078ce60ea26997260d2',
                            'StartTime':1300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0.9'
                        }]
},
{
                            'ObjectId':'X6662865_79b28848157db078ce60ea26997260d2',
                            'StartTime':1300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            }]
},

{            

            // SCENE 2
            'Oid': 'X6662868_79b28848157db078ce60ea26997260d2',
            'Name': 'SCENE_2',
            'Autostart': 'true',
            'BackgroundColor': '#ffffff',
            'SceneEnd': 2000,
            'Position': 'absolute',
            'Perspective': '800px',
            'Top': '0px',
            'Left': '0px',
  'NextSceneTransition': 'instant',                 // instant, slide, fade
                                'NextSceneTransitionDirection': '',   // only active with slide transition => left, right, up, down
                                'NextSceneTransitionSpeed': '0','OnAnimationFinished': 2,
                              'OnAnimationFinishedParam': 'X6662870_79b28848157db078ce60ea26997260d2',





                            'Timelines': [
            {
                'Oid': 'MAIN_TIMELINE',
                'Name': 'Main timeline',
                'Objects': [
                
                    
                    
                {
                    'Oid': 'X666286a_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '226px',
                    'Width': '336px',
                    'ZIndex': '4','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_37/cvf3.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666286b_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '280px',
                    'Width': '336px',
                    'ZIndex': '5','BackgroundColor': '#000000','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.9',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666286d_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': '  <div style=\"width:100%; text-align:center; display: table; height: 100%; #position: relative; overflow: hidden;\">      <div style=\"#position: absolute; #top: 50%; display: table-cell; vertical-align: middle;\">        <div style=\"#position: relative; #top: -50%;\">          Text        </div>      </div>    </div>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '115px',
                    'Left': '-81px',
                    'Height': '51px',
                    'Width': '81px',
                    'ZIndex': '6','Display': 'block','TextAlign': 'center',

                'TextColor': '#ffffff',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '20px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X666286b_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0.3'
                        }]
},
{
                            'ObjectId':'X666286d_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X666286d_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.6s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '158px'
                        }]
},
{
                            'ObjectId':'X666286d_79b28848157db078ce60ea26997260d2',
                            'StartTime':600,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '128px'
                        }]
},
{
                            'ObjectId':'X666286b_79b28848157db078ce60ea26997260d2',
                            'StartTime':1300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0.9'
                        }]
},
{
                            'ObjectId':'X666286d_79b28848157db078ce60ea26997260d2',
                            'StartTime':1300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            }]
},

{            

            // SCENE 3
            'Oid': 'X6662870_79b28848157db078ce60ea26997260d2',
            'Name': 'SCENE_3',
            'Autostart': 'true',
            'BackgroundColor': '#ffffff',
            'SceneEnd': 2000,
            'Position': 'absolute',
            'Perspective': '800px',
            'Top': '0px',
            'Left': '0px',
  'NextSceneTransition': 'instant',                 // instant, slide, fade
                                'NextSceneTransitionDirection': '',   // only active with slide transition => left, right, up, down
                                'NextSceneTransitionSpeed': '0','OnAnimationFinished': 2,
                              'OnAnimationFinishedParam': 'X6662870_79b28848157db078ce60ea26997260d2',





                            'Timelines': [
            {
                'Oid': 'MAIN_TIMELINE',
                'Name': 'Main timeline',
                'Objects': [
                
                    
                    
                {
                    'Oid': 'X6662872_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '252px',
                    'Width': '336px',
                    'ZIndex': '7','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_37/cvf4.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X6662873_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '280px',
                    'Width': '336px',
                    'ZIndex': '8','BackgroundColor': '#000000','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.9',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X6662875_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': '  <div style=\"width:100%; text-align:center; display: table; height: 100%; #position: relative; overflow: hidden;\">      <div style=\"#position: absolute; #top: 50%; display: table-cell; vertical-align: middle;\">        <div style=\"#position: relative; #top: -50%;\">          Text        </div>      </div>    </div>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '115px',
                    'Left': '-81px',
                    'Height': '51px',
                    'Width': '81px',
                    'ZIndex': '9','Display': 'block','TextAlign': 'center',

                'TextColor': '#ffffff',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '20px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X6662873_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0.3'
                        }]
},
{
                            'ObjectId':'X6662875_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X6662875_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.6s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '158px'
                        }]
},
{
                            'ObjectId':'X6662875_79b28848157db078ce60ea26997260d2',
                            'StartTime':600,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '128px'
                        }]
},
{
                            'ObjectId':'X6662873_79b28848157db078ce60ea26997260d2',
                            'StartTime':1300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0.9'
                        }]
},
{
                            'ObjectId':'X6662875_79b28848157db078ce60ea26997260d2',
                            'StartTime':1300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            }]
}];

            New_Project.init();
            New_Project.stageHeight = 280;
            New_Project.stageWidth  = 336;
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
            New_Project.stageInitialScene = 'X6662860_79b28848157db078ce60ea26997260d2';
            New_Project.debug = false;
            New_Project.preloadImages = true;
New_Project.imagesToPreload = [
'' + x5engine.settings.currentPath + 'imObjectAnimation_37/cvf2.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_37/cvf3.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_37/cvf4.jpg'
];New_Project.createWorkspace('imObjectAnimation_37_stage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('imObjectAnimation_37_stage');
addLoadEvent(New_Projectstart);


 })( wajq );