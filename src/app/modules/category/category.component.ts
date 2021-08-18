import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from '@services/categories.service';
import { Categories } from '@interfaces/categories.interface';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {

  random = Math.floor(Math.random()*999)
  modal = true
  categories: Categories[] = []
  subs: Subscription[] = []
  formName: FormGroup = this.fb.group({
    username: [`Comensal${this.random}`, [ Validators.required ] ],
  })
  
  constructor(
    private categoriesServices: CategoriesService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getCategorys()
    this.checkModal()
  }

  ngOnDestroy():void{
    this.subs.map(s => s.unsubscribe())
  }

  getCategorys():void{
    const s = this.categoriesServices.getCategories()
    .subscribe(resp => {
     this.categories = resp.payload
     console.log(resp.payload)
    })
    this.subs.push(s)
  }

  checkModal():void{
    const s = localStorage.getItem('userName')
    if (s.length > 0){
      this.modal = false
    }
  }

  saveName():void{
    const user = this.formName.value.username;
    localStorage.setItem('userName', user)
    this.modal = false
  }




}

