import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  OnDestroy, ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') headingElement: ElementRef;
  @ContentChild('contentParagraph') contentElement: ElementRef;
  constructor() {
    console.log('ServerElementComponent.constructor() invoked');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ServerElementComponent.ngOnChanges() invoked');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ServerElementComponent.ngOnInit() invoked, headingElement = '
      + this.headingElement.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ServerElementComponent.ngDoCheck() invoked');
  }

  ngAfterContentInit(): void {
    console.log('ServerElementComponent.ngAfterContentInit() invoked paragraphContent: ' +
    this.contentElement.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ServerElementComponent.ngAfterContentChecked() invoked');
  }

  ngAfterViewInit(): void {
    console.log('ServerElementComponent.ngAfterViewInit() invoked headingElement = '
      + this.headingElement.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ServerElementComponent.ngAfterViewChecked() invoked');
  }
  ngOnDestroy(): void {
    console.log('ServerElementComponent.ngOnDestroy() invoked');
  }

}
