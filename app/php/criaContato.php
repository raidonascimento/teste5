<?php
	//chama o arquivo de conexão com o bd
	include("conectar.php");
	$info = $_POST['contatos'];
	$data = json_decode(stripslashes($info));
	
	$nome = $data->nome;
	$sobrenome = $data->sobrenome;
	$endereco= $data->endereco;
	$email = $data->email;
	 
	//consulta sql
	$query = sprintf("INSERT INTO Contatos (nome,sobrenome,endereco, email) values ('%s', '%s','%s', '%s')",
		mysql_real_escape_string($nome),
		mysql_real_escape_string($sobrenome),
		mysql_real_escape_string($endereco),
		mysql_real_escape_string($email));
	$rs = mysql_query($query);
	 
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"contatos" => array(
			"id" => mysql_insert_id(),
			"nome" => $nome,
			"email" => $sobrenome,
			"nome" => $endereco,
			"email" => $email
		)
	));
?>