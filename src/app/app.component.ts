import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalDirective } from '../../node_modules/ngx-bootstrap';
import { QuestionClass } from './question-class';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	isQuestionCardShow: boolean = false;
	totalAnswered: number = 0;
	rightAnswer: number;
  output:boolean=false;
	questionObj = new QuestionClass();
	@ViewChild('submitModal') submitModal: ModalDirective;
	@ViewChild('addQuestionModal') addQuestionModal : ModalDirective;
	@ViewChild('answerModal') answerModal : ModalDirective;
	@ViewChild('questionForm') questionForm: any;
	@ViewChild('questionTest') questionTest : any;

	constructor( private toastr: ToastrService) { }


	answerArray = [];

	allQuestions: any = [{
		"id": 1,
		"question": "1-Which of the following retains the information it’s storing when the power to the system is turned off?",
		"a": "CPU",
		"b": "RAM",
		"c": "ROM",
		"d": "CACHE",
		"answer": "c"
	},
	{
		"id": 2,
		"question": "Every computer connected to the Internet is identified by a unique four-part string, known as",
		"a": "IP address",
		"b": "Host name",

		"c": "    Domain name",
		"d": "None of the above",
		"answer": "a"
	},
  {
		"id": 3,
		"question": "Which of the following statement is correct?",
		"a": "1 KB = 1024 bytes",
		"b": "1 MB=2048 bytes",
		"c": "1 MB = 1000 kilobytes",
		"d": "1 KB = 1000 bytes",
		"answer": "a"
	},
  {
		"id": 4,
		"question": ".PNG refers to",
		"a": "Movie/animation file",
		"b": "Audio file",
		"c": "Image file",
		"d": "MS Office document",
		"answer": "c"
	},
  {
		"id": 5,
		"question": "Which of the following statement is correct?",
		"a": "1 KB = 1024 bytes",
		"b": "1 MB=2048 bytes",
		"c": "1 MB = 1000 kilobytes",
		"d": "1 KB = 1000 bytes",
		"answer": "a"
	},

  {
		"id": 6,
		"question": " 1 Gigabyte (GB) is equal to ?",
		"a": "1024 KB",
		"b": " 1024 MB",
		"c": "1024 TB",
		"d": "1 MB",

		"answer": "b"
	},
	{

		"question": "All the following are computer input devices except for",
    "id": 7,
		"a": "Keyboard",
		"b": "Joy Stic",
		"c": "Mouse",
		"d": "Printer",
		"answer": "b"
	},

  {
		"id": 8,
		"question": "Which of the following statement is correct?",
		"a": "1 KB = 1024 bytes",
		"b": "1 MB=2048 bytes",
		"c": "1 MB = 1000 kilobytes",
		"d": "1 KB = 1000 bytes",
		"answer": "a"
	},
  {
		"id": 9,
		"question": " 1 Gigabyte (GB) is equal to ?",
		"a": "1024 KB",
		"b": " 1024 MB",
		"c": "1024 TB",
		"d": "1 MB",

		"answer": "b"
	},

  {
		"id": 10,
		"question": "Every computer connected to the Internet is identified by a unique four-part string, known as",
		"a": "IP address",
		"b": "Host name",

		"c": "    Domain name",
		"d": "None of the above",
		"answer": "a"
	},
	];


	submitTest() {
		this.rightAnswer = 0;
		this.totalAnswered = 0;
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i] && (this.allQuestions[i]["selected"] != null)) {
				this.totalAnswered++;
				if (this.allQuestions[i]["selected"] == this.allQuestions[i]["answer"]) {
					this.rightAnswer++;
				}
			}

		}
		this.submitModal.show();

	}

	startQuiz() {
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i]) {
				delete this.allQuestions[i]["selected"];
			}

		}
		this.questionTest.reset();
		this.isQuestionCardShow = true;

	}
	HomePage() {
		this.isQuestionCardShow = false;
	}

	checkAnswers(){
		this.submitModal.hide();
		this.answerModal.show();
 if(this.rightAnswer>=7)
 {

  this.output=true;
 }
 else{
   this.output=false;
 }


	}

	ngOnInit() {



	}

}
