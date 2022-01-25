import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//importando o módulo Forms
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { InterpolationComponent } from './componentes/interpolation/interpolation.component';
import { PropertyBindingComponent } from './componentes/property-binding/property-binding.component';
import { EventBindingComponent } from './componentes/event-binding/event-binding.component';
import { HomeComponent } from './componentes/home/home.component';
import { TwoWayComponent } from './componentes/two-way/two-way.component';
import { MasterOfPuppetsComponent } from './componentes/master-of-puppets/master-of-puppets.component';
import { InputComponent } from './componentes/input/input.component';
import { OutputComponent } from './componentes/output/output.component';
import { NgIfComponent } from './componentes/ng-if/ng-if.component';
import { NgForComponent } from './componentes/ng-for/ng-for.component';
import { NgClassComponent } from './componentes/ng-class/ng-class.component';
import { NgStyleComponent } from './componentes/ng-style/ng-style.component';
import { AlterarTextoDirective } from './alterar-texto.directive';
import { CustomDirComponent } from './componentes/custom-dir/custom-dir.component';
import { CompServiceComponent } from './componentes/comp-service/comp-service.component';
//importando o service
import { ProductService } from './product.service';
import { TestandoService } from './testando.service';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    HomeComponent,
    TwoWayComponent,
    MasterOfPuppetsComponent,
    InputComponent,
    OutputComponent,
    NgIfComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    AlterarTextoDirective,
    CustomDirComponent,
    CompServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService, TestandoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
