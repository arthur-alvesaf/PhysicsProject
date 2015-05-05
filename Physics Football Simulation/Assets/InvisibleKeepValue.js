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
	GameObject.Find("InvisibleValue").transform.position.x = Velocity.value;
	GameObject.Find("InvisibleValue").transform.position.y = Mass.value;
	GameObject.Find("InvisibleValue").transform.position.z = MassOponent.value;
}