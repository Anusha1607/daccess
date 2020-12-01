import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent implements OnInit {
  empData: any = {};
  data: any = {};

  constructor(private router: Router, private empService: EmployeeService) { }
  btnvisibility = true;
  ngOnInit() {

  }
  onSubmit(empForm) {
    console.log('Create fire');
    this.empService.createUser(empForm.value)
      .subscribe(data => {
        this.router.navigate(['list-emp']);
      },
        error => {
          alert(error);
        });
  }
}
