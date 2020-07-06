namespace GameTop
{
    public class jogador2 : iJogador
    {
        public readonly string _Nome;

        // construtor
        public jogador2(string nome)
        {
            _Nome = nome;
        }
        public string chuta()
        {
            return $"{_Nome} está chutando!"
        }

        public string corre()
        {
            return $"{_Nome} está correndo"
        }

        public string passe()
        {
            return $"{_Nome} está passando"
        }
    }
}