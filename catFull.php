<?php

header("Content-Type: text/html; charset=utf-8");


$cat_URL = "https://api.thecatapi.com/v1/images/search";
$api_key = "live_C2vlS36F9hnDrSLfIwlB5wYu2fzJ6caon2vGFV5G3aZlOH2WxauYKfkZunon3gzG";

$options = [
    "http" => [
        "header" => "x-api-key: $api_key"
    ]
];

$context = stream_context_create($options);
$response = file_get_contents($cat_URL, false, $context);

$data = json_decode($response, true);

$cat_image_url = $data[0]['url'];

// Display the image

echo "<h1>Here's a random cat!</h1>";
echo "<img src='" . htmlspecialchars($cat_image_url) . "' alt='Random Cat' style='max-width: 600px;'>";

echo "</br>" . json_encode($data);
?>
