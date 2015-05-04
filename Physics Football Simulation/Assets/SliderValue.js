#pragma strict
import UnityEngine.UI;
/*
function SliderValue () {
	var svalue = GetComponent<Slider>().value;
}*/

function getSValue(){
	var svalue = GameObject.Find ("Slider 1").GetComponent (UnityEngine.UI.Slider);
	var n = svalue.value;

	return n;
}