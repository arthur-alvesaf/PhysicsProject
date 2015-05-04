using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class Meh : MonoBehaviour {
	public string sliderText = "0";
	public Text slidertext;

	public void TextUpdate(float UpdateNumber){
		sliderText = UpdateNumber.ToString() + " m/s";
		slidertext.text = sliderText;
	}
}
