import {Telegraf} from 'telegraf';

const BOT_TOKEN = '5820129314:AAFxXiHY3Y28OUF32xKudHg2anxb7LfdJt4';

const bot = new Telegraf(BOT_TOKEN);

const START_MESSAGE = `
Привет!

Это бот для заказа еды из ресторана Любимое кафе.

Чтобы открыть меню, нажми на кнопку ☰ в левом нижнем углу. 

Приятного аппетита 😋
`;

bot.start((ctx) => ctx.reply(START_MESSAGE));
bot.help((ctx) => ctx.reply(START_MESSAGE));

bot.launch();
