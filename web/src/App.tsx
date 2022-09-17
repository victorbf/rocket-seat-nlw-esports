import { MagnifyingGlassPlus } from 'phosphor-react';

import './styles/main.css';
import logoImg from './assets/logo.svg';

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col mt-20">
      <img src={logoImg} alt="Logo NLW eSports" />
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.</h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative roundend-lg overflow-hidden">
          <img src="/game-1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block">4 Anuncios</span>
          </div>
        </a>
        <a href="" className="relative roundend-lg overflow-hidden">
          <img src="/game-2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">DOOM Eternal</strong>
            <span className="text-zinc-300 text-sm block">4 Anuncios</span>
          </div>
        </a>
        <a href="" className="relative roundend-lg overflow-hidden">
          <img src="/game-3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Resident Evil 5</strong>
            <span className="text-zinc-300 text-sm block">4 Anuncios</span>
          </div>
        </a>
        <a href="" className="relative roundend-lg overflow-hidden">
          <img src="/game-5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Minecraft</strong>
            <span className="text-zinc-300 text-sm block">4 Anuncios</span>
          </div>
        </a>
        <a href="" className="relative roundend-lg overflow-hidden">
          <img src="/game-6.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Valorant</strong>
            <span className="text-zinc-300 text-sm block">4 Anuncios</span>
          </div>
        </a>
        <a href="" className="relative roundend-lg overflow-hidden">
          <img src="/game-7.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Gloomwood COOP</strong>
            <span className="text-zinc-300 text-sm block">4 Anuncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">Não encontrou seu duo</strong>
            <span className="text-zinc-400 block  ">Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
