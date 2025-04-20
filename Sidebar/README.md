# How to use Sidebar?

**# Note that this Sidebar is created using `Tailwind CSS v4.0`. So, you need to install `Tailwind CSS` first, by following the steps given in the `README.md` file of the `main` repository. Also, if you are using any other version of Tailwind CSS or some other CSS library ( such as Bootstrap ) in your project, then it may or may not work as intended.**

-   Locate the `index.html` file ( which is the primary HTML file ) in your project.

    -   **# Note that if you are using frameworks such as `NextJS`, you may not find the `index.html` file. In such cases, look out for the file, which contains the `<html>` tag. In case of `NextJS`, it is located in `app/layout.js` file.**

-   Copy `Separator.jsx` and either one of `Sidebar1.jsx` or `Sidebar2.jsx` or `Sidebar3.jsx` files into your project folder, and use it as you want.

-   If you are using `Sidebar3.jsx`, you need to make some optional changes for better user experience:
    -   Add a margin-left of `6rem` or `96px` to the main content. For example, I have added `ml-24` class to the `<main>` tag of `App.jsx`, here.
    -   Add `::-webkit-scrollbar {width: 0;}` to the `index.css` stylesheet to hide the scrollbar, which can otherwise look ugly.
    -   **Note that these steps are completely optional**

**# Edit the `Sidebar1.jsx` or `Sidebar2.jsx` or `Sidebar3.jsx` file as per your project's requirements.**
