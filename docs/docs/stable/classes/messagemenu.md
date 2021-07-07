# MessageMenu
extends [BaseMessageComponent]()

<br>
<hr>

### METHODS

<br>

#### .addOption(option)
Adds an option to this menu.

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| option         | [MessageMenuOptions](/d/typedef/messagemenuoptions)      |         | no        | The new option that will be added to this menu.                         |

Returns: [MessageMenu](#messagemenu)

<hr>


#### .addOptions(options)
Adds options to this menu.

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| options         | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[MessageMenuOptions](/d/typedef/messagemenuoptions)>      |         | no        | New options that will be added to this menu.                         |

Returns: [MessageMenu](#messagemenu)

<hr>


#### .removeOptions(index, deleteCount, options)
Adds options to this menu.

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| index         | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)      |         | no        | The index of the options that will be removed from this menu.                         |
| deleteCount         | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)      |         | no        |           The count of the options that will be removed from this menu.              |
| options         | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[MessageMenuOptions](/d/typedef/messagemenuoptions)>      |         | no        |  Options that will be removed from this menu.                         |

Returns: [MessageMenu](#messagemenu)

<hr>


#### .setPlaceholder(label)
Sets the placeholder for this menu.

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| label         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)      |         | no        | The label of this menu.                         |

Returns: [MessageMenu](#messagemenu)

<hr>


#### .toJSON()
Transforms this menu to a plain object.

Returns: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
*The raw data of this menu*