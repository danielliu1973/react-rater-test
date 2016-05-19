# Bug reporting for react-rater v0.3.1

# Reproduce Step
```javascript
npm install
gulp js
httpserver -p 9092
```
And then it shows the error in browser:
![ScreenShot](/screenshots/Error.png)

# What I did to resolve this problem:
```javascript
npm uninstall --save react-rater
npm install --save react-rater@0.3.0
gulp js
```