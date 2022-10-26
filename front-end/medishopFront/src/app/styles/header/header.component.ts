import { Component, OnInit } from '@angular/core';
import {HtmlUtils} from "../utils/mobile.version";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    HeaderComponent.verifyIsMobile();
    window.addEventListener('resize', HeaderComponent.verifyIsMobile);
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
    this.router.navigate(['painel']).then(r => r)
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
