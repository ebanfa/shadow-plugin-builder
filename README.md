## Synopsis

WP-EE is both a framework and a code generation tool. As a framework WP-EE implements a JEE style API within WordPress. As a code generator, WP-EE is a command line code generation tool that generates WordPress plugins based on the WP-EE API.

## Code Example

```
$entity_data = EntityAPI::get_by_id('customer', 1);

$students = EntityAPI::find_by_criteria('party', array('role' => 'student'));
```

## Motivation

Having worked with JEE in past projects, I was awed by its power and simplicity (EJB 3.0 upwards that is).

## Installation

Provide code examples and explanations of how to get the project.

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

Describe and show how to run the tests with code examples.

## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

## License

A short snippet describing the license (MIT, Apache, etc.)
