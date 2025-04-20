# How to use AudioPlayer?

**# Note that this Sidebar is created using `Tailwind CSS v4.0`. So, you need to install `Tailwind CSS` first, by following the steps given in the `README.md` file of the `main` repository. Also, if you are using any other version of Tailwind CSS or some other CSS library ( such as Bootstrap ) in your project, then it may or may not work as intended.**

-   Install all the dependencies mentioned in package.json:

    -   FontAwesome
    -   music-metadata

-   Locate the `index.html` file ( which is the primary HTML file ) in your project.

    -   **# Note that if you are using frameworks such as `NextJS`, you may not find the `index.html` file. In such cases, look out for the file, which contains the `<html>` tag. In case of `NextJS`, it is located in `app/layout.js` file.**

-   Copy `AudioPlayer.jsx` and `AudioPlayer.css` file into your project folder, and use it as you want.

-   Create a list of audio files in the file where you are using `AudioPlayer`, and pass that in the `sources` property.

-   Properties with their default values are given below :

    -   sources = [] // List of all the audio files
    -   seekTime = 10 // Forward and Backward seek time (in seconds)

**# Edit the `AudioPlayer.jsx` and `AudioPlayer.css` file as per your project's requirements.**
