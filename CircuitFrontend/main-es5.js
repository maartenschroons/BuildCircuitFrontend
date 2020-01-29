function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/alarmering-data.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/alarmering-data.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAlarmeringAlarmeringDataAlarmeringDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Alarmeringswaarden aanpassen</h1>\r\n<mat-tab-group mat-align-tabs=\"center\">\r\n    <mat-tab label=\"CO²\"> <app-co></app-co> </mat-tab>\r\n    <mat-tab label=\"Druk\"> <app-druk></app-druk> </mat-tab>\r\n    <mat-tab label=\"Ethanol\"> <app-ethanol></app-ethanol> </mat-tab>\r\n    <mat-tab label=\"Temperatuur\"> <app-temperatuur></app-temperatuur> </mat-tab>\r\n    <mat-tab label=\"Troebelheid\"><app-troebelheid></app-troebelheid> </mat-tab>\r\n  </mat-tab-group>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/co/co.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/co/co.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAlarmeringAlarmeringDataCoCoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"alarmForm\" (ngSubmit)=\"onSubmit()\">\r\n    <p>\r\n        <mat-form-field>\r\n            <mat-label>Kies een vat</mat-label>\r\n            <mat-select formControlName=\"proces\" (selectionChange)=\"onSelect($event.value)\">\r\n                <mat-option *ngFor=\"let proces of (processen | async)\" [value]=\"proces.id\">\r\n                    {{proces.vat?.nummer}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </p>\r\n    <section class=\"example-section\">\r\n        <mat-checkbox class=\"example-margin\" formControlName=\"disable\">Disable</mat-checkbox>\r\n    </section>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"alarmdataModel.minimumwaarde\" formControlName=\"minimum\" [disabled]=\"true\"\r\n            placeholder=\"Minimumwaarde\" type=\"text\" name=\"Metingswaarde\" />\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"alarmdataModel.maximumwaarde\" formControlName=\"maximum\" placeholder=\"Maximumwaarde\"\r\n            type=\"text\" name=\"Metingswaarde\" />\r\n    </mat-form-field>\r\n\r\n\r\n    <div>\r\n        <p>\r\n            <button [disabled]=\"!alarmForm.valid\" mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n        </p>\r\n\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/druk/druk.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/druk/druk.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAlarmeringAlarmeringDataDrukDrukComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"alarmForm\" (ngSubmit)=\"onSubmit()\">\r\n    <p>\r\n        <mat-form-field >\r\n            <mat-label>Kies een vat</mat-label>\r\n            <mat-select formControlName=\"proces\" (selectionChange)=\"onSelect($event.value)\">\r\n                <mat-option *ngFor=\"let proces of (processen | async)\" [value]=\"proces.id\">\r\n                    {{proces.vat?.nummer}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </p>\r\n    <section class=\"example-section\">\r\n        <mat-checkbox class=\"example-margin\" formControlName=\"disable\">Disable</mat-checkbox>\r\n    </section>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"alarmdataModel.minimumwaarde\" formControlName=\"minimum\" [disabled]=\"true\" placeholder=\"Minimumwaarde\"\r\n            type=\"text\" name=\"Metingswaarde\" />\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"alarmdataModel.maximumwaarde\" formControlName=\"maximum\"  placeholder=\"Maximumwaarde\"\r\n            type=\"text\" name=\"Metingswaarde\" />\r\n    </mat-form-field>\r\n\r\n\r\n    <div>\r\n        <p>\r\n            <button [disabled]=\"!alarmForm.valid\" mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n        </p>\r\n\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/ethanol/ethanol.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/ethanol/ethanol.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAlarmeringAlarmeringDataEthanolEthanolComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"alarmForm\" (ngSubmit)=\"onSubmit()\">\r\n    <p>\r\n        <mat-form-field >\r\n            <mat-label>Kies een vat</mat-label>\r\n            <mat-select formControlName=\"proces\" (selectionChange)=\"onSelect($event.value)\">\r\n                <mat-option *ngFor=\"let proces of (processen | async)\" [value]=\"proces.id\">\r\n                    {{proces.vat?.nummer}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </p>\r\n    <section class=\"example-section\">\r\n        <mat-checkbox class=\"example-margin\" formControlName=\"disable\">Disable</mat-checkbox>\r\n    </section>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"alarmdataModel.minimumwaarde\" formControlName=\"minimum\" [disabled]=\"true\" placeholder=\"Minimumwaarde\"\r\n            type=\"text\" name=\"Metingswaarde\" />\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"alarmdataModel.maximumwaarde\" formControlName=\"maximum\"  placeholder=\"Maximumwaarde\"\r\n            type=\"text\" name=\"Metingswaarde\" />\r\n    </mat-form-field>\r\n\r\n\r\n    <div>\r\n        <p>\r\n            <button [disabled]=\"!alarmForm.valid\" mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n        </p>\r\n\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/temperatuur/temperatuur.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/temperatuur/temperatuur.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAlarmeringAlarmeringDataTemperatuurTemperatuurComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"alarmForm\" (ngSubmit)=\"onSubmit()\">\r\n    <p>\r\n        <mat-form-field >\r\n            <mat-label>Kies een vat</mat-label>\r\n            <mat-select formControlName=\"proces\" (selectionChange)=\"onSelect($event.value)\">\r\n                <mat-option *ngFor=\"let proces of (processen | async)\" [value]=\"proces.id\">\r\n                    {{proces.vat?.nummer}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </p>\r\n<section class=\"example-section\">\r\n    <mat-checkbox class=\"example-margin\"  formControlName=\"disable\" >Disable</mat-checkbox>\r\n</section>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"alarmdataModel.minimumwaarde\" formControlName=\"minimum\" [disabled]=\"true\" placeholder=\"Minimumwaarde\"\r\n            type=\"text\" name=\"Metingswaarde\" />\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"alarmdataModel.maximumwaarde\" formControlName=\"maximum\"  placeholder=\"Maximumwaarde\"\r\n            type=\"text\" name=\"Metingswaarde\" />\r\n    </mat-form-field>\r\n\r\n\r\n    <div>\r\n        <p>\r\n            <button [disabled]=\"!alarmForm.valid\" mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n        </p>\r\n\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/troebelheid/troebelheid.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/troebelheid/troebelheid.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAlarmeringAlarmeringDataTroebelheidTroebelheidComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"alarmForm\" (ngSubmit)=\"onSubmit()\">\r\n    <p>\r\n        <mat-form-field>\r\n            <mat-label>Kies een vat</mat-label>\r\n            <mat-select formControlName=\"proces\" (selectionChange)=\"onSelect($event.value)\">\r\n                <mat-option *ngFor=\"let proces of (processen | async)\" [value]=\"proces.id\">\r\n                    {{proces.vat?.nummer}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </p>\r\n    <section class=\"example-section\">\r\n        <mat-checkbox class=\"example-margin\" formControlName=\"disable\">Disable</mat-checkbox>\r\n    </section>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"alarmdataModel.minimumwaarde\" formControlName=\"minimum\" [disabled]=\"true\"\r\n            placeholder=\"Minimumwaarde\" type=\"text\" name=\"Metingswaarde\" />\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"alarmdataModel.maximumwaarde\" formControlName=\"maximum\" placeholder=\"Maximumwaarde\"\r\n            type=\"text\" name=\"Metingswaarde\" />\r\n    </mat-form-field>\r\n\r\n\r\n    <div>\r\n        <p>\r\n            <button [disabled]=\"!alarmForm.valid\" mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n        </p>\r\n\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-personen/alarmering-personen.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-personen/alarmering-personen.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAlarmeringAlarmeringPersonenAlarmeringPersonenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"alarmForm\" (ngSubmit)=\"onSubmit()\">\r\n    <p>\r\n        <mat-form-field>\r\n            <mat-label>Kies een gebruiker</mat-label>\r\n            <mat-select (selectionChange)=\"onSelect($event.value)\" formControlName=\"gebruiker\" [(ngModel)]=\"AlarmDataGebruikerModel.gebruikerId\">\r\n                <mat-option *ngFor=\"let gebruiker of (gebruikers | async)\" [value]=\"gebruiker.id\">\r\n                    {{gebruiker.voornaam}} {{gebruiker.naam}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </p>\r\n    <p>\r\n        <mat-form-field>\r\n            <mat-label>Kies een vat</mat-label>\r\n            <mat-select formControlName=\"proces\" [(ngModel)]=\"proces\">\r\n                <mat-option *ngFor=\"let proces of (processen | async)\" [value]=\"proces.id\">\r\n                    {{proces.vat?.nummer}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </p>\r\n    <div>\r\n        <p>\r\n            <button [disabled]=\"!alarmForm.valid\" mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n        </p>\r\n\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n\r\n        <mat-toolbar color=\"primary\">\r\n\r\n                <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n                        <img margin=\"0\" src=\"../assets/Logo_small.png\" id=\"img\" height=\"40\" layout-align=\"right\" />\r\n                </button>\r\n                <h2 (click)=\"sidenav.toggle()\">CircuitBreakers</h2>\r\n        </mat-toolbar>\r\n</div>\r\n<mat-sidenav-container class=\"sidenav-container\" autosize>\r\n        <mat-sidenav mode=\"top\" class=\"nav\" opened=\"{{opened}}\">\r\n                <mat-nav-list>\r\n\r\n                        <a mat-list-item routerLink=\"/\" routerLinkActive=\"active\"\r\n                                [routerLinkActiveOptions]=\"{ exact: true }\">\r\n                                <img margin=\"0\" src=\"../assets/Logo.png\" width=\"270\" layout-align=\"right\" />\r\n                        </a>\r\n                        <a mat-list-item routerLink=\"/createProcess\" routerLinkActive=\"active\"\r\n                                [routerLinkActiveOptions]=\"{ exact: true }\">Start een\r\n                                process</a>\r\n                        <a mat-list-item routerLink=\"/afsluiten\" routerLinkActive=\"active\"\r\n                                [routerLinkActiveOptions]=\"{ exact: true }\">Sluit een proces\r\n                                af</a>\r\n                        <a mat-list-item routerLink=\"/dashboard\" routerLinkActive=\"active\"\r\n                                [routerLinkActiveOptions]=\"{ exact: true }\">Dashboard 2</a>\r\n                        <a mat-list-item [matMenuTriggerFor]=\"vini\">\r\n                                Vinfi\r\n                                <mat-icon>expand_more</mat-icon>\r\n                        </a>\r\n                        <mat-menu #vini=\"matMenu\">\r\n                                <button mat-menu-item routerLink=\"/actief\" routerLinkActive=\"active\"\r\n                                        [routerLinkActiveOptions]=\"{ exact: true }\">Actieve vinificaties</button>\r\n                                <button mat-menu-item routerLink=\"/nonactief\" routerLinkActive=\"active\"\r\n                                        [routerLinkActiveOptions]=\"{ exact: true }\">Voltooide vinificaties</button>\r\n                        </mat-menu>\r\n\r\n                        <a mat-list-item [matMenuTriggerFor]=\"menu\">\r\n                                Data toevoegen aan een proces\r\n                                <mat-icon>expand_more</mat-icon>\r\n                        </a>\r\n                        <mat-menu #menu=\"matMenu\">\r\n                                <button mat-menu-item routerLink=\"/addMeting\" routerLinkActive=\"active\"\r\n                                        [routerLinkActiveOptions]=\"{ exact: true }\">Voeg een meting\r\n                                        toe aan een proces</button>\r\n                                <button mat-menu-item routerLink=\"/addActie\" routerLinkActive=\"active\"\r\n                                        [routerLinkActiveOptions]=\"{ exact: true }\">Voeg een event\r\n                                        toe aan een proces</button>\r\n                        </mat-menu>\r\n\r\n                        <a mat-list-item [matMenuTriggerFor]=\"alarm\">\r\n                                Alarmering aanpassen\r\n                                <mat-icon>expand_more</mat-icon>\r\n                        </a>\r\n                        <mat-menu #alarm=\"matMenu\">\r\n                                <button mat-menu-item routerLink=\"/alarmdata\" routerLinkActive=\"active\"\r\n                                        [routerLinkActiveOptions]=\"{ exact: true }\">Verander de\r\n                                        alarmeringswaarden</button>\r\n                                <button mat-menu-item routerLink=\"/alarmpersonen\" routerLinkActive=\"active\"\r\n                                        [routerLinkActiveOptions]=\"{ exact: true }\">Manage de\r\n                                        alarmeringspersonen</button>\r\n                        </mat-menu>\r\n                </mat-nav-list>\r\n        </mat-sidenav>\r\n        <mat-sidenav-content class=\"content\">\r\n                <router-outlet></router-outlet>\r\n        </mat-sidenav-content>\r\n</mat-sidenav-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Vinificatie Monitoring</h1>\r\n<h2>Home pagina</h2>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/process/add-actie/add-actie.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/process/add-actie/add-actie.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProcessAddActieAddActieComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Voeg een event toe!</h1>\r\n<form [formGroup]=\"addEventForm\" (ngSubmit)=\"onSubmit()\">\r\n    <p> \r\n        <mat-form-field>\r\n               <mat-label>Kies een vat</mat-label>\r\n               <mat-select formControlName=\"vat\" [(ngModel)]=\"eventModel.vinificatieId\">\r\n                   <mat-option *ngFor=\"let proces of (processen | async)\" [value]=\"proces.id\">\r\n                       {{proces.vat?.nummer}}\r\n                   </mat-option>\r\n               </mat-select>\r\n           </mat-form-field> \r\n       </p>\r\n\r\n    <p>\r\n        <mat-form-field>\r\n            <mat-label>Soort event</mat-label>\r\n            <mat-select formControlName=\"soortEvent\" [(ngModel)]=\"eventModel.soortEventId\">\r\n                <mat-option *ngFor=\"let event of (events |async)\"  [value]=\"event.id\">\r\n                    {{event.naam}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n        <div class=\"input-wrapper\" >\r\n            <label>Datum en tijd:</label>\r\n            <input  [owlDateTimeTrigger]=\"dtPicker1\" [owlDateTime]=\"dtPicker1\" [(ngModel)]=\"eventModel.datum\" formControlName=\"datum\">\r\n            <owl-date-time #dtPicker1></owl-date-time>\r\n        </div>\r\n    \r\n\r\n    <div class=\"row\">\r\n        <p class=\"ml-4\">\r\n            <button [disabled]=\"!addEventForm.valid\" mat-raised-button color=\"primary\"\r\n                type=\"submit\">Submit</button>\r\n        </p>\r\n\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/process/add-meting/add-meting.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/process/add-meting/add-meting.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProcessAddMetingAddMetingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Voeg een meting toe!</h1>\r\n<form [formGroup]=\"addMetingForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n\r\n    <p>\r\n        <mat-form-field>\r\n            <mat-label>Kies een vat</mat-label>\r\n            <mat-select formControlName=\"vat\" [(ngModel)]=\"metingModel.vinificatieId\">\r\n                <mat-option *ngFor=\"let proces of (processen | async)\" [value]=\"proces.id\">\r\n                    {{proces.vat?.nummer}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </p>\r\n    <p>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Metingswaarde\" [(ngModel)]=\"metingModel.meting\" formControlName=\"Metingswaarde\"\r\n                type=\"text\" name=\"Metingswaarde\" />\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <mat-label>Kies een metingsType</mat-label>\r\n            <mat-select formControlName=\"soortMeting\" [(ngModel)]=\"metingModel.soortMetingId\">\r\n                <mat-option *ngFor=\"let type of (metingen | async)\" [value]=\"type.id\">\r\n                    {{type.naam}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </p>\r\n\r\n    <div class=\"input-wrapper\" >\r\n        <label>Datum en tijd:</label>\r\n        <input  [owlDateTimeTrigger]=\"dtPicker1\" [owlDateTime]=\"dtPicker1\" [(ngModel)]=\"metingModel.tijd\" formControlName=\"tijd\">\r\n        <owl-date-time #dtPicker1></owl-date-time>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n        <p class=\"ml-4\">\r\n            <button [disabled]=\"!addMetingForm.valid\" mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n        </p>\r\n\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/process/afsluiten/afsluiten.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/process/afsluiten/afsluiten.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProcessAfsluitenAfsluitenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Kies een proces om af te sluiten</h1>\r\n<ul >\r\n    <li *ngFor=\"let proces of (processen | async)\"> {{proces.vat?.nummer}} <button mat-raised-button addEventForm (click)=\"Sluit(proces)\">Sluit af</button></li>\r\n</ul>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/process/create-process/create-process.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/process/create-process/create-process.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProcessCreateProcessCreateProcessComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"createProcessForm\" (ngSubmit)=\"onSubmit()\">\r\n    <h1>Start een nieuw proces</h1>\r\n    <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayoutAlign=\"center\">\r\n        <div fxFlex=\"20%\">\r\n          <p> \r\n             <mat-form-field>\r\n                    <mat-label>Kies een vat</mat-label>\r\n                    <mat-select formControlName=\"vat\" [(ngModel)]=\"procesModel.vatId\">\r\n                        <mat-option *ngFor=\"let vat of (vaten | async)\" [value]=\"vat.id\">\r\n                            {{vat.nummer}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field> \r\n            </p>\r\n\r\n            <p>\r\n                <mat-form-field>\r\n                    <mat-label>Kies een druifsoort</mat-label>\r\n                    <mat-select formControlName=\"druif\" >\r\n                        <mat-option *ngFor=\"let druif of (druiven| async)\" [value]=\"druif.id\">\r\n                            {{druif.druifsoort}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </p>\r\n\r\n            <p>\r\n                <mat-form-field>\r\n                    <mat-label>Kies een persmethode</mat-label>\r\n                    <mat-select formControlName=\"pers\" [(ngModel)]=\"procesModel.persmethodeId\">\r\n                        <mat-option *ngFor=\"let pers of (persen | async)\" [value]=\"pers.id\">\r\n                            {{pers.methode}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </p> \r\n        </div>\r\n        <div fxFlex=\"20%\">\r\n            <p>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Pers hoeveelheid in L\" [(ngModel)]=\"procesModel.persHoeveelheid\" formControlName=\"persHoeveelheid\" type=\"text\"\r\n                        name=\"persHoeveelheid\" />\r\n                </mat-form-field>\r\n            </p>\r\n            <p>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Oogst in kg\" formControlName=\"oogst\" type=\"text\" name=\"oogst\" [(ngModel)]=\"procesModel.oogst\"/>\r\n                </mat-form-field>\r\n            </p>\r\n            <p>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Bar\" formControlName=\"bar\" type=\"text\" name=\"bar\" [(ngModel)]=\"procesModel.persDruk\"/>\r\n                </mat-form-field>\r\n            </p>\r\n        </div>\r\n        <div fxFlex=\"60%\">\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <p class=\"ml-4\">\r\n            <button [disabled]=\"!createProcessForm.valid\" mat-raised-button color=\"primary\"\r\n                type=\"submit\">Submit</button>\r\n        </p>\r\n\r\n    </div>\r\n\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/process/process.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/process/process.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProcessProcessComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul class=\"nav nav-pills mb-3\" id=\"pills-tab\" role=\"tablist\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link active\" id=\"add-event-tab\" data-toggle=\"process\" href=\"#add-event\" role=\"tab\"\n            aria-controls=\"add-event\" aria-selected=\"true\">Voeg een event toe</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"add-meting-tab\" data-toggle=\"process\" href=\"#add-meting\" role=\"tab\"\n            aria-controls=\"add-meting\" aria-selected=\"false\">Voeg een meting toe</a>\n    </li>\n</ul>\n<div class=\"tab-content\" id=\"process-tabContent\">\n    <div class=\"tab-pane fade show active\" id=\"add-event\" role=\"tabpanel\" aria-labelledby=\"add-event-tab\">\n        <app-add-actie> </app-add-actie>\n    </div>\n    <div class=\"tab-pane fade\" id=\"add-meting\" role=\"tabpanel\" aria-labelledby=\"add-meting-tab\">\n        <app-add-meting></app-add-meting>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/toon-dashboard/toon-dashboard.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toon-dashboard/toon-dashboard.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppToonDashboardToonDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<iframe src=\"http://192.168.0.105:3000/d/76B5JFZRz/vinificatie?orgId=1&refresh=5m&from=now-7d&to=now&theme=light&kiosk&var-vat=2\" frameborder=\"0\" width=\"100%\" height=\"98%\"></iframe>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppToonVinificatiesToonActieveVinificatiesToonActieveVinificatiesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>toon-actieve-vinificaties works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppToonVinificatiesToonDetailsVinificatiesToonDetailsVinificatiesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>toon-details-vinificaties works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component.html":
  /*!****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component.html ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppToonVinificatiesToonNonActieveVinificatiesToonNonActieveVinificatiesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>toon-non-actieve-vinificaties works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/alarmering/alarmering-data/alarmering-data.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/alarmering/alarmering-data/alarmering-data.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAlarmeringAlarmeringDataAlarmeringDataComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hbGFybWVyaW5nL2FsYXJtZXJpbmctZGF0YS9hbGFybWVyaW5nLWRhdGEuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/alarmering/alarmering-data/alarmering-data.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/alarmering/alarmering-data/alarmering-data.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AlarmeringDataComponent */

  /***/
  function srcAppAlarmeringAlarmeringDataAlarmeringDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlarmeringDataComponent", function () {
      return AlarmeringDataComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AlarmeringDataComponent =
    /*#__PURE__*/
    function () {
      function AlarmeringDataComponent() {
        _classCallCheck(this, AlarmeringDataComponent);
      }

      _createClass(AlarmeringDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlarmeringDataComponent;
    }();

    AlarmeringDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alarmering-data',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alarmering-data.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/alarmering-data.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./alarmering-data.component.css */
      "./src/app/alarmering/alarmering-data/alarmering-data.component.css")).default]
    })], AlarmeringDataComponent);
    /***/
  },

  /***/
  "./src/app/alarmering/alarmering-data/co/co.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/alarmering/alarmering-data/co/co.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAlarmeringAlarmeringDataCoCoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hbGFybWVyaW5nL2FsYXJtZXJpbmctZGF0YS9jby9jby5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/alarmering/alarmering-data/co/co.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/alarmering/alarmering-data/co/co.component.ts ***!
    \***************************************************************/

  /*! exports provided: CoComponent */

  /***/
  function srcAppAlarmeringAlarmeringDataCoCoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoComponent", function () {
      return CoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/services.service */
    "./src/app/services/services.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/alarm-data.model */
    "./src/app/models/alarm-data.model.ts");

    var CoComponent =
    /*#__PURE__*/
    function () {
      function CoComponent(fb, _service) {
        _classCallCheck(this, CoComponent);

        this.fb = fb;
        this._service = _service;
        this.alarmdataModel = new src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_5__["AlarmData"](null, null, null, null, null, 0);
        this.checked = false;
        this.alarmForm = this.fb.group({
          disable: [],
          proces: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          minimum: [{
            value: '',
            disabled: false
          }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          maximum: [{
            value: '',
            disabled: false
          }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        }); // ,{ validator: this.greaterThan('minimum', 'maximum') });

        this.processenl = new Array();
        this.instantiateLists();
      }

      _createClass(CoComponent, [{
        key: "instantiateLists",
        value: function instantiateLists() {
          var _this = this;

          this._service.getAllProcessen().subscribe(function (result) {
            result.records.forEach(function (proces) {
              if (proces.actief == 1) {
                _this._service.getVatById(proces.vatId).subscribe(function (vat) {
                  proces.vat = vat;
                });

                _this.processenl.push(proces);
              }
            });
            _this.processen = _this.makeObservable();
          });
        } // greaterThan(minimumKey: string, maximumKey: string) {
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

      }, {
        key: "makeObservable",
        value: function makeObservable() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.processenl);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.alarmForm.get('disable').valueChanges.subscribe(function (v) {
            if (v) {
              _this2.alarmForm.get('minimum').disable();

              _this2.alarmForm.get('maximum').disable();

              _this2.checked = true;
            } else {
              _this2.alarmForm.get('minimum').enable();

              _this2.alarmForm.get('maximum').enable();

              _this2.checked = false;
            }
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(procesId) {
          var _this3 = this;

          this._service.getAlarmDataByVinAndSoort(procesId, 2).subscribe(function (result) {
            _this3.alarmdataModel = result;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.checked) {
            this.alarmdataModel.actief = 0;
          } else {
            this.alarmdataModel.actief = 1;
          }

          this._service.updateAlarmData(this.alarmdataModel);
        }
      }]);

      return CoComponent;
    }();

    CoComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]
      }];
    };

    CoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-co',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./co.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/co/co.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./co.component.css */
      "./src/app/alarmering/alarmering-data/co/co.component.css")).default]
    })], CoComponent);
    /***/
  },

  /***/
  "./src/app/alarmering/alarmering-data/druk/druk.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/alarmering/alarmering-data/druk/druk.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAlarmeringAlarmeringDataDrukDrukComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hbGFybWVyaW5nL2FsYXJtZXJpbmctZGF0YS9kcnVrL2RydWsuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/alarmering/alarmering-data/druk/druk.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/alarmering/alarmering-data/druk/druk.component.ts ***!
    \*******************************************************************/

  /*! exports provided: DrukComponent */

  /***/
  function srcAppAlarmeringAlarmeringDataDrukDrukComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrukComponent", function () {
      return DrukComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/services.service */
    "./src/app/services/services.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/alarm-data.model */
    "./src/app/models/alarm-data.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var DrukComponent =
    /*#__PURE__*/
    function () {
      function DrukComponent(fb, _service) {
        _classCallCheck(this, DrukComponent);

        this.fb = fb;
        this._service = _service;
        this.checked = false;
        this.alarmdataModel = new src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_4__["AlarmData"](null, null, null, null, null, 0);
        this.alarmForm = this.fb.group({
          disable: [],
          proces: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          minimum: [{
            value: '',
            disabled: false
          }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          maximum: [{
            value: '',
            disabled: false
          }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        }); // ,{ validator: this.greaterThan('minimum', 'maximum') });

        this.processenl = new Array();
        this.instantiateLists();
      }

      _createClass(DrukComponent, [{
        key: "instantiateLists",
        value: function instantiateLists() {
          var _this4 = this;

          this._service.getAllProcessen().subscribe(function (result) {
            result.records.forEach(function (proces) {
              if (proces.actief == 1) {
                _this4._service.getVatById(proces.vatId).subscribe(function (vat) {
                  proces.vat = vat;
                });

                _this4.processenl.push(proces);
              }
            });
            _this4.processen = _this4.makeObservable();
          });
        } // greaterThan(minimumKey: string, maximumKey: string) {
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

      }, {
        key: "makeObservable",
        value: function makeObservable() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.processenl);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.alarmForm.get('disable').valueChanges.subscribe(function (v) {
            if (v) {
              _this5.alarmForm.get('minimum').disable();

              _this5.alarmForm.get('maximum').disable();

              _this5.checked = true;
            } else {
              _this5.alarmForm.get('minimum').enable();

              _this5.alarmForm.get('maximum').enable();

              _this5.checked = false;
            }
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(procesId) {
          var _this6 = this;

          this._service.getAlarmDataByVinAndSoort(procesId, 4).subscribe(function (result) {
            _this6.alarmdataModel = result;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.checked) {
            this.alarmdataModel.actief = 0;
          } else {
            this.alarmdataModel.actief = 1;
          }

          this._service.updateAlarmData(this.alarmdataModel);
        }
      }]);

      return DrukComponent;
    }();

    DrukComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]
      }];
    };

    DrukComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-druk',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./druk.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/druk/druk.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./druk.component.css */
      "./src/app/alarmering/alarmering-data/druk/druk.component.css")).default]
    })], DrukComponent);
    /***/
  },

  /***/
  "./src/app/alarmering/alarmering-data/ethanol/ethanol.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/alarmering/alarmering-data/ethanol/ethanol.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAlarmeringAlarmeringDataEthanolEthanolComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hbGFybWVyaW5nL2FsYXJtZXJpbmctZGF0YS9ldGhhbm9sL2V0aGFub2wuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/alarmering/alarmering-data/ethanol/ethanol.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/alarmering/alarmering-data/ethanol/ethanol.component.ts ***!
    \*************************************************************************/

  /*! exports provided: EthanolComponent */

  /***/
  function srcAppAlarmeringAlarmeringDataEthanolEthanolComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EthanolComponent", function () {
      return EthanolComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/services.service */
    "./src/app/services/services.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/alarm-data.model */
    "./src/app/models/alarm-data.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var EthanolComponent =
    /*#__PURE__*/
    function () {
      function EthanolComponent(fb, _service) {
        _classCallCheck(this, EthanolComponent);

        this.fb = fb;
        this._service = _service;
        this.checked = false;
        this.alarmdataModel = new src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_4__["AlarmData"](null, null, null, null, null, 0);
        this.alarmForm = this.fb.group({
          disable: [],
          proces: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          minimum: [{
            value: '',
            disabled: false
          }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          maximum: [{
            value: '',
            disabled: false
          }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        }); // ,{ validator: this.greaterThan('minimum', 'maximum') });

        this.processenl = new Array();
        this.instantiateLists();
      }

      _createClass(EthanolComponent, [{
        key: "instantiateLists",
        value: function instantiateLists() {
          var _this7 = this;

          this._service.getAllProcessen().subscribe(function (result) {
            result.records.forEach(function (proces) {
              if (proces.actief == 1) {
                _this7._service.getVatById(proces.vatId).subscribe(function (vat) {
                  proces.vat = vat;
                });

                _this7.processenl.push(proces);
              }
            });
            _this7.processen = _this7.makeObservable();
          });
        } // greaterThan(minimumKey: string, maximumKey: string) {
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

      }, {
        key: "makeObservable",
        value: function makeObservable() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.processenl);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.alarmForm.get('disable').valueChanges.subscribe(function (v) {
            if (v) {
              _this8.alarmForm.get('minimum').disable();

              _this8.alarmForm.get('maximum').disable();

              _this8.checked = true;
            } else {
              _this8.alarmForm.get('minimum').enable();

              _this8.alarmForm.get('maximum').enable();

              _this8.checked = false;
            }
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(procesId) {
          var _this9 = this;

          this._service.getAlarmDataByVinAndSoort(procesId, 3).subscribe(function (result) {
            _this9.alarmdataModel = result;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.checked) {
            this.alarmdataModel.actief = 0;
          } else {
            this.alarmdataModel.actief = 1;
          }

          this._service.updateAlarmData(this.alarmdataModel);
        }
      }]);

      return EthanolComponent;
    }();

    EthanolComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]
      }];
    };

    EthanolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ethanol',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ethanol.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/ethanol/ethanol.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ethanol.component.css */
      "./src/app/alarmering/alarmering-data/ethanol/ethanol.component.css")).default]
    })], EthanolComponent);
    /***/
  },

  /***/
  "./src/app/alarmering/alarmering-data/temperatuur/temperatuur.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/alarmering/alarmering-data/temperatuur/temperatuur.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAlarmeringAlarmeringDataTemperatuurTemperatuurComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hbGFybWVyaW5nL2FsYXJtZXJpbmctZGF0YS90ZW1wZXJhdHV1ci90ZW1wZXJhdHV1ci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/alarmering/alarmering-data/temperatuur/temperatuur.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/alarmering/alarmering-data/temperatuur/temperatuur.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: TemperatuurComponent */

  /***/
  function srcAppAlarmeringAlarmeringDataTemperatuurTemperatuurComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemperatuurComponent", function () {
      return TemperatuurComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/services.service */
    "./src/app/services/services.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/alarm-data.model */
    "./src/app/models/alarm-data.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var TemperatuurComponent =
    /*#__PURE__*/
    function () {
      function TemperatuurComponent(fb, _service) {
        _classCallCheck(this, TemperatuurComponent);

        this.fb = fb;
        this._service = _service;
        this.checked = false;
        this.alarmdataModel = new src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_4__["AlarmData"](null, null, null, null, null, 0);
        this.alarmForm = this.fb.group({
          disable: [],
          proces: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          minimum: [{
            value: '',
            disabled: false
          }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          maximum: [{
            value: '',
            disabled: false
          }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        }); // ,{ validator: this.greaterThan('minimum', 'maximum') });

        this.processenl = new Array();
        this.instantiateLists();
      }

      _createClass(TemperatuurComponent, [{
        key: "instantiateLists",
        value: function instantiateLists() {
          var _this10 = this;

          this._service.getAllProcessen().subscribe(function (result) {
            result.records.forEach(function (proces) {
              if (proces.actief == 1) {
                _this10._service.getVatById(proces.vatId).subscribe(function (vat) {
                  proces.vat = vat;
                });

                _this10.processenl.push(proces);
              }
            });
            _this10.processen = _this10.makeObservable();
          });
        } // greaterThan(minimumKey: string, maximumKey: string) {
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

      }, {
        key: "makeObservable",
        value: function makeObservable() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.processenl);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.alarmForm.get('disable').valueChanges.subscribe(function (v) {
            if (v) {
              _this11.alarmForm.get('minimum').disable();

              _this11.alarmForm.get('maximum').disable();

              _this11.checked = true;
            } else {
              _this11.alarmForm.get('minimum').enable();

              _this11.alarmForm.get('maximum').enable();

              _this11.checked = false;
            }
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(procesId) {
          var _this12 = this;

          this._service.getAlarmDataByVinAndSoort(procesId, 1).subscribe(function (result) {
            _this12.alarmdataModel = result;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.checked) {
            this.alarmdataModel.actief = 0;
          } else {
            this.alarmdataModel.actief = 1;
          }

          this._service.updateAlarmData(this.alarmdataModel);
        }
      }]);

      return TemperatuurComponent;
    }();

    TemperatuurComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]
      }];
    };

    TemperatuurComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-temperatuur',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./temperatuur.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/temperatuur/temperatuur.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./temperatuur.component.css */
      "./src/app/alarmering/alarmering-data/temperatuur/temperatuur.component.css")).default]
    })], TemperatuurComponent);
    /***/
  },

  /***/
  "./src/app/alarmering/alarmering-data/troebelheid/troebelheid.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/alarmering/alarmering-data/troebelheid/troebelheid.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAlarmeringAlarmeringDataTroebelheidTroebelheidComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hbGFybWVyaW5nL2FsYXJtZXJpbmctZGF0YS90cm9lYmVsaGVpZC90cm9lYmVsaGVpZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/alarmering/alarmering-data/troebelheid/troebelheid.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/alarmering/alarmering-data/troebelheid/troebelheid.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: TroebelheidComponent */

  /***/
  function srcAppAlarmeringAlarmeringDataTroebelheidTroebelheidComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TroebelheidComponent", function () {
      return TroebelheidComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/services.service */
    "./src/app/services/services.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/alarm-data.model */
    "./src/app/models/alarm-data.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var TroebelheidComponent =
    /*#__PURE__*/
    function () {
      function TroebelheidComponent(fb, _service) {
        _classCallCheck(this, TroebelheidComponent);

        this.fb = fb;
        this._service = _service;
        this.checked = false;
        this.alarmdataModel = new src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_4__["AlarmData"](null, null, null, null, null, 0);
        this.alarmForm = this.fb.group({
          disable: [],
          proces: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          minimum: [{
            value: '',
            disabled: false
          }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          maximum: [{
            value: '',
            disabled: false
          }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        }); // ,{ validator: this.greaterThan('minimum', 'maximum') });

        this.processenl = new Array();
        this.instantiateLists();
      }

      _createClass(TroebelheidComponent, [{
        key: "instantiateLists",
        value: function instantiateLists() {
          var _this13 = this;

          this._service.getAllProcessen().subscribe(function (result) {
            result.records.forEach(function (proces) {
              if (proces.actief == 1) {
                _this13._service.getVatById(proces.vatId).subscribe(function (vat) {
                  proces.vat = vat;
                });

                _this13.processenl.push(proces);
              }
            });
            _this13.processen = _this13.makeObservable();
          });
        } // greaterThan(minimumKey: string, maximumKey: string) {
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

      }, {
        key: "makeObservable",
        value: function makeObservable() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.processenl);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.alarmForm.get('disable').valueChanges.subscribe(function (v) {
            if (v) {
              _this14.alarmForm.get('minimum').disable();

              _this14.alarmForm.get('maximum').disable();

              _this14.checked = true;
            } else {
              _this14.alarmForm.get('minimum').enable();

              _this14.alarmForm.get('maximum').enable();

              _this14.checked = false;
            }
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(procesId) {
          var _this15 = this;

          this._service.getAlarmDataByVinAndSoort(procesId, 5).subscribe(function (result) {
            _this15.alarmdataModel = result;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.checked) {
            this.alarmdataModel.actief = 0;
          } else {
            this.alarmdataModel.actief = 1;
          }

          this._service.updateAlarmData(this.alarmdataModel);
        }
      }]);

      return TroebelheidComponent;
    }();

    TroebelheidComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]
      }];
    };

    TroebelheidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-troebelheid',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./troebelheid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-data/troebelheid/troebelheid.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./troebelheid.component.css */
      "./src/app/alarmering/alarmering-data/troebelheid/troebelheid.component.css")).default]
    })], TroebelheidComponent);
    /***/
  },

  /***/
  "./src/app/alarmering/alarmering-personen/alarmering-personen.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/alarmering/alarmering-personen/alarmering-personen.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAlarmeringAlarmeringPersonenAlarmeringPersonenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hbGFybWVyaW5nL2FsYXJtZXJpbmctcGVyc29uZW4vYWxhcm1lcmluZy1wZXJzb25lbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/alarmering/alarmering-personen/alarmering-personen.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/alarmering/alarmering-personen/alarmering-personen.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: AlarmeringPersonenComponent */

  /***/
  function srcAppAlarmeringAlarmeringPersonenAlarmeringPersonenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlarmeringPersonenComponent", function () {
      return AlarmeringPersonenComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/services.service */
    "./src/app/services/services.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_models_alarm_data_gebruiker_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/alarm-data-gebruiker.model */
    "./src/app/models/alarm-data-gebruiker.model.ts");

    var AlarmeringPersonenComponent =
    /*#__PURE__*/
    function () {
      function AlarmeringPersonenComponent(fb, _service) {
        _classCallCheck(this, AlarmeringPersonenComponent);

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

      _createClass(AlarmeringPersonenComponent, [{
        key: "instantiateLists",
        value: function instantiateLists() {
          var _this16 = this;

          this._service.getAllGebruikers().subscribe(function (result) {
            result.records.forEach(function (gebruiker) {
              _this16.gebruikersl.push(gebruiker);
            });
            _this16.gebruikers = _this16.makeObservableGebruiker();
          });

          this._service.getAllProcessen().subscribe(function (result) {
            result.records.forEach(function (proces) {
              if (proces.actief == 1) {
                _this16._service.getVatById(proces.vatId).subscribe(function (vat) {
                  proces.vat = vat;
                });

                _this16.processenl.push(proces);
              }
            });
            _this16.processen = _this16.makeObservable();
          });
        }
      }, {
        key: "makeObservableAdg",
        value: function makeObservableAdg() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.adgl);
        }
      }, {
        key: "makeObservableGebruiker",
        value: function makeObservableGebruiker() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.gebruikersl);
        }
      }, {
        key: "makeObservable",
        value: function makeObservable() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.processenl);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSelect",
        value: function onSelect(id) {// this.adgl= new Array<AlarmDataGebruiker[]>();
          // this.gebruiker = id;
          // this._service.getAllAlarmDataGebruikersByGebruiker(id).subscribe(result => {
          //   result.records.forEach(proces => {
          //     this.adgl.push(proces);
          //   });
          //   this.adg = this.makeObservableAdg();
          // })
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this17 = this;

          this._service.getAlarmDataByProces(this.proces).subscribe(function (result) {
            result.records.forEach(function (element) {
              _this17.AlarmDataGebruikerModel.alarmdataId = element.id;

              _this17._service.addAlarmDataGebruiker(_this17.AlarmDataGebruikerModel).subscribe();
            });
          });
        }
      }]);

      return AlarmeringPersonenComponent;
    }();

    AlarmeringPersonenComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_3__["ServicesService"]
      }];
    };

    AlarmeringPersonenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alarmering-personen',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alarmering-personen.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/alarmering/alarmering-personen/alarmering-personen.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./alarmering-personen.component.css */
      "./src/app/alarmering/alarmering-personen/alarmering-personen.component.css")).default]
    })], AlarmeringPersonenComponent);
    /***/
  },

  /***/
  "./src/app/alarmering/alarmering.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/alarmering/alarmering.module.ts ***!
    \*************************************************/

  /*! exports provided: AlarmeringModule */

  /***/
  function srcAppAlarmeringAlarmeringModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlarmeringModule", function () {
      return AlarmeringModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _alarmering_data_alarmering_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alarmering-data/alarmering-data.component */
    "./src/app/alarmering/alarmering-data/alarmering-data.component.ts");
    /* harmony import */


    var _alarmering_personen_alarmering_personen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./alarmering-personen/alarmering-personen.component */
    "./src/app/alarmering/alarmering-personen/alarmering-personen.component.ts");
    /* harmony import */


    var _alarmering_data_druk_druk_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./alarmering-data/druk/druk.component */
    "./src/app/alarmering/alarmering-data/druk/druk.component.ts");
    /* harmony import */


    var _alarmering_data_temperatuur_temperatuur_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./alarmering-data/temperatuur/temperatuur.component */
    "./src/app/alarmering/alarmering-data/temperatuur/temperatuur.component.ts");
    /* harmony import */


    var _alarmering_data_co_co_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./alarmering-data/co/co.component */
    "./src/app/alarmering/alarmering-data/co/co.component.ts");
    /* harmony import */


    var _alarmering_data_ethanol_ethanol_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./alarmering-data/ethanol/ethanol.component */
    "./src/app/alarmering/alarmering-data/ethanol/ethanol.component.ts");
    /* harmony import */


    var _alarmering_data_troebelheid_troebelheid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./alarmering-data/troebelheid/troebelheid.component */
    "./src/app/alarmering/alarmering-data/troebelheid/troebelheid.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AlarmeringModule = function AlarmeringModule() {
      _classCallCheck(this, AlarmeringModule);
    };

    AlarmeringModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_alarmering_data_alarmering_data_component__WEBPACK_IMPORTED_MODULE_3__["AlarmeringDataComponent"], _alarmering_personen_alarmering_personen_component__WEBPACK_IMPORTED_MODULE_4__["AlarmeringPersonenComponent"], _alarmering_data_druk_druk_component__WEBPACK_IMPORTED_MODULE_5__["DrukComponent"], _alarmering_data_temperatuur_temperatuur_component__WEBPACK_IMPORTED_MODULE_6__["TemperatuurComponent"], _alarmering_data_co_co_component__WEBPACK_IMPORTED_MODULE_7__["CoComponent"], _alarmering_data_ethanol_ethanol_component__WEBPACK_IMPORTED_MODULE_8__["EthanolComponent"], _alarmering_data_troebelheid_troebelheid_component__WEBPACK_IMPORTED_MODULE_9__["TroebelheidComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]]
    })], AlarmeringModule);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-sidenav-container {\r\n  position: fixed;\r\n  height: 100%;\r\n  min-height: 100%;\r\n  width: 100%;\r\n  min-width: 100%;\r\n}\r\n\r\n\r\n      body { \r\n        font-family: Roboto, Arial, sans-serif;\r\n        margin: 0;\r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7QUFDakI7OztNQUdNO1FBQ0Usc0NBQXNDO1FBQ3RDLFNBQVM7TUFDWCIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbiAgICAgIGJvZHkgeyBcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.opened = false;
      this.title = 'CircuitFrontend';
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], {
      static: false
    })], AppComponent.prototype, "sidenav", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _process_create_process_create_process_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./process/create-process/create-process.component */
    "./src/app/process/create-process/create-process.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _process_afsluiten_afsluiten_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./process/afsluiten/afsluiten.component */
    "./src/app/process/afsluiten/afsluiten.component.ts");
    /* harmony import */


    var _process_add_meting_add_meting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./process/add-meting/add-meting.component */
    "./src/app/process/add-meting/add-meting.component.ts");
    /* harmony import */


    var _process_add_actie_add_actie_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./process/add-actie/add-actie.component */
    "./src/app/process/add-actie/add-actie.component.ts");
    /* harmony import */


    var _process_process_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./process/process.component */
    "./src/app/process/process.component.ts");
    /* harmony import */


    var _toon_dashboard_toon_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./toon-dashboard/toon-dashboard.component */
    "./src/app/toon-dashboard/toon-dashboard.component.ts");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var _process_process_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./process/process.module */
    "./src/app/process/process.module.ts");
    /* harmony import */


    var _alarmering_alarmering_data_alarmering_data_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./alarmering/alarmering-data/alarmering-data.component */
    "./src/app/alarmering/alarmering-data/alarmering-data.component.ts");
    /* harmony import */


    var _alarmering_alarmering_personen_alarmering_personen_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./alarmering/alarmering-personen/alarmering-personen.component */
    "./src/app/alarmering/alarmering-personen/alarmering-personen.component.ts");
    /* harmony import */


    var _alarmering_alarmering_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./alarmering/alarmering.module */
    "./src/app/alarmering/alarmering.module.ts");
    /* harmony import */


    var _toon_dashboard_toon_dashboard_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./toon-dashboard/toon-dashboard.module */
    "./src/app/toon-dashboard/toon-dashboard.module.ts");
    /* harmony import */


    var _toon_vinificaties_toon_actieve_vinificaties_toon_actieve_vinificaties_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component */
    "./src/app/toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component.ts");
    /* harmony import */


    var _toon_vinificaties_toon_non_actieve_vinificaties_toon_non_actieve_vinificaties_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component */
    "./src/app/toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component.ts");
    /* harmony import */


    var _toon_vinificaties_toon_details_vinificaties_toon_details_vinificaties_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component */
    "./src/app/toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component.ts");

    var appRoutes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    }, {
      path: 'createProcess',
      component: _process_create_process_create_process_component__WEBPACK_IMPORTED_MODULE_5__["CreateProcessComponent"]
    }, {
      path: 'afsluiten',
      component: _process_afsluiten_afsluiten_component__WEBPACK_IMPORTED_MODULE_9__["AfsluitenComponent"]
    }, {
      path: 'addMeting',
      component: _process_add_meting_add_meting_component__WEBPACK_IMPORTED_MODULE_10__["AddMetingComponent"]
    }, {
      path: 'addActie',
      component: _process_add_actie_add_actie_component__WEBPACK_IMPORTED_MODULE_11__["AddActieComponent"]
    }, {
      path: 'process',
      component: _process_process_component__WEBPACK_IMPORTED_MODULE_12__["ProcessComponent"]
    }, {
      path: 'alarmdata',
      component: _alarmering_alarmering_data_alarmering_data_component__WEBPACK_IMPORTED_MODULE_16__["AlarmeringDataComponent"]
    }, {
      path: 'alarmpersonen',
      component: _alarmering_alarmering_personen_alarmering_personen_component__WEBPACK_IMPORTED_MODULE_17__["AlarmeringPersonenComponent"]
    }, {
      path: 'dashboard',
      component: _toon_dashboard_toon_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["ToonDashboardComponent"]
    }, {
      path: 'actief',
      component: _toon_vinificaties_toon_actieve_vinificaties_toon_actieve_vinificaties_component__WEBPACK_IMPORTED_MODULE_20__["ToonActieveVinificatiesComponent"]
    }, {
      path: 'nonactief',
      component: _toon_vinificaties_toon_non_actieve_vinificaties_toon_non_actieve_vinificaties_component__WEBPACK_IMPORTED_MODULE_21__["ToonNonActieveVinificatiesComponent"]
    }, {
      path: 'detail',
      component: _toon_vinificaties_toon_details_vinificaties_toon_details_vinificaties_component__WEBPACK_IMPORTED_MODULE_22__["ToonDetailsVinificatiesComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _toon_vinificaties_toon_actieve_vinificaties_toon_actieve_vinificaties_component__WEBPACK_IMPORTED_MODULE_20__["ToonActieveVinificatiesComponent"], _toon_vinificaties_toon_non_actieve_vinificaties_toon_non_actieve_vinificaties_component__WEBPACK_IMPORTED_MODULE_21__["ToonNonActieveVinificatiesComponent"], _toon_vinificaties_toon_details_vinificaties_toon_details_vinificaties_component__WEBPACK_IMPORTED_MODULE_22__["ToonDetailsVinificatiesComponent"]],
      imports: [_home_home_module__WEBPACK_IMPORTED_MODULE_14__["HomeModule"], _process_process_module__WEBPACK_IMPORTED_MODULE_15__["ProcessModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _alarmering_alarmering_module__WEBPACK_IMPORTED_MODULE_18__["AlarmeringModule"], _toon_dashboard_toon_dashboard_module__WEBPACK_IMPORTED_MODULE_19__["ToonDashboardModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes, {
        enableTracing: false
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
    })], HomeModule);
    /***/
  },

  /***/
  "./src/app/models/alarm-data-gebruiker.model.ts":
  /*!******************************************************!*\
    !*** ./src/app/models/alarm-data-gebruiker.model.ts ***!
    \******************************************************/

  /*! exports provided: AlarmDataGebruiker */

  /***/
  function srcAppModelsAlarmDataGebruikerModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlarmDataGebruiker", function () {
      return AlarmDataGebruiker;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AlarmDataGebruiker = function AlarmDataGebruiker(alarmdataId, gebruikerId) {
      _classCallCheck(this, AlarmDataGebruiker);

      this.alarmdataId = alarmdataId;
      this.gebruikerId = gebruikerId;
    };
    /***/

  },

  /***/
  "./src/app/models/alarm-data.model.ts":
  /*!********************************************!*\
    !*** ./src/app/models/alarm-data.model.ts ***!
    \********************************************/

  /*! exports provided: AlarmData */

  /***/
  function srcAppModelsAlarmDataModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlarmData", function () {
      return AlarmData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AlarmData = function AlarmData(id, soortAlarmId, vinificatieId, maximumwaarde, minimumwaarde, actief) {
      _classCallCheck(this, AlarmData);

      this.id = id;
      this.soortAlarmId = soortAlarmId;
      this.vinificatieId = vinificatieId;
      this.maximumwaarde = maximumwaarde;
      this.minimumwaarde = minimumwaarde;
      this.actief = actief;
    };
    /***/

  },

  /***/
  "./src/app/models/event.model.ts":
  /*!***************************************!*\
    !*** ./src/app/models/event.model.ts ***!
    \***************************************/

  /*! exports provided: Event */

  /***/
  function srcAppModelsEventModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Event", function () {
      return Event;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Event = function Event(id, soortEventId, vinificatieId, gebruikerId, datum) {
      _classCallCheck(this, Event);

      this.id = id;
      this.soortEventId = soortEventId;
      this.vinificatieId = vinificatieId;
      this.gebruikerId = gebruikerId;
      this.datum = datum;
    };
    /***/

  },

  /***/
  "./src/app/models/meting.model.ts":
  /*!****************************************!*\
    !*** ./src/app/models/meting.model.ts ***!
    \****************************************/

  /*! exports provided: Meting */

  /***/
  function srcAppModelsMetingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Meting", function () {
      return Meting;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Meting = function Meting(id, soortMetingId, vinificatieId, gebruikerId, meting, tijd) {
      _classCallCheck(this, Meting);

      this.id = id;
      this.soortMetingId = soortMetingId;
      this.vinificatieId = vinificatieId;
      this.gebruikerId = gebruikerId;
      this.meting = meting;
      this.tijd = tijd;
    };
    /***/

  },

  /***/
  "./src/app/models/process.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/process.model.ts ***!
    \*****************************************/

  /*! exports provided: Process */

  /***/
  function srcAppModelsProcessModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Process", function () {
      return Process;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Process = function Process(id, vatId, persmethodeId, actief, persHoeveelheid, oogst, persDruk, vat) {
      _classCallCheck(this, Process);

      this.id = id;
      this.vatId = vatId;
      this.persmethodeId = persmethodeId;
      this.actief = actief;
      this.persHoeveelheid = persHoeveelheid;
      this.oogst = oogst;
      this.persDruk = persDruk;
      this.vat = vat;
    };
    /***/

  },

  /***/
  "./src/app/process/add-actie/add-actie.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/process/add-actie/add-actie.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProcessAddActieAddActieComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9wcm9jZXNzL2FkZC1hY3RpZS9hZGQtYWN0aWUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/process/add-actie/add-actie.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/process/add-actie/add-actie.component.ts ***!
    \**********************************************************/

  /*! exports provided: AddActieComponent */

  /***/
  function srcAppProcessAddActieAddActieComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddActieComponent", function () {
      return AddActieComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_models_event_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/event.model */
    "./src/app/models/event.model.ts");
    /* harmony import */


    var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/services.service */
    "./src/app/services/services.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AddActieComponent =
    /*#__PURE__*/
    function () {
      function AddActieComponent(fb, _service) {
        var _this18 = this;

        _classCallCheck(this, AddActieComponent);

        this.fb = fb;
        this._service = _service;
        this.processenl = new Array();
        this.eventModel = new src_app_models_event_model__WEBPACK_IMPORTED_MODULE_3__["Event"](0, null, 0, "1", new Date());
        this.addEventForm = this.fb.group({
          vat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          soortEvent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          datum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });

        _service.getAllProcessen().subscribe(function (result) {
          result.records.forEach(function (proces) {
            if (proces.actief == 1) {
              _service.getVatById(proces.vatId).subscribe(function (vat) {
                proces.vat = vat;
              });

              _this18.processenl.push(proces);
            }
          });
          _this18.processen = _this18.makeObservable();
        });

        _service.getAllEventsoorten().subscribe(function (result) {
          _this18.events = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result.records);
        });
      }

      _createClass(AddActieComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "makeObservable",
        value: function makeObservable() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.processenl);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this._service.addEvent(this.eventModel).subscribe;
        }
      }]);

      return AddActieComponent;
    }();

    AddActieComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"]
      }];
    };

    AddActieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-actie',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-actie.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/process/add-actie/add-actie.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-actie.component.css */
      "./src/app/process/add-actie/add-actie.component.css")).default]
    })], AddActieComponent);
    /***/
  },

  /***/
  "./src/app/process/add-meting/add-meting.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/process/add-meting/add-meting.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProcessAddMetingAddMetingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9wcm9jZXNzL2FkZC1tZXRpbmcvYWRkLW1ldGluZy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/process/add-meting/add-meting.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/process/add-meting/add-meting.component.ts ***!
    \************************************************************/

  /*! exports provided: AddMetingComponent */

  /***/
  function srcAppProcessAddMetingAddMetingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddMetingComponent", function () {
      return AddMetingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/services.service */
    "./src/app/services/services.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_models_meting_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/meting.model */
    "./src/app/models/meting.model.ts");

    var AddMetingComponent =
    /*#__PURE__*/
    function () {
      function AddMetingComponent(fb, _service) {
        _classCallCheck(this, AddMetingComponent);

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

      _createClass(AddMetingComponent, [{
        key: "instantiateLists",
        value: function instantiateLists() {
          var _this19 = this;

          this._service.getAllProcessen().subscribe(function (result) {
            result.records.forEach(function (proces) {
              if (proces.actief == 1) {
                _this19._service.getVatById(proces.vatId).subscribe(function (vat) {
                  proces.vat = vat;
                });

                _this19.processenl.push(proces);
              }
            });
            _this19.processen = _this19.makeObservable();
          });

          this._service.getAllMetingsoorten().subscribe(function (result) {
            _this19.metingen = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result.records);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "makeObservable",
        value: function makeObservable() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.processenl);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.metingModel.gebruikerId = "1";
          this._service.addMeting(this.metingModel).subscribe;
        }
      }]);

      return AddMetingComponent;
    }();

    AddMetingComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_3__["ServicesService"]
      }];
    };

    AddMetingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-meting',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-meting.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/process/add-meting/add-meting.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-meting.component.css */
      "./src/app/process/add-meting/add-meting.component.css")).default]
    })], AddMetingComponent);
    /***/
  },

  /***/
  "./src/app/process/afsluiten/afsluiten.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/process/afsluiten/afsluiten.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProcessAfsluitenAfsluitenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9wcm9jZXNzL2Fmc2x1aXRlbi9hZnNsdWl0ZW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/process/afsluiten/afsluiten.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/process/afsluiten/afsluiten.component.ts ***!
    \**********************************************************/

  /*! exports provided: AfsluitenComponent */

  /***/
  function srcAppProcessAfsluitenAfsluitenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AfsluitenComponent", function () {
      return AfsluitenComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/services.service */
    "./src/app/services/services.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AfsluitenComponent =
    /*#__PURE__*/
    function () {
      function AfsluitenComponent(_service) {
        _classCallCheck(this, AfsluitenComponent);

        this._service = _service;
        this.processenl = new Array();
        this.instantiateLists();
      }

      _createClass(AfsluitenComponent, [{
        key: "instantiateLists",
        value: function instantiateLists() {
          var _this20 = this;

          this.processenl = new Array();

          this._service.getAllProcessen().subscribe(function (result) {
            result.records.forEach(function (proces) {
              if (proces.actief == 1) {
                _this20._service.getVatById(proces.vatId).subscribe(function (vat) {
                  proces.vat = vat;
                });

                _this20.processenl.push(proces);
              }
            });
            _this20.processen = _this20.makeObservable();
            console.log(_this20.processen);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "makeObservable",
        value: function makeObservable() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.processenl);
        }
      }, {
        key: "Sluit",
        value: function Sluit(proces) {
          var _this21 = this;

          proces.actief = 0;

          this._service.updateProcess(proces).subscribe(function (result) {
            proces.vat = _this21._service.getVatById(proces.vatId);
            proces.vat.subscribe(function (result) {
              result.inGebruik = 0;

              _this21._service.updateVat(result).subscribe(function (result) {
                _this21.instantiateLists();
              });
            });
          });
        }
      }]);

      return AfsluitenComponent;
    }();

    AfsluitenComponent.ctorParameters = function () {
      return [{
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]
      }];
    };

    AfsluitenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-afsluiten',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./afsluiten.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/process/afsluiten/afsluiten.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./afsluiten.component.css */
      "./src/app/process/afsluiten/afsluiten.component.css")).default]
    })], AfsluitenComponent);
    /***/
  },

  /***/
  "./src/app/process/create-process/create-process.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/process/create-process/create-process.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProcessCreateProcessCreateProcessComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9wcm9jZXNzL2NyZWF0ZS1wcm9jZXNzL2NyZWF0ZS1wcm9jZXNzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/process/create-process/create-process.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/process/create-process/create-process.component.ts ***!
    \********************************************************************/

  /*! exports provided: CreateProcessComponent */

  /***/
  function srcAppProcessCreateProcessCreateProcessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateProcessComponent", function () {
      return CreateProcessComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_models_process_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/process.model */
    "./src/app/models/process.model.ts");
    /* harmony import */


    var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/services.service */
    "./src/app/services/services.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/models/alarm-data.model */
    "./src/app/models/alarm-data.model.ts");

    var CreateProcessComponent =
    /*#__PURE__*/
    function () {
      function CreateProcessComponent(fb, _service) {
        _classCallCheck(this, CreateProcessComponent);

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

      _createClass(CreateProcessComponent, [{
        key: "instantiateLists",
        value: function instantiateLists() {
          var _this22 = this;

          this.vatenl = new Array();

          this._service.getAllVaten().subscribe(function (result) {
            result.records.forEach(function (vat) {
              if (vat.inGebruik == 0) {
                _this22.vatenl.push(vat);
              }
            });
            _this22.vaten = _this22.makeObservable();
          });

          this._service.getAllDruifsoorten().subscribe(function (result) {
            _this22.druiven = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result.records);
          });

          this._service.getAllPersMethodes().subscribe(function (result) {
            _this22.persen = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result.records);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "makeObservable",
        value: function makeObservable() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.vatenl);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this23 = this;

          this._service.addProces(this.procesModel).subscribe(function (result) {
            _this23.procesModel.vat = _this23._service.getVatById(_this23.procesModel.vatId);

            _this23.procesModel.vat.subscribe(function (result) {
              result.inGebruik = 1;

              _this23._service.updateVat(result).subscribe(function (result) {
                _this23._service.getLastProcess().subscribe(function (result) {
                  console.log(result);
                  var co = new src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_6__["AlarmData"](0, 2, result.id, 15, 1, 1);

                  _this23._service.addAlarmData(co);

                  var druk = new src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_6__["AlarmData"](0, 4, result.id, 15, 1, 1);

                  _this23._service.addAlarmData(druk);

                  var temp = new src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_6__["AlarmData"](0, 1, result.id, 15, 1, 1);

                  _this23._service.addAlarmData(temp);

                  var alc = new src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_6__["AlarmData"](0, 3, result.id, 15, 1, 1);

                  _this23._service.addAlarmData(alc);

                  var troeb = new src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_6__["AlarmData"](0, 5, result.id, 15, 1, 1);

                  _this23._service.addAlarmData(troeb);

                  _this23.instantiateLists();
                });
              });
            });
          });
        }
      }]);

      return CreateProcessComponent;
    }();

    CreateProcessComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"]
      }];
    };

    CreateProcessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-process',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-process.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/process/create-process/create-process.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-process.component.css */
      "./src/app/process/create-process/create-process.component.css")).default]
    })], CreateProcessComponent);
    /***/
  },

  /***/
  "./src/app/process/process.component.css":
  /*!***********************************************!*\
    !*** ./src/app/process/process.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProcessProcessComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9wcm9jZXNzL3Byb2Nlc3MuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/process/process.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/process/process.component.ts ***!
    \**********************************************/

  /*! exports provided: ProcessComponent */

  /***/
  function srcAppProcessProcessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProcessComponent", function () {
      return ProcessComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProcessComponent =
    /*#__PURE__*/
    function () {
      function ProcessComponent() {
        _classCallCheck(this, ProcessComponent);
      }

      _createClass(ProcessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProcessComponent;
    }();

    ProcessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-process',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./process.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/process/process.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./process.component.css */
      "./src/app/process/process.component.css")).default]
    })], ProcessComponent);
    /***/
  },

  /***/
  "./src/app/process/process.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/process/process.module.ts ***!
    \*******************************************/

  /*! exports provided: ProcessModule */

  /***/
  function srcAppProcessProcessModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProcessModule", function () {
      return ProcessModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _create_process_create_process_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./create-process/create-process.component */
    "./src/app/process/create-process/create-process.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _afsluiten_afsluiten_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./afsluiten/afsluiten.component */
    "./src/app/process/afsluiten/afsluiten.component.ts");
    /* harmony import */


    var _add_actie_add_actie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-actie/add-actie.component */
    "./src/app/process/add-actie/add-actie.component.ts");
    /* harmony import */


    var _add_meting_add_meting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./add-meting/add-meting.component */
    "./src/app/process/add-meting/add-meting.component.ts");
    /* harmony import */


    var _process_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./process.component */
    "./src/app/process/process.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ProcessModule = function ProcessModule() {
      _classCallCheck(this, ProcessModule);
    };

    ProcessModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_create_process_create_process_component__WEBPACK_IMPORTED_MODULE_3__["CreateProcessComponent"], _afsluiten_afsluiten_component__WEBPACK_IMPORTED_MODULE_5__["AfsluitenComponent"], _add_actie_add_actie_component__WEBPACK_IMPORTED_MODULE_6__["AddActieComponent"], _add_meting_add_meting_component__WEBPACK_IMPORTED_MODULE_7__["AddMetingComponent"], _process_component__WEBPACK_IMPORTED_MODULE_8__["ProcessComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]]
    })], ProcessModule);
    /***/
  },

  /***/
  "./src/app/services/services.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/services.service.ts ***!
    \**********************************************/

  /*! exports provided: ServicesService */

  /***/
  function srcAppServicesServicesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesService", function () {
      return ServicesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var baselink = "http://localhost/backend_pcfruit/api/";

    var ServicesService =
    /*#__PURE__*/
    function () {
      function ServicesService(http) {
        _classCallCheck(this, ServicesService);

        this.http = http;
      } //Vinificatieprocessen


      _createClass(ServicesService, [{
        key: "getAllProcessen",
        value: function getAllProcessen() {
          return this.http.get(baselink + "Vinificatie/read.php");
        }
      }, {
        key: "addProces",
        value: function addProces(process) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "Vinificatie/create.php", {
            body: JSON.stringify(process),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'no-cors'
          })); //return this.http.post<Process>(baselink + "Vinificatie/create.php", process);
        }
      }, {
        key: "updateProcess",
        value: function updateProcess(process) {
          //return this.http.put(baselink + "" + id, process);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "Vinificatie/update.php", {
            body: JSON.stringify(process),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'PUT'
          }));
        }
      }, {
        key: "getLastProcess",
        value: function getLastProcess() {
          return this.http.get(baselink + "Vinificatie/getLast.php");
        } //Metingen

      }, {
        key: "addMeting",
        value: function addMeting(meting) {
          //return this.http.post<Meting>(baselink + "", meting);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "HandmatigeMeting/create.php", {
            body: JSON.stringify(meting),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'no-cors'
          }));
        } //events

      }, {
        key: "addEvent",
        value: function addEvent(event) {
          //return this.http.post<Event>(baselink + "", event);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "Event/create.php", {
            body: JSON.stringify(event),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'no-cors'
          }));
        } //vaten

      }, {
        key: "getAllVaten",
        value: function getAllVaten() {
          return this.http.get(baselink + "Vat/read.php");
        }
      }, {
        key: "getVatById",
        value: function getVatById(id) {
          return this.http.get(baselink + "Vat/read_one.php?id=" + id);
        }
      }, {
        key: "getVatByProcess",
        value: function getVatByProcess(proces) {
          return this.http.get(baselink + "Vat/read_one.php?id=" + proces.vatId);
        }
      }, {
        key: "updateVat",
        value: function updateVat(vat) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "Vat/update.php", {
            body: JSON.stringify(vat),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'PUT'
          }));
        } //persmethodes

      }, {
        key: "getAllPersMethodes",
        value: function getAllPersMethodes() {
          return this.http.get(baselink + "PersMethode/read.php");
        } //druifsoorten

      }, {
        key: "getAllDruifsoorten",
        value: function getAllDruifsoorten() {
          return this.http.get(baselink + "DruifSoort/read.php");
        } //metingsoorten

      }, {
        key: "getAllMetingsoorten",
        value: function getAllMetingsoorten() {
          return this.http.get(baselink + "SoortMeting/read.php");
        } //eventsoorten

      }, {
        key: "getAllEventsoorten",
        value: function getAllEventsoorten() {
          return this.http.get(baselink + "SoortEvent/read.php");
        } //alarmdata

      }, {
        key: "getAlarmDataById",
        value: function getAlarmDataById(id) {
          return this.http.get(baselink + "AlarmData/read_one.php?id=" + id);
        }
      }, {
        key: "getAlarmDataByProces",
        value: function getAlarmDataByProces(id) {
          return this.http.get(baselink + "AlarmData/getByVinificatie.php?vinificatieId=" + id);
        }
      }, {
        key: "addAlarmData",
        value: function addAlarmData(alarmdata) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "AlarmData/create.php", {
            body: JSON.stringify(alarmdata),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'no-cors'
          }));
        }
      }, {
        key: "getAlarmDataByVinAndSoort",
        value: function getAlarmDataByVinAndSoort(vinId, alarmId) {
          return this.http.get(baselink + "AlarmData/getByVinificatieSoort.php?vinificatieId=" + vinId + "&soortAlarmId=" + alarmId);
        }
      }, {
        key: "updateAlarmData",
        value: function updateAlarmData(alarmdata) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "AlarmData/update.php", {
            body: JSON.stringify(alarmdata),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'PUT'
          }));
        } //gebruikers

      }, {
        key: "getAllGebruikers",
        value: function getAllGebruikers() {
          return this.http.get(baselink + "Gebruiker/read.php");
        } //alarmdatagebruikers

      }, {
        key: "getAllAlarmDataGebruikersByGebruiker",
        value: function getAllAlarmDataGebruikersByGebruiker(id) {
          return this.http.get(baselink + "AlarmDataGebruiker/getByGebruikerId.php?gebruikerId=" + id);
        }
      }, {
        key: "addAlarmDataGebruiker",
        value: function addAlarmDataGebruiker(item) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "AlarmDataGebruiker/create.php", {
            body: JSON.stringify(item),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'no-cors'
          }));
        }
      }]);

      return ServicesService;
    }();

    ServicesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ServicesService);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-pick-datetime */
    "./node_modules/ng-pick-datetime/picker.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlNativeDateTimeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlNativeDateTimeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/toon-dashboard/toon-dashboard.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/toon-dashboard/toon-dashboard.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppToonDashboardToonDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi90b29uLWRhc2hib2FyZC90b29uLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/toon-dashboard/toon-dashboard.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/toon-dashboard/toon-dashboard.component.ts ***!
    \************************************************************/

  /*! exports provided: ToonDashboardComponent */

  /***/
  function srcAppToonDashboardToonDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToonDashboardComponent", function () {
      return ToonDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ToonDashboardComponent =
    /*#__PURE__*/
    function () {
      function ToonDashboardComponent() {
        _classCallCheck(this, ToonDashboardComponent);
      }

      _createClass(ToonDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToonDashboardComponent;
    }();

    ToonDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-toon-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toon-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/toon-dashboard/toon-dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toon-dashboard.component.css */
      "./src/app/toon-dashboard/toon-dashboard.component.css")).default]
    })], ToonDashboardComponent);
    /***/
  },

  /***/
  "./src/app/toon-dashboard/toon-dashboard.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/toon-dashboard/toon-dashboard.module.ts ***!
    \*********************************************************/

  /*! exports provided: ToonDashboardModule */

  /***/
  function srcAppToonDashboardToonDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToonDashboardModule", function () {
      return ToonDashboardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _toon_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./toon-dashboard.component */
    "./src/app/toon-dashboard/toon-dashboard.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ToonDashboardModule = function ToonDashboardModule() {
      _classCallCheck(this, ToonDashboardModule);
    };

    ToonDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_toon_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["ToonDashboardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
    })], ToonDashboardModule);
    /***/
  },

  /***/
  "./src/app/toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component.css":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component.css ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppToonVinificatiesToonActieveVinificatiesToonActieveVinificatiesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi90b29uLXZpbmlmaWNhdGllcy90b29uLWFjdGlldmUtdmluaWZpY2F0aWVzL3Rvb24tYWN0aWV2ZS12aW5pZmljYXRpZXMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: ToonActieveVinificatiesComponent */

  /***/
  function srcAppToonVinificatiesToonActieveVinificatiesToonActieveVinificatiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToonActieveVinificatiesComponent", function () {
      return ToonActieveVinificatiesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ToonActieveVinificatiesComponent =
    /*#__PURE__*/
    function () {
      function ToonActieveVinificatiesComponent() {
        _classCallCheck(this, ToonActieveVinificatiesComponent);
      }

      _createClass(ToonActieveVinificatiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToonActieveVinificatiesComponent;
    }();

    ToonActieveVinificatiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-toon-actieve-vinificaties',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toon-actieve-vinificaties.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toon-actieve-vinificaties.component.css */
      "./src/app/toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component.css")).default]
    })], ToonActieveVinificatiesComponent);
    /***/
  },

  /***/
  "./src/app/toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component.css":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component.css ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppToonVinificatiesToonDetailsVinificatiesToonDetailsVinificatiesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi90b29uLXZpbmlmaWNhdGllcy90b29uLWRldGFpbHMtdmluaWZpY2F0aWVzL3Rvb24tZGV0YWlscy12aW5pZmljYXRpZXMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: ToonDetailsVinificatiesComponent */

  /***/
  function srcAppToonVinificatiesToonDetailsVinificatiesToonDetailsVinificatiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToonDetailsVinificatiesComponent", function () {
      return ToonDetailsVinificatiesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ToonDetailsVinificatiesComponent =
    /*#__PURE__*/
    function () {
      function ToonDetailsVinificatiesComponent() {
        _classCallCheck(this, ToonDetailsVinificatiesComponent);
      }

      _createClass(ToonDetailsVinificatiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToonDetailsVinificatiesComponent;
    }();

    ToonDetailsVinificatiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-toon-details-vinificaties',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toon-details-vinificaties.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toon-details-vinificaties.component.css */
      "./src/app/toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component.css")).default]
    })], ToonDetailsVinificatiesComponent);
    /***/
  },

  /***/
  "./src/app/toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component.css":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component.css ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppToonVinificatiesToonNonActieveVinificatiesToonNonActieveVinificatiesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi90b29uLXZpbmlmaWNhdGllcy90b29uLW5vbi1hY3RpZXZlLXZpbmlmaWNhdGllcy90b29uLW5vbi1hY3RpZXZlLXZpbmlmaWNhdGllcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: ToonNonActieveVinificatiesComponent */

  /***/
  function srcAppToonVinificatiesToonNonActieveVinificatiesToonNonActieveVinificatiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToonNonActieveVinificatiesComponent", function () {
      return ToonNonActieveVinificatiesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ToonNonActieveVinificatiesComponent =
    /*#__PURE__*/
    function () {
      function ToonNonActieveVinificatiesComponent() {
        _classCallCheck(this, ToonNonActieveVinificatiesComponent);
      }

      _createClass(ToonNonActieveVinificatiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToonNonActieveVinificatiesComponent;
    }();

    ToonNonActieveVinificatiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-toon-non-actieve-vinificaties',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toon-non-actieve-vinificaties.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toon-non-actieve-vinificaties.component.css */
      "./src/app/toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component.css")).default]
    })], ToonNonActieveVinificatiesComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Project 4.0\Frontend\CircuitFrontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map