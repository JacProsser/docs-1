
# Buttons

<hr>

## Normal Buttons
```js
let button = new MessageButton()
  .setStyle('red')
  .setLabel('My First Button!') 
  .setID('click_to_function') 
  .setDisabled();

message.channel.send('Hey, i am powered by https://npmjs.com/discord-buttons', button);
```

<img align="center" src="https://i.imgur.com/KvNEWQo.png"></img>

<hr>

## URL Buttons
```js
let button = new MessageButton()
  .setStyle('url')
  .setURL('https://npmjs.com/discord-buttons') 
  .setLabel('My First URL Button!') 
  .setDisabled(); 

message.channel.send('Hey, i am powered by https://npmjs.com/discord-buttons', button);
```
<b>P.S:</b> You need to Change your `style` to `url`, you don't have `id` for this kind of buttons too, and also make sure you have your URL in button with `setURL` and URL is valid.

<img align="center" src="https://i.imgur.com/wferaQc.png"></img>

<hr>

## Multiple Buttons
```js
let button = new MessageButton()
  .setStyle('red')
  .setLabel('My First Button!') 
  .setID('click_to_function') 
  .setDisabled();

let button2 = new MessageButton()
  .setStyle('blurple')
  .setLabel('Second Cool Button!') 
  .setID('second_button_function') 
  .setDisabled();

let row = new MessageActionRow()
  .addComponents([button1, button2])

message.channel.send('Hello World!', components: [row]);
```

<img align="center" src="https://i.imgur.com/VyhpPvA.png"></img>