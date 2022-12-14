import { TokenInterceptorService } from './Service/token-interceptor.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { RegisterComponent } from './Auth/register/register.component';
import { BoardComponent } from './dashboard/board/board.component';
import { ThriftTableComponent } from './dashboard/thrift/thrift-table/thrift-table.component';
import { ThriftBoardComponent } from './dashboard/thrift/thrift-board/thrift-board.component';
import { BoardsComponent } from './dashboard/thrift/boards/boards.component';
import { CreateThriftComponent } from './dashboard/thrift/create-thrift/create-thrift.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThriflogsTableComponent } from './dashboard/thrift/thriflogs-table/thriflogs-table.component';
import { JoinThriftComponent } from './dashboard/thrift/join-thrift/join-thrift.component';
import { CreateThriftsComponent } from './dashboard/thrift/create-thrifts/create-thrifts.component';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewMoreComponent } from './dashboard/thrift/view-more/view-more.component';
import { PreloaderComponent } from './Component/preloader/preloader.component';
import { NotificationModalComponent } from './Component/notification-modal/notification-modal.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ThriftAnnounceModalComponent } from './Component/Annoucement/thrift-announce-modal/thrift-announce-modal.component';
import { TransferFundsInternallyComponent } from './Payment/transfer-funds-internally/transfer-funds-internally.component';
import { VerifyOtpComponent } from './Auth/verify-otp/verify-otp.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProfileUpdateComponent } from './Settings/profile-update/profile-update.component';
import { CardUpdateComponent } from './Settings/card-update/card-update.component';
import { SettingsComponent } from './Settings/settings.component';
import { VerificationComponent } from './Settings/verification/verification.component';
import { ForgetPasswordComponent } from './Auth/forget-password/forget-password.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    SigninComponent,
    RegisterComponent,
    BoardComponent,
    ThriftTableComponent,
    ThriftBoardComponent,
    BoardsComponent,
    CreateThriftComponent,
    ThriflogsTableComponent,
    JoinThriftComponent,
    CreateThriftsComponent,
    ViewMoreComponent,
    PreloaderComponent,
    NotificationModalComponent,
    SideBarComponent,
    ThriftAnnounceModalComponent,
    TransferFundsInternallyComponent,
    VerifyOtpComponent,
    ProfileUpdateComponent,
    CardUpdateComponent,
    SettingsComponent,
    VerificationComponent,
    ForgetPasswordComponent
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgChartsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'top-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    HttpClientModule
  
  ],
  providers: [ 
    // {
    //             provide: HTTP_INTERCEPTORS,
    //             useClass: TokenInterceptorService,
    //             multi: true,
    //           }
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
