import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import {HtmlUtils} from "../utils/mobile.version";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  listCategorias: Categoria[] = []

  constructor(private catService:CategoriaService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAll()
    HeaderComponent.verifyIsMobile();
    window.addEventListener('resize', HeaderComponent.verifyIsMobile);
  }

  //Solicita categorias da api
  getAll():void{
    this.catService.getAll().subscribe(
      {
        next:(data) => {
          this.listCategorias=data
          console.log(this.listCategorias)
        },
        error: (e) => { console.error(e) }
      }
    )
  }

  // set NavBar type to device screen
  private static verifyIsMobile(): void {
    const navBar = document.getElementById('toolbar-desktop');
    const navBarMobile = document.getElementById('toolbar-mobile');
    if (navBar !== null && navBarMobile !== null){
      if (HtmlUtils.isMobileDevice()){
        navBar.style.display = "none";
        navBarMobile.style.display = "block";
      } else {
        navBarMobile.style.display = "none";
        navBar.style.display = "block";
      }
    }
  }

  goToPainel(){
    console.log('executando')
    // this.router.navigate(['painel']).then(r => r)
  }

  // close navBarMobile expanded aria
  public closeMobileNavBar(): void {
    const collapse = document.getElementById("btn-expanded");
    const navbarNavAltMarkup = document.getElementById("navbarNavAltMarkup");

    if (collapse !== null && navbarNavAltMarkup !== null){
      collapse.setAttribute("aria-expanded", "false");
      collapse.classList.remove("collapsed");
      navbarNavAltMarkup.classList.remove("show");
    }
  }

}
