<?php 

$name = "Hasib";
echo "$name taught me how to PHP<br/>";

echo "<b> Go to this Link </b> <br/>";

$x = 1.3;
$y = 4;
$z = false;

echo $x + $y;
echo "<br/>";

var_dump($x*1000);
echo "<br/>";

var_dump($z);
echo "<br/>";

$a = array("meow", "whoff", "moo");

echo $a[0], " ", strlen($a[0]);
echo "<br/>";

echo strrev($a[1]), " ", strpos($a[2], "moo");
echo "<br/>";

var_dump($a);
echo "<br/>";

$x = null;
var_dump($x);

?>
