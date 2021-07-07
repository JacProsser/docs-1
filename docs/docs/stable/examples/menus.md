
# Menus

<hr>

## Menu
```js
let option = new MessageMenuOption()
    .setLabel('Your Label')
    .setEmoji('🍔')
    .setValue('menuid')
    .setDescription('Custom Description!')
    
let select = new MessageMenu()
    .setID('customid')
    .setPlaceholder('Click me! :D')
    .setMaxValues(1)
    .setMinValues(1)
    .addOption(option)

message.channel.send('Text with menu!', select);
```

<img align="center" alt="Menu Dropdown" src="https://i.imgur.com/ExjEMuO.png"></img>
