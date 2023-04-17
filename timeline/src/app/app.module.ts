import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { TaskComponent } from './task/task.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MaterialModule } from './material/material.module';
import { AddjobsComponent } from './addjobs/addjobs.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FirstchartComponent } from './firstchart/firstchart.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopWidgetComponent } from './top-widget/top-widget.component';
import { Apiservice } from './shared/api';
import { AreachartComponent } from './areachart/areachart.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { SettingComponent } from './setting/setting.component';
import { SidenavComponent } from './sidebar/sidenav/sidenav.component';
import { CompanyComponent } from './setting/company/company.component';
import { UsersComponent } from './setting/users/users.component';
import { NotifyComponent } from './setting/notify/notify.component';
import { BoardService } from './shared/board.service';
import { MatChip, MatChipsModule } from '@angular/material/chips';
import { CardDetailComponent } from './card/card-detail/card-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    TaskComponent,
    AddjobsComponent,
    FirstchartComponent,
    CardComponent,
    DashboardComponent,
    TopWidgetComponent,
    AreachartComponent,
    TableComponent,
    SettingComponent,
    SidenavComponent,
    CompanyComponent,
    UsersComponent,
    NotifyComponent,
    CardDetailComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    DragDropModule,
    MaterialModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatChipsModule,
    FormsModule
  ],
  providers: [Apiservice,BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
