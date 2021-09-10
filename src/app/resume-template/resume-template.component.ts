import { Component, OnInit } from '@angular/core';
// import { isMaster } from 'cluster';
import { MainService } from '../service/main.service';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-resume-template',
  templateUrl: './resume-template.component.html',
  styleUrls: ['./resume-template.component.css']
})
export class ResumeTemplateComponent implements OnInit {
  Name="Sample Singh"; 
  Position = "Sample";
  colormm = ["", "", "", ""]
  Email="Sample@gmsil.com";
  Phone = "9518077756"
  Objective = "This is sample please create your page "
  Certificate: any;
  Skill=["sample1","sample2"];
  Experience=[{Experiencename: "Jago  Sample", Experiencetitle:"This is sample please create your page ",Experienceyear:"2-3 year" }]
  Project: any;
  Address = "h,no. Adarsh colonu ,hisar haryana"
  Projects :any
  Education=[{ Educationname: "12th", Institution: "kv",EduStart:"2013",EduEnd:"2014" }, { Educationname: "11th", Institution: "army public",EduStart:"2013",EduEnd:"2014" }]
  
  constructor(private service: MainService) {
    this.service.userStatus.emit(true);
  }
  
  colorm = [{ Educationname: "12th", Institution: "kv" }, { Educationname: "11th", Institution: "army public" }]
  ngOnInit(): void {
    this.createTemplate()
    console.log("fffffffffffffffffffffffffffffffffffffffffeeeeeeeqqqqqqqqqqqqqqqqqqqqqqqqqqq")
  }
  
  createTemplate() {
    console.log("ppppppppppppppppaaaaaaaa")
     this.service.getTemplateApi().subscribe((result: any) => {
 
    console.log(result)
    this.Name = result.data.Name
    this.Email = result.data.Email
    this.Objective = result.data.Objective
    this.Address = result.data.Address
    this.Phone = result.data.Phone
    this.Skill = result.data.skills
    this.Position = result.data.Position
    this.Education = result.data.Education
    // this.Objective=result.data.Objective
    this.Certificate = result.data.Certificate
    this.Experience = result.data.Experience
    this.Project = result.data.Project
      } )
  }
  generatePDF() {
    var data = document.getElementById('contentToConvert');
    if (data != null)
      html2canvas(data).then(canvas => {
        var imgWidth = 208;
        var imgHeight = canvas.height * 300 / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jspdf('p', 'mm', 'a4',true);
        var position = 0;
        pdf.addImage(contentDataURL, 'PNG', -44, 0, 300, imgHeight)
        pdf.save('newPDF.pdf');
      });
  }

}
