1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

*getElementById : we can find any unique or single element by it from all over the code or html.

*getElementsByClassName : we can get a or multiple elements by class name.

*querySelector: it is also used for getting a single element by class name or id but in case of it, class or id may be one or more but it will gives us an element that it will find at first.

*querySelectorAll: it is used to get all the same named class in an html file.


2. How do you create and insert a new element into the DOM?

*Use document.createElement() to create a new element.

*Set its content using textContent or innerHTML.

*Insert it into the DOM using appendChild() or insertBefore().

3. What is Event Bubbling? And how does it work?
Event Bubbling is a process where an event starts from the target element and then moves up to its parent elements in the DOM.

For example, if you click a button inside a div, the click event will first trigger on the button, then on the parent div, and then on the body.

It is the default behavior of JavaScript events.

4. What is Event Delegation in JavaScript? Why is it useful?
   
*Event Delegation is a technique where you put an event listener on a parent element instead of each child element.

*When a child element triggers the event, it bubbles up to the parent, and you can use event.target to figure out which child was interacted with.

Why is it useful?

*Less code → no need to add separate listeners for each child.

*Handles dynamic elements → works for elements added later.

*Better performance → fewer event listeners in the DOM.

5. What is the difference between preventDefault() and stopPropagation()?
   
preventDefault()
It stops the default behavior of the browser.
For example, it can stop a form from submitting or stop a link from redirecting.

stopPropagation()
It stops the event from moving up to parent elements.
It prevents event bubbling.

Difference:

preventDefault() stops the browser’s default action.
stopPropagation() stops event bubbling.
