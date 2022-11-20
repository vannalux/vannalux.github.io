<?php
include("../res/x5engine.php");
$nameList = array("t7x","cu8","2m4","kny","wc8","cur","35j","4hy","s7g","fcv");
$charList = array("G","T","4","K","K","A","N","A","3","2");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
