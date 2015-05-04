#pragma strict
var ball : Rigidbody;
var ParentBone : Rigidbody;
var Runner : Rigidbody;
var Defensor : Rigidbody;
var touchdown = false;
var ballInHand = false;
var falling = false;

function Start () {
}

function Update()
{	
	if(GameObject.Find("InvisibleValue") != null)
	{
		var velocity1 = GameObject.Find ("InvisibleValue").transform.position.x;
		var move1 = velocity1;
		var mass = GameObject.Find ("InvisibleValue").transform.position.y;
		GetComponent.<Rigidbody>().mass = mass;
	}
	else
	{
		move1 = 10;
		mass = 100;
		print("Runner velocity assumed 10.");
		print("Runner mass assumed 100.");
	}
	
	if(touchdown == false)
	{
		transform.Translate (Vector3.forward * move1 * Time.deltaTime);
	}
	else
	{
		transform.Translate (Vector3.forward * 2f * Time.deltaTime);
		
		if (Runner.GetComponent.<Animation>().IsPlaying("Touchdown") == false)
		{
			Application.LoadLevel("StartMenu");
		}
	}
	
	if ((falling == true) && (Runner.GetComponent.<Animation>().IsPlaying("Runner_fall") == false))
	{
		Application.LoadLevel("StartMenu");
	}
}

function OnTriggerEnter(other : Collider)
{	
	if (other.GetComponent.<Rigidbody>().tag == "Ball")
	{
		ballInHand = true;
		ball.transform.parent = ParentBone.transform;
		ball.transform.position = ParentBone.transform.position;
		ball.transform.rotation.y = (ParentBone.transform.localRotation.y + 90);
		ball.useGravity = false;
	}
	if (other.GetComponent.<Rigidbody>().tag == "Defensor")
	{
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		var random = Random.Range(1, 3);
		if (random == 1){
			Runner.GetComponent.<Animation>().Play("Runner_pass");
		}
		if (random == 2){
			Runner.GetComponent.<Animation>().Play("Runner_fall");
			falling =  true;
		}
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	}
	if (other.GetComponent.<Rigidbody>().tag == "Endzone")
	{
		Runner.GetComponent.<Animation>().Play("Touchdown");
		Runner.GetComponent.<Animation>()["Touchdown"].speed = 2;
		touchdown = true;
	}
}

function OnTriggerExit()
{
	ball.transform.parent = ParentBone.transform;
	ball.transform.position = ParentBone.transform.position;
	ball.AddForce(-transform.forward * -20000);
}
