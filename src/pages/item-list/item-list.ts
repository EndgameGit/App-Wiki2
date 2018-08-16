import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { Post } from '../../entities/post.entiy';

/**
 * Generated class for the ItemListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-list',
  templateUrl: 'item-list.html'
})
export class ItemListPage {
  public cat: string;
  public topic: string;

  public posts: Post[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: StorageProvider
  ) {
    this.cat = this.navParams.get('cat');
    this.topic = this.navParams.get('topic');
    this.filterPosts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemListPage');
  }

  filterPosts() {
    this.storage.getValue<Post[]>('posts').then(value => {
      if (Array.isArray(value)) {
        this.posts = value.filter(k => {
          return k.cat === this.cat && k.topic === this.topic;
        });
        console.log('Filtered array', this.posts);
      }
    });
  }

  openItem(post: Post) {
    this.navCtrl.push('ItemDetailPage', { post: post });
  }
}
