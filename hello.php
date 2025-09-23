<?php
header('Content-Type: application/json; charset=utf-8');
http_response_code(200);

$name = $_GET['name'] ?? 'World';
echo json_encode([
  'message' => "Hello, $name",
  'timestamp' => date('c')
], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);