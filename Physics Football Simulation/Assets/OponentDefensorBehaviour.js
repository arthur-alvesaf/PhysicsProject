#pragma strict

var Parent : Rigidbody;
var Defensor : Rigidbody;
var tackling = false;

function Start(){
}

function Update () {
	if (GameObject.Find("InvisibleValue") != null)
	{
		var mass = GameObject.Find ("InvisibleValue").transform.position.z;
		GetComponent.<Rigidbody>().mass = mass;
	}
	else
	{
		mass = 100;
		//print("Defender mass assumed 100.");
	}
	
	transform.position.x = Parent.transform.position.x;

	if (tackling == false)
	{
		Defensor.GetComponent.<Animation>().Play("Running");
		Defensor.GetComponent.<Animation>()["Running"].speed = 1;
	}
}

function OnTriggerEnter(tackle : Collider)
{
	if ((tackle.GetComponent.<Rigidbody>().tag == "Runner & Catcher"))
	{
	    //print("nombre:"+tackle.gameObject.name);
	    //print(Defensor.GetComponent.<Animation>().name);
		Defensor.GetComponent.<Animation>().Play("Defense_tackle");
		tackling = true;
	}	
}