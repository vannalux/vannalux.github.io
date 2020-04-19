<?php
include("../res/x5engine.php");
$nameList = array("7p4","28z","p4w","jmt","nr4","vz3","745","yjj","pyd","kp2");
$charList = array("C","R","J","J","P","P","U","Y","X","V");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
