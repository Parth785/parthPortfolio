import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';  // ✅ Import the component
import { FormsModule } from '@angular/forms';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { SocialLinksComponent } from './social-links/social-links.component';



@Component({
  selector: 'app-root',
  imports: [FormsModule, HeroSectionComponent,SocialLinksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'portfolio-angular';
}
