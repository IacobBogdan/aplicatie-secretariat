import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UIv2';

  constructor(
    private vcr:ViewContainerRef,
    private cfr:ComponentFactoryResolver
  ){}

  // async loadStudent()
  // {
  //   this.vcr.clear();
  //   const {StudentComponent} = await import('./student/student.component');
  //   this.vcr.createComponent(
  //     this.cfr.resolveComponentFactory(StudentComponent)
  //   )
  // }
}
