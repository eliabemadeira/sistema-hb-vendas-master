import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro } from '../cadastro';

@Component({
  selector: 'app-editar-cadastro',
  templateUrl: './editar-cadastro.component.html',
  styleUrls: ['./editar-cadastro.component.css']
})
export class EditarCadastroComponent implements OnInit {

  cadastro: Cadastro = {
    nome: '',
    categoria: '',
    email: '',
    telefone:''
  }

  constructor(
    private service: CadastroService,
    private router: Router,
    private route: ActivatedRoute) {
 }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((cadastro) => {
      this.cadastro = cadastro
    })
  }

  editarCadastro() {
    this.service.ediar(this.cadastro).subscribe(() => {
      this.router.navigate(['/listarCadastro'])
    })
   }

  cancelar() {
    this.router.navigate(['/listarCadastro'])
  }

}
