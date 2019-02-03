//----------DHTML Menu Created using AllWebMenus PRO ver 5.2-#808---------------
//D:\Projects\Site\www\projection\projection_buttons.awm
var awmMenuName='projection';
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
awmImagesColl=["SlidingArmy-v5_bullets_08a.gif",11,10,"SlidingArmy-v5_bullets_08b.gif",11,10,"tile_button.gif",27,33,"left_button.gif",5,33,"right_button.gif",5,33];
awmCreateCSS(0,1,0,n,n,n,n,n,'none','0','#000000',0,0);
awmCreateCSS(1,2,0,'#FFFFFF',n,2,'bold 14px Arial, Helvetica, sans-serif',n,'none','0','#000000','0px 10px 0px 20',0);
awmCreateCSS(0,2,0,'#496407',n,2,'bold 14px Arial, Helvetica, sans-serif',n,'none','0','#000000','0px 10px 0px 20',0);
awmCreateCSS(0,2,0,'#496407',n,2,'bold 14px Arial, Helvetica, sans-serif',n,'none','0','#000000','0px 10px 0px 30',0);
awmCreateCSS(1,2,0,'#FFFFFF','#8FAD47',n,'12px Tahoma',n,'none','0','#000000','5px 5px 5px 12',1);
awmCreateCSS(0,2,0,'#496407','#8FAD47',n,'12px Tahoma',n,'solid','1','#496407','5px 5px 5px 12',1);
var s0=awmCreateMenu(0,0,0,0,1,0,0,0,0,10,10,0,0,0,2,1,0,n,n,100,1,0,-1,33,245,-1,1,200,200,0,0,0,"0,0,0",n,n,n,n,n,n,n,n,0,0,0,0,1,0,0,0,1);
it=s0.addItemWithImages(1,2,3,"Предпроектная стадия",n,n,"",n,n,n,3,3,3,0,0,1,"",n,n,n,n,n,0,0,2,3,3,3,4,4,4,0,1,1,0,0,n,n,n,0,0,0,0);
var s1=it.addSubmenu(0,0,0,1,3,0,0,0,2,1,0,n,n,100,0,2,0,-1,1,200,200,1,3,"0,0,0",0,"1,0,20,1,15,0,0,0,1,1");
it=s1.addItem(4,5,5,"Ситуационный план. <br>Ведомость чертежей.<br>Фотофиксация (вар. 1)",n,n,"","projection\\images\\album\\slides\\01_sit_01.html",n,n,n,"projection/images/album/slides/01_sit_01.html","project",0,0,2,0,0,9);
it=s1.addItem(4,5,5,"Ситуационный план. <br>Ведомость чертежей.<br>Фотофиксация (вар. 2)",n,n,"","projection\\images\\album\\slides\\01_sit_02.html",n,n,n,"projection/images/album/slides/01_sit_02.html","project",0,0,2,0,0,10);
it=s1.addItem(4,5,5,"Восстановительный план<br>рельефа. Восстановительный<br>план участка",n,n,"","projection\\images\\album\\slides\\02_vosst_01.html",n,n,n,"projection/images/album/slides/02_vosst_01.html","project",0,0,2,0,0,11);
it=s0.addItemWithImages(1,2,3,"Форпроект",n,n,"",n,n,n,3,3,3,0,0,1,"",n,n,n,n,n,0,0,2,3,3,3,4,4,4,0,1,1,0,0,n,n,n,0,0,0,1);
var s1=it.addSubmenu(0,0,0,1,3,0,0,0,2,1,0,n,n,100,0,1,0,-1,1,200,200,1,3,"0,0,0",0,"1,0,20,1,15,0,0,0,1,1");
it=s1.addItem(4,5,5,"Эскиз планировки участка<br>(вар. 1)",n,n,"","projection\\images\\album\\slides\\03_for_01.html",n,n,n,"projection/images/album/slides/03_for_01.html","project",0,0,2,0,0,3);
it=s1.addItem(4,5,5,"Эскиз планировки участка<br>(вар. 2)","Эскиз планировки участка","Эскиз планировки участка","","projection\\images\\album\\slides\\03_for_02.html",n,n,n,"projection/images/album/slides/03_for_02.html","project",0,0,2,0,0,5);
it=s1.addItem(4,5,5,"Эскиз планировки участка<br>(вар. 3)",n,n,"","projection\\images\\album\\slides\\03_for_03.html",n,n,n,"projection/images/album/slides/03_for_03.html","project",0,0,2,0,0,4);
it=s0.addItemWithImages(1,2,3,"Дизайн-проект",n,n,"",n,n,n,3,3,3,0,0,1,"",n,n,n,n,n,0,0,2,3,3,3,4,4,4,0,1,1,0,0,n,n,n,0,0,0,2);
var s1=it.addSubmenu(0,0,0,1,3,0,0,0,2,1,0,n,n,100,0,3,0,-1,1,200,200,1,3,"0,0,0",0,"1,0,20,1,15,0,0,0,1,1");
it=s1.addItem(4,5,5,"Генеральный план (вар. 1)",n,n,"","projection\\images\\album\\slides\\04_gen_01.html",n,n,n,"projection/images/album/slides/04_gen_01.html","project",0,0,2,0,0,12);
it=s1.addItem(4,5,5,"Генеральный план (вар. 2)",n,n,"","projection\\images\\album\\slides\\04_gen_02.html",n,n,n,"projection/images/album/slides/04_gen_02.html","project",0,0,2,0,0,7);
it=s1.addItem(4,5,5,"Генеральный план (вар. 3)",n,n,"","projection\\images\\album\\slides\\04_gen_03.html",n,n,n,"projection/images/album/slides/04_gen_03.html","project",0,0,2,0,0,6);
it=s1.addItem(4,5,5,"План инсоляции",n,n,"","projection\\images\\album\\slides\\05_ins_01.html",n,n,n,"projection/images/album/slides/05_ins_01.html","project",0,0,2,0,0,13);
it=s1.addItem(4,5,5,"Трехмерная иллюстрация <br>ключевого вида. Лист 1",n,n,"","projection\\images\\album\\slides\\06_viz_01.html",n,n,n,"projection/images/album/slides/06_viz_01.html","project",0,0,2,0,0,14);
it=s1.addItem(4,5,5,"Трехмерная иллюстрация <br>ключевого вида. Лист 2",n,n,"","projection\\images\\album\\slides\\06_viz_02.html",n,n,n,"projection/images/album/slides/06_viz_02.html","project",0,0,2,0,0,17);
it=s1.addItem(4,5,5,"Трехмерная иллюстрация <br>ключевого вида. Лист 3",n,n,"","projection\\images\\album\\slides\\06_viz_03.html",n,n,n,"projection/images/album/slides/06_viz_03.html","project",0,0,2,0,0,16);
it=s1.addItem(4,5,5,"Дендроплан",n,n,"","projection\\images\\album\\slides\\07_dend_01.html",n,n,n,"projection/images/album/slides/07_dend_01.html","project",0,0,2,0,0,15);
it=s1.addItem(4,5,5,"План озеленения",n,n,"","projection\\images\\album\\slides\\07_dend_02.html",n,n,n,"projection/images/album/slides/07_dend_02.html","project",0,0,2,0,0,34);
it=s1.addItem(4,5,5,"План дорожных покрытий<br>(вар. 1)",n,n,"","projection\\images\\album\\slides\\08_dts_01.html",n,n,n,"projection/images/album/slides/08_dts_01.html","project",0,0,2,0,0,18);
it=s1.addItem(4,5,5,"План дорожных покрытий<br>(вар. 2)",n,n,"","projection\\images\\album\\slides\\08_dts_02.html",n,n,n,"projection/images/album/slides/08_dts_02.html","project",0,0,2,0,0,35);
it=s1.addItem(4,5,5,"План-схема полива",n,n,"","projection\\images\\album\\slides\\09_pol_01.html",n,n,n,"projection/images/album/slides/09_pol_01.html","project",0,0,2,0,0,19);
it=s1.addItem(4,5,5,"План-схема освещения ",n,n,"","projection\\images\\album\\slides\\10_svet_01.html",n,n,n,"projection/images/album/slides/10_svet_01.html","project",0,0,2,0,0,36);
it=s1.addItem(4,5,5,"Сводный план сетей",n,n,"","projection\\images\\album\\slides\\11_seti_01.html",n,n,n,"projection/images/album/slides/11_seti_01.html","project",0,0,2,0,0,37);
it=s1.addItem(4,5,5,"Эскиз патио",n,n,"","projection\\images\\album\\slides\\12_esk_01.html",n,n,n,"projection/images/album/slides/12_esk_01.html","project",0,0,2,0,0,20);
it=s1.addItem(4,5,5,"Эскиз перголы",n,n,"","projection\\images\\album\\slides\\12_esk_02.html",n,n,n,"projection/images/album/slides/12_esk_02.html","project",0,0,2,0,0,21);
it=s1.addItem(4,5,5,"Эскиз МАФ",n,n,"","projection\\images\\album\\slides\\12_esk_03.html",n,n,n,"projection/images/album/slides/12_esk_03.html","project",0,0,2,0,0,38);
it=s1.addItem(4,5,5,"Схема устройства водоема",n,n,"","projection\\images\\album\\slides\\13_vod_01.html",n,n,n,"projection/images/album/slides/13_vod_01.html","project",0,0,2,0,0,22);
it=s1.addItem(4,5,5,"План-описание водоема",n,n,"","projection\\images\\album\\slides\\13_vod_02.html",n,n,n,"projection/images/album/slides/13_vod_02.html","project",0,0,2,0,0,23);
it=s1.addItem(4,5,5,"Спецификация растений. Лист 1",n,n,"","projection\\images\\album\\slides\\14_spec_01.html",n,n,n,"projection/images/album/slides/14_spec_01.html","project",0,0,2,0,0,24);
it=s1.addItem(4,5,5,"Спецификация растений. Лист 2",n,n,"","projection\\images\\album\\slides\\14_spec_02.html",n,n,n,"projection/images/album/slides/14_spec_02.html","project",0,0,2,0,0,28);
it=s1.addItem(4,5,5,"Спецификация растений",n,n,"","projection\\images\\album\\slides\\14_spec_03.html",n,n,n,"projection/images/album/slides/14_spec_03.html","project",0,0,2,0,0,27);
it=s0.addItemWithImages(1,2,3,"Рабочий проект",n,n,"",n,n,n,3,3,3,0,0,1,"",n,n,n,n,n,0,0,2,3,3,3,4,4,4,0,1,1,0,0,n,n,n,0,0,0,8);
var s1=it.addSubmenu(0,0,0,1,3,0,0,0,2,1,0,n,n,100,0,4,0,-1,1,200,200,1,3,"0,0,0",0,"1,0,20,1,15,0,0,0,1,1");
it=s1.addItem(4,5,5,"Анализ зон влияния<br>коммуникаций. Анализ рельефа",n,n,"","projection\\images\\album\\slides\\15_anrel_01.html",n,n,n,"projection/images/album/slides/15_anrel_01.html","project",0,0,2,0,0,29);
it=s1.addItem(4,5,5,"План организации рельефа<br>(вар. 1)",n,n,"","projection\\images\\album\\slides\\16_vert_01.html",n,n,n,"projection/images/album/slides/16_vert_01.html","project",0,0,2,0,0,33);
it=s1.addItem(4,5,5,"План организации рельефа<br>(вар. 2)",n,n,"","projection\\images\\album\\slides\\16_vert_02.html",n,n,n,"projection/images/album/slides/16_vert_02.html","project",0,0,2,0,0,40);
it=s1.addItem(4,5,5,"План организации рельефа<br>(вар. 3)",n,n,"","projection\\images\\album\\slides\\16_vert_03.html",n,n,n,"projection/images/album/slides/16_vert_03.html","project",0,0,2,0,0,39);
it=s1.addItem(4,5,5,"Картограмма земляных работ",n,n,"","projection\\images\\album\\slides\\17_vol_01.html",n,n,n,"projection/images/album/slides/17_vol_01.html","project",0,0,2,0,0,32);
it=s1.addItem(4,5,5,"Разбивочный план",n,n,"","projection\\images\\album\\slides\\18_raz_01.html",n,n,n,"projection/images/album/slides/18_raz_01.html","project",0,0,2,0,0,31);
it=s1.addItem(4,5,5,"Разбивочный чертёж <br>благоустройства и озеленения",n,n,"","projection\\images\\album\\slides\\19_blag_01.html",n,n,n,"projection/images/album/slides/19_blag_01.html","project",0,0,2,0,0,30);
s0.pm.buildMenu();
}}
