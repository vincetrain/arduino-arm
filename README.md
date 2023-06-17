# arduino-arm
This project works as a controller for an arduino robotic arm, where it interfaces and controls servo motors attached to the arduino via a React.js frontend.  

## Usage  
Follow the steps below to run this project:
<ol>
  <li>Configure and connect your arduino arm to your device</li>
  <li>Upload "arduino-arm.ino" on to your Arduino device</li>
  <li>Start the web-app or open the Github repository's page</li>
</ol>

### Schematic
<embed src="http://github.com/vincetrain/arduino-arm/schematic.pdf">
    <p>This browser does not support PDFs. Please download the PDF to view it: <a href="http://github.com/vincetrain/arduino-arm/schematic.pdf">Download PDF</a>.</p>
</embed>

### Default Pin Layout  
| PIN   | 5     | 6        | 7     | 8          | 9         | 10   |
|-------|-------|----------|-------|------------|-----------|------|
| SERVO | WAIST | SHOULDER | ELBOW | WRIST-AXIS | WRIST-YAW | CLAW |
