import { Component, Inject, OnInit } from '@angular/core';
import { NoteService, Note } from '../../../core/services/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];

  constructor(@Inject(NoteService) private noteService: NoteService, private router: Router) {}

  ngOnInit(): void {
    this.noteService.getAllNotes().subscribe({
      next: (data: Note[]) => this.notes = data,
      error: () => console.error('Error al cargar las notas')
    });
  }

  viewNote(id: number): void {
    this.router.navigate(['/dashboard/note', id]);
  }

  createNote(): void {
    this.router.navigate(['/dashboard/new']);
  }
}
