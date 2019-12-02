<?php
include("../res/x5engine.php");
$nameList = array("zky","ztd","zgj","axd","hdl","lcy","v32","5w5","xkg","hth");
$charList = array("P","X","2","V","R","8","N","4","7","N");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
