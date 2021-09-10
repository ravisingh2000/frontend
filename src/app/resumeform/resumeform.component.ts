import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { kMaxLength } from 'buffer';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-resumeform',
  templateUrl: './resumeform.component.html',
  styleUrls: ['./resumeform.component.css']
})
export class ResumeformComponent implements OnInit {
  elements = ["dd"];
  room: any;
  Email: any;
  Objective: any;
  Name="";
  Address: any;
  Phone: any;
  Skill: any;
  Position: any;
  Education: any;
  constructor(private service: MainService, private router: Router) {
    this.service.userStatus.emit(true);
    this.service.getTemplateApi().subscribe((result: any) => {
 
      console.log(result)
      this.Name = result.data.Name
      this.Email = result.data.Email
      this.Objective = result.data.Objective
      this.Address = result.data.Address
      this.Phone = result.data.Phone
      this.Skill = result.data.skills
      this.Education=result.data.Education
      this.Position = result.data.Position
      
      result.data.skills.forEach((element: any,index: any) => {
     if(index==0)
        this.removeSkill(0)          
        this.addAutoSkill(element)
                  // this.removeSkill(0)
      });
    
    result.data.Education.forEach((element: any,index: any) => {
      if(index==0)
         this.removeEducation(0)          
         this.addAutoEducation(element)
                   // this.removeSkill(0)
       });
    }
    )}
  ngOnInit(): void { }

  createResumeForm = new FormGroup({
    Name: new FormControl(null),
    Email: new FormControl(null),
    Phone: new FormControl(null),
    Position: new FormControl(null),
    Address: new FormControl(null),
    Objective: new FormControl(null),
    skills: new FormArray([new FormControl()]),
    Education: new FormArray([
      new FormGroup({
        Educationname: new FormControl(null),
        Institution: new FormControl(null),
        EduStart: new FormControl(null),
        EduEnd: new FormControl(null)

      }),
    ]),
    Experience: new FormArray([
      new FormGroup({
        Experiencename: new FormControl(null),
        Experiencetitle: new FormControl(null),
        Experienceyear: new FormControl(null)


      }),
    ]),
    Project: new FormArray([
      new FormGroup({
        Projectname: new FormControl(null),
        Projectdetail: new FormControl(null),
        PrStart: new FormControl(null),
        PrEnd: new FormControl(null)

      }),
    ])
    , Certificate: new FormArray([new FormControl()]),
    Social: new FormArray([
      new FormGroup({
        Socialname: new FormControl(null),
        Sociallink: new FormControl(null)


      }),
    ])
  } 
  )
  
  addAutoSkill(data:any){
    (<FormArray>this.createResumeForm.get("skills")).push(new FormControl(data))
  
  }
  addAutoEducation(data:any){
    const ed = new FormGroup({
      Educationname: new FormControl(data.Education),
      Institution: new FormControl(data.Institution),
      EduStart: new FormControl(data.EduStart),
      EduEnd: new FormControl(data.EduEnd)
    });
    (<FormArray>this.createResumeForm.get("Education")).push(ed)
  
  }
  addSkill() {
    console.log("yyyyyyyyyyyyyyyyyyyyyyy");
    (<FormArray>this.createResumeForm.get("skills")).push(new FormControl(null))
  }
  addExperience() {
    const ed = new FormGroup({
      Experiencename: new FormControl(null),
      Experiencetitle: new FormControl(null),
      Experienceyear: new FormControl(null),
    });
    (<FormArray>this.createResumeForm.get("Experience")).push(ed)

  }
  addEducation() {
    const ed = new FormGroup({
      Educationname: new FormControl(null),
      Institution: new FormControl(null),
      EduStart: new FormControl(null),
      EduEnd: new FormControl(null)
    });
    console.log("yyyyyyyyyyyyyyyyyyyyyyy");
    (<FormArray>this.createResumeForm.get("Education")).push(ed)

  }
  addCertificate() {
    console.log("yyyyyyyyyyyyyyyyyyyyyyy");
    (<FormArray>this.createResumeForm.get("Certificate")).push(new FormControl(null))

  }
  addProject() {
    const ed = new FormGroup({
      Projectname: new FormControl(null),
      Projectdetail: new FormControl(null),
      PrStart: new FormControl(null),
      PrEnd: new FormControl(null)
    });
    console.log("yyyyyykkyyyyyyyyyyyyyyyyy");
    (<FormArray>this.createResumeForm.get("Project")).push(ed)

  }
  addSocial() {
    const ed = new FormGroup({
      Socialname: new FormControl(null),
      Sociallink: new FormControl(null)
    });
    console.log("yyyyyykkyyyyyyyyyyyyyyyyy");
    (<FormArray>this.createResumeForm.get("Social")).push(ed)

  }
  removeSkill(i: any) {
    (<FormArray>this.createResumeForm.get("skills")).removeAt(i)
  }
  removeEducation(i: any) {
    (<FormArray>this.createResumeForm.get("Education")).removeAt(i)

  }
  removeProject(i: any) {
    (<FormArray>this.createResumeForm.get("Project")).removeAt(i)

  }
  removeExperience(i: any) {
    (<FormArray>this.createResumeForm.get("Experience")).removeAt(i)

  }
  removeCertificate(i: any) {
    (<FormArray>this.createResumeForm.get("Certificate")).removeAt(i)

  }
  removeSocial(i: any) {
    (<FormArray>this.createResumeForm.get("Social")).removeAt(i)

  }
  getSkillsControl() {
    return (this.createResumeForm.get('skills') as FormArray).controls;
  }
  getEducationControl() {
    return (this.createResumeForm.get('Education') as FormArray).controls;
  }
  getExperienceControl() {
    // console.log("ioioioioipoiioo")
    return (this.createResumeForm.get('Experience') as FormArray).controls;
  }
  getProjectControl() {
    return (this.createResumeForm.get('Project') as FormArray).controls;
  }

  getCertificateControl() {
    return (this.createResumeForm.get('Certificate') as FormArray).controls;
  }
  getSocialControl() {
    return (this.createResumeForm.get('Social') as FormArray).controls;
  }
  saveResumeDate() {
    console.log('Saving form DATA');
    let finalData = this.createResumeForm.value;
    this.service.maketemplate({ data: finalData }).subscribe((result: any) => {
      this.service.gettemplate(result.body)
      this.router.navigate(['/template'])

    }, (error: any) => {
      console.log(error)
    })
    console.log(finalData);

  }

  colors = [["namw" + 0]]

}
