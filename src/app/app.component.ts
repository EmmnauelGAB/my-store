import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Nicolas';
  age = 18;
  img = 'https://images.unsplash.com/photo-1664894364785-90a4f1eab09b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NjA3MDk2Mw&ixlib=rb-1.2.1&q=80&w=1080';
  btnDisabled = true;
  person = {
    name: 'Nicolas',
    age: 18,
    avatar: 'https://images.unsplash.com/photo-1664894364785-90a4f1eab09b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NjA3MDk2Mw&ixlib=rb-1.2.1&q=80&w=1080'
  }

  names: string[] = ['Nico', 'Juli', 'Santi']
  newName = '';

  ToggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age +=1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scroll)
  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index: number){
    this.names.splice(index, 1);
  }
}
