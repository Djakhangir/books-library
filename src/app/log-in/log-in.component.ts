import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean;
  submitted: boolean;
  returnUrl: string;
  value: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
   // public _router = router
  
  ) { }

  ngOnInit() {
    //Validate the username and password of the 
    this.loginForm = this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required]
    });
  }
//by pressing the button redirects you to the library
    onSubmit() {
      this.submitted = true;
      
          if (this.loginForm.invalid) {
            return;
          }
      this.loading = true;
      this.loading = false;
      //this._router.navigate(['/library']);
    
     }
  }
  
  

