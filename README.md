# WP-EE

A JEE type API within WordPress.

## Description

WP-EE is both a framework and a code generation tool. As a framework, WP-EE implements a JEE style API within WordPress. As a code generator, WP-EE is a command line code generation tool that generates WordPress plugins based on the WP-EE API.

## Code Example

```
$entity_data = EntityAPI::get_by_id('customer', 1);

$students = EntityAPI::find_by_criteria('party', array('role' => 'student'));
```

## Motivation

Having worked with JEE in past projects, I had the idea of having a JEE type API in PHP with WordPress as the application server.

## Installation

```
git clone https://github.com/ebanfa/wp-ee.git

```

## Usage

### Options:

```
-c      configuration file
-n      name of the generated WordPress plugin
-t      output directory
```

### Basic usage

```bash
$ ./wp-ee.sh -n wp-essay-writer -t target/ -c config/wp-content.xml
```

## Tests


## Contributors



## License

The MIT License (MIT)

Copyright (c) 2016 Edward Banfa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
