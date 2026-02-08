import { Bot } from "grammy";
import dotenv from "dotenv";

dotenv.config();

const token = process.env.BOT_TOKEN;
const url = process.env.BASE_URL;

if (!token) {
  throw new Error("BOT_TOKEN is missing in environment variables");
}

const bot = new Bot(token);

bot.command("start", async (ctx) => {
  await ctx.reply(
    "Welcome 👋\n" +
      "This is the UniPay bot.\n" +
      "I help you send crypto from multiple wallets and tokens in one payment using LI.FI Composer.\n\n" +
      "👉 Check /help for further details",
  );
});

bot.command("help", async (ctx) => {
  await ctx.reply(
    `🤖 <b>UniPay Bot – Help</b>

Here’s what I can help you with 👇

🔐 <b>/set_primary_wallet</b>
Set your main wallet address. This wallet defines your default identity for payments.

💼 <b>/add_secondary_wallet</b>
Add additional wallets that can be used to fund a single payment together.

⚙️ <b>/set_receive_preferences</b>
Choose which token and blockchain you want to receive payments in.

💸 <b>/pay</b>
Send crypto to another user using multiple wallets and tokens in one transaction.

📊 <b>/status</b>
Check your current wallet setup and payment configuration.

ℹ️ Need help with a command? Just type it to get started.`,
    { parse_mode: "HTML" },
  );
});

bot.command("set_primary_wallet", async (ctx) => {
  await ctx.reply(
    "🔐 Connecting to your wallet...\n\n" +
      "Click the button below to connect your MetaMask wallet.",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "🔗 Connect MetaMask",
              url: `${url}/connect?tg_id=` + ctx.from?.id,
            },
          ],
        ],
      },
    },
  );
});

bot.on("message", async (ctx) => {
  const message = ctx.message; // the message object
  console.log(message);
});

bot.start();
