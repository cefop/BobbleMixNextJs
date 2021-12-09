import jwt from 'jsonwebtoken';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import nodemailer from 'nodemailer';
// import SendVerificationRequest from '../../../components/mail/MailerLogin';

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        process.env.NODE_ENV === 'development' &&
            Providers.GitHub({
                clientId: process.env.GITHUB_ID,
                clientSecret: process.env.GITHUB_SECRET,
                scope: 'user:email',
            }),
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            // authorizationUrl:
            //     'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
        }),
        Providers.Facebook({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
        Providers.Email({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,

            sendVerificationRequest({ identifier: email, url, token, baseUrl, provider }) {
                return new Promise((resolve, reject) => {
                    const { server, from } = provider;
                    // Strip protocol from URL and use domain as site name
                    const site = baseUrl.replace(/^https?:\/\//, '');

                    // Email HTML body
                    const html = ({ url, site, email }) => {
                        // Insert invisible space into domains and email address to prevent both the
                        // email address and the domain from being turned into a hyperlink by email
                        // clients like Outlook and Apple mail, as this is confusing because it seems
                        // like they are supposed to click on their email address to sign in.
                        const escapedEmail = `${email.replace(/\./g, '&#8203;.')}`;
                        const escapedSite = `${site.replace(/\./g, '&#8203;.')}`;
                        // Some simple styling options
                        const backgroundColor = '#f9f9f9';
                        const textColor = '#444444';
                        const mainBackgroundColor = '#ffffff';
                        const buttonBackgroundColor = '#346df1';
                        const buttonBorderColor = '#346df1';
                        const buttonTextColor = '#ffffff';
                        return `
                            <body style="background: ${backgroundColor};">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0px 20px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
                                    <strong>${escapedSite}</strong>
                                    </td>
                                </tr>
                                </table>
                                <table width="100%" border="0" cellspacing="20" cellpadding="0" style="background: ${mainBackgroundColor}; max-width: 600px; margin: auto; border-radius: 10px;">
                                <tr>
                                    <td align="center" style="padding: 10px 0px 0px 0px; font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
                                    Liens de connection pour <strong>${escapedEmail}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding: 20px 0;">
                                    <table border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                        <td align="center" style="border-radius: 5px;" bgcolor="${buttonBackgroundColor}"><a href="${url}" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${buttonTextColor}; text-decoration: none; text-decoration: none;border-radius: 5px; padding: 10px 20px; border: 1px solid ${buttonBorderColor}; display: inline-block; font-weight: bold;">Connection</a></td>
                                        </tr>
                                    </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
                                    Si vous n'avez pas demandé cet e-mail, vous pouvez l'ignorer en toute sécurité.
                                    </td>
                                </tr>
                                </table>
                            </body>
                        `;
                    };

                    nodemailer.createTransport(server).sendMail(
                        {
                            to: email,
                            from,
                            subject: `👋 Bienvenue sur ${site}`,
                            text: `Votre lien de login,  ${url} pour vous enregistrer sur ${site}`,
                            html: html({ url, site, email }),
                        },
                        (error) => {
                            if (error) {
                                logger.error('SEND_VERIFICATION_EMAIL_ERROR', email, error);
                                return reject(new Error('SEND_VERIFICATION_EMAIL_ERROR', error));
                            }
                            return resolve();
                        }
                    );
                });
            },
        }),
        // ...add more providers here
    ],

    // A database is optional, but required to persist accounts in a database
    // database: process.env.DATABASE_URL,
    // database: `postgres://process.env.POSTGRES_USER:process.env.POSTGRES_PASSWORD@process.env.PGSQL_HOST:5432/process.env.POSTGRES_DB`,
    database: {
        type: 'postgres',
        host: process.env.PGSQL_HOST,
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        // entityPrefix: 'nextauth_',
        ssl: process.env.NODE_ENV !== 'development',
        extra: process.env.NODE_ENV !== 'development' && { ssl: { rejectUnauthorized: false } },
    },

    secret: process.env.SECRET,

    session: {
        // Use JSON Web Tokens for session instead of database sessions.
        // This option can be used with or without a database for users/accounts.
        // Note: `jwt` is automatically set to `true` if no database is specified.
        jwt: true,

        // Seconds - How long until an idle session expires and is no longer valid.
        // maxAge: 30 * 24 * 60 * 60, // 30 days

        // Seconds - Throttle how frequently to write to database to extend a session.
        // Use it to limit write operations. Set to 0 to always update the database.
        // Note: This option is ignored if using JSON Web Tokens
        // updateAge: 24 * 60 * 60, // 24 hours
    },

    // JSON Web tokens are only used for sessions if the `jwt: true` session
    // option is set - or by default if no database is specified.
    // https://next-auth.js.org/configuration/options#jwt
    jwt: {
        // A secret to use for key generation (you should set this explicitly)
        secret: process.env.SECRET,
        // Set to true to use encryption (default: false)
        // encryption: true,
        // You can define your own encode/decode functions for signing and encryption
        // if you want to override the default behaviour.
        encode: async ({ secret, token, maxAge }) => {
            const jwtClaims = {
                id: token.id.toString(),
                sub: token.sub.toString(),
                name: token.name,
                email: token.email,
                iat: Date.now() / 1000,
                exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
                'https://hasura.io/jwt/claims': {
                    'x-hasura-allowed-roles': ['user'],
                    'x-hasura-default-role': 'user',
                    'x-hasura-role': 'user',
                    'x-hasura-user-id': token.id,
                },
            };
            const encodedToken = jwt.sign(jwtClaims, secret, {
                algorithm: 'HS256',
            });
            return encodedToken;
        },
        decode: async ({ secret, token, maxAge }) => {
            const decodedToken = jwt.verify(token, secret, {
                algorithms: ['HS256'],
            });
            return decodedToken;
        },
    },

    // You can define custom pages to override the built-in pages.
    // The routes shown here are the default URLs that will be used when a custom
    // pages is not specified for that route.
    // https://next-auth.js.org/configuration/pages
    pages: {
        signIn: '/auth/signin',
        verifyRequest: '/auth/verify-request',
        // signIn: '/api/auth/signin', // Displays signin buttons
        // signOut: '/api/auth/signout', // Displays form with sign out button
        // error: '/api/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/api/auth/verify-request', // Used for check email page
        // newUser: null // If set, new users will be directed here on first sign in
    },

    // Callbacks are asynchronous functions you can use to control what happens
    // when an action is performed.
    // https://next-auth.js.org/configuration/callbacks
    callbacks: {
        // async signIn(user, account, profile) { return true },
        // async redirect(url, baseUrl) {
        //     return baseUrl;
        // },
        async session(session, token) {
            const encodedToken = jwt.sign(token, process.env.SECRET, {
                algorithm: 'HS256',
            });
            session.id = token.id;
            session.token = encodedToken;
            return Promise.resolve(session);
        },
        async jwt(token, user, account, profile, isNewUser) {
            // make a http call to our graphql api
            // store this in postgres
            if (user) {
                token.id = user.id.toString();
            }
            return Promise.resolve(token);
        },
    },
    // debug: true,
});
