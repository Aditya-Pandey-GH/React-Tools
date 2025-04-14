# How to use Toast?

**# Note that this Toast component is created using Tailwind CSS. So, you need to install Tailwind CSS first. Also, if you are using any other CSS library ( such as Bootstrap ) in your project, then it may or may not work as intended.**

-   Install Tailwind CSS.

    -   To install Tailwind CSS for Vite, follow the steps 1 to 4 listed on the official website of Tailwind.
    -   To install Tailwind for HTML only, follow the steps 1 to 5 listed on the official website.
    -   To install Tailwind for `PostCSS`, `Tailwind CLI`, or `PlayCDN`, follow the instructions listed under the respective sections.
    -   To install Tailwind for a framework, follow the instructions listed on the `Framework Guides` section inside your preferred framework.
    -   Tailwind CSS official website : [Tailwind CSS for Vite](https://tailwindcss.com/docs/guides/vite)
    -   **# Note that this Theme Toggler is created with reference to v4.0 of Tailwind CSS. If you are using any other version, it may or may not work properly.**

-   Locate the `main.jsx` file in your project.

    -   **# Note that if you are using a framework, you may not find the `main.jsx` file. In such cases, look out for the file, which makes use of `ReactDOM` component. If not present, find the file which initiates the React.**

-   In the `main.jsx` file, wrap the `<App />` tag within `<ToastProvider>` tag.

-   Copy `ToastContext.jsx` file into your project folder.

-   In the file where you want to use the Toast, follow the given below steps:

    -   Import `useToast` hook from `ToastContext.jsx` file.
    -   Call `showToast` method using the `useToast` hook using the command : `const { showToast } = useToast();`
    -   Pass the message to `showToast()`.

**# Edit the `ToastContext.jsx` file as per your project's requirements.**
