<?php
include("../res/x5engine.php");
$nameList = array("v78","em4","yzt","uve","4pz","czt","62x","raw","kvy","mfl");
$charList = array("H","M","T","U","U","5","V","6","3","8");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
