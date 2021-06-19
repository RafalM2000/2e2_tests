import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myFormModel: FormGroup
  name: string;

  onetLinkVisible = true;
  constructor() { 
    this.myFormModel = new FormGroup({
      yourName: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.name = this.myFormModel.value.yourName;
  }
}
