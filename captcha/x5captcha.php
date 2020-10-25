<?php
include("../res/x5engine.php");
$nameList = array("v3u","s2h","hhm","x5a","fud","x75","rua","nt5","r4x","l7u");
$charList = array("V","J","2","U","5","J","D","4","N","8");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
