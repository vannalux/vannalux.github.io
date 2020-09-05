<?php
if(substr(basename($_SERVER['PHP_SELF']), 0, 11) == "imEmailForm") {
	include '../res/x5engine.php';
	$form = new ImForm();
	$form->setField('NAME', @$_POST['imObjectForm_34_1'], '', false);
	$form->setField('SURNAME', @$_POST['imObjectForm_34_2'], '', false);

	if(@$_POST['action'] != 'check_answer') {
		if(!isset($_POST['imJsCheck']) || $_POST['imJsCheck'] != '80FC1E74E5739720E81C8F27F18052FE' || (isset($_POST['imSpProt']) && $_POST['imSpProt'] != ""))
			die(imPrintJsError());
		$form->mailToOwner('vannavam2015@gmail.com', 'vannavam2015@gmail.com', 'МММ', '', false);
		@header('Location: ../index.html');
		exit();
	} else {
		echo $form->checkAnswer(@$_POST['id'], @$_POST['answer']) ? 1 : 0;
	}
}

// End of file