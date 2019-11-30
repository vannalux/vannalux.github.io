<?php
if(substr(basename($_SERVER['PHP_SELF']), 0, 11) == "imEmailForm") {
	include '../res/x5engine.php';
	$form = new ImForm();
	$form->setField('Имя', @$_POST['imObjectForm_3_1'], '', false);
	$form->setField('Телефон', @$_POST['imObjectForm_3_2'], '', false);
	$form->setField('Ваш город', @$_POST['imObjectForm_3_3'], '', false);

	if(@$_POST['action'] != 'check_answer') {
		if(!isset($_POST['imJsCheck']) || $_POST['imJsCheck'] != '19B3CE9241AAC93EC085FA5B833B560E' || (isset($_POST['imSpProt']) && $_POST['imSpProt'] != ""))
			die(imPrintJsError());
		$form->mailToOwner('vannavam2015@gmail.com', 'vannavam2015@gmail.com', 'Отправка заявки VannaLux', '', false);
		@header('Location: ../otpravleno.html');
		exit();
	} else {
		echo $form->checkAnswer(@$_POST['id'], @$_POST['answer']) ? 1 : 0;
	}
}

// End of file