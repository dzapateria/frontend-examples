<?php
include 'Persona.php';

$cliente1 = new Persona('Jaime');
$cliente2 = new Persona('Roberto');

echo "Se registro $cliente1->name";
echo "<br>";
echo "Se registro $cliente2->name";