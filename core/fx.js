function iniFx(x) { for (var i in x) { var item=x[i]; var y=item.obj; var sClass=y.id.slice(0,4);
 if (sClass=='snow') { new addSnow(item); } } ujLoaded(); }
var aMenus=new Array();
function populateSnow(sId,iDensity,iSpeed,iHeight,iSizes,iSoft) { var vFlakes = []; var iBodyHeight=document.body.offsetHeight;
 if (!iHeight) {iHeight=iBodyHeight}; if (iHeight>iBodyHeight) {iHeight=iBodyHeight}; if (!iSizes) {iSizes=5};
 iSizes=(Number(iSizes)*2)+2; var iTranslate=iHeight-iSizes-5; if (!iSpeed) {iSpeed=30}; iSpeed=(Number(iSpeed)*2)+20;
 var iDurations = iTranslate/iSpeed; var iStartDelays = iDurations*3; if (!iSoft) {iSoft=2}; iSoft=Number(iSoft);
 var vView = document.createElement('div'); vView.setAttribute('id','view-'+sId);
 vView.setAttribute('style','position:absolute; width:100%; '
 +'height:'+iHeight+'px; top:0; left:0; z-index:9999; overflow:hidden; pointer-events:none'); document.body.appendChild(vView);
 var iW = vView.offsetWidth; var iH = vView.offsetHeight; var iVol = iW*iH; if (!iDensity) {iDensity=12};
 var iQuantity = Math.floor(iVol*(iDensity*0.000005))+5; if (iQuantity>300) {iQuantity=300}; var sFlakeStem = 'flake-'+sId+'-';
 var v; var style=document.createElement('style'); style.setAttribute('id','dynamic-'+sId);
 style.innerHTML+=' .'+sFlakeStem+'r { ' +'position:absolute; top:0; ' +'background-color:white; ' +'border-radius:25px; '
 +'box-shadow:0 1px 2px rgba(0,0,0,1); ' +'opacity:0; ' +'animation:'+sFlakeStem+'k 9s linear infinite; ' +'}';
 style.innerHTML+='@keyframes '+sFlakeStem+'k { ' +'0% { opacity:0; transform:translateY(0); }' +'20% { opacity:0.8; }'
 +'80% { opacity:0.8; }' +'100% { opacity:0; transform:translateY('+iTranslate+'px); }' +' }'; document.head.appendChild(style);
 for (i = 0; i < iQuantity; i++) { var iSize = 5 + Math.floor(Math.random() * iSizes); var iBlur = (Math.random() * 3) + iSoft;
 var iDuration = (Math.random() * (iDurations*2))+iDurations; var iDelay = Math.random() * iStartDelays;
 var iPosition = Math.floor(Math.random() * 100); style.innerHTML+=' .'+sFlakeStem+i+' { ' +'left: '+iPosition+'%;'
 +'animation-delay: ' + iDelay + 's;' +'animation-duration: '+ iDuration + 's;' +'width: '+iSize + 'px;' +'height:'+iSize + 'px;'
 +'filter:blur(' + iBlur + 'px);' +' }'; v = document.createElement('div');
 v.setAttribute('class', sFlakeStem+'r '+sFlakeStem+i); vFlakes.push(v); vView.appendChild(v); } }
function addSnow(x) { var that=this; var vObj=x.obj; var sId=vObj.id; var iDensity=x.props['density'];
 var iSpeed=x.props['speed']; var iSize=x.props['size']; var iSoft=x.props['soft']; var iHeight=x.props['height'];
 populateSnow(sId,iDensity,iSpeed,iHeight,iSize,iSoft); }
iniFx(aUjTree['fx']);
