import dotenv from "dotenv";
import path from "path";
import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
//dotenv.config({ path: path.resolve(__dirname, ".env") });
dotenv.config();

export const generateSecret = () => {
    const randomNumber = Math.floor(Math.random() * adjectives.length);
    return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

const sendMail = (email) => {
    const options = {
        auth: {
            // api_user: process.env.SENDGRID_USERNAME,
            api_key: process.env.SENGRID_APIKEY
        }
    };
    const client = nodemailer.createTransport(sgTransport(options));
    return client.sendMail(email);
};

export const sendSecretMail = (adress, secret) => {
    const email = {
        from: "yangga12345@naver.com",
        to: adress,
        subject: "🔒Login Secret for Prismagram🔒",
        html: `Hello! Your login secret it ${secret}.<br/>Copy paste on the app/website to log in`
    };
    return sendMail(email);
};