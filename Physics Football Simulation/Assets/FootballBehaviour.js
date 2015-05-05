#pragma strict

var ParentBone : GameObject;
var Ball: Rigidbody;
var ReferenceScript : GameObject;

function Start () 
{
	transform.parent = ParentBone.transform;
	Ball.useGravity = false;
}

function Update()
{
	
}

function Throw()
{
	transform.parent = null;
	transform.rotation.y = 2.3;
	transform.rotation.z = 248;
	transform.rotation.x = 45;
	Ball.AddForce(transform.forward * 20000);
	Ball.useGravity = true;
}

function OnTriggerEnter(other : Collider)
{
	var runnerBehaviour: RunnerBehaviour = ReferenceScript.GetComponent("RunnerBehaviour");

	if ((runnerBehaviour.ballInHand == false) && (other.GetComponent.<Rigidbody>().tag == "BallLimit"))
	{
		Application.LoadLevel("StartMenu");	
	}
}