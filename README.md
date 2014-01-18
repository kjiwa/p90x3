# P90X3

## Summary

This is a simple web application that I wrote to help me stay on track with P90X3. It will highlight your progress as you work through the schedule, give you details about your upcoming workouts, and display a video of your current workout when the page is loaded.

## Build

I used Grunt to automate my build. If you already have Node.js installed then you can build the project with the following commands:

```sh
$ npm install
$ node node_modules/grunt-cli/bin/grunt
```

This will place `index.html`, `p90x3.css`, and `p90x3.js` in the `out/` subdirectory. Just open `index.html` to start the application -- no web server is required.

Place your videos (in MP4 or OGV format) in this subdirectory to enable video support. The videos should use names such as those listed below:

* accelerator.mp4
* agility-x.mp4
* cvx.mp4
* etc.

## Demo

See a live demo (without videos) at http://jsbin.com/OkadaHow/1/.

## Screenshot

![ScreenShot](https://raw.github.com/kjiwa/p90x3/master/p90x3-20140118.png)
