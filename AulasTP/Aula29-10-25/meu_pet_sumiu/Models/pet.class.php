<?php

    class pet {
    private int $id_pet;
    private string $nome;
    private string $idade;
    private string $raca;
    private string $porte;
    private string $local;
    private string $data;
    private string $imagem;
    private string $cor_olhos;
    private string $cor;
    private string $observacoes;
    private string $situacao;
    private Usuarios $usuario;

    public function __construct(
        int $id_pet = 0,
        string $nome = "",
        string $idade = "",
        string $raca = "",
        string $porte = "",
        string $local = "",
        string $data = "",
        string $imagem = "",
        string $cor_olhos = "",
        string $cor = "",
        string $observacoes = "",
        string $situacao = "",
        ?Usuarios $usuario = null
    ) {
        $this->id_pet = $id_pet;
        $this->nome = $nome;
        $this->idade = $idade;
        $this->raca = $raca;
        $this->porte = $porte;
        $this->local = $local;
        $this->data = $data;
        $this->imagem = $imagem;
        $this->cor_olhos = $cor_olhos;
        $this->cor = $cor;
        $this->observacoes = $observacoes;
        $this->situacao = $situacao;
        $this->usuario = $usuario ?? new Usuarios();
    }

    public function getid_pet()
	{
		return $this->id_pet;
	}
	public function getnome()
	{
		return $this->nome;
	}
	public function getidade()
	{
		return $this->idade;
	}
	public function getraca()
	{
		return $this->raca;
	}
	public function getporte()
	{
		return $this->porte;
	}
    public function getlocal()
	{
		return $this->local;
	}
    public function getdata()
	{
		return $this->data;
	}
    public function getimagem()
	{
		return $this->imagem;
	}
    public function getcor_olhos()
	{
		return $this->cor_olhos;
	}
    public function getcor()
	{
		return $this->cor;
	}
    public function getobservacoes()
	{
		return $this->observacoes;
	}
    public function getsituacao()
	{
		return $this->situacao;
	}
    public function getusuario()
	{
		return $this->usuario;
	}

	public function setid_pet($id_pet)
	{
		$this->id_pet = $id_pet;
	}
	public function setnome($nome)
	{
		$this->nome = $nome;
	}
	public function setidade($idade)
	{
		$this->idade = $idade;
	}
	public function setraca($raca)
	{
		$this->raca = $raca;
	}
	public function setporte($porte)
	{
		$this->porte = $porte;
	}
    public function setlocal($local)
	{
		$this->local = $local;
	}
    public function setdata($data)
	{
		$this->data = $data;
	}
    public function setimagem($imagem)
	{
		$this->imagem = $imagem;
	}
    public function setcor_olhos($cor_olhos)
	{
		$this->cor_olhos = $cor_olhos;
	}
    public function setcor($cor)
	{
		$this->cor = $cor;
	}
    public function setobservacoes($observacoes)
	{
		$this->observacoes = $observacoes;
	}
    public function setsituacao($situacao)
	{
		$this->situacao = $situacao;
	}
    public function setusuario($usuario)
	{
		$this->usuario = $usuario;
	}
} // Fim da classe

?>