import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  livro:Livro
  autoresForm: string = ''
  editoras: Array<Editora> = []
  servEditora: ControleEditoraService
  servLivros: ControleLivrosService

  constructor(livro:Livro, servEditora: ControleEditoraService, servLivros: ControleLivrosService, private router: Router) {
    this.livro = livro
    this.servEditora = servEditora
    this.servLivros = servLivros
    this.router = router
  }

  incluir = () => {
    this.livro.autores = this.autoresForm.split('\n')
    this.servLivros.incluir(this.livro)
    this.router.navigateByUrl('/lista');
  }

  ngOnInit() {
    this.editoras = this.servEditora.getEditoras()
  }
}
