import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Hero } from './hero/hero';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { About } from './about/about';
import { Projects } from './projects/projects';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Navbar, Footer, About, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-angular-app');
}
