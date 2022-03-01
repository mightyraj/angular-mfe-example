import { loadRemoteEntry, loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, ComponentFactoryResolver, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { SharedService } from 'sh-lib';
import { environment } from '../environments/environment';


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
    private shared: SharedService
  ) {
    this.shared.setVal('testing');
    this.shared.setStoredValue('storerdx');
   }
  ngAfterViewInit(): void {
    loadRemoteModule({
      type: 'module',
      remoteEntry: environment.mfe.mfe1Url,
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
      remoteEntry: environment.mfe.mfe1Url,
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
      remoteEntry: environment.mfe.mfe2Url,
      exposedModule: './MfefooterComponent',
    }).then(comp => {
      const factory = this.resolver.resolveComponentFactory(comp.FooterComponent);
      this.footer.createComponent(factory, undefined, this.injector);
    }).catch(err => {
      console.log(err);
    });

  }
}
