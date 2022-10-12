import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // TODO: use data store
  user: User = {
    name: 'Sarah Patricia Sarahson', 
    role: 'SVP, Occam Lab Pte Ltd',
    email: 'Sarah.Patricia@tlf.com',
    timezone: '(UTC+08:00) Kuala Lumpur, Singapore',
  };

  constructor() { }

  ngOnInit(): void {
  }
}
