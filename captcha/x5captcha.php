<?php
include("../res/x5engine.php");
$nameList = array("ff8","sy3","3wt","6ve","f3s","xtc","a84","8fa","8rj","cuc");
$charList = array("A","T","F","6","K","E","3","A","2","M");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
