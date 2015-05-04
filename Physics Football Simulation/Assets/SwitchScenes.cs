using UnityEngine;
using System.Collections;

public class SwitchScenes : MonoBehaviour {
	public GameObject invisible;
	// Use this for initialization
	public void ChangeScenes (string ScenesChanges) {
		Application.LoadLevel (ScenesChanges);
		DontDestroyOnLoad (invisible);
	}
}
