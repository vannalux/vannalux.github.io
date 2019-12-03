<?php
include("../res/x5engine.php");
$nameList = array("px7","aeu","fpj","pte","5l7","ja7","ayc","ymp","enu","3rh");
$charList = array("W","K","Z","H","M","6","3","T","W","4");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
