"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init = void 0;
const dotenv = require('dotenv').config();
const { Client, Intents } = require('discord.js');
const log4js = require('log4js');
const logger = log4js.getLogger();
//Main Class
class Init {
    token;
    //Reading token from .env file
    constructor() {
        logger.debug("Reading discord token from .env file...");
        logger.level = "ALL";
        this.token = process.env.DISCORD_TOKEN;
        logger.debug("Constructed initialize class and read discord bot token.");
    }
    //MAIN START FUNCTION
    start() {
        logger.debug("Attempting to create a new client instance...");
        const client = new Client({
            intents: [Intents.FLAGS.GUILDS]
        });
        client.once('ready', () => {
            logger.info("Sucessfully logged into discord!");
        });
        logger.debug("Authenticating your clients token...");
        client.login(this.token);
    }
}
exports.Init = Init;