<?php
if(substr(basename($_SERVER['PHP_SELF']), 0, 11) == "imEmailForm") {
	include '../res/x5engine.php';
	$form = new ImForm();
	$form->setField('Name', @$_POST['imObjectForm_29_3'], '', false);
	$form->setField('Email Address', @$_POST['imObjectForm_29_4'], '', false);
	$form->setField('Your Request', @$_POST['imObjectForm_29_5'], '', false);
	$form->setField('Leave a message', @$_POST['imObjectForm_29_6'], '', false);
	$form->setField('', @$_POST['imObjectForm_29_7'], '', true);
	$form->setField('', @$_POST['imObjectForm_29_9'], '', true);

	if(@$_POST['action'] != 'check_answer') {
		if(!isset($_POST['imJsCheck']) || $_POST['imJsCheck'] != '82D8B6286CF26A75ACC5FF15A05CFD76' || (isset($_POST['imSpProt']) && $_POST['imSpProt'] != ""))
			die(imPrintJsError());
		$form->mailToOwner('vannavam2015@gmail.com', 'example@example.com', '', '', false);
		@header('Location: ../index.php');
		exit();
	} else {
		echo $form->checkAnswer(@$_POST['id'], @$_POST['answer']) ? 1 : 0;
	}
}

// End of file