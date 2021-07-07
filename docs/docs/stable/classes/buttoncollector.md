# ButtonCollector

extends [Collector]()

<hr>
<br>


### Message#createButtonCollector

Creates a button collector.

|PARAMETERS|TYPE|DEFAULT|OPTIONAL|DESCRIPTION|
|--- |--- |--- |--- |--- |
|data|ButtonCollector|-|No|Collects Buttons.|
|filter|CollectorFilter|-|No|The filter function to use.|
|options|AwaitButtonsOptions|{}|Yes|Optional options to pass to the internal collector.|

## Methods

<br>



### [.checkEnd()](https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=stop)

Checks whether the collector should end, and if so, ends it.

Returns: [Void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

-----

### [.empty()](https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=empty)

Empties this reaction collector.

Returns: [Void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

---

### [.endReason()](https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=endReason)

The reason this collector has ended or will end with.

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

### [.resetTimer([options])](https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=resetTimer)

Resets the collectors timeout and idle timer.

Returns: [Void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

---

### [.stop([options])](https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=stop)

Stops this collector and emits the `end` event.

Returns: [Void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

---
