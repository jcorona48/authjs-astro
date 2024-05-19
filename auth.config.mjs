import GitHub from '@auth/core/providers/github';
import Discord from '@auth/core/providers/discord';
import Google from '@auth/core/providers/google';
import { defineConfig } from 'auth-astro';

export default defineConfig({
    providers: [
        GitHub({
            clientId: import.meta.env.GITHUB_CLIENT_ID,
            clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
        }),
        Discord({
            clientId: import.meta.env.DISCORD_CLIENT_ID,
            clientSecret: import.meta.env.DISCORD_CLIENT_SECRET,
        }),
        Google({
            clientId: import.meta.env.GOOGLE_CLIENT_ID,
            clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
});