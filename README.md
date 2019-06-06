# EtLyteT
EtLyteT blockchain

Windows and Linux installation

NPM INSTALL

USAGE: 

Post request send EtLyteT PHP script

<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_PORT => "8080",
  CURLOPT_URL => "http://localhost:8080/v1/send/eth",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\n\t\"contract\":\"0x1d8cA7baf0895Da8afcf153657bE064b5092a274\",\n\t\"address\":\"YOUR EtLyteT ADDRESS\",\n\t\"algo\":\"YOUR EtLyteT Private Key\",\n\t\"toaddress\":\"TO EtLyteT ADDRESS\",\n\t\"amount\":\"1\",\n\t\"fees\":\"6.0\",\n\t\"coin\":\"EtLyteT\"\n}",
  CURLOPT_HTTPHEADER => array(
    "Content-Type: application/json",
    "cache-control: no-cache"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}

OUTPUT:

Hash:"0X0000000000000000000000000000000000000000000000"

RUN Command:

node server.js


