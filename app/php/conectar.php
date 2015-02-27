<?php
 
//nome do servidor (127.0.0.1)
$servidor = "127.0.0.1";
 
//usuário do banco de dados
$user = "root";
 
//senha do banco de dados
$senha = "root";
 
//nome da base de dados
$db = "teste_rai2";
 
//executa a conexão com o banco, caso contrário mostra o erro ocorrido
$conexao = mysql_connect('localhost','root','') or die (mysql_error());
 
//seleciona a base de dados daquela conexão, caso contrário mostra o erro ocorrido
$banco = mysql_select_db('teste_rai2', $conexao) or die(mysql_error());
 
?>