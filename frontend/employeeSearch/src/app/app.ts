import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('employeeSearch');


  employeeList=signal<any[]>([]);
  searchtxt:string='';
  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    this.GetAllEmployees();
  }

 GetAllEmployees(){
  this.http.get("https://localhost:7266/api/Employee/GetAllEmployees").subscribe({
    next:(res:any)=>{
      this.employeeList.set(res);
    },
    error:(err:any)=>{

    }
  });
 }

 searchEmployee() {

  if (this.searchtxt.trim() == '') {
    this.GetAllEmployees();
    return;
  }

  this.http.get<any[]>(
    `https://localhost:7266/api/Employee/SearchName?name=${encodeURIComponent(this.searchtxt.trim())}`
  ).subscribe({
    next: (res: any[]) => {
      this.employeeList.set(res);
    },
    error: (err: any) => {
      console.log(err);
    }
  });
}

 }


