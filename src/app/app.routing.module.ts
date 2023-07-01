import { RouterModule, Routes, } from "@angular/router";
import { NgModule } from "@angular/core";
import { AlumnoReactiveComponent } from "./formularios/alumno-reactive/alumno-reactive.component";
import { Ievn2Component } from "./utl/ievn2/ievn2.component";

const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'IEVN', component: Ievn2Component
    },
    { path: 'Formulario', component: AlumnoReactiveComponent },
   // {path: '**', component: PagenotFoundComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }