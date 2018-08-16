import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { Post } from '../../entities/post.entiy';

/**
 * Generated class for the CreatePostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-post',
  templateUrl: 'create-post.html'
})
export class CreatePostPage {
  public newPost = {} as Post;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: StorageProvider,
    private toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePostPage');
  }

  savePost() {
    this.storage.getValue<Post[]>('posts').then(value => {
      if (!Array.isArray(value)) {
        value = new Array<Post>();
      }
      value.push(this.newPost);
      this.storage.setValue('posts', value).then(() => {
        console.log('New Array saved');

        this.toastCtrl
          .create({
            duration: 1500,
            message: 'Beitrag erstellt'
          })
          .present();
      });
    });
  }
}
