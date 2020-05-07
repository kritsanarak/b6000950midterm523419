import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  profile: user_profile
  

  constructor() { 
    this.profile = {
      studentid: 'B6000950',
      name: 'Kritsanarak Plangklang',
      gender: 'Male',
      birthyear: 1999,
      email: 'b6000950@g.sut.ac.th',
      phone: '092-2451995',
      img: 'https://api.adorable.io/avatars/285/abott@adorable.io.png',
      address: 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand',
      comment: ''
    }
  }

  ngOnInit(): void {
  }
  alert(){
    window.alert(this.profile.address);
  }

}
