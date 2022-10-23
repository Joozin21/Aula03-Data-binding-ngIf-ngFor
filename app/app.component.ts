import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Binding';
  descricao = "O data binding pega uma informação no arquivo .ts e leva para o arquivo. html";
  imagem1 = "https://cdn.pixabay.com/photo/2022/10/05/20/43/hyacinth-macaw-7501470__340.jpg";
  imagem2 = "https://cdn.pixabay.com/photo/2022/10/15/21/23/cat-7523894__340.jpg";
  imagem3 = "https://cdn.pixabay.com/photo/2022/10/16/18/20/flamingos-7525793__340.jpg";
  imagem4 = "https://cdn.pixabay.com/photo/2022/09/24/16/32/bulldog-7476727__340.jpg";
  imagem5 = "https://cdn.pixabay.com/photo/2022/06/20/20/32/hedgehog-7274569__340.jpg";
  imagem6 = "https://cdn.pixabay.com/photo/2022/08/15/09/14/koyasan-temple-7387445__340.jpg";
  des1 = "Papagaio";
  des2 = "Gato";
  des3 = "Flamingo";
  des4 = "Bulldog";
  des5 = "Porco-Espinho";
  des6 = "Templo";

pessoa = {
  nome:"João Vitor",
  idade: 20,
  altura: 1.70,
  aniversario: "15/06/1990",
};
cliente = [
 
  { nome: "Joao", idade:15, num: 1},
  { nome: "Maira", idade:35, num: 4},
  { nome: "Tadeu", idade:35, num: 5},
  { nome: "Andre", idade:11, num: 8},
];
}