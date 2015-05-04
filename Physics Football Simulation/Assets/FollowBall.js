#pragma strict

var QB: Rigidbody;
var Ball : Rigidbody;
var Player : Rigidbody;
var MoveCamera : GameObject;
var CameraMovement : GameObject;
var ReferenceScript : GameObject;
var xPos = -10;

function Update(){
	var runnerBehaviour: RunnerBehaviour = ReferenceScript.GetComponent("RunnerBehaviour");
	
	if(runnerBehaviour.ballInHand == false)
	{
		CameraMovement.transform.position.z = Ball.transform.position.z;
		MoveCamera.transform.position.z = Ball.transform.position.z;
		CameraMovement.transform.position.x = xPos;	
	}
	else
	{
		CameraMovement.transform.position.z = Player.transform.position.z;
		MoveCamera.transform.position.z = Player.transform.position.z;
	}
}