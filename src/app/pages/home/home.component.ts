import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from '../../components/top-nav/top-nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, TopNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Search', path: '/search' },
    { label: 'Your Library', path: '/library' },
    { label: 'Create Playlist', path: '/create-playlist' },
  ];
}
