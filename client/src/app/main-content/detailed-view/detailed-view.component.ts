import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Detailed, Grament } from 'src/app/types/garment';
import { User } from 'src/app/types/user';
import { UsererService } from 'src/app/user/user.service';
import { Comment } from 'src/app/types/comment';


@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent implements OnInit {
  showEdit: boolean = false;
  currentUser: User | undefined;
  postOwnerId = '';
  submitted: boolean = false;

  garment: Grament = {
    _id: '',
    model: '',
    img: '',
    color: '',
    price: '',
    gender: '',
    size: '',
    description: '',
    comments: [],
    _ownerId: ''
  };

  comments: Comment[] = [];
  comment: Comment = {
    _id: '',
    email: '',
    text: '',
    garmentId: ''

  }

  form = this.fb.group({
    model: [this.garment?.model || undefined, [Validators.required]],
    img: [this.garment?.img || undefined, [Validators.required]],
    color: [this.garment?.color || undefined, [Validators.required]],
    price: [this.garment?.price || undefined, [Validators.required, Validators.min(0)]],
    gender: [this.garment?.gender || undefined, [Validators.required]],
    size: [this.garment?.size || undefined, [Validators.required]],
    description: [this.garment?.description || undefined, [Validators.required, Validators.minLength(10)]]
  })
  commentForm = this.fb.group({
    comment: [this.comment.text || undefined, [Validators.required]]
  })

  toggleEditForm() {
    this.showEdit = true;
  }
  get isLogged(): boolean {
    return this.userService.isLoggedIn
  }
  save(): void {
    if (this.form.invalid) {
      return
    }
    this.garment = this.form.value as Grament;

    const garmentId = this.getCurrentGarmentId();
    const data: Partial<Grament> = {
      model: this.form.value.model || undefined,
      img: this.form.value.img || undefined,
      color: this.form.value.color || undefined,
      price: this.form.value.price || undefined,
      gender: this.form.value.gender || undefined,
      size: this.form.value.size || undefined,
      description: this.form.value.description || undefined
    };

    this.apiSerivce.editPost(garmentId, data).subscribe({
      next: (updatedGarment) => {
        console.log('Garment updated successfully:', updatedGarment);
        this.showEdit = false;
        this.router.navigate([`/catalog/${garmentId}`])
      },
      error: (error) => {
        console.error('Error updating garment:', error);
      }
    });
  }

  del() {
    const garmentId = this.getCurrentGarmentId()
    this.apiSerivce.deletePost(garmentId).subscribe({
      next: () => {
        this.router.navigate(['/catalog'])
      },
      error: (err) => {
        console.error(err)
      }
    }

    )
  }
  addComment() {
    //  console.log('clicked')
    const garmentId = this.getCurrentGarmentId();
    let userEmail = this.currentUser?.email;
    this.submitted = true;
    if (this.commentForm.invalid) {
      return;
    }

    const data: Partial<Comment> = {
      email: userEmail,
      text: this.commentForm.value.comment || undefined,
      garmentId: garmentId
    }
    this.apiSerivce.addComment(garmentId, data).subscribe({

      next: (comment) => {
        //  this.garment.comments.push(comment)
           this.submitted=false
        this.commentForm.reset()
        this.apiSerivce.getPostsComments(garmentId).subscribe({
          next: (comments) => {
            this.comments = comments
          },
          error: (err) => {
            console.error(err)
          }
        })
      },
      error: (err) => {
        console.error(err)
      }
    })

  }

  constructor(private fb: FormBuilder, private router: Router, private userService: UsererService, private apiSerivce: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const garmentId = this.getCurrentGarmentId();
    this.apiSerivce.getPost(garmentId).subscribe({
      next: (garment: Grament) => {
        this.garment = garment;

        this.form.patchValue({
          model: this.garment.model,
          img: this.garment.img,
          color: this.garment.color,
          price: this.garment.price,
          gender: this.garment.gender,
          size: this.garment.size,
          description: this.garment.description
        });
      },
      error: (error) => {
        console.error('Error fetching garment:', error);
      }
    });
    this.userService.getCurrentUser().subscribe({
      next: (user: User | undefined) => {
        this.currentUser = user;
      },
      error: (err) => {
        console.error(err);
      }
    });
    this.getpostOwnerId();
    this.apiSerivce.getPostsComments(garmentId).subscribe({
      next: (comments) => {
        this.comments = comments
      },
      error: (err) => {
        console.error(err);
      }
    })


  }
  getpostOwnerId() {
    const id = this.getCurrentGarmentId();
    return this.apiSerivce.getPost(id).subscribe({
      next: (garment: Grament) => {
        this.postOwnerId = garment._ownerId
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  isOwner(): boolean | undefined {
    return this.currentUser && this.currentUser._id === this.postOwnerId;
  }
  getCurrentGarmentId(): string {
    return this.route.snapshot.paramMap.get('garmentId') || '';
  }


}
