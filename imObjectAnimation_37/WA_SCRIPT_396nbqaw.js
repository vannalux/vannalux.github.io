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
FUNC_SHAKE_X6661cf6_79b28848157db078ce60ea26997260d2_On : function() {

                    $('#X6661cf6_79b28848157db078ce60ea26997260d2').addClass('class_ani_shake_X6661cf6_79b28848157db078ce60ea26997260d2');
                    setTimeout(function(){ $('#X6661cf6_79b28848157db078ce60ea26997260d2').removeClass('class_ani_shake_X6661cf6_79b28848157db078ce60ea26997260d2'); }, 500);
                }
,
FUNC_SHAKE_X6661cf6_79b28848157db078ce60ea26997260d2_Off : function() {
$('#X6661cf6_79b28848157db078ce60ea26997260d2').removeClass('class_ani_shake_X6661cf6_79b28848157db078ce60ea26997260d2');}}

New_Project.stage = [{            

            // SCENE 1
            'Oid': 'X6661cf1_79b28848157db078ce60ea26997260d2',
            'Name': 'SCENE_1',
            'Autostart': 'false',
            'BackgroundColor': '#D49D11',
            'SceneEnd': 4800,
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
                    'Oid': 'X6661cf6_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': 'Click'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '177px',
                    'Left': '40px',
                    'Height': '49px',
                    'Width': '121px',
                    'ZIndex': '1','Background': [{
                                    'BackgroundColor': '',
                                    'BackgroundGradientType':'linear',
                                    'BackgroundGradientStart' : 'left top',
                                    'BackgroundGradientEnd' : 'right top',
                                    'BackgroundGradientColor1' : '#CFCFCF',
                                    'BackgroundGradientColor2' : '#F2F2F2',
                                    'BackgroundGradientAngle': '90deg'
                                }],'Display': 'block','TextAlign': 'Center',
                
                        'BorderLeftColor': '#B5B5B5',
                        'BorderLeftWidth': '1px',
                        'BorderLeftStyle': 'solid', 
                        'BorderRightColor': '#B5B5B5',
                        'BorderRightWidth': '1px',
                        'BorderRightStyle': 'solid', 
                        'BorderTopColor': '#B5B5B5',
                        'BorderTopWidth': '1px',
                        'BorderTopStyle': 'solid', 
                        'BorderBottomColor': '#B5B5B5',
                        'BorderBottomWidth': '1px',
                        'BorderBottomStyle': 'solid','BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',
'Transform':[{
'RotateX': '11deg',
'RotateY': '25deg'
}],

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '15px',
                'LineHeight': '1.5em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : '',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#F2F2F2',
                             'BackgroundGradientType':'linear',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#FFFFFF',
                             'BackgroundGradientColor2' : '#FFFFFF',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'RotateX',
                            'EndValue': '0deg'
                         },
                         {
                            'Property': 'RotateY',
                            'EndValue': '0deg'
                         }],
                    
                    'Hover': [
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#F2F2F2',
                             'BackgroundGradientType':'linear',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#F2F2F2',
                             'BackgroundGradientColor2' : '#CFCFCF',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'RotateX',
                            'EndValue': '0deg'
                         },
                         {
                            'Property': 'RotateY',
                            'EndValue': '0deg'
                         }],},
                {
                    'Oid': 'X6661e40_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:#F7DA71;stroke:#000000;stroke-width:1;" vector-effect="non-scaling-stroke" d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" /></svg>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '307px',
                    'Left': '76px',
                    'Height': '78px',
                    'Width': '106px',
                    'ZIndex': '2','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X6661e5a_79b28848157db078ce60ea26997260d2',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:#F7DA71;stroke:#000000;stroke-width:1;" vector-effect="non-scaling-stroke" d="M2.2,16.06L3.88,12L2.2,7.94L6.26,6.26L7.94,2.2L12,3.88L16.06,2.2L17.74,6.26L21.8,7.94L20.12,12L21.8,16.06L17.74,17.74L16.06,21.8L12,20.12L7.94,21.8L6.26,17.74L2.2,16.06ZM4.81,9L6.05,12L4.81,15L7.79,16.21L9,19.19L12,17.95L15,19.19L16.21,16.21L19.19,15L17.95,12L19.19,9L16.21,7.79L15,4.81L12,6.05L9,4.81L7.79,7.79L4.81,9Z" /></svg>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '248px',
                    'Left': '248px',
                    'Height': '200px',
                    'Width': '200px',
                    'ZIndex': '3','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    {
                            'ObjectId':'X6661e5a_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateZ',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '360deg'
                        }]
},


			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-57px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-10px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':400,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-72px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':500,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-62px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':600,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-53px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':700,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-6px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':800,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-33px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':900,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-27px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':1000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-21px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':1100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-11px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':1200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-3px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':1300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '6px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':1400,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '15px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':1500,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '26px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':1600,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '36px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':1700,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '45px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':1800,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '54px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':1900,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '64px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':2000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '74px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':2100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '84px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':2200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '94px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':2300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '103px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':2400,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '113px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':2500,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '122px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':2600,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '131px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':2700,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '135px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':2800,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '139px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':2900,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '143px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':3000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '147px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':3100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '151px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':3200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '155px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':3300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '163px'
                        }]
},
{
                            'ObjectId':'X6661cf6_79b28848157db078ce60ea26997260d2',
                            'StartTime':3400,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '68px'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    
                            {
                                'FunctionId':'FUNC_SHAKE_X6661cf6_79b28848157db078ce60ea26997260d2_On',
                                'StartTime':2200
                            }

			    ]
            }]
}];

            New_Project.init();
            New_Project.stageHeight = 600;
            New_Project.stageWidth  = 800;
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
                New_Project.loaderType = 3;
                New_Project.loaderBackgroundColor = '#000';
                New_Project.loaderForegroundColor = '#fff';
            New_Project.stageInitialScene = 'X6661cf1_79b28848157db078ce60ea26997260d2';
            New_Project.debug = false;
            New_Project.preloadImages = true;
New_Project.imagesToPreload = [

];New_Project.createWorkspace('imObjectAnimation_37_stage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('imObjectAnimation_37_stage');
addLoadEvent(New_Projectstart);


 })( wajq );