#pragma strict
var ball : Rigidbody;
function Update () {
	var moveSpeed = 5f;
	transform.Translate (-Vector3.forward * moveSpeed * Time.deltaTime);
}

function ThrowBall(){
	var Ball : FootballBehaviour = ball.GetComponent("FootballBehaviour");
	Ball.Throw();
}