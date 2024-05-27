import 'reflect-metadata';
import FakeUserRepository from '@modules/users/repositories/user/fakes/FakeUserRepository';
import ListAllUserService from '../ListAllUsersService';
import { IUserDTO } from '@modules/users/entities/user';

let fakeUsersRepository: FakeUserRepository;
let listAllUserService: ListAllUserService;

describe('GetUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUserRepository();
    listAllUserService = new ListAllUserService(fakeUsersRepository);
  });
   it('should be able to list all users', async () => {

     const users: IUserDTO[] = [
       {
         cellphone: '9999999',
         cpf: '12345678901',
         email: 'teste@email.com',
         dateBirth: new Date('2002-12-03'),
         lastname: 'teste',
         name: 'andré',
         password: 'teste',
         role: 'USER',
       },
       {
         cellphone: '9999999',
         cpf: '11122233366',
         email: 'teste2@email.com',
         dateBirth: new Date('2002-12-03'),
         lastname: 'teste',
         name: 'igor',
         password: 'teste',
         role: 'USER',
       },
       {
         cellphone: '11236545',
         cpf: '11233366658',
         email: 'teste3@email.com',
         dateBirth: new Date('2002-12-03'),
         lastname: 'teste',
         name: 'vitoria',
         password: 'teste',
         role: 'USER',
       },
     ];

     await Promise.all(users.map(obj => fakeUsersRepository.register(obj)));

     const result = await listAllUserService.execute();

     users.forEach((user, index) => {
       expect(result[index]).toEqual(
         expect.objectContaining({
           cellphone: user.cellphone,
           cpf: user.cpf,
           email: user.email,
           dateBirth: user.dateBirth,
           lastname: user.lastname,
           name: user.name,
           role: user.role,
         }),
       );
     });

   });

  //  it('should throw an error if no users are found', async () => {

  //    await expect(listAllUserService.execute()).rejects.toBeInstanceOf(
  //      AppError,
  //    );
  //  });
});
