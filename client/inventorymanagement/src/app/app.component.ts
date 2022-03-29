import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form:FormGroup
  items:any=[]
  ADD:any=true
  constructor(public formBuilder:FormBuilder){

  }
  ngOnInit(){
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      price:[null,Validators.required]
    });
  }
  title = 'inventorymanagement';
  onadd(){
   console.log(this.form.value)
   this.items.push(this.form.value)
   this.form.reset()
  }
  edit(item,i){
  console.log(item,i)
  this.ADD=false
  this.form.setValue(item)
  }
  Del(item,i){
    console.log(item,i)
    this.items.splice(i,1)
  }
  
}
