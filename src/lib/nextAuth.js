import GoogleProvider from "next-auth/providers/google";
const NextAuthOptions = {
    
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    session: {
        strategy: 'jwt',
        maxAge: 7 * 24 * 60 * 60, // 1 week 

    },
    secret: process.env.NEXTAUTH_SECRET,

};

export default NextAuthOptions;