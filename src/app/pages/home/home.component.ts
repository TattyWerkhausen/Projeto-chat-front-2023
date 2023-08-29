import { NotificationService } from './../notifications/notification.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  idUserLogged?: string;
  notifications: any[] = [];
  constructor(private _loginService: LoginService, private _notificationService: NotificationService) { }

  ngOnInit(): void {
    this.idUserLogged = this._loginService.loggedUser;
    // a cada 3 segundos buscar notificações
    setInterval(() => {
      this.searchNotification();
    }, 3000);
  }
  logout(): void {
    this._loginService.logout();
  }
  register(): void {
    this._loginService.showRegister = true;
  }
  //buscar notificação  enviada para usuario logado(assimcomo mesnagem)
  // se existir notificação exibi-la d alguma forma
  searchNotification(): void {
    this._notificationService.searchNotifications(this.idUserLogged!).subscribe({
      next: (result) => this.notifications = result
    });
  }
}
