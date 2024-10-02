import prisma from "../client";

export const createUser = async (email: string, name: string, password: string) => {
    try {
        const newUser = await prisma.user.create({
            data: {
                email,
                name,
                psw: password
            },
        });
        return newUser;
    } catch (error) {
        console.log(error);
    }
}

export const getUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}

export const getUser = async ( id: string ) => {
    const user = await prisma.user.findUnique({ 
        where: {
            id
        }})
    return user
}