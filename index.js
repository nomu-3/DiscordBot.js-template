const Discord = require('discord.js');
const { Client, MessageAttachment } = require('discord.js');
const allInvites = {}

const data = new Map()
const client = new Discord.Client()

 client.on('message', async message => {
if (message.author.bot) return;
if (message.content.startsWith('人が打つコマンド') && message.guild) {
const reply = await message.channel.send('botのメッセージ');
}
})
            client.on('ready', () => {
                console.log('ログイン成功');
            });
client.login('ここにとーくん')
