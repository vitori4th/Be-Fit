import UpdateProfileService from '../UpdateProfileService';
import FakeUserRepository from '@modules/users/repositories/user/fakes/FakeUserRepository';
import AppError from '@shared/errors/AppError';

let fakeUsersRepository: FakeUserRepository;
let updateProfileService: UpdateProfileService;

describe('User API', () => {

  beforeEach(() => {
    fakeUsersRepository = new FakeUserRepository();
    updateProfileService = new UpdateProfileService(fakeUsersRepository);
  })

  it('should be able to update user profile', async () => {
    const user = await fakeUsersRepository.register({
      cellphone: '5588899',
      cpf: '12345678901',
      email: 'teste@email.com',
      dateBirth: new Date('2002-12-03'),
      lastname: 'teste',
      name: 'ze',
      password: 'teste',
      role: 'USER',
    });

    const updatedUser = await updateProfileService.execute({
      user_id: user.id,
      name: 'Updated Name',
      lastname: 'Updated Lastname',
      dateBirth: new Date('1990-01-01'),
      cellphone: '0987654321',
    });

    expect(updatedUser.name).toBe('Updated Name');
    expect(updatedUser.lastname).toBe('Updated Lastname');
    expect(updatedUser.dateBirth).toEqual(new Date('1990-01-01'));
    expect(updatedUser.cellphone).toBe('0987654321');
  });

  it('should throw an error if user is not found', async () => {

    await expect(
      updateProfileService.execute({
        user_id: 'nonexistent_user',
        name: 'Updated Name',
        lastname: 'Updated Lastname',
        dateBirth: new Date('1990-01-01'),
        cellphone: '0987654321',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

});
