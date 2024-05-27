import React, { useState } from 'react';
import Image from 'next/image';
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
import { toast, ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContexts'
import Link from 'next/link';
import EsqueciSenhaModal from '../esqueciSenha/esqueciSenha';

const userService = new UserService(api);

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type LoginSchema = z.infer<typeof loginSchema>

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {

  const [isOpenCadastro, setIsOpenCadastro] = useState(false);
  const [isOpenEsqueciMinhaSenha, setIsOpenEsqueciMinhaSenha] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  });
  const { signIn } = useContext(AuthContext)


  const loginSubmit = async (data: LoginSchema): Promise<void> => {
    try {
      const res = await signIn(data);
      console.log('res', res);
      toast.success("Logado!");
      onClose();
    } catch (e) {
      console.error('erro loginSubmit', e);
      toast.error("E-mail e/ou senha incorreto!");
    }
  };

  const handleCadastroClick = () => {
    setIsOpenCadastro(true);
  };

  const handleEsqueciMinhaSenhaClick = () => {
    setIsOpenEsqueciMinhaSenha(true);
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? "active" : ""} modal-bg`}
      onClick={onClose}
    >
      <ToastContainer containerId={"loginUser"} />

      <div
        className="modal-content delay-[2000ms]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bloco-login ml-10 mb-15 modal">
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
                id='inputEmail'
                {...register("email")}
              />
            </div>
            {errors.email && (<span className=' sub-info w-full flex justify-start text-red-700' id='emailErrorLogin'>{errors.email?.message}</span>)}

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
                id='inputPass'
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
            {errors.password && (<span className=' sub-info w-full flex justify-start text-red-700' id='passErrorLogin'>{errors.password?.message}</span>)}

            <a
              href="#"
              className="forgot-password-link hover:text-green-800"
              id='esqueciButton'
              onClick={(e) => {
                e.preventDefault();
                handleEsqueciMinhaSenhaClick();
              }}
            >
              Esqueci minha senha
            </a>
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
      {isOpenEsqueciMinhaSenha && (
        <EsqueciSenhaModal
          isOpen={isOpenEsqueciMinhaSenha}
          onClose={() => setIsOpenEsqueciMinhaSenha(false)}
        />
      )}
    </div>
  );
};

export default LoginModal;
