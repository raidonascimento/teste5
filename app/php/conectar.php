<?php
 
//nome do servidor (127.0.0.1)
$servidor = "127.0.0.1";
 
//usu�rio do banco de dados
$user = "root";
 
//senha do banco de dados
$senha = "root";
 
//nome da base de dados
$db = "teste_rai2";
 
//executa a conex�o com o banco, caso contr�rio mostra o erro ocorrido
$conexao = mysql_connect('localhost','root','') or die (mysql_error());
 
//seleciona a base de dados daquela conex�o, caso contr�rio mostra o erro ocorrido
$banco = mysql_select_db('teste_rai2', $conexao) or die(mysql_error());
 
?>