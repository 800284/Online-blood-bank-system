var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/login/login.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/User/login/login.component.html ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container d-flex justify-content-center \">\n    <section class=\"border shadow-lg rounded-lg additional-margin\">\n        <h1 class=\"mt-5 ml-3 text-danger text-alignment \">Login</h1>\n        <div class=\"form-row mb-5 ml-4  mr-5 mb-5 d-none d-md-block \">\n            <div class=\"col-sm-12 text-alignment ml-5 \">\n                <span *ngIf=\"loginFlag\">\n                    <div class=\"text-danger position-absolute alert alert-danger rounded mb-5\">\n                        Invalid Username/Password\n                    </div>\n                </span>\n            </div>\n        </div>\n        <div class=\"form-row mb-5 ml-4  d-sm-block d-md-none d-none\">\n            <div class=\"col-sm-12 text-alignment ml-5 mr-5 mb-4 \">\n                <span *ngIf=\"loginFlag\">\n                    <div class=\"text-danger position-absolute alert alert-danger rounded mb-5\">\n                        Invalid Username/Password\n                    </div>\n                </span>\n            </div>\n        </div>\n        <div class=\"form-row right-margin bottom-margin d-block mb-5 d-sm-none\">\n            <div class=\"\">\n                <div class=\"col-sm-12 text-alignment ml-5 mr-5 mb-5 \">\n                    <span *ngIf=\"loginFlag\">\n                        <div class=\"text-danger position-absolute alert alert-danger rounded mb-5\">\n                            Invalid Username/Password\n                        </div>\n                    </span>\n                </div>\n            </div>\n        </div>\n        <form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\">\n\n            <div class=\"mt-5\">\n                <div class=\"form-row ml-3 mr-3 mt-5\">\n                    <div class=\"col-sm-12 mt-4 aaa\">\n                        <div class=\"input-group-append\">\n                            <label for=\"username\"><i class=\"material-icons mt-2\"><label\n                                        for=\"username\">person</label></i></label>\n                            <input type=\"text\" [ngClass]=\"[userName.dirty && userName.valid ? 'is-valid' : '',\n                            userName.dirty && userName.invalid ? 'is-invalid' : '', \n                            userName.valid || userName.invalid ? 'form-control font-20 mb-1' : '']\"\n                                placeholder=\"Enter Username\" name=\"userName\" id=\"username\"\n                                class=\"border-top-0 border-left-0 border-right-0 rounded-0\" #userName=\"ngModel\" ngModel\n                                required />\n                        </div>\n                        <span *ngIf=\"userName.dirty\">\n                            <span *ngIf=\"userName.errors?.required\" class=\"error-msg\">\n                                <div class=\"position-absolute text-danger ml-4\"> Username is required</div>\n                            </span>\n                        </span>\n\n\n                    </div>\n                </div>\n                <div class=\"form-row ml-3 mr-3\">\n                    <div class=\"col-sm-12 mt-4\">\n                        <div class=\"input-group-append\">\n                            <label for=\"firstname\"><i class=\"material-icons mt-2\"><label\n                                        for=\"password\">vpn_key</label></i></label>\n                            <input type=\"password\" [ngClass]=\"[password.dirty && password.valid ? 'is-valid' : '',\n                    password.dirty && password.invalid ? 'is-invalid' : '', \n                    password.valid || password.invalid ? 'form-control font-20 mb-1' : '']\" class=\"form-control\"\n                                placeholder=\"Enter Password\" id=\"password\" name=\"password\" #password=\"ngModel\" ngModel\n                                required class=\"border-top-0 border-left-0 border-right-0 rounded-0\" />\n                        </div>\n                        <span *ngIf=\"password.dirty\">\n                            <span *ngIf=\"password.errors?.required\" class=\"error-msg\">\n                                <div class=\"position-absolute text-danger ml-4\">Password is required</div>\n                            </span>\n                        </span>\n\n                    </div>\n                </div>\n                <div class=\"form-row mt-5 mb-5 ml-3 mr-3\">\n                    <div class=\"col-6\">\n                        <button type=\"submit\" class=\"btn btn-danger\">Login</button>\n                    </div>\n                    <div class=\"col-6\">\n                        <span class=\"text-muted float-right\">New here?<a routerLink=\"/register\">Signup</a></span>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </section>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/signup-success/signup-success.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/User/signup-success/signup-success.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\">\n    <h3 class=\"text-danger ml-3\">Congratulations!</h3>\n    <div class=\"alert alert-sucess\"><h5 >You are registered succesfully!Click on the <a routerLink=\"/login\">Login</a> to login </h5></div>\n   \n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-blood-requirement/add-blood-requirement.component.html": 
        /*!******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-blood-requirement/add-blood-requirement.component.html ***!
          \******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <section class=\"border shadow-lg rounded-lg section-margin\">\n        <h1 class=\"mt-5 ml-3 text-alignment text-danger\">Enter Requirement Details</h1>\n        <form [formGroup]=\"addRequirementForm\" (ngSubmit)=\"addRequirement(addRequirementForm)\" novalidate>\n            <div class=\"form-row ml-3 mr-3\">\n                <div class=\"col-sm-12 col-md-6 mt-4\">\n                    <div formGroupName=\"bloodGroupDivision\">\n                        <label for=\"bloodgroup\">Blood Group*</label>\n                        <select id=\"bloodgroup\" class=\"form-control\" formControlName=\"bloodGroup\" name=\"bloodGroup\"\n                            (click)=\"bloodGroupCheck($event.target.value)\" [ngClass]=\"{\n                                'border border-danger': bloodGroupEmpty && checkClick\n                              }\">\n                            <option *ngFor=\"let bg of bloodGroups\" [value]=\"bg\">{{bg}}\n                            </option>\n                        </select>\n                        <div class=\"text-danger position-absolute\" *ngIf=\"bloodGroupEmpty && checkClick\">\n                            Enter your bloodGroup!\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"col-sm-12 col-md-6  mt-4\">\n                    <label for=\"contactnumber\">Contact Number*</label>\n                    <span *ngIf=\"addRequirementForm.get('contactNo').touched;else elseBlockContactNumber\">\n                        <input type=\"text\" class=\"form-control \" placeholder=\"Enter Contact Number\" name=\"contactNo\"\n                            formControlName=\"contactNo\" id=\"contactnumber\"\n                            onkeypress=\"return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))\"\n                            [ngClass]=\"{\n                            'border border-danger': addRequirementForm.get('contactNo').errors?.required \n                            || addRequirementForm.get('contactNo').errors?.minlength || addRequirementForm.get('contactNo').errors?.maxlength,\n                            '': !addRequirementForm.get('contactNo').errors?.required  || !addRequirementForm.get('contactNo').errors?.minlength \n                            || !addRequirementForm.get('contactNo').errors?.maxlength\n                          }\" />\n\n                        <div class=\"text-danger position-absolute\"\n                            *ngIf=\"addRequirementForm.get('contactNo').errors?.minlength || addRequirementForm.get('contactNo').errors?.maxlength\">\n                            Contact Number should be of 10 digits!\n                        </div>\n                        <div class=\"text-danger position-absolute\"\n                            *ngIf=\"addRequirementForm.get('contactNo').errors?.required\">\n                            Contact Number is required\n                        </div>\n                    </span>\n                    <ng-template #elseBlockContactNumber>\n                        <input type=\"text\" class=\"form-control \" placeholder=\"Enter Contact Number\" name=\"contactNo\"\n                            formControlName=\"contactNo\" id=\"contactnumber\"\n                            onkeypress=\"return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))\" />\n                    </ng-template>\n                </div>\n            </div>\n            <div class=\"form-row ml-3 mr-3\">\n                <div class=\"col-sm-12 col-md-4  mt-4\">\n                    <div formGroupName=\"stateDivision\">\n                        <label for=\"state\">State*</label>\n                        <select id=\"state\" (change)=\"changeState($event.target.value)\"\n                            (click)=\"stateCheck($event.target.value)\" class=\"form-control\" formControlName=\"state\"\n                            name=\"state\" [ngClass]=\"{\n                                    'border border-danger': stateEmpty && stateClick\n                                  }\">\n                            <option *ngFor=\"let state of stateList\" [value]=\"state.name\"> {{state.name}}\n                            </option>\n                        </select>\n                        <div class=\"text-danger position-absolute\" *ngIf=\"stateEmpty && stateClick\">\n                            Enter State!\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-12 col-md-4 mt-4\">\n                    <div formGroupName=\"areaDivision\">\n                        <label for=\"area\">Area*</label>\n                        <select id=\"area\" class=\"form-control\" formControlName=\"area\" name=\"area\"\n                        \n                        (click)=\"areaClickFun(addRequirementForm.get('areaDivision').get('area').value)\"\n                        [ngClass]=\"{\n                            'border border-danger': areaEmpty && areaClick\n                          }\">\n                            <option *ngFor=\"let area of cities\" [value]=\"area\">{{area}}\n                            </option>\n                        </select>\n                        <div class=\"text-danger  position-absolute \"\n                            *ngIf=\"!addRequirementForm.get('stateDivision').get('state').touched && addRequirementForm.get('areaDivision').get('area').touched\">\n                            Select state first !\n                        </div>\n                        <div class=\"text-danger  position-absolute \"\n                            *ngIf=\"addRequirementForm.get('areaDivision').get('area').touched && addRequirementForm.get('stateDivision').get('state').touched \n                            && addRequirementForm.get('stateDivision').get('state').dirty && !addRequirementForm.get('areaDivision').get('area').dirty || areaClick && areaEmpty\">\n                            Area is required !\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-12 col-md-4 mt-4\">\n                    <label for=\"pincode\">Pincode*</label>\n                    <span *ngIf=\"addRequirementForm.get('pincode').touched;else elseBlockpincode\">\n                        <input type=\"number\" class=\"form-control\" placeholder=\"Enter pincode\" name=\"pincode\"\n                            formControlName=\"pincode\" id=\"pincode\" maxlength=\"6\"\n                            oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\n                            [ngClass]=\"{\n                                'border border-danger': addRequirementForm.get('pincode').errors?.required,\n                                '': !addRequirementForm.get('pincode').errors?.required \n                              }\" />\n                        <div class=\"text-danger position-absolute\"\n                            *ngIf=\"addRequirementForm.get('pincode').errors?.required\">\n                            Pincode required!\n                        </div>\n                    </span>\n                    <ng-template #elseBlockpincode>\n                        <input type=\"number\" class=\"form-control\" placeholder=\"Enter pincode\" name=\"pincode\"\n                            formControlName=\"pincode\" id=\"pincode\" maxlength=\"6\"\n                            oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\n                    </ng-template>\n                </div>\n            </div>\n\n            <div class=\"form-row mt-3 mb-5 ml-3\">\n                <div class=\"col-sm-10\">\n                    <button type=\"submit\" class=\"btn btn-danger mt-2 \"\n                        [disabled]=\"!addRequirementForm.valid || bloodGroupEmpty  || stateEmpty  \">Add\n                        requirement</button>\n                </div>\n            </div>\n        </form>\n    </section>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/availabilty/availabilty.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/availabilty/availabilty.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h2 class=\"text-white text-alignment font-size-custom-others mt-4\">In an urgency?</h2>\n    <h3 class=\"text-white text-alignment  font-size-custom-others  mt-4\">Check the avaibility of the blood you require\n    </h3>\n    <div class=\"justify-content-center d-flex mt-5\">\n        <button class=\"btn btn-danger\" routerLink=\"/blood-availability\">Check Avaibility</button>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blood-availability/blood-availability.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blood-availability/blood-availability.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <section class=\"border shadow-lg rounded-lg section-margin\">\n        <h1 class=\"mt-5 ml-3 text-alignment text-danger\">Check Blood Group Availability</h1>\n        <form class=\"text-secondary\" [formGroup]=\"bloodAvailabilityForm\" (ngSubmit)=\"search(bloodAvailabilityForm)\">\n            <div class=\"form-row  ml-3 mr-3\">\n                <div class=\"col-md-6 mt-3 \" formGroupName=\"stateDivision\">\n                    <label class=\"font-weight-bold text-red\" for=\"field-state\">State*</label>\n                    <select\n                        [ngClass]=\"[bloodAvailabilityForm.get('stateDivision').get('state').dirty ? 'is-valid' : '',\n                                bloodAvailabilityForm.get('stateDivision').get('state').touched \n                                && !bloodAvailabilityForm.get('stateDivision').get('state').dirty ? 'is-invalid' : '', \n                                (bloodAvailabilityForm.get('stateDivision').get('state').valid \n                                || bloodAvailabilityForm.get('stateDivision').get('state').invalid) ? 'form-control mb-1' : '']\"\n                        name=\"state\" id=\"field-state\" formControlName=\"state\"\n                        (change)=\"changeState($event.target.value) \" (click)=\"stateCheck($event.target.value)\">\n                        <option *ngFor=\"let state of states\" [value]=\"state.name\">{{ state.name }}</option>\n                    </select>\n                    <div class=\"text-danger font-weight-bold position-absolute small\"\n                        *ngIf=\"bloodAvailabilityForm.get('stateDivision').get('state').touched && !bloodAvailabilityForm.get('stateDivision').get('state').dirty\">\n                        State is required !\n                    </div>\n                </div>\n                <div class=\"col-md-6 mt-3 \" formGroupName=\"areaDivision\">\n                    <label class=\"font-weight-bold text-red\" for=\"field-area\">Area*</label>\n                    <select\n                        [ngClass]=\"[bloodAvailabilityForm.get('areaDivision').get('area').dirty ? 'is-valid' : '',\n                                (!bloodAvailabilityForm.get('stateDivision').get('state').touched && bloodAvailabilityForm.get('areaDivision').get('area').touched) || \n                                (bloodAvailabilityForm.get('areaDivision').get('area').touched && bloodAvailabilityForm.get('stateDivision').get('state').touched \n                                && bloodAvailabilityForm.get('stateDivision').get('state').dirty && !bloodAvailabilityForm.get('areaDivision').get('area').dirty) || areaClick && areaEmpty? 'is-invalid' : '', \n                                (bloodAvailabilityForm.get('areaDivision').get('area').valid || bloodAvailabilityForm.get('areaDivision').get('area').invalid) ? 'form-control mb-1' : '']\"\n                        name=\"area\" id=\"field-area\" formControlName=\"area\"\n                        (click)=\"areaClickFun(bloodAvailabilityForm.get('areaDivision').get('area').value)\">\n                        <option *ngFor=\"let area of cities\" [value]=\"area\">{{ area }}</option>\n                    </select>\n                    <div class=\"text-danger font-weight-bold position-absolute small\"\n                        *ngIf=\"!bloodAvailabilityForm.get('stateDivision').get('state').touched && bloodAvailabilityForm.get('areaDivision').get('area').touched\">\n                        Select state first !\n                    </div>\n                    <div class=\"text-danger font-weight-bold position-absolute small\"\n                        *ngIf=\"bloodAvailabilityForm.get('areaDivision').get('area').touched && bloodAvailabilityForm.get('stateDivision').get('state').touched \n                        && bloodAvailabilityForm.get('stateDivision').get('state').dirty && !bloodAvailabilityForm.get('areaDivision').get('area').dirty || areaClick && areaEmpty\">\n                        Area is required !\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"form-row ml-3 mr-3\">\n                <div class=\"col-md-6 mt-3 \" formGroupName=\"bloodGroupDivision\">\n                    <label class=\"font-weight-bold text-red\" for=\"field-bloodGroup\">Blood Group*</label>\n                    <select\n                        [ngClass]=\"[bloodAvailabilityForm.get('bloodGroupDivision').get('bloodGroup').dirty ? 'is-valid' : '',\n                            bloodAvailabilityForm.get('bloodGroupDivision').get('bloodGroup').touched \n                            && !bloodAvailabilityForm.get('bloodGroupDivision').get('bloodGroup').dirty ? 'is-invalid' : '', \n                            (bloodAvailabilityForm.get('bloodGroupDivision').get('bloodGroup').valid \n                            || bloodAvailabilityForm.get('bloodGroupDivision').get('bloodGroup').invalid) ? 'form-control mb-1' : '']\"\n                        name=\"bloodGroup\" id=\"field-bloodGroup\" formControlName=\"bloodGroup\">\n                        <option *ngFor=\"let bg of bloodGroup\" [value]=\"bg\">{{ bg }}</option>\n                    </select>\n                    <div class=\"text-danger font-weight-bold position-absolute small\"\n                        *ngIf=\"bloodAvailabilityForm.get('bloodGroupDivision').get('bloodGroup').touched && !bloodAvailabilityForm.get('bloodGroupDivision').get('bloodGroup').dirty\">\n                        Blood Group is required !\n                    </div>\n                </div>\n                <div class=\"col-md-6 mt-3 \">\n                    <label class=\"font-weight-bold text-red\" for=\"field-pinCode\">Pin Code*</label>\n                    <input type=\"number\"\n                        [ngClass]=\"[bloodAvailabilityForm.get('pinCode').dirty && bloodAvailabilityForm.get('pinCode').valid ? 'is-valid' : '',\n                                    bloodAvailabilityForm.get('pinCode').dirty && bloodAvailabilityForm.get('pinCode').invalid ? 'is-invalid' : '', \n                                    (bloodAvailabilityForm.get('pinCode').valid || bloodAvailabilityForm.get('pinCode').invalid) ? 'form-control mb-1' : '']\"\n                        name=\"pinCode\" id=\"field-pinCode\" placeholder=\"Enter Pin Code\" formControlName=\"pinCode\">\n                    <div class=\"text-danger font-weight-bold position-absolute small\"\n                        *ngIf=\"bloodAvailabilityForm.get('pinCode').dirty && bloodAvailabilityForm.get('pinCode').errors?.required\">\n                        Pin Code is required !\n                    </div>\n                    <div class=\"text-danger font-weight-bold position-absolute small\"\n                        *ngIf=\"bloodAvailabilityForm.get('pinCode').dirty && (bloodAvailabilityForm.get('pinCode').errors?.min || bloodAvailabilityForm.get('pinCode').errors?.max)\">\n                        Pin Code should be of 6 digits !\n                    </div>\n                </div>\n            </div>\n            <div class=\"d-flex justify-content-between form-row mt-3 mb-5 ml-3\">\n                <button type=\"submit\" class=\"btn btn-danger font-20\"\n                    [disabled]=\"!bloodAvailabilityForm.valid || \n                            !bloodAvailabilityForm.get('bloodGroupDivision').get('bloodGroup').touched \n                            || (bloodAvailabilityForm.get('bloodGroupDivision').get('bloodGroup').touched \n                            && !bloodAvailabilityForm.get('bloodGroupDivision').get('bloodGroup').dirty) ||\n                            !bloodAvailabilityForm.get('stateDivision').get('state').touched || (bloodAvailabilityForm.get('stateDivision').get('state').touched \n                            && !bloodAvailabilityForm.get('stateDivision').get('state').dirty) ||\n                            !bloodAvailabilityForm.get('areaDivision').get('area').touched \n                            || (bloodAvailabilityForm.get('areaDivision').get('area').touched && !bloodAvailabilityForm.get('areaDivision').get('area').dirty)|| areaClick && areaEmpty\">\n                    Search</button>\n            </div>\n        </form>\n        <div class=\"container d-flex justify-content-center\" *ngIf=\"show=='table'\">\n            <div class=\"well-light width-large table-responsive shadow-lg p-4 m-4\">\n                <table class=\"table table-hover font-20\">\n                    <thead class=\"text-danger bg-red text-alignment\">\n                        <tr>\n                            <th>Blood Group</th>\n                            <th>State</th>\n                            <th>Area</th>\n                            <th>Pin Code</th>\n                            <th>Contact Number</th>\n                        </tr>\n                    </thead>\n                    <tbody class=\"font-weight-bold text-alignment\">\n                        <tr *ngFor=\"let bloodAvailable of bloodAvailability\">\n                            <td>{{ bloodAvailable.bloodGroup }}</td>\n                            <td>{{ bloodAvailable.state }}</td>\n                            <td>{{ bloodAvailable.area }}</td>\n                            <td>{{ bloodAvailable.pinCode }}</td>\n                            <td>{{ bloodAvailable.contactNo }}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <div class=\"container d-flex justify-content-center\" *ngIf=\"show=='request'\">\n            <div class=\"well-light width-large shadow-lg p-4 m-4\">\n                <h6 class=\"text-red \">There is <strong>No Blood Available</strong> for above requirement !!</h6>\n                <h3 class=\"text-dark \">Want to Post the Blood Requirement ??</h3>\n                <button type=\"submit\" routerLink=\"/blood-requirement\" class=\"btn btn-danger font-20\"\n                    routerLink=\"/add-requirement\">\n                    Post Requirement</button>\n            </div>\n        </div>\n    </section>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blood-donation/blood-donation.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blood-donation/blood-donation.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <section class=\"border shadow-lg rounded-lg section-margin\" *ngIf=\"!hospitalBooking\">\n        <h1 class=\"mt-5 ml-3 text-alignment text-danger\">Enter Your Personal Details</h1>\n        <form class=\"text-secondary\" [formGroup]=\"donorRequestForm\" (ngSubmit)=\"appointmentRequest(donorRequestForm)\">\n            <div class=\"form-row  ml-3 mr-3\">\n                <div class=\"col-md-4 mt-3 \" formGroupName=\"stateDivision\">\n                    <label class=\"font-weight-bold text-red\" for=\"field-state\">State*</label>\n                    <select\n                        [ngClass]=\"[donorRequestForm.get('stateDivision').get('state').dirty  ? 'is-valid' : '',\n                                donorRequestForm.get('stateDivision').get('state').touched && !donorRequestForm.get('stateDivision').get('state').dirty  ? 'is-invalid' : '', \n                                (donorRequestForm.get('stateDivision').get('state').valid || donorRequestForm.get('stateDivision').get('state').invalid) ? 'form-control mb-1' : '']\"\n                        name=\"state\" (click)=\"stateCheck($event.target.value)\" id=\"field-state\" formControlName=\"state\"\n                        (change)=\"changeState($event.target.value)\">\n                        <option *ngFor=\"let state of states\" [value]=\"state.name\">{{ state.name }}</option>\n                    </select>\n                    <div class=\"text-danger font-weight-bold position-absolute small\"\n                        *ngIf=\"donorRequestForm.get('stateDivision').get('state').touched && !donorRequestForm.get('stateDivision').get('state').dirty\">\n                        State is required !\n                    </div>\n                </div>\n                <div class=\"col-md-4 mt-3 \" formGroupName=\"areaDivision\">\n                    <label class=\"font-weight-bold text-red\" for=\"field-area\">Area*</label>\n                    <select\n                        [ngClass]=\"[donorRequestForm.get('areaDivision').get('area').dirty ? 'is-valid' : '',\n                                (!donorRequestForm.get('stateDivision').get('state').touched \n                                && donorRequestForm.get('areaDivision').get('area').touched) || \n                                (donorRequestForm.get('areaDivision').get('area').touched && donorRequestForm.get('stateDivision').get('state').touched \n                                && donorRequestForm.get('stateDivision').get('state').dirty && !donorRequestForm.get('areaDivision').get('area').dirty) \n                                || areaClick && areaEmpty  ? 'is-invalid' : '', \n                                (donorRequestForm.get('areaDivision').get('area').valid || donorRequestForm.get('areaDivision').get('area').invalid) ? 'form-control mb-1' : '']\"\n                        name=\"area\" id=\"field-area\"\n                        (click)=\"areaClickFun(donorRequestForm.get('areaDivision').get('area').value)\"\n                        formControlName=\"area\">\n                        <option *ngFor=\"let area of cities\" [value]=\"area\">{{ area }}</option>\n                    </select>\n                    <div class=\"text-danger font-weight-bold position-absolute small\"\n                        *ngIf=\"!donorRequestForm.get('stateDivision').get('state').touched && donorRequestForm.get('areaDivision').get('area').touched\">\n                        Select state first !\n                    </div>\n                    <div class=\"text-danger font-weight-bold position-absolute small\"\n                        *ngIf=\"donorRequestForm.get('areaDivision').get('area').touched && donorRequestForm.get('stateDivision').get('state').touched \n                        && donorRequestForm.get('stateDivision').get('state').dirty && !donorRequestForm.get('areaDivision').get('area').dirty || areaClick && areaEmpty \">\n                        Area is required !\n                    </div>\n\n                </div>\n                <div class=\"col-md-4 mt-3 \">\n                    <label class=\"font-weight-bold text-red\" for=\"field-pinCode\">Pin Code*</label>\n                    <input type=\"number\"\n                        [ngClass]=\"[donorRequestForm.get('pinCode').dirty && donorRequestForm.get('pinCode').valid ? 'is-valid' : '',\n                                    donorRequestForm.get('pinCode').dirty && donorRequestForm.get('pinCode').invalid ? 'is-invalid' : '', \n                                    (donorRequestForm.get('pinCode').valid || donorRequestForm.get('pinCode').invalid) ? 'form-control mb-1' : '']\"\n                        name=\"pinCode\" id=\"field-pinCode\" placeholder=\"Enter Pin Code\" formControlName=\"pinCode\">\n                    <div class=\"text-danger font-weight-bold position-absolute small\"\n                        *ngIf=\"donorRequestForm.get('pinCode').dirty && donorRequestForm.get('pinCode').errors?.required\">\n                        Pin Code is required !\n                    </div>\n                    <div class=\"text-danger font-weight-bold position-absolute small\"\n                        *ngIf=\"donorRequestForm.get('pinCode').dirty && (donorRequestForm.get('pinCode').errors?.min || donorRequestForm.get('pinCode').errors?.max)\">\n                        Pin Code should be of 6 digits !\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"form-row ml-3 mr-3\">\n                <div class=\"col-md-6 mt-3 \" formGroupName=\"bloodGroupDivision\">\n                    <label class=\"font-weight-bold text-red\" for=\"field-bloodGroup\">Blood Group*</label>\n                    <select\n                        [ngClass]=\"[donorRequestForm.get('bloodGroupDivision').get('bloodGroup').dirty ? 'is-valid' : '',\n                            donorRequestForm.get('bloodGroupDivision').get('bloodGroup').touched && !donorRequestForm.get('bloodGroupDivision').get('bloodGroup').dirty ? 'is-invalid' : '', \n                            (donorRequestForm.get('bloodGroupDivision').get('bloodGroup').valid || donorRequestForm.get('bloodGroupDivision').get('bloodGroup').invalid) ? 'form-control mb-1' : '']\"\n                        name=\"bloodGroup\" id=\"field-bloodGroup\" formControlName=\"bloodGroup\">\n                        <option *ngFor=\"let bg of bloodGroup\" [value]=\"bg\">{{ bg }}</option>\n                    </select>\n                    <div class=\"text-danger font-weight-bold position-absolute small\"\n                        *ngIf=\"donorRequestForm.get('bloodGroupDivision').get('bloodGroup').touched && !donorRequestForm.get('bloodGroupDivision').get('bloodGroup').dirty\">\n                        Blood Group is required !\n                    </div>\n                </div>\n                <div class=\"col-sm-12 col-md-6  mt-3\">\n                    <label class=\"font-weight-bold text-red\" for=\"field-contactNo\">Contact Number*</label>\n                    <input type=\"text\"\n                        [ngClass]=\"[donorRequestForm.get('contactNo').dirty && donorRequestForm.get('contactNo').valid ? 'is-valid' : '',\n                            donorRequestForm.get('contactNo').dirty && donorRequestForm.get('contactNo').invalid ? 'is-invalid' : '', \n                            (donorRequestForm.get('contactNo').valid || donorRequestForm.get('contactNo').invalid) ? 'form-control mb-1' : '']\"\n                        name=\"contactNo\" id=\"field-contactNo\" placeholder=\"Enter Contact Number\"\n                        formControlName=\"contactNo\">\n                    <div class=\"text-danger font-weight-bold position-absolute small\"\n                        *ngIf=\"donorRequestForm.get('contactNo').dirty && donorRequestForm.get('contactNo').errors?.required\">\n                        Contact Number is required !\n                    </div>\n                    <div class=\"text-danger font-weight-bold position-absolute small\"\n                        *ngIf=\"donorRequestForm.get('contactNo').dirty && !donorRequestForm.get('contactNo').errors?.pattern \n                        && (donorRequestForm.get('contactNo').errors?.minlength || donorRequestForm.get('contactNo').errors?.maxlength)\">\n                        Contact number should be of 10 digits !\n                    </div>\n                    <div class=\"text-danger font-weight-bold position-absolute small\"\n                        *ngIf=\"donorRequestForm.get('contactNo').dirty && donorRequestForm.get('contactNo').errors?.pattern\">\n                        Contact number should contains number only !\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"d-flex justify-content-between form-row mt-3 mb-5 ml-3\">\n                <button type=\"submit\" class=\"btn btn-danger font-20\"\n                    [disabled]=\"!donorRequestForm.valid || \n                            !donorRequestForm.get('bloodGroupDivision').get('bloodGroup').touched \n                            || (donorRequestForm.get('bloodGroupDivision').get('bloodGroup').touched && !donorRequestForm.get('bloodGroupDivision').get('bloodGroup').dirty) ||\n                            !donorRequestForm.get('stateDivision').get('state').touched || \n                            (donorRequestForm.get('stateDivision').get('state').touched && !donorRequestForm.get('stateDivision').get('state').dirty) ||\n                            !donorRequestForm.get('areaDivision').get('area').touched || (donorRequestForm.get('areaDivision').get('area').touched && \n                            !donorRequestForm.get('areaDivision').get('area').dirty)  || areaClick && areaEmpty || areaEmpty\">\n                    Request</button>\n            </div>\n        </form>\n    </section>\n    <div *ngIf=\"bookAppointment\">\n        <app-book-hospital [hospitalBookingRequest]=\"hospitalBookingRequest\"\n            (hospitalBooked)=\"isHospitalBooked($event)\"></app-book-hospital>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blood-request/blood-request.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blood-request/blood-request.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h2 class=\"text-white text-alignment font-size-custom-others mt-4\">In need of blood?</h2>\n    <h3 class=\"text-white text-alignment font-size-custom-others mt-4\">You can request the blood group you require by\n        clicking the button below</h3>\n    <div class=\"justify-content-center d-flex mt-5\">\n        <a class=\"btn btn-danger\" routerLink=\"/add-requirement\">Request</a>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blood-requirement-addition-success/blood-requirement-addition-success.component.html": 
        /*!********************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blood-requirement-addition-success/blood-requirement-addition-success.component.html ***!
          \********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\">\n        <h3 class=\"text-danger ml-3\">Congratulations!</h3>\n        <h5 class=\"alert alert-sucess\">Your blood requirements are posted successfully on the home page.Click on<a\n                        routerLink=\"/home\"> \"Home Page\"</a> to see your request</h5>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/book-hospital/book-hospital.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-hospital/book-hospital.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <section class=\"border shadow-lg rounded-lg section-margin\">\n        <h1 class=\"mt-5 ml-3 text-alignment text-danger\">Book Appointment To Donate Blood</h1>\n        <ul class=\"list-group pt-2 mt-2\" *ngIf=\"sucessMsg\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item list-group-item-danger bg-success\">\n                    <h3 class=\"text-white\">Slot booked successfully, you are going to save a life</h3>\n                </li>\n            </ul>\n        </ul>\n        <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"slotTakenFlag\">\n            <strong>Sorry</strong>, please try a different slot\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"slotBookedFlag()\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <form *ngIf=\"!sucessMsg\" [formGroup]=\"hospitalForm\" (ngSubmit)=\"bookAppointment(hospitalForm)\" class=\"mt-3\">\n            <div class=\"form-row mb-2 ml-3 mr-3\">\n                <div class=\"col-sm-12 col-md-12 col-lg-6 mb-3 \">\n                    <label for=\"hospitalName\" class=\"h5 font-weight-normal pb-2 text-danger\">Hospital Name *</label>\n                    <input type=\"text\" class=\"form-control\" id=\"hospitalName\" name=\"hospitalName\"\n                        (keyup)=\"checkLength(hospitalForm.get('hospitalName').value)\"\n                        placeholder=\"Enter Hospital Name ..\" formControlName=\"hospitalName\" [ngClass]=\"[!hospitalNameFlag && hospitalForm.get('hospitalName').dirty   ? 'is-valid' : ''\n                                ,hospitalNameFlag && hospitalForm.get('hospitalName').dirty ||  hospitalForm.get('hospitalName').errors?.required && hospitalForm.get('hospitalName').touched \n                                 ? 'is-invalid':'']\">\n                    <div class=\"text-danger font-weight-normal position-absolute small ml-2 mb-2\"\n                        *ngIf=\"hospitalForm.get('hospitalName').errors?.required && hospitalForm.get('hospitalName').dirty \">\n                        Hospital Name Required\n                    </div>\n                    <div class=\"text-danger font-weight-normal position-absolute small ml-2\" *ngIf=\" hospitalNameFlag \">\n                        Hospital Length Must be smaller than 15\n                    </div>\n                </div>\n\n                <div class=\"col-sm-12 col-md-12 col-lg-6 \">\n                    <label for=\"city\" class=\"h5 font-weight-normal pb-2 text-danger\">City *</label>\n                    <input type=\"text\" class=\"form-control\" id=\"city\" name=\"city\" formControlName=\"city\"\n                        (keyup)=\"checkCityLength(hospitalForm.get('city').value)\" [ngClass]=\"[!cityFlag && hospitalForm.get('city').dirty   ? 'is-valid' : ''\n                            ,cityFlag && hospitalForm.get('city').dirty \n                            ||hospitalForm.get('city').errors?.required && hospitalForm.get('city').touched \n                             ?'is-invalid':'']\">\n                    <div class=\"text-danger font-weight-normal position-absolute small ml-2 mb-2\"\n                        *ngIf=\"hospitalForm.get('city').errors?.required && hospitalForm.get('city').dirty \">\n                        City is Required\n                    </div>\n                    <div class=\"text-danger font-weight-normal position-absolute small ml-2\" *ngIf=\" cityFlag \">\n                        City Length Must be smaller than 15\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-row mb-2 ml-3 mr-3\">\n                <div class=\"form-group col-sm-12 col-md-12 col-lg-6 \">\n                    <label for=\"date\" class=\"h5 font-weight-normal text-danger pb-2\">\n                        Date\n                    </label>\n                    <input type=\"text\" bsDatepicker id=\"date\" class=\"form-control\" width=\"100%\" formControlName=\"date\"\n                        [ngClass]=\"[hospitalForm.get('date').dirty  \n                                && hospitalForm.get('date').touched ? 'is-valid' : ''\n                               , hospitalForm.get('date').errors?.required && hospitalForm.get('date').touched  ? 'is-invalid':'']\" />\n                    <div class=\"small text-danger position-absolute ml-2\"\n                        *ngIf=\"hospitalForm.get('date').errors?.required && hospitalForm.get('date').touched\">\n                        Date can't be Empty\n                    </div>\n                </div>\n                <div class=\"form-group col-sm-12 col-md-12 col-lg-6 \" formGroupName=\"timeGroup\">\n                    <label for=\"city\" class=\"h5 font-weight-normal pb-2 text-danger\">Time *</label>\n                    <select class=\"form-control\" id=\"city\" formControlName=\"time\" [ngClass]=\"[hospitalForm.get('timeGroup').get('time').dirty  ? 'is-valid' : '',\n                            hospitalForm.get('timeGroup').get('time').touched \n                            && !hospitalForm.get('timeGroup').get('time').dirty  \n                            \n                              ? 'is-invalid' : '', \n                            (hospitalForm.get('timeGroup').get('time').valid \n                            || hospitalForm.get('timeGroup').get('time').invalid) ? 'form-control mb-1' : '']\">>\n                        <option value=\"true\" disabled [selected]=\"true\"> Select Time</option>\n                        <option *ngFor=\"let time of timeGroup\" [value]=\"time\" [selected]=\"false\">\n                            {{time}}\n                        </option>\n                    </select>\n                    <div class=\"small text-danger position-absolute ml-2\" *ngIf=\" hospitalForm.get('timeGroup').get('time').touched \n                            && !hospitalForm.get('timeGroup').get('time').dirty  \n                            && hospitalForm.get('timeGroup').get('time').errors?.required\">\n                        Please select the Time-slot.\n                    </div>\n                </div>\n            </div>\n            <div class=\"mt-3 mb-5 ml-3\">\n                <button type=\"submit\" [disabled]=\"!hospitalForm.valid\" class=\"btn btn-danger font-20\">\n                    Book Appointment</button>\n            </div>\n        </form>\n    </section>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donate/donate.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donate/donate.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h2 class=\"text-white text-alignment  font-size-custom mt-4\">Do something good today! Donate blood!</h2>\n    <h5 class=\"text-white text-alignment font-size-custom  mt-4\">According to a recent World\n        Health Organisation (WHO) report, only nine million units are collected annually, while the requirement is for\n        12 million units.</h5>\n    <span class=\" mt-5 justify-content-center d-flex\">\n        <a class=\" mr-3 btn btn-danger font-size-custom\" routerLink=\"/register\" *ngIf=\"!isLogin()\">Register</a>\n\n        <div class=\"btn btn-danger\" routerLink=\"/login\" *ngIf=\"!isLogin()\">Login</div>\n        <div class=\"btn btn-danger\" routerLink=\"/donation-request\" *ngIf=\"isLogin()\">Hi {{getUserName()}}! Donate Now\n        </div>\n    </span>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/experiences/experiences.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/experiences/experiences.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h2 class=\"text-white text-alignment font-size-custom-others mt-4\">Share your Experiences</h2>\n    <h3 class=\"text-white text-alignment font-size-custom-others mt-4\">If you have donated blood or have some experience\n        related to it you can share it here</h3>\n    <div class=\"justify-content-center d-flex mt-5\">\n        <button class=\"btn btn-danger\" (click)=\"goToExperiences()\">Share Now!</button>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.component.html ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"p-3 \">\r\n    <div class=\"row faq-margin\" *ngIf=\"getUserName()!='admin'\">\r\n        <div class=\"col-lg-6 pl-0 pr-0 \">\r\n            <div class=\"container pl-0 pr-0\">\r\n                <div class=\"accordion \" id=\"accordionExample\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header bg-danger\" id=\"headingOne\">\r\n                            <h1 class=\"mb-0\">\r\n                                <button class=\"btn btn-link text-white  \" type=\"button\" data-toggle=\"collapse\"\r\n                                    data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                                    <span class=\"form-row\">\r\n                                        <h4 class=\"text-white text-alignment\"><i\r\n                                                class=\"fa fa-question-circle mt-2 mr-2\"></i>Frequently Asked Questions\r\n                                        </h4>\r\n                                    </span>\r\n                                </button>\r\n                            </h1>\r\n                        </div>\r\n                    </div>\r\n                    <div id=\"collapseOne\" class=\"collapse show \" data-parent=\"#accordionExample\">\r\n                        <div class=\"accordion container mt-3 pr-0 \" id=\"accordionExample2\">\r\n                            <div class=\"card \" *ngFor=\"let x of faqArray\">\r\n                                <div class=\"card-header nav-color  p-1  test-scroll\" id=\"heading\">\r\n                                    <h1 class=\"mb-0 justify-content-left d-flex\">\r\n\r\n                                        <button class=\"btn btn-link text-danger form-row \" type=\"button\"\r\n                                            data-toggle=\"collapse\" [attr.data-target]=\"'#id'+ x.id\">\r\n                                            {{x.question}}\r\n                                            <div class=\"form-row text-dark pl-1\">\r\n                                                <small> Qusetion id : {{x.id}}</small>\r\n                                            </div>\r\n                                        </button>\r\n\r\n                                    </h1>\r\n                                </div>\r\n\r\n                                <div [attr.id]=\"'id' + x.id\" class=\"collapse test-scroll\"\r\n                                    data-parent=\"#accordionExample2\">\r\n                                    <div class=\"card-body\">\r\n\r\n                                        {{x.answer}}\r\n\r\n\r\n\r\n\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-6 mt-5\">\r\n            <div class=\"container pl-0 pr-0 mt-5\">\r\n                <section class=\"border shadow-lg rounded-lg faq-section-margin p-5\">\r\n                    <h1 class=\"text-danger\">Can't see the question you want?Ask your own!</h1>\r\n                    <div *ngIf=\"!answerSuccess\">\r\n                        <form [formGroup]=\"faqForm\" (ngSubmit)=\"postQuestion(faqForm)\">\r\n                            <textarea class=\"form-row form-control ml-1 pr-0\" formControlName=\"question\"></textarea>\r\n                            <button class=\"btn btn-danger mt-3 ml-1\" *ngIf=\"isLoggedIn()\">Post Question</button>\r\n                            <a class=\"btn btn-danger mt-3 ml-1\" *ngIf=\"!isLoggedIn()\" routerLink=\"/login\">Post\r\n                                Question</a>\r\n                        </form>\r\n                    </div>\r\n                    <div *ngIf=\"answerSuccess\" class=\"alert alert-success\">\r\n                        Question posted Successfully!\r\n                    </div>\r\n                </section>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"row faq-margin\" *ngIf=\"getUserName()=='admin'\">\r\n        <div class=\"col-sm-12  col-lg-12 \">\r\n            <div class=\"container\">\r\n\r\n                <div class=\"accordion \" id=\"accordionExample\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header bg-danger\" id=\"headingOne\">\r\n                            <h1 class=\"mb-0\">\r\n                                <button class=\"btn btn-link text-white  \" type=\"button\" data-toggle=\"collapse\"\r\n                                    data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                                    <h4 class=\"text-white text-alignment\">Frequently Asked Questions To Answer</h4>\r\n                                </button>\r\n                            </h1>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"alert alert-danger mt-2\" *ngIf=\"isEmpty()\">\r\n                        No questions to answer!\r\n                    </div>\r\n                    <div *ngIf=\"answerPosted;else elseBlock\" class=\"alert alert-success mt-3\">\r\n                        Answer posted sucessfullly\r\n                    </div>\r\n                    <ng-template #elseBlock>\r\n                        <div id=\"collapseOne\" class=\"collapse show \" data-parent=\"#accordionExample\">\r\n                            <div class=\"accordion container mt-3  \" id=\"accordionExample2\">\r\n                                <div class=\"card \" *ngFor=\"let x of faqArray\">\r\n                                    <div class=\"card-header nav-color  p-1  test-scroll\" id=\"heading\">\r\n                                        <h1 class=\"mb-0 justify-content-left d-flex\">\r\n\r\n                                            <button class=\"btn btn-link text-danger form-row \" type=\"button\"\r\n                                                data-toggle=\"collapse\" [attr.data-target]=\"'#id'+ x.id\">\r\n                                                {{x.question}}\r\n                                                <div class=\"form-row text-dark pl-1\">\r\n                                                    <small> Qusetion id : {{x.id}}</small>\r\n                                                </div>\r\n                                            </button>\r\n\r\n                                        </h1>\r\n                                    </div>\r\n\r\n                                    <div [attr.id]=\"'id' + x.id\" class=\"collapse test-scroll\"\r\n                                        data-parent=\"#accordionExample2\">\r\n                                        <div class=\"card-body\">\r\n                                            <div *ngIf=\"getUserName()!='admin'\">\r\n                                                {{x.answer}}\r\n                                            </div>\r\n                                            <div *ngIf=\"x.answer==null && !(answerQuestion  && faqid==x.id) \">\r\n                                                <button class=\"btn btn-danger\" (click)=\"giveAnswer(x)\">Post\r\n                                                    Answer!</button>\r\n                                            </div>\r\n                                            <div *ngIf=\"answerQuestion  && faqid==x.id && !answerPosted\">\r\n                                                <form [formGroup]=\"answerFaqForm\"\r\n                                                    (ngSubmit)=\"answerFaqFunction(answerFaqForm)\">\r\n                                                    <textarea class=\"form-control\" formControlName=\"answer\"></textarea>\r\n                                                    <button class=\"btn btn-danger mt-1\">Post Answer!</button>\r\n\r\n                                                </form>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ng-template>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg nav-color navbar-dark  extra-margin\">\n    <a class=\"navbar-brand text-danger\" routerLink=\"/home\">\n        <i class=\"fa fa-tint text-danger\"></i> Online Blood Bank System\n    </a>\n    <button class=\"navbar-toggler custom-toggler \" type=\"button\" data-toggle=\"collapse\"\n        data-target=\"#collapsibleNavbar\">\n        <span class=\"navbar-toggler-icon \"></span>\n    </button>\n    <div class=\"collapse navbar-collapse \" id=\"collapsibleNavbar\">\n        <ul class=\"navbar-nav ml-auto flex-nowrap \">\n            <li class=\"nav-item\">\n                <a class=\"nav-link m-2 text-white text-danger\" routerLink=\"/home\">Home</a>\n            </li>\n            <span *ngIf=\"isLoggedIn()\">\n                <li class=\"nav-item \">\n                    <p class=\"nav-link m-2 text-danger\" href=\"#\"><i\n                            class=\"material-icons navbar-logo-style mr-1\">person</i>{{getUserName()}}</p>\n                </li>\n            </span>\n            <span *ngIf=\"!isLoggedIn()\">\n                <li class=\"nav-item\">\n                    <button class=\"nav-link m-2 text-white btn btn-link text-danger\" routerLink=\"/login\">Login</button>\n                </li>\n            </span>\n            <span *ngIf=\"!isLoggedIn()\">\n                <li class=\"nav-item\">\n                    <button class=\"nav-link m-2 text-white btn btn-link text-danger\"\n                        routerLink=\"/register\">Register</button>\n                </li>\n            </span>\n            <span *ngIf=\"isLoggedIn() && getUserName() !='admin'\">\n                <li class=\"nav-item\"><button class=\"nav-link m-2 text-danger btn btn-link \"\n                        (click)=\"viewQuestions(getUserName())\">My Questions</button></li>\n            </span>\n            <span *ngIf=\"isLoggedIn() && getUserName() !='admin'\">\n                <li class=\"nav-item\"><button [routerLink]=\"['/notifications','true']\"\n                        class=\"nav-link m-2 text-danger btn btn-link\">Notifications</button></li>\n            </span>\n            <span *ngIf=\"isLoggedIn() && getUserName() == 'admin'\">\n                <li class=\"nav-item\"><button routerLink=\"/check-availability\" class=\"nav-link m-2 text-danger btn btn-link \">Check\n                        Availability</button></li>\n\n            </span>\n            <span *ngIf=\"getUserName() != 'admin'\">\n                <li class=\"nav-item\"><button class=\"nav-link m-2 text-danger btn btn-link \"\n                        (click)=\"showTips()\">Tips</button></li>\n            </span>\n            <span *ngIf=\"isLoggedIn()\">\n                <li class=\"nav-item\"><button class=\"nav-link m-2 text-danger btn btn-link \"\n                        (click)=\"logoutUser()\">Logout</button></li>\n            </span>\n        </ul>\n    </div>\n</nav>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron \">\n    <div class=\"container con container-size\">\n        <div class=\"row\">\n            <div class=\"col-3 justify-content-center d-flex font-size-custom\"><a\n                    [routerLink]=\"['/home', {outlets: {'customoutlet': ['donate']}}]\" class=\"text-white\">Donate</a>\n            </div>\n            <div class=\"col-3 justify-content-center d-flex font-size-custom\"><a\n                    [routerLink]=\"['/home', {outlets: {'customoutlet': ['experiences']}}]\"\n                    class=\"text-white\">Experiences</a></div>\n            <div class=\"col-3 justify-content-center d-flex font-size-custom\"><a\n                    [routerLink]=\"['/home', {outlets: {'customoutlet': ['tips']}}]\" class=\"text-white\">Tips</a></div>\n            <div class=\"col-3 justify-content-center d-flex font-size-custom\"><a\n                    [routerLink]=\"['/home', {outlets: {'customoutlet': ['availability']}}]\" class=\"text-white\">Check\n                    availability</a>\n            </div>\n        </div>\n        <div>\n            <router-outlet name=\"customoutlet\"></router-outlet>\n        </div>\n\n\n    </div>\n</div>\n<app-view-all-blood-requirements></app-view-all-blood-requirements>\n<div *ngIf=\"notificationStatus\" class=\"text-alignment\">\n    <a [routerLink]=\"['/notifications','true']\">\n        <h3 class=\"text-danger\">\n            New Notifications\n        </h3>\n    </a>\n\n</div>\n\n<div class=\"row mr-3 ml-3 pr-0\">\n    <div class=\"col p-0 \">\n        <h2 class=\"text-alignment  \">Why to donate blood?</h2>\n        <h5 class=\"text-alignment\">Giving blood to other save lives</h5>\n        <div class=\"justify-content-center d-flex\"><button class=\"btn btn-danger\" *ngIf=\"isLogin()\"\n                routerLink=\"/donation-request\">Donate</button></div>\n        <div class=\"justify-content-center d-flex\"><button class=\"btn btn-danger\" *ngIf=\"!isLogin()\"\n                routerLink=\"/register\">Register</button></div>\n    </div>\n\n    <div class=\"col p-0 d-none d-lg-block image-alignment p-0\">\n        <img\n            src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQmTtHlkgYOW0qmfVvtuzYUJ7us0LiTXRoMz7dqSiPN0QHmB6u\">\n    </div>\n\n</div>\n<div class=\"row mr-3 ml-3\">\n    <div class=\"col p-0 image-alignment d-none d-lg-block\">\n        <img\n            src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGbBuG-hWbYh66Y5eJEVPeqYo5tAPo75kHzg8XgeDrlVgA966M\">\n    </div>\n    <div class=\"col\">\n        <h2 class=\"text-alignment  mt-5\">Any Experiences to Share?</h2>\n        <h5 class=\"text-alignment \">Share your experiences related to blood donation</h5>\n        <div class=\"justify-content-center d-flex\"><button class=\"btn btn-danger\"\n                routerLink=\"/post-donor-experience\">Share now</button></div>\n    </div>\n</div>\n<div class=\"row mr-3 ml-3\">\n    <div class=\"col d-none p-0 d-lg-block mt-5\" *ngIf=\"getUsername()!='admin'\">\n        <h2 class=\"text-alignment  mt-5\">Have doubts on Blood Donation?</h2>\n        <h5 class=\"text-alignment\">Clear them out by read our FAQs.</h5>\n        <div class=\"text-alignment\"><button class=\"btn btn-danger\" routerLink=\"/faq\">FAQs</button></div>\n    </div>\n    <div class=\"col d-none p-0 d-lg-block mt-5\" *ngIf=\"getUsername()=='admin'\">\n        <h2 class=\" mt-5 text-alignment\">Answer the FAQ'S</h2>\n        <h5 class=\"text-alignment\">Answer the queries which are asked by the donors</h5>\n        <div class=\"text-alignment\"><a class=\"btn btn-danger\" routerLink=\"/faq\">Answer FAQs!</a></div>\n    </div>\n    <div class=\"col p-0 d-lg-none\" *ngIf=\"getUsername()!='admin'\">\n        <h2 class=\" mt-5 text-alignment\">Have doubts on Blood Donation</h2>\n        <h5 class=\"text-alignment\">Clear them out by asking our experts</h5>\n        <div class=\"text-alignment\"><a class=\"btn btn-danger\" routerLink=\"/faq\">Ask A\n                Question</a></div>\n    </div>\n    <div class=\"col p-0 d-lg-none\" *ngIf=\"getUsername()=='admin'\">\n        <h2 class=\" mt-5 text-alignment\">Answer the FAQ'S</h2>\n        <h5 class=\"text-alignment\">Answer the queries which are asked by the donors</h5>\n        <div class=\"text-alignment\"><a class=\"btn btn-danger\" routerLink=\"/faq\">Answer FAQs!</a></div>\n    </div>\n\n    <div class=\"col p-0 image-alignment d-none d-lg-block\">\n        <img\n            src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvO8OtJXu16aXOX0ACgUhdch_WY8MZfR8FcWN6jfJBAMjo-5OV\">\n    </div>\n</div>\n<div class=\"row mr-3 ml-3\">\n    <div class=\"col p-0 image-alignment d-none d-lg-block\">\n        <img\n            src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbLTv_JI-g594HrUkyB1oIrh3kNVzT5iD8zqk3cH9xV9Mf6DNf\">\n    </div>\n    <div class=\"col p-0\">\n        <h2 class=\"justify-content-center d-flex   mt-5\">Require blood?</h2>\n        <h5 class=\"text-alignment\">Check avalaibilty for the blood group you require</h5>\n        <div class=\"justify-content-center d-flex\" routerLink=\"/blood-availability\"><button class=\"btn btn-danger\">Check\n                avalaibilty</button></div>\n    </div>\n</div>\n<app-view-all-donor-experiences></app-view-all-donor-experiences>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\">\n    <div class=\"card\">\n        <div class=\"card-header bg-danger\" id=\"headingOne\">\n            <h1 class=\"mb-0 text-alignment text-white\">\n                Notifications\n            </h1>\n        </div>\n    </div>\n    <div class=\"alert alert-danger mt-2\" *ngIf=\"isEmpty()\">\n        You don't have any notifications!\n    </div>\n    <ul class=\"list-group\">\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\"\n            *ngFor=\"let notifications of  bloodNotifications\">\n\n            {{notifications.notification}}\n            <div *ngIf=\"!notifications.status\">\n                <span class=\"badge badge-danger badge-pill m-1\">**New**</span>\n            </div>\n            <button class=\"btn btn-link ml-auto text-danger\" (click)=\"removeNotifications(notifications.id)\">\n                Remove</button>\n        </li>\n    </ul>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post-donor-experience/post-donor-experience.component.html": 
        /*!******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post-donor-experience/post-donor-experience.component.html ***!
          \******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <section class=\"border shadow-lg rounded-lg section-margin\">\n        <h1 class=\"mt-5 ml-3 text-alignment text-danger\">Share your Experience!</h1>\n        <div *ngIf=\"!shareStatus\">\n            <form class=\"text-secondary\" [formGroup]=\"donorExperienceForm\" (ngSubmit)=\"share(donorExperienceForm)\">\n                <div class=\"row font-20 ml-3 mr-3\">\n                    <div class=\"col-md-6 mt-3 form-group\">\n                        <label class=\"font-weight-bold text-red\" for=\"field-hospitalName\">Hospital Name*</label>\n                        <input type=\"text\"\n                            [ngClass]=\"[donorExperienceForm.get('hospitalName').dirty && donorExperienceForm.get('hospitalName').valid ? 'is-valid' : '',\n                            donorExperienceForm.get('hospitalName').dirty && donorExperienceForm.get('hospitalName').invalid ? 'is-invalid' : '', \n                            (donorExperienceForm.get('hospitalName').valid || donorExperienceForm.get('hospitalName').invalid) ? 'form-control mb-1' : '']\"\n                            name=\"hospitalName\" id=\"field-hospitalName\" placeholder=\"Enter Hospital Name\"\n                            formControlName=\"hospitalName\">\n                        <div class=\"text-danger font-weight-bold position-absolute small\"\n                            *ngIf=\"donorExperienceForm.get('hospitalName').dirty && donorExperienceForm.get('hospitalName').errors?.required\">\n                            Hospital Name is required !\n                        </div>\n                        <div class=\"text-danger font-weight-bold position-absolute small\" *ngIf=\"donorExperienceForm.get('hospitalName').dirty && (donorExperienceForm.get('hospitalName').errors?.minlength \n                            || donorExperienceForm.get('hospitalName').errors?.maxlength)\">\n                            Length should be between 2 & 15 !\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 mt-3 form-group\">\n                        <label class=\"font-weight-bold text-red\" for=\"field-city\">City*</label>\n                        <input type=\"text\"\n                            [ngClass]=\"[donorExperienceForm.get('city').dirty && donorExperienceForm.get('city').valid ? 'is-valid' : '',\n                            donorExperienceForm.get('city').dirty && donorExperienceForm.get('city').invalid ? 'is-invalid' : '', \n                            (donorExperienceForm.get('city').valid || donorExperienceForm.get('city').invalid) ? 'form-control mb-1' : '']\"\n                            name=\"city\" id=\"field-city\" placeholder=\"Enter City\" formControlName=\"city\">\n                        <div class=\"text-danger font-weight-bold position-absolute small\"\n                            *ngIf=\"donorExperienceForm.get('city').dirty && donorExperienceForm.get('city').errors?.required\">\n                            City is required !\n                        </div>\n                        <div class=\"text-danger font-weight-bold position-absolute small\"\n                            *ngIf=\"donorExperienceForm.get('city').dirty && (donorExperienceForm.get('city').errors?.minlength || donorExperienceForm.get('city').errors?.maxlength)\">\n                            Length should be between 2 & 15 !\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row font-20 ml-3 mr-3\">\n                    <div class=\"col-md-12 mt-3 form-group\">\n                        <label class=\"font-weight-bold text-red\" for=\"field-feedbackComments\">Feedback Comments*</label>\n                        <textarea\n                            [ngClass]=\"[donorExperienceForm.get('feedbackComments').dirty && donorExperienceForm.get('feedbackComments').valid ? 'is-valid' : '',\n                        donorExperienceForm.get('feedbackComments').dirty && donorExperienceForm.get('feedbackComments').invalid ? 'is-invalid' : '', \n                        (donorExperienceForm.get('feedbackComments').valid || donorExperienceForm.get('feedbackComments').invalid) ? 'form-control mb-1' : '']\"\n                            name=\"feedbackComments\" rows=\"3\" id=\"field-feedbackComments\"\n                            formControlName=\"feedbackComments\">\n                    </textarea>\n                        <div class=\"text-danger font-weight-bold position-absolute small\"\n                            *ngIf=\"donorExperienceForm.get('feedbackComments').dirty && donorExperienceForm.get('feedbackComments').errors?.required\">\n                            Feedback Comments is required !\n                        </div>\n                        <div class=\"text-danger font-weight-bold position-absolute small\" *ngIf=\"donorExperienceForm.get('feedbackComments').dirty && (donorExperienceForm.get('feedbackComments').errors?.minlength \n                            || donorExperienceForm.get('feedbackComments').errors?.maxlength)\">\n                            Length should be between 2 & 15 !\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-row mt-3 mb-5 ml-3 \">\n                    <button type=\"submit\" class=\"btn btn-danger font-weight-bold font-20\"\n                        [disabled]=\"!donorExperienceForm.valid\">\n                        Share</button>\n                </div>\n            </form>\n        </div>\n\n        <div class=\"alert alert-success ml-3 mr-3\" *ngIf=\"shareStatus\">\n            Experience details saved successfully! Go to <a routerLink=\"/home\">Home</a> To view\n        </div>\n\n    </section>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/route-to-tips/route-to-tips.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/route-to-tips/route-to-tips.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h2 class=\"text-white text-alignment  font-size-custom mt-4\">Not sure about donating blood?</h2>\n    <h3 class=\"text-white text-alignment font-size-custom  mt-4\">Click on the button below to beat the myths about\n        donating blood.Read about the do's and don'ts before the blood donation.</h3>\n    <div class=\"justify-content-center d-flex mt-5\">\n        <a class=\"btn btn-danger\" routerLink=\"/tips\">Show Tips</a>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-available-units/show-available-units.component.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show-available-units/show-available-units.component.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\">\n    <div class=\"alert alert-success\" *ngIf=\"notified\">\n        Notification sent successfully!!\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header bg-danger\" id=\"headingOne\">\n            <h1 class=\"mb-0 text-alignment text-white\">\n\n                Blood Unit Count\n            </h1>\n        </div>\n    </div>\n    <ul class=\"list-group\">\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\"\n            *ngFor=\"let availabeBloodUnits of availableUnits\">\n            <div class=\"\"> BloodGroup : <b> {{availabeBloodUnits.bloodGroup}} </b></div>\n            <div class=\" ml-3\"> Avaialble blood units : <b> {{availabeBloodUnits.count}}</b></div>\n            <div *ngIf=\"availabeBloodUnits.count < 2\">\n                <span class=\"badge badge-danger badge-pill mt-1 mb-1 mr-1 ml-2\">**Low**</span>\n            </div>\n            <button class=\"btn btn-danger rounded-lg ml-auto text-white\"\n                (click)=\"sendNotifications(availabeBloodUnits.bloodGroup)\">\n                Send Notification</button>\n        </li>\n    </ul>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <section class=\"border shadow-lg rounded-lg section-margin\">\n        <h1 class=\"mt-5 ml-3 text-alignment text-danger\">Register to Donate</h1>\n        <form [formGroup]=\"signupForm\" (ngSubmit)=\"userAdd(signupForm)\" novalidate>\n            <section class=\"border border-danger ml-2 mr-2 pb-4\">\n                <div>\n                    <h4 class=\"ml-3 text-alignment text-danger\">Login Details</h4>\n                </div>\n                <div class=\"form-row ml-3 mr-3\">\n                    <div class=\"col-sm-12 col-lg-6  mt-4\">\n                        <label for=\"username\">Username*</label>\n                        <span *ngIf=\"signupForm.get('userName').touched;else elseBlockUserName\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Username\"\n                                formControlName=\"userName\" id=\"username\" name=\"username\" (keyup)=\"changeValue()\"\n                                [ngClass]=\"{\n                            'border border-danger': signupForm.get('userName').errors?.required || signupForm.get('userName').errors?.minlength \n                            || signupForm.get('userName').errors?.maxlength || userPresent, \n                            '': !signupForm.get('userName').errors?.required || !signupForm.get('userName').errors?.minlength || !signupForm.get('userName').errors?.maxlength\n                          }\" />\n                            <div>\n                                <div class=\"text-danger  position-absolute\"\n                                    *ngIf=\"signupForm.get('userName').errors?.minlength || signupForm.get('userName').errors?.maxlength\">\n                                    Length should be between 2 & 15!\n                                </div>\n\n                                <div class=\"text-danger position-absolute\"\n                                    *ngIf=\"signupForm.get('userName').errors?.required\">\n                                    Username is required!\n                                </div>\n                            </div>\n                        </span>\n                        <ng-template #elseBlockUserName><input type=\"text\" class=\"form-control\"\n                                placeholder=\"Enter Username\" formControlName=\"userName\" id=\"username\" name=\"username\" />\n                        </ng-template>\n                        <div *ngIf=\"userPresent\" class=\"text-danger position-absolute\">\n                            User Already Exists\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-row ml-3 mr-3\">\n                    <div class=\"col-sm-12 col-md-6 mt-4\">\n                        <label for=\"firstname\">First Name*</label>\n                        <span *ngIf=\"signupForm.get('firstName').touched;else elseBlockFirstName\">\n\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter First Name\" name=\"firstname\"\n                                formControlName=\"firstName\" id=\"firstname\" [ngClass]=\"{\n                            'border border-danger': signupForm.get('firstName').errors?.required || signupForm.get('firstName').errors?.minlength || signupForm.get('firstName').errors?.maxlength, \n                            '': !signupForm.get('firstName').errors?.required || !signupForm.get('firstName').errors?.minlength || !signupForm.get('firstName').errors?.maxlength\n                          }\" />\n                            <div>\n                                <div class=\"text-danger position-absolute\"\n                                    *ngIf=\"signupForm.get('firstName').errors?.minlength || signupForm.get('firstName').errors?.maxlength\">\n                                    Length should be between 2 & 50!\n                                </div>\n\n                                <div class=\"text-danger position-absolute\"\n                                    *ngIf=\"signupForm.get('firstName').errors?.required\">\n                                    First Name is required!\n                                </div>\n                            </div>\n                        </span>\n                    </div>\n                    <ng-template #elseBlockFirstName><input type=\"text\" class=\"form-control\"\n                            placeholder=\"Enter First Name\" formControlName=\"firstName\" id=\"firstname\"\n                            name=\"firstName\" /></ng-template>\n                    <div class=\"col-sm-12 col-md-6 mt-4\">\n                        <label for=\"lastname\">Last Name*</label>\n                        <span *ngIf=\"signupForm.get('lastName').touched;else elseBlockLastName\">\n                            <input type=\"text\" class=\"form-control \" placeholder=\"Enter Last Name\" name=\"lastname\"\n                                formControlName=\"lastName\" id=\"lastname\" [ngClass]=\"{\n                                'border border-danger': signupForm.get('lastName').errors?.required || signupForm.get('lastName').errors?.minlength || signupForm.get('lastName').errors?.maxlength, \n                                '': !signupForm.get('lastName').errors?.required || !signupForm.get('lastName').errors?.minlength || !signupForm.get('lastName').errors?.maxlength\n                              }\" />\n                            <div>\n                                <div class=\"text-danger position-absolute\"\n                                    *ngIf=\"signupForm.get('lastName').errors?.minlength || signupForm.get('lastName').errors?.maxlength\">\n                                    Length should be between 2 & 50!\n                                </div>\n\n                                <div class=\"text-danger position-absolute\"\n                                    *ngIf=\"signupForm.get('lastName').errors?.required\">\n                                    Last Name is required!\n                                </div>\n                            </div>\n                        </span>\n                        <ng-template #elseBlockLastName>\n                            <input type=\"text\" class=\"form-control \" placeholder=\"Enter Last Name\" name=\"lastname\"\n                                formControlName=\"lastName\" id=\"lastname\" />\n                        </ng-template>\n                    </div>\n                </div>\n                <div class=\"form-row ml-3 mr-3\">\n                    <div class=\"col-sm-12 col-md-6  mt-4\">\n                        <label for=\"password\">Password*</label>\n                        <span *ngIf=\"signupForm.get('password').touched;else elseBlockPassword\">\n                            <input type=\"password\" class=\"form-control \" placeholder=\"Enter Password\" name=\"password\"\n                                formControlName=\"password\" id=\"password\" [ngClass]=\"{\n                                'border border-danger': signupForm.get('password').errors?.required || signupForm.get('password').errors?.minlength || signupForm.get('password').errors?.maxlength, \n                                '': !signupForm.get('password').errors?.required || !signupForm.get('password').errors?.minlength || !signupForm.get('password').errors?.maxlength\n                              }\" />\n                            <div>\n                                <div class=\"text-danger position-absolute\"\n                                    *ngIf=\"signupForm.get('password').errors?.minlength || signupForm.get('password').errors?.maxlength\">\n                                    Password should be between 2 & 15!\n                                </div>\n\n                                <div class=\"text-danger position-absolute\"\n                                    *ngIf=\"signupForm.get('password').errors?.required\">\n                                    Password is required!\n                                </div>\n                            </div>\n                        </span>\n                        <ng-template #elseBlockPassword>\n                            <input type=\"password\" class=\"form-control \" placeholder=\"Enter Password\" name=\"password\"\n                                formControlName=\"password\" id=\"password\" />\n                        </ng-template>\n                    </div>\n                    <div class=\"col-sm-12 col-md-6 mt-4\">\n                        <label for=\"cnfpassword\">Confirm Password*</label>\n                        <span *ngIf=\"signupForm.get('confirmPassword').touched;else elseBlockConfirmPassword\">\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" name=\"password\"\n                                formControlName=\"confirmPassword\" id=\"cnfpassword\" (keyup)=\"checkIfMatchingPasswords()\"\n                                [ngClass]=\"{\n                                'border border-danger': signupForm.get('confirmPassword').errors?.required, \n                                '': !signupForm.get('confirmPassword').errors?.required \n                              }\" />\n                            <div class=\"text-danger position-absolute\"\n                                *ngIf=\"!checkpass && !signupForm.get('confirmPassword').errors?.required\">\n                                Passwords should be same\n                            </div>\n                            <div class=\"text-danger position-absolute\"\n                                *ngIf=\"signupForm.get('confirmPassword').errors?.required\">\n                                Confirm Password is required\n                            </div>\n\n                        </span>\n                        <ng-template #elseBlockConfirmPassword>\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" name=\"password\"\n                                formControlName=\"confirmPassword\" id=\"cnfpassword\"\n                                (keyup)=\"checkIfMatchingPasswords()\" />\n                        </ng-template>\n                    </div>\n                </div>\n            </section>\n            <section class=\"border border-danger ml-2 mr-2 pb-4 mt-2\">\n                <h4 class=\"text-alignment text-danger\">Personal Details</h4>\n                <div class=\"form-row ml-3 mr-3\">\n                    <div class=\"col-sm-12 col-md-6 mt-4\">\n                        <label for=\"age\">Age*</label>\n                        <span *ngIf=\"signupForm.get('age').touched;else elseBlockAge\">\n                            <input type=\"number\" class=\"form-control\" placeholder=\"Enter Age\" name=\"age\"\n                                formControlName=\"age\" id=\"age\" maxlength=\"2\"\n                                oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\n                                [ngClass]=\"{\n                                'border border-danger': signupForm.get('age').errors?.required,\n                                '': !signupForm.get('age').errors?.required \n                              }\" />\n\n                            <div class=\"text-danger position-absolute\" *ngIf=\"signupForm.get('age').errors?.required\">\n                                Age is required!\n                            </div>\n                        </span>\n                        <ng-template #elseBlockAge>\n                            <input type=\"number\"\n                                oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\n                                class=\"form-control\" maxlength=\"2\" placeholder=\"Enter Age\" name=\"age\"\n                                formControlName=\"age\" id=\"age\" />\n                        </ng-template>\n                    </div>\n                    <div class=\"col-sm-12 col-md-6 mt-4\">\n                        <div formGroupName=\"genderDivision\">\n                            <label for=\"gender\">Gender</label>\n                            <select id=\"gender\" class=\"form-control\" formControlName=\"gender\">\n                                <option *ngFor=\"let gen of gender\" [value]=\"gen\">{{gen}}\n                                </option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-row ml-3 mr-3\">\n                    <div class=\"col-sm-12 col-md-6  mt-4\">\n                        <label for=\"contactnumber\">Contact Number*</label>\n                        <span *ngIf=\"signupForm.get('contactNo').touched;else elseBlockContactNumber\">\n                            <input type=\"text\" class=\"form-control \" placeholder=\"Enter Contact Number\" name=\"contactNo\"\n                                formControlName=\"contactNo\" id=\"contactnumber\"\n                                onkeypress=\"return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))\"\n                                [ngClass]=\"{\n                                'border border-danger': signupForm.get('contactNo').errors?.required || signupForm.get('contactNo').errors?.minlength || signupForm.get('contactNo').errors?.maxlength,\n                                '': !signupForm.get('contactNo').errors?.required  || !signupForm.get('contactNo').errors?.minlength || !signupForm.get('contactNo').errors?.maxlength\n                              }\" />\n\n                            <div class=\"text-danger position-absolute\"\n                                *ngIf=\"signupForm.get('contactNo').errors?.minlength || signupForm.get('contactNo').errors?.maxlength\">\n                                Contact Number should be of 10 digits!\n                            </div>\n                            <div class=\"text-danger position-absolute\"\n                                *ngIf=\"signupForm.get('contactNo').errors?.required\">\n                                Contact Number is required\n                            </div>\n                        </span>\n                        <ng-template #elseBlockContactNumber>\n                            <input type=\"text\" class=\"form-control \" placeholder=\"Enter Contact Number\" name=\"contactNo\"\n                                formControlName=\"contactNo\" id=\"contactnumber\"\n                                onkeypress=\"return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))\" />\n                        </ng-template>\n                    </div>\n                    <div class=\"col-sm-12 col-md-6 mt-4\">\n                        <label for=\"emailid\">Email*</label>\n                        <span *ngIf=\"signupForm.get('emailId').touched;else elseBlockEmail\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Email id\" name=\"emailId\"\n                                formControlName=\"emailId\" id=\"emailid\" [ngClass]=\"{\n                                'border border-danger': signupForm.get('emailId').errors?.required,\n                                '': !signupForm.get('emailId').errors?.required \n                              }\" />\n                            <div class=\"text-danger position-absolute\" *ngIf=\"signupForm.get('emailId').errors?.email\">\n                                Please enter valid email!\n                            </div>\n                            <div class=\"text-danger position-absolute\"\n                                *ngIf=\"signupForm.get('emailId').errors?.required\">\n                                Email Id is required!\n                            </div>\n                        </span>\n                        <ng-template #elseBlockEmail>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Email id\" name=\"emailId\"\n                                formControlName=\"emailId\" id=\"emailid\" />\n                        </ng-template>\n                    </div>\n                </div>\n                <div class=\"form-row ml-3 mr-3\">\n                    <div class=\"col-sm-12 col-md-6  mt-4\">\n                        <label for=\"weight\">Weight*</label>\n                        <span *ngIf=\"signupForm.get('weight').touched;else elseBlockWeight\">\n                            <input type=\"number\" class=\"form-control \" placeholder=\"Enter your weight\" name=\"weight\"\n                                formControlName=\"weight\" id=\"weight\" [ngClass]=\"{\n                                'border border-danger': signupForm.get('weight').errors?.required,\n                                '': !signupForm.get('weight').errors?.required \n                              }\"\n                                oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\n                                maxLength=3 />\n                            <div class=\"text-danger position-absolute\"\n                                *ngIf=\"signupForm.get('weight').errors?.required\">\n                                Please enter your weight!\n                            </div>\n                        </span>\n                        <ng-template #elseBlockWeight>\n                            <input type=\"number\" class=\"form-control \" placeholder=\"Enter your weight\" name=\"weight\"\n                                formControlName=\"weight\" id=\"weight\"\n                                oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\n                                maxLength=3 />\n                        </ng-template>\n                    </div>\n                    <div class=\"col-sm-12 col-md-6 mt-4\">\n                        <div formGroupName=\"bloodGroupDivision\">\n                            <label for=\"bloodgroup\">Blood Group*</label>\n\n                            <select id=\"bloodgroup\" class=\"form-control\" formControlName=\"bloodGroup\" name=\"bloodGroup\"\n                                (click)=\"bloodGroupCheck($event.target.value)\" [ngClass]=\"{\n                                'border border-danger': bloodGroupEmpty && checkClick\n                              }\">\n                                <option *ngFor=\"let bg of bloodGroups\" [value]=\"bg\">{{bg}}\n                                </option>\n                            </select>\n                            <div class=\"text-danger position-absolute\" *ngIf=\"bloodGroupEmpty && checkClick\">\n                                Enter your bloodGroup!\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-row ml-3 mr-3\">\n                    <div class=\"col-sm-12 col-md-4  mt-4\">\n                        <div formGroupName=\"stateDivision\">\n                            <label for=\"state\">State*</label>\n                            <select id=\"state\" (change)=\"changeState($event.target.value)\"\n                                (click)=\"stateCheck($event.target.value)\" class=\"form-control\" formControlName=\"state\"\n                                name=\"state\" [ngClass]=\"{\n                                    'border border-danger': stateEmpty && stateClick\n                                  }\">\n                                <option *ngFor=\"let state of stateList\" [value]=\"state.name\"> {{state.name}}\n                                </option>\n                            </select>\n                            <div class=\"text-danger position-absolute\" *ngIf=\"stateEmpty && stateClick\">\n                                Enter State!\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4 mt-4\">\n\n                        <div formGroupName=\"areaDivision\">\n                            <label for=\"area\">Area*</label>\n                            <select id=\"area\" class=\"form-control\" formControlName=\"area\" name=\"area\"\n                                (click)=\"areaClickFun(signupForm.get('areaDivision').get('area').value)\" [ngClass]=\"{\n                                    'border border-danger': areaEmpty && areaClick\n                                  }\">\n                                <option *ngFor=\"let area of cities\" [value]=\"area\">{{area}}\n                                </option>\n                            </select>\n                            <div class=\"text-danger  position-absolute small\"\n                                *ngIf=\"!signupForm.get('stateDivision').get('state').touched && signupForm.get('areaDivision').get('area').touched  \">\n                                Select state first !\n                            </div>\n                            <div class=\"text-danger  position-absolute \"\n                                *ngIf=\"signupForm.get('areaDivision').get('area').touched && signupForm.get('stateDivision').get('state').touched \n                            && signupForm.get('stateDivision').get('state').dirty && !signupForm.get('areaDivision').get('area').dirty || areaClick && areaEmpty\">\n                                Area is required !\n                            </div>\n\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4 mt-4\">\n                        <label for=\"pincode\">Pincode*</label>\n                        <span *ngIf=\"signupForm.get('pincode').touched;else elseBlockpincode\">\n                            <input type=\"number\" class=\"form-control\" placeholder=\"Enter pincode\" name=\"pincode\"\n                                formControlName=\"pincode\" id=\"pincode\" maxlength=\"6\"\n                                oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\n                                [ngClass]=\"{\n                                'border border-danger': signupForm.get('pincode').errors?.required,\n                                '': !signupForm.get('pincode').errors?.required \n                              }\" />\n                            <div class=\"text-danger position-absolute\"\n                                *ngIf=\"signupForm.get('pincode').errors?.required\">\n                                Pincode required!\n                            </div>\n                        </span>\n                        <ng-template #elseBlockpincode>\n                            <input type=\"number\" class=\"form-control\" placeholder=\"Enter pincode\" name=\"pincode\"\n                                formControlName=\"pincode\" id=\"pincode\" maxlength=\"6\"\n                                oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\n                        </ng-template>\n                    </div>\n                </div>\n            </section>\n            <div class=\"form-row mt-3 mb-5 ml-3\">\n                <div class=\"col-sm-10\">\n                    <button type=\"submit\" class=\"btn btn-danger mt-2 \"\n                        [disabled]=\"!signupForm.valid || bloodGroupEmpty  || stateEmpty ||!checkpass || areaClick && areaEmpty || areaEmpty || userPresent\">Signup</button>\n                </div>\n            </div>\n        </form>\n    </section>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tips/tips.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tips/tips.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container top-margin\">\n    <div class=\"background-color-tips mt-5 rounded\">\n        <h1 class=\"text-danger p-3 \">Blood Tips</h1>\n    </div>\n    <div id=\"accordion\">\n        <div class=\"card \">\n            <div class=\"card-header background-color-tips\" id=\"headingOne\">\n                <h5 class=\"mb-0\">\n                    <a href=\"#\" class=\"w-100 text-decoration-none text-danger text-weight-bold\"\n                        (click)=\"dropDownValue(0)\" data-toggle=\"collapse\" data-target=\"#collapseOne\">\n                        Beat the myth <i class=\"material-icons float-right\">{{dropIcon[0]}}</i>\n                    </a>\n                </h5>\n            </div>\n\n            <div id=\"collapseOne\" class=\"collapse show border border-danger\" aria-labelledby=\"headingOne\"\n                data-parent=\"#accordion\">\n                <div class=\"card-body\">\n                    <p>Donating blood is safe and simple. It takes approximately 10-15 minutes to complete the blood\n                        donation process. Any healthy adult between 18 years and 60 years of age can donate blood. This\n                        is what you can expect when you are ready to donate blood:</p>\n                    <ul>\n                        <li>You walk into a reputed and safe blood donation centre or a mobile camp organized by a\n                            reputed institution.</li>\n                        <li>A few questions will be asked to determine your health status (general questions on health,\n                            donation history etc).</li>\n                        <li> Usually you will be asked to fill out a short form.</li>\n                        <li>Then a quick physical check will be done to check temperature, blood pressure, pulse and\n                            hemoglobin content in blood to ensure you are a healthy donor.</li>\n                        <li>If found fit to donate, then you will be asked to lie down on a resting chair or a bed. Your\n                            arm will be thoroughly cleaned.\n                            Then using sterile equipments blood will be collected in a special plastic bag.\n                            350 ml of blood will be collected in one donation.\n                            Those who weigh more than 60 Kg can donate 450 ml of blood.\n                        </li>\n                        <li>Then you must rest and relax for a few minutes with a light snack and something refreshing\n                            to drink. Some snacks and juice will be provided.</li>\n                        <li>Blood will be separated into components within eight hours of donation</li>\n                        <li>The blood will then be taken to the laboratory for testing.</li>\n                        <li>Once found safe, it will be kept in special storage and released when required.</li>\n                        <li>The blood is now ready to be taken to the hospital, to save lives.</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-header background-color-tips\" id=\"headingTwo\">\n                <h5 class=\"mb-0\">\n                    <a href=\"#\" class=\" text-danger collapsed text-decoration-none\" (click)=\"dropDownValue(1)\"\n                        data-toggle=\"collapse\" data-target=\"#collapseTwo\">\n                        Blood Groups<i class=\"material-icons float-right\">{{dropIcon[1]}}</i>\n                    </a>\n                </h5>\n            </div>\n            <div id=\"collapseTwo\" class=\"collapse border border-danger\" aria-labelledby=\"headingTwo\"\n                data-parent=\"#accordion\">\n                <div class=\"card-body\">\n                    <p>Blood type is determined by which antibodies and antigens the person's blood produces. An\n                        individual has two types of blood groups namely ABO-grouping and Rh-grouping. Rh is called as\n                        the Rhesus factor that has come to us from Rhesus monkeys.</p>\n                    <p>Most humans are in the ABO blood group. The ABO group has four categories namely</p>\n                    <p>1) A group 2) B group 3) O group and 4) AB group</p>\n                    <p>In the Rh- group, either the individual is said to be Rh- Negative or Rh- Positive.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-header background-color-tips\" id=\"headingThree\">\n                <h5 class=\"mb-0\">\n                    <a href=\"#\" class=\" text-danger collapsed text-decoration-none\" data-toggle=\"collapse\"\n                        (click)=\"dropDownValue(2)\" data-target=\"#collapseThree\">\n                        Universal Donors and Recipients<i class=\"material-icons float-right\">{{dropIcon[2]}}</i>\n                    </a>\n                </h5>\n            </div>\n            <div id=\"collapseThree\" class=\"collapse border border-danger\" aria-labelledby=\"headingThree\"\n                data-parent=\"#accordion\">\n                <div class=\"card-body\">\n                    <p>The most common blood type is O, followed by type A.</p>\n                    <p>Type O individuals are often called \"universal donors\" since their blood can be transfused into\n                        persons with any blood type. Those with type AB blood are called \"universal recipients\" because\n                        they can receive blood of any type.</p>\n                    <p>However, since approximately twice as many people in the general population have O and A blood\n                        types, a blood bank's need for this type of blood increases exponentially.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-header background-color-tips\" id=\"headingFour\">\n                <h5 class=\"mb-0\">\n                    <a href=\"#\" class=\" text-danger collapsed text-decoration-none\" (click)=\"dropDownValue(3)\"\n                        data-toggle=\"collapse\" data-target=\"#collapseFour\">\n                        DO donate blood, only if you satisfy all of the following conditions<i\n                            class=\"material-icons float-right\">{{dropIcon[3]}}</i>\n                    </a>\n                </h5>\n            </div>\n            <div id=\"collapseFour\" class=\"collapse border border-danger\" aria-labelledby=\"headingTwo\"\n                data-parent=\"#accordion\">\n                <div class=\"card-body\">\n                    <ul style=\"list-style-type:none\">\n                        <li class=\"text-success\"><i class=\"material-icons\">check</i>You are between age group of 18-60\n                            years.</li>\n                        <li class=\"text-success\"><i class=\"material-icons\">check</i>Your weight is 45 kgs or more.</li>\n                        <li class=\"text-success\"><i class=\"material-icons\">check</i>Your hemoglobin is 12.5 gm% minimum.\n                        </li>\n                        <li class=\"text-success\"><i class=\"material-icons\">check</i>Your last blood donation was 3 or\n                            more months earlier.</li>\n                        <li class=\"text-success\"><i class=\"material-icons\">check</i>You are healthy and have not\n                            suffered from malaria, typhoid or other transmissible disease in the recent past.</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-header background-color-tips\" id=\"headingFive\">\n                <h5 class=\"mb-0\">\n                    <a href=\"#\" class=\" text-danger collapsed text-decoration-none\" (click)=\"dropDownValue(4)\"\n                        data-toggle=\"collapse\" data-target=\"#collapseFive\">\n                        DO NOT donate blood, only if you satisfy all of the following conditions<i\n                            class=\"material-icons float-right\">{{dropIcon[4]}}</i>\n                    </a>\n                </h5>\n            </div>\n            <div id=\"collapseFive\" class=\"collapse border border-danger\" aria-labelledby=\"headingTwo\"\n                data-parent=\"#accordion\">\n                <div class=\"card-body\">\n                    <ul style=\"list-style-type:none\">\n                        <li class=\"text-danger\"><i class=\"material-icons\">close</i>Cold / fever in the past 1 week.</li>\n                        <li class=\"text-danger\"><i class=\"material-icons\">close</i> Under treatment with antibiotics or\n                            any other medication.</li>\n                        <li class=\"text-danger\"><i class=\"material-icons\">close</i>Cardiac problems, hypertension,\n                            epilepsy, diabetes (on insulin therapy), history of cancer, chronic kidney or liver disease,\n                            bleeding tendencies, venereal disease etc.</li>\n                        <li class=\"text-danger\"><i class=\"material-icons\">close</i>Major surgery in the last 6 months.\n                        </li>\n                        <li class=\"text-danger\"><i class=\"material-icons\">close</i>Vaccination in the last 24 hours.\n                        </li>\n                        <li class=\"text-danger\"><i class=\"material-icons\">close</i>Had a miscarriage in the last 6\n                            months or have been pregnant / lactating in the last one year.</li>\n                        <li class=\"text-danger\"><i class=\"material-icons\">close</i> Had sexual relations with different\n                            partners or with a high risk individual.</li>\n                        <li class=\"text-danger\"><i class=\"material-icons\">close</i>Shared a needle to inject drugs/ have\n                            history of drug addiction.</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-questions/user-questions.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-questions/user-questions.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"p-3\">\n    <div class=\"row faq-margin\">\n        <div class=\"col-lg-12 \" *ngIf=\"!bbbb\">\n            <div class=\"container\">\n                <div class=\"accordion \" id=\"accordionExample\">\n                    <div class=\"card\">\n                        <div class=\"card-header bg-danger\" id=\"headingOne\">\n                            <h1 class=\"mb-0\">\n                                <button class=\"btn btn-link text-white  \" type=\"button\" data-toggle=\"collapse\"\n                                    data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                    <h4>Your FAQs!</h4>\n                                </button>\n                            </h1>\n                        </div>\n                    </div>\n                    <div id=\"collapseOne\" class=\"collapse show\" data-parent=\"#accordionExample\">\n                        <div class=\"accordion container mt-3  \" id=\"accordionExample2\">\n                            <div class=\"card \" *ngFor=\"let x of faqArray\">\n                                <div class=\"card-header nav-color p-1 test-scroll\" id=\"heading\">\n                                    <h1 class=\"mb-0\">\n\n                                        <button class=\"btn btn-link text-danger  form-row  \" type=\"button\"\n                                            data-toggle=\"collapse\" [attr.data-target]=\"'#id'+ x.id\">\n                                            {{x.question}}\n\n                                        </button>\n                                    </h1>\n                                </div>\n                                <div [attr.id]=\"'id' + x.id\" class=\"collapse test-scroll\"\n                                    data-parent=\"#accordionExample2\">\n                                    <div class=\"card-body\">\n                                        {{x.answer}}\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-all-blood-requirements/view-all-blood-requirements.component.html": 
        /*!******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-all-blood-requirements/view-all-blood-requirements.component.html ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container text-alignment mb-5\" *ngIf=\"dataLoaded | async\">\n    <div class=\"alert bg-danger alert-box-requirement text-white  mr-5\">\n        Pending Blood Requests!\n    </div>\n    <div class=\"notify-requirement mr-5\">\n        <table class=\"table table-hover table-align-center\" *ngIf=\"requirementIsThere; else elseBlock\">\n            <thead>\n                <tr>\n                    <th>BloodGroup</th>\n                    <th>State</th>\n                    <th>Area</th>\n                    <th>Pincode</th>\n                    <th>ContactNumber</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody *ngFor=\"let req of bloodRequirement\">\n                <tr>\n                    <td>{{req.bloodGroup}}</td>\n                    <td>{{req.state}}</td>\n                    <td>{{req.area}}</td>\n                    <td>{{req.pincode}}</td>\n                    <td>{{req.contactNumber}}</td>\n                    <td class=\"btn btn-danger\" (click)=\"donate()\">Donate</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-all-donor-experiences/view-all-donor-experiences.component.html": 
        /*!****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-all-donor-experiences/view-all-donor-experiences.component.html ***!
          \****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container text-alignment mt-5\">\n    <div class=\"alert bg-danger alert-box-requirement text-white  mr-5\">\n        Donor Experience\n    </div>\n    <div class=\"notify-requirement mr-5\">\n        <table class=\"table table-hover font-20\">\n            <thead class=\"text-danger \">\n                <tr>\n                    <th>Hospital Name</th>\n                    <th>City</th>\n                    <th>Feedback Comments</th>\n                </tr>\n            </thead>\n            <tbody class=\"font-weight-bold\">\n                <tr *ngFor=\"let experience of donorExperience\">\n                    <td>{{ experience.hospitalName }}</td>\n                    <td>{{ experience.city }}</td>\n                    <td>{{ experience.feedbackComments }}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
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
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/User/auth.guard.ts": 
        /*!************************************!*\
          !*** ./src/app/User/auth.guard.ts ***!
          \************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/User/authentication.service.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(authService, router) {
                    this.authService = authService;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (next, state) {
                    if (this.authService.isLogin()) {
                        return true;
                    }
                    else {
                        this.router.navigate(['login']);
                        return false;
                    }
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/User/authentication.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/User/authentication.service.ts ***!
          \************************************************/
        /*! exports provided: AuthenticationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () { return AuthenticationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var AuthenticationService = /** @class */ (function () {
                function AuthenticationService(httpClient) {
                    this.httpClient = httpClient;
                    this.loggedInUser = null;
                    this.logInFlag = false;
                    this.authenticationUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/authentication-service/blood-bank/authenticate';
                }
                AuthenticationService.prototype.authenticate = function (user, password) {
                    var credentials = btoa(user + ':' + password);
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    headers = headers.set('Authorization', 'Basic ' + credentials);
                    return this.httpClient.get(this.authenticationUrl, { headers: headers });
                };
                AuthenticationService.prototype.setToken = function (token) {
                    this.token = token;
                };
                AuthenticationService.prototype.getToken = function () {
                    return this.token;
                };
                AuthenticationService.prototype.setLoggedinUser = function (userName) {
                    this.loggedInUser = userName;
                };
                AuthenticationService.prototype.setLoginFlag = function () {
                    this.logInFlag = true;
                };
                AuthenticationService.prototype.getLoggedinUser = function () {
                    return this.loggedInUser;
                };
                AuthenticationService.prototype.isLogin = function () {
                    return this.logInFlag;
                };
                AuthenticationService.prototype.logout = function () {
                    this.loggedInUser = null;
                    this.logInFlag = false;
                };
                return AuthenticationService;
            }());
            AuthenticationService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthenticationService);
            /***/ 
        }),
        /***/ "./src/app/User/login/login.component.css": 
        /*!************************************************!*\
          !*** ./src/app/User/login/login.component.css ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".additional-margin {\r\n    margin-top: 16%;\r\n    width: 400px;\r\n    margin-bottom: 10%;\r\n}\r\n\r\n.form-control:focus {\r\n    border-color: inherit;\r\n    box-shadow: none;\r\n}\r\n\r\n@media screen and (max-width: 330px) {\r\n    .right-margin {\r\n        margin-right: 80%\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 380px) {\r\n    .bottom-margin {\r\n        margin-bottom: 25%;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 350px) {\r\n    .bottom-margin {\r\n        margin-bottom: 25%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 570px) {\r\n    .bottom-margin {\r\n        margin-bottom: 20%;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 375px) {\r\n    .bottom-margin {\r\n        margin-bottom: 20%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFFckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvVXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZGl0aW9uYWwtbWFyZ2luIHtcclxuICAgIG1hcmdpbi10b3A6IDE2JTtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMzBweCkge1xyXG4gICAgLnJpZ2h0LW1hcmdpbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4MCVcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcclxuICAgIC5ib3R0b20tbWFyZ2luIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM1MHB4KSB7XHJcbiAgICAuYm90dG9tLW1hcmdpbiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzBweCkge1xyXG4gICAgLmJvdHRvbS1tYXJnaW4ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIHtcclxuICAgIC5ib3R0b20tbWFyZ2luIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMCU7XHJcbiAgICB9XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/User/login/login.component.ts": 
        /*!***********************************************!*\
          !*** ./src/app/User/login/login.component.ts ***!
          \***********************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/User/authentication.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(authService, router) {
                    this.authService = authService;
                    this.router = router;
                    this.loginFlag = false;
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.login = function (loginForm) {
                    var _this = this;
                    this.authService.authenticate(loginForm.value.userName, loginForm.value.password).subscribe(function (response) {
                        _this.authService.setLoggedinUser(loginForm.value.userName);
                        _this.authService.setLoginFlag();
                        _this.authService.setToken(response.token);
                        _this.router.navigate(['/home']);
                    }, function (error) {
                        if (error.status == "401") {
                            _this.loginFlag = true;
                        }
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/User/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/User/signup-success/signup-success.component.css": 
        /*!******************************************************************!*\
          !*** ./src/app/User/signup-success/signup-success.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1VzZXIvc2lnbnVwLXN1Y2Nlc3Mvc2lnbnVwLXN1Y2Nlc3MuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/User/signup-success/signup-success.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/User/signup-success/signup-success.component.ts ***!
          \*****************************************************************/
        /*! exports provided: SignupSuccessComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupSuccessComponent", function () { return SignupSuccessComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SignupSuccessComponent = /** @class */ (function () {
                function SignupSuccessComponent() {
                }
                SignupSuccessComponent.prototype.ngOnInit = function () {
                };
                return SignupSuccessComponent;
            }());
            SignupSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signup-success',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup-success.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/signup-success/signup-success.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup-success.component.css */ "./src/app/User/signup-success/signup-success.component.css")).default]
                })
            ], SignupSuccessComponent);
            /***/ 
        }),
        /***/ "./src/app/User/user.service.ts": 
        /*!**************************************!*\
          !*** ./src/app/User/user.service.ts ***!
          \**************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/User/authentication.service.ts");
            var UserService = /** @class */ (function () {
                function UserService(httpClient, authService) {
                    this.httpClient = httpClient;
                    this.authService = authService;
                }
                UserService.prototype.addUser = function (user) {
                    var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/authentication-service/blood-bank/users";
                    return this.httpClient.post(url, user);
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/add-blood-requirement/add-blood-requirement.component.css": 
        /*!***************************************************************************!*\
          !*** ./src/app/add-blood-requirement/add-blood-requirement.component.css ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1ibG9vZC1yZXF1aXJlbWVudC9hZGQtYmxvb2QtcmVxdWlyZW1lbnQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/add-blood-requirement/add-blood-requirement.component.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/add-blood-requirement/add-blood-requirement.component.ts ***!
          \**************************************************************************/
        /*! exports provided: AddBloodRequirementComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBloodRequirementComponent", function () { return AddBloodRequirementComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _form_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-service.service */ "./src/app/form-service.service.ts");
            /* harmony import */ var _blood_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blood.service */ "./src/app/blood.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AddBloodRequirementComponent = /** @class */ (function () {
                function AddBloodRequirementComponent(formService, bloodService, router) {
                    this.formService = formService;
                    this.bloodService = bloodService;
                    this.router = router;
                    this.bloodGroupEmpty = true;
                    this.stateClick = false;
                    this.stateEmpty = true;
                    this.areaEmpty = true;
                    this.checkClick = false;
                    this.areaClick = false;
                }
                AddBloodRequirementComponent.prototype.ngOnInit = function () {
                    this.requirement = {
                        state: "",
                        area: "",
                        pincode: 0,
                        bloodGroup: "",
                        contactNumber: 0
                    };
                    this.bloodGroups = this.formService.getBloodGroups();
                    this.stateList = this.formService.getStates();
                    this.addRequirementForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        contactNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]),
                        bloodGroupDivision: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            bloodGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
                        }),
                        stateDivision: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
                        }),
                        areaDivision: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
                        }),
                        pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
                    });
                };
                AddBloodRequirementComponent.prototype.addRequirement = function (addRequirementForm) {
                    var _this = this;
                    this.requirement.bloodGroup = addRequirementForm.value.bloodGroupDivision.bloodGroup;
                    this.requirement.area = addRequirementForm.value.areaDivision.area;
                    this.requirement.state = addRequirementForm.value.stateDivision.state;
                    this.requirement.pincode = addRequirementForm.value.pincode;
                    this.requirement.contactNumber = addRequirementForm.value.contactNo;
                    this.bloodService.addBloodRequirement(this.requirement).subscribe(function (response) { _this.router.navigate(["/addRequirementSuccess"]); });
                };
                AddBloodRequirementComponent.prototype.changeState = function (count) {
                    this.cities = this.stateList.find(function (con) { return con.name == count; }).cities;
                };
                AddBloodRequirementComponent.prototype.stateCheck = function (value) {
                    if (value != "") {
                        this.stateEmpty = false;
                    }
                    else {
                        this.stateEmpty = true;
                        this.areaEmpty = true;
                    }
                    this.areaEmpty = true;
                    this.areaClick = true;
                    this.stateClick = true;
                };
                AddBloodRequirementComponent.prototype.areaClickFun = function (value) {
                    this.areaEmpty = false;
                    if (value != "") {
                        this.areaEmpty = false;
                    }
                };
                AddBloodRequirementComponent.prototype.bloodGroupCheck = function (value) {
                    if (value != '') {
                        this.bloodGroupEmpty = false;
                    }
                    else {
                        this.bloodGroupEmpty = true;
                    }
                    this.checkClick = true;
                };
                return AddBloodRequirementComponent;
            }());
            AddBloodRequirementComponent.ctorParameters = function () { return [
                { type: _form_service_service__WEBPACK_IMPORTED_MODULE_3__["FormServiceService"] },
                { type: _blood_service__WEBPACK_IMPORTED_MODULE_4__["BloodService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            AddBloodRequirementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-blood-requirement',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-blood-requirement.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-blood-requirement/add-blood-requirement.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-blood-requirement.component.css */ "./src/app/add-blood-requirement/add-blood-requirement.component.css")).default]
                })
            ], AddBloodRequirementComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
            /* harmony import */ var _donate_donate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./donate/donate.component */ "./src/app/donate/donate.component.ts");
            /* harmony import */ var _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experiences/experiences.component */ "./src/app/experiences/experiences.component.ts");
            /* harmony import */ var _blood_request_blood_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blood-request/blood-request.component */ "./src/app/blood-request/blood-request.component.ts");
            /* harmony import */ var _availabilty_availabilty_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./availabilty/availabilty.component */ "./src/app/availabilty/availabilty.component.ts");
            /* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
            /* harmony import */ var _User_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./User/login/login.component */ "./src/app/User/login/login.component.ts");
            /* harmony import */ var _User_signup_success_signup_success_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./User/signup-success/signup-success.component */ "./src/app/User/signup-success/signup-success.component.ts");
            /* harmony import */ var _add_blood_requirement_add_blood_requirement_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-blood-requirement/add-blood-requirement.component */ "./src/app/add-blood-requirement/add-blood-requirement.component.ts");
            /* harmony import */ var _blood_requirement_addition_success_blood_requirement_addition_success_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blood-requirement-addition-success/blood-requirement-addition-success.component */ "./src/app/blood-requirement-addition-success/blood-requirement-addition-success.component.ts");
            /* harmony import */ var _blood_availability_blood_availability_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blood-availability/blood-availability.component */ "./src/app/blood-availability/blood-availability.component.ts");
            /* harmony import */ var _User_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./User/auth.guard */ "./src/app/User/auth.guard.ts");
            /* harmony import */ var _blood_donation_blood_donation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blood-donation/blood-donation.component */ "./src/app/blood-donation/blood-donation.component.ts");
            /* harmony import */ var _tips_tips_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tips/tips.component */ "./src/app/tips/tips.component.ts");
            /* harmony import */ var _route_to_tips_route_to_tips_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./route-to-tips/route-to-tips.component */ "./src/app/route-to-tips/route-to-tips.component.ts");
            /* harmony import */ var _post_donor_experience_post_donor_experience_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./post-donor-experience/post-donor-experience.component */ "./src/app/post-donor-experience/post-donor-experience.component.ts");
            /* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
            /* harmony import */ var _user_questions_user_questions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-questions/user-questions.component */ "./src/app/user-questions/user-questions.component.ts");
            /* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/notifications/notifications.component.ts");
            /* harmony import */ var _show_available_units_show_available_units_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./show-available-units/show-available-units.component */ "./src/app/show-available-units/show-available-units.component.ts");
            var routes = [{ path: "", redirectTo: "home", pathMatch: "full" },
                { path: "", component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
                {
                    path: "home", component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"], children: [
                        {
                            path: "",
                            component: _donate_donate_component__WEBPACK_IMPORTED_MODULE_4__["DonateComponent"],
                            outlet: "customoutlet"
                        },
                        {
                            path: "donate",
                            component: _donate_donate_component__WEBPACK_IMPORTED_MODULE_4__["DonateComponent"],
                            outlet: "customoutlet"
                        },
                        {
                            path: "experiences",
                            component: _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_5__["ExperiencesComponent"],
                            outlet: "customoutlet"
                        },
                        {
                            path: "request",
                            component: _blood_request_blood_request_component__WEBPACK_IMPORTED_MODULE_6__["BloodRequestComponent"],
                            outlet: "customoutlet"
                        },
                        {
                            path: "availability",
                            component: _availabilty_availabilty_component__WEBPACK_IMPORTED_MODULE_7__["AvailabiltyComponent"],
                            outlet: "customoutlet"
                        },
                        {
                            path: "tips",
                            component: _route_to_tips_route_to_tips_component__WEBPACK_IMPORTED_MODULE_17__["RouteToTipsComponent"],
                            outlet: "customoutlet"
                        }
                    ]
                },
                { path: "register", component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"] },
                { path: "login", component: _User_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
                { path: "signup-success", component: _User_signup_success_signup_success_component__WEBPACK_IMPORTED_MODULE_10__["SignupSuccessComponent"] },
                { path: "add-requirement", component: _add_blood_requirement_add_blood_requirement_component__WEBPACK_IMPORTED_MODULE_11__["AddBloodRequirementComponent"] },
                { path: "addRequirementSuccess", component: _blood_requirement_addition_success_blood_requirement_addition_success_component__WEBPACK_IMPORTED_MODULE_12__["BloodRequirementAdditionSuccessComponent"] },
                { path: "blood-availability", component: _blood_availability_blood_availability_component__WEBPACK_IMPORTED_MODULE_13__["BloodAvailabilityComponent"], canActivate: [_User_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
                { path: "donation-request", component: _blood_donation_blood_donation_component__WEBPACK_IMPORTED_MODULE_15__["BloodDonationComponent"], canActivate: [_User_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
                { path: "tips", component: _tips_tips_component__WEBPACK_IMPORTED_MODULE_16__["TipsComponent"] },
                { path: "post-donor-experience", component: _post_donor_experience_post_donor_experience_component__WEBPACK_IMPORTED_MODULE_18__["PostDonorExperienceComponent"], canActivate: [_User_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
                { path: "faq", component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_19__["FaqComponent"] },
                { path: "view-questions", component: _user_questions_user_questions_component__WEBPACK_IMPORTED_MODULE_20__["UserQuestionsComponent"], canActivate: [_User_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
                { path: "notifications", component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_21__["NotificationsComponent"], canActivate: [_User_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
                { path: "notifications/:value", component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_21__["NotificationsComponent"], canActivate: [_User_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
                { path: "check-availability", component: _show_available_units_show_available_units_component__WEBPACK_IMPORTED_MODULE_22__["ShowAvailableUnitsComponent"], canActivate: [_User_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'webapp';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
            /* harmony import */ var _donate_donate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./donate/donate.component */ "./src/app/donate/donate.component.ts");
            /* harmony import */ var _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./experiences/experiences.component */ "./src/app/experiences/experiences.component.ts");
            /* harmony import */ var _blood_request_blood_request_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blood-request/blood-request.component */ "./src/app/blood-request/blood-request.component.ts");
            /* harmony import */ var _availabilty_availabilty_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./availabilty/availabilty.component */ "./src/app/availabilty/availabilty.component.ts");
            /* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _User_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./User/login/login.component */ "./src/app/User/login/login.component.ts");
            /* harmony import */ var _User_signup_success_signup_success_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./User/signup-success/signup-success.component */ "./src/app/User/signup-success/signup-success.component.ts");
            /* harmony import */ var _view_all_blood_requirements_view_all_blood_requirements_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view-all-blood-requirements/view-all-blood-requirements.component */ "./src/app/view-all-blood-requirements/view-all-blood-requirements.component.ts");
            /* harmony import */ var _add_blood_requirement_add_blood_requirement_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-blood-requirement/add-blood-requirement.component */ "./src/app/add-blood-requirement/add-blood-requirement.component.ts");
            /* harmony import */ var _blood_requirement_addition_success_blood_requirement_addition_success_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blood-requirement-addition-success/blood-requirement-addition-success.component */ "./src/app/blood-requirement-addition-success/blood-requirement-addition-success.component.ts");
            /* harmony import */ var _blood_availability_blood_availability_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blood-availability/blood-availability.component */ "./src/app/blood-availability/blood-availability.component.ts");
            /* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _blood_donation_blood_donation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./blood-donation/blood-donation.component */ "./src/app/blood-donation/blood-donation.component.ts");
            /* harmony import */ var _book_hospital_book_hospital_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./book-hospital/book-hospital.component */ "./src/app/book-hospital/book-hospital.component.ts");
            /* harmony import */ var _tips_tips_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tips/tips.component */ "./src/app/tips/tips.component.ts");
            /* harmony import */ var _route_to_tips_route_to_tips_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./route-to-tips/route-to-tips.component */ "./src/app/route-to-tips/route-to-tips.component.ts");
            /* harmony import */ var _view_all_donor_experiences_view_all_donor_experiences_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./view-all-donor-experiences/view-all-donor-experiences.component */ "./src/app/view-all-donor-experiences/view-all-donor-experiences.component.ts");
            /* harmony import */ var _post_donor_experience_post_donor_experience_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./post-donor-experience/post-donor-experience.component */ "./src/app/post-donor-experience/post-donor-experience.component.ts");
            /* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
            /* harmony import */ var _user_questions_user_questions_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./user-questions/user-questions.component */ "./src/app/user-questions/user-questions.component.ts");
            /* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/notifications/notifications.component.ts");
            /* harmony import */ var _show_available_units_show_available_units_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./show-available-units/show-available-units.component */ "./src/app/show-available-units/show-available-units.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                        _donate_donate_component__WEBPACK_IMPORTED_MODULE_7__["DonateComponent"],
                        _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_8__["ExperiencesComponent"],
                        _blood_request_blood_request_component__WEBPACK_IMPORTED_MODULE_9__["BloodRequestComponent"],
                        _availabilty_availabilty_component__WEBPACK_IMPORTED_MODULE_10__["AvailabiltyComponent"],
                        _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                        _User_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                        _User_signup_success_signup_success_component__WEBPACK_IMPORTED_MODULE_15__["SignupSuccessComponent"],
                        _view_all_blood_requirements_view_all_blood_requirements_component__WEBPACK_IMPORTED_MODULE_16__["ViewAllBloodRequirementsComponent"],
                        _add_blood_requirement_add_blood_requirement_component__WEBPACK_IMPORTED_MODULE_17__["AddBloodRequirementComponent"],
                        _blood_requirement_addition_success_blood_requirement_addition_success_component__WEBPACK_IMPORTED_MODULE_18__["BloodRequirementAdditionSuccessComponent"],
                        _blood_availability_blood_availability_component__WEBPACK_IMPORTED_MODULE_19__["BloodAvailabilityComponent"],
                        _blood_donation_blood_donation_component__WEBPACK_IMPORTED_MODULE_22__["BloodDonationComponent"],
                        _book_hospital_book_hospital_component__WEBPACK_IMPORTED_MODULE_23__["BookHospitalComponent"],
                        _tips_tips_component__WEBPACK_IMPORTED_MODULE_24__["TipsComponent"],
                        _route_to_tips_route_to_tips_component__WEBPACK_IMPORTED_MODULE_25__["RouteToTipsComponent"],
                        _view_all_donor_experiences_view_all_donor_experiences_component__WEBPACK_IMPORTED_MODULE_26__["ViewAllDonorExperiencesComponent"],
                        _post_donor_experience_post_donor_experience_component__WEBPACK_IMPORTED_MODULE_27__["PostDonorExperienceComponent"],
                        _faq_faq_component__WEBPACK_IMPORTED_MODULE_28__["FaqComponent"],
                        _user_questions_user_questions_component__WEBPACK_IMPORTED_MODULE_29__["UserQuestionsComponent"],
                        _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_30__["NotificationsComponent"],
                        _show_available_units_show_available_units_component__WEBPACK_IMPORTED_MODULE_31__["ShowAvailableUnitsComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__["BsDatepickerModule"].forRoot(),
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/availabilty/availabilty.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/availabilty/availabilty.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F2YWlsYWJpbHR5L2F2YWlsYWJpbHR5LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/availabilty/availabilty.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/availabilty/availabilty.component.ts ***!
          \******************************************************/
        /*! exports provided: AvailabiltyComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailabiltyComponent", function () { return AvailabiltyComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AvailabiltyComponent = /** @class */ (function () {
                function AvailabiltyComponent() {
                }
                AvailabiltyComponent.prototype.ngOnInit = function () {
                };
                return AvailabiltyComponent;
            }());
            AvailabiltyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-availabilty',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./availabilty.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/availabilty/availabilty.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./availabilty.component.css */ "./src/app/availabilty/availabilty.component.css")).default]
                })
            ], AvailabiltyComponent);
            /***/ 
        }),
        /***/ "./src/app/blood-availability/blood-availability.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/blood-availability/blood-availability.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb29kLWF2YWlsYWJpbGl0eS9ibG9vZC1hdmFpbGFiaWxpdHkuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/blood-availability/blood-availability.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/blood-availability/blood-availability.component.ts ***!
          \********************************************************************/
        /*! exports provided: BloodAvailabilityComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloodAvailabilityComponent", function () { return BloodAvailabilityComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _User_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../User/authentication.service */ "./src/app/User/authentication.service.ts");
            /* harmony import */ var _form_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form-service.service */ "./src/app/form-service.service.ts");
            /* harmony import */ var _blood_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blood.service */ "./src/app/blood.service.ts");
            var BloodAvailabilityComponent = /** @class */ (function () {
                function BloodAvailabilityComponent(authService, formService, bloodAvailabilityService) {
                    this.authService = authService;
                    this.formService = formService;
                    this.bloodAvailabilityService = bloodAvailabilityService;
                    this.areaEmpty = true;
                    this.areaClick = false;
                }
                BloodAvailabilityComponent.prototype.ngOnInit = function () {
                    this.bloodGroup = this.formService.getBloodGroups();
                    this.states = this.formService.getStates();
                    this.bloodAvailabilityForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        'bloodGroupDivision': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            'bloodGroup': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                        }),
                        'stateDivision': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            'state': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                        }),
                        'areaDivision': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            'area': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                        }),
                        'pinCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(100000),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(999999)
                        ]),
                    });
                };
                BloodAvailabilityComponent.prototype.changeState = function (count) {
                    this.cities = this.states.find(function (con) { return con.name == count; }).cities;
                };
                BloodAvailabilityComponent.prototype.search = function (form) {
                    var _this = this;
                    this.bloodAvailabilityService.getAllAvailableBloodGroups(form.value.bloodGroupDivision.bloodGroup, form.value.stateDivision.state, form.value.areaDivision.area).subscribe(function (response) {
                        if (response.length == 0) {
                            _this.show = "request";
                        }
                        else {
                            _this.bloodAvailability = response;
                            _this.show = "table";
                        }
                    });
                };
                BloodAvailabilityComponent.prototype.stateCheck = function () {
                    this.areaEmpty = true;
                    this.areaClick = true;
                };
                BloodAvailabilityComponent.prototype.areaClickFun = function (value) {
                    if (value == "") {
                        this.areaEmpty = true;
                        this.areaClick = true;
                    }
                    else {
                        this.areaEmpty = false;
                        this.areaClick = false;
                    }
                };
                return BloodAvailabilityComponent;
            }());
            BloodAvailabilityComponent.ctorParameters = function () { return [
                { type: _User_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
                { type: _form_service_service__WEBPACK_IMPORTED_MODULE_4__["FormServiceService"] },
                { type: _blood_service__WEBPACK_IMPORTED_MODULE_5__["BloodService"] }
            ]; };
            BloodAvailabilityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-blood-availability',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blood-availability.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blood-availability/blood-availability.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blood-availability.component.css */ "./src/app/blood-availability/blood-availability.component.css")).default]
                })
            ], BloodAvailabilityComponent);
            /***/ 
        }),
        /***/ "./src/app/blood-donation/blood-donation.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/blood-donation/blood-donation.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb29kLWRvbmF0aW9uL2Jsb29kLWRvbmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/blood-donation/blood-donation.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/blood-donation/blood-donation.component.ts ***!
          \************************************************************/
        /*! exports provided: BloodDonationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloodDonationComponent", function () { return BloodDonationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _form_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-service.service */ "./src/app/form-service.service.ts");
            /* harmony import */ var _blood_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blood.service */ "./src/app/blood.service.ts");
            var BloodDonationComponent = /** @class */ (function () {
                function BloodDonationComponent(formService, bloodAvailabilityService) {
                    this.formService = formService;
                    this.bloodAvailabilityService = bloodAvailabilityService;
                    this.bookAppointment = false;
                    this.areaEmpty = true;
                    this.areaClick = false;
                    this.hospitalBooking = false;
                }
                BloodDonationComponent.prototype.ngOnInit = function () {
                    this.hospitalBookingRequest = {
                        bloodGroup: "",
                        state: "",
                        city: "",
                        area: "",
                        pinCode: 0,
                        contactNo: 0,
                        hospitalName: "",
                        date: new Date(),
                        time: ""
                    };
                    this.bloodGroup = this.formService.getBloodGroups();
                    this.states = this.formService.getStates();
                    this.donorRequestForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        'bloodGroupDivision': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            'bloodGroup': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                        }),
                        'stateDivision': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            'state': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                        }),
                        'areaDivision': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            'area': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                        }),
                        'pinCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(100000),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(999999)
                        ]),
                        'contactNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]),
                    });
                };
                BloodDonationComponent.prototype.changeState = function (count) {
                    this.cities = this.states.find(function (con) { return con.name == count; }).cities;
                };
                BloodDonationComponent.prototype.appointmentRequest = function (donorRequestForm) {
                    this.hospitalBookingRequest.state = donorRequestForm.value.stateDivision.state;
                    this.hospitalBookingRequest.area = donorRequestForm.value.areaDivision.area;
                    this.hospitalBookingRequest.bloodGroup = donorRequestForm.value.bloodGroupDivision.bloodGroup;
                    this.hospitalBookingRequest.pinCode = donorRequestForm.value.pinCode;
                    this.hospitalBookingRequest.contactNo = donorRequestForm.value.contactNo;
                    this.bookAppointment = true;
                };
                BloodDonationComponent.prototype.stateCheck = function () {
                    this.areaEmpty = true;
                    this.areaClick = true;
                };
                BloodDonationComponent.prototype.areaClickFun = function (value) {
                    if (value == "") {
                        this.areaEmpty = true;
                        this.areaClick = true;
                    }
                    else {
                        this.areaEmpty = false;
                        this.areaClick = false;
                    }
                };
                BloodDonationComponent.prototype.isHospitalBooked = function ($event) {
                    this.hospitalBooking = $event;
                };
                return BloodDonationComponent;
            }());
            BloodDonationComponent.ctorParameters = function () { return [
                { type: _form_service_service__WEBPACK_IMPORTED_MODULE_3__["FormServiceService"] },
                { type: _blood_service__WEBPACK_IMPORTED_MODULE_4__["BloodService"] }
            ]; };
            BloodDonationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-blood-donation',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blood-donation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blood-donation/blood-donation.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blood-donation.component.css */ "./src/app/blood-donation/blood-donation.component.css")).default]
                })
            ], BloodDonationComponent);
            /***/ 
        }),
        /***/ "./src/app/blood-request/blood-request.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/blood-request/blood-request.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb29kLXJlcXVlc3QvYmxvb2QtcmVxdWVzdC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/blood-request/blood-request.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/blood-request/blood-request.component.ts ***!
          \**********************************************************/
        /*! exports provided: BloodRequestComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloodRequestComponent", function () { return BloodRequestComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BloodRequestComponent = /** @class */ (function () {
                function BloodRequestComponent() {
                }
                BloodRequestComponent.prototype.ngOnInit = function () {
                };
                return BloodRequestComponent;
            }());
            BloodRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-blood-request',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blood-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blood-request/blood-request.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blood-request.component.css */ "./src/app/blood-request/blood-request.component.css")).default]
                })
            ], BloodRequestComponent);
            /***/ 
        }),
        /***/ "./src/app/blood-requirement-addition-success/blood-requirement-addition-success.component.css": 
        /*!*****************************************************************************************************!*\
          !*** ./src/app/blood-requirement-addition-success/blood-requirement-addition-success.component.css ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb29kLXJlcXVpcmVtZW50LWFkZGl0aW9uLXN1Y2Nlc3MvYmxvb2QtcmVxdWlyZW1lbnQtYWRkaXRpb24tc3VjY2Vzcy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/blood-requirement-addition-success/blood-requirement-addition-success.component.ts": 
        /*!****************************************************************************************************!*\
          !*** ./src/app/blood-requirement-addition-success/blood-requirement-addition-success.component.ts ***!
          \****************************************************************************************************/
        /*! exports provided: BloodRequirementAdditionSuccessComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloodRequirementAdditionSuccessComponent", function () { return BloodRequirementAdditionSuccessComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BloodRequirementAdditionSuccessComponent = /** @class */ (function () {
                function BloodRequirementAdditionSuccessComponent() {
                }
                BloodRequirementAdditionSuccessComponent.prototype.ngOnInit = function () {
                };
                return BloodRequirementAdditionSuccessComponent;
            }());
            BloodRequirementAdditionSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-blood-requirement-addition-success',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blood-requirement-addition-success.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blood-requirement-addition-success/blood-requirement-addition-success.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blood-requirement-addition-success.component.css */ "./src/app/blood-requirement-addition-success/blood-requirement-addition-success.component.css")).default]
                })
            ], BloodRequirementAdditionSuccessComponent);
            /***/ 
        }),
        /***/ "./src/app/blood.service.ts": 
        /*!**********************************!*\
          !*** ./src/app/blood.service.ts ***!
          \**********************************/
        /*! exports provided: BloodService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloodService", function () { return BloodService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _User_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User/authentication.service */ "./src/app/User/authentication.service.ts");
            var BloodService = /** @class */ (function () {
                function BloodService(httpClient, authService) {
                    this.httpClient = httpClient;
                    this.authService = authService;
                }
                BloodService.prototype.addBloodRequirement = function (bloodRequirement) {
                    var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/blood-service/blood-requirement/insert";
                    var token = 'Bearer ' + this.authService.getToken();
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'content-type': 'application/json',
                            'Authorization': token
                        })
                    };
                    return this.httpClient.post(url, bloodRequirement, httpOptions);
                };
                BloodService.prototype.viewAllRequirements = function () {
                    var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/blood-service/blood-requirement/fetch";
                    return this.httpClient.get(url);
                };
                BloodService.prototype.getAllAvailableBloodGroups = function (bloodGroup, state, area) {
                    var baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/blood-service/blood-bank/blood-availability';
                    var httpOption = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'content-type': 'application/json',
                            'Authorization': 'Bearer ' + this.authService.getToken()
                        })
                    };
                    var url = baseUrl + '/' + bloodGroup + '/' + state + '/' + area;
                    return this.httpClient.get(url, httpOption);
                };
                BloodService.prototype.bookHospitalSlot = function (hospitalBookingrequest, username) {
                    var baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/blood-service/blood-bank/donate/' + username;
                    var httpOption = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'content-type': 'application/json',
                            'Authorization': 'Bearer ' + this.authService.getToken()
                        })
                    };
                    return this.httpClient.post(baseUrl, hospitalBookingrequest, httpOption);
                };
                BloodService.prototype.getAllDonorExperience = function () {
                    var baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/blood-service/blood-bank/donor-experience';
                    var httpOption = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'content-type': 'application/json'
                        })
                    };
                    return this.httpClient.get(baseUrl);
                };
                BloodService.prototype.postDonorExperience = function (userExperience) {
                    var baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/blood-service/blood-bank/donor-experience';
                    var httpOption = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'content-type': 'application/json',
                            'Authorization': 'Bearer ' + this.authService.getToken()
                        })
                    };
                    return this.httpClient.post(baseUrl, userExperience, httpOption);
                };
                BloodService.prototype.getFAQs = function () {
                    var baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/blood-service/blood-bank/faq';
                    var httpOption;
                    if (this.authService.isLogin()) {
                        httpOption = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                'content-type': 'application/json',
                                'Authorization': 'Bearer ' + this.authService.getToken()
                            })
                        };
                    }
                    else {
                        httpOption = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                'content-type': 'application/json'
                            })
                        };
                    }
                    return this.httpClient.get(baseUrl, httpOption);
                };
                BloodService.prototype.postQuestion = function (username, faq) {
                    var baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/blood-service/blood-bank/faq/' + username;
                    var httpOption = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'content-type': 'application/json',
                            'Authorization': 'Bearer ' + this.authService.getToken()
                        })
                    };
                    return this.httpClient.post(baseUrl, faq, httpOption);
                };
                BloodService.prototype.answerQuestion = function (faq) {
                    var baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/blood-service/blood-bank/faq/edit-question';
                    var httpOption = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'content-type': 'application/json',
                            'Authorization': 'Bearer ' + this.authService.getToken()
                        })
                    };
                    console.log(faq);
                    return this.httpClient.put(baseUrl, faq, httpOption);
                };
                BloodService.prototype.getUsersQuestion = function (username) {
                    var baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/blood-service/blood-bank/faq/get-question/' + username;
                    var httpOption = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'content-type': 'application/json',
                            'Authorization': 'Bearer ' + this.authService.getToken()
                        })
                    };
                    return this.httpClient.get(baseUrl, httpOption);
                };
                BloodService.prototype.getNotification = function (username) {
                    var baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/blood-service/blood-bank/notification/' + username;
                    var httpOption = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'content-type': 'application/json',
                            'Authorization': 'Bearer ' + this.authService.getToken()
                        })
                    };
                    return this.httpClient.get(baseUrl, httpOption);
                };
                BloodService.prototype.removeNotifications = function (id) {
                    var baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/blood-service/blood-bank/notification-history-id/' + id;
                    var httpOption = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'content-type': 'application/json',
                            'Authorization': 'Bearer ' + this.authService.getToken()
                        })
                    };
                    return this.httpClient.delete(baseUrl, httpOption);
                };
                BloodService.prototype.updateNotification = function (username) {
                    var baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/blood-service/blood-bank/update-notification/' + username;
                    var httpOption = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'content-type': 'application/json',
                            'Authorization': 'Bearer ' + this.authService.getToken()
                        })
                    };
                    return this.httpClient.put(baseUrl, null, httpOption);
                };
                BloodService.prototype.showAvailableUnits = function () {
                    var baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/blood-service/blood-bank/blood-availability/fetch-blood-availability-admin/';
                    var httpOption = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'content-type': 'application/json',
                            'Authorization': 'Bearer ' + this.authService.getToken()
                        })
                    };
                    return this.httpClient.get(baseUrl, httpOption);
                };
                BloodService.prototype.postBloodNeededNotification = function (bloodGroup) {
                    var baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/blood-service/blood-bank/blood-availability/insert-notification-specific-blood-group/' + bloodGroup;
                    var httpOption = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'content-type': 'application/json',
                            'Authorization': 'Bearer ' + this.authService.getToken()
                        })
                    };
                    return this.httpClient.post(baseUrl, null, httpOption);
                };
                BloodService.prototype.postBloodDonationNotification = function (userName) {
                    var baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/blood-service/blood-bank/blood-donation-notification/' + userName;
                    var httpOption = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'content-type': 'application/json',
                            'Authorization': 'Bearer ' + this.authService.getToken()
                        })
                    };
                    return this.httpClient.post(baseUrl, null, httpOption);
                };
                return BloodService;
            }());
            BloodService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _User_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
            ]; };
            BloodService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BloodService);
            /***/ 
        }),
        /***/ "./src/app/book-hospital/book-hospital.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/book-hospital/book-hospital.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".bs-datepicker-head, .bs-datepicker-head, .bs-datepicker button:active, .bs-datepicker-body table td span.selected, \r\n.bs-datepicker-body table td.selected span, .bs-datepicker-body table td span[class*=\"select-\"]:after, \r\n.bs-datepicker-body table td[class*=\"select-\"] span:after, .bs-datepicker-body table td.active-week span:hover {\r\n  background-color: #F22C2C !important;\r\n}\r\n\r\n.bs-datepicker-body table td.week span {\r\n  color: #F22C2C !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1ob3NwaXRhbC9ib29rLWhvc3BpdGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2Jvb2staG9zcGl0YWwvYm9vay1ob3NwaXRhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJzLWRhdGVwaWNrZXItaGVhZCwgLmJzLWRhdGVwaWNrZXItaGVhZCwgLmJzLWRhdGVwaWNrZXIgYnV0dG9uOmFjdGl2ZSwgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLnNlbGVjdGVkLCBcclxuLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5zZWxlY3RlZCBzcGFuLCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW5bY2xhc3MqPVwic2VsZWN0LVwiXTphZnRlciwgXHJcbi5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGRbY2xhc3MqPVwic2VsZWN0LVwiXSBzcGFuOmFmdGVyLCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLmFjdGl2ZS13ZWVrIHNwYW46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMjJDMkMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC53ZWVrIHNwYW4ge1xyXG4gIGNvbG9yOiAjRjIyQzJDICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/book-hospital/book-hospital.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/book-hospital/book-hospital.component.ts ***!
          \**********************************************************/
        /*! exports provided: BookHospitalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookHospitalComponent", function () { return BookHospitalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _form_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-service.service */ "./src/app/form-service.service.ts");
            /* harmony import */ var _blood_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blood.service */ "./src/app/blood.service.ts");
            /* harmony import */ var _User_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../User/authentication.service */ "./src/app/User/authentication.service.ts");
            var BookHospitalComponent = /** @class */ (function () {
                function BookHospitalComponent(formService, bloodService, authService) {
                    this.formService = formService;
                    this.bloodService = bloodService;
                    this.authService = authService;
                    this.sucessMsg = false;
                    this.slotTakenFlag = false;
                    this.hospitalBooked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                BookHospitalComponent.prototype.ngOnInit = function () {
                    this.hospitalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        'hospitalName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]),
                        'city': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]),
                        'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        'timeGroup': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            'time': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                        })
                    });
                    this.timeGroup = this.formService.getTimeSlot();
                    this.hospitalNameFlag = false;
                    this.cityFlag = false;
                };
                BookHospitalComponent.prototype.bookAppointment = function (hospitalForm) {
                    var _this = this;
                    this.hospitalBookingRequest.hospitalName = hospitalForm.value.hospitalName;
                    this.hospitalBookingRequest.city = hospitalForm.value.city;
                    this.hospitalBookingRequest.date = hospitalForm.value.date;
                    this.hospitalBookingRequest.time = hospitalForm.value.timeGroup.time;
                    if (hospitalForm.valid && !this.hospitalNameFlag && !this.cityFlag) {
                        this.bloodService.bookHospitalSlot(this.hospitalBookingRequest, this.authService.getLoggedinUser()).subscribe(function (response) {
                            _this.sucessMsg = true;
                            _this.slotTakenFlag = false;
                        }, function (error) {
                            _this.slotTakenFlag = true;
                        });
                    }
                    else {
                        this.slotTakenFlag = true;
                    }
                    this.hospitalBooked.emit(true);
                };
                BookHospitalComponent.prototype.checkLength = function (value) {
                    if (value.length >= 15) {
                        this.hospitalNameFlag = true;
                    }
                    else {
                        this.hospitalNameFlag = false;
                    }
                };
                BookHospitalComponent.prototype.checkCityLength = function (value) {
                    if (value.length >= 15) {
                        this.cityFlag = true;
                    }
                    else {
                        this.cityFlag = false;
                    }
                };
                BookHospitalComponent.prototype.slotBookedFlag = function () {
                    this.slotTakenFlag = false;
                };
                return BookHospitalComponent;
            }());
            BookHospitalComponent.ctorParameters = function () { return [
                { type: _form_service_service__WEBPACK_IMPORTED_MODULE_3__["FormServiceService"] },
                { type: _blood_service__WEBPACK_IMPORTED_MODULE_4__["BloodService"] },
                { type: _User_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BookHospitalComponent.prototype, "hospitalBookingRequest", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], BookHospitalComponent.prototype, "hospitalBooked", void 0);
            BookHospitalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-book-hospital',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-hospital.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/book-hospital/book-hospital.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-hospital.component.css */ "./src/app/book-hospital/book-hospital.component.css")).default]
                })
            ], BookHospitalComponent);
            /***/ 
        }),
        /***/ "./src/app/donate/donate.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/donate/donate.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvbmF0ZS9kb25hdGUuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/donate/donate.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/donate/donate.component.ts ***!
          \********************************************/
        /*! exports provided: DonateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateComponent", function () { return DonateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _User_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../User/authentication.service */ "./src/app/User/authentication.service.ts");
            var DonateComponent = /** @class */ (function () {
                function DonateComponent(authService) {
                    this.authService = authService;
                }
                DonateComponent.prototype.ngOnInit = function () {
                };
                DonateComponent.prototype.isLogin = function () {
                    if (this.authService.isLogin()) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                DonateComponent.prototype.getUserName = function () {
                    return this.authService.getLoggedinUser();
                };
                return DonateComponent;
            }());
            DonateComponent.ctorParameters = function () { return [
                { type: _User_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
            ]; };
            DonateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-donate',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./donate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donate/donate.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./donate.component.css */ "./src/app/donate/donate.component.css")).default]
                })
            ], DonateComponent);
            /***/ 
        }),
        /***/ "./src/app/experiences/experiences.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/experiences/experiences.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2VzL2V4cGVyaWVuY2VzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/experiences/experiences.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/experiences/experiences.component.ts ***!
          \******************************************************/
        /*! exports provided: ExperiencesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencesComponent", function () { return ExperiencesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ExperiencesComponent = /** @class */ (function () {
                function ExperiencesComponent(router) {
                    this.router = router;
                }
                ExperiencesComponent.prototype.ngOnInit = function () {
                };
                ExperiencesComponent.prototype.goToExperiences = function () {
                    this.router.navigate(['/post-donor-experience']);
                };
                return ExperiencesComponent;
            }());
            ExperiencesComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            ExperiencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-experiences',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./experiences.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/experiences/experiences.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./experiences.component.css */ "./src/app/experiences/experiences.component.css")).default]
                })
            ], ExperiencesComponent);
            /***/ 
        }),
        /***/ "./src/app/faq/faq.component.css": 
        /*!***************************************!*\
          !*** ./src/app/faq/faq.component.css ***!
          \***************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhcS9mYXEuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/faq/faq.component.ts": 
        /*!**************************************!*\
          !*** ./src/app/faq/faq.component.ts ***!
          \**************************************/
        /*! exports provided: FaqComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function () { return FaqComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _blood_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blood.service */ "./src/app/blood.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _User_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../User/authentication.service */ "./src/app/User/authentication.service.ts");
            var FaqComponent = /** @class */ (function () {
                function FaqComponent(bloodService, authService) {
                    this.bloodService = bloodService;
                    this.authService = authService;
                    //faqArray:string[];
                    this.faqArray = [];
                    this.answerPosted = false;
                    this.answerSuccess = false;
                    this.arrayEmpty = false;
                    this.answerQuestion = false;
                }
                FaqComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.user = {
                        username: "",
                        firstname: "",
                        lastname: "",
                        age: 0,
                        gender: "",
                        contactNo: 0,
                        email: "",
                        password: "",
                        weight: 0,
                        state: "",
                        area: "",
                        pinCode: 0,
                        bloodGroup: "",
                        confirmPassword: ""
                    };
                    this.bloodService.getFAQs().subscribe(function (response) {
                        _this.faqArray = response;
                    });
                    this.faqForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        question: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
                    });
                    this.faq = {
                        id: null,
                        user: this.user,
                        question: "",
                        answer: null
                    };
                    this.modifyFaq = {
                        id: null,
                        user: this.user,
                        question: "",
                        answer: null
                    };
                    this.answerFaqForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
                    });
                };
                FaqComponent.prototype.postQuestion = function (faqForm) {
                    var _this = this;
                    this.faq.question = faqForm.value.question;
                    this.bloodService.postQuestion(this.authService.getLoggedinUser(), this.faq).subscribe(function (response) { console.log(response); _this.answerSuccess = true; });
                };
                FaqComponent.prototype.isLoggedIn = function () {
                    return this.authService.isLogin();
                };
                FaqComponent.prototype.getUserName = function () {
                    return this.authService.getLoggedinUser();
                };
                FaqComponent.prototype.giveAnswer = function (faq) {
                    this.answerQuestion = true;
                    this.faqid = faq.id;
                    this.modifyFaq = faq;
                };
                FaqComponent.prototype.answerFaqFunction = function (answerFaqForm) {
                    var _this = this;
                    this.modifyFaq.answer = answerFaqForm.value.answer;
                    this.bloodService.answerQuestion(this.modifyFaq).subscribe(function (response) { _this.answerPosted = true; console.log(_this.answerPosted); });
                };
                FaqComponent.prototype.isEmpty = function () {
                    if (this.faqArray.length > 0) {
                        this.arrayEmpty = false;
                    }
                    else {
                        this.arrayEmpty = true;
                    }
                    return this.arrayEmpty;
                };
                return FaqComponent;
            }());
            FaqComponent.ctorParameters = function () { return [
                { type: _blood_service__WEBPACK_IMPORTED_MODULE_2__["BloodService"] },
                { type: _User_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
            ]; };
            FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-faq',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./faq.component.css */ "./src/app/faq/faq.component.css")).default]
                })
            ], FaqComponent);
            /***/ 
        }),
        /***/ "./src/app/form-service.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/form-service.service.ts ***!
          \*****************************************/
        /*! exports provided: FormServiceService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormServiceService", function () { return FormServiceService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FormServiceService = /** @class */ (function () {
                function FormServiceService() {
                    this.gender = ["Male", "Female"];
                    this.bloodGroup = ["A+", "O+", "B+", "AB+", "A-", "O-", "B-", "AB-"];
                    this.timeSlot = ["9 AM - 10 AM", "10 AM - 11 AM", "11 AM - 12 PM", "12 PM - 1 PM", "1 PM - 2 PM", "2 PM - 3 PM", "3 PM - 4 PM", "4 PM - 5 PM", "5 PM - 6 PM"];
                    this.states = [
                        {
                            name: "Andaman and Nicobar Islands",
                            cities: ["", "Nicobar", "North and Middle Andaman", "South Andaman"]
                        },
                        {
                            name: "Andhra Pradesh",
                            cities: ["", "Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari"]
                        },
                        {
                            name: "Arunachal Pradesh",
                            cities: ["", "Tawang", "West Kameng", "East Kameng", "Pakke-Kessang", "Papum Pare", "Kurung Kumey", "Kra Daadi", "Lower Subansiri", "Upper Subansiri", "West Siang", "Shi-Yomi", "East Siang", "Siang", "Upper Siang", "Lower Siang", "Lepa-Rada", "Lower Dibang Valley", "Upper Dibang Valley", "Anjaw", "Lohit", "Namsai", "Changlang", "Tirap", "Longding", "Kamle"]
                        },
                        {
                            name: "Assam",
                            cities: ["", "Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup Metropolitan", "Kamrup", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"]
                        },
                        {
                            name: "Bihar",
                            cities: ["", "Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Khagaria", "Kishanganj", "Kaimur", "Katihar", "Lakhisarai", "Madhubani", "Munger", "Madhepura", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Sheohar", "Sheikhpura", "Saran", "Sitamarhi", "Supaul", "Siwan", "Vaishali", "West Champaran"]
                        },
                        {
                            name: "Chandigarh",
                            cities: ["", "Chandigarh"]
                        },
                        {
                            name: "Chhattisgarh",
                            cities: ["", "Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband	", "Janjgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"]
                        },
                        {
                            name: "Dadra and Nagar Haveli",
                            cities: ["", "Amli", "Dadra", "Nagar Haveli", "Silvassa"]
                        },
                        {
                            name: "Daman and Diu",
                            cities: ["", "Daman", "Diu"]
                        },
                        {
                            name: "Delhi",
                            cities: ["", "New Delhi", "Alipur", "Kanjhawala", "Rajouri Garden", "Dwarka", "Saket", "Defence Colony", "Daryaganj", "Nand Nagri", "Shahdara", "Preet Vihar"]
                        },
                        {
                            name: "Goa",
                            cities: ["", "North Goa", "South Goa"]
                        },
                        {
                            name: "Gujarat",
                            cities: ["", "Ahmedabad", "Vadodara", "Anand", "Chhota Udaipur", "Dahod", "Kheda", "Mahisagar", "Panchmahal", "Gandhinagar", "Aravalli", "Banaskantha", "Mehsana", "Patan", "Sabarkantha", "Rajkot", "Amreli", "Bhavnagar", "Botad", "Devbhoomi Dwarka", "Gir Somnath", "Jamnagar", "Junagadh", "Morbi", "Porbandar", "Surendranagar", "Kachchh", "Surat", "Bharuch", "Dang", "Narmada", "Navsari", "Tapi", "Valsad"]
                        },
                        {
                            name: "Haryana",
                            cities: ["", "Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"]
                        },
                        {
                            name: "Himachal Pradesh",
                            cities: ["", "Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"]
                        },
                        {
                            name: "Jammu and Kashmir",
                            cities: ["", "Doda", "Jammu", "Kathua", "Kishtwar", "Poonch", "Rajouri", "Ramban", "Reasi", "Samba", "Udhampur", "Anantnag", "Bandipora", "Baramulla", "Budgam", "Ganderbal", "Kulgam", "Kupwara", "Pulwama", "Shopian", "Srinagar"]
                        },
                        {
                            name: "Jharkhand",
                            cities: ["", "Garhwa", "Palamu", "Latehar", "Chatra", "Hazaribagh", "Koderma", "Giridih", "Ramgarh", "Bokaro", "Dhanbad", "Gumla", "Lohardaga", "Simdega", "Ranchi", "Khunti", "West Singhbhum", "Saraikela Kharsawan", "East Singhbhum", "Jamtara", "Deoghar", "Dumka", "Pakur", "Godda", "Sahebganj"]
                        },
                        {
                            name: "Karnataka",
                            cities: ["", "Bagalkot", "Bengaluru Urban", "Bengaluru Rural", "Belagavi", "Ballari", "Bidar", "Vijayapur", "Chamarajanagar", "Chikballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Kalaburagi", "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Yadgir"]
                        },
                        {
                            name: "Kerala",
                            cities: ["", "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"]
                        },
                        {
                            name: "Ladakh",
                            cities: ["", "Kargil", "Leh"]
                        },
                        {
                            name: "Lakshadweep",
                            cities: ["", "Agatti Island", "Amini", "Andrott", "Bangaram Atoll", "Bitra", "Chetlat Island", "Kadmat Island", "Kalpeni", "Kavaratti", "Kiltan", "Minicoy"]
                        },
                        {
                            name: "Madhya Pradesh",
                            cities: ["", "Bhopal", "Raisen", "Rajgarh", "Sehore", "Vidisha", "Morena", "Sheopur", "Bhind", "Gwalior", "Ashoknagar", "Shivpuri", "Datia", "Guna", "Alirajpur", "Barwani", "Burhanpur", "Indore", "Dhar", "Jhabua", "Khandwa", "Khargone", "Balaghat", "Chhindwara", "Jabalpur", "Katni", "Mandla", "Narsinghpur", "Seoni", "Dindori", "Betul", "Harda", "Hoshangabad", "Rewa", "Satna", "Sidhi", "Singrauli", "Chhatarpur", "Damoh", "Panna", "Sagar", "Tikamgarh", "Niwari", "Anuppur", "Shahdol", "Umaria", "Agar Malwa", "Dewas", "Mandsaur", "Neemuch", "Ratlam", "Shajapur", "Ujjain"]
                        },
                        {
                            name: "Maharashtra",
                            cities: ["", "Akola", "Amravati", "Buldana", "Yavatmal", "Washim", "Aurangabad", "Beed", "Jalna", "Osmanabad", "Nanded", "Latur", "Parbhani", "Hingoli", "Mumbai City", "Mumbai Suburban", "Thane", "Palghar", "Raigad", "Ratnagiri", "Sindhudurg", "Bhandara", "Chandrapur", "Gadchiroli", "Gondia", "Nagpur", "Wardha", "Ahmednagar", "Dhule", "Jalgaon", "Nandurbar", "Nashik", "Kolhapur", "Pune", "Sangli", "Satara", "Solapur"]
                        },
                        {
                            name: "Manipur",
                            cities: ["", "Bishnupur", "Thoubal", "Imphal East", "Imphal West", "Senapati", "Ukhrul", "Chandel", "Churachandpur", "Tamenglong", "Jiribam", "Kangpokpi (Sadar Hills)", "Kakching", "Tengnoupal", "Kamjong", "Noney", "Pherzawl"]
                        },
                        {
                            name: "Meghalaya",
                            cities: ["", "East Garo Hills (Williamnagar)", "East Jaintia Hills (Khliehriat)", "East Khasi Hills (Shillong)", "North Garo Hills (Resubelpara)", "Ri Bhoi (Nongpoh)", "South Garo Hills (Baghmara)", "South West Garo Hills (Ampati)", "South West Khasi Hills (Mawkyrwat)", "West Garo Hills (Tura)", "West Jaintia Hills (Jowai)", "West Khasi Hills (Nongstoin)"]
                        },
                        {
                            name: "Mizoram",
                            cities: ["", "Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"]
                        },
                        {
                            name: "Nagaland",
                            cities: ["", "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Noklak", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"]
                        },
                        {
                            name: "Odisha",
                            cities: ["", "Angul", "Boudh (Baudh)", "Balangir", "Bargarh", "Balasore (Baleswar)", "Bhadrak", "Cuttack", "Deogarh (Debagarh)", "Dhenkanal", "Ganjam", "Gajapati", "Jharsuguda", "Jajpur", "Jagatsinghapur", "Khordha", "Keonjhar (Kendujhar)", "Kalahandi", "Kandhamal", "Koraput", "Kendrapara", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nuapada", "Nayagarh", "Puri", "Rayagada", "Sambalpur", "Subarnapur (Sonepur)", "Sundargarh"]
                        },
                        {
                            name: "Puducherry",
                            cities: ["", "Karaikal", "Mahé", "Pondicherry", "Yanam"]
                        },
                        {
                            name: "Punjab",
                            cities: ["", "Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Firozpur", "Fazilka", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Sri Muktsar Sahib", "Pathankot", "Patiala", "Rupnagar", "Sahibzada Ajit Singh Nagar", "Sangrur", "Shahid Bhagat Singh Nagar", "Taran Taran"]
                        },
                        {
                            name: "Rajasthan",
                            cities: ["", "Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalor", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"]
                        },
                        {
                            name: "Sikkim",
                            cities: ["", "Chungthang", "Gangtok", "Gyalshing", "Mangan", "Namchi", "Pakyong", "Ravong", "Rongli", "Soreng"]
                        },
                        {
                            name: "Tamil Nadu",
                            cities: ["", "Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanniyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "The Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivaganga", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"]
                        },
                        {
                            name: "Telangana",
                            cities: ["", "Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagitial", "Jangaon", "Jayashankar Bhupalapally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem", "Mahabubabad", "Mahabubnagar", "Mancherial district", "Medak", "Medchal–Malkajgiri", "Mulugu", "Nagarkurnool", "Narayanpet", "Nalgonda", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"]
                        },
                        {
                            name: "Tripura",
                            cities: ["", "Agartala", "Amarpur", "Amarpur", "Dharmanagar", "Kailasahar", "Kamalpur", "Khowai", "Kumarghat", "Ranirbazar", "Sabroom", "Sonamura", "Teliamura", "Udaipur", "Bishalgarh", "Santirbazar", "Ambassa", "Jirania", "Mohanpur", "Melaghar", "Panisagar"]
                        },
                        {
                            name: "Uttar Pradesh",
                            cities: ["", "Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Azamgarh", "Badaun", "Bahraich", "Ballia", "Balrampur", "Banda District", "Barabanki", "Bareilly", "Basti", "Bijnor", "Bulandshahr", "Chandauli(Varanasi Dehat)", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur District", "Hardoi", "Hathras", "Jaunpur District", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Rae Bareli", "Rampur", "Saharanpur", "Sant Kabir Nagar", "Sant Ravidas Nagar", "Sambhal", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi (Kashi)"]
                        },
                        {
                            name: "Uttarakhand",
                            cities: ["", "Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"]
                        },
                        {
                            name: "West Bengal",
                            cities: ["", "Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"]
                        }
                    ];
                }
                FormServiceService.prototype.getGenders = function () {
                    return this.gender;
                };
                FormServiceService.prototype.getBloodGroups = function () {
                    return this.bloodGroup;
                };
                FormServiceService.prototype.getTimeSlot = function () {
                    return this.timeSlot;
                };
                FormServiceService.prototype.getStates = function () {
                    return this.states;
                };
                return FormServiceService;
            }());
            FormServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], FormServiceService);
            /***/ 
        }),
        /***/ "./src/app/header/header.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/header/header.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/header/header.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/header/header.component.ts ***!
          \********************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _User_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../User/authentication.service */ "./src/app/User/authentication.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _blood_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blood.service */ "./src/app/blood.service.ts");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(router, authService, bloodService) {
                    this.router = router;
                    this.authService = authService;
                    this.bloodService = bloodService;
                    this.notificationStatus = false;
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.authService.getLoggedinUser() != 'admin' && this.authService.getLoggedinUser() != null) {
                        this.bloodService.getNotification(this.authService.getLoggedinUser()).subscribe(function (response) { _this.bloodNotifications = response; console.log(_this.bloodNotifications); });
                    }
                };
                HeaderComponent.prototype.logoutUser = function () {
                    this.authService.logout();
                    this.router.navigate(['/home']);
                };
                HeaderComponent.prototype.isLoggedIn = function () {
                    return this.authService.isLogin();
                };
                HeaderComponent.prototype.getUserName = function () {
                    return this.authService.getLoggedinUser();
                };
                HeaderComponent.prototype.showTips = function () {
                    this.router.navigate(['/tips']);
                };
                HeaderComponent.prototype.viewQuestions = function (username) {
                    this.router.navigate(['/view-questions']);
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _User_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
                { type: _blood_service__WEBPACK_IMPORTED_MODULE_4__["BloodService"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/home-page/home-page.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/home-page/home-page.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/home-page/home-page.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/home-page/home-page.component.ts ***!
          \**************************************************/
        /*! exports provided: HomePageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () { return HomePageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _blood_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blood.service */ "./src/app/blood.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _User_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../User/authentication.service */ "./src/app/User/authentication.service.ts");
            var HomePageComponent = /** @class */ (function () {
                function HomePageComponent(router, bloodService, authService) {
                    this.router = router;
                    this.bloodService = bloodService;
                    this.authService = authService;
                    this.notificationStatus = false;
                    this.notificationAdded = false;
                    this.requirementIsThere = false;
                }
                HomePageComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.bloodService.viewAllRequirements().subscribe(function (response) {
                        console.log(response);
                        _this.bloodRequirement = response;
                        var count = Object.keys(_this.bloodRequirement).length;
                        if (count != 0) {
                            _this.requirementIsThere = true;
                        }
                        _this.dataLoaded = Promise.resolve(true);
                    });
                    if (this.authService.getLoggedinUser() != 'admin' && this.authService.getLoggedinUser() != null) {
                        this.bloodService.getNotification(this.authService.getLoggedinUser()).subscribe(function (response) {
                            var e_1, _a;
                            _this.bloodNotifications = response;
                            console.log(_this.bloodNotifications);
                            try {
                                for (var _b = __values(_this.bloodNotifications), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    var notification = _c.value;
                                    if (notification.status == false) {
                                        _this.notificationStatus = true;
                                    }
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        });
                    }
                    if (this.authService.getLoggedinUser() != 'admin' && this.authService.getLoggedinUser() != null) {
                        this.bloodService.postBloodDonationNotification(this.authService.getLoggedinUser()).subscribe(function (response) {
                            _this.bloodService.getNotification(_this.authService.getLoggedinUser()).subscribe(function (response) {
                                var e_2, _a;
                                _this.bloodNotifications = response;
                                console.log(_this.bloodNotifications);
                                try {
                                    for (var _b = __values(_this.bloodNotifications), _c = _b.next(); !_c.done; _c = _b.next()) {
                                        var notification = _c.value;
                                        if (notification.status == false) {
                                            _this.notificationStatus = true;
                                        }
                                    }
                                }
                                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                finally {
                                    try {
                                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                    }
                                    finally { if (e_2) throw e_2.error; }
                                }
                            });
                        });
                    }
                };
                HomePageComponent.prototype.isLogin = function () {
                    return this.authService.isLogin();
                };
                HomePageComponent.prototype.getUsername = function () {
                    return this.authService.getLoggedinUser();
                };
                return HomePageComponent;
            }());
            HomePageComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _blood_service__WEBPACK_IMPORTED_MODULE_2__["BloodService"] },
                { type: _User_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
            ]; };
            HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")).default]
                })
            ], HomePageComponent);
            /***/ 
        }),
        /***/ "./src/app/notifications/notifications.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/notifications/notifications.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/notifications/notifications.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/notifications/notifications.component.ts ***!
          \**********************************************************/
        /*! exports provided: NotificationsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () { return NotificationsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _blood_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blood.service */ "./src/app/blood.service.ts");
            /* harmony import */ var _User_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../User/authentication.service */ "./src/app/User/authentication.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var NotificationsComponent = /** @class */ (function () {
                function NotificationsComponent(bloodService, authService, route) {
                    this.bloodService = bloodService;
                    this.authService = authService;
                    this.route = route;
                    this.bloodNotifications = [];
                    this.notificationStatus = false;
                    this.noNotifications = false;
                }
                NotificationsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var value = this.route.snapshot.paramMap.get("value");
                    if (this.authService.getLoggedinUser() != 'admin' && this.authService.getLoggedinUser() != null) {
                        this.bloodService.getNotification(this.authService.getLoggedinUser()).subscribe(function (response) { _this.bloodNotifications = response; console.log(_this.bloodNotifications); });
                    }
                    if (value == 'true') {
                        this.bloodService.updateNotification(this.authService.getLoggedinUser()).subscribe(function (response) { });
                    }
                    console.log(value);
                };
                NotificationsComponent.prototype.removeNotifications = function (id) {
                    var _this = this;
                    return this.bloodService.removeNotifications(id).subscribe(function (response) {
                        _this.bloodService.getNotification(_this.authService.getLoggedinUser()).subscribe(function (response) { _this.bloodNotifications = response; });
                    });
                };
                NotificationsComponent.prototype.isEmpty = function () {
                    if (this.bloodNotifications.length > 0) {
                        this.noNotifications = false;
                    }
                    else {
                        this.noNotifications = true;
                    }
                    return this.noNotifications;
                };
                return NotificationsComponent;
            }());
            NotificationsComponent.ctorParameters = function () { return [
                { type: _blood_service__WEBPACK_IMPORTED_MODULE_2__["BloodService"] },
                { type: _User_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
            ]; };
            NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-notifications',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notifications.component.css */ "./src/app/notifications/notifications.component.css")).default]
                })
            ], NotificationsComponent);
            /***/ 
        }),
        /***/ "./src/app/post-donor-experience/post-donor-experience.component.css": 
        /*!***************************************************************************!*\
          !*** ./src/app/post-donor-experience/post-donor-experience.component.css ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtZG9ub3ItZXhwZXJpZW5jZS9wb3N0LWRvbm9yLWV4cGVyaWVuY2UuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/post-donor-experience/post-donor-experience.component.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/post-donor-experience/post-donor-experience.component.ts ***!
          \**************************************************************************/
        /*! exports provided: PostDonorExperienceComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDonorExperienceComponent", function () { return PostDonorExperienceComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _User_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../User/authentication.service */ "./src/app/User/authentication.service.ts");
            /* harmony import */ var _blood_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blood.service */ "./src/app/blood.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var PostDonorExperienceComponent = /** @class */ (function () {
                function PostDonorExperienceComponent(authService, bloodService) {
                    this.authService = authService;
                    this.bloodService = bloodService;
                    this.shareStatus = false;
                }
                PostDonorExperienceComponent.prototype.ngOnInit = function () {
                    this.donorExperienceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                        'hospitalName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(15)
                        ]),
                        'city': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(15)
                        ]),
                        'feedbackComments': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(500)
                        ])
                    });
                };
                PostDonorExperienceComponent.prototype.share = function (form) {
                    var _this = this;
                    var donorExperience = {
                        hospitalName: form.value.hospitalName,
                        city: form.value.city,
                        feedbackComments: form.value.feedbackComments
                    };
                    this.bloodService.postDonorExperience(donorExperience).subscribe(function (response) {
                        _this.shareStatus = response;
                    });
                };
                return PostDonorExperienceComponent;
            }());
            PostDonorExperienceComponent.ctorParameters = function () { return [
                { type: _User_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
                { type: _blood_service__WEBPACK_IMPORTED_MODULE_3__["BloodService"] }
            ]; };
            PostDonorExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-post-donor-experience',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-donor-experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post-donor-experience/post-donor-experience.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-donor-experience.component.css */ "./src/app/post-donor-experience/post-donor-experience.component.css")).default]
                })
            ], PostDonorExperienceComponent);
            /***/ 
        }),
        /***/ "./src/app/route-to-tips/route-to-tips.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/route-to-tips/route-to-tips.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlLXRvLXRpcHMvcm91dGUtdG8tdGlwcy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/route-to-tips/route-to-tips.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/route-to-tips/route-to-tips.component.ts ***!
          \**********************************************************/
        /*! exports provided: RouteToTipsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteToTipsComponent", function () { return RouteToTipsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var RouteToTipsComponent = /** @class */ (function () {
                function RouteToTipsComponent() {
                }
                RouteToTipsComponent.prototype.ngOnInit = function () {
                };
                return RouteToTipsComponent;
            }());
            RouteToTipsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-route-to-tips',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./route-to-tips.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/route-to-tips/route-to-tips.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./route-to-tips.component.css */ "./src/app/route-to-tips/route-to-tips.component.css")).default]
                })
            ], RouteToTipsComponent);
            /***/ 
        }),
        /***/ "./src/app/show-available-units/show-available-units.component.css": 
        /*!*************************************************************************!*\
          !*** ./src/app/show-available-units/show-available-units.component.css ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3ctYXZhaWxhYmxlLXVuaXRzL3Nob3ctYXZhaWxhYmxlLXVuaXRzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/show-available-units/show-available-units.component.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/show-available-units/show-available-units.component.ts ***!
          \************************************************************************/
        /*! exports provided: ShowAvailableUnitsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAvailableUnitsComponent", function () { return ShowAvailableUnitsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _blood_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blood.service */ "./src/app/blood.service.ts");
            /* harmony import */ var _User_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../User/authentication.service */ "./src/app/User/authentication.service.ts");
            var ShowAvailableUnitsComponent = /** @class */ (function () {
                function ShowAvailableUnitsComponent(bloodService, authService) {
                    var _this = this;
                    this.bloodService = bloodService;
                    this.authService = authService;
                    this.notified = false;
                    this.bloodService.showAvailableUnits().subscribe(function (response) { _this.availableUnits = response; });
                }
                ShowAvailableUnitsComponent.prototype.ngOnInit = function () {
                };
                ShowAvailableUnitsComponent.prototype.sendNotifications = function (bloodGroup) {
                    var _this = this;
                    this.bloodService.postBloodNeededNotification(bloodGroup).subscribe(function (response) { _this.notified = true; });
                };
                return ShowAvailableUnitsComponent;
            }());
            ShowAvailableUnitsComponent.ctorParameters = function () { return [
                { type: _blood_service__WEBPACK_IMPORTED_MODULE_2__["BloodService"] },
                { type: _User_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
            ]; };
            ShowAvailableUnitsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-show-available-units',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-available-units.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-available-units/show-available-units.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show-available-units.component.css */ "./src/app/show-available-units/show-available-units.component.css")).default]
                })
            ], ShowAvailableUnitsComponent);
            /***/ 
        }),
        /***/ "./src/app/signup/signup.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/signup/signup.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".section-margin {\r\n    margin-top: 12%;\r\n    margin-bottom: 10%;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLW1hcmdpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiB9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/signup/signup.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/signup/signup.component.ts ***!
          \********************************************/
        /*! exports provided: SignupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function () { return SignupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _User_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../User/user.service */ "./src/app/User/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _form_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form-service.service */ "./src/app/form-service.service.ts");
            var SignupComponent = /** @class */ (function () {
                function SignupComponent(userService, router, formService) {
                    this.userService = userService;
                    this.router = router;
                    this.formService = formService;
                    this.stateClick = false;
                    this.stateEmpty = true;
                    this.bloodGroupEmpty = true;
                    this.areaEmpty = true;
                    this.areaClick = false;
                    this.checkClick = false;
                    this.checkpass = false;
                    this.userPresent = false;
                }
                SignupComponent.prototype.ngOnInit = function () {
                    this.user = {
                        username: "",
                        firstname: "",
                        lastname: "",
                        age: 0,
                        gender: "",
                        contactNo: 0,
                        email: "",
                        password: "",
                        weight: 0,
                        state: "",
                        area: "",
                        pinCode: 0,
                        bloodGroup: "",
                        confirmPassword: ""
                    };
                    this.stateList = this.formService.getStates();
                    this.bloodGroups = this.formService.getBloodGroups();
                    this.gender = this.formService.getGenders();
                    this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]),
                        firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
                        lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
                        password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]),
                        confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                        age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)]),
                        genderDivision: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                        }),
                        contactNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]),
                        emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
                        weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                        bloodGroupDivision: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            bloodGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                        }),
                        stateDivision: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                        }),
                        areaDivision: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                        }),
                        pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
                    });
                };
                SignupComponent.prototype.changeState = function (count) {
                    this.cities = this.stateList.find(function (con) { return con.name == count; }).cities;
                };
                SignupComponent.prototype.checkIfMatchingPasswords = function () {
                    if (this.signupForm.value.password == this.signupForm.value.confirmPassword) {
                        this.checkpass = true;
                    }
                    else {
                        this.checkpass = false;
                    }
                };
                SignupComponent.prototype.bloodGroupCheck = function (value) {
                    if (value != '') {
                        this.bloodGroupEmpty = false;
                    }
                    else {
                        this.bloodGroupEmpty = true;
                    }
                    this.checkClick = true;
                };
                SignupComponent.prototype.userAdd = function (signupForm) {
                    var _this = this;
                    this.user.username = signupForm.value.userName;
                    this.user.firstname = signupForm.value.firstName;
                    this.user.lastname = signupForm.value.lastName;
                    this.user.password = signupForm.value.password;
                    this.user.confirmPassword = signupForm.value.confirmPassword;
                    this.user.age = signupForm.value.age;
                    this.user.gender = signupForm.value.genderDivision.gender;
                    this.user.contactNo = signupForm.value.contactNo;
                    this.user.email = signupForm.value.emailId;
                    this.user.weight = signupForm.value.weight;
                    this.user.bloodGroup = signupForm.value.bloodGroupDivision.bloodGroup;
                    this.user.state = signupForm.value.stateDivision.state;
                    this.user.area = signupForm.value.areaDivision.area;
                    this.user.pinCode = signupForm.value.pincode;
                    this.userService.addUser(this.user).subscribe(function (response) { _this.router.navigate(["/signup-success"]); }, function (error) { return _this.userPresent = true; });
                };
                SignupComponent.prototype.stateCheck = function (value) {
                    if (value != "") {
                        this.stateEmpty = false;
                    }
                    else {
                        this.stateEmpty = true;
                    }
                    this.areaEmpty = true;
                    this.areaClick = true;
                    this.stateClick = true;
                };
                SignupComponent.prototype.areaClickFun = function (value) {
                    if (value == "") {
                        this.areaEmpty = true;
                        this.areaClick = true;
                    }
                    else {
                        this.areaEmpty = false;
                        this.areaClick = false;
                    }
                };
                SignupComponent.prototype.changeValue = function () {
                    this.userPresent = false;
                };
                return SignupComponent;
            }());
            SignupComponent.ctorParameters = function () { return [
                { type: _User_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _form_service_service__WEBPACK_IMPORTED_MODULE_5__["FormServiceService"] }
            ]; };
            SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")).default]
                })
            ], SignupComponent);
            /***/ 
        }),
        /***/ "./src/app/tips/tips.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/tips/tips.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpcHMvdGlwcy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/tips/tips.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/tips/tips.component.ts ***!
          \****************************************/
        /*! exports provided: TipsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipsComponent", function () { return TipsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TipsComponent = /** @class */ (function () {
                function TipsComponent() {
                }
                TipsComponent.prototype.ngOnInit = function () {
                    this.dropIcon = ["chevron_right", "chevron_right", "chevron_right", "chevron_right", "chevron_right"];
                };
                TipsComponent.prototype.dropDownValue = function (value) {
                    if (this.dropIcon[0] != "expand_more" && value == 0) {
                        this.dropIcon[0] = "expand_more";
                    }
                    else {
                        this.dropIcon[0] = "chevron_right";
                    }
                    if (this.dropIcon[1] != "expand_more" && value == 1) {
                        this.dropIcon[1] = "expand_more";
                    }
                    else {
                        this.dropIcon[1] = "chevron_right";
                    }
                    if (this.dropIcon[2] != "expand_more" && value == 2) {
                        this.dropIcon[2] = "expand_more";
                    }
                    else {
                        this.dropIcon[2] = "chevron_right";
                    }
                    if (this.dropIcon[3] != "expand_more" && value == 3) {
                        this.dropIcon[3] = "expand_more";
                    }
                    else {
                        this.dropIcon[3] = "chevron_right";
                    }
                    if (this.dropIcon[4] != "expand_more" && value == 4) {
                        this.dropIcon[4] = "expand_more";
                    }
                    else {
                        this.dropIcon[4] = "chevron_right";
                    }
                };
                return TipsComponent;
            }());
            TipsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tips',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tips.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tips/tips.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tips.component.css */ "./src/app/tips/tips.component.css")).default]
                })
            ], TipsComponent);
            /***/ 
        }),
        /***/ "./src/app/user-questions/user-questions.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/user-questions/user-questions.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcXVlc3Rpb25zL3VzZXItcXVlc3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/user-questions/user-questions.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/user-questions/user-questions.component.ts ***!
          \************************************************************/
        /*! exports provided: UserQuestionsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserQuestionsComponent", function () { return UserQuestionsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _blood_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blood.service */ "./src/app/blood.service.ts");
            /* harmony import */ var _User_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../User/authentication.service */ "./src/app/User/authentication.service.ts");
            var UserQuestionsComponent = /** @class */ (function () {
                function UserQuestionsComponent(bloodService, authService) {
                    this.bloodService = bloodService;
                    this.authService = authService;
                }
                UserQuestionsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.bloodService.getUsersQuestion(this.authService.getLoggedinUser()).subscribe(function (response) { _this.faqArray = response; });
                };
                return UserQuestionsComponent;
            }());
            UserQuestionsComponent.ctorParameters = function () { return [
                { type: _blood_service__WEBPACK_IMPORTED_MODULE_2__["BloodService"] },
                { type: _User_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
            ]; };
            UserQuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-questions',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-questions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-questions/user-questions.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-questions.component.css */ "./src/app/user-questions/user-questions.component.css")).default]
                })
            ], UserQuestionsComponent);
            /***/ 
        }),
        /***/ "./src/app/view-all-blood-requirements/view-all-blood-requirements.component.css": 
        /*!***************************************************************************************!*\
          !*** ./src/app/view-all-blood-requirements/view-all-blood-requirements.component.css ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctYWxsLWJsb29kLXJlcXVpcmVtZW50cy92aWV3LWFsbC1ibG9vZC1yZXF1aXJlbWVudHMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/view-all-blood-requirements/view-all-blood-requirements.component.ts": 
        /*!**************************************************************************************!*\
          !*** ./src/app/view-all-blood-requirements/view-all-blood-requirements.component.ts ***!
          \**************************************************************************************/
        /*! exports provided: ViewAllBloodRequirementsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllBloodRequirementsComponent", function () { return ViewAllBloodRequirementsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _blood_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blood.service */ "./src/app/blood.service.ts");
            var ViewAllBloodRequirementsComponent = /** @class */ (function () {
                function ViewAllBloodRequirementsComponent(router, bloodService) {
                    this.router = router;
                    this.bloodService = bloodService;
                    this.requirementIsThere = false;
                }
                ViewAllBloodRequirementsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.bloodService.viewAllRequirements().subscribe(function (response) {
                        console.log(response);
                        _this.bloodRequirement = response;
                        var count = Object.keys(_this.bloodRequirement).length;
                        if (count != 0) {
                            _this.requirementIsThere = true;
                        }
                        _this.dataLoaded = Promise.resolve(true);
                    });
                };
                ViewAllBloodRequirementsComponent.prototype.donate = function () {
                    this.router.navigate(['/donation-request']);
                };
                return ViewAllBloodRequirementsComponent;
            }());
            ViewAllBloodRequirementsComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _blood_service__WEBPACK_IMPORTED_MODULE_3__["BloodService"] }
            ]; };
            ViewAllBloodRequirementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-view-all-blood-requirements',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-all-blood-requirements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-all-blood-requirements/view-all-blood-requirements.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-all-blood-requirements.component.css */ "./src/app/view-all-blood-requirements/view-all-blood-requirements.component.css")).default]
                })
            ], ViewAllBloodRequirementsComponent);
            /***/ 
        }),
        /***/ "./src/app/view-all-donor-experiences/view-all-donor-experiences.component.css": 
        /*!*************************************************************************************!*\
          !*** ./src/app/view-all-donor-experiences/view-all-donor-experiences.component.css ***!
          \*************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".bg-color {\r\n    background-color: #d3d3d3;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1hbGwtZG9ub3ItZXhwZXJpZW5jZXMvdmlldy1hbGwtZG9ub3ItZXhwZXJpZW5jZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctYWxsLWRvbm9yLWV4cGVyaWVuY2VzL3ZpZXctYWxsLWRvbm9yLWV4cGVyaWVuY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/view-all-donor-experiences/view-all-donor-experiences.component.ts": 
        /*!************************************************************************************!*\
          !*** ./src/app/view-all-donor-experiences/view-all-donor-experiences.component.ts ***!
          \************************************************************************************/
        /*! exports provided: ViewAllDonorExperiencesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllDonorExperiencesComponent", function () { return ViewAllDonorExperiencesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _blood_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blood.service */ "./src/app/blood.service.ts");
            var ViewAllDonorExperiencesComponent = /** @class */ (function () {
                function ViewAllDonorExperiencesComponent(bloodService) {
                    this.bloodService = bloodService;
                }
                ViewAllDonorExperiencesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.bloodService.getAllDonorExperience().subscribe(function (response) {
                        _this.donorExperience = response;
                    });
                };
                return ViewAllDonorExperiencesComponent;
            }());
            ViewAllDonorExperiencesComponent.ctorParameters = function () { return [
                { type: _blood_service__WEBPACK_IMPORTED_MODULE_2__["BloodService"] }
            ]; };
            ViewAllDonorExperiencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-view-all-donor-experiences',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-all-donor-experiences.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-all-donor-experiences/view-all-donor-experiences.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-all-donor-experiences.component.css */ "./src/app/view-all-donor-experiences/view-all-donor-experiences.component.css")).default]
                })
            ], ViewAllDonorExperiencesComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                baseUrl: "http://10.230.171.219:8083"
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
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
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
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\online-blood-bank-system\webapp\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map