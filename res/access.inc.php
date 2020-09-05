<?php

// Users data
$imSettings['access']['users'] = array(
	'example@example.com' => array(
		'id' => '7sol1n7n',
		'groups' => array('5a9pzzs5'),
		'firstname' => 'Admin',
		'lastname' => '',
		'password' => '$2a$11$ayZ0OeNZopO.HvHVEE9/w./BZ6m0wOCp1FlN/PHY8mtVn2WPECe96',
		'crypt_encoding' => 'csharp_bcrypt',
		'db_stored' => false,
		'page' => false
	)
);

// Admins list
$imSettings['access']['admins'] = array('7sol1n7n');

// Page/Users permissions
$imSettings['access']['pages'] = array();

// PASSWORD CRYPT

$imSettings['access']['password_crypt'] = array(
	'encoding_id' => 'php_default',
	'encodings' => array(
		'no_crypt' => array(
			'encode' => function ($pwd) { return $pwd; },
			'check' => function ($input, $encoded) { return $input == $encoded; }
		),
		'php_default' => array(
			'encode' => function ($pwd) { return password_hash($pwd, PASSWORD_DEFAULT); },
			'check' => function ($input, $encoded) { return password_verify($input, $encoded); }
		),
		'csharp_bcrypt' => array(
			'encode' => function ($pwd) { return password_hash($pwd, PASSWORD_BCRYPT); },
			'check' => function ($input, $encoded) { return password_verify($input, $encoded); }
		)
	)
);

// End of file access.inc.php