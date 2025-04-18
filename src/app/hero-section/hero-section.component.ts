import { Component,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {

  @ViewChild('bottomSection') bottomSection!: ElementRef;

  scrollToBottom(): void {
    this.bottomSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }


  

  
}
