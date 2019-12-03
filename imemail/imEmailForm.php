<?php
if(substr(basename($_SERVER['PHP_SELF']), 0, 11) == "imEmailForm") {
	include '../res/x5engine.php';
	$form = new ImForm();
	$form->setField('Имя', @$_POST['imObjectForm_2_1'], '', false);
	$form->setField('Телефон', @$_POST['imObjectForm_2_2'], '', false);

	if(@$_POST['action'] != 'check_answer') {
		if(!isset($_POST['imJsCheck']) || $_POST['imJsCheck'] != '42080CBC4DC4C71864B336A5EC0F6FE3' || (isset($_POST['imSpProt']) && $_POST['imSpProt'] != ""))
			die(imPrintJsError());
		$form->mailToOwner('vannavam2015@gmail.com', 'vannavam2015@gmail.com', 'Заказ звонка VannaLux', '', false);
		@header('Location: ../otpravleno.html');
		exit();
	} else {
		echo $form->checkAnswer(@$_POST['id'], @$_POST['answer']) ? 1 : 0;
	}
}

// End of file