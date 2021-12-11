import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MasterData } from '@env/environment';

@Component({
  selector: 'app-subject-exam-result-graph',
  templateUrl: './subject-exam-result-graph.component.html',
  styleUrls: ['./subject-exam-result-graph.component.css']
})
export class SubjectExamResultGraphComponent implements OnInit {

  @Input() form: FormArray
  @Input() sectionId
  @Input() subject : FormGroup
  
  public subjectId
  public passingMarks = 0
  public passedStudents = 0
  public failedStudents = 0
  public isGraphCalculationsDone = false
  public passedPercentage
  public chartColors
  public masterData = MasterData

  constructor() { 
    this.setChartColors()
  }

  ngOnInit(): void {
    this.subjectId = this.subject.get("subjectId").value
    this.passingMarks = this.subject.controls['passingMarks'].value
    this.calculate()
  }

  setChartColors(){
    this.chartColors = [
      {
        backgroundColor: ['red', 'green','yellow'],
      }
    ]
  }

  calculate(){
    this.isGraphCalculationsDone = false
    this.passedStudents = 0
    this.failedStudents = 0

    let sectionsArray = this.form.controls;

    sectionsArray.forEach(section => {
      let sectionId = section.get('sectionId').value;
      if(sectionId === this.sectionId){
        let students = <FormArray> section.get('students')
        students.controls.forEach(student => {
          student.get('marksGained').value < this.passingMarks ? this.failedStudents++ : this.passedStudents++
        });
      }
    });

    if (this.passedStudents > 0) {
      let total = this.passedStudents + this.failedStudents
      this.passedPercentage = (this.passedStudents * 100) / total
      this.passedPercentage = this.passedPercentage.toFixed(2);
    }
    else {
      this.passedPercentage = "0.00";
    }

    this.isGraphCalculationsDone = true
  }

}
