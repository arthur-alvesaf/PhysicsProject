#pragma strict
var ball : Rigidbody;
var ParentBone : Rigidbody;
var Runner : Rigidbody;
var Defensor : Rigidbody;
var touchdown = false;
var ballInHand = false;
var falling = false;
var afterTouchSpeed = 2f;
var mass = 0;
var mass2 = 0;

function Start () {
}

function Update()
{	
	if(GameObject.Find("InvisibleValue") != null)
	{
		var velocity1 = GameObject.Find ("InvisibleValue").transform.position.x;
		var move1 = velocity1 * 3;
		mass = GameObject.Find ("InvisibleValue").transform.position.y;
		mass2 = GameObject.Find ("InvisibleValue").transform.position.z;
		
		GetComponent.<Rigidbody>().mass = mass;
	}
	else
	{
		move1 = 10;
		mass = 100;
		//print("Runner velocity assumed 10.");
		//print("Runner mass assumed 100.");
	}
	
	if(touchdown == false)
	{
		transform.Translate (Vector3.forward * move1 * Time.deltaTime);
	}
	else
	{
		transform.Translate (Vector3.forward * afterTouchSpeed * Time.deltaTime);
		ballInHand = false;
		
		if (Runner.GetComponent.<Animation>().IsPlaying("Touchdown") == false)
		{
			Application.LoadLevel("StartMenu");
		}
	}
	
	if ((falling == true) && (Runner.GetComponent.<Animation>().IsPlaying("Runner_fall") == false))
	{
		Application.LoadLevel("StartMenu");
	}
	
	if (ballInHand == true)
	{
		ball.transform.position = ParentBone.transform.position;
	}
}

function OnTriggerEnter(other : Collider)
{
	if ((ballInHand == false) && (other.GetComponent.<Rigidbody>().tag == "Ball"))
	{
		ball.transform.parent = ParentBone.transform;
		ball.transform.position = ParentBone.transform.position;
		ball.transform.rotation.y = (ParentBone.transform.localRotation.z + 90);
		
		ball.AddForce(-transform.forward * -20000);

		ball.useGravity = false;
		ballInHand = true;
	}
	if (other.GetComponent.<Rigidbody>().tag == "Defensor")
	{
		if ( (1.5*mass > mass2) && (mass2 < 120) ){
			yield WaitForSeconds(.3);
			Runner.GetComponent.<Animation>().Play("Runner_pass");
			Runner.GetComponent.<Animation>()["Runner_pass"].speed = 1.5;
		}
		else
		{
			Runner.GetComponent.<Animation>().Play("Runner_fall");
			Runner.GetComponent.<Animation>()["Runner_fall"].speed = 2;
			falling =  true;
		}
	}
	if ((other.GetComponent.<Rigidbody>().tag == "Endzone") && (ballInHand == true))
	{
		touchdown = true;
		ball.GetComponent.<ConstantForce>() == 0;
		ball.transform.position = ParentBone.transform.position;
		ball.transform.parent = null;
		ball.useGravity = true;
		
		Runner.GetComponent.<Animation>().Play("Touchdown");
		Runner.GetComponent.<Animation>()["Touchdown"].speed = 2;
		yield WaitForSeconds(2);
		afterTouchSpeed = .4;
	}
}