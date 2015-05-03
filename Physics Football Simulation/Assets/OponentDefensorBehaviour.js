#pragma strict

var Parent : Rigidbody;
var Child : Rigidbody;

function Update () {
	transform.position.x = Parent.transform.position.x;
}