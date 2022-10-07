import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MenuButtonsComponent, TreeComponent } from './components';
import { MatTreeModule } from '@angular/material/tree';
import {
  LayoutComponent,
  BrowserModalComponent,
  HistoryComponent,
  UploadComponent,
} from './containers';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilePickerService } from './services';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TreeComponent,
    UploadComponent,
    HistoryComponent,
    BrowserModalComponent,
    MenuButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatListModule,
    MatTreeModule,
    MatInputModule,
    MatDialogModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [FilePickerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
