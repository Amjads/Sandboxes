import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { MailFolderComponent }   from './mail-folder/mail-folder.component';
import { RouterModule, Routes }  from '@angular/router';
import { AppMaterialModule }     from '../app.material.module';
import { StoreModule }           from '@ngrx/store';
import { reducer }               from './ngrx-store/reducer';
import { FolderService }         from './folder.service';

const routes: Routes = [
  {path: '', component: MailFolderComponent}
];

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('mailbox', reducer)
  ],
  declarations: [MailFolderComponent],
  providers: [FolderService]
})
export class MailBoxModule {
}
