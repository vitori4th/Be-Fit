import Image from "next/image";
import befitLogo from '../public/icons/beFit-logo.png'
import cartLogo from '../public/icons/cart.png'
import imageHero from '../public/image-hero.png'
import pexels1 from '../public/pexels1.png'
import pexels2 from '../public/pexels2.png'
import pexels3 from '../public/pexels3.png'
import footer from '../public/image-footer.png'
import azul from '../public/em alta/azul.png'
import rosa from '../public/em alta/rosa.png'
import star from '../public/icons/star.png'
import lines from '../public/lines.png'
import Header from '../app/components/header/header'

export default function Home() {
  return (
    <main className="home-page flex min-h-screen flex-col items-center justify-between p-0">
      <Header></Header>

      <section className="sectionRose w-full h-[800px] flex items-start justify-center pr-[45%] py-[8%]">
        <div className="text-left">
          <h1 className="custom-title text-4xl text-green-800 font-normal text-6xl">
            Be You, Be <br /> Happy & Be Fit
          </h1>
          <p className="custom-font text-lg py-[8%]" > Elevando seu estilo, impulsionando sua performance. <br /> Vista-se para o sucesso com nossas roupas fitness <br /> exclusivas.</p>
          <button className="button-green border border-green-800 rounded-md hover:bg-green-800 hover:text-white duration-500 text-white px-[20%] py-3 mt-2">Compre já</button>
        </div>
        <Image className="image-border absolute top-60 left-[60%]" src={imageHero} alt="Befit Logo" width={503} height={628} />       
      </section>
      
        <h1 className="custom-title-page text-4xl text-green-800 font-bold text-xl">
          Nova Coleção
        </h1>

        <p className="custom-font text-lg py-[2%]" > Descubra a nova coleção que redefine a moda fitness. Encontre peças projetadas para elevar seu treino e seu estilo. Explore agora e vista-se para o sucesso!</p>
      
        <div className="relative py-[2%] mb-[5%]">
          {/* Primeira imagem com botão */}
          <div className="inline-block relative mr-[30px] w-[375px] h-[400px] overflow-hidden">
            <Image src={pexels1} alt="Imagem 1" className="w-full h-full object-cover" />
            <button className="absolute bottom-[15px] transform left-1/2 -translate-x-1/2 w-[331px] h-[62px] bg-white rounded-none hover:bg-gray-200 transition duration-500 text-black font-bold text-lg leading-[32.4px] align-middle">Veja</button>
          </div>
          
          {/* Segunda imagem com botão */}
          <div className="inline-block relative mr-[30px] w-[375px] h-[400px] overflow-hidden">
          <Image src={pexels2} alt="Imagem 1" className="w-full h-full object-cover" />
            <button className="absolute bottom-[15px] transform left-1/2 -translate-x-1/2 w-[331px] h-[62px] bg-white rounded-none hover:bg-gray-200 transition duration-500 text-black font-bold text-lg leading-[32.4px] align-middle">Veja</button>
          </div>
          
          {/* Terceira imagem com botão */}
          <div className="inline-block relative w-[375px] h-[400px] overflow-hidden ">
          <Image src={pexels3} alt="Imagem 1" className="w-full h-full object-cover" />
            <button className="absolute bottom-[15px] transform left-1/2 -translate-x-1/2 w-[331px] h-[62px] bg-white rounded-none hover:bg-gray-200 transition duration-500 text-black font-bold text-lg leading-[32.4px] align-middle">Veja</button>
          </div>
        </div>

        

    <section className="sectionGreen w-full pl-[10%] py-[5%] ">
    {/* Bloco Green Produtos em Alta */}
      <div className="text-left flex-1 min-w-[30%] pr-[5%]">
            <h1 className="custom-titleRose text-4xl text-white font-normal text-6xl">
              Produtos <br /> Em Alta
            </h1>
            <p className="custom-fontRose text-lg py-4 text-white">
              Explore Nossos Produtos Em Alta <br /> Demanda! Descubra As Peças Mais <br /> Populares Que Estão Elevando O Jogo Da <br /> Moda Fitness. Garanta O Seu Estilo E <br /> Desempenho Hoje Mesmo!
            </p>
            <button className="button-white border border-green-800 rounded-none hover:bg-green-800 hover:text-white duration-500 text-white">VEJA MAIS</button>
          </div>
          


          <div className="flex">
            
          <div className="w-[375px] h-[533.5px] overflow-hidden mr-[20px] bg-white">
            <div className="w-full h-[384px] overflow-hidden">
              <Image src={rosa} alt="Imagem 2" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-start h-[149.5px] bg-white px-10 py-10">
              <div className="flex items-center justify-start mb-2"> {/* Alinhado à esquerda com a mesma margem */}
                <Image src={star} alt="Star 1" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 2" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 3" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 4" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 5" className="h-3 w-3 mr-1" />
              </div>
              <p className="text-av font-bold">
                Conjunto Rosa
              </p>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <span className="text-price-before font-normal">R$</span>
                  <span className="text-price-before font-normal mx-1">220</span>
                  <div className="-ml-12 w-[45px] h-[1px] bg-[#9B9B9B]"></div> {/* Risco horizontal */}
                  <span className="text-price font-bold ml-[10px]">R$ 140</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[375px] h-[533.5px] overflow-hidden mr-[20px] bg-white">
            <div className="w-full h-[384px] overflow-hidden">
              <Image src={rosa} alt="Imagem 2" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-start h-[149.5px] bg-white px-10 py-10">
              <div className="flex items-center justify-start mb-2"> {/* Alinhado à esquerda com a mesma margem */}
                <Image src={star} alt="Star 1" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 2" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 3" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 4" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 5" className="h-3 w-3 mr-1" />
              </div>
              <p className="text-av font-bold">
                Conjunto Rosa
              </p>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <span className="text-price-before font-normal">R$</span>
                  <span className="text-price-before font-normal mx-1">220</span>
                  <div className="-ml-12 w-[45px] h-[1px] bg-[#9B9B9B]"></div> {/* Risco horizontal */}
                  <span className="text-price font-bold ml-[10px]">R$ 140</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[375px] h-[533.5px] overflow-hidden mr-[20px] bg-white">
            <div className="w-full h-[384px] overflow-hidden">
              <Image src={rosa} alt="Imagem 2" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-start h-[149.5px] bg-white px-10 py-10">
              <div className="flex items-center justify-start mb-2"> {/* Alinhado à esquerda com a mesma margem */}
                <Image src={star} alt="Star 1" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 2" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 3" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 4" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 5" className="h-3 w-3 mr-1" />
              </div>
              <p className="text-av font-bold">
                Conjunto Rosa
              </p>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <span className="text-price-before font-normal">R$</span>
                  <span className="text-price-before font-normal mx-1">220</span>
                  <div className="-ml-12 w-[45px] h-[1px] bg-[#9B9B9B]"></div> {/* Risco horizontal */}
                  <span className="text-price font-bold ml-[10px]">R$ 140</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[375px] h-[533.5px] overflow-hidden mr-[20px] bg-white">
            <div className="w-full h-[384px] overflow-hidden">
              <Image src={rosa} alt="Imagem 2" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-start h-[149.5px] bg-white px-10 py-10">
              <div className="flex items-center justify-start mb-2"> {/* Alinhado à esquerda com a mesma margem */}
                <Image src={star} alt="Star 1" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 2" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 3" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 4" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 5" className="h-3 w-3 mr-1" />
              </div>
              <p className="text-av font-bold">
                Conjunto Rosa
              </p>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <span className="text-price-before font-normal">R$</span>
                  <span className="text-price-before font-normal mx-1">220</span>
                  <div className="-ml-12 w-[45px] h-[1px] bg-[#9B9B9B]"></div> {/* Risco horizontal */}
                  <span className="text-price font-bold ml-[10px]">R$ 140</span>
                </div>
              </div>
            </div>
          </div>


          
        </div>
    
  </section>

  <h1 className="custom-title-page text-4xl text-green-800 font-bold text-xl">
    Nossos Produtos
  </h1>

    {/* Menu */}
    <nav className="flex items-center justify-center space-x-8 py-[3%]">
      <a href="#" className="custom-green hover:text-green-600 font-bold transition-colors duration-500 underline decoration-custom-green decoration-2 underline-offset-8">EM ALTA</a>
      <a href="#" className="custom-green hover:text-green-600 font-normal transition-colors duration-500">À VENDA</a>
      <a href="#" className="custom-green hover:text-green-600 font-normal transition-colors duration-500">TENDÊNCIAS</a>
      <a href="#" className="custom-green hover:text-green-600 font-normal transition-colors duration-500">NOVA COLEÇÃO</a>
    </nav>
        
        <div className="flex justify-center items-center overflow-hidden py-[3%] mb-[5%] w-[1172px]">
          <div className="inline-block relative mr-[30px] w-[275px] overflow-hidden">
            <Image src={pexels1} alt="Imagem 1" className="w-full h-[300px] object-cover" />
            <div className="flex flex-col justify-center bg-white py-10">
              <div className="flex items-center justify-center mb-2"> {/* Alinhado à esquerda com a mesma margem */}
                <Image src={star} alt="Star 1" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 2" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 3" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 4" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 5" className="h-3 w-3 mr-1" />
              </div>
              <p className="text-gr font-bold justify-center">
                Conjunto Rosa
              </p>
              <div className="flex justify-center items-center mt-2">
                <div className="flex items-center">
                  <span className="text-price-before font-normal">R$</span>
                  <span className="text-price-before font-normal mx-1">220</span>
                  <div className="-ml-12 w-[45px] h-[1px] bg-[#9B9B9B]"></div> {/* Risco horizontal */}
                  <span className="text-price-gr font-bold ml-[10px]">R$ 140</span>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-block relative mr-[30px] w-[275px] overflow-hidden">
            <Image src={pexels1} alt="Imagem 1" className="w-full h-[300px] object-cover" />
            <div className="flex flex-col justify-center bg-white py-10">
              <div className="flex items-center justify-center mb-2"> {/* Alinhado à esquerda com a mesma margem */}
                <Image src={star} alt="Star 1" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 2" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 3" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 4" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 5" className="h-3 w-3 mr-1" />
              </div>
              <p className="text-gr font-bold justify-center">
                Conjunto Rosa
              </p>
              <div className="flex justify-center items-center mt-2">
                <div className="flex items-center">
                  <span className="text-price-before font-normal">R$</span>
                  <span className="text-price-before font-normal mx-1">220</span>
                  <div className="-ml-12 w-[45px] h-[1px] bg-[#9B9B9B]"></div> {/* Risco horizontal */}
                  <span className="text-price-gr font-bold ml-[10px]">R$ 140</span>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-block relative mr-[30px] w-[275px] overflow-hidden">
            <Image src={pexels1} alt="Imagem 1" className="w-full h-[300px] object-cover" />
            <div className="flex flex-col justify-center bg-white py-10">
              <div className="flex items-center justify-center mb-2"> {/* Alinhado à esquerda com a mesma margem */}
                <Image src={star} alt="Star 1" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 2" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 3" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 4" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 5" className="h-3 w-3 mr-1" />
              </div>
              <p className="text-gr font-bold justify-center">
                Conjunto Rosa
              </p>
              <div className="flex justify-center items-center mt-2">
                <div className="flex items-center">
                  <span className="text-price-before font-normal">R$</span>
                  <span className="text-price-before font-normal mx-1">220</span>
                  <div className="-ml-12 w-[45px] h-[1px] bg-[#9B9B9B]"></div> {/* Risco horizontal */}
                  <span className="text-price-gr font-bold ml-[10px]">R$ 140</span>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-block relative mr-[30px] w-[275px] overflow-hidden">
            <Image src={pexels1} alt="Imagem 1" className="w-full h-[300px] object-cover" />
            <div className="flex flex-col justify-center bg-white py-10">
              <div className="flex items-center justify-center mb-2"> {/* Alinhado à esquerda com a mesma margem */}
                <Image src={star} alt="Star 1" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 2" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 3" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 4" className="h-3 w-3 mr-1" />
                <Image src={star} alt="Star 5" className="h-3 w-3 mr-1" />
              </div>
              <p className="text-gr font-bold justify-center">
                Conjunto Rosa
              </p>
              <div className="flex justify-center items-center mt-2">
                <div className="flex items-center">
                  <span className="text-price-before font-normal">R$</span>
                  <span className="text-price-before font-normal mx-1">220</span>
                  <div className="-ml-12 w-[45px] h-[1px] bg-[#9B9B9B]"></div> {/* Risco horizontal */}
                  <span className="text-price-gr font-bold ml-[10px]">R$ 140</span>
                </div>
              </div>
            </div>
          </div>
        </div>
            

        <section className="sectionRose flex justify-between items-center w-[1175px] h-[538px]">
          <div className="text-left pl-[10%]">
            <h1 className="custom-title-bold text-4xl text-green-800 font-bold text-6xl">
              Oferta Do Dia
            </h1>
            <p className="custom-font-oferta text-lg py-[2%]"> Preços Baixos E Frete Grátis. Seu Momento De Brilhar <br></br> Na Academia!</p>
            <div className="flex mt-4 mb-[8%]">
              <div className="block-container  mr-5">
                <div className="block-number">01</div>
                <div className="block-text">Dia</div>
              </div>
              <div className="block-container  mr-5">
                <div className="block-number">07</div>
                <div className="block-text">Horas</div>
              </div>
              <div className="block-container">
                <div className="block-number">55</div>
                <div className="block-text">Minutos</div>
              </div>
            </div>
            <button className="button-white border border-green-800 rounded-none hover:bg-green-800 hover:text-white duration-500 text-white">VEJA MAIS</button>
            
          </div>
          <div className="relative pr-[10%]">
            <Image className="" src={rosa} alt="Befit Logo" width={400} height={478} />
          </div>
        </section>

        <h1 className="custom-title-end text-4xl text-green-800 font-bold text-xl py-[2%]">
          Depoimento Dos Clientes
        </h1>

        <p className="custom-font text-lg" > Testemunhos Reais Sobre Como Nossas Roupas Fitness Estão Transformando Suas Vidas.</p>
      

<section className="sectionWhite pl-[10%] py-[5%] ">
    {/* Bloco Depoimento dos Clientes*/}
        <div className="block">
          <div className="">
            <p className="sub-title font-bold py-[8%]">Motivação Elevada E Estilo Impecável!</p>
          </div>
          <div className="description px-[8%]">
            <p>Desde que comecei a usar as roupas fitness deste site, minha motivação para treinar aumentou consideravelmente! Além de confortáveis, elas são super estilosas. Recomendo a todos que buscam qualidade e estilo em suas peças de academia.</p>
          </div>
          <div className="image py-[2%] flex justify-center">
            <Image src={rosa} alt="Imagem do cliente" className="rounded-full" width="88" height="88" />
          </div>
          <div className="sub-title font-bold">
            <p className="font-bold">Ana Souza</p>
          </div>
          <div className="description">
            <p>Cliente</p>
          </div>
        </div>
        <div className="block">
          <div className="">
            <p className="sub-title font-bold py-[8%]">Motivação Elevada E Estilo Impecável!</p>
          </div>
          <div className="description px-[8%]">
            <p>Desde que comecei a usar as roupas fitness deste site, minha motivação para treinar aumentou consideravelmente! Além de confortáveis, elas são super estilosas. Recomendo a todos que buscam qualidade e estilo em suas peças de academia.</p>
          </div>
          <div className="image py-[2%] flex justify-center">
            <Image src={rosa} alt="Imagem do cliente" className="rounded-full" width="88" height="88" />
          </div>
          <div className="sub-title font-bold">
            <p className="font-bold">Ana Souza</p>
          </div>
          <div className="description">
            <p>Cliente</p>
          </div>
        </div>
        <div className="block">
          <div className="">
            <p className="sub-title font-bold py-[8%]">Motivação Elevada E Estilo Impecável!</p>
          </div>
          <div className="description px-[8%]">
            <p>Desde que comecei a usar as roupas fitness deste site, minha motivação para treinar aumentou consideravelmente! Além de confortáveis, elas são super estilosas. Recomendo a todos que buscam qualidade e estilo em suas peças de academia.</p>
          </div>
          <div className="image py-[2%] flex justify-center">
            <Image src={rosa} alt="Imagem do cliente" className="rounded-full" width="88" height="88" />
          </div>
          <div className="sub-title font-bold">
            <p className="font-bold">Ana Souza</p>
          </div>
          <div className="description">
            <p>Cliente</p>
          </div>
        </div>
        <div className="block">
          <div className="">
            <p className="sub-title font-bold py-[8%]">Motivação Elevada E Estilo Impecável!</p>
          </div>
          <div className="description px-[8%]">
            <p>Desde que comecei a usar as roupas fitness deste site, minha motivação para treinar aumentou consideravelmente! Além de confortáveis, elas são super estilosas. Recomendo a todos que buscam qualidade e estilo em suas peças de academia.</p>
          </div>
          <div className="image py-[2%] flex justify-center">
            <Image src={rosa} alt="Imagem do cliente" className="rounded-full" width="88" height="88" />
          </div>
          <div className="sub-title font-bold">
            <p className="font-bold">Ana Souza</p>
          </div>
          <div className="description">
            <p>Cliente</p>
          </div>
        </div>
    
  </section>

 {/* Rodapé*/}
    <div className="relative">
      <Image src={footer} alt="Imagem de Rodapé" />
      <div className="text-price-gr font-bold flex justify-center items-center absolute transform left-1/2 -translate-x-1/2 -translate-y-1/2 w-[463px] h-[78px] bg-white">NOS SIGA NO INSTAGRAM: @_lojabefit</div>
    </div>

      <div className="bg-[#023314] text-white w-[1440px] h-[275px] flex flex-col justify-center items-center">
        <div className="flex mb-10 mt-5">
          <h1 className="footer-text text-4xl font-bold mx-4">BE</h1>
          <h1 className="footer-text text-4xl font-bold mx-4">YOU</h1>
          <h1 className="footer-text text-4xl font-bold mx-4">BE</h1>
          <h1 className="footer-text text-4xl font-bold mx-4">HAPPY</h1>
          <h1 className="footer-text text-4xl font-bold mx-4">BE</h1>
          <h1 className="footer-text text-4xl font-bold mx-4">FIT</h1>
        </div>
        <div className="footer-text text-lg font-bold mt-5">Be Fit.</div>
      </div>
    </main>
  );
}
