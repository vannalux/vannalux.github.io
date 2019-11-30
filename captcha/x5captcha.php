<?php
include("../res/x5engine.php");
$nameList = array("l3y","wkm","f2u","tr6","zpu","hte","r2r","vum","cus","kk4");
$charList = array("G","2","E","L","U","8","W","V","X","8");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
