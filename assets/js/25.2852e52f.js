(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{423:function(t,e,s){"use strict";s.r(e);var r=s(19),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),s("h4",{attrs:{id:"how-can-i-remove-a-button-from-a-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-remove-a-button-from-a-message"}},[t._v("#")]),t._v(" How can I remove a button from a message?")]),t._v(" "),s("p",[t._v("A: At the moment, Discord API doesn't support that, but still you can edit your message and make the button "),s("RouterLink",{attrs:{to:"/docs/stable/classes/messagebutton.html#setdisabled-boolean"}},[t._v("disabled")]),t._v("!")],1),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"i-received-the-interaction-failed-error-why"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#i-received-the-interaction-failed-error-why"}},[t._v("#")]),t._v(" I received "),s("code",[t._v("The interaction failed")]),t._v(" error, why?")]),t._v(" "),s("p",[t._v("A: It takes time for the Discord API and your bot to make connection, so maybe you have to put the user on wait. (for that you need to defer your button)\n"),s("RouterLink",{attrs:{to:"/docs/stable/managers/interactionreply.html#defer-ephemeral"}},[t._v("defer")]),t._v(" needs to be on clickButton Event!")],1),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"i-received-unknown-interaction-error-why"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#i-received-unknown-interaction-error-why"}},[t._v("#")]),t._v(" I received "),s("code",[t._v("Unknown interaction")]),t._v(" error, why?")]),t._v(" "),s("p",[t._v("A: As I said earlier, it takes time for Discord API and your bot to make connection. But however, putting the user on wait has more than 1 ways ("),s("RouterLink",{attrs:{to:"/docs/stable/classes/buttoninteraction.html#defer-ephemeral"}},[t._v("defer")]),t._v(", "),s("RouterLink",{attrs:{to:"/docs/stable/managers/interactionreply.html#send-content-options"}},[t._v("reply")]),t._v(", "),s("RouterLink",{attrs:{to:"/docs/stable/managers/interactionreply.html#think-ephemeral"}},[t._v("think")]),t._v(") and this error means you are putting the user on wait with more than only 1 way!")],1),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"button-clicker-user-returns-null-why"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#button-clicker-user-returns-null-why"}},[t._v("#")]),t._v(" "),s("code",[t._v("button.clicker.user")]),t._v(" returns null, why?")]),t._v(" "),s("p",[t._v("A: It takes time to resolve "),s("a",{attrs:{href:"https://discord.js.org/#/docs/main/stable/class/User",target:"_blank",rel:"noopener noreferrer"}},[t._v("User"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://discord.js.org/#/docs/main/stable/class/GuildMember",target:"_blank",rel:"noopener noreferrer"}},[t._v("GuildMember"),s("OutboundLink")],1),t._v(" so, you need to fetch them!")]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clicker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("if that doesn't work, make sure to enable "),s("a",{attrs:{href:"https://discord.com/developers/docs/topics/gateway#gateway-intents",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intents"),s("OutboundLink")],1),t._v(" From "),s("a",{attrs:{href:"https://discord.com/developers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord Developers Portal"),s("OutboundLink")],1),t._v(" and in your "),s("a",{attrs:{href:"https://discord.js.org/#/docs/main/stable/class/Intents",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord.js"),s("OutboundLink")],1)]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"what-is-an-ephemeral-reply-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-an-ephemeral-reply-type"}},[t._v("#")]),t._v(" What is an ephemeral reply type?")]),t._v(" "),s("p",[t._v("A: Ephemeral type makes the message only visible to the person who clicked the button. (Ephemeral will only work with "),s("RouterLink",{attrs:{to:"/docs/stable/classes/buttoninteraction.html#reply"}},[t._v("Button#InteractionReply")]),t._v(", so keep that in mind)")],1),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"my-button-is-not-redirecting-to-the-url-why"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#my-button-is-not-redirecting-to-the-url-why"}},[t._v("#")]),t._v(" My button is not redirecting to the URL, why?")]),t._v(" "),s("p",[t._v("A:")]),t._v(" "),s("p",[s("code",[t._v("1-)")]),t._v(" Make sure you have at least "),s("strong",[t._v("v12.5.3")]),t._v(" "),s("a",{attrs:{href:"https://discord.js.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("discord.js"),s("OutboundLink")],1),t._v(" client. ("),s("code",[t._v("npm i discord.js@latest")]),t._v(")")]),t._v(" "),s("p",[s("code",[t._v("2-)")]),t._v(" Make sure to install the "),s("strong",[t._v("latest")]),t._v(" version of "),s("RouterLink",{attrs:{to:"/"}},[t._v("discord-buttons")]),t._v(". ("),s("code",[t._v("npm i discord-buttons@latest")]),t._v(")")],1),t._v(" "),s("p",[s("code",[t._v("3-)")]),t._v(" Make sure you have your "),s("RouterLink",{attrs:{to:"/docs/stable/classes/messagebutton.html#setstyle-style"}},[t._v("style")]),t._v(" as "),s("code",[t._v("url")]),t._v(" and don't have any "),s("RouterLink",{attrs:{to:"/docs/stable/classes/messagebutton.html#setid-id"}},[t._v("id")]),t._v(" for your button!")],1),t._v(" "),s("p",[s("code",[t._v("4-)")]),t._v(" Make sure to set the url with "),s("RouterLink",{attrs:{to:"/docs/stable/classes/messagebutton.html#seturl-url"}},[t._v("setURL")]),t._v(" function without any kind of intrupting characters. And also make sure to have everything that a url requires in "),s("RouterLink",{attrs:{to:"/docs/stable/classes/messagebutton.html#seturl-url"}},[t._v("setURL")]),t._v(" (e.g. "),s("code",[t._v("https://")]),t._v(" "),s("code",[t._v("http://")]),t._v(" "),s("code",[t._v(".com")]),t._v(")")],1),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setURL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://google.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("hr"),t._v(" "),s("h4",{attrs:{id:"the-class-prototype-returned-from-or-sending-object-object-how-can-i-solve-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-class-prototype-returned-from-or-sending-object-object-how-can-i-solve-it"}},[t._v("#")]),t._v(" The class/prototype returned from.... or sending [object Object], how can I solve it?")]),t._v(" "),s("p",[t._v("A:")]),t._v(" "),s("p",[s("code",[t._v("1-)")]),t._v(" This error can mean you didn't setup our module properly (you should require the module next to your "),s("a",{attrs:{href:"https://discord.js.org/#/docs/main/stable/class/Client",target:"_blank",rel:"noopener noreferrer"}},[t._v("Client"),s("OutboundLink")],1),t._v(" and pass your "),s("a",{attrs:{href:"https://discord.js.org/#/docs/main/stable/class/Client",target:"_blank",rel:"noopener noreferrer"}},[t._v("Client"),s("OutboundLink")],1),t._v(" to it)")]),t._v(" "),s("p",[s("code",[t._v("2-)")]),t._v(" You are sending embeds/texts with buttons in a wrong formation")]),t._v(" "),s("p",[s("strong",[t._v("For example:")]),t._v(" You have an object that has same properties as "),s("a",{attrs:{href:"https://discord.js.org/#/docs/main/stable/class/MessageEmbed",target:"_blank",rel:"noopener noreferrer"}},[t._v("MessageEmbed"),s("OutboundLink")],1),t._v(" but the type is just object and it's not "),s("a",{attrs:{href:"https://discord.js.org/#/docs/main/stable/class/MessageEmbed",target:"_blank",rel:"noopener noreferrer"}},[t._v("MessageEmbed"),s("OutboundLink")],1),t._v(".\nSo you can just Convert your object to "),s("a",{attrs:{href:"https://discord.js.org/#/docs/main/stable/class/MessageEmbed",target:"_blank",rel:"noopener noreferrer"}},[t._v("MessageEmbed"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageEmbed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YOUR_OBJECT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("code",[t._v("3-)")]),t._v(" And if that's not the option, you maybe sending in a wrong formation.\nYou need to pass the embed as embed and your button as button in your object")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("P.S")])]),t._v(": If you have more than one button, you need to send them with "),s("RouterLink",{attrs:{to:"/docs/stable/classes/messageactionrow.html"}},[t._v("MessageActionRow")]),t._v(".")],1),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"why-this-is-not-working-i-m-using-this-repo-pr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-this-is-not-working-i-m-using-this-repo-pr"}},[t._v("#")]),t._v(" Why this is not working? I'm using this repo/PR...")]),t._v(" "),s("p",[t._v("A: PR's and Customized Repo/PR's (even suggested in "),s("a",{attrs:{href:"https://discord.com/channels/748098690874474567/846758592706117702/850638180288954399",target:"_blank",rel:"noopener noreferrer"}},[t._v("#faq"),s("OutboundLink")],1),t._v(") can be buggy, and we don't support that and it's just a temporary solution.\nYou can use at your own risk or wait for updates.")]),t._v(" "),s("h4",{attrs:{id:"my-button-is-not-showing-up-i-did-everything-right"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#my-button-is-not-showing-up-i-did-everything-right"}},[t._v("#")]),t._v(" My Button is not Showing up, I did everything right.")]),t._v(" "),s("p",[t._v("A: Sometimes you guys put the "),s("code",[t._v("clickButton")]),t._v(" "),s("a",{attrs:{href:"https://nodejs.org/api/events.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("event"),s("OutboundLink")],1),t._v(" on the command file, alternatively known as your message "),s("a",{attrs:{href:"https://nodejs.org/api/events.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("event"),s("OutboundLink")],1),t._v(" and that can cause some problems like that,\nif you don't know how events work, you can read more "),s("a",{attrs:{href:"https://www.w3schools.com/nodejs/nodejs_events.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(" if you don't know how events work.")])])}),[],!1,null,null,null);e.default=o.exports}}]);