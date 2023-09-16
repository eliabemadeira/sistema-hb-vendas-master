import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro } from '../cadastro';

@Component({
  selector: 'app-excluir-cadastro',
  templateUrl: './excluir-cadastro.component.html',
  styleUrls: ['./excluir-cadastro.component.css']
})


export class ExcluirCadastroComponent implements OnInit {

  cadastro: Cadastro = {
    nome: '',
    categoria: '',
    email: '',
    telefone:''
  }

  constructor(
    private service: CadastroService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((cadastro) => {
      this.cadastro = cadastro
    })

  }
  excluirCadastro() {
    if (this.cadastro.id) {
      this.service.excluir(this.cadastro.id).subscribe(() => {
        this.router.navigate(['/listarCadastro']);
       })
     }
   }

  cancelar() {
    this.router.navigate(['/listarCadastro']);
  }

}
