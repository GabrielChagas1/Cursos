namespace GameTop
{
    class jogoDaora
    {
         // construtor
        private readonly iJogador _jogador;
        private readonly iJogador _jogador2;
        
        public jogoDaora(iJogador jogador, iJogador jogador2){
            _jogador = jogador;
            _jogador2 = jogador2;
        }

        public void iniciarJogo()
        {
            _jogador.corre();
            _jogador.chuta();
            _jogador.passe();
        }
    }
}