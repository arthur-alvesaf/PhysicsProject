#pragma strict

var QB: Rigidbody;
var Ball : Rigidbody;
var MoveCamera : GameObject;
var CameraMovement : GameObject;


function Update(){
	CameraMovement.transform.position.z = Ball.transform.position.z;
	MoveCamera.transform.position.z = Ball.transform.position.z;
	CameraMovement.transform.position.x = -10;
}