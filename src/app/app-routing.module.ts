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
  {
    path: 'hc-result',
    loadChildren: () => import('./hc-result/hc-result.module').then( m => m.HcResultPageModule)
  },
  {
    path: 'hc-status-unknown',
    loadChildren: () => import('./hc-status-unknown/hc-status-unknown.module').then( m => m.HcStatusUnknownPageModule)
  },
  {
    path: 'payment-auth-safetypass',
    loadChildren: () => import('./payment-auth-safetypass/payment-auth-safetypass.module').then( m => m.PaymentAuthSafetypassPageModule)
  },
  {
    path: 'payment-success-safetypass',
    loadChildren: () => import('./payment-success-safetypass/payment-success-safetypass.module').then( m => m.PaymentSuccessSafetypassPageModule)
  },
  {
    path: 'login-auth-safetypass',
    loadChildren: () => import('./login-auth-safetypass/login-auth-safetypass.module').then( m => m.LoginAuthSafetypassPageModule)
  },
  {
    path: 'view-id2',
    loadChildren: () => import('./view-id2/view-id2.module').then( m => m.ViewId2PageModule)
  },
  {
    path: 'view-id3',
    loadChildren: () => import('./view-id3/view-id3.module').then( m => m.ViewId3PageModule)
  },
  {
    path: 'view-hc-controls',
    loadChildren: () => import('./view-hc-controls/view-hc-controls.module').then( m => m.ViewHcControlsPageModule)
  },
  {
    path: 'hc-status-not-certified',
    loadChildren: () => import('./hc-status-not-certified/hc-status-not-certified.module').then( m => m.HcStatusNotCertifiedPageModule)
  },
  {
    path: 'biometrics',
    loadChildren: () => import('./biometrics/biometrics.module').then( m => m.BiometricsPageModule)
  },
  {
    path: 'enter-email',
    loadChildren: () => import('./enter-email/enter-email.module').then( m => m.EnterEmailPageModule)
  },
  {
    path: 'view-recovery-pass',
    loadChildren: () => import('./view-recovery-pass/view-recovery-pass.module').then( m => m.ViewRecoveryPassPageModule)
  },
  {
    path: 'biometrics-security-view',
    loadChildren: () => import('./biometrics-security-view/biometrics-security-view.module').then( m => m.BiometricsSecurityViewPageModule)
  },
  {
    path: 'verify-id-recovery',
    loadChildren: () => import('./verify-id-recovery/verify-id-recovery.module').then( m => m.VerifyIdRecoveryPageModule)
  },
  {
    path: 'scan-email-recovery',
    loadChildren: () => import('./scan-email-recovery/scan-email-recovery.module').then( m => m.ScanEmailRecoveryPageModule)
  },
  {
    path: 'jumio-recovery',
    loadChildren: () => import('./jumio-recovery/jumio-recovery.module').then( m => m.JumioRecoveryPageModule)
  },
  {
    path: 'enter-email-error',
    loadChildren: () => import('./enter-email-error/enter-email-error.module').then( m => m.EnterEmailErrorPageModule)
  },
  {
    path: 'passes-modal',
    loadChildren: () => import('./passes-modal/passes-modal.module').then( m => m.PassesModalPageModule)
  },
  {
    path: 'pass1',
    loadChildren: () => import('./pass1/pass1.module').then( m => m.Pass1PageModule)
  },
  {
    path: 'pass2',
    loadChildren: () => import('./pass2/pass2.module').then( m => m.Pass2PageModule)
  },
  {
    path: 'pass3',
    loadChildren: () => import('./pass3/pass3.module').then( m => m.Pass3PageModule)
  },
  {
    path: 'pass4',
    loadChildren: () => import('./pass4/pass4.module').then( m => m.Pass4PageModule)
  },
  {
    path: 'pass5',
    loadChildren: () => import('./pass5/pass5.module').then( m => m.Pass5PageModule)
  },
  {
    path: 'pass',
    loadChildren: () => import('./pass/pass.module').then( m => m.PassPageModule)
  },
  {
    path: 'pass6',
    loadChildren: () => import('./pass6/pass6.module').then( m => m.Pass6PageModule)
  },
  {
    path: 'consent-docs',
    loadChildren: () => import('./consent-docs/consent-docs.module').then( m => m.ConsentDocsPageModule)
  },
  {
    path: 'consent-document1',
    loadChildren: () => import('./consent-document1/consent-document1.module').then( m => m.ConsentDocument1PageModule)
  },
  {
    path: 'app-store',
    loadChildren: () => import('./app-store/app-store.module').then( m => m.AppStorePageModule)
  },
  {
    path: 'app-store-open',
    loadChildren: () => import('./app-store-open/app-store-open.module').then( m => m.AppStoreOpenPageModule)
  },
  {
    path: 'app-browser',
    loadChildren: () => import('./app-browser/app-browser.module').then( m => m.AppBrowserPageModule)
  },
  {
    path: 'app-browser-restmenu',
    loadChildren: () => import('./app-browser-restmenu/app-browser-restmenu.module').then( m => m.AppBrowserRestmenuPageModule)
  },
  {
    path: 'app-browser-spnet',
    loadChildren: () => import('./app-browser-spnet/app-browser-spnet.module').then( m => m.AppBrowserSpnetPageModule)
  },
  {
    path: 'app-email-client-verify',
    loadChildren: () => import('./app-email-client-verify/app-email-client-verify.module').then( m => m.AppEmailClientVerifyPageModule)
  },
  {
    path: 'app-email-client-find',
    loadChildren: () => import('./app-email-client-find/app-email-client-find.module').then( m => m.AppEmailClientFindPageModule)
  },
  {
    path: 'app-email-client-get',
    loadChildren: () => import('./app-email-client-get/app-email-client-get.module').then( m => m.AppEmailClientGetPageModule)
  },
  {
    path: 'app-browser-first-checkin',
    loadChildren: () => import('./app-browser-first-checkin/app-browser-first-checkin.module').then( m => m.AppBrowserFirstCheckinPageModule)
  },
  {
    path: 'app-browser-map',
    loadChildren: () => import('./app-browser-map/app-browser-map.module').then( m => m.AppBrowserMapPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'delete-account',
    loadChildren: () => import('./delete-account/delete-account.module').then( m => m.DeleteAccountPageModule)
  },
  {
    path: 'view-check-ins',
    loadChildren: () => import('./view-check-ins/view-check-ins.module').then( m => m.ViewCheckInsPageModule)
  },
  {
    path: 'first-options',
    loadChildren: () => import('./first-options/first-options.module').then( m => m.FirstOptionsPageModule)
  },
  {
    path: 'verify-mobile-number-success',
    loadChildren: () => import('./verify-mobile-number-success/verify-mobile-number-success.module').then( m => m.VerifyMobileNumberSuccessPageModule)
  },
  {
    path: 'profile-code',
    loadChildren: () => import('./profile-code/profile-code.module').then( m => m.ProfileCodePageModule)
  },
  {
    path: 'checkin-success',
    loadChildren: () => import('./checkin-success/checkin-success.module').then( m => m.CheckinSuccessPageModule)
  },
  {
    path: 'view-hc-alerts',
    loadChildren: () => import('./view-hc-alerts/view-hc-alerts.module').then( m => m.ViewHcAlertsPageModule)
  },
  {
    path: 'view-notifications',
    loadChildren: () => import('./view-notifications/view-notifications.module').then( m => m.ViewNotificationsPageModule)
  },
  {
    path: 'hc-access-scanner',
    loadChildren: () => import('./hc-access-scanner/hc-access-scanner.module').then( m => m.HcAccessScannerPageModule)
  },
  {
    path: 'pass-checklist',
    loadChildren: () => import('./pass-checklist/pass-checklist.module').then( m => m.PassChecklistPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
