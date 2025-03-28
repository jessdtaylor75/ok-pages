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
    path: 'browser-ap-desktop-login',
    loadChildren: () => import('./browser-ap-desktop-login/browser-ap-desktop-login.module').then( m => m.BrowserApDesktopLoginPageModule)
  },
  {
    path: 'browser-mc-desktop-login',
    loadChildren: () => import('./browser-mc-desktop-login/browser-mc-desktop-login.module').then( m => m.BrowserMcDesktopLoginPageModule)
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
  {
    path: 'badge-app-default-code',
    loadChildren: () => import('./badge-app-default-code/badge-app-default-code.module').then( m => m.BadgeAppDefaultCodePageModule)
  },
  {
    path: 'auth-login-ref',
    loadChildren: () => import('./auth-login-ref/auth-login-ref.module').then( m => m.AuthLoginRefPageModule)
  },
  {
    path: 'browser-branded-offer',
    loadChildren: () => import('./browser-branded-offer/browser-branded-offer.module').then( m => m.BrowserBrandedOfferPageModule)
  },
  {
    path: 'tm-media-app-artist',
    loadChildren: () => import('./tm-media-app-artist/tm-media-app-artist.module').then( m => m.TmMediaAppArtistPageModule)
  },
  {
    path: 'tm-destination-artist',
    loadChildren: () => import('./tm-destination-artist/tm-destination-artist.module').then( m => m.TmDestinationArtistPageModule)
  },
  {
    path: 'tm-browser-eas',
    loadChildren: () => import('./tm-browser-eas/tm-browser-eas.module').then( m => m.TmBrowserEasPageModule)
  },
  {
    path: 'tm-destination-artist-select',
    loadChildren: () => import('./tm-destination-artist-select/tm-destination-artist-select.module').then( m => m.TmDestinationArtistSelectPageModule)
  },
  {
    path: 'tm-destination-ticket-select',
    loadChildren: () => import('./tm-destination-ticket-select/tm-destination-ticket-select.module').then( m => m.TmDestinationTicketSelectPageModule)
  },
  {
    path: 'tm-auth-purchase',
    loadChildren: () => import('./tm-auth-purchase/tm-auth-purchase.module').then( m => m.TmAuthPurchasePageModule)
  },
  {
    path: 'tm-badge-ticket',
    loadChildren: () => import('./tm-badge-ticket/tm-badge-ticket.module').then( m => m.TmBadgeTicketPageModule)
  },
  {
    path: 'tm-badge-ticket-code',
    loadChildren: () => import('./tm-badge-ticket-code/tm-badge-ticket-code.module').then( m => m.TmBadgeTicketCodePageModule)
  },
  {
    path: 'tm-success',
    loadChildren: () => import('./tm-success/tm-success.module').then( m => m.TmSuccessPageModule)
  },
  {
    path: 'tm-spotify-offer',
    loadChildren: () => import('./tm-spotify-offer/tm-spotify-offer.module').then( m => m.TmSpotifyOfferPageModule)
  },
  {
    path: 'tm-spotify-auth-tm',
    loadChildren: () => import('./tm-spotify-auth-tm/tm-spotify-auth-tm.module').then( m => m.TmSpotifyAuthTmPageModule)
  },
  {
    path: 'tm-spotify-tickets',
    loadChildren: () => import('./tm-spotify-tickets/tm-spotify-tickets.module').then( m => m.TmSpotifyTicketsPageModule)
  },
  {
    path: 'web-partner1',
    loadChildren: () => import('./web-partner1/web-partner1.module').then( m => m.WebPartner1PageModule)
  },
  {
    path: 'web-partner1-join',
    loadChildren: () => import('./web-partner1-join/web-partner1-join.module').then( m => m.WebPartner1JoinPageModule)
  },
  {
    path: 'web-partner1-destination',
    loadChildren: () => import('./web-partner1-destination/web-partner1-destination.module').then( m => m.WebPartner1DestinationPageModule)
  },
  {
    path: 'web-partner1-login',
    loadChildren: () => import('./web-partner1-login/web-partner1-login.module').then( m => m.WebPartner1LoginPageModule)
  },
  {
    path: 'auth-login-brand',
    loadChildren: () => import('./auth-login-brand/auth-login-brand.module').then( m => m.AuthLoginBrandPageModule)
  },
  {
    path: 'web-partner2',
    loadChildren: () => import('./web-partner2/web-partner2.module').then( m => m.WebPartner2PageModule)
  },
  {
    path: 'web-partner2-login',
    loadChildren: () => import('./web-partner2-login/web-partner2-login.module').then( m => m.WebPartner2LoginPageModule)
  },
  {
    path: 'web-partner2-login-text',
    loadChildren: () => import('./web-partner2-login-text/web-partner2-login-text.module').then( m => m.WebPartner2LoginTextPageModule)
  },
  {
    path: 'web-partner2-login-mc',
    loadChildren: () => import('./web-partner2-login-mc/web-partner2-login-mc.module').then( m => m.WebPartner2LoginMcPageModule)
  },
  {
    path: 'web-partner2-menu',
    loadChildren: () => import('./web-partner2-menu/web-partner2-menu.module').then( m => m.WebPartner2MenuPageModule)
  },
  {
    path: 'web-partner2-destination',
    loadChildren: () => import('./web-partner2-destination/web-partner2-destination.module').then( m => m.WebPartner2DestinationPageModule)
  },
  {
    path: 'auth-login-partner2-ap',
    loadChildren: () => import('./auth-login-partner2-ap/auth-login-partner2-ap.module').then( m => m.AuthLoginPartner2ApPageModule)
  },
  {
    path: 'auth-login-partner2-mc',
    loadChildren: () => import('./auth-login-partner2-mc/auth-login-partner2-mc.module').then( m => m.AuthLoginPartner2McPageModule)
  },
  {
    path: 'web-partner2-mcprogram',
    loadChildren: () => import('./web-partner2-mcprogram/web-partner2-mcprogram.module').then( m => m.WebPartner2McprogramPageModule)
  },
  {
    path: 'badge-mc-default-code',
    loadChildren: () => import('./badge-mc-default-code/badge-mc-default-code.module').then( m => m.BadgeMcDefaultCodePageModule)
  },
  {
    path: 'web-partner3',
    loadChildren: () => import('./web-partner3/web-partner3.module').then( m => m.WebPartner3PageModule)
  },
  {
    path: 'web-partner3-destination',
    loadChildren: () => import('./web-partner3-destination/web-partner3-destination.module').then( m => m.WebPartner3DestinationPageModule)
  },
  {
    path: 'web-partner3-login',
    loadChildren: () => import('./web-partner3-login/web-partner3-login.module').then( m => m.WebPartner3LoginPageModule)
  },
  {
    path: 'auth-login-partner3',
    loadChildren: () => import('./auth-login-partner3/auth-login-partner3.module').then( m => m.AuthLoginPartner3PageModule)
  },
  {
    path: 'web-partner3-eas',
    loadChildren: () => import('./web-partner3-eas/web-partner3-eas.module').then( m => m.WebPartner3EasPageModule)
  },
  {
    path: 'web-partner2-login-app',
    loadChildren: () => import('./web-partner2-login-app/web-partner2-login-app.module').then( m => m.WebPartner2LoginAppPageModule)
  },
  {
    path: 'web-partner4',
    loadChildren: () => import('./web-partner4/web-partner4.module').then( m => m.WebPartner4PageModule)
  },
  {
    path: 'web-partner4-login-app',
    loadChildren: () => import('./web-partner4-login-app/web-partner4-login-app.module').then( m => m.WebPartner4LoginAppPageModule)
  },
  {
    path: 'web-partner4-destination',
    loadChildren: () => import('./web-partner4-destination/web-partner4-destination.module').then( m => m.WebPartner4DestinationPageModule)
  },
  {
    path: 'auth-login-partner4',
    loadChildren: () => import('./auth-login-partner4/auth-login-partner4.module').then( m => m.AuthLoginPartner4PageModule)
  },
  {
    path: 'web-partner4-login-mc',
    loadChildren: () => import('./web-partner4-login-mc/web-partner4-login-mc.module').then( m => m.WebPartner4LoginMcPageModule)
  },
  {
    path: 'auth-login-partner4-mc',
    loadChildren: () => import('./auth-login-partner4-mc/auth-login-partner4-mc.module').then( m => m.AuthLoginPartner4McPageModule)
  },
  {
    path: 'web-partner3-group',
    loadChildren: () => import('./web-partner3-group/web-partner3-group.module').then( m => m.WebPartner3GroupPageModule)
  },
  {
    path: 'web-partner5',
    loadChildren: () => import('./web-partner5/web-partner5.module').then( m => m.WebPartner5PageModule)
  },
  {
    path: 'web-partner5-eas',
    loadChildren: () => import('./web-partner5-eas/web-partner5-eas.module').then( m => m.WebPartner5EasPageModule)
  },
  {
    path: 'auth-login-partner5',
    loadChildren: () => import('./auth-login-partner5/auth-login-partner5.module').then( m => m.AuthLoginPartner5PageModule)
  },
  {
    path: 'auth-login-partner5-mc',
    loadChildren: () => import('./auth-login-partner5-mc/auth-login-partner5-mc.module').then( m => m.AuthLoginPartner5McPageModule)
  },
  {
    path: 'web-partner5-destination',
    loadChildren: () => import('./web-partner5-destination/web-partner5-destination.module').then( m => m.WebPartner5DestinationPageModule)
  },
  {
    path: 'ocr-verify-mc',
    loadChildren: () => import('./ocr-verify-mc/ocr-verify-mc.module').then( m => m.OcrVerifyMcPageModule)
  },
  {
    path: 'verify-service-mc-form',
    loadChildren: () => import('./verify-service-mc-form/verify-service-mc-form.module').then( m => m.VerifyServiceMcFormPageModule)
  },
  {
    path: 'success-ocrverify-mc',
    loadChildren: () => import('./success-ocrverify-mc/success-ocrverify-mc.module').then( m => m.SuccessOcrverifyMcPageModule)
  },
  {
    path: 'success-ocrverify',
    loadChildren: () => import('./success-ocrverify/success-ocrverify.module').then( m => m.SuccessOcrverifyPageModule)
  },
  {
    path: 'personal-info-unverified',
    loadChildren: () => import('./personal-info-unverified/personal-info-unverified.module').then( m => m.PersonalInfoUnverifiedPageModule)
  },
  {
    path: 'mc-join',
    loadChildren: () => import('./mc-join/mc-join.module').then( m => m.McJoinPageModule)
  },
  {
    path: 'mc-preboard-eas',
    loadChildren: () => import('./mc-preboard-eas/mc-preboard-eas.module').then( m => m.McPreboardEasPageModule)
  },
  {
    path: 'mc-preboard-verify1',
    loadChildren: () => import('./mc-preboard-verify1/mc-preboard-verify1.module').then( m => m.McPreboardVerify1PageModule)
  },
  {
    path: 'mc-preboard-verify2',
    loadChildren: () => import('./mc-preboard-verify2/mc-preboard-verify2.module').then( m => m.McPreboardVerify2PageModule)
  },
  {
    path: 'mc-preboard-get-app',
    loadChildren: () => import('./mc-preboard-get-app/mc-preboard-get-app.module').then( m => m.McPreboardGetAppPageModule)
  },
  {
    path: 'mc-preboard-ocr',
    loadChildren: () => import('./mc-preboard-ocr/mc-preboard-ocr.module').then( m => m.McPreboardOcrPageModule)
  },
  {
    path: 'user-email-verify-partner1',
    loadChildren: () => import('./user-email-verify-partner1/user-email-verify-partner1.module').then( m => m.UserEmailVerifyPartner1PageModule)
  },
  {
    path: 'buy-now-iap',
    loadChildren: () => import('./buy-now-iap/buy-now-iap.module').then( m => m.BuyNowIapPageModule)
  },
  {
    path: 'buy-now-auth-payment',
    loadChildren: () => import('./buy-now-auth-payment/buy-now-auth-payment.module').then( m => m.BuyNowAuthPaymentPageModule)
  },
  {
    path: 'buy-now-success',
    loadChildren: () => import('./buy-now-success/buy-now-success.module').then( m => m.BuyNowSuccessPageModule)
  },
  {
    path: 'error-ocr-validation-fail',
    loadChildren: () => import('./error-ocr-validation-fail/error-ocr-validation-fail.module').then( m => m.ErrorOcrValidationFailPageModule)
  },
  {
    path: 'chat-list',
    loadChildren: () => import('./chat-list/chat-list.module').then( m => m.ChatListPageModule)
  },
  {
    path: 'chat-list-group',
    loadChildren: () => import('./chat-list-group/chat-list-group.module').then( m => m.ChatListGroupPageModule)
  },
  {
    path: 'channel-list',
    loadChildren: () => import('./channel-list/channel-list.module').then( m => m.ChannelListPageModule)
  },
  {
    path: 'chat-detail',
    loadChildren: () => import('./chat-detail/chat-detail.module').then( m => m.ChatDetailPageModule)
  },
  {
    path: 'aok-sms-example',
    loadChildren: () => import('./aok-sms-example/aok-sms-example.module').then( m => m.AokSmsExamplePageModule)
  },
  {
    path: 'aok-lander',
    loadChildren: () => import('./aok-lander/aok-lander.module').then( m => m.AokLanderPageModule)
  },
  {
    path: 'hii5-sms-example',
    loadChildren: () => import('./hii5-sms-example/hii5-sms-example.module').then( m => m.Hii5SmsExamplePageModule)
  },
  {
    path: 'hii5-lander',
    loadChildren: () => import('./hii5-lander/hii5-lander.module').then( m => m.Hii5LanderPageModule)
  },
  {
    path: 'hii5-record-video',
    loadChildren: () => import('./hii5-record-video/hii5-record-video.module').then( m => m.Hii5RecordVideoPageModule)
  },
  {
    path: 'hii5-review-video',
    loadChildren: () => import('./hii5-review-video/hii5-review-video.module').then( m => m.Hii5ReviewVideoPageModule)
  },
  {
    path: 'ok-bottom-sheet',
    loadChildren: () => import('./ok-bottom-sheet/ok-bottom-sheet.module').then( m => m.OkBottomSheetPageModule)
  },
  {
    path: 'aok-options',
    loadChildren: () => import('./aok-options/aok-options.module').then( m => m.AokOptionsPageModule)
  },
  {
    path: 'hii5-options',
    loadChildren: () => import('./hii5-options/hii5-options.module').then( m => m.Hii5OptionsPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarPageModule)
  },
  {
    path: 'profile-select',
    loadChildren: () => import('./profile-select/profile-select.module').then( m => m.ProfileSelectPageModule)
  },
  {
    path: 'channel-detail',
    loadChildren: () => import('./channel-detail/channel-detail.module').then( m => m.ChannelDetailPageModule)
  },
  {
    path: 'verify-id-doc-scan',
    loadChildren: () => import('./verify-id-doc-scan/verify-id-doc-scan.module').then( m => m.VerifyIdDocScanPageModule)
  },
  {
    path: 'verify-id-selfie',
    loadChildren: () => import('./verify-id-selfie/verify-id-selfie.module').then( m => m.VerifyIdSelfiePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
