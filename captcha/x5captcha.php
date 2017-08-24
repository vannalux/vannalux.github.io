<?php
include("../res/x5engine.php");
$nameList = array("m6h","tft","rnu","ze6","t3w","tjs","r3m","f5e","2em","vaj");
$charList = array("3","S","D","Z","E","C","S","U","E","W");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
