using System;

namespace GameTop
{
    class Program
    {
        static void Main(string[] args)
        {
            var jogo = new jogoDaora(new Jogador1("Ronaldo"));
            var jogo2 = new jogoDaora(new Jogador1("Neymar"));

            jogo.iniciarJogo();
            jogo2.iniciarJogo();
        }
    }

}
