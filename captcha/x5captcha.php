<?php
include("../res/x5engine.php");
$nameList = array("r6f","rfx","4vw","k8c","eh3","evc","alg","xle","wlv","gaw");
$charList = array("5","2","2","S","G","Y","Y","H","F","N");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
