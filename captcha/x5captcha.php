<?php
include("../res/x5engine.php");
$nameList = array("2xs","7k2","zcr","ulv","df8","z3k","kpu","jvx","l3g","td7");
$charList = array("X","T","L","A","C","6","J","8","R","W");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
