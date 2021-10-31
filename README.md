**_ First Project - Creating my Portfolio _**

This portofolio is designed for potential employers or collaborators to find out more information about who I am, the skills set I possess and the projects I have worked on.

---

# Code from other sources

I used a mixtures of online turtorials and website to support me to craft my portofolio. These include:
[Flexbox CSS in 20 minutes](https://www.youtube.com/watch?v=JJSoEo8JSnc),
[Smooth Scroll](https://www.youtube.com/watch?v=MNNr7TU7XcU),
[Bootstrap]

---

# Challenges Faced

- **Creating my Repository** - The main challenge I faced was creating my repository on GitHub and linking it to my code. With the support of my mentor, I was able to begin to understand what I had done incorrectly and what I needed to do to recify it.

- **Aligning text** - Another challenge I faced was aligning the text on the 'About' page to ensure that the text was aligned to the right and the photo was aligned to the left. Once I created div classes with the section tab, I was able to align the text using CSS.

- **Contact Page** - Once I had added a home button to each page, I found that my Contact page realigned. My mentor supported me to disciver that I had a missing div tag.

### Interesting Bugs or Problems

- **Burger icon when overlay menu is triggered** - As the header (including the burger icon) is part of the page, it disappears when the user scrolls down while the overlay menu is triggered. The user then has to scroll back to the top of the page for the burger icon to reappear while the overlay menu is triggered. This is another constraint, and I will fix this bug when I learn JavaScript, so that the header remains fixed, only when the overlay menu is triggered.
- **Band card images** - The images automatically take up 100% of the card width, so they appear stretched. I have tried to make the images take up less of the card width, but this throws the alignment out, and it doesn't look as tidy with the scroll bars. This is a constraint and I've decided to leave the images as they are.
- **'dates' attribute** - For the discography timeline, I used the sample code from the code used within the Resume mini project. The sample code used the `dates` attribute. However, the [W3C HTML Validator tool](https://validator.w3.org/#validate_by_input) stated that this was invalid. When I looked on Slack, I saw that another student had the same issue, and the advice they received was to use the `data-year` attribute instead. I tried this and it resolved the issue.
- **'Submit' button on _Book Us_ form** - Once I entered the information and submitted the form, the form kept routing me through to the index.html page. After speaking with my mentor, he asked me to check the value of the `action` attribute of the `<form>` element. The issue was that the value I was using was `action="/"`. Once I changed this to `action="contact.html"` the issue was resolved.
- **'Submit' button on _Book Us_ form** - Once I entered the information and submitted the form, I kept getting a '405 Not Allowed' error message, but this was only happening in the live environment and not the testing environment. I posted this in the Slack community and was given the advice to change the `method` value to `get` instead of `post`. This resolved the error.
