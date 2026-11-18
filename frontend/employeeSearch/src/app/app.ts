import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('employeeSearch');


  employeeList=signal<any[]>([]);

  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    this.GetAllEmployees();
  }

 GetAllEmployees(){
  this.http.get("https://localhost:7266/api/Employee/GetAllEmployees").subscribe({
    next:(res:any)=>{

    },
    error:(err:any)=>{

    }
  });
 }

}
