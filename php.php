<?php
$gewicht =$_GET["gewicht"];
$lengte=$_GET["lengte_cm"];
BMIcalc($gewicht,$lengte);

function BMIcalc($gewicht,$lengte){
echo "gewicht=".$gewicht;
echo "<br>";
echo "lengte=".$lengte;

$afgerond=$lengte/100;
echo "<br>";
echo "afgerond=".$afgerond;
echo "<br>";
$bmi = $gewicht/($afgerond*$afgerond);

echo "<br>";
echo "bmi=".round($bmi);
}

?>
