import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent, NavController, IonButton, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonItem, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonInput, IonItem, IonList, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonImg, IonButton, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProfilePage implements OnInit {
  toggleEditValue:boolean = false;
  userProfile = {
    name: 'Ankita Shejal',
    title: 'Frontend Developer',
    profilePicUrl: 'assets/profile-pic.jpg',
    bio: 'Experienced software developer with a passion for creating efficient and scalable applications.',
    skills: ['JavaScript', 'Angular', 'Ionic', 'Node.js'],
    education: 'Masters of computer application',
    experience: 'Fresher',
    contactInfo: 'ankita.shejal@example.com'
  };

  constructor(private navCtrl: NavController) { }

  editProfile() {
    // Navigate to the edit profile page
    this.navCtrl.navigateForward('/edit-profile');
  }

  toggleEdit(){
    this.toggleEditValue =!this.toggleEditValue;
  }

  ngOnInit() {
  }

}
