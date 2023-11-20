# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  To track of our code and make sure it is running the way we want it too
- What is the purpose of events and event handling?
  Event handling is the act of running an event while Events are things that happen in the system you are programming
- Are all possible parameters required to use a JavaScript method or function?
  No unless using extra enforcement
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addevent listner
- What is a callback function?
  A callback function is a function passed into another function as an argument
- What object is passed into an event listener callback when the event fires?
  The event object
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  Is the elemtn at which the next event originated, you could log the event target
- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  The bottom one is a function that will be called while the top is just a function definition

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
