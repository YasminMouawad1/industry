import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

  
@Component({
  selector: 'app-html-to-pdf-make',
  templateUrl: './html-to-pdf-make.component.html',
  styleUrls:['./html-to-pdf-make.component.scss']
})
export class HtmlToPdfMakeComponent  implements OnInit{

  constructor() { }
  ngOnInit() {}

  public convetToPDF()
  {
  var data = document.getElementById('contentToConvert')!;
  html2canvas(data).then(canvas => {
  // Few necessary setting options
  var imgWidth = 208;
  var pageHeight = 295;
  var imgHeight = canvas.height * imgWidth / canvas.width;
  var heightLeft = imgHeight;
   
  const contentDataURL = canvas.toDataURL('image/png')
  let pdf = new jspdf.jsPDF('p', 'mm', 'a4');  
  var position = 0;
  pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
  pdf.save('new-file.pdf');  
  });
  }
 
}

 


