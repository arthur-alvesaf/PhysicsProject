using UnityEngine;
using System.Collections;

public class PlayerBehaviour : MonoBehaviour {

	float moveSpeed = 5f;

	void Update () 
	{
			transform.Translate (-Vector3.forward * moveSpeed * Time.deltaTime);
	}
}