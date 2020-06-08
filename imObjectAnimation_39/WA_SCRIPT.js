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
            'Oid': 'X666d4d5_9ba7de7d1e38695067096f9c242cb3ee',
            'Name': 'SCENE_1',
            'Autostart': 'true',
            'BackgroundColor': '#ffffff',
            'SceneEnd': 5000,
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
                    'Oid': 'X666d67b_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:#F7DA71;stroke:#000000;stroke-width:1;" vector-effect="non-scaling-stroke" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66ZM22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '180px',
                    'Left': '300px',
                    'Height': '200px',
                    'Width': '200px',
                    'ZIndex': '1','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666d76f_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': 'Click'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '208px',
                    'Left': '633px',
                    'Height': '20px',
                    'Width': '120px',
                    'ZIndex': '2','Background': [{
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

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '15px',
                'LineHeight': '1.5em',

                

                'Visible': 'false',

'OnMouseClick' : 4,
'OnMouseClickParam' : 'https://vannavam.com/',



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
                            'Property': 'Visible',
                            'EndValue': 'true'
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
                            'Property': 'Visible',
                            'EndValue': 'true'
                         }],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X666d67b_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '10px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '137px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '555px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '295px'
                        }]
},
{
                            'ObjectId':'X666d76f_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':2000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '491px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '315px'
                        }]
},


			    ],
                'Changes': [
			
                    {
                            'ObjectId':'X666d67b_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':600,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'InnerHTML',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:#F7DA71;stroke:#000000;stroke-width:2;" vector-effect="non-scaling-stroke" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66ZM22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg>'
                        }]
},
{
                            'ObjectId':'X666d67b_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':1200,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'InnerHTML',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:#F7DA71;stroke:#000000;stroke-width:0;" vector-effect="non-scaling-stroke" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66ZM22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg>'
                        }]
},
{
                            'ObjectId':'X666d67b_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':2000,
                            'ChangeElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'InnerHTML',
                            'Duration':'0s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:#F7DA71;stroke:#000000;stroke-width:4;" vector-effect="non-scaling-stroke" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66ZM22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg>'
                        }]
},
{
                            'ObjectId':'X666d76f_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':2000,
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
			
                    

			    ]
            }]
}];

            New_Project.init();
            New_Project.stageHeight = 600;
            New_Project.stageWidth  = 800;
            New_Project.t  = '413002711221533250853107850719651035805';
            New_Project.stageInitialTransition = 'instant';
            New_Project.stageInitialTransitionDirection = 'left';
            New_Project.stageInitialTransitionSpeed = 1000;

            New_Project.responsiveStage = true;
            New_Project.responsiveStageKeepRatio = true;
            New_Project.scaleX = 1;
            New_Project.scaleY = 1;
            New_Project.scale = 1;

            New_Project.showBrowserCompatibilityCheck = false;
                New_Project.loaderType = 1;
                New_Project.loaderBackgroundColor = '#000';
                New_Project.loaderForegroundColor = '#fff';
            New_Project.stageInitialScene = 'X666d4d5_9ba7de7d1e38695067096f9c242cb3ee';
            New_Project.debug = false;
            New_Project.preloadImages = true;
New_Project.imagesToPreload = [

];New_Project.createWorkspace('imObjectAnimation_39_stage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('imObjectAnimation_39_stage');
addLoadEvent(New_Projectstart);


 })( wajq );