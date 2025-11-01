# JavaScript-DOM-Classwork

## Project Goal

To fully master the DOM API, including efficient element access, event handling, manipulation of attributes, and page structure, with an emphasis on pure (Vanilla) JavaScript implementation.

## Repository Structure (Resume Focus)

The repository is logically divided into two primary sections for ease of study and review: **Core Concept Notes** and **Practical Applications**.

### Section 1: Core Concepts & Theory

Covered Topics (Digital Notes):

* **Element Access:** Selection methods (`access.js`).
* **Attributes & Classes:** Managing attributes (`attributes.js`) and class lists (`classList.js`).
* **Element Creation:** Dynamically creating and inserting new nodes (`createElement.js`).
* **Event Handling:** Event listeners, delegation, and the event object (`events.js`).
* **Event Lifecycle:** Event bubbling and capturing (`bubblingCapturing.js`).
* **Custom Data:** Working with `data-*` attributes (`dataAttr.js`).
* **Data Fetching:** Basic examples of data fetching (e.g., using the Fetch API) (`dataFetching.js`).
* **Practice Tasks:** Various mini-tasks (`task1.js`).

### Section 2: Applied Mini-Projects

These are implemented components that use DOM manipulation to create interactivity.

**1. 🍔 Burger Menu (burger/)**

* **Demonstration:** Implementation of a responsive menu that toggles open/closed on click, using `classList.toggle` and CSS transitions.

**2. 🏞️ Image Slider (slider/)**

* **Demonstration:** Creation of a basic image slider with "next/previous" controls and visibility management.

**3. 🛑 Event Bubbling and stopPropagation Demo (stopProgDemo/)**

* **Demonstration:** A practical example illustrating **Event Bubbling** and the use of `event.stopPropagation()` to prevent the event from propagating to parent elements. In this example, clicking the icon does not activate the click handler on the article.
