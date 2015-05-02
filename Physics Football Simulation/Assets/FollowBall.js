#pragma strict

var Parent : Rigidbody;
var Child : GameObject;

function Start () {	
	transform.parent = Parent.transform;
	transform.position.z = Parent.transform.position.z;
}

function Update () {

}