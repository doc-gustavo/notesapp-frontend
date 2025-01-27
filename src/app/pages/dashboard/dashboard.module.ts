import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { DashboardComponent } from './dashboard.component'; // Import DashboardComponent

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardComponent, // Import DashboardComponent here
    NoteListComponent,
    NoteDetailComponent,
    NoteFormComponent
  ]
})
export class DashboardModule { }