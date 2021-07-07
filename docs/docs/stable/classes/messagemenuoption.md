# MessageMenuOption
extends [BaseMessageComponent]()

<br>
<hr>

### METHODS

<br>

#### .setLabel(label)
Adds a label to the option.

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| label         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)      |         |         | The label/title of this option.                         |

Returns: [MessageMenuOption](#messagemenuoption)

<hr>


#### .setValue(value)
Adds an ID to the option.

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| value         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)      |         | no        | An unique ID to identify this option.                         |

Returns: [MessageMenuOption](#messagemenuoption)

<hr>


#### .setDescription(value)
Adds a description to the option.

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| value         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)      |         |         | A description of the option.                         |

Returns: [MessageMenuOption](#messagemenuoption)

<hr>


#### .setEmoji(emoji, animated)
Sets the placeholder for this menu.

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| emoji         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)      |         |         | An emoji to add to this option.                         |
| animated         | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)      |         |         | Wether or not if the emoji is animated                         |

Returns: [MessageMenuOption](#messagemenuoption)

<hr>

#### .setDefault()
Sets this as the default option.

Returns: [MessageMenuOption](#messagemenuoption)

<hr>


#### .toJSON()
Transforms this menuoption to a plain object.

Returns: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
*The raw data of this menuoption*