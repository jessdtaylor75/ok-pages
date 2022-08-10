import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
    path: 'verify-identity',
    loadChildren: () => import('./verify-identity/verify-identity.module').then( m => m.VerifyIdentityPageModule)
  },
  {
    path: 'scan-email',
    loadChildren: () => import('./scan-email/scan-email.module').then( m => m.ScanEmailPageModule)
  },
  {
    path: 'home-scanner',
    loadChildren: () => import('./home-scanner/home-scanner.module').then( m => m.HomeScannerPageModule)
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
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'jumio1',
    loadChildren: () => import('./jumio1/jumio1.module').then( m => m.Jumio1PageModule)
  },
  {
    path: 'home-scanner-first-use',
    loadChildren: () => import('./home-scanner-first-use/home-scanner-first-use.module').then( m => m.HomeScannerFirstUsePageModule)
  },
  {
    path: 'biometrics',
    loadChildren: () => import('./biometrics/biometrics.module').then( m => m.BiometricsPageModule)
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
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'delete-account',
    loadChildren: () => import('./delete-account/delete-account.module').then( m => m.DeleteAccountPageModule)
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
  {
    path: 'about-mc',
    loadChildren: () => import('./about-mc/about-mc.module').then( m => m.AboutMcPageModule)
  },
  {
    path: 'browser-ap-desktop-login',
    loadChildren: () => import('./browser-ap-desktop-login/browser-ap-desktop-login.module').then( m => m.BrowserApDesktopLoginPageModule)
  },
  {
    path: 'browser-mc-desktop-login',
    loadChildren: () => import('./browser-mc-desktop-login/browser-mc-desktop-login.module').then( m => m.BrowserMcDesktopLoginPageModule)
  },
  {
    path: 'get-started-mc',
    loadChildren: () => import('./get-started-mc/get-started-mc.module').then( m => m.GetStartedMcPageModule)
  },
  {
    path: 'auth-login-mc',
    loadChildren: () => import('./auth-login-mc/auth-login-mc.module').then( m => m.AuthLoginMcPageModule)
  },
  {
    path: 'profile-home-mc',
    loadChildren: () => import('./profile-home-mc/profile-home-mc.module').then( m => m.ProfileHomeMcPageModule)
  },
  {
    path: 'scan-device-add',
    loadChildren: () => import('./scan-device-add/scan-device-add.module').then( m => m.ScanDeviceAddPageModule)
  },
  {
    path: 'badge-device-add',
    loadChildren: () => import('./badge-device-add/badge-device-add.module').then( m => m.BadgeDeviceAddPageModule)
  },
  {
    path: 'delete-device',
    loadChildren: () => import('./delete-device/delete-device.module').then( m => m.DeleteDevicePageModule)
  },
  {
    path: 'verify-service-mc',
    loadChildren: () => import('./verify-service-mc/verify-service-mc.module').then( m => m.VerifyServiceMcPageModule)
  },
  {
    path: 'delete-persona',
    loadChildren: () => import('./delete-persona/delete-persona.module').then( m => m.DeletePersonaPageModule)
  },
  {
    path: 'delete-payment',
    loadChildren: () => import('./delete-payment/delete-payment.module').then( m => m.DeletePaymentPageModule)
  },
  {
    path: 'success-verify-service-mc',
    loadChildren: () => import('./success-verify-service-mc/success-verify-service-mc.module').then( m => m.SuccessVerifyServiceMcPageModule)
  },
  {
    path: 'personal-info-mc',
    loadChildren: () => import('./personal-info-mc/personal-info-mc.module').then( m => m.PersonalInfoMcPageModule)
  },
  {
    path: 'personal-info-mc-unverified',
    loadChildren: () => import('./personal-info-mc-unverified/personal-info-mc-unverified.module').then( m => m.PersonalInfoMcUnverifiedPageModule)
  },
  {
    path: 'success-account-created',
    loadChildren: () => import('./success-account-created/success-account-created.module').then( m => m.SuccessAccountCreatedPageModule)
  },
  {
    path: 'scan-device-add-mc',
    loadChildren: () => import('./scan-device-add-mc/scan-device-add-mc.module').then( m => m.ScanDeviceAddMcPageModule)
  },
  {
    path: 'biometrics-mc',
    loadChildren: () => import('./biometrics-mc/biometrics-mc.module').then( m => m.BiometricsMcPageModule)
  },
  {
    path: 'success-device-connected',
    loadChildren: () => import('./success-device-connected/success-device-connected.module').then( m => m.SuccessDeviceConnectedPageModule)
  },
  {
    path: 'browser-branded-login',
    loadChildren: () => import('./browser-branded-login/browser-branded-login.module').then( m => m.BrowserBrandedLoginPageModule)
  },
  {
    path: 'browser-branded-desktop-login',
    loadChildren: () => import('./browser-branded-desktop-login/browser-branded-desktop-login.module').then( m => m.BrowserBrandedDesktopLoginPageModule)
  },
  {
    path: 'connected-accounts',
    loadChildren: () => import('./connected-accounts/connected-accounts.module').then( m => m.ConnectedAccountsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
