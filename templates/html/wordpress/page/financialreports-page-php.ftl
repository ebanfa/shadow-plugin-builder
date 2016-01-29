<?php
//require('fpdf.php');
ob_start();
$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Courier','B',16);
$pdf->Cell(40,10,'Hello World!');
$pdf->Output();
ob_end_flush(); 
?>