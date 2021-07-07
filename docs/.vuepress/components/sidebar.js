const sidebar = {
  '/docs/stable/': [
    {
      title: 'Getting Started',
      collapsable: false,
      children: [
        './getting-started/installation',
        './getting-started/setup',
        './getting-started/FAQ'
      ]
    },
    {
      title: 'Examples',
      children: [
        './examples/buttons',
        './examples/menus',
        './examples/reply',
      ]
    },
    {
      title: 'Classes',
      children: [
        './classes/message',
        './classes/messagebutton',
        './classes/messagemenu',
        './classes/messagemenuoption',
        './classes/messageactionrow',
        './classes/messagecomponent',
        './classes/buttoncollector'
      ]
    },
    {
      title: 'Events/Collectors',
      children: [
        './events/clickbutton',
      ]
    },
    {
      title: 'Managers',
      children: [
        './managers/interactionreply.md',
      ]
    },
  ]
};

module.exports = sidebar;
