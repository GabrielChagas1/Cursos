namespace GameTop
{
    class jogoDaora
    {
         // construtor
        private readonly Jogador1 _jogador;
        
        public jogoDaora(Jogador1 jogador){
            _jogador = jogador;
        }

        public void iniciarJogo()
        {
            _jogador.corre();
            _jogador.passa();
            _jogador.chutar();
        }
    }
}