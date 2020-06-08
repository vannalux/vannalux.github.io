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
            'Oid': 'X666c245_9ba7de7d1e38695067096f9c242cb3ee',
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
                              'OnAnimationFinishedParam': 'X666c245_9ba7de7d1e38695067096f9c242cb3ee',





                            'Timelines': [
            {
                'Oid': 'MAIN_TIMELINE',
                'Name': 'Main timeline',
                'Objects': [
                
                    
                    
                {
                    'Oid': 'X666c247_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '300px',
                    'Width': '728px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/11.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666c248_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '145px',
                    'Left': '359px',
                    'Height': '10px',
                    'Width': '10px',
                    'ZIndex': '2','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_39/334522.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': '  <div style=\"width:100%; text-align:center; display: table; height: 100%; #position: relative; overflow: hidden;\">      <div style=\"#position: absolute; #top: 50%; display: table-cell; vertical-align: middle;\">        <div style=\"#position: relative; #top: -50%;\">          Поддержка. Оперативная и квалифицированная техническая поддержка.        </div>      </div>    </div>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '331px',
                    'Left': '-82px',
                    'Height': '31px',
                    'Width': '892px',
                    'ZIndex': '4','BackgroundColor': '#FFFFFF','Display': 'block','TextAlign': 'center',
'BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',

                'TextColor': '#FF0000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '21px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X666c253_9ba7de7d1e38695067096f9c242cb3ee',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '300px',
                    'Width': '728px',
                    'ZIndex': '3','BackgroundColor': '#ffffff','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X666c248_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '264px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '50px'
                        }]
},
{
                            'ObjectId':'X666c248_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '200px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '200px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '237px'
                        }]
},
{
                            'ObjectId':'X666c248_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-12px'
                        }]
},
{
                            'ObjectId':'X666c248_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':400,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '19px'
                        }]
},
{
                            'ObjectId':'X666c248_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':500,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '250px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '5px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':800,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-127px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':800,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '235px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '982px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '121px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'FontSize',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '26px'
                        }]
},
{
                            'ObjectId':'X666c253_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':800,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0.5'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':900,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-82px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':900,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '237px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '892px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '31px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'FontSize',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '21px'
                        }]
},
{
                            'ObjectId':'X666c253_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':900,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':1000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-127px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':1000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '235px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '982px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '121px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'FontSize',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '26px'
                        }]
},
{
                            'ObjectId':'X666c253_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':1000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0.5'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':1100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-82px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':1100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '237px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '892px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '31px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'FontSize',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '21px'
                        }]
},
{
                            'ObjectId':'X666c253_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':1100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},
{
                            'ObjectId':'X666c248_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':2200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '276px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '11px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':2800,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-127px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':2800,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '235px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '982px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '121px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'FontSize',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '26px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':2900,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-82px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':2900,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '237px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '892px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '31px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'FontSize',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '21px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':3000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-127px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':3000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '235px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '982px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '121px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'FontSize',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '26px'
                        }]
},
{
                            'ObjectId':'X666c253_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':3000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0.5'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':3100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-82px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':3100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '237px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '892px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '31px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'FontSize',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '21px'
                        }]
},
{
                            'ObjectId':'X666c253_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':3100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},
{
                            'ObjectId':'X666c253_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':3200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0.5'
                        }]
},
{
                            'ObjectId':'X666c253_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':3300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},
{
                            'ObjectId':'X666c248_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':3900,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '264px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '19px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':4800,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-127px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':4800,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '235px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '982px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '121px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'FontSize',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '26px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':4900,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-82px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':4900,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '237px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '892px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '31px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'FontSize',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '21px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':5000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-127px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':5000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '235px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '982px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '121px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'FontSize',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '26px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':5100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-82px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':5100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '237px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '892px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '31px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'FontSize',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '21px'
                        }]
},
{
                            'ObjectId':'X666c253_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':5200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0.5'
                        }]
},
{
                            'ObjectId':'X666c253_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':5300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},
{
                            'ObjectId':'X666c253_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':5400,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0.5'
                        }]
},
{
                            'ObjectId':'X666c253_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':5500,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},
{
                            'ObjectId':'X666c248_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':5600,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '250px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '5px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':6800,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-127px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':6800,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '235px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '982px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '121px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'FontSize',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '26px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':6900,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-82px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':6900,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '237px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '892px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '31px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'FontSize',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '21px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-127px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '235px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '982px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '121px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'FontSize',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '26px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-82px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '237px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '892px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '31px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'FontSize',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '21px'
                        }]
},
{
                            'ObjectId':'X666c248_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'2.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '276px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'2.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '11px'
                        }]
},
{
                            'ObjectId':'X666c253_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7400,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0.5'
                        }]
},
{
                            'ObjectId':'X666c253_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7500,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},
{
                            'ObjectId':'X666c253_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7600,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0.5'
                        }]
},
{
                            'ObjectId':'X666c253_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':7700,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':8800,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-127px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':8800,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '235px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '982px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '121px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'FontSize',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '26px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':8900,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-82px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':8900,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '237px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '892px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '31px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'FontSize',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '21px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':9000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-127px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':9000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '235px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '982px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '121px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'FontSize',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '26px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':9100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-82px'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':9100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '237px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Width',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '892px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Height',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '31px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'FontSize',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '21px'
                        }]
},
{
                            'ObjectId':'X666c253_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':9600,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0.5'
                        }]
},
{
                            'ObjectId':'X666c253_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':9700,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},
{
                            'ObjectId':'X666c253_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':9800,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0.5'
                        }]
},
{
                            'ObjectId':'X666c253_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':9900,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},
{
                            'ObjectId':'X666c253_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':10000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X666c24d_9ba7de7d1e38695067096f9c242cb3ee',
                            'StartTime':10300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '778px'
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
            New_Project.stageInitialScene = 'X666c245_9ba7de7d1e38695067096f9c242cb3ee';
            New_Project.debug = false;
            New_Project.preloadImages = true;
New_Project.imagesToPreload = [
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/11.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_39/334522.jpg'
];New_Project.createWorkspace('imObjectAnimation_39_stage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('imObjectAnimation_39_stage');
addLoadEvent(New_Projectstart);


 })( wajq );