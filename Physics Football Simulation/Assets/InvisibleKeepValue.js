#pragma strict
var invisible : GameObject;
var Velocity : Slider;
var Mass : Slider;
var MassOponent : Slider;
function Start () {

}
function Update(){
	DontDestroyOnLoad(transform.gameObject);
}
function getSValue () {
	invisible.transform.position.x = Velocity.value;
	invisible.transform.position.y = Mass.value;
	invisible.transform.position.z = MassOponent.value;
}