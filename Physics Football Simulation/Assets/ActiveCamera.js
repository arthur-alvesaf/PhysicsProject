#pragma strict
var cam1 : Camera;
var cam2 : Camera;
var ReferenceScript : GameObject;
var touch = false;

function Start () {
	cam1.enabled = true;
	cam2.enabled = false;
}

function Update () {
	var runnerBehaviour: RunnerBehaviour = ReferenceScript.GetComponent("RunnerBehaviour");
	if (touch == false)
	{
		if (runnerBehaviour.touchdown == true)
		{
			cam1.enabled = !cam1.enabled;
			cam2.enabled = !cam2.enabled;
			touch = true;
		}
	}
}