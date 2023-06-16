# arduino-arm
This project works as a controller for an arduino robotic arm, where it interfaces and controls servo motors attached to the arduino via a React.js frontend.  

## usage  
Follow the steps below to run this project:
<ol>
  <li>
    Connect your arduino arm pins as follows:  
    | PIN   | 5     | 6        | 7     | 8          | 9         | 10   |
    |-------|-------|----------|-------|------------|-----------|------|
    | SERVO | WAIST | SHOULDER | ELBOW | WRIST-AXIS | WRIST-YAW | CLAW |
  </li>
  <li>Upload "arduino-arm.ino" on to your Arduino device</li>
  <li>Start the web-app using `npm start` in the `/arduino-arm` directory</li>
</ol>
