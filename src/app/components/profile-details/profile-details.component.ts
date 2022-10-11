import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  @Input() user!: User;
  visibility: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getVisibilityMessage(): string {
    const visibility = this.visibility ? '' : 'not ';
    return `You are currently ${visibility}visible to other attendees.`;
  }
}
