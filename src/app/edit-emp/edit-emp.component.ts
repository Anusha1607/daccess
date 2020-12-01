import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.scss']
})
export class EditEmpComponent implements OnInit {
  empData: any = {};
  data: any = {};
  constructor(private router: Router, private empService: EmployeeService) {
  }

  ngOnInit() {
    const empid = localStorage.getItem('editEmpId');
    if (+empid > 0) {
      this.empService.getEmployeeById(+empid).subscribe(data => {
        // this.editForm.patchValue(data);
      });
    }
  }

  onUpdate(empForm) {

    console.log('Update fire');
    this.empService.updateEmployee(empForm.value).subscribe(data => {
      this.router.navigate(['list-emp']);
    },
      error => {
        alert(error);
      });
  }
}
