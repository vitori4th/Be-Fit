"use client"; 
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import befitLogo from '../../../public/icons/beFit-logo.png';
import cartLogo from '../../../public/icons/cart.png';
import LoginModal from '../login/login';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleModalToggle = () => {
      setIsModalOpen(!isModalOpen);
    };
  
    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('modal-background') && !target.closest('.login-button')) {
          setIsModalOpen(false);
        }
      };
      
      return (
        <header className="header w-full pl-[10%] pr-[3%] py-[3%] flex items-center justify-between">
          <div className="flex items-center">
            <Image src={befitLogo} alt="Befit Logo" width={59} height={68} />
          </div>
          <nav className="flex items-center justify-center space-x-8">
            <a href="#" className="custom-green hover:text-green-600 font-bold transition-colors duration-500">PRODUTOS</a>
            <a href="#" className="custom-green hover:text-green-600 font-bold transition-colors duration-500">EM ALTA</a>
            <a href="#" className="custom-green hover:text-green-600 font-bold transition-colors duration-500">CONJUNTOS</a>
            <a href="#" className="custom-green hover:text-green-600 font-bold transition-colors duration-500">LANÇAMENTOS</a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Image src={cartLogo} alt="Cart Icon" width={30} height={30} />
              <div className="absolute bottom-[75%] left-[75%] bg-red-500 text-black rounded-full w-3 h-3 flex items-center justify-center text-xs">
                1
              </div>
            </div>
            <button 
              className="bg-transparent border border-green-800 text-green-800 px-8 py-1 rounded-lg hover:bg-green-800 hover:text-white duration-500 font-bold login-button "
              onClick={handleModalToggle}
            >
              Login
            </button>
          </div>
          {isModalOpen && (
            <div className="modal-background" onClick={handleOutsideClick}>
                <LoginModal isOpen={isModalOpen} onClose={handleModalToggle} />
            </div>
            )}
        </header>
      );
  };
  
  export default Header;