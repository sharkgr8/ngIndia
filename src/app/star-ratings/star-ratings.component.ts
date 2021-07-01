import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.css']
})
export class StarRatingsComponent implements OnInit {
  @Input() ratings: number = 0;
  @Output() changeRatings = new EventEmitter<number>();
  stars: number[] = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

  changeRating(newRating: number): void {
    this.ratings = newRating;
    this.changeRatings.emit(newRating);
  }
}
