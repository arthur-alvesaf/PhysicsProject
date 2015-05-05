#pragma strict

var Player : Transform;
var MoveCamera : Rigidbody;

function Start () {
}

function Update () {
	MoveCamera.transform.position.z = Player.transform.position.z - 10;
	MoveCamera.transform.position.x = Player.transform.position.x - 8;	
	MoveCamera.transform.position.y = 6;
	MoveCamera.transform.LookAt(Player);
	MoveCamera.transform.Rotate(-9,0,0); 
}