"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalDeployCommands = void 0;
const log4js = require('log4js');
const dotenv = require('dotenv');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const logger = log4js.getLogger();
class LocalDeployCommands {
    token;
    clientId;
    guildId;
    constructor() {
        logger.debug("Reading clientId, guildId and token from .env file...");
        logger.level = "ALL";
        this.token = process.env.DISCORD_TOKEN;
        this.clientId = process.env.CLIENT_ID;
        this.guildId = process.env.GUILD_ID;
        logger.debug("Succesfully read clientId, guildId and token from .env file!");
    }
    registerCommands() {
        logger.debug("Registering slash commands...");
        logger.debug("Succesfully registered slash commands!");
    }
}
exports.LocalDeployCommands = LocalDeployCommands;