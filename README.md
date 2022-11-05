ember-cli-randomcolor
==============================================================================

A simple add-on for generating random colors


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-randomcolor
```


Usage
------------------------------------------------------------------------------

Inject the `randomColor` service, and called the `generate()` method.

```javascript
class MyController extends Controller {
  @service
  randomColor;
  
  @tracked 
  colors;
  
  @action
  generate () {
    this.colors = this.randomColor.generate ();
  }
}
```

### Advanced Usage

This add-on is a wrapper for the [randomColor](https://github.com/davidmerfield/randomColor) package.
The `generate()` method therefore takes an `options` parameter, which are the same options for `randomColor()`.


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
