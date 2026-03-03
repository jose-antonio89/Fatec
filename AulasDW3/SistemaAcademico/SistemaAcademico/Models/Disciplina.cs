namespace SistemaAcademico.Models
{
    public class Disciplina
    {
        /*
         * DisciplinaID
         * Nome
         * Semestre
         */

        public int DisciplinaId { get; set; }

        public string? Nome { get; set; }

        public string? Semestre { get; set; }

        public int CursoId { get; set; }
        public Curso? Curso { get; set; }
    }
}
