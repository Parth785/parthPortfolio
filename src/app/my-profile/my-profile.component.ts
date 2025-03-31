import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // ✅ Import FormsModule


@Component({
  selector: 'app-my-profile',
  imports: [FormsModule],
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  name: string = 'Parth Lakhani';
}
