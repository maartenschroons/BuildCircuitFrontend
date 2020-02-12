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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-overzicht/admin-overzicht.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-overzicht/admin-overzicht.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminOverzichtAdminOverzichtComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Alarmeringswaarden aanpassen</h1>\r\n<mat-tab-group mat-align-tabs=\"center\">\r\n    <mat-tab label=\"DruifSoorten\">\r\n        <app-druif-beheren></app-druif-beheren>\r\n    </mat-tab>\r\n    <mat-tab label=\"Events\">\r\n        <app-event-beheren></app-event-beheren>\r\n    </mat-tab>\r\n    <mat-tab label=\"Methodes\">\r\n        <app-methode-beheren></app-methode-beheren>\r\n    </mat-tab>\r\n    <mat-tab label=\"Metingen\">\r\n        <app-meting-beheren></app-meting-beheren>\r\n    </mat-tab>\r\n    <mat-tab label=\"Vaten\">\r\n        <app-vat-beheren></app-vat-beheren>\r\n    </mat-tab>\r\n    <mat-tab label=\"Gebruikers\">\r\n        <app-gebruiker-beheren></app-gebruiker-beheren>\r\n    </mat-tab>\r\n</mat-tab-group>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-overzicht/druif-beheren/druif-beheren.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-overzicht/druif-beheren/druif-beheren.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminOverzichtDruifBeherenDruifBeherenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Alle druiven</h1>\r\n<ul>\r\n    <li *ngFor=\"let druif of (druiven | async)\">\r\n        <div>\r\n            <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayoutAlign=\"center\">\r\n                <div fxFlex=\"15%\">\r\n                    {{druif.druifsoort}}\r\n                </div>\r\n                <div fxFlex=\"5%\">\r\n                    <button mat-raised-button color=\"primary\" (click)=\"open(content, druif)\">Edit</button>\r\n                </div>\r\n                <div fxFlex=\"5%\">\r\n                    <button mat-raised-button color=\"warn\" (click)=\"Delete(druif)\">Delete</button>\r\n                </div>\r\n                <div fxFlex=\"75%\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </li>\r\n</ul>\r\n\r\n\r\n<ng-template #content let-modal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Druifsoort:</h4>\r\n        <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button> -->\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form>\r\n            <div class=\"form-group\">\r\n                <form [formGroup]=\"createDruifSoortForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n                    <p>\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Naam van de druif\" [(ngModel)]=\"druifModel.druifsoort\"\r\n                                formControlName=\"naam\" type=\"text\" name=\"DruifSoort\" />\r\n                        </mat-form-field>\r\n                    </p>\r\n                </form>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Close</button>\r\n    </div>\r\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-overzicht/event-beheren/event-beheren.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-overzicht/event-beheren/event-beheren.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminOverzichtEventBeherenEventBeherenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Alle Events</h1>\r\n<ul>\r\n    <li *ngFor=\"let event of (events | async)\">\r\n        <div>\r\n            <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayoutAlign=\"center\">\r\n                <div fxFlex=\"15%\">\r\n                    {{event.naam}}\r\n                </div>\r\n                <div fxFlex=\"5%\">\r\n                    <button mat-raised-button color=\"primary\" (click)=\"open(content, event)\">Edit</button>\r\n                </div>\r\n                <div fxFlex=\"5%\">\r\n                    <button mat-raised-button color=\"warn\" (click)=\"Delete(event)\">Delete</button>\r\n                </div>\r\n                <div fxFlex=\"75%\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </li>\r\n</ul>\r\n\r\n\r\n<ng-template #content let-modal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Event:</h4>\r\n        <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button> -->\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form>\r\n            <div class=\"form-group\">\r\n                <form [formGroup]=\"createForm\" (ngSubmit)=\"onSubmit()\">\r\n                    <p>\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Naam event\" [(ngModel)]=\"Model.naam\" formControlName=\"naam\"\r\n                                type=\"text\" name=\"Event\" />\r\n                        </mat-form-field>\r\n                    </p>\r\n                </form>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Close</button>\r\n    </div>\r\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-overzicht/gebruiker-beheren/gebruiker-beheren.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-overzicht/gebruiker-beheren/gebruiker-beheren.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminOverzichtGebruikerBeherenGebruikerBeherenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Alle Gebruikers</h1>\r\n<ul>\r\n    <li *ngFor=\"let gebruiker of (gebruikers | async)\">\r\n        <div>\r\n            <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayoutAlign=\"center\">\r\n                <div fxFlex=\"15%\">\r\n                    {{gebruiker.voornaam}} {{gebruiker.naam}}\r\n                </div>\r\n                <div fxFlex=\"5%\">\r\n                    <button mat-raised-button color=\"primary\" (click)=\"open(content, gebruiker)\">Edit</button>\r\n                </div>\r\n               \r\n                <div fxFlex=\"80%\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </li>\r\n</ul>\r\n\r\n\r\n<ng-template #content let-modal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Gebruiker:</h4>\r\n        <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button> -->\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form>\r\n            <div class=\"form-group\">\r\n                <form [formGroup]=\"createForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n                    <p>\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Voornaam\" [(ngModel)]=\"Model.voornaam\"\r\n                                formControlName=\"voornaam\" type=\"text\" name=\"DruifSoort\" />\r\n                        </mat-form-field>\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Achternaam\" [(ngModel)]=\"Model.naam\"\r\n                                formControlName=\"achternaam\" type=\"text\" name=\"DruifSoort\" />\r\n                        </mat-form-field>\r\n                    </p>\r\n\r\n                    <div>\r\n                        <mat-form-field style=\"width:400px\">\r\n                            <input matInput placeholder=\"Email\" [(ngModel)]=\"Model.email\" formControlName=\"email\"\r\n                                type=\"text\" name=\"Email\" />\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div>\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Telefoonnummer\" [(ngModel)]=\"Model.telefoonnummer\"\r\n                                formControlName=\"telefoonnummer\" type=\"text\" name=\"Telefoonnummer\" />\r\n                        </mat-form-field>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"Edit()\">Save</button>\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Close</button>\r\n    </div>\r\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-overzicht/methode-beheren/methode-beheren.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-overzicht/methode-beheren/methode-beheren.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminOverzichtMethodeBeherenMethodeBeherenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Alle methodes</h1>\r\n<ul>\r\n    <li *ngFor=\"let methode of (methodes | async)\">\r\n        <div>\r\n            <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayoutAlign=\"center\">\r\n                <div fxFlex=\"15%\">\r\n                    {{methode.methode}}\r\n                </div>\r\n                <div fxFlex=\"5%\">\r\n                    <button mat-raised-button color=\"primary\" (click)=\"open(content, methode)\">Edit</button>\r\n                </div>\r\n                <div fxFlex=\"5%\">\r\n                    <button mat-raised-button color=\"warn\" (click)=\"Delete(methode)\">Delete</button>\r\n                </div>\r\n                <div fxFlex=\"75%\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </li>\r\n</ul>\r\n\r\n\r\n<ng-template #content let-modal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Persmethode:</h4>\r\n        <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button> -->\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form>\r\n            <div class=\"form-group\">\r\n                <form [formGroup]=\"createForm\" (ngSubmit)=\"onSubmit()\">\r\n                    <p>\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Naam persmethode\" [(ngModel)]=\"Model.methode\"\r\n                                formControlName=\"naam\" type=\"text\" name=\"Methode\" />\r\n                        </mat-form-field>\r\n                    </p>\r\n                </form>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Close</button>\r\n    </div>\r\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-overzicht/meting-beheren/meting-beheren.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-overzicht/meting-beheren/meting-beheren.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminOverzichtMetingBeherenMetingBeherenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Alle Metingsoorten</h1>\r\n<ul>\r\n    <li *ngFor=\"let meting of (metingen | async)\">\r\n        <div>\r\n            <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayoutAlign=\"center\">\r\n                <div fxFlex=\"15%\">\r\n                    {{meting.naam}}\r\n                </div>\r\n                <div fxFlex=\"5%\">\r\n                    <button mat-raised-button color=\"primary\" (click)=\"open(content, meting)\">Edit</button>\r\n                </div>\r\n                <div fxFlex=\"5%\">\r\n                    <button mat-raised-button color=\"warn\" (click)=\"Delete(meting)\">Delete</button>\r\n                </div>\r\n                <div fxFlex=\"75%\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </li>\r\n</ul>\r\n\r\n\r\n<ng-template #content let-modal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Soort meting:</h4>\r\n        <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button> -->\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form>\r\n            <div class=\"form-group\">\r\n                <form [formGroup]=\"createForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n                    <p>\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Naam meting\" [(ngModel)]=\"Model.naam\" formControlName=\"naam\"\r\n                                type=\"text\" name=\"Meting\" />\r\n                        </mat-form-field>\r\n                    </p>\r\n                </form>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Close</button>\r\n    </div>\r\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-overzicht/vat-beheren/vat-beheren.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-overzicht/vat-beheren/vat-beheren.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminOverzichtVatBeherenVatBeherenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Alle vaten</h1>\r\n<ul>\r\n    <li *ngFor=\"let vat of (vaten | async)\">\r\n        <div>\r\n            <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayoutAlign=\"center\">\r\n                <div fxFlex=\"15%\">\r\n                    {{vat.nummer}}\r\n                </div>\r\n                <div fxFlex=\"5%\">\r\n                    <button mat-raised-button color=\"primary\" (click)=\"open(content, vat)\">Edit</button>\r\n                </div>\r\n                <div fxFlex=\"5%\" *ngIf=\"vat.inGebruik==0\">\r\n                    <button mat-raised-button color=\"warn\" (click)=\"Delete(vat)\">Delete</button>\r\n                </div>\r\n                <div fxFlex=\"80%\" *ngIf=\"vat.inGebruik==1\">\r\n\r\n                </div>\r\n                <div fxFlex=\"75%\" *ngIf=\"vat.inGebruik==0\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </li>\r\n</ul>\r\n\r\n\r\n<ng-template #content let-modal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Vat:</h4>\r\n        <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button> -->\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form>\r\n            <div class=\"form-group\">\r\n                <form [formGroup]=\"createForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n                    <p>\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Naam event\" [(ngModel)]=\"Model.nummer\" formControlName=\"naam\"\r\n                                type=\"text\" name=\"Vat\" />\r\n                        </mat-form-field>\r\n                    </p>\r\n                </form>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Close</button>\r\n    </div>\r\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-toevoegen/admin-toevoegen.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-toevoegen/admin-toevoegen.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminToevoegenAdminToevoegenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Alarmeringswaarden aanpassen</h1>\r\n<mat-tab-group mat-align-tabs=\"center\">\r\n    <mat-tab label=\"DruifSoorten\">\r\n        <app-druif-soort-toevoegen></app-druif-soort-toevoegen>\r\n    </mat-tab>\r\n    <mat-tab label=\"Events\">\r\n        <app-event-toevoegen></app-event-toevoegen>\r\n    </mat-tab>\r\n    <mat-tab label=\"Methodes\">\r\n        <app-methode-toevoegen></app-methode-toevoegen>\r\n    </mat-tab>\r\n    <mat-tab label=\"Metingen\">\r\n        <app-meting-toevoegen></app-meting-toevoegen>\r\n    </mat-tab>\r\n    <mat-tab label=\"Vaten\">\r\n        <app-vat-toevoegen></app-vat-toevoegen>\r\n    </mat-tab>\r\n    <mat-tab label=\"Gebruikers\">\r\n        <app-gebruiker-toevoegen></app-gebruiker-toevoegen>\r\n    </mat-tab>\r\n</mat-tab-group>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-toevoegen/druif-soort-toevoegen/druif-soort-toevoegen.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-toevoegen/druif-soort-toevoegen/druif-soort-toevoegen.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminToevoegenDruifSoortToevoegenDruifSoortToevoegenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"createDruifSoortForm\" (ngSubmit)=\"onSubmit()\">\r\n    <h1>Maak een nieuwe druifsoort aan</h1>\r\n\r\n    <p>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Naam van de druif\" [(ngModel)]=\"druifModel.druifsoort\" formControlName=\"naam\"\r\n                type=\"text\" name=\"DruifSoort\" />\r\n        </mat-form-field>\r\n    </p>\r\n\r\n    <div>\r\n\r\n        <button [disabled]=\"!createDruifSoortForm.valid\" mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-toevoegen/event-toevoegen/event-toevoegen.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-toevoegen/event-toevoegen/event-toevoegen.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminToevoegenEventToevoegenEventToevoegenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"Form\" (ngSubmit)=\"onSubmit()\">\r\n    <h1>Maak een nieuwe event aan</h1>\r\n\r\n    <p>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Eventbeschrijving\" [(ngModel)]=\"model.naam\" formControlName=\"naam\" type=\"text\"\r\n                name=\"DruifSoort\" />\r\n        </mat-form-field>\r\n    </p>\r\n\r\n    <div>\r\n\r\n        <button [disabled]=\"!Form.valid\" mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-toevoegen/gebruiker-toevoegen/gebruiker-toevoegen.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-toevoegen/gebruiker-toevoegen/gebruiker-toevoegen.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminToevoegenGebruikerToevoegenGebruikerToevoegenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"Form\" (ngSubmit)=\"onSubmit()\">\r\n    <h1>Maak een nieuwe gebruiker aan</h1>\r\n    <p>\r\n        <mat-form-field>\r\n            <mat-label>Kies een rol</mat-label>\r\n            <mat-select formControlName=\"rol\" [(ngModel)]=\"model.rolId\">\r\n                <mat-option *ngFor=\"let rol of (rollen | async)\" [value]=\"rol.id\">\r\n                    {{rol.rolnaam}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </p>\r\n    <p>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Voornaam\" [(ngModel)]=\"model.voornaam\" formControlName=\"voornaam\" type=\"text\"\r\n                name=\"DruifSoort\" />\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Achternaam\" [(ngModel)]=\"model.naam\" formControlName=\"achternaam\" type=\"text\"\r\n                name=\"DruifSoort\" />\r\n        </mat-form-field>\r\n    </p>\r\n\r\n    <div>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Email\" [(ngModel)]=\"model.email\" formControlName=\"email\" type=\"text\"\r\n                name=\"Email\" />\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Telefoonnummer\" [(ngModel)]=\"model.telefoonnummer\"\r\n                formControlName=\"telefoonnummer\" type=\"text\" name=\"Telefoonnummer\" />\r\n        </mat-form-field>\r\n    </div>\r\n\r\n    <div>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Wachtwoord\" [(ngModel)]=\"model.wachtwoord\" formControlName=\"wachtwoord\"\r\n                type=\"text\" name=\"Wachtwoord\" type=\"password\" />\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Confirm Wachtwoord\" formControlName=\"wachtwoordc\" type=\"text\"\r\n                name=\"Wachtwoordc\" type=\"password\" />\r\n        </mat-form-field>\r\n    </div>\r\n\r\n\r\n\r\n    <div>\r\n\r\n        <button [disabled]=\"!Form.valid\" mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-toevoegen/methode-toevoegen/methode-toevoegen.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-toevoegen/methode-toevoegen/methode-toevoegen.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminToevoegenMethodeToevoegenMethodeToevoegenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"Form\" (ngSubmit)=\"onSubmit()\">\r\n    <h1>Maak een nieuwe persmethode aan</h1>\r\n\r\n    <p>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Methode naam\" [(ngModel)]=\"model.methode\" formControlName=\"naam\" type=\"text\"\r\n                name=\"Methode\" />\r\n        </mat-form-field>\r\n    </p>\r\n\r\n    <div>\r\n\r\n        <button [disabled]=\"!Form.valid\" mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-toevoegen/meting-toevoegen/meting-toevoegen.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-toevoegen/meting-toevoegen/meting-toevoegen.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminToevoegenMetingToevoegenMetingToevoegenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"Form\" (ngSubmit)=\"onSubmit()\">\r\n    <h1>Maak een nieuwe metingSoort aan</h1>\r\n\r\n    <p>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Meting soort\" [(ngModel)]=\"model.naam\" formControlName=\"naam\" type=\"text\"\r\n                name=\"Methode\" />\r\n        </mat-form-field>\r\n    </p>\r\n\r\n    <div>\r\n\r\n        <button [disabled]=\"!Form.valid\" mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-toevoegen/vat-toevoegen/vat-toevoegen.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-toevoegen/vat-toevoegen/vat-toevoegen.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminToevoegenVatToevoegenVatToevoegenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"Form\" (ngSubmit)=\"onSubmit()\">\r\n    <h1>Maak een nieuwe druifsoort aan</h1>\r\n\r\n    <p>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Naam van het vat\" [(ngModel)]=\"model.nummer\" formControlName=\"naam\" type=\"text\"\r\n                name=\"VatNaam\" />\r\n        </mat-form-field>\r\n    </p>\r\n    <p>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Locatie van het vat\" [(ngModel)]=\"model.locatie\" formControlName=\"locatie\"\r\n                type=\"text\" name=\"VatNaam\" />\r\n        </mat-form-field>\r\n    </p>\r\n    <p>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Volume van het vat\" [(ngModel)]=\"model.volume\" formControlName=\"volume\"\r\n                type=\"text\" name=\"VatNaam\" />\r\n        </mat-form-field>\r\n    </p>\r\n    <p>\r\n        <mat-form-field>\r\n            <mat-label>Kies een rol</mat-label>\r\n            <mat-select formControlName=\"materiaal\" [(ngModel)]=\"model.materiaalId\">\r\n                <mat-option *ngFor=\"let materiaal of (materialen | async)\" [value]=\"materiaal.id\">\r\n                    {{materiaal.naam}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </p>\r\n    <section class=\"example-section\">\r\n        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"model.deksel\" formControlName=\"deksel\">Gesloten vat?\r\n        </mat-checkbox>\r\n    </section>\r\n    <section class=\"example-section\">\r\n        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"model.koelmantel\" formControlName=\"koelmantel\">Koelmantel?\r\n        </mat-checkbox>\r\n    </section>\r\n    <section class=\"example-section\">\r\n        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"model.mangat\" formControlName=\"mangat\">Mangat?</mat-checkbox>\r\n    </section>\r\n\r\n    <div>\r\n        <button [disabled]=\"!Form.valid\" mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n    </div>\r\n</form>";
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


    __webpack_exports__["default"] = "<p>\r\n    <mat-form-field>\r\n        <mat-label>Kies een gebruiker</mat-label>\r\n        <mat-select (selectionChange)=\"onSelect($event.value)\" [(ngModel)]=\"AlarmDataGebruikerModel.gebruikerId\">\r\n            <mat-option *ngFor=\"let gebruiker of (gebruikers | async)\" [value]=\"gebruiker.id\">\r\n                {{gebruiker.voornaam}} {{gebruiker.naam}}\r\n            </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n</p>\r\n<div>\r\n    <div>\r\n        Alarm\r\n        <div *ngFor=\"let proces of (processenSub | async)\">\r\n            {{proces.vat?.nummer}} <button (click)=\"delete(proces)\">Delete alarm</button>\r\n        </div>\r\n    </div>\r\n    <div>Geen alarm\r\n        <div *ngFor=\"let proces of (processenNot | async)\">\r\n            {{proces.vat?.nummer}}<button (click)=\"add(proces)\">Add alarm</button>\r\n        </div>\r\n    </div>\r\n</div>";
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


    __webpack_exports__["default"] = "<div>\r\n\r\n        <mat-toolbar color=\"primary\">\r\n\r\n                <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n                        <img margin=\"0\" src=\"../assets/Logo_small.png\" id=\"img\" height=\"40\" layout-align=\"right\" />\r\n                </button>\r\n                <h2 (click)=\"sidenav.toggle()\">CircuitBreakers</h2>\r\n        </mat-toolbar>\r\n</div>\r\n<mat-sidenav-container class=\"sidenav-container\" autosize>\r\n        <mat-sidenav mode=\"top\" class=\"nav\" opened=\"{{opened}}\">\r\n                <mat-nav-list>\r\n                        <a mat-list-item routerLink=\"/\" routerLinkActive=\"active\"\r\n                                [routerLinkActiveOptions]=\"{ exact: true }\">\r\n                                <img margin=\"0\" src=\"../assets/Logo.png\" width=\"270\" layout-align=\"right\" />\r\n                        </a>\r\n                        <div>\r\n                                <a mat-list-item routerLink=\"/createProcess\" routerLinkActive=\"active\"\r\n                                        [routerLinkActiveOptions]=\"{ exact: true }\">Start een\r\n                                        process</a>\r\n                                <a mat-list-item routerLink=\"/afsluiten\" routerLinkActive=\"active\"\r\n                                        [routerLinkActiveOptions]=\"{ exact: true }\">Sluit een proces\r\n                                        af</a>\r\n                                <a mat-list-item routerLink=\"/dashboard\" routerLinkActive=\"active\"\r\n                                        [routerLinkActiveOptions]=\"{ exact: true }\">Dashboard 1</a>\r\n                                <a mat-list-item [matMenuTriggerFor]=\"vini\">\r\n                                        Vinfi\r\n                                        <mat-icon>expand_more</mat-icon>\r\n                                </a>\r\n                                <mat-menu #vini=\"matMenu\">\r\n                                        <button mat-menu-item routerLink=\"/actief\" routerLinkActive=\"active\"\r\n                                                [routerLinkActiveOptions]=\"{ exact: true }\">Actieve\r\n                                                vinificaties</button>\r\n                                        <button mat-menu-item routerLink=\"/nonactief\" routerLinkActive=\"active\"\r\n                                                [routerLinkActiveOptions]=\"{ exact: true }\">Voltooide\r\n                                                vinificaties</button>\r\n                                </mat-menu>\r\n\r\n                                <a mat-list-item [matMenuTriggerFor]=\"menu\">\r\n                                        Data toevoegen aan een proces\r\n                                        <mat-icon>expand_more</mat-icon>\r\n                                </a>\r\n                                <mat-menu #menu=\"matMenu\">\r\n                                        <button mat-menu-item routerLink=\"/addMeting\" routerLinkActive=\"active\"\r\n                                                [routerLinkActiveOptions]=\"{ exact: true }\">Voeg een meting\r\n                                                toe aan een proces</button>\r\n                                        <button mat-menu-item routerLink=\"/addActie\" routerLinkActive=\"active\"\r\n                                                [routerLinkActiveOptions]=\"{ exact: true }\">Voeg een event\r\n                                                toe aan een proces</button>\r\n                                </mat-menu>\r\n\r\n                                <a mat-list-item [matMenuTriggerFor]=\"alarm\">\r\n                                        Alarmering aanpassen\r\n                                        <mat-icon>expand_more</mat-icon>\r\n                                </a>\r\n                                <mat-menu #alarm=\"matMenu\">\r\n                                        <button mat-menu-item routerLink=\"/alarmdata\" routerLinkActive=\"active\"\r\n                                                [routerLinkActiveOptions]=\"{ exact: true }\">Verander de\r\n                                                alarmeringswaarden</button>\r\n                                        <button mat-menu-item routerLink=\"/alarmpersonen\" routerLinkActive=\"active\"\r\n                                                [routerLinkActiveOptions]=\"{ exact: true }\">Manage de\r\n                                                alarmeringspersonen</button>\r\n                                </mat-menu>\r\n\r\n                                <!-- <div *ngIf=\"admin\">\r\n                                        <a mat-list-item [matMenuTriggerFor]=\"admin\">\r\n                                                Admin Data\r\n                                                <mat-icon>expand_more</mat-icon>\r\n                                        </a>\r\n                                        <mat-menu #admin=\"matMenu\">\r\n                                                <button mat-menu-item routerLink=\"/adminToevoegen\"\r\n                                                        routerLinkActive=\"active\"\r\n                                                        [routerLinkActiveOptions]=\"{ exact: true }\">Data\r\n                                                        toevoegen</button>\r\n                                                <button mat-menu-item routerLink=\"/adminEdit\" routerLinkActive=\"active\"\r\n                                                        [routerLinkActiveOptions]=\"{ exact: true }\">Data\r\n                                                        beheren</button>\r\n                                        </mat-menu>\r\n                                </div> -->\r\n                                <a mat-list-item routerLinkActive=\"active\" (click)=\"logOut()\"\r\n                                        [routerLinkActiveOptions]=\"{ exact: true }\">Logout</a>\r\n                        </div>\r\n                        <div *ngIf=\"!login\">\r\n                                <a mat-list-item routerLink=\"/login\" routerLinkActive=\"active\"\r\n                                        [routerLinkActiveOptions]=\"{ exact: true }\">Login</a>\r\n                        </div>\r\n\r\n                        <a mat-list-item [matMenuTriggerFor]=\"admin\">\r\n                                Admin Data\r\n                                <mat-icon>expand_more</mat-icon>\r\n                        </a>\r\n                        <mat-menu #admin=\"matMenu\">\r\n                                <button mat-menu-item routerLink=\"/adminToevoegen\" routerLinkActive=\"active\"\r\n                                        [routerLinkActiveOptions]=\"{ exact: true }\">Data\r\n                                        toevoegen</button>\r\n                                <button mat-menu-item routerLink=\"/adminEdit\" routerLinkActive=\"active\"\r\n                                        [routerLinkActiveOptions]=\"{ exact: true }\">Data\r\n                                        beheren</button>\r\n                        </mat-menu>\r\n\r\n\r\n                </mat-nav-list>\r\n        </mat-sidenav>\r\n        <mat-sidenav-content class=\"content\">\r\n                <router-outlet></router-outlet>\r\n        </mat-sidenav-content>\r\n</mat-sidenav-container>";
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"login-card\">\r\n    <mat-card-title class=\"login-card-title\">Login to continue</mat-card-title>\r\n\r\n    <form (ngSubmit)=\"onSubmit()\">\r\n\r\n        <div class=\"login-container\">\r\n            <p>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" type=\"email\" name=\"email\" [(ngModel)]=\"login.email\" />\r\n                </mat-form-field>\r\n            </p>\r\n\r\n            <p>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Password\" type=\"password\" name=\"password\"\r\n                        [(ngModel)]=\"login.wachtwoord\" />\r\n                </mat-form-field>\r\n            </p>\r\n\r\n\r\n            <mat-card-actions>\r\n                <div>\r\n                    <button mat-raised-button color=\"primary\" class=\"login-card-button\" type=\"submit\">Login</button>\r\n                </div>\r\n\r\n            </mat-card-actions>\r\n\r\n        </div>\r\n    </form>\r\n</mat-card>";
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


    __webpack_exports__["default"] = "<form [formGroup]=\"createProcessForm\" (ngSubmit)=\"onSubmit()\">\r\n    <h1>Start een nieuw proces</h1>\r\n    <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayoutAlign=\"center\">\r\n        <div fxFlex=\"20%\">\r\n            <p>\r\n                <mat-form-field>\r\n                    <mat-label>Kies een vat</mat-label>\r\n                    <mat-select formControlName=\"vat\" [(ngModel)]=\"procesModel.vatId\">\r\n                        <mat-option *ngFor=\"let vat of (vaten | async)\" [value]=\"vat.id\">\r\n                            {{vat.nummer}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </p>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"options\">Options :</label>\r\n                <label *ngFor=\"let druif of (druiven| async)\" class=\"form-control\">\r\n                    <input type=\"checkbox\" name=\"options\" value=\"option\" (change)=\"onChange(druif)\" />\r\n                    {{druif.druifsoort}}\r\n                </label>\r\n            </div>\r\n\r\n            <p>\r\n                <mat-form-field>\r\n                    <mat-label>Kies een persmethode</mat-label>\r\n                    <mat-select formControlName=\"pers\" [(ngModel)]=\"procesModel.persmethodeId\">\r\n                        <mat-option *ngFor=\"let pers of (persen | async)\" [value]=\"pers.id\">\r\n                            {{pers.methode}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </p>\r\n        </div>\r\n        <div fxFlex=\"20%\">\r\n            <p>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Pers hoeveelheid in L\" [(ngModel)]=\"procesModel.persHoeveelheid\"\r\n                        formControlName=\"persHoeveelheid\" type=\"text\" name=\"persHoeveelheid\" />\r\n                </mat-form-field>\r\n            </p>\r\n            <p>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Oogst in kg\" formControlName=\"oogst\" type=\"text\" name=\"oogst\"\r\n                        [(ngModel)]=\"procesModel.oogst\" />\r\n                </mat-form-field>\r\n            </p>\r\n            <p>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Bar\" formControlName=\"bar\" type=\"text\" name=\"bar\"\r\n                        [(ngModel)]=\"procesModel.persDruk\" />\r\n                </mat-form-field>\r\n            </p>\r\n            <p>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Jaargang\" formControlName=\"jaargang\" type=\"text\" name=\"jaargang\"\r\n                        [(ngModel)]=\"procesModel.jaargang\" />\r\n                </mat-form-field>\r\n            </p>\r\n            <mat-form-field>\r\n                <mat-label>Kies het wijntype</mat-label>\r\n                <mat-select formControlName=\"wijntype\" [(ngModel)]=\"procesModel.wijnTypeId\">\r\n                    <mat-option *ngFor=\"let wijntype of (wijntypes | async)\" [value]=\"wijntype.id\">\r\n                        {{wijntype.naam}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex=\"60%\">\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <p class=\"ml-4\">\r\n            <button [disabled]=\"!createProcessForm.valid\" mat-raised-button color=\"primary\"\r\n                type=\"submit\">Submit</button>\r\n        </p>\r\n\r\n    </div>\r\n\r\n</form>";
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


    __webpack_exports__["default"] = "<iframe [src]='sanitizer.bypassSecurityTrustResourceUrl(iframe)' width=\"100%\" height=\"98%\"></iframe>\r\n";
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


    __webpack_exports__["default"] = "<mat-grid-list cols=\"3\">\r\n    <div *ngFor=\"let p of (processen | async)\">\r\n        <mat-grid-tile>          \r\n            <mat-card class=\"example-card\">\r\n                <mat-card-header>\r\n                <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\r\n                <mat-card-title>{{p.vat?.nummer}}</mat-card-title>\r\n                <mat-card-subtitle>Vinificatie {{p.id}}</mat-card-subtitle>\r\n                </mat-card-header>\r\n                <!-- <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\r\n                <iframe mat-card-image [src]=\"sanitizer.bypassSecurityTrustResourceUrl(p.iframe)\" frameborder=\"0\" width=\"100%\" height=\"98%\"></iframe>\r\n                <ul>                    \r\n                    <li>Oogst: {{p.oogst}}Kg</li>\r\n                    <li>Pershoeveelheid: {{p.persHoeveelheid}}L</li>\r\n                    <li>Persmethode: {{p.persmethode?.methode}}</li>\r\n                    <!-- <li *ngFor=\"let d of (p.druif | async)\">{{d.druifsoort}}</li> -->\r\n                </ul>\r\n                <mat-card-content>\r\n                <p>\r\n                </p>\r\n                </mat-card-content>\r\n                <mat-card-actions>\r\n                <!-- <button mat-button >DASHBOARD</button> -->\r\n                <a [routerLink]=\"['/dashboard/' + (p.vatId)]\" >Dashboard</a>\r\n                <!-- <button mat-button>DETAILS</button> -->\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </mat-grid-tile>\r\n    </div>\r\n</mat-grid-list>";
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


    __webpack_exports__["default"] = "<div class=\"container\">\r\n\r\n    <h1 class=\"header\">Voltooide vinificatieprocessen</h1>\r\n\r\n    <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n        <!-- vinificatienummer Column -->\r\n        <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Vinificatienummer </th>\r\n        <td mat-cell *matCellDef=\"let proces\"> <a [routerLink]=\"['/detail/' + (proces.id)]\" >Vinificatie {{proces.id}}</a></td>\r\n        </ng-container>\r\n    \r\n        <!-- vat Column -->\r\n        <ng-container matColumnDef=\"vatId\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Vat </th>\r\n        <td mat-cell *matCellDef=\"let proces\"> {{proces.vat?.nummer}} </td>\r\n        </ng-container>\r\n    \r\n        <!-- oogst Column -->\r\n        <ng-container matColumnDef=\"oogst\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Oogst </th>\r\n        <td mat-cell *matCellDef=\"let proces\"> {{proces.oogst}} Kg </td>\r\n        </ng-container>\r\n    \r\n        <!-- pershoeveelheid Column -->\r\n        <ng-container matColumnDef=\"persHoeveelheid\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Pershoeveelheid </th>\r\n        <td mat-cell *matCellDef=\"let proces\"> {{proces.persHoeveelheid}} L </td>\r\n        </ng-container>\r\n\r\n\r\n    \r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>";
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
  "./src/app/admin/admin-overzicht/admin-overzicht.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/admin/admin-overzicht/admin-overzicht.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminOverzichtAdminOverzichtComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hZG1pbi1vdmVyemljaHQvYWRtaW4tb3ZlcnppY2h0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-overzicht/admin-overzicht.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/admin/admin-overzicht/admin-overzicht.component.ts ***!
    \********************************************************************/

  /*! exports provided: AdminOverzichtComponent */

  /***/
  function srcAppAdminAdminOverzichtAdminOverzichtComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminOverzichtComponent", function () {
      return AdminOverzichtComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminOverzichtComponent =
    /*#__PURE__*/
    function () {
      function AdminOverzichtComponent() {
        _classCallCheck(this, AdminOverzichtComponent);
      }

      _createClass(AdminOverzichtComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminOverzichtComponent;
    }();

    AdminOverzichtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-overzicht',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-overzicht.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-overzicht/admin-overzicht.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-overzicht.component.css */
      "./src/app/admin/admin-overzicht/admin-overzicht.component.css")).default]
    })], AdminOverzichtComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-overzicht/druif-beheren/druif-beheren.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/admin/admin-overzicht/druif-beheren/druif-beheren.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminOverzichtDruifBeherenDruifBeherenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button{\r\n    padding: 3;\r\n    margin: 1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FkbWluLW92ZXJ6aWNodC9kcnVpZi1iZWhlcmVuL2RydWlmLWJlaGVyZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2IiLCJmaWxlIjoiLi4vYWRtaW4tb3ZlcnppY2h0L2RydWlmLWJlaGVyZW4vZHJ1aWYtYmVoZXJlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xyXG4gICAgcGFkZGluZzogMztcclxuICAgIG1hcmdpbjogMTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-overzicht/druif-beheren/druif-beheren.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/admin/admin-overzicht/druif-beheren/druif-beheren.component.ts ***!
    \********************************************************************************/

  /*! exports provided: DruifBeherenComponent */

  /***/
  function srcAppAdminAdminOverzichtDruifBeherenDruifBeherenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DruifBeherenComponent", function () {
      return DruifBeherenComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var DruifBeherenComponent =
    /*#__PURE__*/
    function () {
      function DruifBeherenComponent(fb, _service, modalService) {
        _classCallCheck(this, DruifBeherenComponent);

        this.fb = fb;
        this._service = _service;
        this.modalService = modalService;
        this.createDruifSoortForm = this.fb.group({
          naam: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.InstantiateLists();
      }

      _createClass(DruifBeherenComponent, [{
        key: "InstantiateLists",
        value: function InstantiateLists() {
          var _this = this;

          this._service.getAllDruifsoorten().subscribe(function (result) {
            _this.druiven = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result.records);
            console.log(result);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "Delete",
        value: function Delete(druif) {
          var _this2 = this;

          this._service.deleteDruifSoort(druif).subscribe(function (result) {
            _this2.InstantiateLists();
          });
        }
      }, {
        key: "open",
        value: function open(content, druif) {
          var _this3 = this;

          this.druifModel = druif;
          console.log(this.druifModel);
          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this3.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this3.closeResult = "Dismissed ".concat(_this3.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return DruifBeherenComponent;
    }();

    DruifBeherenComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_3__["ServicesService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
      }];
    };

    DruifBeherenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-druif-beheren',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./druif-beheren.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-overzicht/druif-beheren/druif-beheren.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./druif-beheren.component.css */
      "./src/app/admin/admin-overzicht/druif-beheren/druif-beheren.component.css")).default]
    })], DruifBeherenComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-overzicht/event-beheren/event-beheren.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/admin/admin-overzicht/event-beheren/event-beheren.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminOverzichtEventBeherenEventBeherenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hZG1pbi1vdmVyemljaHQvZXZlbnQtYmVoZXJlbi9ldmVudC1iZWhlcmVuLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-overzicht/event-beheren/event-beheren.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/admin/admin-overzicht/event-beheren/event-beheren.component.ts ***!
    \********************************************************************************/

  /*! exports provided: EventBeherenComponent */

  /***/
  function srcAppAdminAdminOverzichtEventBeherenEventBeherenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventBeherenComponent", function () {
      return EventBeherenComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var EventBeherenComponent =
    /*#__PURE__*/
    function () {
      function EventBeherenComponent(fb, _service, modalService) {
        _classCallCheck(this, EventBeherenComponent);

        this.fb = fb;
        this._service = _service;
        this.modalService = modalService;
        this.createForm = this.fb.group({
          naam: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.InstantiateLists();
      }

      _createClass(EventBeherenComponent, [{
        key: "InstantiateLists",
        value: function InstantiateLists() {
          var _this4 = this;

          this._service.getAllEventsoorten().subscribe(function (result) {
            _this4.events = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result.records);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "Delete",
        value: function Delete(event) {
          var _this5 = this;

          this._service.deleteEventSoort(event).subscribe(function (result) {
            _this5.InstantiateLists();
          });
        }
      }, {
        key: "open",
        value: function open(content, event) {
          var _this6 = this;

          this.Model = event;
          console.log(this.Model);
          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this6.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this6.closeResult = "Dismissed ".concat(_this6.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return EventBeherenComponent;
    }();

    EventBeherenComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_3__["ServicesService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }];
    };

    EventBeherenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event-beheren',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event-beheren.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-overzicht/event-beheren/event-beheren.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./event-beheren.component.css */
      "./src/app/admin/admin-overzicht/event-beheren/event-beheren.component.css")).default]
    })], EventBeherenComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-overzicht/gebruiker-beheren/gebruiker-beheren.component.css":
  /*!*****************************************************************************************!*\
    !*** ./src/app/admin/admin-overzicht/gebruiker-beheren/gebruiker-beheren.component.css ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminOverzichtGebruikerBeherenGebruikerBeherenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hZG1pbi1vdmVyemljaHQvZ2VicnVpa2VyLWJlaGVyZW4vZ2VicnVpa2VyLWJlaGVyZW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-overzicht/gebruiker-beheren/gebruiker-beheren.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/admin/admin-overzicht/gebruiker-beheren/gebruiker-beheren.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: GebruikerBeherenComponent */

  /***/
  function srcAppAdminAdminOverzichtGebruikerBeherenGebruikerBeherenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GebruikerBeherenComponent", function () {
      return GebruikerBeherenComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var GebruikerBeherenComponent =
    /*#__PURE__*/
    function () {
      function GebruikerBeherenComponent(fb, _service, modalService) {
        _classCallCheck(this, GebruikerBeherenComponent);

        this.fb = fb;
        this._service = _service;
        this.modalService = modalService;
        this.createForm = this.fb.group({
          voornaam: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          achternaam: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          telefoonnummer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.InstantiateLists();
      }

      _createClass(GebruikerBeherenComponent, [{
        key: "InstantiateLists",
        value: function InstantiateLists() {
          var _this7 = this;

          this._service.getAllGebruikers().subscribe(function (result) {
            _this7.gebruikers = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result.records);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "open",
        value: function open(content, gebruiker) {
          var _this8 = this;

          this.Model = gebruiker;
          console.log(this.Model);
          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this8.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this8.closeResult = "Dismissed ".concat(_this8.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return GebruikerBeherenComponent;
    }();

    GebruikerBeherenComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_3__["ServicesService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }];
    };

    GebruikerBeherenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gebruiker-beheren',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gebruiker-beheren.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-overzicht/gebruiker-beheren/gebruiker-beheren.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./gebruiker-beheren.component.css */
      "./src/app/admin/admin-overzicht/gebruiker-beheren/gebruiker-beheren.component.css")).default]
    })], GebruikerBeherenComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-overzicht/methode-beheren/methode-beheren.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/admin/admin-overzicht/methode-beheren/methode-beheren.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminOverzichtMethodeBeherenMethodeBeherenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hZG1pbi1vdmVyemljaHQvbWV0aG9kZS1iZWhlcmVuL21ldGhvZGUtYmVoZXJlbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-overzicht/methode-beheren/methode-beheren.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/admin/admin-overzicht/methode-beheren/methode-beheren.component.ts ***!
    \************************************************************************************/

  /*! exports provided: MethodeBeherenComponent */

  /***/
  function srcAppAdminAdminOverzichtMethodeBeherenMethodeBeherenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MethodeBeherenComponent", function () {
      return MethodeBeherenComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MethodeBeherenComponent =
    /*#__PURE__*/
    function () {
      function MethodeBeherenComponent(fb, _service, modalService) {
        _classCallCheck(this, MethodeBeherenComponent);

        this.fb = fb;
        this._service = _service;
        this.modalService = modalService;
        this.createForm = this.fb.group({
          naam: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.InstantiateLists();
      }

      _createClass(MethodeBeherenComponent, [{
        key: "InstantiateLists",
        value: function InstantiateLists() {
          var _this9 = this;

          this._service.getAllPersMethodes().subscribe(function (result) {
            _this9.methodes = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result.records);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "Delete",
        value: function Delete(methode) {
          var _this10 = this;

          this._service.deletePersMethode(methode).subscribe(function (result) {
            _this10.InstantiateLists();
          });
        }
      }, {
        key: "open",
        value: function open(content, methode) {
          var _this11 = this;

          this.Model = methode;
          console.log(this.Model);
          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this11.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this11.closeResult = "Dismissed ".concat(_this11.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return MethodeBeherenComponent;
    }();

    MethodeBeherenComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_3__["ServicesService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }];
    };

    MethodeBeherenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-methode-beheren',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./methode-beheren.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-overzicht/methode-beheren/methode-beheren.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./methode-beheren.component.css */
      "./src/app/admin/admin-overzicht/methode-beheren/methode-beheren.component.css")).default]
    })], MethodeBeherenComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-overzicht/meting-beheren/meting-beheren.component.css":
  /*!***********************************************************************************!*\
    !*** ./src/app/admin/admin-overzicht/meting-beheren/meting-beheren.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminOverzichtMetingBeherenMetingBeherenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hZG1pbi1vdmVyemljaHQvbWV0aW5nLWJlaGVyZW4vbWV0aW5nLWJlaGVyZW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-overzicht/meting-beheren/meting-beheren.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/admin/admin-overzicht/meting-beheren/meting-beheren.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: MetingBeherenComponent */

  /***/
  function srcAppAdminAdminOverzichtMetingBeherenMetingBeherenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetingBeherenComponent", function () {
      return MetingBeherenComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MetingBeherenComponent =
    /*#__PURE__*/
    function () {
      function MetingBeherenComponent(fb, _service, modalService) {
        _classCallCheck(this, MetingBeherenComponent);

        this.fb = fb;
        this._service = _service;
        this.modalService = modalService;
        this.createForm = this.fb.group({
          naam: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.InstantiateLists();
      }

      _createClass(MetingBeherenComponent, [{
        key: "InstantiateLists",
        value: function InstantiateLists() {
          var _this12 = this;

          this._service.getAllMetingsoorten().subscribe(function (result) {
            _this12.metingen = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result.records);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "Delete",
        value: function Delete(meting) {
          var _this13 = this;

          this._service.deleteSoortMeting(meting).subscribe(function (result) {
            _this13.InstantiateLists();
          });
        }
      }, {
        key: "open",
        value: function open(content, meting) {
          var _this14 = this;

          this.Model = meting;
          console.log(this.Model);
          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this14.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this14.closeResult = "Dismissed ".concat(_this14.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return MetingBeherenComponent;
    }();

    MetingBeherenComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_3__["ServicesService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }];
    };

    MetingBeherenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-meting-beheren',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./meting-beheren.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-overzicht/meting-beheren/meting-beheren.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./meting-beheren.component.css */
      "./src/app/admin/admin-overzicht/meting-beheren/meting-beheren.component.css")).default]
    })], MetingBeherenComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-overzicht/vat-beheren/vat-beheren.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/admin/admin-overzicht/vat-beheren/vat-beheren.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminOverzichtVatBeherenVatBeherenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hZG1pbi1vdmVyemljaHQvdmF0LWJlaGVyZW4vdmF0LWJlaGVyZW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-overzicht/vat-beheren/vat-beheren.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/admin/admin-overzicht/vat-beheren/vat-beheren.component.ts ***!
    \****************************************************************************/

  /*! exports provided: VatBeherenComponent */

  /***/
  function srcAppAdminAdminOverzichtVatBeherenVatBeherenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VatBeherenComponent", function () {
      return VatBeherenComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var VatBeherenComponent =
    /*#__PURE__*/
    function () {
      function VatBeherenComponent(fb, _service, modalService) {
        _classCallCheck(this, VatBeherenComponent);

        this.fb = fb;
        this._service = _service;
        this.modalService = modalService;
        this.createForm = this.fb.group({
          naam: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          locatie: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          volume: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          deksel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          koelmantel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          mangat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          materiaal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.InstantiateLists();
      }

      _createClass(VatBeherenComponent, [{
        key: "InstantiateLists",
        value: function InstantiateLists() {
          var _this15 = this;

          this._service.getAllVaten().subscribe(function (result) {
            _this15.vaten = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result.records);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "Delete",
        value: function Delete(vat) {
          var _this16 = this;

          this._service.deleteVat(vat).subscribe(function (result) {
            _this16.InstantiateLists();
          });
        }
      }, {
        key: "open",
        value: function open(content, vat) {
          var _this17 = this;

          this.Model = vat;
          console.log(this.Model);
          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this17.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this17.closeResult = "Dismissed ".concat(_this17.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return VatBeherenComponent;
    }();

    VatBeherenComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_3__["ServicesService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }];
    };

    VatBeherenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vat-beheren',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vat-beheren.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-overzicht/vat-beheren/vat-beheren.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vat-beheren.component.css */
      "./src/app/admin/admin-overzicht/vat-beheren/vat-beheren.component.css")).default]
    })], VatBeherenComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-toevoegen/admin-toevoegen.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/admin/admin-toevoegen/admin-toevoegen.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminToevoegenAdminToevoegenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi10b2V2b2VnZW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-toevoegen/admin-toevoegen.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/admin/admin-toevoegen/admin-toevoegen.component.ts ***!
    \********************************************************************/

  /*! exports provided: AdminToevoegenComponent */

  /***/
  function srcAppAdminAdminToevoegenAdminToevoegenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminToevoegenComponent", function () {
      return AdminToevoegenComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminToevoegenComponent =
    /*#__PURE__*/
    function () {
      function AdminToevoegenComponent() {
        _classCallCheck(this, AdminToevoegenComponent);
      }

      _createClass(AdminToevoegenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminToevoegenComponent;
    }();

    AdminToevoegenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-toevoegen',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-toevoegen.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-toevoegen/admin-toevoegen.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-toevoegen.component.css */
      "./src/app/admin/admin-toevoegen/admin-toevoegen.component.css")).default]
    })], AdminToevoegenComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-toevoegen/druif-soort-toevoegen/druif-soort-toevoegen.component.css":
  /*!*************************************************************************************************!*\
    !*** ./src/app/admin/admin-toevoegen/druif-soort-toevoegen/druif-soort-toevoegen.component.css ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminToevoegenDruifSoortToevoegenDruifSoortToevoegenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcnVpZi1zb29ydC10b2V2b2VnZW4vZHJ1aWYtc29vcnQtdG9ldm9lZ2VuLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-toevoegen/druif-soort-toevoegen/druif-soort-toevoegen.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/admin/admin-toevoegen/druif-soort-toevoegen/druif-soort-toevoegen.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: DruifSoortToevoegenComponent */

  /***/
  function srcAppAdminAdminToevoegenDruifSoortToevoegenDruifSoortToevoegenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DruifSoortToevoegenComponent", function () {
      return DruifSoortToevoegenComponent;
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


    var src_app_models_druif_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/druif.model */
    "./src/app/models/druif.model.ts");
    /* harmony import */


    var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/services.service */
    "./src/app/services/services.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var DruifSoortToevoegenComponent =
    /*#__PURE__*/
    function () {
      function DruifSoortToevoegenComponent(fb, _service, _snackBar) {
        _classCallCheck(this, DruifSoortToevoegenComponent);

        this.fb = fb;
        this._service = _service;
        this._snackBar = _snackBar;
        this.druifModel = new src_app_models_druif_model__WEBPACK_IMPORTED_MODULE_3__["Druif"](0, "");
        this.createDruifSoortForm = this.fb.group({
          naam: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(DruifSoortToevoegenComponent, [{
        key: "openSnackBar",
        value: function openSnackBar() {
          this._snackBar.open("De druifsoort is aangemaakt!", "Close", {
            duration: 5000
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.openSnackBar();

          this._service.addDruifSoort(this.druifModel).subscribe();
        }
      }]);

      return DruifSoortToevoegenComponent;
    }();

    DruifSoortToevoegenComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }];
    };

    DruifSoortToevoegenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-druif-soort-toevoegen',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./druif-soort-toevoegen.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-toevoegen/druif-soort-toevoegen/druif-soort-toevoegen.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./druif-soort-toevoegen.component.css */
      "./src/app/admin/admin-toevoegen/druif-soort-toevoegen/druif-soort-toevoegen.component.css")).default]
    })], DruifSoortToevoegenComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-toevoegen/event-toevoegen/event-toevoegen.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/admin/admin-toevoegen/event-toevoegen/event-toevoegen.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminToevoegenEventToevoegenEventToevoegenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudC10b2V2b2VnZW4vZXZlbnQtdG9ldm9lZ2VuLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-toevoegen/event-toevoegen/event-toevoegen.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/admin/admin-toevoegen/event-toevoegen/event-toevoegen.component.ts ***!
    \************************************************************************************/

  /*! exports provided: EventToevoegenComponent */

  /***/
  function srcAppAdminAdminToevoegenEventToevoegenEventToevoegenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventToevoegenComponent", function () {
      return EventToevoegenComponent;
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


    var src_app_models_soort_event_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/soort-event.model */
    "./src/app/models/soort-event.model.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var EventToevoegenComponent =
    /*#__PURE__*/
    function () {
      function EventToevoegenComponent(fb, _service, _snackBar) {
        _classCallCheck(this, EventToevoegenComponent);

        this.fb = fb;
        this._service = _service;
        this._snackBar = _snackBar;
        this.model = new src_app_models_soort_event_model__WEBPACK_IMPORTED_MODULE_4__["SoortEvent"](0, "");
        this.Form = this.fb.group({
          naam: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(EventToevoegenComponent, [{
        key: "openSnackBar",
        value: function openSnackBar() {
          this._snackBar.open("Het soort event is aangemaakt!", "Close", {
            duration: 5000
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.openSnackBar();

          this._service.addEventSoort(this.model).subscribe();
        }
      }]);

      return EventToevoegenComponent;
    }();

    EventToevoegenComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_3__["ServicesService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }];
    };

    EventToevoegenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event-toevoegen',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event-toevoegen.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-toevoegen/event-toevoegen/event-toevoegen.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./event-toevoegen.component.css */
      "./src/app/admin/admin-toevoegen/event-toevoegen/event-toevoegen.component.css")).default]
    })], EventToevoegenComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-toevoegen/gebruiker-toevoegen/gebruiker-toevoegen.component.css":
  /*!*********************************************************************************************!*\
    !*** ./src/app/admin/admin-toevoegen/gebruiker-toevoegen/gebruiker-toevoegen.component.css ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminToevoegenGebruikerToevoegenGebruikerToevoegenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZWJydWlrZXItdG9ldm9lZ2VuL2dlYnJ1aWtlci10b2V2b2VnZW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-toevoegen/gebruiker-toevoegen/gebruiker-toevoegen.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/admin/admin-toevoegen/gebruiker-toevoegen/gebruiker-toevoegen.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: GebruikerToevoegenComponent */

  /***/
  function srcAppAdminAdminToevoegenGebruikerToevoegenGebruikerToevoegenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GebruikerToevoegenComponent", function () {
      return GebruikerToevoegenComponent;
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


    var src_app_models_gebruiker_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/gebruiker.model */
    "./src/app/models/gebruiker.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/services.service */
    "./src/app/services/services.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var GebruikerToevoegenComponent =
    /*#__PURE__*/
    function () {
      function GebruikerToevoegenComponent(fb, _service, _snackBar) {
        _classCallCheck(this, GebruikerToevoegenComponent);

        this.fb = fb;
        this._service = _service;
        this._snackBar = _snackBar;
        this.model = new src_app_models_gebruiker_model__WEBPACK_IMPORTED_MODULE_2__["Gebruiker"](0, 0, "", "", "j", "", "", "", "");
        this.rollen = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]();
        this.Form = this.fb.group({
          voornaam: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          achternaam: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          telefoonnummer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          wachtwoord: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          wachtwoordc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          rol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, {
          validator: this.matchingPasswords('wachtwoord', 'wachtwoordc')
        });
        this.InstantiateLists();
      }

      _createClass(GebruikerToevoegenComponent, [{
        key: "matchingPasswords",
        value: function matchingPasswords(passwordKey, passwordConfirmationKey) {
          return function (group) {
            var passwordInput = group.controls[passwordKey];
            var passwordConfirmationInput = group.controls[passwordConfirmationKey];

            if (passwordInput.value !== passwordConfirmationInput.value) {
              return passwordConfirmationInput.setErrors({
                notEquivalent: true
              });
            } else {
              passwordConfirmationInput.setErrors(passwordConfirmationInput.validator(passwordConfirmationInput));
            }
          };
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar() {
          this._snackBar.open("De gebruiker is aangemaakt!", "Close", {
            duration: 5000
          });
        }
      }, {
        key: "InstantiateLists",
        value: function InstantiateLists() {
          var _this18 = this;

          this._service.getAllRollen().subscribe(function (result) {
            _this18.rollen = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result.records);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.openSnackBar();

          this._service.addGebruiker(this.model).subscribe();
        }
      }]);

      return GebruikerToevoegenComponent;
    }();

    GebruikerToevoegenComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
      }];
    };

    GebruikerToevoegenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gebruiker-toevoegen',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gebruiker-toevoegen.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-toevoegen/gebruiker-toevoegen/gebruiker-toevoegen.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./gebruiker-toevoegen.component.css */
      "./src/app/admin/admin-toevoegen/gebruiker-toevoegen/gebruiker-toevoegen.component.css")).default]
    })], GebruikerToevoegenComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-toevoegen/methode-toevoegen/methode-toevoegen.component.css":
  /*!*****************************************************************************************!*\
    !*** ./src/app/admin/admin-toevoegen/methode-toevoegen/methode-toevoegen.component.css ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminToevoegenMethodeToevoegenMethodeToevoegenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXRob2RlLXRvZXZvZWdlbi9tZXRob2RlLXRvZXZvZWdlbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-toevoegen/methode-toevoegen/methode-toevoegen.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/admin/admin-toevoegen/methode-toevoegen/methode-toevoegen.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: MethodeToevoegenComponent */

  /***/
  function srcAppAdminAdminToevoegenMethodeToevoegenMethodeToevoegenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MethodeToevoegenComponent", function () {
      return MethodeToevoegenComponent;
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


    var src_app_models_persmethode_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/persmethode.model */
    "./src/app/models/persmethode.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/services.service */
    "./src/app/services/services.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var MethodeToevoegenComponent =
    /*#__PURE__*/
    function () {
      function MethodeToevoegenComponent(fb, _service, _snackBar) {
        _classCallCheck(this, MethodeToevoegenComponent);

        this.fb = fb;
        this._service = _service;
        this._snackBar = _snackBar;
        this.model = new src_app_models_persmethode_model__WEBPACK_IMPORTED_MODULE_2__["Persmethode"](0, "");
        this.Form = this.fb.group({
          naam: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
      }

      _createClass(MethodeToevoegenComponent, [{
        key: "openSnackBar",
        value: function openSnackBar() {
          this._snackBar.open("De persmethode is aangemaakt!", "Close", {
            duration: 5000
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.openSnackBar();

          this._service.addMethode(this.model).subscribe();
        }
      }]);

      return MethodeToevoegenComponent;
    }();

    MethodeToevoegenComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }];
    };

    MethodeToevoegenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-methode-toevoegen',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./methode-toevoegen.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-toevoegen/methode-toevoegen/methode-toevoegen.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./methode-toevoegen.component.css */
      "./src/app/admin/admin-toevoegen/methode-toevoegen/methode-toevoegen.component.css")).default]
    })], MethodeToevoegenComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-toevoegen/meting-toevoegen/meting-toevoegen.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/admin/admin-toevoegen/meting-toevoegen/meting-toevoegen.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminToevoegenMetingToevoegenMetingToevoegenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXRpbmctdG9ldm9lZ2VuL21ldGluZy10b2V2b2VnZW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-toevoegen/meting-toevoegen/meting-toevoegen.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/admin/admin-toevoegen/meting-toevoegen/meting-toevoegen.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: MetingToevoegenComponent */

  /***/
  function srcAppAdminAdminToevoegenMetingToevoegenMetingToevoegenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetingToevoegenComponent", function () {
      return MetingToevoegenComponent;
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


    var src_app_models_soort_meting_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/soort-meting.model */
    "./src/app/models/soort-meting.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/services.service */
    "./src/app/services/services.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var MetingToevoegenComponent =
    /*#__PURE__*/
    function () {
      function MetingToevoegenComponent(fb, _service, _snackBar) {
        _classCallCheck(this, MetingToevoegenComponent);

        this.fb = fb;
        this._service = _service;
        this._snackBar = _snackBar;
        this.model = new src_app_models_soort_meting_model__WEBPACK_IMPORTED_MODULE_2__["SoortMeting"](0, "");
        this.Form = this.fb.group({
          naam: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
      }

      _createClass(MetingToevoegenComponent, [{
        key: "openSnackBar",
        value: function openSnackBar() {
          this._snackBar.open("De soort meting is aangemaakt!", "Close", {
            duration: 5000
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.openSnackBar();

          this._service.addMetingSoort(this.model).subscribe();
        }
      }]);

      return MetingToevoegenComponent;
    }();

    MetingToevoegenComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }];
    };

    MetingToevoegenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-meting-toevoegen',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./meting-toevoegen.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-toevoegen/meting-toevoegen/meting-toevoegen.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./meting-toevoegen.component.css */
      "./src/app/admin/admin-toevoegen/meting-toevoegen/meting-toevoegen.component.css")).default]
    })], MetingToevoegenComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-toevoegen/vat-toevoegen/vat-toevoegen.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/admin/admin-toevoegen/vat-toevoegen/vat-toevoegen.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminToevoegenVatToevoegenVatToevoegenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YXQtdG9ldm9lZ2VuL3ZhdC10b2V2b2VnZW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-toevoegen/vat-toevoegen/vat-toevoegen.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/admin/admin-toevoegen/vat-toevoegen/vat-toevoegen.component.ts ***!
    \********************************************************************************/

  /*! exports provided: VatToevoegenComponent */

  /***/
  function srcAppAdminAdminToevoegenVatToevoegenVatToevoegenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VatToevoegenComponent", function () {
      return VatToevoegenComponent;
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


    var src_app_models_vat_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/vat.model */
    "./src/app/models/vat.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/services.service */
    "./src/app/services/services.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var VatToevoegenComponent =
    /*#__PURE__*/
    function () {
      function VatToevoegenComponent(fb, _service, _snackBar) {
        _classCallCheck(this, VatToevoegenComponent);

        this.fb = fb;
        this._service = _service;
        this._snackBar = _snackBar;
        this.model = new src_app_models_vat_model__WEBPACK_IMPORTED_MODULE_2__["Vat"](0, "", 0, 1, "", 0, false, false, false, 0);
        this.Form = this.fb.group({
          naam: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          locatie: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          volume: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          deksel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          koelmantel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          mangat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          materiaal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
      }

      _createClass(VatToevoegenComponent, [{
        key: "openSnackBar",
        value: function openSnackBar() {
          this._snackBar.open("Het vat is aangemaakt!", "Close", {
            duration: 5000
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.openSnackBar();

          this._service.addVat(this.model).subscribe();
        }
      }]);

      return VatToevoegenComponent;
    }();

    VatToevoegenComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }];
    };

    VatToevoegenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vat-toevoegen',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vat-toevoegen.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-toevoegen/vat-toevoegen/vat-toevoegen.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vat-toevoegen.component.css */
      "./src/app/admin/admin-toevoegen/vat-toevoegen/vat-toevoegen.component.css")).default]
    })], VatToevoegenComponent);
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9hbGFybWVyaW5nL2FsYXJtZXJpbmctZGF0YS9hbGFybWVyaW5nLWRhdGEuY29tcG9uZW50LmNzcyJ9 */";
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9hbGFybWVyaW5nL2FsYXJtZXJpbmctZGF0YS9jby9jby5jb21wb25lbnQuY3NzIn0= */";
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
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var CoComponent =
    /*#__PURE__*/
    function () {
      function CoComponent(fb, _service, _snackBar) {
        _classCallCheck(this, CoComponent);

        this.fb = fb;
        this._service = _service;
        this._snackBar = _snackBar;
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
        });
        this.processenl = new Array();
        this.instantiateLists();
      } // ,{ validator: this.greaterThan('minimum', 'maximum') });


      _createClass(CoComponent, [{
        key: "openSnackBar",
        value: function openSnackBar() {
          this._snackBar.open("De alarmwaarden zijn aangepast!", "Close", {
            duration: 5000
          });
        }
      }, {
        key: "instantiateLists",
        value: function instantiateLists() {
          var _this19 = this;

          this.openSnackBar();

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
          var _this20 = this;

          this.alarmForm.get('disable').valueChanges.subscribe(function (v) {
            if (v) {
              _this20.alarmForm.get('minimum').disable();

              _this20.alarmForm.get('maximum').disable();

              _this20.checked = true;
            } else {
              _this20.alarmForm.get('minimum').enable();

              _this20.alarmForm.get('maximum').enable();

              _this20.checked = false;
            }
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(procesId) {
          var _this21 = this;

          this._service.getAlarmDataByVinAndSoort(procesId, 3).subscribe(function (result) {
            _this21.alarmdataModel = result;
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

          if (this.alarmdataModel.minimumwaarde == 0) {
            this.alarmdataModel.minimumwaarde = 1;
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
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9hbGFybWVyaW5nL2FsYXJtZXJpbmctZGF0YS9kcnVrL2RydWsuY29tcG9uZW50LmNzcyJ9 */";
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
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var DrukComponent =
    /*#__PURE__*/
    function () {
      function DrukComponent(fb, _service, _snackBar) {
        _classCallCheck(this, DrukComponent);

        this.fb = fb;
        this._service = _service;
        this._snackBar = _snackBar;
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
        });
        this.processenl = new Array();
        this.instantiateLists();
      } // ,{ validator: this.greaterThan('minimum', 'maximum') });


      _createClass(DrukComponent, [{
        key: "openSnackBar",
        value: function openSnackBar() {
          this._snackBar.open("De alarmwaarden zijn aangepast!", "Close", {
            duration: 5000
          });
        }
      }, {
        key: "instantiateLists",
        value: function instantiateLists() {
          var _this22 = this;

          this.openSnackBar();

          this._service.getAllProcessen().subscribe(function (result) {
            result.records.forEach(function (proces) {
              if (proces.actief == 1) {
                _this22._service.getVatById(proces.vatId).subscribe(function (vat) {
                  proces.vat = vat;
                });

                _this22.processenl.push(proces);
              }
            });
            _this22.processen = _this22.makeObservable();
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
          var _this23 = this;

          this.alarmForm.get('disable').valueChanges.subscribe(function (v) {
            if (v) {
              _this23.alarmForm.get('minimum').disable();

              _this23.alarmForm.get('maximum').disable();

              _this23.checked = true;
            } else {
              _this23.alarmForm.get('minimum').enable();

              _this23.alarmForm.get('maximum').enable();

              _this23.checked = false;
            }
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(procesId) {
          var _this24 = this;

          this._service.getAlarmDataByVinAndSoort(procesId, 1).subscribe(function (result) {
            _this24.alarmdataModel = result;
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

          if (this.alarmdataModel.minimumwaarde == 0) {
            this.alarmdataModel.minimumwaarde = 1;
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
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9hbGFybWVyaW5nL2FsYXJtZXJpbmctZGF0YS9ldGhhbm9sL2V0aGFub2wuY29tcG9uZW50LmNzcyJ9 */";
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
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var EthanolComponent =
    /*#__PURE__*/
    function () {
      function EthanolComponent(fb, _service, _snackBar) {
        _classCallCheck(this, EthanolComponent);

        this.fb = fb;
        this._service = _service;
        this._snackBar = _snackBar;
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
        key: "openSnackBar",
        value: function openSnackBar() {
          this._snackBar.open("De alarmwaarden zijn aangepast!", "Close", {
            duration: 5000
          });
        }
      }, {
        key: "instantiateLists",
        value: function instantiateLists() {
          var _this25 = this;

          this._service.getAllProcessen().subscribe(function (result) {
            result.records.forEach(function (proces) {
              if (proces.actief == 1) {
                _this25._service.getVatById(proces.vatId).subscribe(function (vat) {
                  proces.vat = vat;
                });

                _this25.processenl.push(proces);
              }
            });
            _this25.processen = _this25.makeObservable();
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
          var _this26 = this;

          this.alarmForm.get('disable').valueChanges.subscribe(function (v) {
            if (v) {
              _this26.alarmForm.get('minimum').disable();

              _this26.alarmForm.get('maximum').disable();

              _this26.checked = true;
            } else {
              _this26.alarmForm.get('minimum').enable();

              _this26.alarmForm.get('maximum').enable();

              _this26.checked = false;
            }
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(procesId) {
          var _this27 = this;

          this._service.getAlarmDataByVinAndSoort(procesId, 2).subscribe(function (result) {
            _this27.alarmdataModel = result;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.openSnackBar();

          if (this.checked) {
            this.alarmdataModel.actief = 0;
          } else {
            this.alarmdataModel.actief = 1;
          }

          if (this.alarmdataModel.minimumwaarde == 0) {
            this.alarmdataModel.minimumwaarde = 1;
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
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9hbGFybWVyaW5nL2FsYXJtZXJpbmctZGF0YS90ZW1wZXJhdHV1ci90ZW1wZXJhdHV1ci5jb21wb25lbnQuY3NzIn0= */";
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
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var TemperatuurComponent =
    /*#__PURE__*/
    function () {
      function TemperatuurComponent(fb, _service, _snackBar) {
        _classCallCheck(this, TemperatuurComponent);

        this.fb = fb;
        this._service = _service;
        this._snackBar = _snackBar;
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
        key: "openSnackBar",
        value: function openSnackBar() {
          this._snackBar.open("De alarmwaarden zijn aangepast!", "Close", {
            duration: 5000
          });
        }
      }, {
        key: "instantiateLists",
        value: function instantiateLists() {
          var _this28 = this;

          this._service.getAllProcessen().subscribe(function (result) {
            result.records.forEach(function (proces) {
              if (proces.actief == 1) {
                _this28._service.getVatById(proces.vatId).subscribe(function (vat) {
                  proces.vat = vat;
                });

                _this28.processenl.push(proces);
              }
            });
            _this28.processen = _this28.makeObservable();
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
          var _this29 = this;

          this.alarmForm.get('disable').valueChanges.subscribe(function (v) {
            if (v) {
              _this29.alarmForm.get('minimum').disable();

              _this29.alarmForm.get('maximum').disable();

              _this29.checked = true;
            } else {
              _this29.alarmForm.get('minimum').enable();

              _this29.alarmForm.get('maximum').enable();

              _this29.checked = false;
            }
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(procesId) {
          var _this30 = this;

          this._service.getAlarmDataByVinAndSoort(procesId, 5).subscribe(function (result) {
            _this30.alarmdataModel = result;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.openSnackBar();

          if (this.checked) {
            this.alarmdataModel.actief = 0;
          } else {
            this.alarmdataModel.actief = 1;
          }

          if (this.alarmdataModel.minimumwaarde == 0) {
            this.alarmdataModel.minimumwaarde = 1;
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
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9hbGFybWVyaW5nL2FsYXJtZXJpbmctZGF0YS90cm9lYmVsaGVpZC90cm9lYmVsaGVpZC5jb21wb25lbnQuY3NzIn0= */";
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
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var TroebelheidComponent =
    /*#__PURE__*/
    function () {
      function TroebelheidComponent(fb, _service, _snackBar) {
        _classCallCheck(this, TroebelheidComponent);

        this.fb = fb;
        this._service = _service;
        this._snackBar = _snackBar;
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
        });
        this.processenl = new Array();
        this.instantiateLists();
      } // ,{ validator: this.greaterThan('minimum', 'maximum') });


      _createClass(TroebelheidComponent, [{
        key: "openSnackBar",
        value: function openSnackBar() {
          this._snackBar.open("De alarmwaarden zijn aangepast!", "Close", {
            duration: 5000
          });
        }
      }, {
        key: "instantiateLists",
        value: function instantiateLists() {
          var _this31 = this;

          this._service.getAllProcessen().subscribe(function (result) {
            result.records.forEach(function (proces) {
              if (proces.actief == 1) {
                _this31._service.getVatById(proces.vatId).subscribe(function (vat) {
                  proces.vat = vat;
                });

                _this31.processenl.push(proces);
              }
            });
            _this31.processen = _this31.makeObservable();
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
          var _this32 = this;

          this.alarmForm.get('disable').valueChanges.subscribe(function (v) {
            if (v) {
              _this32.alarmForm.get('minimum').disable();

              _this32.alarmForm.get('maximum').disable();

              _this32.checked = true;
            } else {
              _this32.alarmForm.get('minimum').enable();

              _this32.alarmForm.get('maximum').enable();

              _this32.checked = false;
            }
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(procesId) {
          var _this33 = this;

          this._service.getAlarmDataByVinAndSoort(procesId, 4).subscribe(function (result) {
            _this33.alarmdataModel = result;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.openSnackBar();

          if (this.checked) {
            this.alarmdataModel.actief = 0;
          } else {
            this.alarmdataModel.actief = 1;
          }

          if (this.alarmdataModel.minimumwaarde == 0) {
            this.alarmdataModel.minimumwaarde = 1;
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
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9hbGFybWVyaW5nL2FsYXJtZXJpbmctcGVyc29uZW4vYWxhcm1lcmluZy1wZXJzb25lbi5jb21wb25lbnQuY3NzIn0= */";
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
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AlarmeringPersonenComponent =
    /*#__PURE__*/
    function () {
      function AlarmeringPersonenComponent(fb, _service, _snackBar) {
        _classCallCheck(this, AlarmeringPersonenComponent);

        this.fb = fb;
        this._service = _service;
        this._snackBar = _snackBar;
        this.gebruikersl = new Array();
        this.bestaat = false;
        this.alarmForm = this.fb.group({
          gebruiker: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          proces: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.AlarmDataGebruikerModel = new src_app_models_alarm_data_gebruiker_model__WEBPACK_IMPORTED_MODULE_5__["AlarmDataGebruiker"](null, null);
        this.processenl = new Array();
        this.instantiateLists();
      }

      _createClass(AlarmeringPersonenComponent, [{
        key: "openSnackBar",
        value: function openSnackBar(message) {
          this._snackBar.open(message, "Close", {
            duration: 5000
          });
        }
      }, {
        key: "instantiateLists",
        value: function instantiateLists() {
          var _this34 = this;

          this.processenl = [];
          this.gebruikersl = [];

          this._service.getAllGebruikers().subscribe(function (result) {
            result.records.forEach(function (gebruiker) {
              _this34.gebruikersl.push(gebruiker);
            });
            _this34.gebruikers = _this34.makeObservableGebruiker();
          });

          this._service.getAllProcessen().subscribe(function (result) {
            result.records.forEach(function (proces) {
              if (proces.actief == 1) {
                _this34._service.getVatById(proces.vatId).subscribe(function (vat) {
                  proces.vat = vat;
                });

                _this34.processenl.push(proces);
              }
            });
            _this34.processen = _this34.makeObservable();
          });

          this.processenNotl = [];
          this.processenSubl = [];
          this.processenNotl = this.processenl;
          this.bestaat = false;
        }
      }, {
        key: "makeObservableSub",
        value: function makeObservableSub() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.processenSubl);
        }
      }, {
        key: "makeObservableNot",
        value: function makeObservableNot() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.processenNotl);
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
        value: function onSelect(id) {
          var _this35 = this;

          this.instantiateLists();

          this._service.getAllAlarmDataGebruikers().subscribe(function (result) {
            result.records.forEach(function (el) {
              _this35.checkIfExists(el, id);
            });

            if (_this35.bestaat) {
              _this35.gebruiker = id;

              _this35._service.getAllAlarmDataGebruikerByGebruiker(id).subscribe(function (result) {
                result.records.forEach(function (element) {
                  _this35.CheckIfContains(element.alarmData_vinificatieId);

                  _this35.processenNotl.forEach(function (el) {
                    if (el.id == element.alarmData_vinificatieId) {
                      _this35.processenNotl.splice(_this35.processenNotl.indexOf(el), 1);
                    }
                  });
                });
              });

              _this35.processenNot = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_this35.processenl);
            } else {
              _this35.processenl = [];
              _this35.processenNot = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]();

              _this35._service.getAllProcessen().subscribe(function (result) {
                result.records.forEach(function (proces) {
                  if (proces.actief == 1) {
                    _this35._service.getVatById(proces.vatId).subscribe(function (vat) {
                      proces.vat = vat;
                    });

                    _this35.processenl.push(proces);
                  }
                });
                _this35.processen = _this35.makeObservable();
                _this35.processenNot = _this35.processen;
              });
            }
          });

          this.processenSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.processenSubl);
        }
      }, {
        key: "checkIfExists",
        value: function checkIfExists(el, id) {
          if (el.gebruikerId == id) {
            this.bestaat = true;
          }
        }
      }, {
        key: "add",
        value: function add(proces) {
          var _this36 = this;

          var message = "Deze persoon krijgt vanaf nu meldingen van het proces";
          this.openSnackBar(message);

          this._service.getAlarmDataByProces(proces.id).subscribe(function (result) {
            result.records.forEach(function (element) {
              _this36.AlarmDataGebruikerModel.alarmdataId = element.id;

              _this36._service.addAlarmDataGebruiker(_this36.AlarmDataGebruikerModel).subscribe();
            });
          });
        }
      }, {
        key: "delete",
        value: function _delete(proces) {
          var _this37 = this;

          var message = "Deze persoon zal geen meldingen mee krijgen van het proces";
          this.openSnackBar(message);

          this._service.getAlarmDataByProces(proces.id).subscribe(function (result) {
            result.records.forEach(function (element) {
              _this37.AlarmDataGebruikerModel.alarmdataId = element.id;

              _this37._service.deleteAlarmDataGebruiker(_this37.AlarmDataGebruikerModel).subscribe();
            });
          });
        }
      }, {
        key: "CheckIfContains",
        value: function CheckIfContains(id) {
          var _this38 = this;

          this.processen.subscribe(function (result) {
            result.forEach(function (el) {
              if (el.id == id) {
                _this38.processenSubl.push(el);
              }
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
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
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


    __webpack_exports__["default"] = "mat-sidenav-container {\r\n  position: fixed;\r\n  height: 100%;\r\n  min-height: 100%;\r\n  width: 100%;\r\n  min-width: 100%;\r\n}\r\n\r\n\r\n      body { \r\n        font-family: Roboto, Arial, sans-serif;\r\n        margin: 0;\r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7QUFDakI7OztNQUdNO1FBQ0Usc0NBQXNDO1FBQ3RDLFNBQVM7TUFDWCIsImZpbGUiOiIuLi8uLi9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbiAgICAgIGJvZHkgeyBcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH0iXX0= */";
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
    /* harmony import */


    var _services_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/services.service */
    "./src/app/services/services.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(_service, router, breakpointObserver) {
        var _this39 = this;

        _classCallCheck(this, AppComponent);

        this._service = _service;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.opened = false;
        this.title = 'CircuitFrontend';
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
          return result.matches;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])());

        this._service.isLoggedin.subscribe(function (e) {
          _this39.login = e.valueOf();
        });

        this._service.isAdmin.subscribe(function (e) {
          _this39.admin = e.valueOf();
        });
      }

      _createClass(AppComponent, [{
        key: "logOut",
        value: function logOut() {
          localStorage.removeItem("token");

          this._service.isLoggedin.next(!this.login ? true : false);

          this.router.navigate(["/"]);
          console.log(this._service.isLoggedin.value);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_services_service__WEBPACK_IMPORTED_MODULE_3__["ServicesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"]
      }];
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
    /* harmony import */


    var _admin_admin_toevoegen_druif_soort_toevoegen_druif_soort_toevoegen_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./admin/admin-toevoegen/druif-soort-toevoegen/druif-soort-toevoegen.component */
    "./src/app/admin/admin-toevoegen/druif-soort-toevoegen/druif-soort-toevoegen.component.ts");
    /* harmony import */


    var _admin_admin_toevoegen_vat_toevoegen_vat_toevoegen_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./admin/admin-toevoegen/vat-toevoegen/vat-toevoegen.component */
    "./src/app/admin/admin-toevoegen/vat-toevoegen/vat-toevoegen.component.ts");
    /* harmony import */


    var _admin_admin_toevoegen_event_toevoegen_event_toevoegen_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./admin/admin-toevoegen/event-toevoegen/event-toevoegen.component */
    "./src/app/admin/admin-toevoegen/event-toevoegen/event-toevoegen.component.ts");
    /* harmony import */


    var _admin_admin_toevoegen_methode_toevoegen_methode_toevoegen_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./admin/admin-toevoegen/methode-toevoegen/methode-toevoegen.component */
    "./src/app/admin/admin-toevoegen/methode-toevoegen/methode-toevoegen.component.ts");
    /* harmony import */


    var _admin_admin_toevoegen_meting_toevoegen_meting_toevoegen_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./admin/admin-toevoegen/meting-toevoegen/meting-toevoegen.component */
    "./src/app/admin/admin-toevoegen/meting-toevoegen/meting-toevoegen.component.ts");
    /* harmony import */


    var _admin_admin_toevoegen_gebruiker_toevoegen_gebruiker_toevoegen_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./admin/admin-toevoegen/gebruiker-toevoegen/gebruiker-toevoegen.component */
    "./src/app/admin/admin-toevoegen/gebruiker-toevoegen/gebruiker-toevoegen.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _admin_admin_toevoegen_admin_toevoegen_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./admin/admin-toevoegen/admin-toevoegen.component */
    "./src/app/admin/admin-toevoegen/admin-toevoegen.component.ts");
    /* harmony import */


    var _admin_admin_overzicht_admin_overzicht_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./admin/admin-overzicht/admin-overzicht.component */
    "./src/app/admin/admin-overzicht/admin-overzicht.component.ts");
    /* harmony import */


    var _admin_admin_overzicht_druif_beheren_druif_beheren_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./admin/admin-overzicht/druif-beheren/druif-beheren.component */
    "./src/app/admin/admin-overzicht/druif-beheren/druif-beheren.component.ts");
    /* harmony import */


    var _admin_admin_overzicht_event_beheren_event_beheren_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./admin/admin-overzicht/event-beheren/event-beheren.component */
    "./src/app/admin/admin-overzicht/event-beheren/event-beheren.component.ts");
    /* harmony import */


    var _admin_admin_overzicht_gebruiker_beheren_gebruiker_beheren_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./admin/admin-overzicht/gebruiker-beheren/gebruiker-beheren.component */
    "./src/app/admin/admin-overzicht/gebruiker-beheren/gebruiker-beheren.component.ts");
    /* harmony import */


    var _admin_admin_overzicht_methode_beheren_methode_beheren_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./admin/admin-overzicht/methode-beheren/methode-beheren.component */
    "./src/app/admin/admin-overzicht/methode-beheren/methode-beheren.component.ts");
    /* harmony import */


    var _admin_admin_overzicht_meting_beheren_meting_beheren_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./admin/admin-overzicht/meting-beheren/meting-beheren.component */
    "./src/app/admin/admin-overzicht/meting-beheren/meting-beheren.component.ts");
    /* harmony import */


    var _admin_admin_overzicht_vat_beheren_vat_beheren_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./admin/admin-overzicht/vat-beheren/vat-beheren.component */
    "./src/app/admin/admin-overzicht/vat-beheren/vat-beheren.component.ts");

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
      path: 'dashboard/:id',
      component: _toon_dashboard_toon_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["ToonDashboardComponent"]
    }, {
      path: 'actief',
      component: _toon_vinificaties_toon_actieve_vinificaties_toon_actieve_vinificaties_component__WEBPACK_IMPORTED_MODULE_20__["ToonActieveVinificatiesComponent"]
    }, {
      path: 'nonactief',
      component: _toon_vinificaties_toon_non_actieve_vinificaties_toon_non_actieve_vinificaties_component__WEBPACK_IMPORTED_MODULE_21__["ToonNonActieveVinificatiesComponent"]
    }, {
      path: 'detail/:id',
      component: _toon_vinificaties_toon_details_vinificaties_toon_details_vinificaties_component__WEBPACK_IMPORTED_MODULE_22__["ToonDetailsVinificatiesComponent"]
    }, {
      path: 'adminToevoegen',
      component: _admin_admin_toevoegen_admin_toevoegen_component__WEBPACK_IMPORTED_MODULE_30__["AdminToevoegenComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"]
    }, {
      path: 'adminEdit',
      component: _admin_admin_overzicht_admin_overzicht_component__WEBPACK_IMPORTED_MODULE_31__["AdminOverzichtComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _toon_vinificaties_toon_actieve_vinificaties_toon_actieve_vinificaties_component__WEBPACK_IMPORTED_MODULE_20__["ToonActieveVinificatiesComponent"], _toon_vinificaties_toon_non_actieve_vinificaties_toon_non_actieve_vinificaties_component__WEBPACK_IMPORTED_MODULE_21__["ToonNonActieveVinificatiesComponent"], _toon_vinificaties_toon_details_vinificaties_toon_details_vinificaties_component__WEBPACK_IMPORTED_MODULE_22__["ToonDetailsVinificatiesComponent"], _admin_admin_toevoegen_druif_soort_toevoegen_druif_soort_toevoegen_component__WEBPACK_IMPORTED_MODULE_23__["DruifSoortToevoegenComponent"], _admin_admin_toevoegen_vat_toevoegen_vat_toevoegen_component__WEBPACK_IMPORTED_MODULE_24__["VatToevoegenComponent"], _admin_admin_toevoegen_event_toevoegen_event_toevoegen_component__WEBPACK_IMPORTED_MODULE_25__["EventToevoegenComponent"], _admin_admin_toevoegen_methode_toevoegen_methode_toevoegen_component__WEBPACK_IMPORTED_MODULE_26__["MethodeToevoegenComponent"], _admin_admin_toevoegen_meting_toevoegen_meting_toevoegen_component__WEBPACK_IMPORTED_MODULE_27__["MetingToevoegenComponent"], _admin_admin_toevoegen_gebruiker_toevoegen_gebruiker_toevoegen_component__WEBPACK_IMPORTED_MODULE_28__["GebruikerToevoegenComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"], _admin_admin_toevoegen_admin_toevoegen_component__WEBPACK_IMPORTED_MODULE_30__["AdminToevoegenComponent"], _admin_admin_overzicht_admin_overzicht_component__WEBPACK_IMPORTED_MODULE_31__["AdminOverzichtComponent"], _admin_admin_overzicht_druif_beheren_druif_beheren_component__WEBPACK_IMPORTED_MODULE_32__["DruifBeherenComponent"], _admin_admin_overzicht_event_beheren_event_beheren_component__WEBPACK_IMPORTED_MODULE_33__["EventBeherenComponent"], _admin_admin_overzicht_gebruiker_beheren_gebruiker_beheren_component__WEBPACK_IMPORTED_MODULE_34__["GebruikerBeherenComponent"], _admin_admin_overzicht_methode_beheren_methode_beheren_component__WEBPACK_IMPORTED_MODULE_35__["MethodeBeherenComponent"], _admin_admin_overzicht_meting_beheren_meting_beheren_component__WEBPACK_IMPORTED_MODULE_36__["MetingBeherenComponent"], _admin_admin_overzicht_vat_beheren_vat_beheren_component__WEBPACK_IMPORTED_MODULE_37__["VatBeherenComponent"]],
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */";
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
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _models_user_login_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/user-login.model */
    "./src/app/models/user-login.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/services.service */
    "./src/app/services/services.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(fb, _service, router) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this._service = _service;
        this.router = router;
        this.login = new _models_user_login_model__WEBPACK_IMPORTED_MODULE_2__["UserLogin"]("", "");
        this.loginForm = this.fb.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this40 = this;

          this._service.Authenticate(this.login).subscribe(function (result) {
            _this40._service.isLoggedin.next(result.id ? true : false);

            localStorage.setItem("token", result.id.toString());

            _this40.router.navigateByUrl('/dashboard');

            _this40._service.setUser(result);

            if (result.rolId == 1) {
              _this40._service.setIsAdmin(true);
            } else {
              _this40._service.setIsAdmin(false);
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_services_service__WEBPACK_IMPORTED_MODULE_5__["ServicesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
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
  "./src/app/models/druif.model.ts":
  /*!***************************************!*\
    !*** ./src/app/models/druif.model.ts ***!
    \***************************************/

  /*! exports provided: Druif */

  /***/
  function srcAppModelsDruifModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Druif", function () {
      return Druif;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Druif = function Druif(id, druifsoort) {
      _classCallCheck(this, Druif);

      this.id = id;
      this.druifsoort = druifsoort;
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
  "./src/app/models/gebruiker.model.ts":
  /*!*******************************************!*\
    !*** ./src/app/models/gebruiker.model.ts ***!
    \*******************************************/

  /*! exports provided: Gebruiker */

  /***/
  function srcAppModelsGebruikerModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Gebruiker", function () {
      return Gebruiker;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Gebruiker = function Gebruiker(id, rolId, voornaam, naam, gebruikersnaam, wachtwoord, email, telefoonnummer, jwt) {
      _classCallCheck(this, Gebruiker);

      this.id = id;
      this.rolId = rolId;
      this.voornaam = voornaam;
      this.naam = naam;
      this.gebruikersnaam = gebruikersnaam;
      this.wachtwoord = wachtwoord;
      this.email = email;
      this.telefoonnummer = telefoonnummer;
      this.jwt = jwt;
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
  "./src/app/models/persmethode.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/models/persmethode.model.ts ***!
    \*********************************************/

  /*! exports provided: Persmethode */

  /***/
  function srcAppModelsPersmethodeModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Persmethode", function () {
      return Persmethode;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Persmethode = function Persmethode(id, methode) {
      _classCallCheck(this, Persmethode);

      this.id = id;
      this.methode = methode;
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

    var Process = function Process(id, vatId, persmethodeId, actief, persHoeveelheid, oogst, persDruk, vat, druif, jaargang, wijnTypeId) {
      _classCallCheck(this, Process);

      this.id = id;
      this.vatId = vatId;
      this.persmethodeId = persmethodeId;
      this.actief = actief;
      this.persHoeveelheid = persHoeveelheid;
      this.oogst = oogst;
      this.persDruk = persDruk;
      this.vat = vat;
      this.druif = druif;
      this.jaargang = jaargang;
      this.wijnTypeId = wijnTypeId;
    };
    /***/

  },

  /***/
  "./src/app/models/soort-event.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/models/soort-event.model.ts ***!
    \*********************************************/

  /*! exports provided: SoortEvent */

  /***/
  function srcAppModelsSoortEventModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SoortEvent", function () {
      return SoortEvent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SoortEvent = function SoortEvent(soortEventId, naam) {
      _classCallCheck(this, SoortEvent);

      this.soortEventId = soortEventId;
      this.naam = naam;
    };
    /***/

  },

  /***/
  "./src/app/models/soort-meting.model.ts":
  /*!**********************************************!*\
    !*** ./src/app/models/soort-meting.model.ts ***!
    \**********************************************/

  /*! exports provided: SoortMeting */

  /***/
  function srcAppModelsSoortMetingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SoortMeting", function () {
      return SoortMeting;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SoortMeting = function SoortMeting(id, naam) {
      _classCallCheck(this, SoortMeting);

      this.id = id;
      this.naam = naam;
    };
    /***/

  },

  /***/
  "./src/app/models/user-login.model.ts":
  /*!********************************************!*\
    !*** ./src/app/models/user-login.model.ts ***!
    \********************************************/

  /*! exports provided: UserLogin */

  /***/
  function srcAppModelsUserLoginModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserLogin", function () {
      return UserLogin;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var UserLogin = function UserLogin(email, wachtwoord) {
      _classCallCheck(this, UserLogin);

      this.email = email;
      this.wachtwoord = wachtwoord;
    };
    /***/

  },

  /***/
  "./src/app/models/vat.model.ts":
  /*!*************************************!*\
    !*** ./src/app/models/vat.model.ts ***!
    \*************************************/

  /*! exports provided: Vat */

  /***/
  function srcAppModelsVatModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Vat", function () {
      return Vat;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Vat = function Vat(id, nummer, inGebruik, gelinkt, locatie, volume, deksel, koelmantel, mangat, materiaalId) {
      _classCallCheck(this, Vat);

      this.id = id;
      this.nummer = nummer;
      this.inGebruik = inGebruik;
      this.gelinkt = gelinkt;
      this.locatie = locatie;
      this.volume = volume;
      this.deksel = deksel;
      this.koelmantel = koelmantel;
      this.mangat = mangat;
      this.materiaalId = materiaalId;
    };
    /***/

  },

  /***/
  "./src/app/models/vinificatie-druif.model.ts":
  /*!***************************************************!*\
    !*** ./src/app/models/vinificatie-druif.model.ts ***!
    \***************************************************/

  /*! exports provided: VinificatieDruif */

  /***/
  function srcAppModelsVinificatieDruifModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VinificatieDruif", function () {
      return VinificatieDruif;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var VinificatieDruif = function VinificatieDruif(vinificatieId, druifsoortId) {
      _classCallCheck(this, VinificatieDruif);

      this.vinificatieId = vinificatieId;
      this.druifsoortId = druifsoortId;
    };
    /***/

  },

  /***/
  "./src/app/models/wijn-type.model.ts":
  /*!*******************************************!*\
    !*** ./src/app/models/wijn-type.model.ts ***!
    \*******************************************/

  /*! exports provided: WijnType */

  /***/
  function srcAppModelsWijnTypeModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WijnType", function () {
      return WijnType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var WijnType = function WijnType(id, naam) {
      _classCallCheck(this, WijnType);

      this.id = id;
      this.naam = naam;
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9wcm9jZXNzL2FkZC1hY3RpZS9hZGQtYWN0aWUuY29tcG9uZW50LmNzcyJ9 */";
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
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AddActieComponent =
    /*#__PURE__*/
    function () {
      function AddActieComponent(fb, _service, _snackBar) {
        var _this41 = this;

        _classCallCheck(this, AddActieComponent);

        this.fb = fb;
        this._service = _service;
        this._snackBar = _snackBar;
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

              _this41.processenl.push(proces);
            }
          });
          _this41.processen = _this41.makeObservable();
        });

        _service.getAllEventsoorten().subscribe(function (result) {
          _this41.events = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result.records);
        });
      }

      _createClass(AddActieComponent, [{
        key: "openSnackBar",
        value: function openSnackBar() {
          this._snackBar.open("De actie is toegevoegd aan het proces!", "Close", {
            duration: 5000
          });
        }
      }, {
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
          this.openSnackBar();
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
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9wcm9jZXNzL2FkZC1tZXRpbmcvYWRkLW1ldGluZy5jb21wb25lbnQuY3NzIn0= */";
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
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AddMetingComponent =
    /*#__PURE__*/
    function () {
      function AddMetingComponent(fb, _service, _snackBar) {
        _classCallCheck(this, AddMetingComponent);

        this.fb = fb;
        this._service = _service;
        this._snackBar = _snackBar;
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
        key: "openSnackBar",
        value: function openSnackBar() {
          this._snackBar.open("De meting is toegevoegd aan het proces!", "Close", {
            duration: 5000
          });
        }
      }, {
        key: "instantiateLists",
        value: function instantiateLists() {
          var _this42 = this;

          this._service.getAllProcessen().subscribe(function (result) {
            result.records.forEach(function (proces) {
              if (proces.actief == 1) {
                _this42._service.getVatById(proces.vatId).subscribe(function (vat) {
                  proces.vat = vat;
                });

                _this42.processenl.push(proces);
              }
            });
            _this42.processen = _this42.makeObservable();
          });

          this._service.getAllMetingsoorten().subscribe(function (result) {
            _this42.metingen = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result.records);
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
          this.openSnackBar();
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
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9wcm9jZXNzL2Fmc2x1aXRlbi9hZnNsdWl0ZW4uY29tcG9uZW50LmNzcyJ9 */";
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
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AfsluitenComponent =
    /*#__PURE__*/
    function () {
      function AfsluitenComponent(_service, _snackBar) {
        _classCallCheck(this, AfsluitenComponent);

        this._service = _service;
        this._snackBar = _snackBar;
        this.processenl = new Array();
        this.instantiateLists();
      }

      _createClass(AfsluitenComponent, [{
        key: "openSnackBar",
        value: function openSnackBar() {
          this._snackBar.open("Het proces is afgesloten!", "Close", {
            duration: 5000
          });
        }
      }, {
        key: "instantiateLists",
        value: function instantiateLists() {
          var _this43 = this;

          this.processenl = new Array();

          this._service.getAllProcessen().subscribe(function (result) {
            result.records.forEach(function (proces) {
              if (proces.actief == 1) {
                _this43._service.getVatById(proces.vatId).subscribe(function (vat) {
                  proces.vat = vat;
                });

                _this43.processenl.push(proces);
              }
            });
            _this43.processen = _this43.makeObservable();
            console.log(_this43.processen);
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
          var _this44 = this;

          this.openSnackBar();
          proces.actief = 0;

          this._service.updateProcess(proces).subscribe(function (result) {
            proces.vat = _this44._service.getVatById(proces.vatId);
            proces.vat.subscribe(function (result) {
              result.inGebruik = 0;

              _this44._service.updateVat(result).subscribe(function (result) {
                console.log(result);

                _this44.instantiateLists();
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
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9wcm9jZXNzL2NyZWF0ZS1wcm9jZXNzL2NyZWF0ZS1wcm9jZXNzLmNvbXBvbmVudC5jc3MifQ== */";
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
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_models_vinificatie_druif_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/models/vinificatie-druif.model */
    "./src/app/models/vinificatie-druif.model.ts");
    /* harmony import */


    var src_app_models_wijn_type_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/models/wijn-type.model */
    "./src/app/models/wijn-type.model.ts");

    var CreateProcessComponent =
    /*#__PURE__*/
    function () {
      function CreateProcessComponent(fb, _service, _snackBar) {
        _classCallCheck(this, CreateProcessComponent);

        this.fb = fb;
        this._service = _service;
        this._snackBar = _snackBar;
        this.vatenl = new Array();
        this.procesModel = new src_app_models_process_model__WEBPACK_IMPORTED_MODULE_3__["Process"](0, null, null, 1, null, null, null, null, null, null, 0);
        this.druivenLijst = new Array();
        this.wijntypes = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([new src_app_models_wijn_type_model__WEBPACK_IMPORTED_MODULE_9__["WijnType"](1, "rood"), new src_app_models_wijn_type_model__WEBPACK_IMPORTED_MODULE_9__["WijnType"](2, "rosé")]);
        this.createProcessForm = this.fb.group({
          vat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          pers: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          persHoeveelheid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          oogst: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          bar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          jaargang: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          wijntype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.instantiateLists();
      }

      _createClass(CreateProcessComponent, [{
        key: "openSnackBar",
        value: function openSnackBar() {
          this._snackBar.open("Het proces is aangemaakt!", "Close", {
            duration: 5000
          });
        }
      }, {
        key: "onChange",
        value: function onChange(value) {
          var index = this.druivenLijst.indexOf(value);

          if (index == -1) {
            this.druivenLijst.push(value);
          } else {
            this.druivenLijst.splice(index, 1);
          }

          console.log(this.druivenLijst);
        }
      }, {
        key: "instantiateLists",
        value: function instantiateLists() {
          var _this45 = this;

          this.procesModel = new src_app_models_process_model__WEBPACK_IMPORTED_MODULE_3__["Process"](0, null, null, 1, null, null, null, null, null, null, 0);
          this.vatenl = new Array();

          this._service.getAllVaten().subscribe(function (result) {
            result.records.forEach(function (vat) {
              if (vat.inGebruik == 0) {
                _this45.vatenl.push(vat);
              }
            });
            _this45.vaten = _this45.makeObservable();
          });

          this._service.getAllDruifsoorten().subscribe(function (result) {
            _this45.druiven = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result.records);
          });

          this._service.getAllPersMethodes().subscribe(function (result) {
            _this45.persen = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result.records);
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
          var _this46 = this;

          this.openSnackBar();

          this._service.addProces(this.procesModel).subscribe(function (result) {
            _this46.procesModel.vat = _this46._service.getVatById(_this46.procesModel.vatId);

            _this46.procesModel.vat.subscribe(function (result) {
              result.inGebruik = 1;

              _this46._service.updateVat(result).subscribe(function (result) {
                _this46.instantiateLists();

                _this46._service.getLastProcess().subscribe(function (result) {
                  for (var i = 1; i < 6; i++) {
                    _this46._service.addAlarmData(new src_app_models_alarm_data_model__WEBPACK_IMPORTED_MODULE_6__["AlarmData"](0, i, result.id, 51, 1, 1)).subscribe();
                  }

                  _this46.druivenLijst.forEach(function (el) {
                    _this46._service.addVinificatieDruif(new src_app_models_vinificatie_druif_model__WEBPACK_IMPORTED_MODULE_8__["VinificatieDruif"](result.id, el.id));
                  });
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
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9wcm9jZXNzL3Byb2Nlc3MuY29tcG9uZW50LmNzcyJ9 */";
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
    /* harmony import */


    var _models_gebruiker_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/gebruiker.model */
    "./src/app/models/gebruiker.model.ts");

    var baselink = "http://192.168.0.105/api/";

    var ServicesService =
    /*#__PURE__*/
    function () {
      function ServicesService(http) {
        _classCallCheck(this, ServicesService);

        this.http = http; //gebruikers

        this.isLoggedin = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _models_gebruiker_model__WEBPACK_IMPORTED_MODULE_4__["Gebruiker"](null, null, '', '', '', '', '', '', ''));
        this.user = this.userSubject.asObservable();
        this.isAdminSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.isAdmin = this.isAdminSubject.asObservable();
      } //Vinificatieprocessen


      _createClass(ServicesService, [{
        key: "getAllProcessen",
        value: function getAllProcessen() {
          return this.http.get(baselink + "Vinificatie/read.php");
        }
      }, {
        key: "getAllInactieveProcessen",
        value: function getAllInactieveProcessen() {
          return this.http.get(baselink + "Vinificatie/nietActief.php");
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
        }
      }, {
        key: "addVinificatieDruif",
        value: function addVinificatieDruif(druif) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "VinificatieDruif/create.php", {
            body: JSON.stringify(druif),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'no-cors'
          }));
        }
      }, {
        key: "getProcesById",
        value: function getProcesById(id) {
          return this.http.get(baselink + "Vinificatie/read_one.php?id=" + id);
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
        }
      }, {
        key: "addVat",
        value: function addVat(vat) {
          //return this.http.post<Event>(baselink + "", event);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "Vat/create.php", {
            body: JSON.stringify(vat),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'no-cors'
          }));
        }
      }, {
        key: "deleteVat",
        value: function deleteVat(item) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "Vat/delete.php", {
            body: JSON.stringify(item),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'DELETE'
          }));
        } //persmethodes

      }, {
        key: "getAllPersMethodes",
        value: function getAllPersMethodes() {
          return this.http.get(baselink + "PersMethode/read.php");
        }
      }, {
        key: "getPersmethodeById",
        value: function getPersmethodeById(id) {
          return this.http.get(baselink + "Persmethode/read_one.php?id=" + id);
        }
      }, {
        key: "addMethode",
        value: function addMethode(methode) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "PersMethode/create.php", {
            body: JSON.stringify(methode),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'no-cors'
          }));
        }
      }, {
        key: "deletePersMethode",
        value: function deletePersMethode(item) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "PersMethode/delete.php", {
            body: JSON.stringify(item),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'DELETE'
          }));
        } //druifsoorten

      }, {
        key: "getAllDruifsoorten",
        value: function getAllDruifsoorten() {
          return this.http.get(baselink + "DruifSoort/read.php");
        }
      }, {
        key: "getAllDruifsoortenByVinificatieId",
        value: function getAllDruifsoortenByVinificatieId(id) {
          return this.http.get(baselink + "VinificatieDruif/getDruif.php?id=" + id);
        }
      }, {
        key: "addDruifSoort",
        value: function addDruifSoort(druif) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "DruifSoort/create.php", {
            body: JSON.stringify(druif),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'no-cors'
          }));
        }
      }, {
        key: "deleteDruifSoort",
        value: function deleteDruifSoort(item) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "DruifSoort/delete.php", {
            body: JSON.stringify(item),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'DELETE'
          }));
        } //metingsoorten

      }, {
        key: "getAllMetingsoorten",
        value: function getAllMetingsoorten() {
          return this.http.get(baselink + "SoortMeting/read.php");
        }
      }, {
        key: "addMetingSoort",
        value: function addMetingSoort(meting) {
          //return this.http.post<Event>(baselink + "", event);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "SoortMeting/create.php", {
            body: JSON.stringify(meting),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'no-cors'
          }));
        }
      }, {
        key: "deleteSoortMeting",
        value: function deleteSoortMeting(item) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "SoortMeting/delete.php", {
            body: JSON.stringify(item),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'DELETE'
          }));
        } //eventsoorten

      }, {
        key: "getAllEventsoorten",
        value: function getAllEventsoorten() {
          return this.http.get(baselink + "SoortEvent/read.php");
        }
      }, {
        key: "deleteEventSoort",
        value: function deleteEventSoort(item) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "SoortEvent/delete.php", {
            body: JSON.stringify(item),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'DELETE'
          }));
        }
      }, {
        key: "addEventSoort",
        value: function addEventSoort(event) {
          //return this.http.post<Event>(baselink + "", event);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "SoortEvent/create.php", {
            body: JSON.stringify(event),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'no-cors'
          }));
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
        }
      }, {
        key: "setUser",
        value: function setUser(user) {
          this.userSubject.next(user);
        }
      }, {
        key: "setIsAdmin",
        value: function setIsAdmin(update) {
          this.isAdminSubject.next(update);
        }
      }, {
        key: "getAllGebruikers",
        value: function getAllGebruikers() {
          return this.http.get(baselink + "Gebruiker/read.php");
        }
      }, {
        key: "addGebruiker",
        value: function addGebruiker(gebruiker) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "Gebruiker/create.php", {
            body: JSON.stringify(gebruiker),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'no-cors'
          }));
        }
      }, {
        key: "deleteGebruiker",
        value: function deleteGebruiker(item) {
          console.log(item);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "Gebruiker/delete.php", {
            body: JSON.stringify(item),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'DELETE'
          }));
        }
      }, {
        key: "Authenticate",
        value: function Authenticate(userLogin) {
          return this.http.get(baselink + "Gebruiker/GetLogin.php?email=" + userLogin.email + "&wachtwoord=" + userLogin.wachtwoord);
        } //alarmdatagebruikers

      }, {
        key: "getAllAlarmDataGebruikersByGebruiker",
        value: function getAllAlarmDataGebruikersByGebruiker(id) {
          return this.http.get(baselink + "AlarmDataGebruiker/getByGebruikerId.php?gebruikerId=" + id);
        }
      }, {
        key: "getAllAlarmDataGebruikerByGebruiker",
        value: function getAllAlarmDataGebruikerByGebruiker(id) {
          return this.http.get(baselink + "AlarmDataGebruiker/getByAlarmData.php?gebruikerId=" + id);
        }
      }, {
        key: "getAllAlarmDataGebruikers",
        value: function getAllAlarmDataGebruikers() {
          return this.http.get(baselink + "AlarmDataGebruiker/read.php");
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
      }, {
        key: "deleteAlarmDataGebruiker",
        value: function deleteAlarmDataGebruiker(item) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])( // wrap the fetch in a from if you need an rxjs Observable
          fetch(baselink + "AlarmDataGebruiker/delete.php", {
            body: JSON.stringify(item),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'DELETE'
          }));
        } //rollen

      }, {
        key: "getAllRollen",
        value: function getAllRollen() {
          return this.http.get(baselink + "Rol/read.php");
        } //WijnTypes

      }, {
        key: "getAllWijnTypes",
        value: function getAllWijnTypes() {
          return this.http.get(baselink + "WijnType/read.php");
        } //Materiaal

      }, {
        key: "getAllMaterialen",
        value: function getAllMaterialen() {
          return this.http.get(baselink + "Materiaal/read.php");
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
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlNativeDateTimeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlNativeDateTimeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"]]
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi90b29uLWRhc2hib2FyZC90b29uLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */";
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var ToonDashboardComponent =
    /*#__PURE__*/
    function () {
      function ToonDashboardComponent(route, router, sanitizer) {
        _classCallCheck(this, ToonDashboardComponent);

        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.id = 0;
      }

      _createClass(ToonDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this47 = this;

          this.routeSub = this.route.params.subscribe(function (params) {
            _this47.id = params['id'];
            _this47.iframe = 'http://192.168.0.105:3000/d/76B5JFZRz/vinificatie?orgId=1&refresh=5m&from=now-7d&to=now&theme=light&kiosk&var-vat=' + _this47.id;
            console.log(_this47.id, _this47.iframe);
          });
        }
      }]);

      return ToonDashboardComponent;
    }();

    ToonDashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }];
    };

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


    __webpack_exports__["default"] = ".example-card {\r\n    max-width: 400px;\r\n  }\r\n  \r\n.flex-me {\r\n  display: -webkit-inline-box;\r\n  display: inline-flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: row wrap;\r\n  background: grey;\r\n}\r\n  \r\n/* .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Rvb24tdmluaWZpY2F0aWVzL3Rvb24tYWN0aWV2ZS12aW5pZmljYXRpZXMvdG9vbi1hY3RpZXZlLXZpbmlmaWNhdGllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0VBQ2xCOztBQUVGO0VBQ0UsMkJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUU7OztLQUdHIiwiZmlsZSI6Ii4uLy4uL3Rvb24tdmluaWZpY2F0aWVzL3Rvb24tYWN0aWV2ZS12aW5pZmljYXRpZXMvdG9vbi1hY3RpZXZlLXZpbmlmaWNhdGllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIH1cclxuICBcclxuLmZsZXgtbWUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgYmFja2dyb3VuZDogZ3JleTtcclxufVxyXG5cclxuICAvKiAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH0gKi8iXX0= */";
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ToonActieveVinificatiesComponent =
    /*#__PURE__*/
    function () {
      function ToonActieveVinificatiesComponent(fb, _service, sanitizer, router) {
        _classCallCheck(this, ToonActieveVinificatiesComponent);

        this.fb = fb;
        this._service = _service;
        this.sanitizer = sanitizer;
        this.router = router;
        this.processenl = new Array();
        this.instantiateLists();
      }

      _createClass(ToonActieveVinificatiesComponent, [{
        key: "instantiateLists",
        value: function instantiateLists() {
          var _this48 = this;

          var druiflijst = new Array();

          this._service.getAllProcessen().subscribe(function (result) {
            result.records.forEach(function (proces) {
              proces.druif = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]();

              if (proces.actief == 1) {
                _this48._service.getVatById(proces.vatId).subscribe(function (vat) {
                  proces.vat = vat;
                });

                _this48._service.getPersmethodeById(proces.persmethodeId).subscribe(function (persmethode) {
                  proces.persmethode = persmethode;
                });

                _this48._service.getAllDruifsoortenByVinificatieId(proces.id).subscribe(function (result) {
                  result.records.forEach(function (druifsoort) {
                    console.log(druifsoort);
                    druiflijst.push(druifsoort);
                  });
                  proces.druif = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(druiflijst);
                });

                {
                  proces.iframe = "http://192.168.0.105:3000/d/76B5JFZRz/vinificatie?orgId=1&refresh=5m&from=now-7d&to=now&theme=light&kiosk&panelId=8&fullscreen&var-vat=" + proces.vatId;
                }

                _this48.processenl.push(proces);
              }
            });
            _this48.processen = _this48.makeObservable();
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
      }]);

      return ToonActieveVinificatiesComponent;
    }();

    ToonActieveVinificatiesComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi90b29uLXZpbmlmaWNhdGllcy90b29uLWRldGFpbHMtdmluaWZpY2F0aWVzL3Rvb24tZGV0YWlscy12aW5pZmljYXRpZXMuY29tcG9uZW50LmNzcyJ9 */";
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
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/services.service */
    "./src/app/services/services.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ToonDetailsVinificatiesComponent =
    /*#__PURE__*/
    function () {
      function ToonDetailsVinificatiesComponent(fb, _service, route, router) {
        _classCallCheck(this, ToonDetailsVinificatiesComponent);

        this.fb = fb;
        this._service = _service;
        this.route = route;
        this.router = router;
        this.id = 0;
        this.processenl = new Array();
        this.displayedColumns = ['id', 'vatId', 'oogst', 'persHoeveelheid'];
        this.process = _service.getVatById(this.id);
        console.log(this.process);
      }

      _createClass(ToonDetailsVinificatiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this49 = this;

          this.routeSub = this.route.params.subscribe(function (params) {
            _this49.id = params['id'];
            console.log(_this49.id);
          });
        }
      }, {
        key: "makeObservable",
        value: function makeObservable() {}
      }]);

      return ToonDetailsVinificatiesComponent;
    }();

    ToonDetailsVinificatiesComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], ToonDetailsVinificatiesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      static: true
    })], ToonDetailsVinificatiesComponent.prototype, "sort", void 0);
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


    __webpack_exports__["default"] = "table {\r\n  width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Rvb24tdmluaWZpY2F0aWVzL3Rvb24tbm9uLWFjdGlldmUtdmluaWZpY2F0aWVzL3Rvb24tbm9uLWFjdGlldmUtdmluaWZpY2F0aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoiLi4vLi4vdG9vbi12aW5pZmljYXRpZXMvdG9vbi1ub24tYWN0aWV2ZS12aW5pZmljYXRpZXMvdG9vbi1ub24tYWN0aWV2ZS12aW5pZmljYXRpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufSJdfQ== */";
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/services.service */
    "./src/app/services/services.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ToonNonActieveVinificatiesComponent =
    /*#__PURE__*/
    function () {
      function ToonNonActieveVinificatiesComponent(fb, _service, router) {
        _classCallCheck(this, ToonNonActieveVinificatiesComponent);

        this.fb = fb;
        this._service = _service;
        this.router = router;
        this.processenl = new Array();
        this.displayedColumns = ['id', 'vatId', 'oogst', 'persHoeveelheid'];
        this.instantiateLists();
      }

      _createClass(ToonNonActieveVinificatiesComponent, [{
        key: "instantiateLists",
        value: function instantiateLists() {
          var _this50 = this;

          var druiflijst = new Array();

          this._service.getAllProcessen().subscribe(function (result) {
            result.records.forEach(function (proces) {
              proces.druif = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]();

              if (proces.actief == 0) {
                _this50._service.getVatById(proces.vatId).subscribe(function (vat) {
                  proces.vat = vat;
                });

                _this50._service.getPersmethodeById(proces.persmethodeId).subscribe(function (persmethode) {
                  proces.persmethode = persmethode;
                });

                _this50._service.getAllDruifsoortenByVinificatieId(proces.id).subscribe(function (result) {
                  result.records.forEach(function (druifsoort) {
                    console.log(druifsoort);
                    druiflijst.push(druifsoort);
                  });
                  proces.druif = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(druiflijst);
                });

                _this50.processenl.push(proces);
              }
            });
            _this50.processen = _this50.makeObservable();
            _this50.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this50.processenl);
            _this50.dataSource.paginator = _this50.paginator;
            _this50.dataSource.sort = _this50.sort;
            console.log(_this50.dataSource);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "makeObservable",
        value: function makeObservable() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.processenl);
        }
      }]);

      return ToonNonActieveVinificatiesComponent;
    }();

    ToonNonActieveVinificatiesComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_3__["ServicesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], {
      static: true
    })], ToonNonActieveVinificatiesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"], {
      static: true
    })], ToonNonActieveVinificatiesComponent.prototype, "sort", void 0);
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
    /*! C:\Angular\Frontend\CircuitFrontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map