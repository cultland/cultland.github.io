//----------DHTML Menu Created using AllWebMenus PRO ver 5.2-#808---------------
//D:\Projects\Site\www\Menu.awm
awmRelativeCorner=1;
var awmMenuName='menu';
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
awmImagesColl=["off_main.gif",117,41,"on_main.gif",117,41,"off_info.gif",151,41,"on_info.gif",151,41,"off_portfolio.gif",139,41,"on_portfolio.gif",139,41,"off_links.gif",113,41,"on_links.gif",113,41,"off_contacts.gif",131,41,"on_contacts.gif",131,41];
awmCreateCSS(0,1,0,n,n,n,n,n,'solid','0','#000066',0,0);
awmCreateCSS(1,2,1,'#000000',n,n,'bold 11px Tahoma, Arial, Helvetica, sans-serif',n,'none','0','#000000','0px 0px 0px 0',1);
awmCreateCSS(0,2,1,'#FFFFFF',n,n,'bold 11px Tahoma, Arial, Helvetica, sans-serif',n,'none','0','#000000','0px 0px 0px 0',1);
awmCreateCSS(0,1,0,n,'#F4F3EE',n,n,n,'solid','1','#000000',0,0);
awmCreateCSS(1,2,0,'#000000',n,n,'10pt Arial, Helvetica, sans-serif',n,'none','0','#000000','3px 8px 3px 8',1);
awmCreateCSS(0,2,0,'#FFFFFF','#77A110',n,'10pt Arial, Helvetica, sans-serif',n,'none','0','#000000','3px 8px 3px 8',1);
var s0=awmCreateMenu(0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,n,n,100,1,0,0,0,0,-1,1,200,200,0,0,0,"0,0,0",n,n,n,n,n,n,n,n,0,0,0,0,1,0,0,0,1);
it=s0.addItemWithImages(1,2,2,"","","","",0,1,1,3,3,3,n,n,n,"index.html",n,n,n,"index.html",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,0);
it=s0.addItemWithImages(1,2,2,"","","","",2,3,3,3,3,3,n,n,n,"info.html",n,n,n,"info.html",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,11);
var s1=it.addSubmenu(0,0,0,0,0,0,0,3,0,1,0,n,n,100,9,3,0,-1,1,200,200,0,0,"0,0,0",0,"0");
it=s1.addItem(4,5,5," Статьи &nbsp; ",n,n,"","articles.html",n,n,n,"articles.html",n,0,0,2,0,0,2);
it=s1.addItem(4,5,5," Проектирование &nbsp; ",n,n,"","projection.html",n,n,n,"projection.html",n,0,0,2,0,0,20);
it=s1.addItem(4,5,5," Литература &nbsp; ",n,n,"","literature.html",n,n,n,"literature.html",n,0,0,2,0,0,3);
it=s1.addItem(4,5,5," Документы &nbsp; ",n,n,"","documents.html",n,n,n,"documents.html",n,0,0,2,0,0,4);
it=s0.addItemWithImages(1,2,2,"","","","",4,5,5,3,3,3,n,n,n,"portfolio.html",n,n,n,"portfolio.html",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,10);
var s1=it.addSubmenu(0,0,0,0,0,0,0,3,0,1,0,n,n,100,9,4,0,-1,1,200,200,0,0,"0,0,0",0,"0");
it=s1.addItem(4,5,5," Ландшафтный дизайн &nbsp; ",n,n,"","portfolio_design01.html",n,n,n,"portfolio_design01.html",n,0,0,2,0,0,19);
it=s1.addItem(4,5,5," Ландшафтная архитектура &nbsp; ",n,n,"","portfolio_architecture01.html",n,n,n,"portfolio_architecture01.html",n,0,0,2,0,0,22);
it=s1.addItem(4,5,5," Ландшафтное планирование &nbsp; ",n,n,"","portfolio_planning01.html",n,n,n,"portfolio_planning01.html",n,0,0,2,0,0,21);
it=s1.addItem(4,5,5," Проектирование &nbsp; ",n,n,"","projection.html",n,n,n,"projection.html",n,0,0,2,0,0,1);
it=s0.addItemWithImages(1,2,2,"","","","",6,7,7,3,3,3,n,n,n,"links.html",n,n,n,"links.html",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,9);
it=s0.addItemWithImages(1,2,2,"","","","",8,9,9,3,3,3,n,n,n,"contacts.html",n,n,n,"contacts.html",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,8);
s0.pm.buildMenu();
}}
