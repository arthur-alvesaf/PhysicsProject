using UnityEngine;
using System.Collections;

public class RunnerBehaviour : MonoBehaviour {
	float moveSpeed = 15f;

	// Update is called once per frame
	void Update () {
			transform.Translate (Vector3.forward * moveSpeed * Time.deltaTime);
	}
}
