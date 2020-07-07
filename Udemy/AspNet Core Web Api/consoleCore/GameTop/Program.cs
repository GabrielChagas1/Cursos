using System;

namespace GameTop
{
    class Program
    {
        static void Main(string[] args)
        {
            var jogo = new jogoDaora(new Jogador1("Ronaldo"), new jogador2("Neymar"));

            jogo.iniciarJogo();
        }
    }

}
