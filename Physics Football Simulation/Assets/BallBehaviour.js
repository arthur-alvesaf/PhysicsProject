#pragma strict

function Start () {
	
}
function Update () {
	var speed = 10f;
	transform.Rotate(0,0, -speed * Time.deltaTime);  
}