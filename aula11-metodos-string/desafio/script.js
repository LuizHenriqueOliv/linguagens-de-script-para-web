const form = document.getElementById("form-cadastro");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fieldNome = String(document.getElementById("nome").value);
  const fieldEmail = String(document.getElementById("email").value);
  const fieldIdade = document.getElementById("idade").value;
  const fieldInteresses = String(document.getElementById("interesses").value);

});



// 2. Limpe o email (remover espaços e deixar tudo em minúsculo).

// 3. Converta a idade para número.

// 4. Transforme interesses em um array de palavras minúsculas, sem espaços extras.

// 5. Verifique se "música" está entre os interesses.

// 6. Exiba uma mensagem amigável com os dados formatados.



