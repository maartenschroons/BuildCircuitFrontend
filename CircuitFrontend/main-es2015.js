(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/alarmering-data.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/alarmering-data.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Alarmeringswaarden aanpassen</h1>\r\n<mat-tab-group mat-align-tabs=\"center\">\r\n    <mat-tab label=\"CO²\"> <app-co></app-co> </mat-tab>\r\n    <mat-tab label=\"Druk\"> <app-druk></app-druk> </mat-tab>\r\n    <mat-tab label=\"Ethanol\"> <app-ethanol></app-ethanol> </mat-tab>\r\n    <mat-tab label=\"Temperatuur\"> <app-temperatuur></app-temperatuur> </mat-tab>\r\n    <mat-tab label=\"Troebelheid\"><app-troebelheid></app-troebelheid> </mat-tab>\r\n  </mat-tab-group>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/co/co.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/co/co.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"alarmForm\" (ngSubmit)=\"onSubmit()\">\r\n    <p>\r\n        <mat-form-field>\r\n            <mat-label>Kies een vat</mat-label>\r\n            <mat-select formControlName=\"proces\" (selectionChange)=\"onSelect($event.value)\">\r\n                <mat-option *ngFor=\"let proces of (processen | async)\" [value]=\"proces.id\">\r\n                    {{proces.vat?.nummer}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </p>\r\n    <section class=\"example-section\">\r\n        <mat-checkbox class=\"example-margin\" formControlName=\"disable\">Disable</mat-checkbox>\r\n    </section>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"alarmdataModel.minimumwaarde\" formControlName=\"minimum\" [disabled]=\"true\"\r\n            placeholder=\"Minimumwaarde\" type=\"text\" name=\"Metingswaarde\" />\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"alarmdataModel.maximumwaarde\" formControlName=\"maximum\" placeholder=\"Maximumwaarde\"\r\n            type=\"text\" name=\"Metingswaarde\" />\r\n    </mat-form-field>\r\n\r\n\r\n    <div>\r\n        <p>\r\n            <button [disabled]=\"!alarmForm.valid\" mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n        </p>\r\n\r\n    </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/druk/druk.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/druk/druk.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"alarmForm\" (ngSubmit)=\"onSubmit()\">\r\n    <p>\r\n        <mat-form-field >\r\n            <mat-label>Kies een vat</mat-label>\r\n            <mat-select formControlName=\"proces\" (selectionChange)=\"onSelect($event.value)\">\r\n                <mat-option *ngFor=\"let proces of (processen | async)\" [value]=\"proces.id\">\r\n                    {{proces.vat?.nummer}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </p>\r\n    <section class=\"example-section\">\r\n        <mat-checkbox class=\"example-margin\" formControlName=\"disable\">Disable</mat-checkbox>\r\n    </section>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"alarmdataModel.minimumwaarde\" formControlName=\"minimum\" [disabled]=\"true\" placeholder=\"Minimumwaarde\"\r\n            type=\"text\" name=\"Metingswaarde\" />\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"alarmdataModel.maximumwaarde\" formControlName=\"maximum\"  placeholder=\"Maximumwaarde\"\r\n            type=\"text\" name=\"Metingswaarde\" />\r\n    </mat-form-field>\r\n\r\n\r\n    <div>\r\n        <p>\r\n            <button [disabled]=\"!alarmForm.valid\" mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n        </p>\r\n\r\n    </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/ethanol/ethanol.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/ethanol/ethanol.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"alarmForm\" (ngSubmit)=\"onSubmit()\">\r\n    <p>\r\n        <mat-form-field >\r\n            <mat-label>Kies een vat</mat-label>\r\n            <mat-select formControlName=\"proces\" (selectionChange)=\"onSelect($event.value)\">\r\n                <mat-option *ngFor=\"let proces of (processen | async)\" [value]=\"proces.id\">\r\n                    {{proces.vat?.nummer}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </p>\r\n    <section class=\"example-section\">\r\n        <mat-checkbox class=\"example-margin\" formControlName=\"disable\">Disable</mat-checkbox>\r\n    </section>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"alarmdataModel.minimumwaarde\" formControlName=\"minimum\" [disabled]=\"true\" placeholder=\"Minimumwaarde\"\r\n            type=\"text\" name=\"Metingswaarde\" />\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"alarmdataModel.maximumwaarde\" formControlName=\"maximum\"  placeholder=\"Maximumwaarde\"\r\n            type=\"text\" name=\"Metingswaarde\" />\r\n    </mat-form-field>\r\n\r\n\r\n    <div>\r\n        <p>\r\n            <button [disabled]=\"!alarmForm.valid\" mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n        </p>\r\n\r\n    </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/temperatuur/temperatuur.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/temperatuur/temperatuur.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"alarmForm\" (ngSubmit)=\"onSubmit()\">\r\n    <p>\r\n        <mat-form-field >\r\n            <mat-label>Kies een vat</mat-label>\r\n            <mat-select formControlName=\"proces\" (selectionChange)=\"onSelect($event.value)\">\r\n                <mat-option *ngFor=\"let proces of (processen | async)\" [value]=\"proces.id\">\r\n                    {{proces.vat?.nummer}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </p>\r\n<section class=\"example-section\">\r\n    <mat-checkbox class=\"example-margin\"  formControlName=\"disable\" >Disable</mat-checkbox>\r\n</section>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"alarmdataModel.minimumwaarde\" formControlName=\"minimum\" [disabled]=\"true\" placeholder=\"Minimumwaarde\"\r\n            type=\"text\" name=\"Metingswaarde\" />\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"alarmdataModel.maximumwaarde\" formControlName=\"maximum\"  placeholder=\"Maximumwaarde\"\r\n            type=\"text\" name=\"Metingswaarde\" />\r\n    </mat-form-field>\r\n\r\n\r\n    <div>\r\n        <p>\r\n            <button [disabled]=\"!alarmForm.valid\" mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n        </p>\r\n\r\n    </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/troebelheid/troebelheid.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/troebelheid/troebelheid.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"alarmForm\" (ngSubmit)=\"onSubmit()\">\r\n    <p>\r\n        <mat-form-field>\r\n            <mat-label>Kies een vat</mat-label>\r\n            <mat-select formControlName=\"proces\" (selectionChange)=\"onSelect($event.value)\">\r\n                <mat-option *ngFor=\"let proces of (processen | async)\" [value]=\"proces.id\">\r\n                    {{proces.vat?.nummer}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </p>\r\n    <section class=\"example-section\">\r\n        <mat-checkbox class=\"example-margin\" formControlName=\"disable\">Disable</mat-checkbox>\r\n    </section>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"alarmdataModel.minimumwaarde\" formControlName=\"minimum\" [disabled]=\"true\"\r\n            placeholder=\"Minimumwaarde\" type=\"text\" name=\"Metingswaarde\" />\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"alarmdataModel.maximumwaarde\" formControlName=\"maximum\" placeholder=\"Maximumwaarde\"\r\n            type=\"text\" name=\"Metingswaarde\" />\r\n    </mat-form-field>\r\n\r\n\r\n    <div>\r\n        <p>\r\n            <button [disabled]=\"!alarmForm.valid\" mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n        </p>\r\n\r\n    </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-personen/alarmering-personen.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-personen/alarmering-personen.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"alarmForm\" (ngSubmit)=\"onSubmit()\">\r\n    <p>\r\n        <mat-form-field>\r\n            <mat-label>Kies een gebruiker</mat-label>\r\n            <mat-select (selectionChange)=\"onSelect($event.value)\" formControlName=\"gebruiker\" [(ngModel)]=\"AlarmDataGebruikerModel.gebruikerId\">\r\n                <mat-option *ngFor=\"let gebruiker of (gebruikers | async)\" [value]=\"gebruiker.id\">\r\n                    {{gebruiker.voornaam}} {{gebruiker.naam}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </p>\r\n    <p>\r\n        <mat-form-field>\r\n            <mat-label>Kies een vat</mat-label>\r\n            <mat-select formControlName=\"proces\" [(ngModel)]=\"proces\">\r\n                <mat-option *ngFor=\"let proces of (processen | async)\" [value]=\"proces.id\">\r\n                    {{proces.vat?.nummer}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </p>\r\n    <div>\r\n        <p>\r\n            <button [disabled]=\"!alarmForm.valid\" mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n        </p>\r\n\r\n    </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\r\n        <mat-toolbar color=\"primary\">\r\n\r\n                <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n                        <img margin=\"0\" src=\"../assets/Logo_small.png\" id=\"img\" height=\"40\" layout-align=\"right\" />\r\n                </button>\r\n                <h2 (click)=\"sidenav.toggle()\">CircuitBreakers</h2>\r\n        </mat-toolbar>\r\n</div>\r\n<mat-sidenav-container class=\"sidenav-container\" autosize>\r\n        <mat-sidenav mode=\"top\" class=\"nav\" opened=\"{{opened}}\">\r\n                <mat-nav-list>\r\n\r\n                        <a mat-list-item routerLink=\"/\" routerLinkActive=\"active\"\r\n                                [routerLinkActiveOptions]=\"{ exact: true }\">\r\n                                <img margin=\"0\" src=\"../assets/Logo.png\" width=\"270\" layout-align=\"right\" />\r\n                        </a>\r\n                        <a mat-list-item routerLink=\"/createProcess\" routerLinkActive=\"active\"\r\n                                [routerLinkActiveOptions]=\"{ exact: true }\">Start een\r\n                                process</a>\r\n                        <a mat-list-item routerLink=\"/afsluiten\" routerLinkActive=\"active\"\r\n                                [routerLinkActiveOptions]=\"{ exact: true }\">Sluit een proces\r\n                                af</a>\r\n                        <a mat-list-item routerLink=\"/dashboard\" routerLinkActive=\"active\"\r\n                                [routerLinkActiveOptions]=\"{ exact: true }\">Dashboard 2</a>\r\n                        <a mat-list-item [matMenuTriggerFor]=\"vini\">\r\n                                Vinfi\r\n                                <mat-icon>expand_more</mat-icon>\r\n                        </a>\r\n                        <mat-menu #vini=\"matMenu\">\r\n                                <button mat-menu-item routerLink=\"/actief\" routerLinkActive=\"active\"\r\n                                        [routerLinkActiveOptions]=\"{ exact: true }\">Actieve vinificaties</button>\r\n                                <button mat-menu-item routerLink=\"/nonactief\" routerLinkActive=\"active\"\r\n                                        [routerLinkActiveOptions]=\"{ exact: true }\">Voltooide vinificaties</button>\r\n                        </mat-menu>\r\n\r\n                        <a mat-list-item [matMenuTriggerFor]=\"menu\">\r\n                                Data toevoegen aan een proces\r\n                                <mat-icon>expand_more</mat-icon>\r\n                        </a>\r\n                        <mat-menu #menu=\"matMenu\">\r\n                                <button mat-menu-item routerLink=\"/addMeting\" routerLinkActive=\"active\"\r\n                                        [routerLinkActiveOptions]=\"{ exact: true }\">Voeg een meting\r\n                                        toe aan een proces</button>\r\n                                <button mat-menu-item routerLink=\"/addActie\" routerLinkActive=\"active\"\r\n                                        [routerLinkActiveOptions]=\"{ exact: true }\">Voeg een event\r\n                                        toe aan een proces</button>\r\n                        </mat-menu>\r\n\r\n                        <a mat-list-item [matMenuTriggerFor]=\"alarm\">\r\n                                Alarmering aanpassen\r\n                                <mat-icon>expand_more</mat-icon>\r\n                        </a>\r\n                        <mat-menu #alarm=\"matMenu\">\r\n                                <button mat-menu-item routerLink=\"/alarmdata\" routerLinkActive=\"active\"\r\n                                        [routerLinkActiveOptions]=\"{ exact: true }\">Verander de\r\n                                        alarmeringswaarden</button>\r\n                                <button mat-menu-item routerLink=\"/alarmpersonen\" routerLinkActive=\"active\"\r\n                                        [routerLinkActiveOptions]=\"{ exact: true }\">Manage de\r\n                                        alarmeringspersonen</button>\r\n                        </mat-menu>\r\n                </mat-nav-list>\r\n        </mat-sidenav>\r\n        <mat-sidenav-content class=\"content\">\r\n                <router-outlet></router-outlet>\r\n        </mat-sidenav-content>\r\n</mat-sidenav-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Vinificatie Monitoring</h1>\r\n<h2>Home pagina</h2>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/process/add-actie/add-actie.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/process/add-actie/add-actie.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Voeg een event toe!</h1>\r\n<form [formGroup]=\"addEventForm\" (ngSubmit)=\"onSubmit()\">\r\n    <p> \r\n        <mat-form-field>\r\n               <mat-label>Kies een vat</mat-label>\r\n               <mat-select formControlName=\"vat\" [(ngModel)]=\"eventModel.vinificatieId\">\r\n                   <mat-option *ngFor=\"let proces of (processen | async)\" [value]=\"proces.id\">\r\n                       {{proces.vat?.nummer}}\r\n                   </mat-option>\r\n               </mat-select>\r\n           </mat-form-field> \r\n       </p>\r\n\r\n    <p>\r\n        <mat-form-field>\r\n            <mat-label>Soort event</mat-label>\r\n            <mat-select formControlName=\"soortEvent\" [(ngModel)]=\"eventModel.soortEventId\">\r\n                <mat-option *ngFor=\"let event of (events |async)\"  [value]=\"event.id\">\r\n                    {{event.naam}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n        <div class=\"input-wrapper\" >\r\n            <label>Datum en tijd:</label>\r\n            <input  [owlDateTimeTrigger]=\"dtPicker1\" [owlDateTime]=\"dtPicker1\" [(ngModel)]=\"eventModel.datum\" formControlName=\"datum\">\r\n            <owl-date-time #dtPicker1></owl-date-time>\r\n        </div>\r\n    \r\n\r\n    <div class=\"row\">\r\n        <p class=\"ml-4\">\r\n            <button [disabled]=\"!addEventForm.valid\" mat-raised-button color=\"primary\"\r\n                type=\"submit\">Submit</button>\r\n        </p>\r\n\r\n    </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/process/add-meting/add-meting.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/process/add-meting/add-meting.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Voeg een meting toe!</h1>\r\n<form [formGroup]=\"addMetingForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n\r\n    <p>\r\n        <mat-form-field>\r\n            <mat-label>Kies een vat</mat-label>\r\n            <mat-select formControlName=\"vat\" [(ngModel)]=\"metingModel.vinificatieId\">\r\n                <mat-option *ngFor=\"let proces of (processen | async)\" [value]=\"proces.id\">\r\n                    {{proces.vat?.nummer}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </p>\r\n    <p>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Metingswaarde\" [(ngModel)]=\"metingModel.meting\" formControlName=\"Metingswaarde\"\r\n                type=\"text\" name=\"Metingswaarde\" />\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <mat-label>Kies een metingsType</mat-label>\r\n            <mat-select formControlName=\"soortMeting\" [(ngModel)]=\"metingModel.soortMetingId\">\r\n                <mat-option *ngFor=\"let type of (metingen | async)\" [value]=\"type.id\">\r\n                    {{type.naam}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </p>\r\n\r\n    <div class=\"input-wrapper\" >\r\n        <label>Datum en tijd:</label>\r\n        <input  [owlDateTimeTrigger]=\"dtPicker1\" [owlDateTime]=\"dtPicker1\" [(ngModel)]=\"metingModel.tijd\" formControlName=\"tijd\">\r\n        <owl-date-time #dtPicker1></owl-date-time>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n        <p class=\"ml-4\">\r\n            <button [disabled]=\"!addMetingForm.valid\" mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n        </p>\r\n\r\n    </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/process/afsluiten/afsluiten.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/process/afsluiten/afsluiten.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Kies een proces om af te sluiten</h1>\r\n<ul >\r\n    <li *ngFor=\"let proces of (processen | async)\"> {{proces.vat?.nummer}} <button mat-raised-button addEventForm (click)=\"Sluit(proces)\">Sluit af</button></li>\r\n</ul>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/process/create-process/create-process.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/process/create-process/create-process.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"createProcessForm\" (ngSubmit)=\"onSubmit()\">\r\n    <h1>Start een nieuw proces</h1>\r\n    <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayoutAlign=\"center\">\r\n        <div fxFlex=\"20%\">\r\n          <p> \r\n             <mat-form-field>\r\n                    <mat-label>Kies een vat</mat-label>\r\n                    <mat-select formControlName=\"vat\" [(ngModel)]=\"procesModel.vatId\">\r\n                        <mat-option *ngFor=\"let vat of (vaten | async)\" [value]=\"vat.id\">\r\n                            {{vat.nummer}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field> \r\n            </p>\r\n\r\n            <p>\r\n                <mat-form-field>\r\n                    <mat-label>Kies een druifsoort</mat-label>\r\n                    <mat-select formControlName=\"druif\" >\r\n                        <mat-option *ngFor=\"let druif of (druiven| async)\" [value]=\"druif.id\">\r\n                            {{druif.druifsoort}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </p>\r\n\r\n            <p>\r\n                <mat-form-field>\r\n                    <mat-label>Kies een persmethode</mat-label>\r\n                    <mat-select formControlName=\"pers\" [(ngModel)]=\"procesModel.persmethodeId\">\r\n                        <mat-option *ngFor=\"let pers of (persen | async)\" [value]=\"pers.id\">\r\n                            {{pers.methode}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </p> \r\n        </div>\r\n        <div fxFlex=\"20%\">\r\n            <p>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Pers hoeveelheid in L\" [(ngModel)]=\"procesModel.persHoeveelheid\" formControlName=\"persHoeveelheid\" type=\"text\"\r\n                        name=\"persHoeveelheid\" />\r\n                </mat-form-field>\r\n            </p>\r\n            <p>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Oogst in kg\" formControlName=\"oogst\" type=\"text\" name=\"oogst\" [(ngModel)]=\"procesModel.oogst\"/>\r\n                </mat-form-field>\r\n            </p>\r\n            <p>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Bar\" formControlName=\"bar\" type=\"text\" name=\"bar\" [(ngModel)]=\"procesModel.persDruk\"/>\r\n                </mat-form-field>\r\n            </p>\r\n        </div>\r\n        <div fxFlex=\"60%\">\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <p class=\"ml-4\">\r\n            <button [disabled]=\"!createProcessForm.valid\" mat-raised-button color=\"primary\"\r\n                type=\"submit\">Submit</button>\r\n        </p>\r\n\r\n    </div>\r\n\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/process/process.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/process/process.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"nav nav-pills mb-3\" id=\"pills-tab\" role=\"tablist\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link active\" id=\"add-event-tab\" data-toggle=\"process\" href=\"#add-event\" role=\"tab\"\n            aria-controls=\"add-event\" aria-selected=\"true\">Voeg een event toe</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"add-meting-tab\" data-toggle=\"process\" href=\"#add-meting\" role=\"tab\"\n            aria-controls=\"add-meting\" aria-selected=\"false\">Voeg een meting toe</a>\n    </li>\n</ul>\n<div class=\"tab-content\" id=\"process-tabContent\">\n    <div class=\"tab-pane fade show active\" id=\"add-event\" role=\"tabpanel\" aria-labelledby=\"add-event-tab\">\n        <app-add-actie> </app-add-actie>\n    </div>\n    <div class=\"tab-pane fade\" id=\"add-meting\" role=\"tabpanel\" aria-labelledby=\"add-meting-tab\">\n        <app-add-meting></app-add-meting>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/toon-dashboard/toon-dashboard.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toon-dashboard/toon-dashboard.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<iframe src=\"http://192.168.0.105:3000/d/76B5JFZRz/vinificatie?orgId=1&refresh=5m&from=now-7d&to=now&theme=light&kiosk&var-vat=2\" frameborder=\"0\" width=\"100%\" height=\"98%\"></iframe>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>toon-actieve-vinificaties works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>toon-details-vinificaties works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>toon-non-actieve-vinificaties works!</p>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/alarmering/alarmering-data/alarmering-data.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/alarmering/alarmering-data/alarmering-data.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hbGFybWVyaW5nL2FsYXJtZXJpbmctZGF0YS9hbGFybWVyaW5nLWRhdGEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/alarmering/alarmering-data/alarmering-data.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/alarmering/alarmering-data/alarmering-data.component.ts ***!
  \*************************************************************************/
/*! exports provided: AlarmeringDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmeringDataComponent", function() { return AlarmeringDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AlarmeringDataComponent = class AlarmeringDataComponent {
    constructor() { }
    ngOnInit() {
    }
};
AlarmeringDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alarmering-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alarmering-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/alarmering-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alarmering-data.component.css */ "./src/app/alarmering/alarmering-data/alarmering-data.component.css")).default]
    })
], AlarmeringDataComponent);



/***/ }),

/***/ "./src/app/alarmering/alarmering-data/co/co.component.css":
/*!****************************************************************!*\
  !*** ./src/app/alarmering/alarmering-data/co/co.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hbGFybWVyaW5nL2FsYXJtZXJpbmctZGF0YS9jby9jby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/alarmering/alarmering-data/co/co.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/alarmering/alarmering-data/co/co.component.ts ***!
  \***************************************************************/
/*! exports provided: CoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoComponent", function() { return CoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/services.service */ "./src/app/services/services.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/alarm-data.model */ "./src/app/models/alarm-data.model.ts");






let CoComponent = class CoComponent {
    constructor(fb, _service) {
        this.fb = fb;
        this._service = _service;
        this.alarmdataModel = new src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_5__["AlarmData"](null, null, null, null, null, 0);
        this.checked = false;
        this.alarmForm = this.fb.group({
            disable: [],
            proces: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            minimum: [
                {
                    value: '',
                    disabled: false
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ],
            maximum: [
                {
                    value: '',
                    disabled: false
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]
        });
        // ,{ validator: this.greaterThan('minimum', 'maximum') });
        this.processenl = new Array();
        this.instantiateLists();
    }
    instantiateLists() {
        this._service.getAllProcessen().subscribe(result => {
            result.records.forEach(proces => {
                if (proces.actief == 1) {
                    this._service.getVatById(proces.vatId).subscribe(vat => { proces.vat = vat; });
                    this.processenl.push(proces);
                }
            });
            this.processen = this.makeObservable();
        });
    }
    // greaterThan(minimumKey: string, maximumKey: string) {
    //   return (group: FormGroup) => {
    //     let minimum = group.controls[minimumKey];
    //     let maximum = group.controls[maximumKey];
    //     if (minimum.value > maximum.value) {
    //       return minimum.setErrors({ notEquivalent: true })
    //     }
    //     else {
    //       minimum.setErrors(minimum.validator(minimum))
    //     }
    //   }
    // }
    makeObservable() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.processenl);
    }
    ngOnInit() {
        this.alarmForm.get('disable').valueChanges.subscribe(v => {
            if (v) {
                this.alarmForm.get('minimum').disable();
                this.alarmForm.get('maximum').disable();
                this.checked = true;
            }
            else {
                this.alarmForm.get('minimum').enable();
                this.alarmForm.get('maximum').enable();
                this.checked = false;
            }
        });
    }
    onSelect(procesId) {
        this._service.getAlarmDataByVinAndSoort(procesId, 2).subscribe(result => {
            this.alarmdataModel = result;
        });
    }
    onSubmit() {
        if (this.checked) {
            this.alarmdataModel.actief = 0;
        }
        else {
            this.alarmdataModel.actief = 1;
        }
        this._service.updateAlarmData(this.alarmdataModel);
    }
};
CoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"] }
];
CoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-co',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./co.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/co/co.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./co.component.css */ "./src/app/alarmering/alarmering-data/co/co.component.css")).default]
    })
], CoComponent);



/***/ }),

/***/ "./src/app/alarmering/alarmering-data/druk/druk.component.css":
/*!********************************************************************!*\
  !*** ./src/app/alarmering/alarmering-data/druk/druk.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hbGFybWVyaW5nL2FsYXJtZXJpbmctZGF0YS9kcnVrL2RydWsuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/alarmering/alarmering-data/druk/druk.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/alarmering/alarmering-data/druk/druk.component.ts ***!
  \*******************************************************************/
/*! exports provided: DrukComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrukComponent", function() { return DrukComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/services.service */ "./src/app/services/services.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/alarm-data.model */ "./src/app/models/alarm-data.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let DrukComponent = class DrukComponent {
    constructor(fb, _service) {
        this.fb = fb;
        this._service = _service;
        this.checked = false;
        this.alarmdataModel = new src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_4__["AlarmData"](null, null, null, null, null, 0);
        this.alarmForm = this.fb.group({
            disable: [],
            proces: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            minimum: [
                {
                    value: '',
                    disabled: false
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ],
            maximum: [
                {
                    value: '',
                    disabled: false
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ]
        });
        // ,{ validator: this.greaterThan('minimum', 'maximum') });
        this.processenl = new Array();
        this.instantiateLists();
    }
    instantiateLists() {
        this._service.getAllProcessen().subscribe(result => {
            result.records.forEach(proces => {
                if (proces.actief == 1) {
                    this._service.getVatById(proces.vatId).subscribe(vat => { proces.vat = vat; });
                    this.processenl.push(proces);
                }
            });
            this.processen = this.makeObservable();
        });
    }
    // greaterThan(minimumKey: string, maximumKey: string) {
    //   return (group: FormGroup) => {
    //     let minimum = group.controls[minimumKey];
    //     let maximum = group.controls[maximumKey];
    //     if (minimum.value > maximum.value) {
    //       return minimum.setErrors({ notEquivalent: true })
    //     }
    //     else {
    //       minimum.setErrors(minimum.validator(minimum))
    //     }
    //   }
    // }
    makeObservable() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.processenl);
    }
    ngOnInit() {
        this.alarmForm.get('disable').valueChanges.subscribe(v => {
            if (v) {
                this.alarmForm.get('minimum').disable();
                this.alarmForm.get('maximum').disable();
                this.checked = true;
            }
            else {
                this.alarmForm.get('minimum').enable();
                this.alarmForm.get('maximum').enable();
                this.checked = false;
            }
        });
    }
    onSelect(procesId) {
        this._service.getAlarmDataByVinAndSoort(procesId, 4).subscribe(result => {
            this.alarmdataModel = result;
        });
    }
    onSubmit() {
        if (this.checked) {
            this.alarmdataModel.actief = 0;
        }
        else {
            this.alarmdataModel.actief = 1;
        }
        this._service.updateAlarmData(this.alarmdataModel);
    }
};
DrukComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"] }
];
DrukComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-druk',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./druk.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/druk/druk.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./druk.component.css */ "./src/app/alarmering/alarmering-data/druk/druk.component.css")).default]
    })
], DrukComponent);



/***/ }),

/***/ "./src/app/alarmering/alarmering-data/ethanol/ethanol.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/alarmering/alarmering-data/ethanol/ethanol.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hbGFybWVyaW5nL2FsYXJtZXJpbmctZGF0YS9ldGhhbm9sL2V0aGFub2wuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/alarmering/alarmering-data/ethanol/ethanol.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/alarmering/alarmering-data/ethanol/ethanol.component.ts ***!
  \*************************************************************************/
/*! exports provided: EthanolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EthanolComponent", function() { return EthanolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/services.service */ "./src/app/services/services.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/alarm-data.model */ "./src/app/models/alarm-data.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let EthanolComponent = class EthanolComponent {
    constructor(fb, _service) {
        this.fb = fb;
        this._service = _service;
        this.checked = false;
        this.alarmdataModel = new src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_4__["AlarmData"](null, null, null, null, null, 0);
        this.alarmForm = this.fb.group({
            disable: [],
            proces: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            minimum: [
                {
                    value: '',
                    disabled: false
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ],
            maximum: [
                {
                    value: '',
                    disabled: false
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ]
        });
        // ,{ validator: this.greaterThan('minimum', 'maximum') });
        this.processenl = new Array();
        this.instantiateLists();
    }
    instantiateLists() {
        this._service.getAllProcessen().subscribe(result => {
            result.records.forEach(proces => {
                if (proces.actief == 1) {
                    this._service.getVatById(proces.vatId).subscribe(vat => { proces.vat = vat; });
                    this.processenl.push(proces);
                }
            });
            this.processen = this.makeObservable();
        });
    }
    // greaterThan(minimumKey: string, maximumKey: string) {
    //   return (group: FormGroup) => {
    //     let minimum = group.controls[minimumKey];
    //     let maximum = group.controls[maximumKey];
    //     if (minimum.value > maximum.value) {
    //       return minimum.setErrors({ notEquivalent: true })
    //     }
    //     else {
    //       minimum.setErrors(minimum.validator(minimum))
    //     }
    //   }
    // }
    makeObservable() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.processenl);
    }
    ngOnInit() {
        this.alarmForm.get('disable').valueChanges.subscribe(v => {
            if (v) {
                this.alarmForm.get('minimum').disable();
                this.alarmForm.get('maximum').disable();
                this.checked = true;
            }
            else {
                this.alarmForm.get('minimum').enable();
                this.alarmForm.get('maximum').enable();
                this.checked = false;
            }
        });
    }
    onSelect(procesId) {
        this._service.getAlarmDataByVinAndSoort(procesId, 3).subscribe(result => {
            this.alarmdataModel = result;
        });
    }
    onSubmit() {
        if (this.checked) {
            this.alarmdataModel.actief = 0;
        }
        else {
            this.alarmdataModel.actief = 1;
        }
        this._service.updateAlarmData(this.alarmdataModel);
    }
};
EthanolComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"] }
];
EthanolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ethanol',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ethanol.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/ethanol/ethanol.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ethanol.component.css */ "./src/app/alarmering/alarmering-data/ethanol/ethanol.component.css")).default]
    })
], EthanolComponent);



/***/ }),

/***/ "./src/app/alarmering/alarmering-data/temperatuur/temperatuur.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/alarmering/alarmering-data/temperatuur/temperatuur.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hbGFybWVyaW5nL2FsYXJtZXJpbmctZGF0YS90ZW1wZXJhdHV1ci90ZW1wZXJhdHV1ci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/alarmering/alarmering-data/temperatuur/temperatuur.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/alarmering/alarmering-data/temperatuur/temperatuur.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TemperatuurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatuurComponent", function() { return TemperatuurComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/services.service */ "./src/app/services/services.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/alarm-data.model */ "./src/app/models/alarm-data.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let TemperatuurComponent = class TemperatuurComponent {
    constructor(fb, _service) {
        this.fb = fb;
        this._service = _service;
        this.checked = false;
        this.alarmdataModel = new src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_4__["AlarmData"](null, null, null, null, null, 0);
        this.alarmForm = this.fb.group({
            disable: [],
            proces: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            minimum: [
                {
                    value: '',
                    disabled: false
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ],
            maximum: [
                {
                    value: '',
                    disabled: false
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ]
        });
        // ,{ validator: this.greaterThan('minimum', 'maximum') });
        this.processenl = new Array();
        this.instantiateLists();
    }
    instantiateLists() {
        this._service.getAllProcessen().subscribe(result => {
            result.records.forEach(proces => {
                if (proces.actief == 1) {
                    this._service.getVatById(proces.vatId).subscribe(vat => { proces.vat = vat; });
                    this.processenl.push(proces);
                }
            });
            this.processen = this.makeObservable();
        });
    }
    // greaterThan(minimumKey: string, maximumKey: string) {
    //   return (group: FormGroup) => {
    //     let minimum = group.controls[minimumKey];
    //     let maximum = group.controls[maximumKey];
    //     if (minimum.value > maximum.value) {
    //       return minimum.setErrors({ notEquivalent: true })
    //     }
    //     else {
    //       minimum.setErrors(minimum.validator(minimum))
    //     }
    //   }
    // }
    makeObservable() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.processenl);
    }
    ngOnInit() {
        this.alarmForm.get('disable').valueChanges.subscribe(v => {
            if (v) {
                this.alarmForm.get('minimum').disable();
                this.alarmForm.get('maximum').disable();
                this.checked = true;
            }
            else {
                this.alarmForm.get('minimum').enable();
                this.alarmForm.get('maximum').enable();
                this.checked = false;
            }
        });
    }
    onSelect(procesId) {
        this._service.getAlarmDataByVinAndSoort(procesId, 1).subscribe(result => {
            this.alarmdataModel = result;
        });
    }
    onSubmit() {
        if (this.checked) {
            this.alarmdataModel.actief = 0;
        }
        else {
            this.alarmdataModel.actief = 1;
        }
        this._service.updateAlarmData(this.alarmdataModel);
    }
};
TemperatuurComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"] }
];
TemperatuurComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-temperatuur',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./temperatuur.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/temperatuur/temperatuur.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./temperatuur.component.css */ "./src/app/alarmering/alarmering-data/temperatuur/temperatuur.component.css")).default]
    })
], TemperatuurComponent);



/***/ }),

/***/ "./src/app/alarmering/alarmering-data/troebelheid/troebelheid.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/alarmering/alarmering-data/troebelheid/troebelheid.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hbGFybWVyaW5nL2FsYXJtZXJpbmctZGF0YS90cm9lYmVsaGVpZC90cm9lYmVsaGVpZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/alarmering/alarmering-data/troebelheid/troebelheid.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/alarmering/alarmering-data/troebelheid/troebelheid.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TroebelheidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TroebelheidComponent", function() { return TroebelheidComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/services.service */ "./src/app/services/services.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/alarm-data.model */ "./src/app/models/alarm-data.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let TroebelheidComponent = class TroebelheidComponent {
    constructor(fb, _service) {
        this.fb = fb;
        this._service = _service;
        this.checked = false;
        this.alarmdataModel = new src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_4__["AlarmData"](null, null, null, null, null, 0);
        this.alarmForm = this.fb.group({
            disable: [],
            proces: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            minimum: [
                {
                    value: '',
                    disabled: false
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ],
            maximum: [
                {
                    value: '',
                    disabled: false
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ]
        });
        // ,{ validator: this.greaterThan('minimum', 'maximum') });
        this.processenl = new Array();
        this.instantiateLists();
    }
    instantiateLists() {
        this._service.getAllProcessen().subscribe(result => {
            result.records.forEach(proces => {
                if (proces.actief == 1) {
                    this._service.getVatById(proces.vatId).subscribe(vat => { proces.vat = vat; });
                    this.processenl.push(proces);
                }
            });
            this.processen = this.makeObservable();
        });
    }
    // greaterThan(minimumKey: string, maximumKey: string) {
    //   return (group: FormGroup) => {
    //     let minimum = group.controls[minimumKey];
    //     let maximum = group.controls[maximumKey];
    //     if (minimum.value > maximum.value) {
    //       return minimum.setErrors({ notEquivalent: true })
    //     }
    //     else {
    //       minimum.setErrors(minimum.validator(minimum))
    //     }
    //   }
    // }
    makeObservable() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.processenl);
    }
    ngOnInit() {
        this.alarmForm.get('disable').valueChanges.subscribe(v => {
            if (v) {
                this.alarmForm.get('minimum').disable();
                this.alarmForm.get('maximum').disable();
                this.checked = true;
            }
            else {
                this.alarmForm.get('minimum').enable();
                this.alarmForm.get('maximum').enable();
                this.checked = false;
            }
        });
    }
    onSelect(procesId) {
        this._service.getAlarmDataByVinAndSoort(procesId, 5).subscribe(result => {
            this.alarmdataModel = result;
        });
    }
    onSubmit() {
        if (this.checked) {
            this.alarmdataModel.actief = 0;
        }
        else {
            this.alarmdataModel.actief = 1;
        }
        this._service.updateAlarmData(this.alarmdataModel);
    }
};
TroebelheidComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"] }
];
TroebelheidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-troebelheid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./troebelheid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/troebelheid/troebelheid.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./troebelheid.component.css */ "./src/app/alarmering/alarmering-data/troebelheid/troebelheid.component.css")).default]
    })
], TroebelheidComponent);



/***/ }),

/***/ "./src/app/alarmering/alarmering-personen/alarmering-personen.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/alarmering/alarmering-personen/alarmering-personen.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hbGFybWVyaW5nL2FsYXJtZXJpbmctcGVyc29uZW4vYWxhcm1lcmluZy1wZXJzb25lbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/alarmering/alarmering-personen/alarmering-personen.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/alarmering/alarmering-personen/alarmering-personen.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AlarmeringPersonenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmeringPersonenComponent", function() { return AlarmeringPersonenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/services.service */ "./src/app/services/services.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_models_alarm_data_gebruiker_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/alarm-data-gebruiker.model */ "./src/app/models/alarm-data-gebruiker.model.ts");






let AlarmeringPersonenComponent = class AlarmeringPersonenComponent {
    constructor(fb, _service) {
        this.fb = fb;
        this._service = _service;
        this.gebruikersl = new Array();
        this.alarmForm = this.fb.group({
            gebruiker: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            proces: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.adgl = new Array();
        this.AlarmDataGebruikerModel = new src_app_models_alarm_data_gebruiker_model__WEBPACK_IMPORTED_MODULE_5__["AlarmDataGebruiker"](null, null);
        this.processenl = new Array();
        this.instantiateLists();
    }
    instantiateLists() {
        this._service.getAllGebruikers().subscribe(result => {
            result.records.forEach(gebruiker => {
                this.gebruikersl.push(gebruiker);
            });
            this.gebruikers = this.makeObservableGebruiker();
        });
        this._service.getAllProcessen().subscribe(result => {
            result.records.forEach(proces => {
                if (proces.actief == 1) {
                    this._service.getVatById(proces.vatId).subscribe(vat => { proces.vat = vat; });
                    this.processenl.push(proces);
                }
            });
            this.processen = this.makeObservable();
        });
    }
    makeObservableAdg() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.adgl);
    }
    makeObservableGebruiker() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.gebruikersl);
    }
    makeObservable() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.processenl);
    }
    ngOnInit() {
    }
    onSelect(id) {
        // this.adgl= new Array<AlarmDataGebruiker[]>();
        // this.gebruiker = id;
        // this._service.getAllAlarmDataGebruikersByGebruiker(id).subscribe(result => {
        //   result.records.forEach(proces => {
        //     this.adgl.push(proces);
        //   });
        //   this.adg = this.makeObservableAdg();
        // })
    }
    onSubmit() {
        this._service.getAlarmDataByProces(this.proces).subscribe(result => {
            result.records.forEach(element => {
                this.AlarmDataGebruikerModel.alarmdataId = element.id;
                this._service.addAlarmDataGebruiker(this.AlarmDataGebruikerModel).subscribe();
            });
        });
    }
};
AlarmeringPersonenComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_3__["ServicesService"] }
];
AlarmeringPersonenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alarmering-personen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alarmering-personen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-personen/alarmering-personen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alarmering-personen.component.css */ "./src/app/alarmering/alarmering-personen/alarmering-personen.component.css")).default]
    })
], AlarmeringPersonenComponent);



/***/ }),

/***/ "./src/app/alarmering/alarmering.module.ts":
/*!*************************************************!*\
  !*** ./src/app/alarmering/alarmering.module.ts ***!
  \*************************************************/
/*! exports provided: AlarmeringModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmeringModule", function() { return AlarmeringModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _alarmering_data_alarmering_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alarmering-data/alarmering-data.component */ "./src/app/alarmering/alarmering-data/alarmering-data.component.ts");
/* harmony import */ var _alarmering_personen_alarmering_personen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alarmering-personen/alarmering-personen.component */ "./src/app/alarmering/alarmering-personen/alarmering-personen.component.ts");
/* harmony import */ var _alarmering_data_druk_druk_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alarmering-data/druk/druk.component */ "./src/app/alarmering/alarmering-data/druk/druk.component.ts");
/* harmony import */ var _alarmering_data_temperatuur_temperatuur_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alarmering-data/temperatuur/temperatuur.component */ "./src/app/alarmering/alarmering-data/temperatuur/temperatuur.component.ts");
/* harmony import */ var _alarmering_data_co_co_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alarmering-data/co/co.component */ "./src/app/alarmering/alarmering-data/co/co.component.ts");
/* harmony import */ var _alarmering_data_ethanol_ethanol_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alarmering-data/ethanol/ethanol.component */ "./src/app/alarmering/alarmering-data/ethanol/ethanol.component.ts");
/* harmony import */ var _alarmering_data_troebelheid_troebelheid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alarmering-data/troebelheid/troebelheid.component */ "./src/app/alarmering/alarmering-data/troebelheid/troebelheid.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");











let AlarmeringModule = class AlarmeringModule {
};
AlarmeringModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_alarmering_data_alarmering_data_component__WEBPACK_IMPORTED_MODULE_3__["AlarmeringDataComponent"], _alarmering_personen_alarmering_personen_component__WEBPACK_IMPORTED_MODULE_4__["AlarmeringPersonenComponent"], _alarmering_data_druk_druk_component__WEBPACK_IMPORTED_MODULE_5__["DrukComponent"], _alarmering_data_temperatuur_temperatuur_component__WEBPACK_IMPORTED_MODULE_6__["TemperatuurComponent"], _alarmering_data_co_co_component__WEBPACK_IMPORTED_MODULE_7__["CoComponent"], _alarmering_data_ethanol_ethanol_component__WEBPACK_IMPORTED_MODULE_8__["EthanolComponent"], _alarmering_data_troebelheid_troebelheid_component__WEBPACK_IMPORTED_MODULE_9__["TroebelheidComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
        ]
    })
], AlarmeringModule);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-sidenav-container {\r\n  position: fixed;\r\n  height: 100%;\r\n  min-height: 100%;\r\n  width: 100%;\r\n  min-width: 100%;\r\n}\r\n\r\n\r\n      body { \r\n        font-family: Roboto, Arial, sans-serif;\r\n        margin: 0;\r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7QUFDakI7OztNQUdNO1FBQ0Usc0NBQXNDO1FBQ3RDLFNBQVM7TUFDWCIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbiAgICAgIGJvZHkgeyBcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let AppComponent = class AppComponent {
    constructor() {
        this.opened = false;
        this.title = 'CircuitFrontend';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], { static: false })
], AppComponent.prototype, "sidenav", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _process_create_process_create_process_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./process/create-process/create-process.component */ "./src/app/process/create-process/create-process.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _process_afsluiten_afsluiten_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./process/afsluiten/afsluiten.component */ "./src/app/process/afsluiten/afsluiten.component.ts");
/* harmony import */ var _process_add_meting_add_meting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./process/add-meting/add-meting.component */ "./src/app/process/add-meting/add-meting.component.ts");
/* harmony import */ var _process_add_actie_add_actie_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./process/add-actie/add-actie.component */ "./src/app/process/add-actie/add-actie.component.ts");
/* harmony import */ var _process_process_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./process/process.component */ "./src/app/process/process.component.ts");
/* harmony import */ var _toon_dashboard_toon_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./toon-dashboard/toon-dashboard.component */ "./src/app/toon-dashboard/toon-dashboard.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _process_process_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./process/process.module */ "./src/app/process/process.module.ts");
/* harmony import */ var _alarmering_alarmering_data_alarmering_data_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./alarmering/alarmering-data/alarmering-data.component */ "./src/app/alarmering/alarmering-data/alarmering-data.component.ts");
/* harmony import */ var _alarmering_alarmering_personen_alarmering_personen_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./alarmering/alarmering-personen/alarmering-personen.component */ "./src/app/alarmering/alarmering-personen/alarmering-personen.component.ts");
/* harmony import */ var _alarmering_alarmering_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./alarmering/alarmering.module */ "./src/app/alarmering/alarmering.module.ts");
/* harmony import */ var _toon_dashboard_toon_dashboard_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./toon-dashboard/toon-dashboard.module */ "./src/app/toon-dashboard/toon-dashboard.module.ts");
/* harmony import */ var _toon_vinificaties_toon_actieve_vinificaties_toon_actieve_vinificaties_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component */ "./src/app/toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component.ts");
/* harmony import */ var _toon_vinificaties_toon_non_actieve_vinificaties_toon_non_actieve_vinificaties_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component */ "./src/app/toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component.ts");
/* harmony import */ var _toon_vinificaties_toon_details_vinificaties_toon_details_vinificaties_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component */ "./src/app/toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component.ts");























const appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'createProcess', component: _process_create_process_create_process_component__WEBPACK_IMPORTED_MODULE_5__["CreateProcessComponent"] },
    { path: 'afsluiten', component: _process_afsluiten_afsluiten_component__WEBPACK_IMPORTED_MODULE_9__["AfsluitenComponent"] },
    { path: 'addMeting', component: _process_add_meting_add_meting_component__WEBPACK_IMPORTED_MODULE_10__["AddMetingComponent"] },
    { path: 'addActie', component: _process_add_actie_add_actie_component__WEBPACK_IMPORTED_MODULE_11__["AddActieComponent"] },
    { path: 'process', component: _process_process_component__WEBPACK_IMPORTED_MODULE_12__["ProcessComponent"] },
    { path: 'alarmdata', component: _alarmering_alarmering_data_alarmering_data_component__WEBPACK_IMPORTED_MODULE_16__["AlarmeringDataComponent"] },
    { path: 'alarmpersonen', component: _alarmering_alarmering_personen_alarmering_personen_component__WEBPACK_IMPORTED_MODULE_17__["AlarmeringPersonenComponent"] },
    { path: 'dashboard', component: _toon_dashboard_toon_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["ToonDashboardComponent"] },
    { path: 'actief', component: _toon_vinificaties_toon_actieve_vinificaties_toon_actieve_vinificaties_component__WEBPACK_IMPORTED_MODULE_20__["ToonActieveVinificatiesComponent"] },
    { path: 'nonactief', component: _toon_vinificaties_toon_non_actieve_vinificaties_toon_non_actieve_vinificaties_component__WEBPACK_IMPORTED_MODULE_21__["ToonNonActieveVinificatiesComponent"] },
    { path: 'detail', component: _toon_vinificaties_toon_details_vinificaties_toon_details_vinificaties_component__WEBPACK_IMPORTED_MODULE_22__["ToonDetailsVinificatiesComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _toon_vinificaties_toon_actieve_vinificaties_toon_actieve_vinificaties_component__WEBPACK_IMPORTED_MODULE_20__["ToonActieveVinificatiesComponent"],
            _toon_vinificaties_toon_non_actieve_vinificaties_toon_non_actieve_vinificaties_component__WEBPACK_IMPORTED_MODULE_21__["ToonNonActieveVinificatiesComponent"],
            _toon_vinificaties_toon_details_vinificaties_toon_details_vinificaties_component__WEBPACK_IMPORTED_MODULE_22__["ToonDetailsVinificatiesComponent"]
        ],
        imports: [
            _home_home_module__WEBPACK_IMPORTED_MODULE_14__["HomeModule"],
            _process_process_module__WEBPACK_IMPORTED_MODULE_15__["ProcessModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _alarmering_alarmering_module__WEBPACK_IMPORTED_MODULE_18__["AlarmeringModule"],
            _toon_dashboard_toon_dashboard_module__WEBPACK_IMPORTED_MODULE_19__["ToonDashboardModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes, { enableTracing: false }),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");





let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/models/alarm-data-gebruiker.model.ts":
/*!******************************************************!*\
  !*** ./src/app/models/alarm-data-gebruiker.model.ts ***!
  \******************************************************/
/*! exports provided: AlarmDataGebruiker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmDataGebruiker", function() { return AlarmDataGebruiker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AlarmDataGebruiker {
    constructor(alarmdataId, gebruikerId) {
        this.alarmdataId = alarmdataId;
        this.gebruikerId = gebruikerId;
    }
}


/***/ }),

/***/ "./src/app/models/alarm-data.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/alarm-data.model.ts ***!
  \********************************************/
/*! exports provided: AlarmData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmData", function() { return AlarmData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AlarmData {
    constructor(id, soortAlarmId, vinificatieId, maximumwaarde, minimumwaarde, actief) {
        this.id = id;
        this.soortAlarmId = soortAlarmId;
        this.vinificatieId = vinificatieId;
        this.maximumwaarde = maximumwaarde;
        this.minimumwaarde = minimumwaarde;
        this.actief = actief;
    }
}


/***/ }),

/***/ "./src/app/models/event.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/event.model.ts ***!
  \***************************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Event {
    constructor(id, soortEventId, vinificatieId, gebruikerId, datum) {
        this.id = id;
        this.soortEventId = soortEventId;
        this.vinificatieId = vinificatieId;
        this.gebruikerId = gebruikerId;
        this.datum = datum;
    }
}


/***/ }),

/***/ "./src/app/models/meting.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/meting.model.ts ***!
  \****************************************/
/*! exports provided: Meting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meting", function() { return Meting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Meting {
    constructor(id, soortMetingId, vinificatieId, gebruikerId, meting, tijd) {
        this.id = id;
        this.soortMetingId = soortMetingId;
        this.vinificatieId = vinificatieId;
        this.gebruikerId = gebruikerId;
        this.meting = meting;
        this.tijd = tijd;
    }
}


/***/ }),

/***/ "./src/app/models/process.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/process.model.ts ***!
  \*****************************************/
/*! exports provided: Process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Process", function() { return Process; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Process {
    constructor(id, vatId, persmethodeId, actief, persHoeveelheid, oogst, persDruk, vat) {
        this.id = id;
        this.vatId = vatId;
        this.persmethodeId = persmethodeId;
        this.actief = actief;
        this.persHoeveelheid = persHoeveelheid;
        this.oogst = oogst;
        this.persDruk = persDruk;
        this.vat = vat;
    }
}


/***/ }),

/***/ "./src/app/process/add-actie/add-actie.component.css":
/*!***********************************************************!*\
  !*** ./src/app/process/add-actie/add-actie.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9wcm9jZXNzL2FkZC1hY3RpZS9hZGQtYWN0aWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/process/add-actie/add-actie.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/process/add-actie/add-actie.component.ts ***!
  \**********************************************************/
/*! exports provided: AddActieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddActieComponent", function() { return AddActieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_models_event_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/event.model */ "./src/app/models/event.model.ts");
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/services.service */ "./src/app/services/services.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let AddActieComponent = class AddActieComponent {
    constructor(fb, _service) {
        this.fb = fb;
        this._service = _service;
        this.processenl = new Array();
        this.eventModel = new src_app_models_event_model__WEBPACK_IMPORTED_MODULE_3__["Event"](0, null, 0, "1", new Date());
        this.addEventForm = this.fb.group({
            vat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            soortEvent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            datum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        _service.getAllProcessen().subscribe(result => {
            result.records.forEach(proces => {
                if (proces.actief == 1) {
                    _service.getVatById(proces.vatId).subscribe(vat => { proces.vat = vat; });
                    this.processenl.push(proces);
                }
            });
            this.processen = this.makeObservable();
        });
        _service.getAllEventsoorten().subscribe(result => {
            this.events = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result.records);
        });
    }
    ngOnInit() {
    }
    makeObservable() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.processenl);
    }
    onSubmit() {
        this._service.addEvent(this.eventModel).subscribe;
    }
};
AddActieComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"] }
];
AddActieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-actie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-actie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/process/add-actie/add-actie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-actie.component.css */ "./src/app/process/add-actie/add-actie.component.css")).default]
    })
], AddActieComponent);



/***/ }),

/***/ "./src/app/process/add-meting/add-meting.component.css":
/*!*************************************************************!*\
  !*** ./src/app/process/add-meting/add-meting.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9wcm9jZXNzL2FkZC1tZXRpbmcvYWRkLW1ldGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/process/add-meting/add-meting.component.ts":
/*!************************************************************!*\
  !*** ./src/app/process/add-meting/add-meting.component.ts ***!
  \************************************************************/
/*! exports provided: AddMetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMetingComponent", function() { return AddMetingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/services.service */ "./src/app/services/services.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_models_meting_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/meting.model */ "./src/app/models/meting.model.ts");






let AddMetingComponent = class AddMetingComponent {
    constructor(fb, _service) {
        this.fb = fb;
        this._service = _service;
        this.processenl = new Array();
        this.metingModel = new src_app_models_meting_model__WEBPACK_IMPORTED_MODULE_5__["Meting"](0, null, null, null, null, new Date());
        this.addMetingForm = this.fb.group({
            vat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            soortMeting: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Metingswaarde: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tijd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.instantiateLists();
        console.log(this.metingModel.tijd);
    }
    instantiateLists() {
        this._service.getAllProcessen().subscribe(result => {
            result.records.forEach(proces => {
                if (proces.actief == 1) {
                    this._service.getVatById(proces.vatId).subscribe(vat => { proces.vat = vat; });
                    this.processenl.push(proces);
                }
            });
            this.processen = this.makeObservable();
        });
        this._service.getAllMetingsoorten().subscribe(result => {
            this.metingen = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result.records);
        });
    }
    ngOnInit() {
    }
    makeObservable() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.processenl);
    }
    onSubmit() {
        this.metingModel.gebruikerId = "1";
        this._service.addMeting(this.metingModel).subscribe;
    }
};
AddMetingComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_3__["ServicesService"] }
];
AddMetingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-meting',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-meting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/process/add-meting/add-meting.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-meting.component.css */ "./src/app/process/add-meting/add-meting.component.css")).default]
    })
], AddMetingComponent);



/***/ }),

/***/ "./src/app/process/afsluiten/afsluiten.component.css":
/*!***********************************************************!*\
  !*** ./src/app/process/afsluiten/afsluiten.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9wcm9jZXNzL2Fmc2x1aXRlbi9hZnNsdWl0ZW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/process/afsluiten/afsluiten.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/process/afsluiten/afsluiten.component.ts ***!
  \**********************************************************/
/*! exports provided: AfsluitenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfsluitenComponent", function() { return AfsluitenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/services.service */ "./src/app/services/services.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AfsluitenComponent = class AfsluitenComponent {
    constructor(_service) {
        this._service = _service;
        this.processenl = new Array();
        this.instantiateLists();
    }
    instantiateLists() {
        this.processenl = new Array();
        this._service.getAllProcessen().subscribe(result => {
            result.records.forEach(proces => {
                if (proces.actief == 1) {
                    this._service.getVatById(proces.vatId).subscribe(vat => { proces.vat = vat; });
                    this.processenl.push(proces);
                }
            });
            this.processen = this.makeObservable();
            console.log(this.processen);
        });
    }
    ngOnInit() {
    }
    makeObservable() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.processenl);
    }
    Sluit(proces) {
        proces.actief = 0;
        this._service.updateProcess(proces).subscribe(result => {
            proces.vat = this._service.getVatById(proces.vatId);
            proces.vat.subscribe(result => {
                result.inGebruik = 0;
                this._service.updateVat(result).subscribe(result => {
                    this.instantiateLists();
                });
            });
        });
    }
};
AfsluitenComponent.ctorParameters = () => [
    { type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"] }
];
AfsluitenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-afsluiten',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./afsluiten.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/process/afsluiten/afsluiten.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./afsluiten.component.css */ "./src/app/process/afsluiten/afsluiten.component.css")).default]
    })
], AfsluitenComponent);



/***/ }),

/***/ "./src/app/process/create-process/create-process.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/process/create-process/create-process.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9wcm9jZXNzL2NyZWF0ZS1wcm9jZXNzL2NyZWF0ZS1wcm9jZXNzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/process/create-process/create-process.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/process/create-process/create-process.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProcessComponent", function() { return CreateProcessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_models_process_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/process.model */ "./src/app/models/process.model.ts");
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/services.service */ "./src/app/services/services.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/alarm-data.model */ "./src/app/models/alarm-data.model.ts");







let CreateProcessComponent = class CreateProcessComponent {
    constructor(fb, _service) {
        this.fb = fb;
        this._service = _service;
        this.vatenl = new Array();
        this.procesModel = new src_app_models_process_model__WEBPACK_IMPORTED_MODULE_3__["Process"](0, null, null, 1, null, null, null, null);
        this.createProcessForm = this.fb.group({
            vat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            druif: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pers: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            persHoeveelheid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            oogst: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.instantiateLists();
    }
    instantiateLists() {
        this.vatenl = new Array;
        this._service.getAllVaten().subscribe(result => {
            result.records.forEach(vat => {
                if (vat.inGebruik == 0) {
                    this.vatenl.push(vat);
                }
            });
            this.vaten = this.makeObservable();
        });
        this._service.getAllDruifsoorten().subscribe(result => {
            this.druiven = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result.records);
        });
        this._service.getAllPersMethodes().subscribe(result => {
            this.persen = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result.records);
        });
    }
    ngOnInit() {
    }
    makeObservable() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.vatenl);
    }
    onSubmit() {
        this._service.addProces(this.procesModel).subscribe(result => {
            this.procesModel.vat = this._service.getVatById(this.procesModel.vatId);
            this.procesModel.vat.subscribe(result => {
                result.inGebruik = 1;
                this._service.updateVat(result).subscribe(result => {
                    this._service.getLastProcess().subscribe(result => {
                        console.log(result);
                        var co = new src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_6__["AlarmData"](0, 2, result.id, 15, 1, 1);
                        this._service.addAlarmData(co);
                        var druk = new src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_6__["AlarmData"](0, 4, result.id, 15, 1, 1);
                        this._service.addAlarmData(druk);
                        var temp = new src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_6__["AlarmData"](0, 1, result.id, 15, 1, 1);
                        this._service.addAlarmData(temp);
                        var alc = new src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_6__["AlarmData"](0, 3, result.id, 15, 1, 1);
                        this._service.addAlarmData(alc);
                        var troeb = new src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_6__["AlarmData"](0, 5, result.id, 15, 1, 1);
                        this._service.addAlarmData(troeb);
                        this.instantiateLists();
                    });
                });
            });
        });
    }
};
CreateProcessComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"] }
];
CreateProcessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-process',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-process.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/process/create-process/create-process.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-process.component.css */ "./src/app/process/create-process/create-process.component.css")).default]
    })
], CreateProcessComponent);



/***/ }),

/***/ "./src/app/process/process.component.css":
/*!***********************************************!*\
  !*** ./src/app/process/process.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9wcm9jZXNzL3Byb2Nlc3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/process/process.component.ts":
/*!**********************************************!*\
  !*** ./src/app/process/process.component.ts ***!
  \**********************************************/
/*! exports provided: ProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessComponent", function() { return ProcessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProcessComponent = class ProcessComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProcessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-process',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./process.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/process/process.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./process.component.css */ "./src/app/process/process.component.css")).default]
    })
], ProcessComponent);



/***/ }),

/***/ "./src/app/process/process.module.ts":
/*!*******************************************!*\
  !*** ./src/app/process/process.module.ts ***!
  \*******************************************/
/*! exports provided: ProcessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessModule", function() { return ProcessModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _create_process_create_process_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-process/create-process.component */ "./src/app/process/create-process/create-process.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _afsluiten_afsluiten_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./afsluiten/afsluiten.component */ "./src/app/process/afsluiten/afsluiten.component.ts");
/* harmony import */ var _add_actie_add_actie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-actie/add-actie.component */ "./src/app/process/add-actie/add-actie.component.ts");
/* harmony import */ var _add_meting_add_meting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-meting/add-meting.component */ "./src/app/process/add-meting/add-meting.component.ts");
/* harmony import */ var _process_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./process.component */ "./src/app/process/process.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");










let ProcessModule = class ProcessModule {
};
ProcessModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_create_process_create_process_component__WEBPACK_IMPORTED_MODULE_3__["CreateProcessComponent"], _afsluiten_afsluiten_component__WEBPACK_IMPORTED_MODULE_5__["AfsluitenComponent"], _add_actie_add_actie_component__WEBPACK_IMPORTED_MODULE_6__["AddActieComponent"], _add_meting_add_meting_component__WEBPACK_IMPORTED_MODULE_7__["AddMetingComponent"], _process_component__WEBPACK_IMPORTED_MODULE_8__["ProcessComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
        ]
    })
], ProcessModule);



/***/ }),

/***/ "./src/app/services/services.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/services.service.ts ***!
  \**********************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




const baselink = "http://localhost/backend_pcfruit/api/";
let ServicesService = class ServicesService {
    constructor(http) {
        this.http = http;
    }
    //Vinificatieprocessen
    getAllProcessen() {
        return this.http.get(baselink + "Vinificatie/read.php");
    }
    addProces(process) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(// wrap the fetch in a from if you need an rxjs Observable
        fetch(baselink + "Vinificatie/create.php", {
            body: JSON.stringify(process),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            mode: 'no-cors'
        }));
        //return this.http.post<Process>(baselink + "Vinificatie/create.php", process);
    }
    updateProcess(process) {
        //return this.http.put(baselink + "" + id, process);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(// wrap the fetch in a from if you need an rxjs Observable
        fetch(baselink + "Vinificatie/update.php", {
            body: JSON.stringify(process),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT'
        }));
    }
    getLastProcess() {
        return this.http.get(baselink + "Vinificatie/getLast.php");
    }
    //Metingen
    addMeting(meting) {
        //return this.http.post<Meting>(baselink + "", meting);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(// wrap the fetch in a from if you need an rxjs Observable
        fetch(baselink + "HandmatigeMeting/create.php", {
            body: JSON.stringify(meting),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            mode: 'no-cors'
        }));
    }
    //events
    addEvent(event) {
        //return this.http.post<Event>(baselink + "", event);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(// wrap the fetch in a from if you need an rxjs Observable
        fetch(baselink + "Event/create.php", {
            body: JSON.stringify(event),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            mode: 'no-cors'
        }));
    }
    //vaten
    getAllVaten() {
        return this.http.get(baselink + "Vat/read.php");
    }
    getVatById(id) {
        return this.http.get(baselink + "Vat/read_one.php?id=" + id);
    }
    getVatByProcess(proces) {
        return this.http.get(baselink + "Vat/read_one.php?id=" + proces.vatId);
    }
    updateVat(vat) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(// wrap the fetch in a from if you need an rxjs Observable
        fetch(baselink + "Vat/update.php", {
            body: JSON.stringify(vat),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT'
        }));
    }
    //persmethodes
    getAllPersMethodes() {
        return this.http.get(baselink + "PersMethode/read.php");
    }
    //druifsoorten
    getAllDruifsoorten() {
        return this.http.get(baselink + "DruifSoort/read.php");
    }
    //metingsoorten
    getAllMetingsoorten() {
        return this.http.get(baselink + "SoortMeting/read.php");
    }
    //eventsoorten
    getAllEventsoorten() {
        return this.http.get(baselink + "SoortEvent/read.php");
    }
    //alarmdata
    getAlarmDataById(id) {
        return this.http.get(baselink + "AlarmData/read_one.php?id=" + id);
    }
    getAlarmDataByProces(id) {
        return this.http.get(baselink + "AlarmData/getByVinificatie.php?vinificatieId=" + id);
    }
    addAlarmData(alarmdata) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(// wrap the fetch in a from if you need an rxjs Observable
        fetch(baselink + "AlarmData/create.php", {
            body: JSON.stringify(alarmdata),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            mode: 'no-cors'
        }));
    }
    getAlarmDataByVinAndSoort(vinId, alarmId) {
        return this.http.get(baselink + "AlarmData/getByVinificatieSoort.php?vinificatieId=" + vinId + "&soortAlarmId=" + alarmId);
    }
    updateAlarmData(alarmdata) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(// wrap the fetch in a from if you need an rxjs Observable
        fetch(baselink + "AlarmData/update.php", {
            body: JSON.stringify(alarmdata),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT'
        }));
    }
    //gebruikers
    getAllGebruikers() {
        return this.http.get(baselink + "Gebruiker/read.php");
    }
    //alarmdatagebruikers
    getAllAlarmDataGebruikersByGebruiker(id) {
        return this.http.get(baselink + "AlarmDataGebruiker/getByGebruikerId.php?gebruikerId=" + id);
    }
    addAlarmDataGebruiker(item) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(// wrap the fetch in a from if you need an rxjs Observable
        fetch(baselink + "AlarmDataGebruiker/create.php", {
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            mode: 'no-cors'
        }));
    }
};
ServicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ServicesService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");









let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlNativeDateTimeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlNativeDateTimeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/toon-dashboard/toon-dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/toon-dashboard/toon-dashboard.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi90b29uLWRhc2hib2FyZC90b29uLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/toon-dashboard/toon-dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/toon-dashboard/toon-dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: ToonDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToonDashboardComponent", function() { return ToonDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToonDashboardComponent = class ToonDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
ToonDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toon-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toon-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/toon-dashboard/toon-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toon-dashboard.component.css */ "./src/app/toon-dashboard/toon-dashboard.component.css")).default]
    })
], ToonDashboardComponent);



/***/ }),

/***/ "./src/app/toon-dashboard/toon-dashboard.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/toon-dashboard/toon-dashboard.module.ts ***!
  \*********************************************************/
/*! exports provided: ToonDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToonDashboardModule", function() { return ToonDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _toon_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toon-dashboard.component */ "./src/app/toon-dashboard/toon-dashboard.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");





let ToonDashboardModule = class ToonDashboardModule {
};
ToonDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_toon_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["ToonDashboardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]
    })
], ToonDashboardModule);



/***/ }),

/***/ "./src/app/toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi90b29uLXZpbmlmaWNhdGllcy90b29uLWFjdGlldmUtdmluaWZpY2F0aWVzL3Rvb24tYWN0aWV2ZS12aW5pZmljYXRpZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ToonActieveVinificatiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToonActieveVinificatiesComponent", function() { return ToonActieveVinificatiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToonActieveVinificatiesComponent = class ToonActieveVinificatiesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ToonActieveVinificatiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toon-actieve-vinificaties',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toon-actieve-vinificaties.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toon-actieve-vinificaties.component.css */ "./src/app/toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component.css")).default]
    })
], ToonActieveVinificatiesComponent);



/***/ }),

/***/ "./src/app/toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi90b29uLXZpbmlmaWNhdGllcy90b29uLWRldGFpbHMtdmluaWZpY2F0aWVzL3Rvb24tZGV0YWlscy12aW5pZmljYXRpZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ToonDetailsVinificatiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToonDetailsVinificatiesComponent", function() { return ToonDetailsVinificatiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToonDetailsVinificatiesComponent = class ToonDetailsVinificatiesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ToonDetailsVinificatiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toon-details-vinificaties',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toon-details-vinificaties.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toon-details-vinificaties.component.css */ "./src/app/toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component.css")).default]
    })
], ToonDetailsVinificatiesComponent);



/***/ }),

/***/ "./src/app/toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component.css ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi90b29uLXZpbmlmaWNhdGllcy90b29uLW5vbi1hY3RpZXZlLXZpbmlmaWNhdGllcy90b29uLW5vbi1hY3RpZXZlLXZpbmlmaWNhdGllcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ToonNonActieveVinificatiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToonNonActieveVinificatiesComponent", function() { return ToonNonActieveVinificatiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToonNonActieveVinificatiesComponent = class ToonNonActieveVinificatiesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ToonNonActieveVinificatiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toon-non-actieve-vinificaties',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toon-non-actieve-vinificaties.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toon-non-actieve-vinificaties.component.css */ "./src/app/toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component.css")).default]
    })
], ToonNonActieveVinificatiesComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Project 4.0\Frontend\CircuitFrontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map