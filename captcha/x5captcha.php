<?php
include("../res/x5engine.php");
$nameList = array("76k","7xn","652","m73","yck","5fj","5v2","775","twc","upg");
$charList = array("A","X","M","N","Z","7","A","P","5","V");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
