import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import {HtmlUtils} from "../utils/mobile.version";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categoriasList?:Categoria[]

  constructor(private catService:CategoriaService) { }

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
          this.categoriasList=data
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
