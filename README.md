# arduino-arm
This project works as a controller for an arduino robotic arm, where it interfaces and controls servo motors attached to the arduino via a React.js frontend.  

![Demo video of arduino-arm](https://github.com/vincetrain/arduino-arm/blob/main/demo.mp4)

## Usage  
Follow the steps below to run this project:
<ol>
  <li>Configure and connect your arduino arm to your device</li>
  <li>Upload "arduino-arm.ino" on to your Arduino device</li>
  <li>Start the web-app or open the Github repository's page</li>
</ol>

### Schematic
![Picture of schematic](https://raw.githubusercontent.com/vincetrain/arduino-arm/main/schematic.png)

### Default Pin Layout  
| PIN   | 5     | 6        | 7     | 8          | 9         | 10   |
|-------|-------|----------|-------|------------|-----------|------|
| SERVO | WAIST | SHOULDER | ELBOW | WRIST-AXIS | WRIST-YAW | CLAW |
