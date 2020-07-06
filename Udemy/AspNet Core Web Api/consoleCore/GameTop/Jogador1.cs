namespace GameTop
{
    public class Jogador1
    {
        public readonly string _Nome;

        // construtor
        public Jogador1(string nome)
        {
            _Nome = nome;
        }

        public string chutar()
        {
            return $"{_Nome} está chutando";
        }

        public string corre()
        {
            return $"{_Nome} está correndo";
        }

        public string passa()
        {
            return $"{_Nome} está passando";            
        }

    }
}