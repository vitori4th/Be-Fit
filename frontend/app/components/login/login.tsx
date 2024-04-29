import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios'; // Importar a biblioteca Axios
import mail from '../../../public/icons/mail.png';
import pass from '../../../public/icons/pass.png';
import visible from '../../../public/icons/visible.png';
import google from '../../../public/icons/google.png';
import facebook from '../../../public/icons/facebook.png';
import CadastroModal from '../cadastro/cadastro';


import '../login/login.css';
import UserService from '@/app/services/userService';
import api from '@/app/utils/api';
import { loginSchema } from './schema/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const userService = new UserService(api);

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type LoginSchema = z.infer<typeof loginSchema>

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {

  const [isOpenCadastro, setIsOpenCadastro] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  });

  const loginSubmit = async (data: LoginSchema): Promise<void> => {
    try {
      const res = await userService.login(data);
      if (res) {
        onClose();
        toast.success("Logado!");
      }
    } catch (e) {
      toast.error("E-mail e/ou senha icorreto!");
    }
  }


  const handleCadastroClick = () => {
    setIsOpenCadastro(true);
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? "active" : ""}`}
      onClick={onClose}
    >
      <div
        className="modal-content delay-[2000ms]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bloco-login ml-10 mb-15">
          <h2 className="title-login font-bold">Login</h2>
          <form onSubmit={handleSubmit(loginSubmit)}>
            <p className="sub-info mt-8 mb-2">Email</p>
            <div className="custom-input-container">
              <Image
                src={mail}
                alt="Icone"
                width={13.33}
                height={10.67}
                className="input-icon"
              />
              <input
                type="text"
                className="custom-input"
                placeholder="Email"
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="error-message">{errors.email?.message}</p>
            )}
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
                type="password"
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
                />
              </div>
            </div>
            {errors.password && (
              <p className="error-message">{errors.password?.message}</p>
            )}
            <button
              type="submit"
              className="button-login border border-green-800 rounded-md hover:bg-green-800 duration-500 mt-10"
            >
              Login
            </button>
          </form>
          <button
            className="button-cad border border-green-800 rounded-md duration-500 mt-2 hover:border-green-600 hover:text-green-600"
            onClick={handleCadastroClick}
          >
            Cadastre-se
          </button>
          <div className="flex items-center justify-center mt-2 mt-10 mr-12">
            <hr className="flex-grow border-t-1 border-black mr-2" />
            <p className="text-black text-sm">ou faça login</p>
            <hr className="flex-grow border-t-1 border-black ml-2" />
          </div>
          <div className="flex justify-center mt-2 mr-12">
            <button
            
            >
              <Image src={google} alt="Google Icon" className="w-6 h-6 mr-4" />
            </button>
            <button
             
            >
              <Image src={facebook} alt="Facebook Icon" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      {isOpenCadastro && (
        <CadastroModal
          isOpen={isOpenCadastro}
          onClose={() => setIsOpenCadastro(false)}
        />
      )}
    </div>
  );
};

export default LoginModal;
