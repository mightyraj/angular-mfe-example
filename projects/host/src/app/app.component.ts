import { loadRemoteEntry, loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, ComponentFactoryResolver, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { TestService } from 'services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'host';
  // @ViewChild('mfeHome', { read: ViewContainerRef, static: true })
  // viewContainer!: ViewContainerRef;

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  @ViewChild('header', { read: ViewContainerRef }) header!: ViewContainerRef;
  @ViewChild('footer', { read: ViewContainerRef }) footer!: ViewContainerRef;
  constructor(
    private injector: Injector,
    private resolver: ComponentFactoryResolver,
    private testServ: TestService
  ) {
    this.testServ.value = 'host app';
    console.log(this.testServ.value);
   }
  ngAfterViewInit(): void {
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:5000/mfe1remoteEntry.js',
      exposedModule: './MfehomeComponet',
    }).then(comp => {
      const factory = this.resolver.resolveComponentFactory(comp.HomeComponent);
      this.container.createComponent(factory, undefined, this.injector);
    }).catch(err => {
      console.log(err);
    });

    // Header sections
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:5000/mfe1remoteEntry.js',
      exposedModule: './MfeheaderComponent',
    }).then(comp => {
      const factory = this.resolver.resolveComponentFactory(comp.HeaderComponent);
      this.header.createComponent(factory, undefined, this.injector);
    }).catch(err => {
      console.log(err);
    });

    //footer section
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:5001/mfe2remoteEntry.js',
      exposedModule: './MfefooterComponent',
    }).then(comp => {
      const factory = this.resolver.resolveComponentFactory(comp.FooterComponent);
      this.footer.createComponent(factory, undefined, this.injector);
    }).catch(err => {
      console.log(err);
    });

    // loadRemoteEntry('http://localhost:5000/mfe1remoteEntry.js', 'mfe').then(e => {
    //   debugger;
    //   console.log(e)
    // }).catch(err => {
    //   debugger;
    //   console.log(err);
    // })

    // loadRemoteModule({
    //   type: 'module',
    //   remoteEntry: 'http://localhost:5000/mfe1remoteEntry.js',
    //   // remoteName: 'mfe',
    //   exposedModule: './MfehomeComponet'
    // }).then(comp => {
    //   console.log('>>>>>>>')
    // }).catch(er => {
    //   console.log('>>>')
    // })
  }
}
