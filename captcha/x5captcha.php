<?php
include("../res/x5engine.php");
$nameList = array("3l7","vlx","vv6","t67","wvw","rx7","7u5","n4n","m3z","mer");
$charList = array("M","H","3","D","T","P","U","4","Y","K");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
