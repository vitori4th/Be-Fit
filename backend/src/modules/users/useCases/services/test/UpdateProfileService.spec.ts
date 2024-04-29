import request from 'supertest';
import CreateUserService from '../CreateUserService';
import UserRepository from '../../../repositories/user/UserRepository';
import { prismaClient } from '../../../../../prisma/prismaClient';
import { IUserDTO } from '../../../entities/user';
import CreateSessionsService from '../CreateSessionService';

let userRepository: UserRepository;
let createUser: CreateUserService;

describe('User API', () => {

  //let deleteId!: string;

  beforeEach(() => {
        userRepository = new UserRepository();
        createUser = new CreateUserService(userRepository);
      })

  // afterAll(async () => {
  //   // Limpar dados de teste após a execução dos testes
  //   await prismaClient.user.delete({where: {id: deleteId}});
  //   await prismaClient.$disconnect();
  // });

  it('should update user information', async () => {
    // const user =  await createUser.execute({
    //   cellphone: '11256',
    //   cpf: 123456,
    //   email: 'testeee@email.com',
    //   dateBirth: new Date('2002-12-03'),
    //   lastname: 'teste',
    //   name: 'teste',
    //   password: 'teste',
    //   role: 'ADMIN',
    //   confirmPassword: 'teste',
    // });

    const sessionService = new CreateSessionsService();
    const { token } = await sessionService.execute({
      email: 'testeee@email.com',
      password: 'teste',
    })

    const updatedUserDetails: Partial<IUserDTO> = {
      cellphone: '987654321',
      lastname: 'Smith',
    };
    const response = await request('http://localhost:3333')
      .put(`/profile`)
      .send(updatedUserDetails)
      .set('Authorization', `bearer ${token}`);

    //deleteId = user.id;
    expect(response.status).toBe(200);

  


    // const updatedUser = await prismaClient.user.findUnique({
    //   where: { id: updatedUserDetails.id },
    // });

    // const expectedUser = { ...createUserResponse, ...updatedUserDetails };
    // const userWithoutPassword = excludeFromObject(updatedUser, ['password']);

    // expect(userWithoutPassword).toEqual(expectedUser);
  });
});
