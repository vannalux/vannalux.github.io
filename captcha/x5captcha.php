<?php
include("../res/x5engine.php");
$nameList = array("n7p","m4z","mce","n8f","fh4","lmh","gn4","zxk","dvy","mlz");
$charList = array("X","L","U","J","4","P","M","U","M","S");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
