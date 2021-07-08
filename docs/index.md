---
home: true
heroText: null
tagline: null
actionText: null
actionLink:
---

<div align="center">
  <h1>discord-buttons</h1>
  <p>
    <a href="https://www.npmjs.com/package/discord-buttons"><img src="https://img.shields.io/npm/v/discord-buttons?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/discord-buttons"><img src="https://img.shields.io/npm/dt/discord-buttons?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://www.npmjs.com/package/discord-buttons"><img src="https://nodei.co/npm/discord-buttons.png?downloads=true&stars=true" alt="NPM Banner"></a>
  </p>
</div>
<div align="center">
  <img alt="Main Example" src="https://i.imgur.com/ZnJ7LGd.png">
  <br> <br>
</div>

### Installation
```sh
npm i discord-buttons
```

### Setup
```js
const discord = require('discord.js'); //Define the discord.js module
const client = new discord.Client(); //Creating discord.js client (constructor)
require('discord-buttons')(client);
```
#### then
```js
const disbut = require('discord-buttons');

let button = new disbut.MessageButton()
  .setLabel('This is a button!')
  .setID('myid')
  .setStyle('blurple');

message.channel.send('Message with a button!', button);
```

### Typescript
```ts
import disbut from 'discord-buttons';
disbut(client);
```
#### then
```js
let button = new disbut.MessageButton()
  .setLabel('This is a button!')
  .setID('myid')
  .setStyle('blurple');
```

### Examples
View handy examples on how to get started [Examples](./docs/stable/examples/buttons).
If you have any other problems/questions, you can join our [Support Server!](https://discord.gg/5JtyYqW)

### Contact
Ask for help in our discord server: [discord.gg/src](https://discord.gg/src)
###### Invite didn't work?, use [discord.gg/5JtyYqW](https://discord.gg/5JtyYqW)
