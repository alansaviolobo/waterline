var aySound = new Array();

aySound[0] = "sounds/c-sharp.mp3";
aySound[1] = "sounds/d-sharp.mp3";
aySound[2] = "sounds/e-sharp.mp3";
aySound[3] = "sounds/f-sharp.mp3";

document.write('<BGSOUND ID="auIEContainer">')
IE = (navigator.appVersion.indexOf("MSIE")!=-1 && document.all)? 1:0;
NS = (navigator.appName=="Netscape" && navigator.plugins["LiveAudio"])? 1:0;
ver4 = IE||NS? 1:0;
onload=auPreload;

function auPreload() {
if (!ver4) return;
if (NS) auEmb = new Layer(0,window);
else {
Str = "<DIV ID='auEmb' STYLE='position:absolute;'></DIV>";
document.body.insertAdjacentHTML("BeforeEnd",Str);
}
var Str = '';
for (i=0;i<aySound.length;i++)
Str += "<EMBED SRC='"+aySound[i]+"' AUTOSTART='FALSE' HIDDEN='TRUE'>"
if (IE) auEmb.innerHTML = Str;
else {
auEmb.document.open();
auEmb.document.write(Str);
auEmb.document.close();
}
auCon = IE? document.all.auIEContainer:auEmb;
auCon.control = auCtrl;
}
function auCtrl(whSound,play) {
if (IE) this.src = play? aySound[whSound]:'';
else eval("this.document.embeds[whSound]." + (play? "play()":"stop()"))
}
function playSound(whSound) { if (window.auCon) auCon.control(whSound,true); }
function stopSound(whSound) { if (window.auCon) auCon.control(whSound,false); }
