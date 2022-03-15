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
    path: 'scan-email',
    loadChildren: () => import('./scan-email/scan-email.module').then( m => m.ScanEmailPageModule)
  },
  {
    path: 'hc-status-display',
    loadChildren: () => import('./hc-status-display/hc-status-display.module').then( m => m.HcStatusDisplayPageModule)
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
    path: 'home-scanner-first-use',
    loadChildren: () => import('./home-scanner-first-use/home-scanner-first-use.module').then( m => m.HomeScannerFirstUsePageModule)
  },
  {
    path: 'view-card3',
    loadChildren: () => import('./view-card3/view-card3.module').then( m => m.ViewCard3PageModule)
  },
  {
    path: 'hc-status-unknown',
    loadChildren: () => import('./hc-status-unknown/hc-status-unknown.module').then( m => m.HcStatusUnknownPageModule)
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
    path: 'verify-id-recovery',
    loadChildren: () => import('./verify-id-recovery/verify-id-recovery.module').then( m => m.VerifyIdRecoveryPageModule)
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
    path: 'app-store',
    loadChildren: () => import('./app-store/app-store.module').then( m => m.AppStorePageModule)
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
    path: 'verify-mobile-number-success',
    loadChildren: () => import('./verify-mobile-number-success/verify-mobile-number-success.module').then( m => m.VerifyMobileNumberSuccessPageModule)
  },
  {
    path: 'profile-code',
    loadChildren: () => import('./profile-code/profile-code.module').then( m => m.ProfileCodePageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule)
  },
  {
    path: 'activate-card',
    loadChildren: () => import('./activate-card/activate-card.module').then( m => m.ActivateCardPageModule)
  },
  {
    path: 'activate-card-success',
    loadChildren: () => import('./activate-card-success/activate-card-success.module').then( m => m.ActivateCardSuccessPageModule)
  },
  {
    path: 'pass1-details',
    loadChildren: () => import('./pass1-details/pass1-details.module').then( m => m.Pass1DetailsPageModule)
  },
  {
    path: 'pass-details',
    loadChildren: () => import('./pass-details/pass-details.module').then( m => m.PassDetailsPageModule)
  },
  {
    path: 'pass2-details',
    loadChildren: () => import('./pass2-details/pass2-details.module').then( m => m.Pass2DetailsPageModule)
  },
  {
    path: 'pass3-details',
    loadChildren: () => import('./pass3-details/pass3-details.module').then( m => m.Pass3DetailsPageModule)
  },
  {
    path: 'view-idcard-list',
    loadChildren: () => import('./view-idcard-list/view-idcard-list.module').then( m => m.ViewIdcardListPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'military-connect',
    loadChildren: () => import('./military-connect/military-connect.module').then( m => m.MilitaryConnectPageModule)
  },
  {
    path: 'home-scanner-milconnect',
    loadChildren: () => import('./home-scanner-milconnect/home-scanner-milconnect.module').then( m => m.HomeScannerMilconnectPageModule)
  },
  {
    path: 'address-add',
    loadChildren: () => import('./address-add/address-add.module').then( m => m.AddressAddPageModule)
  },
  {
    path: 'card-add',
    loadChildren: () => import('./card-add/card-add.module').then( m => m.CardAddPageModule)
  },
  {
    path: 'persona-add',
    loadChildren: () => import('./persona-add/persona-add.module').then( m => m.PersonaAddPageModule)
  },
  {
    path: 'personal-info-add',
    loadChildren: () => import('./personal-info-add/personal-info-add.module').then( m => m.PersonalInfoAddPageModule)
  },
  {
    path: 'browser-mildeals',
    loadChildren: () => import('./browser-mildeals/browser-mildeals.module').then( m => m.BrowserMildealsPageModule)
  },
  {
    path: 'browser-mc-login',
    loadChildren: () => import('./browser-mc-login/browser-mc-login.module').then( m => m.BrowserMcLoginPageModule)
  },
  {
    path: 'browser-ap-login',
    loadChildren: () => import('./browser-ap-login/browser-ap-login.module').then( m => m.BrowserApLoginPageModule)
  },
  {
    path: 'browser-p-example',
    loadChildren: () => import('./browser-p-example/browser-p-example.module').then( m => m.BrowserPExamplePageModule)
  },
  {
    path: 'browser-ap-members',
    loadChildren: () => import('./browser-ap-members/browser-ap-members.module').then( m => m.BrowserApMembersPageModule)
  },
  {
    path: 'user-email-inbox',
    loadChildren: () => import('./user-email-inbox/user-email-inbox.module').then( m => m.UserEmailInboxPageModule)
  },
  {
    path: 'user-email-get-app',
    loadChildren: () => import('./user-email-get-app/user-email-get-app.module').then( m => m.UserEmailGetAppPageModule)
  },
  {
    path: 'user-email-verify',
    loadChildren: () => import('./user-email-verify/user-email-verify.module').then( m => m.UserEmailVerifyPageModule)
  },
  {
    path: 'user-app-store',
    loadChildren: () => import('./user-app-store/user-app-store.module').then( m => m.UserAppStorePageModule)
  },
  {
    path: 'settings-security',
    loadChildren: () => import('./settings-security/settings-security.module').then( m => m.SettingsSecurityPageModule)
  },
  {
    path: 'address-select',
    loadChildren: () => import('./address-select/address-select.module').then( m => m.AddressSelectPageModule)
  },
  {
    path: 'address-edit',
    loadChildren: () => import('./address-edit/address-edit.module').then( m => m.AddressEditPageModule)
  },
  {
    path: 'persona-edit',
    loadChildren: () => import('./persona-edit/persona-edit.module').then( m => m.PersonaEditPageModule)
  },
  {
    path: 'personal-info-edit',
    loadChildren: () => import('./personal-info-edit/personal-info-edit.module').then( m => m.PersonalInfoEditPageModule)
  },
  {
    path: 'browser-eas',
    loadChildren: () => import('./browser-eas/browser-eas.module').then( m => m.BrowserEasPageModule)
  },
  {
    path: 'error-email-in-use',
    loadChildren: () => import('./error-email-in-use/error-email-in-use.module').then( m => m.ErrorEmailInUsePageModule)
  },
  {
    path: 'badge-mc-navy',
    loadChildren: () => import('./badge-mc-navy/badge-mc-navy.module').then( m => m.BadgeMcNavyPageModule)
  },
  {
    path: 'badge-mc-usaf',
    loadChildren: () => import('./badge-mc-usaf/badge-mc-usaf.module').then( m => m.BadgeMcUsafPageModule)
  },
  {
    path: 'badge-mc-usmc',
    loadChildren: () => import('./badge-mc-usmc/badge-mc-usmc.module').then( m => m.BadgeMcUsmcPageModule)
  },
  {
    path: 'badge-mc-uscg',
    loadChildren: () => import('./badge-mc-uscg/badge-mc-uscg.module').then( m => m.BadgeMcUscgPageModule)
  },
  {
    path: 'badge-mc-default',
    loadChildren: () => import('./badge-mc-default/badge-mc-default.module').then( m => m.BadgeMcDefaultPageModule)
  },
  {
    path: 'badge-mc-army',
    loadChildren: () => import('./badge-mc-army/badge-mc-army.module').then( m => m.BadgeMcArmyPageModule)
  },
  {
    path: 'badge-app-default',
    loadChildren: () => import('./badge-app-default/badge-app-default.module').then( m => m.BadgeAppDefaultPageModule)
  },
  {
    path: 'legal',
    loadChildren: () => import('./legal/legal.module').then( m => m.LegalPageModule)
  },
  {
    path: 'auth-login',
    loadChildren: () => import('./auth-login/auth-login.module').then( m => m.AuthLoginPageModule)
  },
  {
    path: 'success-login',
    loadChildren: () => import('./success-login/success-login.module').then( m => m.SuccessLoginPageModule)
  },
  {
    path: 'auth-payment',
    loadChildren: () => import('./auth-payment/auth-payment.module').then( m => m.AuthPaymentPageModule)
  },
  {
    path: 'success-verify-email',
    loadChildren: () => import('./success-verify-email/success-verify-email.module').then( m => m.SuccessVerifyEmailPageModule)
  },
  {
    path: 'badge-profile-share',
    loadChildren: () => import('./badge-profile-share/badge-profile-share.module').then( m => m.BadgeProfileSharePageModule)
  },
  {
    path: 'success-verify-mobile',
    loadChildren: () => import('./success-verify-mobile/success-verify-mobile.module').then( m => m.SuccessVerifyMobilePageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'address-list',
    loadChildren: () => import('./address-list/address-list.module').then( m => m.AddressListPageModule)
  },
  {
    path: 'bank',
    loadChildren: () => import('./bank/bank.module').then( m => m.BankPageModule)
  },
  {
    path: 'bank-list',
    loadChildren: () => import('./bank-list/bank-list.module').then( m => m.BankListPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'card-x1',
    loadChildren: () => import('./card-x1/card-x1.module').then( m => m.CardX1PageModule)
  },
  {
    path: 'card-x2',
    loadChildren: () => import('./card-x2/card-x2.module').then( m => m.CardX2PageModule)
  },
  {
    path: 'card-x3',
    loadChildren: () => import('./card-x3/card-x3.module').then( m => m.CardX3PageModule)
  },
  {
    path: 'personas',
    loadChildren: () => import('./personas/personas.module').then( m => m.PersonasPageModule)
  },
  {
    path: 'persona-x1',
    loadChildren: () => import('./persona-x1/persona-x1.module').then( m => m.PersonaX1PageModule)
  },
  {
    path: 'persona-x2',
    loadChildren: () => import('./persona-x2/persona-x2.module').then( m => m.PersonaX2PageModule)
  },
  {
    path: 'persona',
    loadChildren: () => import('./persona/persona.module').then( m => m.PersonaPageModule)
  },
  {
    path: 'id-documents',
    loadChildren: () => import('./id-documents/id-documents.module').then( m => m.IdDocumentsPageModule)
  },
  {
    path: 'personal-info',
    loadChildren: () => import('./personal-info/personal-info.module').then( m => m.PersonalInfoPageModule)
  },
  {
    path: 'persona-x3',
    loadChildren: () => import('./persona-x3/persona-x3.module').then( m => m.PersonaX3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
