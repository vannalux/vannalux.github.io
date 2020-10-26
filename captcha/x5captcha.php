<?php
include("../res/x5engine.php");
$nameList = array("njn","2k3","ucn","xyt","mvk","3rt","x5j","acf","mgy","a7j");
$charList = array("J","7","7","A","3","3","Y","U","A","6");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
