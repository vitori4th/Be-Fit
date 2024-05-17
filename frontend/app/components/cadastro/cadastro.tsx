import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import mail from '../../../public/icons/mail.png';
import pass from '../../../public/icons/pass.png';
import './cadastro.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

interface CadastroModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const createUserFormSchema = z.object({
  name: z.string()
    .nonempty("Username required")
    .regex(/^[A-Za-z]+$/i, "Only letters allowed")
    .max(50, "Name max 50 characters"),
  lastname: z.string()
    .nonempty("Username required")
    .regex(/^[A-Za-z]+$/i, "Only letters allowed")
    .max(50, "Name max 50 characters"),
  email: z.string().email(),
  dateBirth: z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid Date format"),
  cellphone: z.string()
    .regex(/^\d{11}$/, "Phone must have 11 digits"),
  cpf: z.string()
    .regex(/^\d{11}$/, "CPF must have 11 digits"),
  password: z.string()
    .min(8, "Password min 8 characters")
    .regex(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, "Password requires uppercase, number, special char")
    .nonempty("Password required"),
  confirmPassword: z.string()
    .nonempty("Confirm password required")
})
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
  });

type CreateUserFormSchema = z.infer<typeof createUserFormSchema>

const CadastroModal = ({ isOpen, onClose }: CadastroModalProps) => {
  const { register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateUserFormSchema>({
    resolver: zodResolver(createUserFormSchema)
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleCadastroClick = async (data: CreateUserFormSchema) => {
    try {
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
      // Chamar a API para o registro do usuário
      const response = await axios.post('http://localhost:3333/users/', userData);

      // Verificar se o usuário foi registrado com sucesso
      if (response.status === 200) {
        toast.success("Usuário Cadastrado com Sucesso!");
        setTimeout(() => {
          onClose(); // Fechar o modal após um pequeno atraso
        }, 2000);
      } else {
        toast.error('Ocorreu um erro ao cadastrar o usuário.');
      }
    } catch (error) {
      // Se ocorrer um erro, exibir uma mensagem de erro
      toast.error('Ocorreu um erro ao cadastrar o usuário.');
      console.error(error);
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content delay-[2000ms]" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col justify-center items-center">
          <h2 className="title-cad font-bold">Cadastro</h2>
          <form onSubmit={handleSubmit(handleCadastroClick)}>
            <p className="sub-info mb-2">Nome</p>
            <div className="custom-input-container">
              <Image src={mail} alt="Icone" width={13.33} height={10.67} className="input-icon" />
              <input type="text" className="custom-input flex items-center" placeholder="Nome" {...register('name')} />
            </div>
            {errors.name && (<span className='sub-info w-full flex justify-start text-red-700'>{errors.name?.message}</span>)}
            <p className="sub-info mb-2">Sobrenome</p>
            <div className="custom-input-container">
              <Image src={mail} alt="Icone" width={13.33} height={10.67} className="input-icon" />
              <input type="text" className="custom-input flex items-center" placeholder="Nome" {...register('lastname')} />
            </div>
            {errors.lastname && (<span className='sub-info w-full flex justify-start text-red-700'>{errors.lastname?.message}</span>)}

            <p className="sub-info mt-2 mb-2">Email</p>
            <div className="custom-input-container">
              <Image src={mail} alt="Icone" width={13.33} height={10.67} className="input-icon" />
              <input type="text" className="custom-input flex items-center" placeholder="Email"  {...register('email')} />
            </div>
            {errors.email && (<span className='sub-info w-full flex justify-start text-red-700'>{errors.email?.message}</span>)}

            <p className="sub-info mt-2 mb-2">Data de Nascimento</p>
            <div className="custom-input-container">
              <Image src={mail} alt="Icone" width={13.33} height={10.67} className="input-icon" />
              <input type="date" className="custom-input flex items-center" placeholder="Data de Nascimento"  {...register('dateBirth')} />
            </div>
            {errors.dateBirth && (<span className='sub-info w-full flex justify-start text-red-700'>{errors.dateBirth?.message}</span>)}

            <p className="sub-info mt-2 mb-2">CPF</p>
            <div className="custom-input-container">
              <Image src={mail} alt="Icone" width={13.33} height={10.67} className="input-icon" />
              <input type="text" className="custom-input flex items-center" placeholder="CPF" {...register('cpf')} />
            </div>
            {errors.cpf && (<span className='sub-info w-full flex justify-start text-red-700'>{errors.cpf?.message}</span>)}

            <p className="sub-info mt-2 mb-2">Telefone</p>
            <div className="custom-input-container">
              <Image src={mail} alt="Icone" width={13.33} height={10.67} className="input-icon" />
              <input type="text" className="sub-info custom-input flex items-center" placeholder="Telefone" {...register('cellphone')} />
            </div>
            {errors.cellphone && (<span className='w-full flex justify-start text-red-700'>{errors.cellphone?.message}</span>)}

            <p className="sub-info mt-2 mb-2">Senha</p>
            <div className="custom-input-container">
              <Image src={pass} alt="Icone" width={13.33} height={10.67} className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                className="custom-input"
                placeholder="Senha"
              />
            </div>
            {errors.password && (<span className=' sub-info w-full flex justify-start text-red-700'>{errors.password?.message}</span>)}


            <p className="sub-info mt-2 mb-2">Confirmar Senha</p>
            <div className="custom-input-container">
              <Image src={pass} alt="Icone" width={13.33} height={10.67} className="input-icon" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword')}
                className="custom-input"
                placeholder="Confirmar Senha"
              />
            </div>
            {errors.confirmPassword && (<span className='sub-info w-full flex justify-start text-red-700'>{errors.confirmPassword?.message}</span>)}

            <button className="button-login border border-green-800 rounded-md duration-500 mt-5 hover:border-green-600 hover:text-green-600"
              disabled={isSubmitting}
              type='submit'
            >{isSubmitting ? 'Cadastrando...' : 'Cadastrar'}</button>
          </form>
          <ToastContainer containerId={"friendRequest"}/>
          <button className="button-return rounded-md hover:bg-gray-400 duration-500 mt-2" onClick={onClose}>Voltar</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CadastroModal;