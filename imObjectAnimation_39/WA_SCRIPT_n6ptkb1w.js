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
	currentTimeLine78426 = 1;




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
		if (New_Project.sceneTimer >= 15000)
		{
			New_Project.switchScenes('X666c50a_9ba7de7d1e38695067096f9c242cb3ee', 'instant', '', 0);
			currentTimeLine78426 = 1;
			return;
		}
		if (currentTimeLine78426 == 1)
		{
			New_Project.switchTimelines('X666c516_9ba7de7d1e38695067096f9c242cb3ee');
			currentTimeLine78426 = 2;
		}
		else if (currentTimeLine78426 == 2)
		{
			New_Project.switchTimelines('X666c517_9ba7de7d1e38695067096f9c242cb3ee');
			currentTimeLine78426 = 3;
		}
		else if (currentTimeLine78426 == 3)
		{
			New_Project.switchScenes('X666c50a_9ba7de7d1e38695067096f9c242cb3ee', 'instant', '', 0);
			currentTimeLine78426 = 1;
		}
	}
,

GotoTimeline_1 : function() {
		New_Project.switchTimelines('MAIN_TIMELINE');
		currentTimeLine78426 = 1;
	}
,

GotoTimeline_2 : function() {
		New_Project.switchTimelines('X666c516_9ba7de7d1e38695067096f9c242cb3ee');
		currentTimeLine78426 = 2;
	}
,

GotoTimeline_3 : function() {
		New_Project.switchTimelines('X666c517_9ba7de7d1e38695067096f9c242cb3ee');
		currentTimeLine78426 = 3;
	}}

New_Project.stage = [{            

            // SCENE 1
            'Oid': 'X666c50a_9ba7de7d1e38695067096f9c242cb3ee',
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
                    'Oid': 'X666c50b_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '-500px',
                    'Left': '-672px',
                    'Height': '1250px',
                    'Width': '1680px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/akrilovij-vkladysh213.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',
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
                    'Oid': 'X666c50c_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '260px',
                    'Left': '147px',
                    'Height': '10px',
                    'Width': '10px',
                    'ZIndex': '102','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/spot_off.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                    'Oid': 'X666c50d_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '260px',
                    'Left': '147px',
                    'Height': '10px',
                    'Width': '10px',
                    'ZIndex': '103','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/spot_on.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                    'Oid': 'X666c50e_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '-500px',
                    'Left': '-672px',
                    'Height': '1250px',
                    'Width': '1680px',
                    'ZIndex': '4','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/akrilovyj-vkladysh-ili-zhidkij-akril.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',
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
                    'Oid': 'X666c50f_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '260px',
                    'Left': '161px',
                    'Height': '10px',
                    'Width': '10px',
                    'ZIndex': '105','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/spot_off.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                    'Oid': 'X666c510_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '260px',
                    'Left': '161px',
                    'Height': '10px',
                    'Width': '10px',
                    'ZIndex': '106','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/spot_on.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                    'Oid': 'X666c511_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '-500px',
                    'Left': '-672px',
                    'Height': '1250px',
                    'Width': '1680px',
                    'ZIndex': '7','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/bb2.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',
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
                    'Oid': 'X666c512_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '260px',
                    'Left': '175px',
                    'Height': '10px',
                    'Width': '10px',
                    'ZIndex': '108','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/spot_off.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                    'Oid': 'X666c513_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '260px',
                    'Left': '175px',
                    'Height': '10px',
                    'Width': '10px',
                    'ZIndex': '109','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/spot_on.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'false',

'OnMouseClick' : 1,
'OnMouseClickParam' : 'GotoTimeline_3',



'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666c514_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': '  <div style=\"width:100%; text-align:center; display: table; height: 100%; #position: relative; overflow: hidden;\">      <div style=\"#position: absolute; #top: 50%; display: table-cell; vertical-align: middle;\">        <div style=\"#position: relative; #top: -50%;\">          Text        </div>      </div>    </div>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '-40px',
                    'Left': '10px',
                    'Height': '40px',
                    'Width': '72px',
                    'ZIndex': '1010','BackgroundColor': '#000000','Display': 'block','TextAlign': 'center',
'BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',

                'TextColor': '#ffffff',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '24px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    {
                            'ObjectId':'X666c50b_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c50e_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c511_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c50e_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c511_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c50b_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c50e_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c511_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c514_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-40px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},


			    ],
                'Changes': [
			
                    {
                            'ObjectId':'X666c50d_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c510_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c513_9ba7de7d1e38695067096f9c242cb3ee',
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
                    }

			    ]
            },
            {
                'Oid': 'X666c516_9ba7de7d1e38695067096f9c242cb3ee',
                'Name': 'Timeline 2',
                'Transforms': [
			
                    {
                            'ObjectId':'X666c50b_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c50e_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c511_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c50b_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c511_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c50b_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c50e_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c511_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c514_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-40px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},


			    ],
                'Changes': [
			
                    {
                            'ObjectId':'X666c50d_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c510_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c513_9ba7de7d1e38695067096f9c242cb3ee',
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
                    }

			    ]
            },
            {
                'Oid': 'X666c517_9ba7de7d1e38695067096f9c242cb3ee',
                'Name': 'Timeline 3',
                'Transforms': [
			
                    {
                            'ObjectId':'X666c50b_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c50e_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c511_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c50b_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c50e_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c50b_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c50e_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c511_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c514_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '210px'
                        }]
},
{
                            'ObjectId':'X666c514_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0.7'
                        }]
},
{
                            'ObjectId':'X666c514_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':500,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '200px'
                        }]
},


			    ],
                'Changes': [
			
                    {
                            'ObjectId':'X666c50d_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c510_9ba7de7d1e38695067096f9c242cb3ee',
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
                            'ObjectId':'X666c513_9ba7de7d1e38695067096f9c242cb3ee',
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
            New_Project.stageInitialScene = 'X666c50a_9ba7de7d1e38695067096f9c242cb3ee';
            New_Project.debug = false;
            New_Project.preloadImages = true;
New_Project.imagesToPreload = [
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/akrilovij-vkladysh213.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/spot_off.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/spot_on.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/akrilovyj-vkladysh-ili-zhidkij-akril.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/spot_off.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/spot_on.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/bb2.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/spot_off.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/spot_on.png'
];New_Project.createWorkspace('imObjectAnimation_39_stage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('imObjectAnimation_39_stage');
addLoadEvent(New_Projectstart);


 })( wajq );