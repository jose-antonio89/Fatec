<?php
	require_once "cabecalho.php";
?>
<div class="content">
<div class="container">
	<br><br><h1>Alimento</h1><br>
	<form action="#" method="post" enctype="multipart/form-data">
		<label for="nome">Nome:</label>
		<input type="text" name="nome" id="nome">
		<br><br>
		<label>Porção</label>
		<select name="categoria">
			<option value="0">Escolha a porção</option>
			<option>Pequena</option>
			</option>
			<option>Média</option>
			</option>
			<option>Grande</option>
			</option>
			<option>Extra Grande</option>
		</select>
		<br><br>
		<label>Calorias</label><br>
		<input type="text" name="calorias" id="calorias">
		<br><br>
		<label>foto:</label>
		<input type="file" name="foto" onchange="mostrar(this)">
		<br>
		<img src="" id="img">
		<br><br>
		<input type="submit" class="btn btn-primary">
	</form>
</div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
	<script>
		function mostrar(img)
		{
			if(img.files  && img.files[0])
			{
				var reader = new FileReader();
				reader.onload = function(e){
					$('#img')
					.attr('src', e.target.result)
					.width(170)
					.height(100);
				};
				reader.readAsDataURL(img.files[0]);
			}
		}
	</script>
</body>
</html>