<?php
include("../res/x5engine.php");
$nameList = array("mpa","s58","vut","c2w","dhe","pzs","gp5","8v3","yw3","4fj");
$charList = array("D","Y","C","5","W","C","F","R","S","M");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
