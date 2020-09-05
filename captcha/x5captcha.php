<?php
include("../res/x5engine.php");
$nameList = array("nl6","nfm","p8z","x8j","nfh","xcv","u7m","6tj","ew7","5v3");
$charList = array("V","H","7","P","8","7","7","M","P","8");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
