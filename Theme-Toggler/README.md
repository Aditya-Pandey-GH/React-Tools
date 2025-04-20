# How to use Theme Toggler?

**# Note that this Theme Toggler is created using `Tailwind CSS v4.0`. So, you need to install `Tailwind CSS` first, by following the steps given in the `README.md` file of the `main` repository. Also, if you are using any other version of Tailwind CSS or some other CSS library ( such as Bootstrap ) in your project, then it may or may not work as intended.**

-   Locate the `index.html` file ( which is the primary HTML file ) in your project.

    -   **# Note that if you are using frameworks such as `NextJS`, you may not find the `index.html` file. In such cases, look out for the file, which contains the `<html>` tag. In case of `NextJS`, it is located in `app/layout.js` file.**

-   In the `index.html` file, locate the `<html>` tag, and add `class="bg-white dark:bg-neutral-900 text-black dark:text-white transition-colors duration-300 ease-in-out"` to the tag.

    -   Change the bg and text colors for light and dark mode individually, according to your project's color scheme.
    -   Change the transition duration and timing function as per your project's requirements.

-   Locate `index.css` file ( which is the primary CSS file ) in your project.

-   In the `index.css` file, locate `@import "tailwindcss";`, and paste `@custom-variant dark (&:where(.dark, .dark *));` right below the import statement.

-   Copy `ThemeToggle.jsx` file into your project folder, and use it as you want.

**# Edit the `ThemeToggle.jsx` file as per your project's requirements.**
