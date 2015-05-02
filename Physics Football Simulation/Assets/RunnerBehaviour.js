#pragma strict
var ball : Rigidbody;
var ParentBone : GameObject;

function Start () {
	
}

function Update () 
{
	var moveSpeed = 10f;
	transform.Translate (Vector3.forward * moveSpeed * Time.deltaTime);
}

function OnTriggerEnter()
{
	var MoveSpeed = 5f;
	ball.AddForce(-transform.forward * MoveSpeed * 2000);
	ball.transform.parent = ParentBone.transform;
	ball.transform.position = ParentBone.transform.position;
	ball.useGravity = false;
}