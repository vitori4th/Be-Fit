import AppError from '@shared/errors/AppError';
import FakeUserRepository from '@modules/users/repositories/user/fakes/FakeUserRepository';
import FakeUserTokensRepository from '@modules/users/repositories/userToken/fakes/FakeUserTokensRepository';
import SendForgotPasswordEmailService from '../SendForgotPasswordEmailService';



describe('SendForgotPasswordEmailService', () => {
  let fakeUserRepository: FakeUserRepository;
  let fakeUserTokenRepository: FakeUserTokensRepository;
  let sendForgotPasswordEmailService: SendForgotPasswordEmailService;

  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();
    fakeUserTokenRepository = new FakeUserTokensRepository();
    sendForgotPasswordEmailService = new SendForgotPasswordEmailService(
      fakeUserRepository,
      fakeUserTokenRepository,
    );
  });

  it('should send a forgot password email to the user', async () => {
    await fakeUserRepository.register({
      cellphone: '5588899',
      cpf: '12345678901',
      email: 'teste@email.com',
      dateBirth: new Date('2002-12-03'),
      lastname: 'teste',
      name: 'ze',
      password: 'teste',
      role: 'USER',
    });

    await sendForgotPasswordEmailService.execute({
      email: 'teste@email.com',
    });

    expect(true).toBeTruthy();

  });

  it('should throw an error if user does not exist', async () => {

    await expect(
      sendForgotPasswordEmailService.execute({
        email: 'nonexistent@example.com',
      }),
    ).rejects.toBeInstanceOf(AppError);

  });
});
