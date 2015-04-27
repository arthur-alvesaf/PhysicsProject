using UnityEngine;
using System.Collections;

public class PlayerBehaviour : MonoBehaviour {

	float moveSpeed = 5f;

	bool move = true;

	void Update () {

		if (move == true) {
			transform.Translate (-Vector3.forward * moveSpeed * Time.deltaTime);
			if (transform.position.z >= -5) {
				GetComponent<Animation> ().PlayQueued ("BallThrow");
				GetComponent<Animation> ().PlayQueued ("DefaultTake");
			}
			else
			{
				move = false;
			}
		}
	}
}