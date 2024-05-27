import React, { useState, useContext } from 'react';
import axios from 'axios';
import Image from 'next/image';
import mail from '../../../public/icons/mail.png';
import pass from '../../../public/icons/pass.png';
import '../cadastro/cadastro.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { AuthContext } from '@/app/contexts/AuthContexts';
import UserService from '@/app/services/userService';
import api from '@/app/utils/api';
import { createUserFormSchema, updateUserFormSchema } from './schema/cadastroSchema';
import visible from '../../../public/icons/visible.png';

interface CadastroModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CreateUserFormSchema = z.infer<typeof createUserFormSchema>

const CadastroModal = ({ isOpen, onClose }: CadastroModalProps) => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userData, setUserData] = useState<CreateUserFormSchema | null>(null);
  const { user, signOut, getUserData } = useContext(AuthContext)

  const userInfo = user;
  const userServiceH = new UserService(api);

  const { register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateUserFormSchema>({
    resolver: zodResolver(userInfo ? updateUserFormSchema : createUserFormSchema),
    defaultValues: {
      name: userInfo ? userInfo.name : '',
      lastname: userInfo ? userInfo.lastname : '',
      cellphone: userInfo ? userInfo.cellphone : '',
      dateBirth: userInfo ? userInfo.dateBirth.split("T")[0] : '',
    },
  });

  console.log("nao", userInfo)
  const handleCadastroClick = async (data: CreateUserFormSchema) => {
    try {
      if (userInfo) {
        const response = await userServiceH.updateUserData(
          data.name,
          data.lastname,
          data.dateBirth,
          data.cellphone,
        );

        if (response) {
          toast.success("Dados Atualizados com Sucesso!");
          // setTimeout(() => {
          // onClose();
          getUserData();
          // }, 5000);
        } else {
          toast.error("Ocorreu um Erro ao Atualizar os dados.");
        }
      } else {
        const userData = {
          name: data.name,
          lastname: data.lastname,
          cellphone: data.cellphone,
          cpf: data.cpf,
          email: data.email,
          dateBirth: data.dateBirth,
          password: data.password,
          confirmPassword: data.confirmPassword,
        };

        console.log(userData);
        const response = await axios.post('http://localhost:3333/users/', userData);

        if (response.status === 200) {
          toast.success("Cadastro bem sucedido!");
          // setTimeout(() => {
          //   onClose();
          // }, 2000);
        } else {
          toast.error('Ocorreu um erro ao realizar o cadastrar.');
        }
      }

    } catch (error) {
      toast.error('Ocorreu um erro');
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      signOut();
      toast.success("Logout realizado com sucesso!");
    } catch (error) {
      console.error('Erro ao fazer logout', error);
      toast.error("Erro ao fazer logout!");
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''} ${userInfo ? 'modal-bg' : ''}`} onClick={onClose}>
      <ToastContainer containerId={"createUser"} />

      <div className="modal-content delay-[2000ms]" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col justify-center items-center">
          <h2 className="title-cad font-bold">
            {!userInfo ?
              "Cadastro"
              :
              "Atualizar Dados"
            }
          </h2>
          <form onSubmit={handleSubmit(handleCadastroClick)}>
            <p className="sub-info mb-2">Nome</p>
            <div className="custom-input-container">
              <Image src={mail} alt="Icone" width={13.33} height={10.67} className="input-icon" />
              <input type="text" className="custom-input flex items-center" placeholder="Nome" {...register('name',)}
                />
            </div>
            {errors.name && (<span className='sub-info w-full flex justify-start text-red-700'>{errors.name?.message}</span>)}

            <p className="sub-info mb-2">Sobrenome</p>
            <div className="custom-input-container">
              <Image src={mail} alt="Icone" width={13.33} height={10.67} className="input-icon" />
              <input type="text" className="custom-input flex items-center" placeholder="Nome" {...register('lastname')}
                 />
            </div>
            {errors.lastname && (<span className='sub-info w-full flex justify-start text-red-700' id='lastnameError'>{errors.lastname?.message}</span>)}

            {!userInfo && (<>
              <p className="sub-info mt-2 mb-2">Email</p>
              <div className="custom-input-container">
                <Image src={mail} alt="Icone" width={13.33} height={10.67} className="input-icon" />
                <input type="text" className="custom-input flex items-center" placeholder="Email"  {...register('email')} />
              </div>
              {errors.email && !userInfo && (<span className='sub-info w-full flex justify-start text-red-700'>{errors.email?.message}</span>)}
            </>)}


            <p className="sub-info mt-2 mb-2">Data de Nascimento</p>
            <div className="custom-input-container">
              <Image src={mail} alt="Icone" width={13.33} height={10.67} className="input-icon" />
              <input 
                type="date" 
                className="custom-input flex items-center" 
                placeholder="Data de Nascimento"  
                {...register('dateBirth')}
              />
            </div>
            {errors.dateBirth && (<span className='sub-info w-full flex justify-start text-red-700' id='dataError'>{errors.dateBirth?.message}</span>)}


            {!userInfo && (<>
              <p className="sub-info mt-2 mb-2">CPF</p>
              <div className="custom-input-container">
                <Image src={mail} alt="Icone" width={13.33} height={10.67} className="input-icon" />
                <input type="text" className="custom-input flex items-center" placeholder="CPF" {...register('cpf')} />
              </div>
              {errors.cpf && !userInfo && (<span className='sub-info w-full flex justify-start text-red-700'>{errors.cpf?.message}</span>)}
            </>)}

            <p className="sub-info mt-2 mb-2">Telefone</p>
            <div className="custom-input-container">
              <Image src={mail} alt="Icone" width={13.33} height={10.67} className="input-icon" />
              <input type="text" className="sub-info custom-input flex items-center" placeholder="Telefone" {...register('cellphone')}
              />
            </div>
            {errors.cellphone && (<span className='w-full flex justify-start text-red-700' id='telError'>{errors.cellphone?.message}</span>)}

            {!userInfo && (<>
              <p className="sub-info mt-2 mb-2">Senha</p>
              <div className="custom-input-container">
                <Image
                  src={pass}
                  alt="Icone"
                  width={13.33}
                  height={10.67}
                  className="input-icon"
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="custom-input"
                  placeholder="Senha"
                  {...register("password")}
                />
                <div className="right-icon">
                  <Image
                    src={visible}
                    alt="Icone"
                    width={13.33}
                    height={10.67}
                    className="input-icon relative left-[60%]"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
              </div>
            </>)}
            {errors.password && !userInfo && (<span className=' sub-info w-full flex justify-start text-red-700'>{errors.password?.message}</span>)}

            {!userInfo && (<>
              <p className="sub-info mt-2 mb-2">Confirmar Senha</p>
              <div className="custom-input-container">
                <Image src={pass} alt="Icone" width={13.33} height={10.67} className="input-icon" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  {...register('confirmPassword')}
                  className="custom-input"
                  placeholder="Confirmar Senha"
                />
                <div className="right-icon">
                  <Image
                    src={visible}
                    alt="Icone"
                    width={13.33}
                    height={10.67}
                    className="input-icon relative left-[60%]"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                </div>
              </div>
            </>)}
            {errors.confirmPassword && !userInfo && (<span className='sub-info w-full flex justify-start text-red-700'>{errors.confirmPassword?.message}</span>)}

            <button className="button-login border border-green-800 rounded-md duration-500 mt-5 hover:border-green-600 hover:text-green-600"
              disabled={isSubmitting}
              type='submit'
            >
              {!userInfo ?
                "Cadastrar"
                :
                "Atualizar"
              }
            </button>
          </form>
          <button className="button-return rounded-md hover:bg-gray-400 duration-500 mt-2" onClick={onClose}>Voltar</button>

        </div>
        {userInfo && < a
          href="#"
          className="text-red-500 hover:text-red-800 flex items-center mt-10 pl-10"
          onClick={(e) => {
            e.preventDefault();
            handleLogout();
          }}
        >
          Fazer Logout
        </a>
        }
      </div>
    </div >
  );
};

export default CadastroModal;