<?php
	error_reporting(E_ALL & ~E_NOTICE); 
	
	header('Content-Type: application/json');

	$data = json_decode(file_get_contents("php://input"), true);

	if (!isset($data['message'])) 
	{
		echo json_encode(['success' => false]);
		exit;
	}

	$message = $data['message'];

	$to = "vannavam2015@gmail.com";
	$subject = "New Order - Simple Cart";
	$headers = "From: vannavam2015@gmail.com";
	$headers .= "\r\nMime-Version: 1.0\r\nContent-type: text/plain; charset=utf-8\r\nContent-Transfer-Encoding: quoted-printable";

	try
	{
		$sent = mail($to, $subject, $message, $headers);
	}
	catch(e)
	{
		$sent = false;
	}

	echo json_encode(['success' => $sent]);
?>
