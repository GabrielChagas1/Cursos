namespace GameTop
{
    class jogoDaora
    {
         // construtor
        private readonly Jogador _jogador;
        
        public jogoDaora(Jogador jogador){
            _jogador = jogador;
        }

        public void iniciarJogo()
        {
            _jogador.corre();
            _jogador.passa();
            _jogador.chutar();
        }
    }
    
     class Jogador
    {
        public readonly string _Nome;

        // construtor
        public Jogador(string nome)
        {
            _Nome = nome;
        }

        public void chutar()
        {
            System.Console.WriteLine($"{_Nome} está chutando");
        }

        public void corre()
        {
            System.Console.WriteLine($"{_Nome} está correndo");
        }

        public void passa()
        {
            System.Console.WriteLine($"{_Nome} está passando");            
        }

    }

}