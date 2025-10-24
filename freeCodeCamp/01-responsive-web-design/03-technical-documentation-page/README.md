# Build a Technical Documentation Page

## Objective
Build an app that is functionally similar to [freeCodeCamp's Technical Documentation Page](https://technical-documentation-page.freecodecamp.rocks).  
Do not copy the demo project.

---

## User Stories

1. You can see a `main` element with a corresponding `id="main-doc"`, which contains the page's main content (technical documentation).

2. Within the `#main-doc` element, you can see several `section` elements, each with a class of `main-section`. There should be a minimum of **five**.

3. The first element within each `.main-section` should be a `header` element containing text that describes the topic of that section.

4. Each `section` element with the class of `main-section` should also have an `id` that corresponds with the text of its header.  
   Any spaces should be replaced with underscores.  
   Example:  
   The section that contains the header `"JavaScript and Java"` should have `id="JavaScript_and_Java"`.

5. The `.main-section` elements should contain at least **ten `<p>` elements total** (not per section).

6. The `.main-section` elements should contain at least **five `<code>` elements total** (not per section).

7. The `.main-section` elements should contain at least **five `<li>` items total** (not per section).

8. You can see a `nav` element with a corresponding `id="navbar"`.

9. The `navbar` element should contain one `header` element that describes the topic of the technical documentation.

10. Additionally, the `navbar` should contain `a` (link) elements with the class of `nav-link`.  
    There should be one `nav-link` for every `.main-section` element.

11. The `header` element in the `#navbar` must come **before** any link (`a`) elements in the navbar.

12. Each element with the class of `nav-link` should contain text that corresponds to the header text within each section.  
    Example: If you have a `"Hello world"` section/header, your navbar should have a link containing the text `"Hello world"`.

13. When you click on a navbar element, the page should navigate to the corresponding section of the `#main-doc` element.  
    Example: Clicking a `.nav-link` with the text `"Hello world"` should navigate to the section with `id="Hello_world"`.

14. On regular-sized devices (laptops, desktops), the element with `id="navbar"` should be shown **on the left side** of the screen and should **always be visible** to the user.

15. Your technical documentation should use at least **one media query**.

---

## Notes

- Fulfill all user stories and pass all tests to complete this project.  
- Give the project your **own personal style**.  
- To apply your CSS, link your stylesheet in the HTML head:

```html
<link rel="stylesheet" href="styles.css">
