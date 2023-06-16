#include <Servo.h>

Servo servos[6];
// YELLOW: CLAW
// WHITE: WRIST-AXIS
// ORANGE: WRIST-YAW
// PINK: ELBOW

const int servos_defaultPos[6] = {90, 120, 180, 0, 0, 170};

int servos_savedPos[6];
int servos_currPos[6];
int servos_wishPos[6];

int pinOffset = 5;
int msdelay = 20;

String dataIn = "";

void setup()
{
	pinMode(LED_BUILTIN, OUTPUT);
	pinMode(0, INPUT);
	pinMode(1, OUTPUT);
	Serial.begin(38400);

	delay(300);

	initServos();
	restorePos(servos_defaultPos);
}

void loop()
{
	// put your main code here, to run repeatedly:
	if (Serial.available() > 0)
	{
		dataIn = Serial.readString();
		Serial.println("Received: \"" + dataIn + "\"");
		if (dataIn == "RESET")
		{
			Serial.println("Resetting Servos...");
			restorePos(servos_defaultPos);
      Serial.println("Done.");
		}
		else if (dataIn.substring(0, 5) == "WRITE")
		{
			Serial.println("Writing to Servos...");
			convertDataToWishPos(dataIn.substring(5));
      moveServos();
      Serial.println("Done.");
		}
		else if (dataIn == "BLINK")
		{
			Serial.println("Blinking onboard LED...");
			digitalWrite(LED_BUILTIN, HIGH);
			delay(1000);
			digitalWrite(LED_BUILTIN, LOW);
			delay(1000);
			digitalWrite(LED_BUILTIN, HIGH);
			delay(1000);
			digitalWrite(LED_BUILTIN, LOW);
      Serial.println("Done.");
		}
	}

	delay(100);
}

void convertDataToWishPos(String data)
{
  String tempStr = data;
  int savedIndex = 0;

  for (int i = 0; i < sizeof(servos_wishPos)/sizeof(servos_wishPos[0]); i++)
  {
    String chunk_before = tempStr.substring(savedIndex);
    tempStr = chunk_before;
    savedIndex = chunk_before.indexOf(",")+1;
    String chunk_after = chunk_before.substring(0, chunk_after.length()+2);
    servos_wishPos[i] = chunk_after.toInt();
  }
}

void moveServos()
{
  for (int i = 0; i < sizeof(servos)/sizeof(servos[0]); i++)
  {
    Serial.println("Writing " + String(i) + ": " + String(servos_currPos[i]) + " --> " + String(servos_wishPos[i]));

    int dir = servos_currPos[i] - servos_wishPos[i]> 0 ? -1 : 1;
    while (servos_currPos[i] != servos_wishPos[i])
    {
      servos_currPos[i] += dir;
      servos[i].write(servos_currPos[i]);
      delay(msdelay);
    }
  }
}

void initServos()
{
	int currentPin = pinOffset;

	for (int i = 0; i < sizeof(servos) / sizeof(servos[0]); i++)
	{
		servos[i].attach(currentPin);
		currentPin++;
	}
}

void restorePos(int posArr[])
{
	for (int i = 0; i < sizeof(servos) / sizeof(servos[0]); i++)
	{
		servos[i].write(posArr[i]);
		servos_currPos[i] = posArr[i];
	}
}