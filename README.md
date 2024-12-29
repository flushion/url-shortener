## 📦 Application - URL Shortener

### 🚀 Overview
This code represents a JavaScript class `Shortener`, which implements the functionality for shortening URLs. Here's a brief description of its features:

1. **Class Initialization and DOM Structure Creation:**
  - The `Shortener` class is created and initialized upon instantiation.
  - The `initialize()` method sets up the component by creating the DOM structure and setting event handlers.
  - The `createDOM()` method creates the HTML layout for the component, including the form to input the URL and the submit button.

2. **Event Handlers Setup:**
  - The `setupEventListeners()` method sets up event handlers for the form and copy button.

3. **Form Submission Handling:**
  - The `handleSubmit()` method handles the form submission event.
  - The URL value is extracted from the form and validated.
  - If the URL doesn't match the expected format, a warning is shown, and DOM element classes are changed.
  - If the URL is valid, a request is made to shorten the URL using an external API (axios).
  - If the request is successful, the shortened link is displayed in the input field, and DOM element classes are updated.
  - In case of an error, an error message is shown, and classes are changed.

4. **URL Copy Handling:**
  - The `handleCopy()` method handles the copy URL event.
  - If the input field is not empty, the URL is copied to the clipboard, and a success message is shown.

5. **Changing DOM Element Classes:**
  - The `handleChangeClass()` method changes the classes of DOM elements based on the success or failure of the operation.
  - For example, if the operation is unsuccessful, the height of the parent element is increased, and the text of the button in the form is updated.

6. **Creating an Instance of the Class:**
  - At the end of the code, an instance of the `Shortener` class is created, initializing all the component functionality.

The `Shortener` class allows users to input URLs, shorten them, and then copy the shortened links to the clipboard.

---

#### 🌄 Preview:

![URL Shortener Screen](https://linkevych.fr/content/url-shortener/preview.png)


-----

#### 🙌 Author: [@flushion](https://github.com/flushion)