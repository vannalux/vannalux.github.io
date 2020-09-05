<?php
include("../res/x5engine.php");
$nameList = array("8ex","ldd","xwz","dww","6u2","58a","pgw","3fn","ak4","6g7");
$charList = array("A","G","J","W","5","Y","M","F","F","J");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
