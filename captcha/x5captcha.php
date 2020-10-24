<?php
include("../res/x5engine.php");
$nameList = array("xrz","w6g","da8","r73","l6p","ekv","775","mwh","y26","dul");
$charList = array("P","K","7","X","R","A","G","T","D","Z");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
