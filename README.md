# EtLyteT
EtLyteT blockchain

Windows and Linux installation

NPM INSTALL

USAGE: 

Post request send EtLyteT PHP script

<?php
$url = "http://localhost:8080/v1/send/eth";
$data = array("contract" => "0x1d8cA7baf0895Da8afcf153657bE064b5092a274",
	   		  "address" => "YOUR EtLyteT ADDRESS",
	   		  "toaddress"=>"TO EtLyteT ADDRESS",
	   		  "amount" => '1',
	   		  "algo" => "YOUR EtLyteT Private Key", 
	   		  "fees" =>  "1.0",
	   		  "coin" =>  "EtLyteT"
			);
    $data_string = json_encode($data);
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS,
            $data_string);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $response = curl_exec ($ch);
            print_r($response);
            $err = curl_error($ch);  //if you need
            curl_close ($ch);
             $data = json_decode($response);
             print_r($data);
?>

OUTPUT:

Hash:"0X0000000000000000000000000000000000000000000000"


