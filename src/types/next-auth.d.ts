// import { AdapterUser } from 'next-auth/adapters';
import "next-auth";

declare module "next-auth" {
    interface User {
        email: string;
        id: string;
        name: string;
        image?: string;
        emailVerified: Date | null;
        password: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
    }

    interface Session {
        user: User;
    }

}