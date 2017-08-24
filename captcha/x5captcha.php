<?php
include("../res/x5engine.php");
$nameList = array("5w7","784","ur4","ylk","25s","ej7","255","83j","edg","mw2");
$charList = array("Z","S","3","Z","E","S","N","D","D","D");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
