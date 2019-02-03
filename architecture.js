//----------DHTML Menu Created using AllWebMenus PRO ver 5.2-#808---------------
//D:\Projects\Site\www\architecture.awm
var awmMenuName='architecture';
var awmLibraryBuild=808;
var awmLibraryPath='/js';
var awmImagesPath='/js_img';
var awmSupported=(navigator.appName + navigator.appVersion.substring(0,1)=="Netscape5" || document.all || document.layers || navigator.userAgent.indexOf('Opera')>-1 || navigator.userAgent.indexOf('Konqueror')>-1)?1:0;
if (awmAltUrl!='' && !awmSupported) window.location.replace(awmAltUrl);
if (awmSupported){
var nua=navigator.userAgent,scriptNo=(nua.indexOf('Chrome')>-1)?2:((nua.indexOf('Safari')>-1)?7:(nua.indexOf('Gecko')>-1)?2:((document.layers)?3:((nua.indexOf('Opera')>-1)?4:((nua.indexOf('Mac')>-1)?5:1))));
var mpi=document.location,xt="";
var mpa=mpi.protocol+"//"+mpi.host;
var mpi=mpi.protocol+"//"+mpi.host+mpi.pathname;
if(scriptNo==1){oBC=document.all.tags("BASE");if(oBC && oBC.length) if(oBC[0].href) mpi=oBC[0].href;}
while (mpi.search(/\\/)>-1) mpi=mpi.replace("\\","/");
mpi=mpi.substring(0,mpi.lastIndexOf("/")+1);
var e=document.getElementsByTagName("SCRIPT");
for (var i=0;i<e.length;i++){if (e[i].src){if (e[i].src.indexOf(awmMenuName+".js")!=-1){xt=e[i].src.split("/");if (xt[xt.length-1]==awmMenuName+".js"){xt=e[i].src.substring(0,e[i].src.length-awmMenuName.length-3);if (e[i].src.indexOf("://")!=-1){mpi=xt;}else{if(xt.substring(0,1)=="/")mpi=mpa+xt; else mpi+=xt;}}}}}
while (mpi.search(/\/\.\//)>-1) {mpi=mpi.replace("/./","/");}
var awmMenuPath=mpi.substring(0,mpi.length-1);
while (awmMenuPath.search("'")>-1) {awmMenuPath=awmMenuPath.replace("'","%27");}
document.write("<SCRIPT SRC='"+awmMenuPath+awmLibraryPath+"/awmlib"+scriptNo+".js'><\/SCRIPT>");
var n=null;
awmzindex=1000;
}

var awmImageName='';
var awmPosID='';
var awmSubmenusFrame='';
var awmSubmenusFrameOffset;
var awmOptimize=0;
var awmHash='';
var awmUseTrs=0;
var awmSepr=["0","","",""];
var awmMarg=[0,0,0,0];
function awmBuildMenu(){
if (awmSupported){
awmImagesColl=["menu_back_str.gif",21,38,"menu_back_off.gif",30,38,"menu_back_on.gif",30,38];
awmCreateCSS(0,1,0,n,n,n,n,n,'none','0','#000000',0,0);
awmCreateCSS(1,2,0,'#000000',n,n,'9pt Verdana, Arial, Helvetica, sans-serif',n,'solid solid solid solid','1px 1px 1px 1','#F2F2F2 #BFBFBF #8C8C8C #BFBFBF','0px 16px 0px 16',1);
awmCreateCSS(0,2,0,'#000000',n,0,'9pt Verdana, Arial, Helvetica, sans-serif',n,'solid solid solid solid','1px 1px 1px 1','#F2F2F2 #BFBFBF #8C8C8C #BFBFBF','0px 16px 0px 16',1);
var s0=awmCreateMenu(0,0,0,0,1,0,0,0,0,10,10,0,0,0,0,1,0,n,n,100,1,0,0,0,0,-1,1,200,200,0,0,0,"0,0,0",n,n,n,n,n,n,n,n,0,0,0,0,1,0,0,0,1);
it=s0.addItemWithImages(1,2,2,"Все проекты",n,n,"",n,n,n,3,3,3,n,n,n,"portfolio\\arch_all\\album\\index.html",n,n,n,"portfolio/arch_all/album/index.html","arch",256,0,2,n,0,0,1,2,2,0,1,1,0,0,n,n,n,0,0,0,0);
it=s0.addItemWithImages(1,2,2,"Парк аттракционов<br>2013",n,n,"",n,n,n,3,3,3,n,n,n,"portfolio\\arch_park_attr\\album\\index.html",n,n,n,"portfolio/arch_park_attr/album/index.html","arch",256,0,2,n,0,0,1,2,2,0,1,1,0,0,n,n,n,0,0,0,2);
it=s0.addItemWithImages(1,2,2,"Храм<br>2011",n,n,"",n,n,n,3,3,3,n,n,n,"portfolio\\arch_hram\\album\\index.html",n,n,n,"portfolio/arch_hram/album/index.html","arch",256,0,2,n,0,0,1,2,2,0,1,1,0,0,n,n,n,0,0,0,1);
it=s0.addItemWithImages(1,2,2,"Парк<br>2010",n,n,"",n,n,n,3,3,3,n,n,n,"portfolio\\arch_park\\album\\index.html",n,n,n,"portfolio/arch_park/album/index.html","arch",256,0,2,n,0,0,1,2,2,0,1,1,0,0,n,n,n,0,0,0,13);
it=s0.addItemWithImages(1,2,2,"Загородная рекреация<br>2010",n,n,"",n,n,n,3,3,3,n,n,n,"portfolio\\arch_recreation\\album\\index.html",n,n,n,"portfolio/arch_recreation/album/index.html","arch",256,0,2,n,0,0,1,2,2,0,1,1,0,0,n,n,n,0,0,0,16);
s0.pm.buildMenu();
}}
