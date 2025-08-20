import { getEnv } from "../utils/getEnv";


const shared_config = {
    NODE_ENV: getEnv("NODE_ENV"),
    BASE_PATH: getEnv("BASE_PATH"),
    REFRESH_TOKEN_SECRET: getEnv("JWT_REFRESH_TOKEN_SECRET"),
    ACCESS_TOKEN_SECRET: getEnv("JWT_ACCESS_TOKEN_SECRET"),
    SENDER_EMAIL: getEnv("SENDER_EMAIL"),
    PORT: getEnv("PORT"),
    ACCESS_TOKEN_EXPIRES_IN: getEnv("JWT_ACCESS_TOKEN_EXPIRES_IN"),
    REFRESH_TOKEN_EXPIRES_IN: getEnv("JWT_REFRESH_TOKEN_EXPIRES_IN"),
    TERMII_BASE_URL: getEnv("TERMII_BASE_URL"),
    ENCRYPTION_SECRET: getEnv('ENCRYPTION_SECRET'),
    TAGPAY_BASE_URL: getEnv("TAGPAY_BASE_URL"),

};



const prod_config = {
    ...shared_config,
    DATABASE_URL: getEnv("PROD_DATABASE_URL"),
    DOMAIN: getEnv("PROD_DOMAIN"),
    REDIS_URL: getEnv("PROD_REDIS_URL"),
    MIXPANEL_TOKEN: getEnv("MIXPANEL_PROD_TOKEN"),
    TAGPAY_API_KEY: getEnv('TAGPAY_PROD_API_KEY'),
};

const dev_config = {
    ...shared_config,
    DATABASE_URL: getEnv("DEV_DATABASE_URL"),
    DOMAIN: getEnv("DEV_DOMAIN", `http://localhost:4000`),
    REDIS_URL: getEnv("DEV_REDIS_URL"),
    MIXPANEL_TOKEN: getEnv("MIXPANEL_DEV_TOKEN"),
    TAGPAY_API_KEY: getEnv('TAGPAY_DEV_API_KEY'),



};

type Config = typeof shared_config & (typeof prod_config | typeof dev_config);

const createConfig = (): Config => {
    if (getEnv("NODE_ENV", "development") === "development") {
        return dev_config;
    }
    if (getEnv("NODE_ENV", "production") === "production") {
        return prod_config;
    }

    if (getEnv("NODE_ENV", "staging") === "staging") {
        return prod_config;
    }


    console.warn("Unexpected NODE_ENV. Using shared configuration.");
    return shared_config as Config;
};

const   config = createConfig();
export default config;



