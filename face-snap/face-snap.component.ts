import {Component, Input, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../Service/face-snaps.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  snapButton!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private router:Router) {
  }

    ngOnInit() {
      this.snapButton = 'Oh Snap !';
    }
    onAddSnap(){
      if (this.snapButton === 'Oh Snap!') {
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
        this.snapButton = 'Déjà snappé, unSnap ?';
      }else {
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
        this.snapButton = "Oh Snap!";
      }
    }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}

