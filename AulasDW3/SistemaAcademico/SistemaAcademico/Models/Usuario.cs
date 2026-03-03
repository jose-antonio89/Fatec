namespace SistemaAcademico.Models
{
    public class Usuario
    {
        /*
         *UsuarioID
         *Nome
         *Email
         *Senha
         */

        public int UsuarioId { get; set; }

        public string? Nome { get; set; }

        public string? Email { get; set; }

        public string? Senha { get; set; }


        public Aluno? Aluno { get; set; }
    }
}
