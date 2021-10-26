interface LightApiResponse {
  lightSwitchValue: boolean;
}

async function setLight() {
  const response = await fetch('/light');
  const result : LightApiResponse = await response.json();
  setLightSwitch(result.lightSwitchValue);
}