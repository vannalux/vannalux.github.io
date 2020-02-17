<?php
include("../res/x5engine.php");
$nameList = array("xkd","5l7","wex","was","saa","fup","8ry","7s7","ml8","u38");
$charList = array("6","6","H","5","C","X","2","X","J","K");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
