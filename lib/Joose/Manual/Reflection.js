/**

NAME
====

Joose.Manual.Reflection - The Joose reflection API


INTRODUCTION
============

Joose provides a powerful reflection API, which allows you fully introspect classes, attributes, methods, and so on.

These introspection methods are also handy if you want to generate docs or inheritance graphs, or do some other runtime reflection.

This document is currently not a complete reference for the introspection API. We're just going to cover some of the highlights, and give you a sense of how it all works. 
To really understand it, you'll have to read a other docs, or may be examine sources. 


GETTING STARTED
===============

The usual entry point to the meta API is through a class's metaclass instance, which is a Joose.Meta.Class. This is available by accessing the `meta` property on a class or instance:

Class('User', {
    ...
})

var user = new User()

var meta = User.meta
-or-
var meta = user.meta


USING THE METACLASS INSTANCE
============================

The metaclass instance can tell you about a class's attributes, methods, roles, parent, and more. For example, to scan through all of the class's attributes:

meta.getAttributes().each(function(attribute) {
    //some processing
})

The get_all_attributes method is documented in Class.MOP.Class. For Joose-using classes, it returns a list of Joose.Meta.Attribute objects for attributes defined in the class and its parents.

You can also get a list of methods:

  for my $method ( $meta->get_all_methods ) {
      print $method->fully_qualified_name, "\n"
  }

Now we're looping over a list of Joose.Meta.Method objects. Note that some of these objects may actually be a subclass of Joose.Meta.Method, as Joose uses different classes to represent wrapped methods, delegation methods, constructors, etc.

We can look at a class's parent classes and subclasses:

  for my $class ( $meta->linearized_isa ) {
      print "$class\n"
  }

  for my $subclass ( $meta->subclasses ) {
      print "$subclass\n"
  }

Note that both these methods return class names, not metaclass objects.
ALTERING CLASSES WITH THE MOP ^

The metaclass object can change the class directly, by adding attributes, methods, etc.

As an example, we can add a method to a class:

  $meta->add_method( 'say' => sub { print @_, "\n" } )
Or an attribute:

  $meta->add_attribute(
      name => 'size',
      is   => 'rw',
      isa  => 'Int',
  )
Obviously, this is much more cumbersome than using Perl syntax or Joose sugar for defining methods and attributes, but this API allows for very powerful extensions.

You might remember that we've talked about making classes immutable elsewhere in the manual. This is a good practice. However, once a class is immutable, calling any of these update methods will throw an exception.

You can make a class mutable again simply by calling $meta->make_mutable. Once you're done changing it, you can restore immutability by calling $meta->make_immutable.

However, the most common use for this part of the meta API is as part of Joose extensions. These extensions should assume that they are being run before you make a class immutable.
GOING FURTHER ^

If you're interested in extending Joose, we recommend reading all of the "Meta" and "Extending" recipes in the Joose.Cookbook. Those recipes show various practical applications of the MOP.

If you'd like to write your own extensions, one of the best ways to learn more about this is to look at other similar extensions to see how they work. You'll probably also need to read various API docs, including the docs for the various Joose.Meta.* classes and the Class.MOP distribution.

Finally, we welcome questions on the Joose mailing list and IRC. Information on the mailing list, IRC, and more references can be found in the Joose.pm docs.

AUTHOR
======

Nickolay Platonov [nickolay8@gmail.com](mailto:nickolay8@gmail.com)

Heavily based on the original content of Moose::Manual, by Dave Rolsky [autarch@urth.org](mailto:autarch@urth.org)


COPYRIGHT AND LICENSE
=====================

Copyright (c) 2008, Malte Ubl

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name of Malte Ubl nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 

*/