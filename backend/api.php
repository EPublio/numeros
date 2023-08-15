<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost:3000");

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    $number = rand(0, 100);
    echo json_encode(['number' => $number]);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents("php://input"), true);

    if (isset($data['number']) and is_numeric($data['number'])) {
        $number = $data['number'];

        $conteudo = "$number\n";

        if(!file_exists('numeros.txt'))
            file_put_contents('numeros.txt',$conteudo, FILE_APPEND);

        file_put_contents('numeros.txt', $conteudo, FILE_APPEND);
        http_response_code(201);
        echo json_encode(['msg' => 'Número salvo com sucesso!']);
    } else {
        http_response_code(400);
        echo json_encode(['msg' => 'Número inválido!']);
    }
}
?>