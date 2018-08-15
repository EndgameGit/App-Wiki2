import { Component } from '@angular/core';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public tab1Root = 'OverviewPage';
  public tab2Root = 'CreatePostPage';
  public tab3Root = 'ProfilePage';
  public tab4Root = 'SettingsPage';

  constructor() {

  }
}
