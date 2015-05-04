#pragma strict
var ball : Rigidbody;
var ParentBone : Rigidbody;
var Runner : Rigidbody;
var MoveCamera : GameObject;
var CameraMovement : GameObject;
var slider : GameObject;

function Start () {
}

function Update()
{
	var velocity1 = GameObject.Find ("InvisibleValue").transform.position.x;
	var move1 = velocity1;
	var mass = GameObject.Find ("InvisibleValue").transform.position.z;
	GetComponent.<Rigidbody>().mass = mass;
	transform.Translate (Vector3.forward * move1 * Time.deltaTime);
	MoveCamera.transform.position.z = Runner.transform.position.z;
	CameraMovement.transform.position.z = Runner.transform.position.z;
}

function OnTriggerEnter(other :Collider)
{
	if (other.transform.tag == "Runner & Catcher")
	{
		ball.transform.parent = ParentBone.transform;
		ball.transform.position = ParentBone.transform.position;
		ball.AddForce(-transform.forward * -20000);
		ball.useGravity = false;
	}
}
function OnTriggerExit()
{
	ball.transform.parent = ParentBone.transform;
	ball.transform.position = ParentBone.transform.position;
	ball.AddForce(-transform.forward * 20000);
}
