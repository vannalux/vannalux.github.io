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
	currentTimeLine22516 = 1;




function New_Projectstart() {    

    try
    {   
        if (navigator.userAgent.match(/msie/i))
		{			
            
		    return;            
		}

    var New_Project = new WA();
New_Project.custom = {
GotoNextTimeline : function() {
		if (New_Project.sceneTimer >= 20000)
		{
			New_Project.switchScenes('X6662559_79b28848157db078ce60ea26997260d2', 'instant', '', 0);
			currentTimeLine22516 = 1;
			return;
		}
		if (currentTimeLine22516 == 1)
		{
			New_Project.switchTimelines('X6662567_79b28848157db078ce60ea26997260d2');
			currentTimeLine22516 = 2;
		}
		else if (currentTimeLine22516 == 2)
		{
			New_Project.switchTimelines('X6662568_79b28848157db078ce60ea26997260d2');
			currentTimeLine22516 = 3;
		}
		else if (currentTimeLine22516 == 3)
		{
			New_Project.switchTimelines('X6662569_79b28848157db078ce60ea26997260d2');
			currentTimeLine22516 = 4;
		}
		else if (currentTimeLine22516 == 4)
		{
			New_Project.switchScenes('X6662559_79b28848157db078ce60ea26997260d2', 'instant', '', 0);
			currentTimeLine22516 = 1;
		}
	}
,

GotoTimeline_1 : function() {
		New_Project.switchTimelines('MAIN_TIMELINE');
		currentTimeLine22516 = 1;
	}
,

GotoTimeline_2 : function() {
		New_Project.switchTimelines('X6662567_79b28848157db078ce60ea26997260d2');
		currentTimeLine22516 = 2;
	}
,

GotoTimeline_3 : function() {
		New_Project.switchTimelines('X6662568_79b28848157db078ce60ea26997260d2');
		currentTimeLine22516 = 3;
	}
,

GotoTimeline_4 : function() {
		New_Project.switchTimelines('X6662569_79b28848157db078ce60ea26997260d2');
		currentTimeLine22516 = 4;
	}}

New_Project.stage = [{            

            // SCENE 1
            'Oid': 'X6662559_79b28848157db078ce60ea26997260d2',
            'Name': 'SCENE_1',
            'Autostart': 'true',
            'BackgroundColor': '#ffffff',
            'SceneEnd': 1100,
            'Position': 'absolute',
            'Perspective': '800px',
            'Top': '0px',
            'Left': '0px',






                            'Timelines': [
            {
                'Oid': 'MAIN_TIMELINE',
                'Name': 'Main timeline',
                'Objects': [
                
                    
                    
                {
                    'Oid': 'X666255a_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '-500px',
                    'Left': '-672px',
                    'Height': '1250px',
                    'Width': '1680px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_37/10rt.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',
'Transform':[{
'RotateZ': '-90deg'
}],

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666255b_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '260px',
                    'Left': '140px',
                    'Height': '10px',
                    'Width': '10px',
                    'ZIndex': '102','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_37/spot_off.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 1,
'OnMouseClickParam' : 'GotoTimeline_1',



'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666255c_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '260px',
                    'Left': '140px',
                    'Height': '10px',
                    'Width': '10px',
                    'ZIndex': '103','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_37/spot_on.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'false',

'OnMouseClick' : 1,
'OnMouseClickParam' : 'GotoTimeline_1',



'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666255d_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '-500px',
                    'Left': '-672px',
                    'Height': '1250px',
                    'Width': '1680px',
                    'ZIndex': '4','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_37/11.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',
'Transform':[{
'RotateZ': '-90deg'
}],

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666255e_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '260px',
                    'Left': '154px',
                    'Height': '10px',
                    'Width': '10px',
                    'ZIndex': '105','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_37/spot_off.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 1,
'OnMouseClickParam' : 'GotoTimeline_2',



'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666255f_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '260px',
                    'Left': '154px',
                    'Height': '10px',
                    'Width': '10px',
                    'ZIndex': '106','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_37/spot_on.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'false',

'OnMouseClick' : 1,
'OnMouseClickParam' : 'GotoTimeline_2',



'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X6662560_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '-500px',
                    'Left': '-672px',
                    'Height': '1250px',
                    'Width': '1680px',
                    'ZIndex': '7','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_37/akrilovij-vkladysh213.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',
'Transform':[{
'RotateZ': '-90deg'
}],

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X6662561_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '260px',
                    'Left': '168px',
                    'Height': '10px',
                    'Width': '10px',
                    'ZIndex': '108','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_37/spot_off.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 1,
'OnMouseClickParam' : 'GotoTimeline_3',



'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X6662562_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '260px',
                    'Left': '168px',
                    'Height': '10px',
                    'Width': '10px',
                    'ZIndex': '109','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_37/spot_on.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'false',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X6662563_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '-500px',
                    'Left': '-672px',
                    'Height': '1250px',
                    'Width': '1680px',
                    'ZIndex': '10','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_37/akrilovyj-vkladysh-ili-zhidkij-akril.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',
'Transform':[{
'RotateZ': '-90deg'
}],

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X6662564_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '260px',
                    'Left': '182px',
                    'Height': '10px',
                    'Width': '10px',
                    'ZIndex': '111','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_37/spot_off.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X6662565_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '260px',
                    'Left': '182px',
                    'Height': '10px',
                    'Width': '10px',
                    'ZIndex': '112','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_37/spot_on.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X666255a_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0deg'
                        }]
},
{
                            'ObjectId':'X666255d_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '90deg'
                        }]
},
{
                            'ObjectId':'X6662560_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '90deg'
                        }]
},
{
                            'ObjectId':'X6662563_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '90deg'
                        }]
},
{
                            'ObjectId':'X666255d_79b28848157db078ce60ea26997260d2',
                            'StartTime':1000,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-90deg'
                        }]
},
{
                            'ObjectId':'X6662560_79b28848157db078ce60ea26997260d2',
                            'StartTime':1000,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-90deg'
                        }]
},
{
                            'ObjectId':'X6662563_79b28848157db078ce60ea26997260d2',
                            'StartTime':1000,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-90deg'
                        }]
},


			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X666255a_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '336px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '250px'
                        }]
},
{
                            'ObjectId':'X666255d_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-672px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-500px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1680px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1250px'
                        }]
},
{
                            'ObjectId':'X6662560_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-672px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-500px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1680px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1250px'
                        }]
},
{
                            'ObjectId':'X6662563_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-672px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-500px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1680px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1250px'
                        }]
},


			    ],
                'Changes': [
			
                    {
                            'ObjectId':'X666255c_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': 'true'
                        }]
},
{
                            'ObjectId':'X666255f_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': 'false'
                        }]
},
{
                            'ObjectId':'X6662562_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': 'false'
                        }]
},
{
                            'ObjectId':'X6662565_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': 'false'
                        }]
},


			    ],
                'Events': [
			
                    
                    {
                            'FunctionId':'GotoNextTimeline',
                            'StartTime':5000
                    },
                    {
                            'FunctionId':'GotoNextTimeline',
                            'StartTime':10000
                    },
                    {
                            'FunctionId':'GotoNextTimeline',
                            'StartTime':15000
                    },
                    {
                            'FunctionId':'GotoNextTimeline',
                            'StartTime':20000
                    }

			    ]
            },
            {
                'Oid': 'X6662567_79b28848157db078ce60ea26997260d2',
                'Name': 'Timeline 2',
                'Transforms': [
			
                    {
                            'ObjectId':'X666255a_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '90deg'
                        }]
},
{
                            'ObjectId':'X666255d_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0deg'
                        }]
},
{
                            'ObjectId':'X6662560_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '90deg'
                        }]
},
{
                            'ObjectId':'X6662563_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '90deg'
                        }]
},
{
                            'ObjectId':'X666255a_79b28848157db078ce60ea26997260d2',
                            'StartTime':1000,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-90deg'
                        }]
},
{
                            'ObjectId':'X6662560_79b28848157db078ce60ea26997260d2',
                            'StartTime':1000,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-90deg'
                        }]
},
{
                            'ObjectId':'X6662563_79b28848157db078ce60ea26997260d2',
                            'StartTime':1000,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-90deg'
                        }]
},


			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X666255a_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-672px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-500px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1680px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1250px'
                        }]
},
{
                            'ObjectId':'X666255d_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '336px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '250px'
                        }]
},
{
                            'ObjectId':'X6662560_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-672px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-500px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1680px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1250px'
                        }]
},
{
                            'ObjectId':'X6662563_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-672px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-500px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1680px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1250px'
                        }]
},


			    ],
                'Changes': [
			
                    {
                            'ObjectId':'X666255c_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': 'false'
                        }]
},
{
                            'ObjectId':'X666255f_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': 'true'
                        }]
},
{
                            'ObjectId':'X6662562_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': 'false'
                        }]
},
{
                            'ObjectId':'X6662565_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': 'false'
                        }]
},


			    ],
                'Events': [
			
                    
                    {
                            'FunctionId':'GotoNextTimeline',
                            'StartTime':5000
                    },
                    {
                            'FunctionId':'GotoNextTimeline',
                            'StartTime':10000
                    },
                    {
                            'FunctionId':'GotoNextTimeline',
                            'StartTime':15000
                    },
                    {
                            'FunctionId':'GotoNextTimeline',
                            'StartTime':20000
                    }

			    ]
            },
            {
                'Oid': 'X6662568_79b28848157db078ce60ea26997260d2',
                'Name': 'Timeline 3',
                'Transforms': [
			
                    {
                            'ObjectId':'X666255a_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '90deg'
                        }]
},
{
                            'ObjectId':'X666255d_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '90deg'
                        }]
},
{
                            'ObjectId':'X6662560_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0deg'
                        }]
},
{
                            'ObjectId':'X6662563_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '90deg'
                        }]
},
{
                            'ObjectId':'X666255a_79b28848157db078ce60ea26997260d2',
                            'StartTime':1000,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-90deg'
                        }]
},
{
                            'ObjectId':'X666255d_79b28848157db078ce60ea26997260d2',
                            'StartTime':1000,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-90deg'
                        }]
},
{
                            'ObjectId':'X6662563_79b28848157db078ce60ea26997260d2',
                            'StartTime':1000,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-90deg'
                        }]
},


			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X666255a_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-672px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-500px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1680px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1250px'
                        }]
},
{
                            'ObjectId':'X666255d_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-672px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-500px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1680px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1250px'
                        }]
},
{
                            'ObjectId':'X6662560_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '336px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '250px'
                        }]
},
{
                            'ObjectId':'X6662563_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-672px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-500px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1680px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1250px'
                        }]
},


			    ],
                'Changes': [
			
                    {
                            'ObjectId':'X666255c_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': 'false'
                        }]
},
{
                            'ObjectId':'X666255f_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': 'false'
                        }]
},
{
                            'ObjectId':'X6662562_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': 'true'
                        }]
},
{
                            'ObjectId':'X6662565_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': 'false'
                        }]
},


			    ],
                'Events': [
			
                    
                    {
                            'FunctionId':'GotoNextTimeline',
                            'StartTime':5000
                    },
                    {
                            'FunctionId':'GotoNextTimeline',
                            'StartTime':10000
                    },
                    {
                            'FunctionId':'GotoNextTimeline',
                            'StartTime':15000
                    },
                    {
                            'FunctionId':'GotoNextTimeline',
                            'StartTime':20000
                    }

			    ]
            },
            {
                'Oid': 'X6662569_79b28848157db078ce60ea26997260d2',
                'Name': 'Timeline 4',
                'Transforms': [
			
                    {
                            'ObjectId':'X666255a_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '90deg'
                        }]
},
{
                            'ObjectId':'X666255d_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '90deg'
                        }]
},
{
                            'ObjectId':'X6662560_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '90deg'
                        }]
},
{
                            'ObjectId':'X6662563_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0deg'
                        }]
},
{
                            'ObjectId':'X666255a_79b28848157db078ce60ea26997260d2',
                            'StartTime':1000,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-90deg'
                        }]
},
{
                            'ObjectId':'X666255d_79b28848157db078ce60ea26997260d2',
                            'StartTime':1000,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-90deg'
                        }]
},
{
                            'ObjectId':'X6662560_79b28848157db078ce60ea26997260d2',
                            'StartTime':1000,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-90deg'
                        }]
},


			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X666255a_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-672px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-500px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1680px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1250px'
                        }]
},
{
                            'ObjectId':'X666255d_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-672px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-500px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1680px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1250px'
                        }]
},
{
                            'ObjectId':'X6662560_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-672px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-500px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1680px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1250px'
                        }]
},
{
                            'ObjectId':'X6662563_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '336px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '250px'
                        }]
},


			    ],
                'Changes': [
			
                    {
                            'ObjectId':'X666255c_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': 'false'
                        }]
},
{
                            'ObjectId':'X666255f_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': 'false'
                        }]
},
{
                            'ObjectId':'X6662562_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': 'false'
                        }]
},
{
                            'ObjectId':'X6662565_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Visible',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': 'true'
                        }]
},


			    ],
                'Events': [
			
                    
                    {
                            'FunctionId':'GotoNextTimeline',
                            'StartTime':5000
                    },
                    {
                            'FunctionId':'GotoNextTimeline',
                            'StartTime':10000
                    },
                    {
                            'FunctionId':'GotoNextTimeline',
                            'StartTime':15000
                    },
                    {
                            'FunctionId':'GotoNextTimeline',
                            'StartTime':20000
                    }

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
            New_Project.stageInitialScene = 'X6662559_79b28848157db078ce60ea26997260d2';
            New_Project.debug = false;
            New_Project.preloadImages = true;
New_Project.imagesToPreload = [
'' + x5engine.settings.currentPath + 'imObjectAnimation_37/10rt.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_37/spot_off.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_37/spot_on.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_37/11.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_37/spot_off.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_37/spot_on.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_37/akrilovij-vkladysh213.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_37/spot_off.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_37/spot_on.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_37/akrilovyj-vkladysh-ili-zhidkij-akril.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_37/spot_off.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_37/spot_on.png'
];New_Project.createWorkspace('imObjectAnimation_37_stage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('imObjectAnimation_37_stage');
addLoadEvent(New_Projectstart);


 })( wajq );