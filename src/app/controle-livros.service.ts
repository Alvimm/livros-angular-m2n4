import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: '1',
      titulo: 'Clean Code: A Handbook of Agile Software Craftsmanship',
      resumo:
        'Ensina práticas e princípios para escrever código limpo e de fácil manutenção',
      autores: ['Robert C. Martin'],
    },
    {
      codigo: 2,
      codEditora: '2',
      titulo: 'The Pragmatic Programmer: From Journeyman to Master',
      resumo:
        'Oferece conselhos práticos para desenvolvedores que desejam se tornar melhores programadores',
      autores: ['Andrew Hunt', 'David Thomas'],
    },
    {
      codigo: 3,
      codEditora: '3',
      titulo: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      resumo:
        'Apresenta padrões de design de software comuns e ensina como aplicá-los em projetos de software',
      autores: [
        'Erich Gamma',
        'Richard Helm',
        'Ralph Johnson',
        'John Vlissides',
      ],
    },
    {
      codigo: 4,
      codEditora: '4',
      titulo: 'Head First Java: A Brain-Friendly Guide',
      resumo:
        'Ensina Java de forma divertida e acessível, usando uma abordagem visual e interativa',
      autores: ['Kathy Sierra', 'Bert Bates'],
    },
  ];
  constructor() {}

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maiorCodigo = this.livros[this.livros.length - 1].codigo;
    livro.codigo = maiorCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex((livro) => livro.codigo === codigo);
    if (index >= 0) this.livros.splice(index, 1);
  }
}
