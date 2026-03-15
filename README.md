# Personal Portfolio Website (Week 1 - HTML)

## Project Overview

This project is a simple personal portfolio website created using HTML5.
The goal of this project is to understand the basic structure of a web page and practice using HTML elements such as headings, paragraphs, images, links, lists, and forms.

The website contains three main sections:

* About
* Skills
* Contact

This portfolio demonstrates how a basic website can be structured using semantic HTML tags.

---

## Objectives

The objectives of this project are:

* Learn the structure of an HTML document
* Understand HTML tags and elements
* Practice creating sections in a webpage
* Build a simple contact form
* Use semantic HTML elements for better page organization

---

## Technologies Used

* HTML5
* Visual Studio Code
* Web Browser (Chrome / Edge / Firefox)

---

## Setup Instructions

1. Install **Visual Studio Code**.
2. Download or clone this repository.
3. Open the project folder in Visual Studio Code.
4. Open the file `index.html`.
5. Run the file in a browser.

You can open it by:

* Right clicking `index.html`
* Selecting **Open with Live Server** or opening directly in a browser.

---

## Project Structure

portfolio-website
│
├── index.html
├── README.md
└── images
  └── profile.jpg

Explanation:

* **index.html** – Main HTML file containing the website structure
* **images/** – Folder containing the profile image used in the portfolio
* **README.md** – Documentation explaining the project

---

## HTML Concepts Used

### HTML Document Structure

The project uses the standard HTML5 structure:

* `<!DOCTYPE html>`
* `<html>`
* `<head>`
* `<body>`

### Semantic HTML

Semantic tags improve readability and structure of the webpage.

Used tags:

* `<header>` – Contains the title and navigation menu
* `<nav>` – Contains internal navigation links
* `<main>` – Main content of the page
* `<section>` – Divides the page into different sections
* `<footer>` – Contains copyright information

### Lists

The **Skills section** uses an unordered list (`<ul>`) to display skills.

### Images

A profile image is added using the `<img>` tag with an `alt` attribute.

### Forms

The contact section contains a form with:

* Name input field
* Email input field
* Message textarea
* Submit button

Basic validation is applied using the `required` attribute.

### Internal Navigation

Navigation links use anchor tags (`<a>`) with section IDs to allow users to jump to different sections of the page.

Example:

`<a href="#about">About</a>`

---

## Visual Documentation

Screenshots of the portfolio website are included showing:

* Homepage with navigation
* About and Skills sections
* Contact form

---

## Testing Evidence

The website was tested by opening `index.html` in a browser.

Test Cases:

1. Navigation links correctly move to the respective sections.
2. Profile image loads properly.
3. Skills list displays correctly.
4. Contact form accepts user input.
5. Required validation prevents submitting empty fields.

---

## Technical Details

This project focuses on HTML page structure and layout.

Since the project only uses HTML, **no algorithms or data structures are involved**. The architecture is a simple static webpage with structured semantic elements.

---

## Conclusion

This project helped in understanding the fundamentals of HTML including page structure, semantic tags, forms, images, and navigation. It demonstrates how a basic portfolio website can be created using only HTML.
