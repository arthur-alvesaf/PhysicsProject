#pragma strict

var ParentBone : GameObject;
var ParentBoneR : GameObject;
var Runner : Rigidbody;
var Ball: Rigidbody;

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
	transform.rotation = ParentBone.transform.rotation;
	transform.rotation.x = -45;

	Ball.AddForce(transform.forward * -20000);
	Ball.useGravity = true;
}