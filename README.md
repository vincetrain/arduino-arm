# arduino-arm
This project works as a controller for an arduino robotic arm, where it interfaces and controls servo motors attached to the arduino via a React.js frontend.  
If you wish to read about how the code in this repository works, please <a href="https://github.com/vincetrain/arduino-arm/wiki">visit the wiki</a>.

## Usage  
Follow the steps below to run this project:
<ol>
  <li>Flash arduino-arm.ino onto your Arduino Uno R3</li>
  <li>3D print parts for the robotic arm</li>
  <li>Assemble the robotic arm, and install Servo motors to the arm and Arduino following the schematic below</li>
  <li>Power on the Arduino and connect it to your device</li>
  <li>Connect the webapp by either running it locally, or through the <a href="https://vincetrain.github.io/arduino-arm/">Github repository's page</a>, to your Arduino and enjoy</li>
</ol>

### Parts Required
<ul>
  <li><a href="https://thangs.com/designer/HowToMechatronics/3d-model/Robotic%20Arm%203D%20Model-38899">3D printed arm parts, courtesy of HowToMechatronics</a></li>
  <li>3x MG996R Servo Motors</li>
  <li>3x SG90 Micro Servo Motors</li>
  <li>Arduino Uno R3</li>
  <li>External 5V powersupply or greater</li>
  <li>Breadboard, PCB, or another form of electronics connection</li>
</ul>

### Schematic
![Picture of schematic](https://raw.githubusercontent.com/vincetrain/arduino-arm/main/schematic.png)

### Default Pin Layout  
| PIN   | 5     | 6        | 7     | 8          | 9         | 10   |
|-------|-------|----------|-------|------------|-----------|------|
| SERVO | WAIST | SHOULDER | ELBOW | WRIST-AXIS | WRIST-YAW | CLAW |
