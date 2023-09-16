import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-listar-cadastro',
  templateUrl: './listar-cadastro.component.html',
  styleUrls: ['./listar-cadastro.component.css']
})
export class ListarCadastroComponent implements OnInit {

  listaCadastro: Cadastro[] = [];

  constructor(private service: CadastroService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaCadastro) => {
      this.listaCadastro = listaCadastro
    })
  }

}
