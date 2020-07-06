namespace GameTop
{
    class jogoDaora
    {
         // construtor
        private readonly iJogador _jogador;
        
        public jogoDaora(iJogador jogador){
            _jogador = jogador;
        }

        public void iniciarJogo()
        {
            _jogador.corre();
            _jogador.chuta();
            _jogador.passe();
        }
    }
}