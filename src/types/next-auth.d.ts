import "next-auth";

declare module "next-auth" {
  interface User {
    email: string;
    id: string;
    name: string;
    image?: string | null;
    emailVerified: Date | null;
    password: string | null;
    subscriptions: {
      id: string;
      planName: string;
      status: string;
      expiresAt: Date;
    }[]; // <-- Harus array
    createdAt: Date | null;
    updatedAt: Date | null;
  }

  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
      emailVerified: Date | null;
      password: string | null;
      createdAt: Date | null;
      updatedAt: Date | null;
      subscriptions: {
        id: string;
        planName: string;
        status: string;
        expiresAt: Date;
      }[];
    };
  }

  interface JWT {
    id: string;
    name: string;
    email: string;
    subscriptions: {
      id: string;
      planName: string;
      status: string;
      expiresAt: Date;
    }[];
  }
}
