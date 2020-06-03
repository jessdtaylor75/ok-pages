import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'get-started',
    pathMatch: 'full'
  },
  {
    path: 'profile-home',
    loadChildren: () => import('./profile-home/profile-home.module').then( m => m.ProfileHomePageModule)
  },
  {
    path: 'view-personal-info',
    loadChildren: () => import('./view-personal-info/view-personal-info.module').then( m => m.ViewPersonalInfoPageModule)
  },
  {
    path: 'edit-personal-info',
    loadChildren: () => import('./edit-personal-info/edit-personal-info.module').then( m => m.EditPersonalInfoPageModule)
  },
  {
    path: 'view-address-list',
    loadChildren: () => import('./view-address-list/view-address-list.module').then( m => m.ViewAddressListPageModule)
  },
  {
    path: 'view-address',
    loadChildren: () => import('./view-address/view-address.module').then( m => m.ViewAddressPageModule)
  },
  {
    path: 'edit-address',
    loadChildren: () => import('./edit-address/edit-address.module').then( m => m.EditAddressPageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./add-address/add-address.module').then( m => m.AddAddressPageModule)
  },
  {
    path: 'view-id-list',
    loadChildren: () => import('./view-id-list/view-id-list.module').then( m => m.ViewIdListPageModule)
  },
  {
    path: 'view-id',
    loadChildren: () => import('./view-id/view-id.module').then( m => m.ViewIdPageModule)
  },
  {
    path: 'edit-id',
    loadChildren: () => import('./edit-id/edit-id.module').then( m => m.EditIdPageModule)
  },
  {
    path: 'add-id',
    loadChildren: () => import('./add-id/add-id.module').then( m => m.AddIdPageModule)
  },
  {
    path: 'verify-identity',
    loadChildren: () => import('./verify-identity/verify-identity.module').then( m => m.VerifyIdentityPageModule)
  },
  {
    path: 'view-bank-list',
    loadChildren: () => import('./view-bank-list/view-bank-list.module').then( m => m.ViewBankListPageModule)
  },
  {
    path: 'view-bank',
    loadChildren: () => import('./view-bank/view-bank.module').then( m => m.ViewBankPageModule)
  },
  {
    path: 'view-card1',
    loadChildren: () => import('./view-card1/view-card1.module').then( m => m.ViewCard1PageModule)
  },
  {
    path: 'view-card2',
    loadChildren: () => import('./view-card2/view-card2.module').then( m => m.ViewCard2PageModule)
  },
  {
    path: 'view-health-info',
    loadChildren: () => import('./view-health-info/view-health-info.module').then( m => m.ViewHealthInfoPageModule)
  },
  {
    path: 'view-hc-status',
    loadChildren: () => import('./view-hc-status/view-hc-status.module').then( m => m.ViewHcStatusPageModule)
  },
  {
    path: 'view-insurance',
    loadChildren: () => import('./view-insurance/view-insurance.module').then( m => m.ViewInsurancePageModule)
  },
  {
    path: 'edit-insurance',
    loadChildren: () => import('./edit-insurance/edit-insurance.module').then( m => m.EditInsurancePageModule)
  },
  {
    path: 'add-insurance',
    loadChildren: () => import('./add-insurance/add-insurance.module').then( m => m.AddInsurancePageModule)
  },
  {
    path: 'no-insurance',
    loadChildren: () => import('./no-insurance/no-insurance.module').then( m => m.NoInsurancePageModule)
  },
  {
    path: 'view-test-list',
    loadChildren: () => import('./view-test-list/view-test-list.module').then( m => m.ViewTestListPageModule)
  },
  {
    path: 'scan-email',
    loadChildren: () => import('./scan-email/scan-email.module').then( m => m.ScanEmailPageModule)
  },
  {
    path: 'hc-status-display',
    loadChildren: () => import('./hc-status-display/hc-status-display.module').then( m => m.HcStatusDisplayPageModule)
  },
  {
    path: 'view-test-details',
    loadChildren: () => import('./view-test-details/view-test-details.module').then( m => m.ViewTestDetailsPageModule)
  },
  {
    path: 'add-test',
    loadChildren: () => import('./add-test/add-test.module').then( m => m.AddTestPageModule)
  },
  {
    path: 'home-scanner',
    loadChildren: () => import('./home-scanner/home-scanner.module').then( m => m.HomeScannerPageModule)
  },
  {
    path: 'hc-status-clear',
    loadChildren: () => import('./hc-status-clear/hc-status-clear.module').then( m => m.HcStatusClearPageModule)
  },
  {
    path: 'hc-status-recovered',
    loadChildren: () => import('./hc-status-recovered/hc-status-recovered.module').then( m => m.HcStatusRecoveredPageModule)
  },
  {
    path: 'hc-status-pending',
    loadChildren: () => import('./hc-status-pending/hc-status-pending.module').then( m => m.HcStatusPendingPageModule)
  },
  {
    path: 'hc-status-c19positive',
    loadChildren: () => import('./hc-status-c19positive/hc-status-c19positive.module').then( m => m.HcStatusC19positivePageModule)
  },
  {
    path: 'view-employer-list',
    loadChildren: () => import('./view-employer-list/view-employer-list.module').then( m => m.ViewEmployerListPageModule)
  },
  {
    path: 'view-employer',
    loadChildren: () => import('./view-employer/view-employer.module').then( m => m.ViewEmployerPageModule)
  },
  {
    path: 'edit-employer',
    loadChildren: () => import('./edit-employer/edit-employer.module').then( m => m.EditEmployerPageModule)
  },
  {
    path: 'add-employer',
    loadChildren: () => import('./add-employer/add-employer.module').then( m => m.AddEmployerPageModule)
  },
  {
    path: 'no-employer',
    loadChildren: () => import('./no-employer/no-employer.module').then( m => m.NoEmployerPageModule)
  },
  {
    path: 'request-status',
    loadChildren: () => import('./request-status/request-status.module').then( m => m.RequestStatusPageModule)
  },
  {
    path: 'legal-agreements',
    loadChildren: () => import('./legal-agreements/legal-agreements.module').then( m => m.LegalAgreementsPageModule)
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () => import('./terms-and-conditions/terms-and-conditions.module').then( m => m.TermsAndConditionsPageModule)
  },
  {
    path: 'get-started',
    loadChildren: () => import('./get-started/get-started.module').then( m => m.GetStartedPageModule)
  },
  {
    path: 'payment-auth',
    loadChildren: () => import('./payment-auth/payment-auth.module').then( m => m.PaymentAuthPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'choose-address',
    loadChildren: () => import('./choose-address/choose-address.module').then( m => m.ChooseAddressPageModule)
  },
  {
    path: 'payment-success',
    loadChildren: () => import('./payment-success/payment-success.module').then( m => m.PaymentSuccessPageModule)
  },
  {
    path: 'new-passcode',
    loadChildren: () => import('./new-passcode/new-passcode.module').then( m => m.NewPasscodePageModule)
  },
  {
    path: 'add-personal-info',
    loadChildren: () => import('./add-personal-info/add-personal-info.module').then( m => m.AddPersonalInfoPageModule)
  },
  {
    path: 'jumio1',
    loadChildren: () => import('./jumio1/jumio1.module').then( m => m.Jumio1PageModule)
  },
  {
    path: 'verify-email-success',
    loadChildren: () => import('./verify-email-success/verify-email-success.module').then( m => m.VerifyEmailSuccessPageModule)
  },
  {
    path: 'login-success',
    loadChildren: () => import('./login-success/login-success.module').then( m => m.LoginSuccessPageModule)
  },
  {
    path: 'login-auth',
    loadChildren: () => import('./login-auth/login-auth.module').then( m => m.LoginAuthPageModule)
  },
  {
    path: 'biometrics-security',
    loadChildren: () => import('./biometrics-security/biometrics-security.module').then( m => m.BiometricsSecurityPageModule)
  },
  {
    path: 'scan-test',
    loadChildren: () => import('./scan-test/scan-test.module').then( m => m.ScanTestPageModule)
  },
  {
    path: 'test-success',
    loadChildren: () => import('./test-success/test-success.module').then( m => m.TestSuccessPageModule)
  },
  {
    path: 'home-scanner-first-use',
    loadChildren: () => import('./home-scanner-first-use/home-scanner-first-use.module').then( m => m.HomeScannerFirstUsePageModule)
  },
  {
    path: 'view-card3',
    loadChildren: () => import('./view-card3/view-card3.module').then( m => m.ViewCard3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
