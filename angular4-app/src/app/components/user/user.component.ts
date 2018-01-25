import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Posts[];

  constructor(private dataService:DataService) { 
    
  }

  ngOnInit() {
    console.log('ngOnIt ran...')
    this.name = 'Eric Washington';
    this.age = 28;
    this.email = "eaw5117@psu.edu";
    this.address = {
      street: "100 Main St",
      city: "Washington",
      state: "DC"
    }
    this.hobbies = ["Write Code", "Sleep", "Listen to Music"]

    this.dataService.getPost().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts;
    });
  }

  onclick(){
    console.log("Button is clicked!");
    this.name = "Eric Anthony Washington";
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for (let i = 0; i < this.hobbies.length; i++{
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }


}

interface Address {
  street:string,
  city:string,
  state:string
}

interface Posts{
  id: number,
  name: string,
  email: string,
  username: string,
  phone: string
}