
# Reply

<hr>

## Defer
```js
await button.reply.defer()
```
<img align="center" alt="Button Defering" src="https://i.imgur.com/JieAKFB.png"></img>

<hr>

## Think
```js
await button.reply.think()
//To make your reply only send to the user who clicked the button, add true to the options param
await button.reply.think(true)
```

<img align="center" alt="Button Thinking" src="https://i.imgur.com/JrnoaTe.png"></img>

<hr>

## Send
```js
await button.reply.send('This is content replied!')
//To make your reply only send to the user who clicked the button, add true to the options param
await button.reply.send('This is content replied!', true)
```

<img align="center" alt="Content Sent" src="https://i.imgur.com/90kiO6D.png"></img>

<hr>

## Edit
```js
await button.reply.edit('I edited the previous content! ~o.o~')
```

<img align="center" alt="Content Edited" src="https://i.imgur.com/aIzXnib.png"></img>

