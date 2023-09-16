import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro';
import { Router } from '@angular/router';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-criar-cadastro',
  templateUrl: './criar-cadastro.component.html',
  styleUrls: ['./criar-cadastro.component.css']
})
export class CriarCadastroComponent implements OnInit {

  cadastro: Cadastro = {
    nome: '',
    categoria: '',
    email: '',
    telefone:''
  }

  constructor(
    private service: CadastroService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarCadastro() {
    this.service.criar(this.cadastro).subscribe()
    this.router.navigate(['/listarCadastro'])
  }

  cancelar() {
    this.router.navigate(['/listarCadastro'])
  }

}
