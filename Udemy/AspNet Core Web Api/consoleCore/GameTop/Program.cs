using System;

namespace GameTop
{
    class Program
    {
        static void Main(string[] args)
        {
            var jogo = new jogoDaora("Gabriel Chagas");

            jogo.iniciarJogo();
        }
    }

    class jogoDaora
    {
         // construtor
        private readonly string _nomeJogador;
        public jogoDaora(string nome){
            _nomeJogador = nome;
        }
        public void iniciarJogo()
        {
            System.Console.WriteLine($"{_nomeJogador} deu um passe");
        }
    }
}
