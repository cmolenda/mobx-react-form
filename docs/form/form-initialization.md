# Form Initialization

The Form Constructor can take 2 arguments in input.

* [First Constructor Argument](#first-constructor-argument)
* [Second Constructor Argument](#second-constructor-argument)


* [Constructor Usage](#constructor-usage)
* [Initialization Methods](#initialization-methods)
* [Execute code on Form Init](../events/event-hooks.md#execute-code-on-instance-init)

---

## First Constructor Argument

The first argument represent the fields data with their props.

Provide an object which expects the following properties:

###### Fields Definition
| Property | Description | Help |
|---|---|---|
| **struct**    | Define fields structure as an array of strings representig the fields (dot notation ad array notation can be used) | - |
| **fields**    | Using **Unified Properties Definition** mode: an object which represents the fields with all their properties. Using **Separated Properties Definition** mode: an array of strings which represents the fields structure. | [defining fields](../fields/) |

###### Fields Properties
| Property | Description | Help |
|---|---|---|
| **values**    | Object which represents the `value`property for each field key. | [flat](../fields/defining-flat-fields/separated-properties.md#defining-values) or [nested](../fields/defining-nested-fields/separated-properties.md#defining-nested-values) |
| **computed**    | Object which represents the `computed` value for each field key. | [computed](../extra/computed-props.md) |
| **labels**    | Object which represents the `label` property for each field key. | [flat](../fields/defining-flat-fields/separated-properties.md#defining-labels) or [nested](../fields/defining-nested-fields/separated-properties.md#defining-nested-property) |
| **placeholders**    | Object which represents the `placeholder` property for each field key. | [flat](../fields/defining-flat-fields/separated-properties.md#defining-placeholders) or [nested](../fields/defining-nested-fields/separated-properties.md#defining-nested-property) |
| **initials**  | Initial values to apply on init if the value prop is not provided. | [flat](../fields/defining-flat-fields/separated-properties.md#defining-initials) or [nested](../fields/defining-nested-fields/separated-properties.md#defining-nested-property) |
| **defaults**  | Object which represents the `default` property for each field key. | [flat](../fields/defining-flat-fields/separated-properties.md#defining-defaults) or [nested](../fields/defining-nested-fields/separated-properties.md#defining-nested-property) |
| **disabled**  | Object which represents the `disabled` property for each field key. | [flat](../fields/defining-flat-fields/separated-properties.md#defining-disabled) or [nested](../fields/defining-nested-fields/separated-properties.md#defining-nested-property) |
| **related**  | Object which represents the `related` property to validate others fields at the same time for each field key. | [flat](../fields/defining-flat-fields/separated-properties.md#defining-related) or [nested](../fields/defining-nested-fields/separated-properties.md#defining-nested-property) |
| **options**  | Individual Field Options, with fallback on Form Options. | [flat](../fields/defining-flat-fields/separated-properties.md#defining-options) or [nested](../fields/defining-nested-fields/separated-properties.md#defining-nested-property) |
| **extra**  | Additional extra data for the field (useful for a select input). | [flat](../fields/defining-flat-fields/separated-properties.md#defining-extra) or [nested](../fields/defining-nested-fields/separated-properties.md#defining-nested-property) |
| **bindings**  | The name of the binding rewriter or template which will be used for the current field. | [flat](../fields/defining-flat-fields/separated-properties.md#defining-bindings) or [nested](../fields/defining-nested-fields/separated-properties.md#defining-nested-property) |
| **observers**  | The mobx observers to listen on **Fields Props** or **Fields Map** changes. | [help](../extra/mobx-events.md#using-observers--interceptors-objects) |
| **interceptors**  | The mobx interceptors to listen on **Fields Props** or **Fields Map** changes. | [help](../extra/mobx-events.md#using-observers--interceptors-objects) |
| **validatedWith**  | Specify a different **Field Prop** to use for the Field validation. | - |
| **autoFocus**  | Set this to `true` on the first field to be focused on form `initialization` | - |
| **inputMode**  | Define the input mode of the field, accepted values: `none`, `text`, `decimal`, `numeric`, `tel`, `search`, `email`, `url` | - |
| **classes**  | The classes used to instantiate the field. It must extend the mobx-react-form Field class | [flat](./extend/configure.md#separated-definition) or [nested](../fields/defining-nested-fields/separated-properties.md#defining-nested-property) |

###### Fields Event Hooks & Event Handlers
| Property | Description | Help |
|---|---|---|
| **hooks**  | An object with the Event Hooks functions. Availables Hooks: `onInit`, `onChange`, `onToggle`, `onFocus`, `onBlur`, `onDrop`, `onSubmit`, `onSuccess`, `onError`, `onClear`, `onReset`, `onAdd`, `onDel`, `onKeyUp`, `onKeyDown` | [help](../events/event-hooks.md) |
| **handlers**  | An object with the Event Handlers functions: Availables Handlers: `onChange`, `onToggle`, `onFocus`, `onBlur`, `onDrop`, `onSubmit`, `onClear`, `onReset`, `onAdd`, `onDel`, `onKeyUp`, `onKeyDown` | [help](../events/event-handlers.md) |

###### Validation Properties
| Property | Description | Help |
|---|---|---|
| **validators**  | The validation functions for the **VJF** mode. | [VJF](../validation/plugins/VJF/setup.md) |
| **rules**    | The rules for the validation (if **DVR** mode is active). | [DVR](../validation/plugins/DVR/setup.md) |

> Validate fields according to the choosen [validation plugin](https://foxhound87.github.io/mobx-react-form/docs/validation/plugins.html)

## Second Constructor Argument

The second argument represents the form plugins and options.

Provide an object which expects the following properties:

| Property | Description | Help |
|---|---|---|
| **options**   | Options used by the `form` or the imported `plugins` which may alter the validation behavior. | [Form Options](form-options.md) |
| **plugins**   | Enable additional functionalities using external libraries. | [Validation Plugins](../validation/plugins.md) |
| **bindings**   | Define how the fields properties are passed to the input components. | [Props Bindings](../bindings/README.md) |

###### Form Event Hooks & Event Handlers
| Property | Description | Help |
|---|---|---|
| **hooks**  | An object with the Event Hooks functions. Availables Hooks: `onInit`, `onSubmit`, `onSuccess`, `onError`, `onClear`, `onReset`, `onAdd`, `onDel` | [help](../events/event-hooks.md) |
| **handlers**  | An object with the Event Handlers functions. Availables Handlers: `onSubmit`, `onClear`, `onReset`, `onAdd`, `onDel` | [help](../events/event-handlers.md) |

<br>

## Constructor Usage

> You can mix all the objects you need

``` javascript
import Form from 'mobx-react-form';

... // define all needed objects

// using unified fields properties definition
new Form({ fields });

// using validators with plugins, bindings and unified fields properties definition
new Form({ fields }, { plugins, bindings });

// using form options and separated fields properties definition
new Form({ values, labels, handlers, ... }, { options });

// using validators with plugins and separated fields properties definition
new Form({ values, labels, handlers, rules, ... }, { plugins });

// etc...
```

## Initialization Methods
#### setup(), options(), plugins(), bindings(), handlers(), hooks().

Normally you have to pass the fields properties to the constructor, otherwise you can implement one of these methods above inside your extended Form Class.

For example, using the `setup()` method you can define the fields properties:

```javascript
import Form from 'mobx-react-form';

class MyForm extends MobxReactForm {

  setup() {
    // same of: new MyForm({ fields, values, labels,  ... });
    return { fields, values, labels, ... };
  }
}
```

> The methods have to return an object with all needed props/data.

This can be done with `options`, `plugins`, `bindings`, `handlers` and `hooks` as well.

> The object returned from the methods will be merged to the object provieded to the constructor when initializing the instance.

