<?php
include("../res/x5engine.php");
$nameList = array("j62","nz2","nx8","ayt","mzp","tzt","agw","ngr","jd6","hud");
$charList = array("8","V","A","Z","J","A","T","W","7","M");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
