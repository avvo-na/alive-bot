const log4js = require('log4js');
const dotenv = require ('dotenv');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const logger = log4js.getLogger();


export class LocalDeployCommands {
    private readonly token: string;
    private readonly clientId: string;
    private readonly guildId: string;

    constructor() {
        logger.debug("Reading clientId, guildId and token from .env file...");
        logger.level = "ALL";

        this.token = process.env.DISCORD_TOKEN;
        this.clientId = process.env.CLIENT_ID;
        this.guildId = process.env.GUILD_ID;
        logger.debug("Succesfully read clientId, guildId and token from .env file!")
    }

    public registerCommands () {
        logger.debug("Registering slash commands...")
        const commands = [
            new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
            new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
            new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
        ]
            .map(command => command.toJSON());
        
        const rest = new REST({ version: '9' }).setToken(this.token);
        
        rest.put(Routes.applicationGuildCommands(this.clientId, this.guildId), { body: commands })
            .then(() => console.log('Successfully registered application commands.'))
            .catch(console.error);
        

        logger.debug("Succesfully registered slash commands!")
    }


}