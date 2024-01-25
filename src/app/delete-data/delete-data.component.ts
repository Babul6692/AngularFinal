import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-data',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './delete-data.component.html',
  styleUrl: './delete-data.component.css'
})
export class DeleteDataComponent implements OnInit {

  reactiveForm: FormGroup
  url = "http://localhost:8080/"

  constructor(private fb: FormBuilder, private httpclient: HttpClient) {

  }

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  unsubscribe() {
    const data = this.reactiveForm.value.email;
    console.log(data)
    this.httpclient.delete(this.url + "deleteuser", { params: { email : data } })
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

}
