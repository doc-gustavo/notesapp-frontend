import { Component, Inject } from '@angular/core';
import { NoteService, Note } from '../../../core/services/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent {
  note: Note = { title: '', content: '' };

  constructor(@Inject(NoteService) private noteService: NoteService, private router: Router) {}

  saveNote() {
    this.noteService.createNote(this.note).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: () => console.error('Error al guardar la nota')
    });
  }
}
