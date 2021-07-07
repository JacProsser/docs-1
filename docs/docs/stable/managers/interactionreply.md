# InteractionReply

<hr>

### METHODS

<br>

#### .send(content, [options])
Send a text response to the user.

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| content         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)      |         | no        | The text to send to the user                         |
| options        | [InteractionReplyOptions]()                                                                   | `{}`      | yes       | Optional options to pass to the internal collector |

Returns: [InteractionReply](#)

<hr>


#### .edit(content, [options])
Edits a text response that was sent.

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| content         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)      |         | no        | The text to send to the user                         |
| options        | [InteractionReplyOptions]()                                                                   | `{}`      | yes       | Optional options to pass to the internal collector |


Returns: [InteractionReply](#)

<hr>

#### .defer(ephemeral)
Send a text response to the user.

Returns: [InteractionReply](#)

<hr>

#### .think(ephemeral)
Send a thinking text response to the user.

Returns: [InteractionReply](#)

<hr>

#### .delete()
Deleted the text response that was sent.

Returns: [Message](https://discord.js.org/#/docs/main/stable/class/Message)

<hr>

#### .fetch()
Fetchs the text response object.

Returns: [Message](https://discord.js.org/#/docs/main/stable/class/Message)
