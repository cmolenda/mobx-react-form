# Defining Fields

> If you need to create complex forms, I suggest to use the `Separated Properties` method, as it is more flexible and can be easly extended to manage complex nested fields.

### Fields Props Lifecycle:

`Field Definitions` **>** `Constructor` **>** `Mutate Store` **>** `Component`.

`User Input` **>** `Event Handler` / `Action` **>** `Mutate Store` **>** `Event Hook`.

### Available Props (constructor/init.)

| MODE | PROPS |
|---|---|
| **Unified** | `value`, `label`, `placeholder`, `default`, `initial`, `disabled`, `deleted`, `type`, `related`, `rules`,  `options`, `bindings`, `extra`, `hooks`, `handlers`, `validatedWith`, `validators`, `observers`, `interceptors`, `input`, `output`, `autoFocus`, `inputMode`, `ref`. |
| **Separated** | `fields`, `values`, `labels`, `placeholders`, `defaults`, `initials`, `disabled`, `deleted`, `types`, `related`, `rules`,  `options`, `bindings`, `extra`, `hooks`, `handlers`, `validatedWith`, `validators`, `observers`, `interceptors`, `input`, `output`, `autoFocus`, `inputMode`, `refs`. |


<br>

 * Defining Flat Fields
    * [As Separated Properties](defining-flat-fields/separated-properties.md)
    * [As Unified Properties](defining-flat-fields/unified-properties.md)


 * Defining Nested Fields
    * [As Separated Properties](defining-nested-fields/separated-properties.md)
    * [As Unified Properties](defining-nested-fields/unified-properties.md)
