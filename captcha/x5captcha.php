<?php
include("../res/x5engine.php");
$nameList = array("2af","pl8","vdm","xwa","524","d6g","gth","257","vtf","8vt");
$charList = array("Z","2","F","D","Y","E","N","M","J","K");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
