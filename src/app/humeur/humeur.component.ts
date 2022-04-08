import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-humeur',
  templateUrl: './humeur.component.html',
  styleUrls: ['./humeur.component.css'],
})
export class HumeurComponent implements OnInit {
  @Input() monHumeur: 'bon' | 'moyen' | 'bof' | string | undefined;

  constructor() {}

  ngOnInit() {}
}
