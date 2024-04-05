// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { RouterLink, RouterLinkActive } from '@angular/router';
// import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonCard, IonCol, IonInput } from '@ionic/angular/standalone';
// import { addIcons } from 'ionicons';
// import { personCircleOutline, homeOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

// @Component({
//   selector: 'app-root',
//   templateUrl: 'app.component.html',
//   styleUrls: ['app.component.scss'],
//   standalone: true,
//   imports: [IonInput, IonCol, IonCard, IonTitle, IonToolbar, IonHeader, RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet],
// })
// export class AppComponent {
//   public appPages = [
//     { title: 'Profile', url: '/profile', icon: 'person-circle-outline' },
//     { title: 'Home', url: '/folder/Home', icon: 'home-outline' },
//     { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
//     { title: 'Archived', url: '/folder/archived', icon: 'archive' },
//     { title: 'Trash', url: '/folder/trash', icon: 'trash' },
//     { title: 'Spam', url: '/folder/spam', icon: 'warning' },
//   ];
//   public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
//   constructor() {
//     addIcons({ personCircleOutline, homeOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
//   }
// }

import { Component } from '@angular/core'; 
import { DomSanitizer } from '@angular/platform-browser'; 
@Component({ 
selector: 'app-profile', 

}) 
export class Tab2Page { 
constructor(private dom: DomSanitizer) { } 
c1: boolean = true; 
c2: boolean = false; 
c3: boolean = false; 
c4: boolean = false; 
c5: boolean = false; 
c6: boolean = false; 
togglePersonal() { 
this.c1 = true; 
this.c2 = false; 
this.c3 = false; 
this.c4 = false; 
this.c5 = false; 
this.c6 = false; 
} 
toggleHSC() { 
this.c1 = false 
this.c2 = true;
this.c3 = false; this.c4 = false; this.c5 = false; this.c6 = false; } 
toggleSSC() { 
this.c1 = false this.c2 = false; this.c3 = true; this.c4 = false; this.c5 = false; this.c6 = false; } 
toggleDoc() { 
this.c1 = false this.c2 = false; this.c3 = false; this.c4 = false; this.c5 = true; this.c6 = false; } 
list: any = []; name!: string; email!: string; contact!: string; roll!: string; hscName!: string; hscYear!: string; hmarks!: number; htotal!: number; sscName!: string; sscYear!: string; smarks!: number; stotal!: number; degName!: string; s1!: number; 
s2!: number; 
s3!: number; 
s4!: number; 
s5!: number;

toggleSubmit(name: any, email: any, contact: any, roll: any, hscName: any, hscYear: any, 
sscName: any, sscYear: any, degName: any) { 
this.c1 = false 
this.c2 = false; 
this.c3 = false; 
this.c4 = false; 
this.c5 = false; 
this.c6 = true; 
let details = { 
"name": name, 
"email": email, 
"contact": contact, 
"roll": roll, 
"hscName": hscName, 
"hscYear": hscYear, 
"sscName": sscName, 
"sscYear": sscYear, 
"degName": degName, 
} 
this.list.push(details); 
} 
isModalOpenSy = false; 
url: any; 
docString: string | undefined; 
setOpenSy(isOpen: boolean) { 
this.isModalOpenSy = isOpen; 
const input = document.getElementById('doc') as HTMLInputElement; 
if (input && input.files && input.files.length > 0) { 
this.docString = input.files[0].name; 
this.url = this.dom.bypassSecurityTrustResourceUrl(this.docString); console.log(this.url); 
console.log(this.docString); 
} 
} 
} 

