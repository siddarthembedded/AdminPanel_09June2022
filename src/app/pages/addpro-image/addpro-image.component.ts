import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-addpro-image',
  templateUrl: './addpro-image.component.html',
  styleUrls: ['./addpro-image.component.css']
})
export class AddproImageComponent implements OnInit {
  images: string[] = [];
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient) { }

  get f() {
    return this.myForm.controls;
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          console.log(event.target.result);
          this.images.push(event.target.result);

         
          this.patchValues();
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  // Patch form Values
  patchValues() {
    this.myForm.patchValue({
      fileSource: this.images
    });
  }

  // Remove Image
  removeImage(url: any) {
    console.log(this.images, url);
    this.images = this.images.filter(img => (img != url));
    this.patchValues();
  }

  // Submit Form Data
  submit() {
    // this.http.post('http://localhost:8005/upload.php', this.myForm.value)
    //   .subscribe(res => {
    //     console.log(res);
    //     alert('Uploaded Successfully.');
    //   })
  }

  ngOnInit(): void {
  }

}


