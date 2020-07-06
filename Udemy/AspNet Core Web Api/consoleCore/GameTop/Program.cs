using System;

namespace GameTop
{
    class Program
    {
        static void Main(string[] args)
        {
            var jogo = new jogoDaora(new Jogador("Ronaldo"));

            jogo.iniciarJogo();
        }
    }

}
