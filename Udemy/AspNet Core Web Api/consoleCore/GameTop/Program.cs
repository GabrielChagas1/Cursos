using System;

namespace GameTop
{
    class Program
    {
        static void Main(string[] args)
        {
            var jogo = new jogoDaora(new Jogador1("Ronaldo"));

            jogo.iniciarJogo();
        }
    }

}
