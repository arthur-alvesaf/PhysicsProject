using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class Meh2 : MonoBehaviour {
	public string sliderText = "0";
	public Text slidertext;
	
	public void TextUpdate(float UpdateNumber){
		sliderText = UpdateNumber.ToString() + " kg";
		slidertext.text = sliderText;
	}
}