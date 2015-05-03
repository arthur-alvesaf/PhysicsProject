#pragma strict
var ball : Rigidbody;
var ParentBone : Rigidbody;
var Runner : Rigidbody;
var MoveCamera : GameObject;
var CameraMovement : GameObject;

function Start () {
	
}

function Update () 
{
	var moveSpeed = 10f;
	transform.Translate (Vector3.forward * moveSpeed * Time.deltaTime);
	MoveCamera.transform.position.z = Runner.transform.position.z;
	CameraMovement.transform.position.z = Runner.transform.position.z;
}

function OnTriggerEnter()
{
	ball.transform.parent = ParentBone.transform;
	ball.transform.position = ParentBone.transform.position;
	ball.AddForce(-transform.forward * -20000);
	ball.useGravity = false;
}
function OnTriggerExit()
{
	ball.transform.parent = ParentBone.transform;
	ball.transform.position = ParentBone.transform.position;
	ball.AddForce(-transform.forward * 20000);
}