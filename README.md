# discord.js-v14-template

#Prefix
```
const { EmbedBuilder } = require('discord.js');

module.exports = {
    config: {
        name: "", 
        description: "", 
        usage: "" 
    },
    permissions: "", 
    owner: false, 
    run: async (client, message, args, prefix, config) => {

        
    },
};
```

#Slash
```
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "", 
    description: "", 
    type: 1, 
    options: [], 
    permissions: {
        DEFAULT_PERMISSIONS: "", 
        DEFAULT_MEMBER_PERMISSIONS: "" 
    },
    run: async (client, interaction, config) => {

    },
};
```
#Contex
```
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "",
    type: 2, 
    run: async (client, interaction, config) => {


    },
};
```
#Modal

const { EmbedBuilder } = require("discord.js");

module.exports = {
    id: "", 
    run: async (client, interaction, config, db) => {



    },
};
```




