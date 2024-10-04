import prisma from "../client";
import { userUpdate } from "../interfaces/user.interface";
import { handleError } from "../utils";

export const createUser = async ( email: string, name: string, password: string ) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        psw: password,
      },
    });
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const getUser = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new Error("usuario no encontrado");
    }
  } catch (err) {
    handleError(err);
  }
};

export const deleteUser = async (id: string) => {
  try {
    await getUser(id);
    const user = await prisma.user.delete({ where: { id } });

    return user;
  } catch (err) {
    handleError(err)
  }
};

export const updateUser = async(id: string, data: userUpdate) => {
  try {
    await getUser(id);

    const user = await prisma.user.update({
      where: {
        id
      },
      data: {
        name: data.name,
        email: data.email,
        psw: data.psw
      }
    })

    return user;
  }catch (err) {
    handleError(err)
  }
}
