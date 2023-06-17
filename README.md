# arduino-arm
This project works as a controller for an arduino robotic arm, where it interfaces and controls servo motors attached to the arduino via a React.js frontend.  

## Usage  
Follow the steps below to run this project:
<ol>
  <li>Configure and connect your arduino arm to your device</li>
  <li>Upload "arduino-arm.ino" on to your Arduino device</li>
  <li>Start the web-app or open the <a href="https://vincetrain.github.io/arduino-arm/">Github repository's page</a></li>
</ol>

### Schematic
![Picture of schematic](https://raw.githubusercontent.com/vincetrain/arduino-arm/main/schematic.png)

### Default Pin Layout  
| PIN   | 5     | 6        | 7     | 8          | 9         | 10   |
|-------|-------|----------|-------|------------|-----------|------|
| SERVO | WAIST | SHOULDER | ELBOW | WRIST-AXIS | WRIST-YAW | CLAW |
