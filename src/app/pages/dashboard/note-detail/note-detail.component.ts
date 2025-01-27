import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService, Note } from '../../../core/services/note.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {
  note: Note | null = null;

  constructor(private route: ActivatedRoute, @Inject(NoteService) private noteService: NoteService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.noteService.getNoteById(id).subscribe({
        next: (data: any) => this.note = data,
        error: () => console.error('Nota no encontrada')
      });
    }
  }
}
