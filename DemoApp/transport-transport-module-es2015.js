(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transport-transport-module"],{

/***/ "./src/app/post-login/transport/routes/new-route/new-route.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/post-login/transport/routes/new-route/new-route.component.ts ***!
  \******************************************************************************/
/*! exports provided: NewRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRouteComponent", function() { return NewRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/route.service */ "./src/app/post-login/transport/services/route.service.ts");
/* harmony import */ var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/component/boxes/card/card.component */ "./src/app/shared/component/boxes/card/card.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/component/boxes/responsive/responsive.component */ "./src/app/shared/component/boxes/responsive/responsive.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _route_basic_info_route_basic_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./route-basic-info/route-basic-info.component */ "./src/app/post-login/transport/routes/new-route/route-basic-info/route-basic-info.component.ts");
/* harmony import */ var _shared_component_boxes_section_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/component/boxes/section/section.component */ "./src/app/shared/component/boxes/section/section.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/fesm2015/expansion.js");
/* harmony import */ var _shared_component_boxes_smart_div_smart_div_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/component/boxes/smart-div/smart-div.component */ "./src/app/shared/component/boxes/smart-div/smart-div.component.ts");
/* harmony import */ var _route_stoppage_info_route_stoppage_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./route-stoppage-info/route-stoppage-info.component */ "./src/app/post-login/transport/routes/new-route/route-stoppage-info/route-stoppage-info.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/component/buttons/form-buttons/form-buttons.component */ "./src/app/shared/component/buttons/form-buttons/form-buttons.component.ts");






















function NewRouteComponent_form_1_mat_expansion_panel_7_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r1099 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewRouteComponent_form_1_mat_expansion_panel_7_div_5_Template_mat_icon_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1099); const idxStoppage_r1095 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r1097 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r1097.removeStoppageClicked(idxStoppage_r1095); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewRouteComponent_form_1_mat_expansion_panel_7_Template(rf, ctx) { if (rf & 1) {
    const _r1101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "smart-div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NewRouteComponent_form_1_mat_expansion_panel_7_div_5_Template, 3, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "route-stoppage-info", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("stoppageValueChanged", function NewRouteComponent_form_1_mat_expansion_panel_7_Template_route_stoppage_info_stoppageValueChanged_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1101); const ctx_r1100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r1100.stoppageValueChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stoppage_r1094 = ctx.$implicit;
    const idxStoppage_r1095 = ctx.index;
    const ctx_r1091 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", stoppage_r1094)("badge", idxStoppage_r1095 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (stoppage_r1094.controls["stoppageName"] == null ? null : stoppage_r1094.controls["stoppageName"].value) ? stoppage_r1094.controls["stoppageName"] == null ? null : stoppage_r1094.controls["stoppageName"].value : "---------", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1091.isViewMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", stoppage_r1094)("isViewMode", ctx_r1091.isViewMode)("initialFormValues", (ctx_r1091.initialFormValues == null ? null : ctx_r1091.initialFormValues.stoppage == null ? null : ctx_r1091.initialFormValues.stoppage.length) > idxStoppage_r1095 && ctx_r1091.initialFormValues.stoppage[idxStoppage_r1095]);
} }
function NewRouteComponent_form_1_p_8_Template(rf, ctx) { if (rf & 1) {
    const _r1103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewRouteComponent_form_1_p_8_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1103); const ctx_r1102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r1102.addStoppageClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "traffic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewRouteComponent_form_1_form_buttons_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "form-buttons", 17);
} if (rf & 2) {
    const ctx_r1093 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1093.mainForm)("isChangeMode", ctx_r1093.changeModeId);
} }
function NewRouteComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewRouteComponent_form_1_Template_form_ngSubmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1105); const ctx_r1104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1104.onSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "responsive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "route-basic-info", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-accordion", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewRouteComponent_form_1_mat_expansion_panel_7_Template, 7, 7, "mat-expansion-panel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NewRouteComponent_form_1_p_8_Template, 6, 0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NewRouteComponent_form_1_form_buttons_9_Template, 1, 2, "form-buttons", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1090 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1090.mainForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1090.mainForm.controls["basicInfo"])("isViewMode", ctx_r1090.isViewMode)("initialFormValues", ctx_r1090.initialFormValues && ctx_r1090.initialFormValues.basicInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "traffic")("title", "Stoppage List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multi", ctx_r1090.masterData.expendMultiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1090.mainForm["controls"].stoppage["controls"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1090.isViewMode && ctx_r1090.mainForm.controls["stoppage"].valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1090.isViewMode);
} }
class NewRouteComponent {
    constructor(fb, changeDetector, sharedService, routeService) {
        this.fb = fb;
        this.changeDetector = changeDetector;
        this.sharedService = sharedService;
        this.routeService = routeService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onSaveSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initialFormValues = null;
        this.changeModeId = null;
        this.isViewMode = false;
        this.showHeader = true;
        this.childCard = false;
        this.mainForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.title = "New Route";
        this.subTitle = "Add a new route";
        this.isLoading = false;
        this.isPopulatingFormDb = false;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_3__["MasterData"];
        this.open = false;
        this.stoppageCount = 0;
    }
    ngOnInit() {
        this.setTitleMessages();
        this.mainForm = this.fb.group({
            basicInfo: this.fb.group({}),
            stoppage: this.fb.array([]),
        });
        this.sharedService.setFormCommonFields(this.mainForm);
        if (this.changeModeId) {
            this.populateFromDB();
        }
    }
    setTitleMessages() {
        if (this.changeModeId) {
            this.title = "Update Route.";
            this.subTitle = "Please update following details of route.";
            if (this.isViewMode) {
                this.title = "View Route.";
                this.subTitle = "View following details of route.";
            }
        }
    }
    addStoppageClicked() {
        this.addStoppage();
        this.open = true; // keep open the newly added stoppage
        this.sharedService.pageLevelSave("New stoppage form");
    }
    addStoppage(id = null, status = null) {
        this.stoppageCount = this.stoppageCount + 1;
        this.mainForm.get('stoppage')
            .push(this.sharedService.setFormCommonFields(this.fb.group({}), id, status));
    }
    removeStoppageClicked(idx) {
        let dialogRef = this.sharedService.openConfirmDialog();
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe((confirmed) => {
            if (confirmed) {
                this.removeStoppage(idx);
                this.sharedService.pageLevelDelete("Stoppage");
            }
        });
    }
    removeStoppage(idx) {
        this.mainForm.get('stoppage').removeAt(idx);
        this.stoppageCount--;
    }
    stoppageValueChanged(event) {
        this.calculateRouteLength();
    }
    calculateRouteLength() {
        let totalDistance = 0;
        this.mainForm.get("stoppage").controls.forEach(stoppage => {
            try {
                let stoppageDistance = parseInt(stoppage.get("distance").value);
                if (stoppageDistance > 0) {
                    totalDistance = totalDistance + stoppageDistance;
                }
            }
            catch (ex) {
                // invalid distance value
            }
        });
        let routeLengthControl = this.mainForm.get("basicInfo").get("routeLength");
        routeLengthControl && routeLengthControl.setValue(totalDistance);
    }
    populateFromDB() {
        //--- Fill Route information for View/Edit mode from Database
        this.isLoading = true;
        this.isPopulatingFormDb = true;
        this.routeService.getRoute(this.changeModeId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe((result) => {
            result.forEach(element => {
                this.initialFormValues = element;
                this.mainForm.get('_id').setValue(this.initialFormValues._id);
                this.mainForm.get('status').setValue(this.initialFormValues.status);
                //--- Fill stoppage for View/Edit mode
                for (let idx = 0; idx < element["stoppage"].length; idx++) {
                    let id = (element["stoppage"][idx])["_id"];
                    let status = (element["stoppage"][idx])["status"];
                    this.addStoppage(id, status);
                }
            });
            this.isLoading = false;
            this.isPopulatingFormDb = false;
        }, (error) => {
            this.isLoading = false;
            this.isPopulatingFormDb = false;
            console.log(error);
        });
    }
    onSubmit(event) {
        this.mainForm.markAllAsTouched();
        event.preventDefault();
        event.stopPropagation();
        if (this.mainForm.valid) {
            this.isLoading = true;
            this.routeService.saveRoute(this.mainForm.getRawValue(), this.changeModeId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
                .subscribe((result) => {
                this.isLoading = false;
                this.onSaveSuccess.emit(true);
                this.sharedService.openSnackBar("Route's information saved Successfully.", "x", "success");
                this.mainForm.reset();
            }, (error) => {
                this.isLoading = false;
                console.log(error);
            });
        }
        else {
            this.sharedService.openSnackBar("Some fields are invalid. Please fill them properly.", "x", "fail");
        }
    }
    ngAfterViewChecked() {
        this.changeDetector.detectChanges();
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
NewRouteComponent.ɵfac = function NewRouteComponent_Factory(t) { return new (t || NewRouteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"])); };
NewRouteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewRouteComponent, selectors: [["app-new-route"]], inputs: { initialFormValues: "initialFormValues", changeModeId: "changeModeId", isViewMode: "isViewMode", showHeader: "showHeader", childCard: "childCard" }, outputs: { onSaveSuccess: "onSaveSuccess" }, decls: 2, vars: 6, consts: [[3, "loading", "title", "subTitle", "cardButtons", "header"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["fxFlex", ""], [3, "form", "isViewMode", "initialFormValues"], [3, "icon", "title"], ["hideToggle", "true", 3, "multi"], ["class", "no-shadow", 4, "ngFor", "ngForOf"], ["class", "rt", 4, "ngIf"], [3, "form", "isChangeMode", 4, "ngIf"], [1, "no-shadow"], [3, "form", "badge"], [3, "form", "isViewMode", "initialFormValues", "stoppageValueChanged"], [1, "rt"], ["matSuffix", "", 1, "icon-delete", 3, "click"], ["mat-raised-button", "", "type", "button", "value", "Add Stoppage", 1, "addOneMoreButton", 3, "click"], ["matSuffix", ""], [3, "form", "isChangeMode"]], template: function NewRouteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewRouteComponent_form_1_Template, 10, 10, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.isLoading)("title", ctx.title)("subTitle", ctx.subTitle)("cardButtons", false)("header", ctx.showHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isPopulatingFormDb);
    } }, directives: [_shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__["ResponsiveComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _route_basic_info_route_basic_info_component__WEBPACK_IMPORTED_MODULE_11__["RouteBasicInfoComponent"], _shared_component_boxes_section_section_component__WEBPACK_IMPORTED_MODULE_12__["SectionComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionPanelTitle"], _shared_component_boxes_smart_div_smart_div_component__WEBPACK_IMPORTED_MODULE_14__["SmartDivComponent"], _route_stoppage_info_route_stoppage_info_component__WEBPACK_IMPORTED_MODULE_15__["RouteStoppageInfoComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_19__["FormButtonsComponent"]], styles: [".mat-expansion-panel-header[_ngcontent-%COMP%]{\r\n    height: 35px !important;\r\n    border-style: none;\r\n    border-color: #555;\r\n    border-width: 0px 0px 2px 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi90cmFuc3BvcnQvcm91dGVzL25ldy1yb3V0ZS9uZXctcm91dGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vdHJhbnNwb3J0L3JvdXRlcy9uZXctcm91dGUvbmV3LXJvdXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzU1NTtcclxuICAgIGJvcmRlci13aWR0aDogMHB4IDBweCAycHggMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewRouteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-route',
                templateUrl: './new-route.component.html',
                styleUrls: ['./new-route.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }, { type: _services_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"] }]; }, { onSaveSuccess: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], initialFormValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changeModeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isViewMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], childCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/transport/routes/new-route/route-basic-info/route-basic-info.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/post-login/transport/routes/new-route/route-basic-info/route-basic-info.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: RouteBasicInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteBasicInfoComponent", function() { return RouteBasicInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/component/dynamic-form/field.interface */ "./src/app/shared/component/dynamic-form/field.interface.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/component/dynamic-form/dynamic-form/dynamic-form.component */ "./src/app/shared/component/dynamic-form/dynamic-form/dynamic-form.component.ts");






class RouteBasicInfoComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
        this.initialFormValues = null;
        this.isViewMode = false;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_2__["MasterData"];
    }
    ngOnInit() {
        this.fieldsConfig = [
            {
                isViewMode: this.isViewMode,
                type: "input",
                label: "Route Name",
                inputType: "text",
                name: "routeName",
                icon: "map",
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
            },
            {
                isViewMode: true,
                type: "input",
                label: "Route Length",
                inputType: "text",
                name: "routeLength",
                icon: "swap_calls",
                hint: "Auto calculate by stoppages.",
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
            },
            {
                isViewMode: this.isViewMode,
                type: "textarea",
                label: "Description",
                name: "description",
            }
        ];
        this.sharedService.setFormInitialValueForChangeMode(this.fieldsConfig, this.initialFormValues);
    }
}
RouteBasicInfoComponent.ɵfac = function RouteBasicInfoComponent_Factory(t) { return new (t || RouteBasicInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"])); };
RouteBasicInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RouteBasicInfoComponent, selectors: [["route-basic-info"]], inputs: { form: "form", initialFormValues: "initialFormValues", fieldsConfig: "fieldsConfig", isViewMode: "isViewMode" }, decls: 1, vars: 2, consts: [[3, "form", "fields"]], template: function RouteBasicInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dynamic-form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.form)("fields", ctx.fieldsConfig);
    } }, directives: [_shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vdHJhbnNwb3J0L3JvdXRlcy9uZXctcm91dGUvcm91dGUtYmFzaWMtaW5mby9yb3V0ZS1iYXNpYy1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteBasicInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'route-basic-info',
                templateUrl: './route-basic-info.component.html',
                styleUrls: ['./route-basic-info.component.css']
            }]
    }], function () { return [{ type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }]; }, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], initialFormValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fieldsConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isViewMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/transport/routes/new-route/route-stoppage-info/route-stoppage-info.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/post-login/transport/routes/new-route/route-stoppage-info/route-stoppage-info.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: RouteStoppageInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteStoppageInfoComponent", function() { return RouteStoppageInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/component/dynamic-form/field.interface */ "./src/app/shared/component/dynamic-form/field.interface.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/component/dynamic-form/dynamic-form/dynamic-form.component */ "./src/app/shared/component/dynamic-form/dynamic-form/dynamic-form.component.ts");








class RouteStoppageInfoComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.stoppageValueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initialFormValues = null;
        this.isViewMode = false;
        this.routeDistanceChanged$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_2__["MasterData"];
    }
    ngOnInit() {
        this.fieldsConfig = [
            {
                isViewMode: this.isViewMode,
                type: "input",
                label: "Stoppage Name",
                inputType: "text",
                name: "stoppageName",
                icon: "traffic",
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
            },
            {
                isViewMode: this.isViewMode,
                type: "input",
                label: "Distance",
                inputType: "number",
                name: "distance",
                icon: "swap_calls",
                onValueChange: this.routeDistanceChanged$,
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
            },
            {
                isViewMode: this.isViewMode,
                type: "input",
                label: "Fairs",
                inputType: "number",
                name: "fairs",
                icon: "money",
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
            },
            {
                isViewMode: this.isViewMode,
                type: "textarea",
                label: "Description",
                name: "description",
            }
        ];
        this.sharedService.setFormInitialValueForChangeMode(this.fieldsConfig, this.initialFormValues);
        this.registerDropdownChangeEvents();
    }
    registerDropdownChangeEvents() {
        this.routeDistanceChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
            .subscribe(val => {
            this.stoppageValueChanged.emit(val);
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
RouteStoppageInfoComponent.ɵfac = function RouteStoppageInfoComponent_Factory(t) { return new (t || RouteStoppageInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"])); };
RouteStoppageInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RouteStoppageInfoComponent, selectors: [["route-stoppage-info"]], inputs: { form: "form", initialFormValues: "initialFormValues", fieldsConfig: "fieldsConfig", isViewMode: "isViewMode" }, outputs: { stoppageValueChanged: "stoppageValueChanged" }, decls: 1, vars: 2, consts: [[3, "form", "fields"]], template: function RouteStoppageInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dynamic-form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.form)("fields", ctx.fieldsConfig);
    } }, directives: [_shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_6__["DynamicFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vdHJhbnNwb3J0L3JvdXRlcy9uZXctcm91dGUvcm91dGUtc3RvcHBhZ2UtaW5mby9yb3V0ZS1zdG9wcGFnZS1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteStoppageInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'route-stoppage-info',
                templateUrl: './route-stoppage-info.component.html',
                styleUrls: ['./route-stoppage-info.component.css']
            }]
    }], function () { return [{ type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }]; }, { stoppageValueChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], initialFormValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fieldsConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isViewMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/transport/routes/route-list/route-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/post-login/transport/routes/route-list/route-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: RouteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteListComponent", function() { return RouteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/route.service */ "./src/app/post-login/transport/services/route.service.ts");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/post-login/post-login.service */ "./src/app/post-login/post-login.service.ts");
/* harmony import */ var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/component/boxes/card/card.component */ "./src/app/shared/component/boxes/card/card.component.ts");
/* harmony import */ var _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/component/boxes/large-screen/large-screen.component */ "./src/app/shared/component/boxes/large-screen/large-screen.component.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/fesm2015/sort.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_component_boxes_small_screen_small_screen_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/component/boxes/small-screen/small-screen.component */ "./src/app/shared/component/boxes/small-screen/small-screen.component.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/fesm2015/paginator.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/directives/tool-tip.directive */ "./src/app/shared/directives/tool-tip.directive.ts");
/* harmony import */ var _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/component/boxes/row/row.component */ "./src/app/shared/component/boxes/row/row.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/component/boxes/no-record-found/no-record-found.component */ "./src/app/shared/component/boxes/no-record-found/no-record-found.component.ts");





















function RouteListComponent_tr_17_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r1043 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RouteListComponent_tr_17_button_11_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1043); const route_r1037 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r1041 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1041.editClicked(route_r1037._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RouteListComponent_tr_17_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r1046 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RouteListComponent_tr_17_button_12_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1046); const route_r1037 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r1044 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1044.deleteClicked(route_r1037._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RouteListComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r1048 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RouteListComponent_tr_17_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1048); const route_r1037 = ctx.$implicit; const ctx_r1047 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1047.viewClicked(route_r1037._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RouteListComponent_tr_17_button_11_Template, 3, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RouteListComponent_tr_17_button_12_Template, 3, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const route_r1037 = ctx.$implicit;
    const idx_r1038 = ctx.index;
    const ctx_r1034 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1034.paging.pageIndex * ctx_r1034.paging.pageSize + idx_r1038 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](route_r1037.basicInfo.routeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](route_r1037.basicInfo.routeLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1034.editPermissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1034.editPermissions);
} }
function RouteListComponent_ng_container_19_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r1056 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RouteListComponent_ng_container_19_button_10_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1056); const route_r1049 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r1054 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1054.editClicked(route_r1049._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RouteListComponent_ng_container_19_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r1059 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RouteListComponent_ng_container_19_button_11_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1059); const route_r1049 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r1057 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1057.deleteClicked(route_r1049._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RouteListComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r1061 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "row", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RouteListComponent_ng_container_19_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1061); const route_r1049 = ctx.$implicit; const ctx_r1060 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1060.viewClicked(route_r1049._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RouteListComponent_ng_container_19_button_10_Template, 3, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RouteListComponent_ng_container_19_button_11_Template, 3, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "row", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Route Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "swap_calls");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Route length ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const route_r1049 = ctx.$implicit;
    const idx_r1050 = ctx.index;
    const ctx_r1035 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childCard", true)("header", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("# ", ctx_r1035.paging.pageIndex * ctx_r1035.paging.pageSize + idx_r1050 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1035.editPermissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1035.editPermissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", route_r1049.basicInfo.routeName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", route_r1049.basicInfo.routeLength, " K.M ");
} }
function RouteListComponent_no_record_found_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "no-record-found");
} }
class RouteListComponent {
    constructor(routeService, changeDetector, sharedService, plService) {
        this.routeService = routeService;
        this.changeDetector = changeDetector;
        this.sharedService = sharedService;
        this.plService = plService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.viewButtonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editButtonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteButtonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageTitle = "";
        this.isLoading = false;
        this.environment = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_2__["MasterData"];
        this.routes = [];
        this.viewUser = false;
        this.editPermissions = false;
        this.searchParams = null;
        this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
        };
        this.sortParams = {
            fieldName: "basicInfo.firstName",
            isAsc: true
        };
        this.editPermissions = this.plService.getPageEntitlements(7, 1) == 2;
    }
    ngOnInit() {
        this.getList();
    }
    getList() {
        this.isLoading = true;
        let SearchObject = {
            SearchParameters: this.searchParams,
            paging: {
                "pageIndex": this.paging.pageIndex,
                "pageSize": this.paging.pageSize
            },
            sorting: {
                "fieldName": this.sortParams.fieldName,
                "isAsc": this.sortParams.isAsc
            }
        };
        this.routeService
            .getRouteList(SearchObject)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
            .subscribe((result) => {
            this.isLoading = false;
            this.routes = result.data;
            this.paging.length = result.count;
        }, (error) => {
            this.isLoading = false;
            console.log(error);
        });
    }
    viewClicked(id) {
        this.viewButtonEvent.emit(id);
    }
    editClicked(id) {
        this.editButtonEvent.emit(id);
    }
    deleteClicked(id) {
        this.deleteButtonEvent.emit(id);
    }
    CardCrossEvent_ViewUser() {
        this.viewUser = false;
    }
    sortClicked(sort) {
        this.paging.pageIndex = 0;
        this.sortParams.fieldName = sort.active;
        this.sortParams.isAsc = sort.direction === 'asc';
        this.getList();
        this.changeDetector.detectChanges();
    }
    pagingClicked(paginator) {
        this.paging.pageIndex = paginator.pageIndex;
        this.paging.pageSize = paginator.pageSize;
        this.getList();
        this.changeDetector.detectChanges();
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
RouteListComponent.ɵfac = function RouteListComponent_Factory(t) { return new (t || RouteListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_6__["PostLoginService"])); };
RouteListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RouteListComponent, selectors: [["app-route-list"]], inputs: { pageTitle: "pageTitle", roleId: "roleId" }, outputs: { viewButtonEvent: "viewButtonEvent", editButtonEvent: "editButtonEvent", deleteButtonEvent: "deleteButtonEvent" }, decls: 22, vars: 10, consts: [[3, "loading", "title", "subTitle", "refresh"], ["matSort", "", 1, "table", 3, "matSortChange"], [1, "thead"], [1, "sr"], ["matRipple", "", "mat-sort-header", "basicInfo.routeName"], ["matRipple", "", "mat-sort-header", "basicInfo.distance"], [1, "action"], ["class", "tr", 4, "ngFor", "ngForOf"], [1, "default-font"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "length", "showFirstLastButtons", "pageSize", "pageSizeOptions", "page"], [1, "tr"], [1, "sr-col"], [1, "rt"], ["mat-icon-button", "", "appToolTip", "'View Route'", 1, "icon-view", 3, "click"], ["mat-icon-button", ""], ["mat-icon-button", "", "appToolTip", "'Edit Route'", "class", "icon-edit", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "appToolTip", "'Delete Route'", "class", "icon-delete", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "appToolTip", "'Edit Route'", 1, "icon-edit", 3, "click"], ["mat-icon-button", "", "appToolTip", "'Delete Route'", 1, "icon-delete", 3, "click"], [3, "childCard", "header"], ["gap", "2px"], ["fxFlex", "30%"], ["fxFlex", "", 1, "rt"], ["mat-icon-button", "", "appToolTip", "'Delete Route'", "class", "big-icon-delete", 3, "click", 4, "ngIf"], ["gap", "0px"], [1, "bold"], [1, "small-screen-data"], [1, "fill-space"], ["mat-icon-button", "", "appToolTip", "'Delete Route'", 1, "big-icon-delete", 3, "click"]], template: function RouteListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function RouteListComponent_Template_card_refresh_0_listener($event) { return ctx.getList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "large-screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function RouteListComponent_Template_table_matSortChange_2_listener($event) { return ctx.sortClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Route Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Length (K.M) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "swap_calls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RouteListComponent_tr_17_Template, 13, 5, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small-screen", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RouteListComponent_ng_container_19_Template, 30, 7, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RouteListComponent_no_record_found_20_Template, 1, 0, "no-record-found", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-paginator", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function RouteListComponent_Template_mat_paginator_page_21_listener($event) { return ctx.pagingClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.isLoading)("title", "Route List")("subTitle", "Manage your route for transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.routes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.routes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.routes.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.paging.length)("showFirstLastButtons", ctx.masterData.paging.showFirstLastButtons)("pageSize", ctx.paging.pageSize)("pageSizeOptions", ctx.masterData.paging.pageSizeOptions);
    } }, directives: [_shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_8__["LargeScreenComponent"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRipple"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortHeader"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _shared_component_boxes_small_screen_small_screen_component__WEBPACK_IMPORTED_MODULE_13__["SmallScreenComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_16__["ToolTipDirective"], _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_17__["ROWComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultFlexDirective"], _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_19__["NoRecordFoundComponent"]], styles: [".small-screen-data[_ngcontent-%COMP%]{\r\n    margin: 5px 0px 0px 10px;\r\n    font-size: 12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi90cmFuc3BvcnQvcm91dGVzL3JvdXRlLWxpc3Qvcm91dGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wb3N0LWxvZ2luL3RyYW5zcG9ydC9yb3V0ZXMvcm91dGUtbGlzdC9yb3V0ZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc21hbGwtc2NyZWVuLWRhdGF7XHJcbiAgICBtYXJnaW46IDVweCAwcHggMHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-route-list',
                templateUrl: './route-list.component.html',
                styleUrls: ['./route-list.component.css']
            }]
    }], function () { return [{ type: _services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }, { type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_6__["PostLoginService"] }]; }, { viewButtonEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], editButtonEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteButtonEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], roleId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/transport/routes/route-management/route-management.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/post-login/transport/routes/route-management/route-management.component.ts ***!
  \********************************************************************************************/
/*! exports provided: RouteManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteManagementComponent", function() { return RouteManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _route_list_route_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../route-list/route-list.component */ "./src/app/post-login/transport/routes/route-list/route-list.component.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/route.service */ "./src/app/post-login/transport/services/route.service.ts");
/* harmony import */ var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/post-login/post-login.service */ "./src/app/post-login/post-login.service.ts");
/* harmony import */ var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/component/boxes/responsive/responsive.component */ "./src/app/shared/component/boxes/responsive/responsive.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_component_boxes_card_bottom_card_bottom_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/component/boxes/card-bottom/card-bottom.component */ "./src/app/shared/component/boxes/card-bottom/card-bottom.component.ts");
/* harmony import */ var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/component/boxes/card/card.component */ "./src/app/shared/component/boxes/card/card.component.ts");
/* harmony import */ var _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/component/dynamic-form/dynamic-form/dynamic-form.component */ "./src/app/shared/component/dynamic-form/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/component/buttons/form-buttons/form-buttons.component */ "./src/app/shared/component/buttons/form-buttons/form-buttons.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/directives/tool-tip.directive */ "./src/app/shared/directives/tool-tip.directive.ts");
/* harmony import */ var _new_route_new_route_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../new-route/new-route.component */ "./src/app/post-login/transport/routes/new-route/new-route.component.ts");






















const _c0 = ["searchCard"];
function RouteManagementComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r1068 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RouteManagementComponent_button_2_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1068); const ctx_r1067 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1067.addNewClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add New Route ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RouteManagementComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r1070 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RouteManagementComponent_button_12_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1070); const ctx_r1069 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1069.backToListClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_return");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Back to Route List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RouteManagementComponent_app_new_route_15_Template(rf, ctx) { if (rf & 1) {
    const _r1072 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-new-route", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSaveSuccess", function RouteManagementComponent_app_new_route_15_Template_app_new_route_onSaveSuccess_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1072); const ctx_r1071 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1071.onSaveSuccess($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1065 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("changeModeId", ctx_r1065.Id)("isViewMode", ctx_r1065.showViewPage);
} }
function RouteManagementComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r1074 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RouteManagementComponent_button_18_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1074); const ctx_r1073 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1073.deleteRoutePermanently(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Delete And Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RouteManagementComponent {
    constructor(fb, sharedService, routeService, plService) {
        this.fb = fb;
        this.sharedService = sharedService;
        this.routeService = routeService;
        this.plService = plService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.showViewPage = false;
        this.showAddChangePage = false;
        this.showListPage = true;
        this.showDeleteButton = false;
        this.editPermissions = false;
        this.isLoading = false;
        this.Id = null;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_4__["MasterData"];
        this.searchConfig = [
            {
                isViewMode: false,
                type: "input",
                label: "Route Name",
                inputType: "text",
                name: "routeName",
                icon: "map"
            },
            {
                isViewMode: false,
                type: "input",
                label: "Route Length",
                inputType: "number",
                name: "routeLength",
                icon: "local_gas_station"
            }
        ];
        this.searchForm = this.fb.group({});
        this.editPermissions = this.plService.getPageEntitlements(7, 1) === 2;
    }
    ngOnInit() {
    }
    onSearchClick() {
        this._ListPage.searchParams = this.searchForm.value;
        this._ListPage.paging.pageIndex = 0;
        this._ListPage.getList();
        this.searchCard.hide();
    }
    addNewClick() {
        this.Id = null;
        this.showAddChangePage = true;
        this.showViewPage = this.showListPage = false;
    }
    backToListClick() {
        this.showListPage = true;
        this.showViewPage = this.showAddChangePage = false;
    }
    onSaveSuccess(event) {
        this.backToListClick();
        if (this._ListPage) {
            this._ListPage.getList();
        }
    }
    viewButtonEvent(event) {
        this.Id = event;
        this.showViewPage = true;
        this.showDeleteButton = this.showListPage = this.showAddChangePage = false;
    }
    editButtonEvent(event) {
        this.showAddChangePage = true;
        this.Id = event;
        this.showDeleteButton = this.showViewPage = this.showListPage = false;
    }
    deleteButtonEvent(event) {
        this.viewButtonEvent(event);
        this.showDeleteButton = true;
    }
    deleteRoutePermanently() {
        let dialogRef = this.sharedService.openConfirmDialog("You want to delete this 'Route'?");
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$))
            .subscribe((confirmed) => {
            if (confirmed) {
                this.isLoading = true;
                this.routeService.deleteRoute(this.Id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$))
                    .subscribe((result) => {
                    this.backToListClick();
                    this._ListPage.getList();
                    this.isLoading = false;
                }, (error) => {
                    this.isLoading = false;
                });
            }
        }, (error) => {
            this.isLoading = false;
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
RouteManagementComponent.ɵfac = function RouteManagementComponent_Factory(t) { return new (t || RouteManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_route_service__WEBPACK_IMPORTED_MODULE_7__["RouteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_8__["PostLoginService"])); };
RouteManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RouteManagementComponent, selectors: [["app-route-management"]], viewQuery: function RouteManagementComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_route_list_route_list_component__WEBPACK_IMPORTED_MODULE_3__["RouteListComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._ListPage = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchCard = _t.first);
    } }, decls: 19, vars: 14, consts: [["colGap", "50px"], ["fxFlex", "30"], ["type", "button", "mat-raised-button", "", "class", "btn", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 3, "click", 4, "ngIf"], ["fxFlex", ""], [3, "form", "hidden", "title"], ["searchCard", ""], [3, "header"], [3, "formGroup", "ngSubmit"], [3, "form", "fields"], [3, "form", "isSearchForm", "onReset"], ["type", "button", "class", "btn", "mat-raised-button", "", "appToolTip", "'Go back to Route List'", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 3, "click", 4, "ngIf"], [3, "changeModeId", "isViewMode", "onSaveSuccess", 4, "ngIf"], [3, "hidden", "viewButtonEvent", "editButtonEvent", "deleteButtonEvent"], ["type", "button", "mat-raised-button", "", "class", "delete-button padding", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", "mat-raised-button", "", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 1, "btn", 3, "click"], ["type", "button", "mat-raised-button", "", "appToolTip", "'Go back to Route List'", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 1, "btn", 3, "click"], [3, "changeModeId", "isViewMode", "onSaveSuccess"], ["type", "button", "mat-raised-button", "", "type", "button", 1, "delete-button", "padding", 3, "click"]], template: function RouteManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "responsive", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RouteManagementComponent_button_2_Template, 4, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "card-bottom", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RouteManagementComponent_Template_form_ngSubmit_7_listener($event) { return ctx.onSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dynamic-form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form-buttons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onReset", function RouteManagementComponent_Template_form_buttons_onReset_9_listener($event) { return ctx.onSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RouteManagementComponent_button_12_Template, 4, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RouteManagementComponent_app_new_route_15_Template, 1, 2, "app-new-route", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-route-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewButtonEvent", function RouteManagementComponent_Template_app_route_list_viewButtonEvent_16_listener($event) { return ctx.viewButtonEvent($event); })("editButtonEvent", function RouteManagementComponent_Template_app_route_list_editButtonEvent_16_listener($event) { return ctx.editButtonEvent($event); })("deleteButtonEvent", function RouteManagementComponent_Template_app_route_list_deleteButtonEvent_16_listener($event) { return ctx.deleteButtonEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RouteManagementComponent_button_18_Template, 4, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showListPage && ctx.editPermissions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.searchForm)("hidden", !ctx.showListPage)("title", "Search Route");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.searchForm)("fields", ctx.searchConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.searchForm)("isSearchForm", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddChangePage || ctx.showViewPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddChangePage || ctx.showViewPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showListPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDeleteButton && ctx.showViewPage);
    } }, directives: [_shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__["ResponsiveComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _shared_component_boxes_card_bottom_card_bottom_component__WEBPACK_IMPORTED_MODULE_12__["CardBottomComponent"], _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_14__["DynamicFormComponent"], _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_15__["FormButtonsComponent"], _route_list_route_list_component__WEBPACK_IMPORTED_MODULE_3__["RouteListComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_18__["ToolTipDirective"], _new_route_new_route_component__WEBPACK_IMPORTED_MODULE_19__["NewRouteComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vdHJhbnNwb3J0L3JvdXRlcy9yb3V0ZS1tYW5hZ2VtZW50L3JvdXRlLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-route-management',
                templateUrl: './route-management.component.html',
                styleUrls: ['./route-management.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }, { type: _services_route_service__WEBPACK_IMPORTED_MODULE_7__["RouteService"] }, { type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_8__["PostLoginService"] }]; }, { _ListPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_route_list_route_list_component__WEBPACK_IMPORTED_MODULE_3__["RouteListComponent"]]
        }], searchCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchCard']
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/transport/services/route.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/post-login/transport/services/route.service.ts ***!
  \****************************************************************/
/*! exports provided: RouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteService", function() { return RouteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");






class RouteService {
    constructor(_http, _storageService, _sharedService) {
        this._http = _http;
        this._storageService = _storageService;
        this._sharedService = _sharedService;
        this.apiPrefix = "api/Route/";
    }
    saveRoute(routeData, id = null) {
        return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "saveRoute", routeData);
    }
    getRoute(id) {
        return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "getRoute?id=" + this._sharedService.serializeMongoObjectId(id));
    }
    getRouteList(searchParams) {
        return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "getRouteList", searchParams);
    }
    deleteRoute(id) {
        return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "deleteRoute?id=" + this._sharedService.serializeMongoObjectId(id));
    }
}
RouteService.ɵfac = function RouteService_Factory(t) { return new (t || RouteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"])); };
RouteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RouteService, factory: RouteService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/post-login/transport/services/transport.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/post-login/transport/services/transport.service.ts ***!
  \********************************************************************/
/*! exports provided: TransportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportService", function() { return TransportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");





class TransportService {
    constructor(_http, _storageService, _sharedService) {
        this._http = _http;
        this._storageService = _storageService;
        this._sharedService = _sharedService;
        this.apiPrefix = "api/Transport/";
    }
}
TransportService.ɵfac = function TransportService_Factory(t) { return new (t || TransportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"])); };
TransportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TransportService, factory: TransportService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/post-login/transport/services/vehicle.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/post-login/transport/services/vehicle.service.ts ***!
  \******************************************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");






class VehicleService {
    constructor(_http, _storageService, _sharedService) {
        this._http = _http;
        this._storageService = _storageService;
        this._sharedService = _sharedService;
        this.apiPrefix = "api/vehicle/";
    }
    saveVehicle(vehicleData, id = null) {
        return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "saveVehicle", vehicleData);
    }
    getVehicle(id) {
        return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "getVehicle?id=" + this._sharedService.serializeMongoObjectId(id));
    }
    getVehicleList(searchParams) {
        return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "getVehicleList", searchParams);
    }
    deleteVehicle(id) {
        return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "deleteVehicle?id=" + this._sharedService.serializeMongoObjectId(id));
    }
}
VehicleService.ɵfac = function VehicleService_Factory(t) { return new (t || VehicleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"])); };
VehicleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VehicleService, factory: VehicleService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/post-login/transport/transport-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/post-login/transport/transport-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: TransportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportRoutingModule", function() { return TransportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _vehicle_vehicle_management_vehicle_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vehicle/vehicle-management/vehicle-management.component */ "./src/app/post-login/transport/vehicle/vehicle-management/vehicle-management.component.ts");
/* harmony import */ var _routes_route_management_route_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/route-management/route-management.component */ "./src/app/post-login/transport/routes/route-management/route-management.component.ts");






const routes = [
    {
        path: 'vehiclemgmt',
        component: _vehicle_vehicle_management_vehicle_management_component__WEBPACK_IMPORTED_MODULE_2__["VehicleManagementComponent"],
        outlet: 'postLoginOutlet'
    },
    {
        path: 'routemgmt',
        component: _routes_route_management_route_management_component__WEBPACK_IMPORTED_MODULE_3__["RouteManagementComponent"],
        outlet: 'postLoginOutlet'
    }
];
class TransportRoutingModule {
}
TransportRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TransportRoutingModule });
TransportRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TransportRoutingModule_Factory(t) { return new (t || TransportRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TransportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransportRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/post-login/transport/transport.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/post-login/transport/transport.module.ts ***!
  \**********************************************************/
/*! exports provided: TransportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportModule", function() { return TransportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _transport_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transport-routing.module */ "./src/app/post-login/transport/transport-routing.module.ts");
/* harmony import */ var _vehicle_vehicle_management_vehicle_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle/vehicle-management/vehicle-management.component */ "./src/app/post-login/transport/vehicle/vehicle-management/vehicle-management.component.ts");
/* harmony import */ var _vehicle_new_vehicle_new_vehicle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicle/new-vehicle/new-vehicle.component */ "./src/app/post-login/transport/vehicle/new-vehicle/new-vehicle.component.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _services_transport_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/transport.service */ "./src/app/post-login/transport/services/transport.service.ts");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/vehicle.service */ "./src/app/post-login/transport/services/vehicle.service.ts");
/* harmony import */ var _vehicle_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vehicle/vehicle-list/vehicle-list.component */ "./src/app/post-login/transport/vehicle/vehicle-list/vehicle-list.component.ts");
/* harmony import */ var _vehicle_new_vehicle_vehicle_basic_info_vehicle_basic_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vehicle/new-vehicle/vehicle-basic-info/vehicle-basic-info.component */ "./src/app/post-login/transport/vehicle/new-vehicle/vehicle-basic-info/vehicle-basic-info.component.ts");
/* harmony import */ var _vehicle_new_vehicle_vehicle_maintenance_info_vehicle_maintenance_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vehicle/new-vehicle/vehicle-maintenance-info/vehicle-maintenance-info.component */ "./src/app/post-login/transport/vehicle/new-vehicle/vehicle-maintenance-info/vehicle-maintenance-info.component.ts");
/* harmony import */ var _routes_new_route_new_route_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/new-route/new-route.component */ "./src/app/post-login/transport/routes/new-route/new-route.component.ts");
/* harmony import */ var _routes_route_list_route_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/route-list/route-list.component */ "./src/app/post-login/transport/routes/route-list/route-list.component.ts");
/* harmony import */ var _routes_route_management_route_management_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes/route-management/route-management.component */ "./src/app/post-login/transport/routes/route-management/route-management.component.ts");
/* harmony import */ var _routes_new_route_route_basic_info_route_basic_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes/new-route/route-basic-info/route-basic-info.component */ "./src/app/post-login/transport/routes/new-route/route-basic-info/route-basic-info.component.ts");
/* harmony import */ var _routes_new_route_route_stoppage_info_route_stoppage_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routes/new-route/route-stoppage-info/route-stoppage-info.component */ "./src/app/post-login/transport/routes/new-route/route-stoppage-info/route-stoppage-info.component.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/route.service */ "./src/app/post-login/transport/services/route.service.ts");
/* harmony import */ var _vehicle_new_vehicle_vehicle_route_info_vehicle_route_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./vehicle/new-vehicle/vehicle-route-info/vehicle-route-info.component */ "./src/app/post-login/transport/vehicle/new-vehicle/vehicle-route-info/vehicle-route-info.component.ts");



















class TransportModule {
}
TransportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TransportModule });
TransportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TransportModule_Factory(t) { return new (t || TransportModule)(); }, providers: [
        _services_transport_service__WEBPACK_IMPORTED_MODULE_6__["TransportService"],
        _services_vehicle_service__WEBPACK_IMPORTED_MODULE_7__["VehicleService"],
        _services_route_service__WEBPACK_IMPORTED_MODULE_16__["RouteService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _transport_routing_module__WEBPACK_IMPORTED_MODULE_2__["TransportRoutingModule"],
            _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TransportModule, { declarations: [_vehicle_vehicle_management_vehicle_management_component__WEBPACK_IMPORTED_MODULE_3__["VehicleManagementComponent"], _vehicle_new_vehicle_new_vehicle_component__WEBPACK_IMPORTED_MODULE_4__["NewVehicleComponent"], _vehicle_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_8__["VehicleListComponent"], _vehicle_new_vehicle_vehicle_basic_info_vehicle_basic_info_component__WEBPACK_IMPORTED_MODULE_9__["VehicleBasicInfoComponent"],
        _vehicle_new_vehicle_vehicle_maintenance_info_vehicle_maintenance_info_component__WEBPACK_IMPORTED_MODULE_10__["VehicleMaintenanceInfoComponent"], _routes_new_route_new_route_component__WEBPACK_IMPORTED_MODULE_11__["NewRouteComponent"], _routes_route_list_route_list_component__WEBPACK_IMPORTED_MODULE_12__["RouteListComponent"], _routes_route_management_route_management_component__WEBPACK_IMPORTED_MODULE_13__["RouteManagementComponent"],
        _routes_new_route_route_basic_info_route_basic_info_component__WEBPACK_IMPORTED_MODULE_14__["RouteBasicInfoComponent"], _routes_new_route_route_stoppage_info_route_stoppage_info_component__WEBPACK_IMPORTED_MODULE_15__["RouteStoppageInfoComponent"], _vehicle_new_vehicle_vehicle_route_info_vehicle_route_info_component__WEBPACK_IMPORTED_MODULE_17__["VehicleRouteInfoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _transport_routing_module__WEBPACK_IMPORTED_MODULE_2__["TransportRoutingModule"],
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransportModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_vehicle_vehicle_management_vehicle_management_component__WEBPACK_IMPORTED_MODULE_3__["VehicleManagementComponent"], _vehicle_new_vehicle_new_vehicle_component__WEBPACK_IMPORTED_MODULE_4__["NewVehicleComponent"], _vehicle_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_8__["VehicleListComponent"], _vehicle_new_vehicle_vehicle_basic_info_vehicle_basic_info_component__WEBPACK_IMPORTED_MODULE_9__["VehicleBasicInfoComponent"],
                    _vehicle_new_vehicle_vehicle_maintenance_info_vehicle_maintenance_info_component__WEBPACK_IMPORTED_MODULE_10__["VehicleMaintenanceInfoComponent"], _routes_new_route_new_route_component__WEBPACK_IMPORTED_MODULE_11__["NewRouteComponent"], _routes_route_list_route_list_component__WEBPACK_IMPORTED_MODULE_12__["RouteListComponent"], _routes_route_management_route_management_component__WEBPACK_IMPORTED_MODULE_13__["RouteManagementComponent"],
                    _routes_new_route_route_basic_info_route_basic_info_component__WEBPACK_IMPORTED_MODULE_14__["RouteBasicInfoComponent"], _routes_new_route_route_stoppage_info_route_stoppage_info_component__WEBPACK_IMPORTED_MODULE_15__["RouteStoppageInfoComponent"], _vehicle_new_vehicle_vehicle_route_info_vehicle_route_info_component__WEBPACK_IMPORTED_MODULE_17__["VehicleRouteInfoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _transport_routing_module__WEBPACK_IMPORTED_MODULE_2__["TransportRoutingModule"],
                    _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
                ],
                providers: [
                    _services_transport_service__WEBPACK_IMPORTED_MODULE_6__["TransportService"],
                    _services_vehicle_service__WEBPACK_IMPORTED_MODULE_7__["VehicleService"],
                    _services_route_service__WEBPACK_IMPORTED_MODULE_16__["RouteService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/post-login/transport/vehicle/new-vehicle/new-vehicle.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/post-login/transport/vehicle/new-vehicle/new-vehicle.component.ts ***!
  \***********************************************************************************/
/*! exports provided: NewVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewVehicleComponent", function() { return NewVehicleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/vehicle.service */ "./src/app/post-login/transport/services/vehicle.service.ts");
/* harmony import */ var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/post-login/post-login.service */ "./src/app/post-login/post-login.service.ts");
/* harmony import */ var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/component/boxes/card/card.component */ "./src/app/shared/component/boxes/card/card.component.ts");
/* harmony import */ var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/component/boxes/responsive/responsive.component */ "./src/app/shared/component/boxes/responsive/responsive.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_component_boxes_section_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/component/boxes/section/section.component */ "./src/app/shared/component/boxes/section/section.component.ts");
/* harmony import */ var _vehicle_basic_info_vehicle_basic_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vehicle-basic-info/vehicle-basic-info.component */ "./src/app/post-login/transport/vehicle/new-vehicle/vehicle-basic-info/vehicle-basic-info.component.ts");
/* harmony import */ var _vehicle_route_info_vehicle_route_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vehicle-route-info/vehicle-route-info.component */ "./src/app/post-login/transport/vehicle/new-vehicle/vehicle-route-info/vehicle-route-info.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/fesm2015/expansion.js");
/* harmony import */ var _shared_component_boxes_smart_div_smart_div_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/component/boxes/smart-div/smart-div.component */ "./src/app/shared/component/boxes/smart-div/smart-div.component.ts");
/* harmony import */ var _vehicle_maintenance_info_vehicle_maintenance_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./vehicle-maintenance-info/vehicle-maintenance-info.component */ "./src/app/post-login/transport/vehicle/new-vehicle/vehicle-maintenance-info/vehicle-maintenance-info.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/component/boxes/no-record-found/no-record-found.component */ "./src/app/shared/component/boxes/no-record-found/no-record-found.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/component/buttons/form-buttons/form-buttons.component */ "./src/app/shared/component/buttons/form-buttons/form-buttons.component.ts");

























function NewVehicleComponent_app_section_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "vehicle-basic-info", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-vehicle-route-info", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1075 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "commute")("title", "Vehicle Basic Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1075.mainForm.controls["basicInfo"])("isViewMode", ctx_r1075.isViewMode)("initialFormValues", ctx_r1075.initialFormValues && ctx_r1075.initialFormValues.basicInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1075.mainForm)("isViewMode", ctx_r1075.isViewMode)("initialFormValues", ctx_r1075.initialFormValues);
} }
function NewVehicleComponent_div_5_app_section_1_mat_expansion_panel_2_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r1087 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewVehicleComponent_div_5_app_section_1_mat_expansion_panel_2_div_5_Template_mat_icon_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1087); const idxMaintenance_r1083 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r1085 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r1085.removeMaintenanceClicked(idxMaintenance_r1083); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewVehicleComponent_div_5_app_section_1_mat_expansion_panel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "smart-div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NewVehicleComponent_div_5_app_section_1_mat_expansion_panel_2_div_5_Template, 3, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "vehicle-maintenance-info", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const maintenance_r1082 = ctx.$implicit;
    const idxMaintenance_r1083 = ctx.index;
    const ctx_r1079 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", maintenance_r1082)("badge", idxMaintenance_r1083 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (maintenance_r1082.controls["maintenanceName"] == null ? null : maintenance_r1082.controls["maintenanceName"].value) ? maintenance_r1082.controls["maintenanceName"] == null ? null : maintenance_r1082.controls["maintenanceName"].value : "---------", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1079.isViewMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", maintenance_r1082)("isViewMode", ctx_r1079.isViewMode)("initialFormValues", (ctx_r1079.initialFormValues == null ? null : ctx_r1079.initialFormValues.maintenance.length) > idxMaintenance_r1083 && ctx_r1079.initialFormValues.maintenance[idxMaintenance_r1083]);
} }
function NewVehicleComponent_div_5_app_section_1_no_record_found_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "no-record-found");
} }
function NewVehicleComponent_div_5_app_section_1_p_4_Template(rf, ctx) { if (rf & 1) {
    const _r1089 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewVehicleComponent_div_5_app_section_1_p_4_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1089); const ctx_r1088 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r1088.addMaintenanceClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "build");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewVehicleComponent_div_5_app_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewVehicleComponent_div_5_app_section_1_mat_expansion_panel_2_Template, 7, 7, "mat-expansion-panel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewVehicleComponent_div_5_app_section_1_no_record_found_3_Template, 1, 0, "no-record-found", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NewVehicleComponent_div_5_app_section_1_p_4_Template, 6, 0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1078 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "build")("title", "Vehicle Maintenance Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multi", ctx_r1078.masterData.expendMultiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1078.mainForm["controls"].maintenance["controls"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1078.mainForm["controls"].maintenance["controls"].length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1078.isViewMode && ctx_r1078.mainForm.controls["maintenance"].valid);
} }
function NewVehicleComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewVehicleComponent_div_5_app_section_1_Template, 5, 6, "app-section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1076 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1076.isPopulatingFormDb);
} }
function NewVehicleComponent_form_buttons_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "form-buttons", 18);
} if (rf & 2) {
    const ctx_r1077 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1077.mainForm)("isChangeMode", ctx_r1077.changeModeId);
} }
class NewVehicleComponent {
    constructor(fb, changeDetector, sharedService, vehicleService, plService) {
        this.fb = fb;
        this.changeDetector = changeDetector;
        this.sharedService = sharedService;
        this.vehicleService = vehicleService;
        this.plService = plService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.onSaveSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initialFormValues = null;
        this.changeModeId = null;
        this.isViewMode = false;
        this.mainForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.title = "New Vehicle";
        this.subTitle = "Add a new vehicle";
        this.isLoading = false;
        this.isPopulatingFormDb = false;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_2__["MasterData"];
        this.open = false;
        this.maintenanceCount = 0;
        this.userAccessPolicy = this.plService.getPageEntitlements(7, 2);
    }
    ngOnInit() {
        this.setTitleMessages();
        this.mainForm = this.fb.group({
            basicInfo: this.fb.group({}),
            maintenance: this.fb.array([]),
        });
        this.sharedService.setFormCommonFields(this.mainForm);
        if (this.changeModeId) {
            this.populateFromDB();
        }
    }
    setTitleMessages() {
        if (this.changeModeId) {
            this.title = "Update Vehicle.";
            this.subTitle = "Please update following details of vehicle.";
            if (this.isViewMode) {
                this.title = "View Vehicle.";
                this.subTitle = "View following details of vehicle.";
            }
        }
    }
    addMaintenanceClicked() {
        this.addMaintenance();
        this.open = true; // keep open the newly added maintenance
        this.sharedService.pageLevelSave("New maintenance form");
    }
    addMaintenance(id = null, status = null) {
        this.maintenanceCount = this.maintenanceCount + 1;
        this.mainForm.get('maintenance')
            .push(this.sharedService.setFormCommonFields(this.fb.group({}), id, status));
    }
    removeMaintenanceClicked(idx) {
        let dialogRef = this.sharedService.openConfirmDialog();
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe((confirmed) => {
            if (confirmed) {
                this.removeMaintenance(idx);
                this.sharedService.pageLevelDelete("Maintenance");
            }
        });
    }
    removeMaintenance(idx) {
        this.mainForm.get('maintenance')
            .removeAt(idx);
        this.maintenanceCount--;
    }
    populateFromDB() {
        //--- Fill Vehicle information for View/Edit mode from Database
        this.isLoading = true;
        this.isPopulatingFormDb = true;
        this.vehicleService.getVehicle(this.changeModeId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe((result) => {
            result.forEach(element => {
                this.initialFormValues = element;
                this.mainForm.get('_id').setValue(this.initialFormValues._id);
                this.mainForm.get('status').setValue(this.initialFormValues.status);
                //--- Fill maintenance for View/Edit mode
                for (let idx = 0; idx < element["maintenance"].length; idx++) {
                    let id = (element["maintenance"][idx])["_id"];
                    let status = (element["maintenance"][idx])["status"];
                    this.addMaintenance(id, status);
                }
            });
            this.isLoading = false;
            this.isPopulatingFormDb = false;
        }, (error) => {
            this.isLoading = false;
            this.isPopulatingFormDb = false;
            console.log(error);
        });
    }
    onSubmit(event) {
        this.mainForm.markAllAsTouched();
        event.preventDefault();
        event.stopPropagation();
        if (this.mainForm.valid) {
            this.isLoading = true;
            this.vehicleService.saveVehicle(this.mainForm.value, this.changeModeId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
                .subscribe((result) => {
                this.isLoading = false;
                this.onSaveSuccess.emit(true);
                this.sharedService.openSnackBar("Vehicle's information saved Successfully.", "x", "success");
                this.mainForm.reset();
            }, (error) => {
                this.isLoading = false;
                console.log(error);
            });
        }
        else {
            this.sharedService.openSnackBar("Some fields are invalid. Please fill them properly.", "x", "fail");
        }
    }
    ngAfterViewChecked() {
        this.changeDetector.detectChanges();
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
NewVehicleComponent.ɵfac = function NewVehicleComponent_Factory(t) { return new (t || NewVehicleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_vehicle_service__WEBPACK_IMPORTED_MODULE_6__["VehicleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_7__["PostLoginService"])); };
NewVehicleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewVehicleComponent, selectors: [["app-new-vehicle"]], inputs: { initialFormValues: "initialFormValues", changeModeId: "changeModeId", isViewMode: "isViewMode" }, outputs: { onSaveSuccess: "onSaveSuccess" }, decls: 7, vars: 8, consts: [[3, "loading", "title", "subTitle", "cardButtons"], [3, "formGroup", "ngSubmit"], ["fxFlex", ""], [3, "icon", "title", 4, "ngIf"], ["fxFlex", "", 4, "ngIf"], [3, "form", "isChangeMode", 4, "ngIf"], [3, "icon", "title"], [3, "form", "isViewMode", "initialFormValues"], ["hideToggle", "true", 3, "multi"], ["class", "no-shadow", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "rt", 4, "ngIf"], [1, "no-shadow"], [3, "form", "badge"], [1, "rt"], ["matSuffix", "", 1, "icon-delete", 3, "click"], ["mat-raised-button", "", "type", "button", "value", "Add Maintenance", 1, "addOneMoreButton", 3, "click"], ["matSuffix", ""], [3, "form", "isChangeMode"]], template: function NewVehicleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewVehicleComponent_Template_form_ngSubmit_1_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NewVehicleComponent_app_section_4_Template, 6, 8, "app-section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NewVehicleComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NewVehicleComponent_form_buttons_6_Template, 1, 2, "form-buttons", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.isLoading)("title", ctx.title)("subTitle", ctx.subTitle)("cardButtons", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mainForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isPopulatingFormDb);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userAccessPolicy == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isViewMode);
    } }, directives: [_shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__["ResponsiveComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _shared_component_boxes_section_section_component__WEBPACK_IMPORTED_MODULE_12__["SectionComponent"], _vehicle_basic_info_vehicle_basic_info_component__WEBPACK_IMPORTED_MODULE_13__["VehicleBasicInfoComponent"], _vehicle_route_info_vehicle_route_info_component__WEBPACK_IMPORTED_MODULE_14__["VehicleRouteInfoComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanelTitle"], _shared_component_boxes_smart_div_smart_div_component__WEBPACK_IMPORTED_MODULE_16__["SmartDivComponent"], _vehicle_maintenance_info_vehicle_maintenance_info_component__WEBPACK_IMPORTED_MODULE_17__["VehicleMaintenanceInfoComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatSuffix"], _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_20__["NoRecordFoundComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_22__["FormButtonsComponent"]], styles: [".chart {\r\n    max-width: 100% !important;\r\n    min-height: 450px;\r\n  }\r\n  .row {\r\n    margin:0 !important;\r\n  }\r\n  .vehicle_title{\r\n    font-size: 14px;\r\n    margin-bottom: 20px;\r\n  }\r\n  .mat-expansion-panel-header{\r\n    height: 35px !important;\r\n    border-style: none;\r\n    border-color: #555;\r\n    border-width: 0px 0px 2px 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi90cmFuc3BvcnQvdmVoaWNsZS9uZXctdmVoaWNsZS9uZXctdmVoaWNsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9wb3N0LWxvZ2luL3RyYW5zcG9ydC92ZWhpY2xlL25ldy12ZWhpY2xlL25ldy12ZWhpY2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcnQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiA0NTBweDtcclxuICB9XHJcbiAgLnJvdyB7XHJcbiAgICBtYXJnaW46MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnZlaGljbGVfdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzU1NTtcclxuICAgIGJvcmRlci13aWR0aDogMHB4IDBweCAycHggMHB4O1xyXG59Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewVehicleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-vehicle',
                templateUrl: './new-vehicle.component.html',
                styleUrls: ['./new-vehicle.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }, { type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_6__["VehicleService"] }, { type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_7__["PostLoginService"] }]; }, { onSaveSuccess: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], initialFormValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changeModeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isViewMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/transport/vehicle/new-vehicle/vehicle-basic-info/vehicle-basic-info.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/post-login/transport/vehicle/new-vehicle/vehicle-basic-info/vehicle-basic-info.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: VehicleBasicInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleBasicInfoComponent", function() { return VehicleBasicInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/component/dynamic-form/field.interface */ "./src/app/shared/component/dynamic-form/field.interface.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/component/dynamic-form/dynamic-form/dynamic-form.component */ "./src/app/shared/component/dynamic-form/dynamic-form/dynamic-form.component.ts");






class VehicleBasicInfoComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
        this.initialFormValues = null;
        this.isViewMode = false;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_2__["MasterData"];
    }
    ngOnInit() {
        this.fieldsConfig = [
            {
                isViewMode: this.isViewMode,
                type: "input",
                label: "Company Name",
                inputType: "text",
                name: "companyName",
                icon: "emoji_transportation",
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
            },
            {
                isViewMode: this.isViewMode,
                type: "input",
                label: "Model Name",
                inputType: "text",
                name: "modelName",
                icon: "airport_shuttle",
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
            },
            {
                isViewMode: this.isViewMode,
                type: "input",
                label: "Registration No",
                inputType: "text",
                name: "registrationNo",
                icon: "directions_bus",
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
            },
            {
                isViewMode: this.isViewMode,
                type: "date",
                label: "Registration Date",
                name: "registrationDate"
            },
            {
                isViewMode: this.isViewMode,
                type: "input",
                label: "Seat Capacity",
                inputType: "number",
                name: "seatCapacity",
                icon: "airline_seat_recline_normal",
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
            },
            {
                isViewMode: this.isViewMode,
                type: "input",
                label: "Custom Name",
                inputType: "text",
                name: "customName",
                icon: "directions_bus",
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
            },
            {
                isViewMode: this.isViewMode,
                type: "select",
                label: "Vehicle Type",
                name: "vehicleTypeId",
                icon: "commute",
                options: this.masterData.vehicleTypes,
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
            },
            {
                isViewMode: this.isViewMode,
                type: "select",
                label: "Fuel Type",
                name: "fuelTypeId",
                icon: "local_gas_station",
                options: this.masterData.fuelTypes,
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
            },
            {
                isViewMode: this.isViewMode,
                type: "togglebutton",
                label: "Is on rent",
                name: "isRental",
                value: false
            },
            {
                isViewMode: this.isViewMode,
                type: "togglebutton",
                label: "Is only for office",
                name: "isOnlyForOffice",
                value: false
            }
        ];
        this.sharedService.setFormInitialValueForChangeMode(this.fieldsConfig, this.initialFormValues);
    }
}
VehicleBasicInfoComponent.ɵfac = function VehicleBasicInfoComponent_Factory(t) { return new (t || VehicleBasicInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"])); };
VehicleBasicInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehicleBasicInfoComponent, selectors: [["vehicle-basic-info"]], inputs: { form: "form", initialFormValues: "initialFormValues", fieldsConfig: "fieldsConfig", isViewMode: "isViewMode" }, decls: 1, vars: 2, consts: [[3, "form", "fields"]], template: function VehicleBasicInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dynamic-form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.form)("fields", ctx.fieldsConfig);
    } }, directives: [_shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vdHJhbnNwb3J0L3ZlaGljbGUvbmV3LXZlaGljbGUvdmVoaWNsZS1iYXNpYy1pbmZvL3ZlaGljbGUtYmFzaWMtaW5mby5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleBasicInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vehicle-basic-info',
                templateUrl: './vehicle-basic-info.component.html',
                styleUrls: ['./vehicle-basic-info.component.css']
            }]
    }], function () { return [{ type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }]; }, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], initialFormValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fieldsConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isViewMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/transport/vehicle/new-vehicle/vehicle-maintenance-info/vehicle-maintenance-info.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/post-login/transport/vehicle/new-vehicle/vehicle-maintenance-info/vehicle-maintenance-info.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: VehicleMaintenanceInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleMaintenanceInfoComponent", function() { return VehicleMaintenanceInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/component/dynamic-form/field.interface */ "./src/app/shared/component/dynamic-form/field.interface.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/component/dynamic-form/dynamic-form/dynamic-form.component */ "./src/app/shared/component/dynamic-form/dynamic-form/dynamic-form.component.ts");






class VehicleMaintenanceInfoComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
        this.initialFormValues = null;
        this.isViewMode = false;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_2__["MasterData"];
    }
    ngOnInit() {
        this.fieldsConfig = [
            {
                isViewMode: this.isViewMode,
                type: "input",
                label: "Maintenance Name",
                inputType: "text",
                name: "maintenanceName",
                icon: "local_car_wash",
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
            },
            {
                isViewMode: this.isViewMode,
                type: "input",
                label: "Cost",
                inputType: "number",
                name: "maintenanceCost",
                icon: "money",
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
            },
            {
                isViewMode: this.isViewMode,
                type: "date",
                label: "Date",
                name: "maintenanceDate",
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
            },
            {
                isViewMode: this.isViewMode,
                type: "togglebutton",
                label: "Is Expected",
                name: "isExpected",
                value: true
            },
            {
                isViewMode: this.isViewMode,
                type: "textarea",
                label: "Description",
                inputType: "text",
                name: "description"
            }
        ];
        this.sharedService.setFormInitialValueForChangeMode(this.fieldsConfig, this.initialFormValues);
    }
}
VehicleMaintenanceInfoComponent.ɵfac = function VehicleMaintenanceInfoComponent_Factory(t) { return new (t || VehicleMaintenanceInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"])); };
VehicleMaintenanceInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehicleMaintenanceInfoComponent, selectors: [["vehicle-maintenance-info"]], inputs: { form: "form", initialFormValues: "initialFormValues", fieldsConfig: "fieldsConfig", isViewMode: "isViewMode" }, decls: 1, vars: 2, consts: [[3, "form", "fields"]], template: function VehicleMaintenanceInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dynamic-form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.form)("fields", ctx.fieldsConfig);
    } }, directives: [_shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vdHJhbnNwb3J0L3ZlaGljbGUvbmV3LXZlaGljbGUvdmVoaWNsZS1tYWludGVuYW5jZS1pbmZvL3ZlaGljbGUtbWFpbnRlbmFuY2UtaW5mby5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleMaintenanceInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vehicle-maintenance-info',
                templateUrl: './vehicle-maintenance-info.component.html',
                styleUrls: ['./vehicle-maintenance-info.component.css']
            }]
    }], function () { return [{ type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }]; }, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], initialFormValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fieldsConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isViewMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/transport/vehicle/new-vehicle/vehicle-route-info/vehicle-route-info.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/post-login/transport/vehicle/new-vehicle/vehicle-route-info/vehicle-route-info.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: VehicleRouteInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleRouteInfoComponent", function() { return VehicleRouteInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/component/dynamic-form/field.interface */ "./src/app/shared/component/dynamic-form/field.interface.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/component/boxes/responsive/responsive.component */ "./src/app/shared/component/boxes/responsive/responsive.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/component/dynamic-form/dynamic-form/dynamic-form.component */ "./src/app/shared/component/dynamic-form/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/component/boxes/card/card.component */ "./src/app/shared/component/boxes/card/card.component.ts");
/* harmony import */ var _routes_new_route_new_route_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../routes/new-route/new-route.component */ "./src/app/post-login/transport/routes/new-route/new-route.component.ts");














function VehicleRouteInfoComponent_dynamic_form_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dynamic-form", 5);
} if (rf & 2) {
    const ctx_r1106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1106.form)("fields", ctx_r1106.fieldsConfig)("addEmptyDiv", false);
} }
function VehicleRouteInfoComponent_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r1110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleRouteInfoComponent_input_3_Template_input_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1110); const ctx_r1109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1109.ShowRouteDetails = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleRouteInfoComponent_card_4_Template(rf, ctx) { if (rf & 1) {
    const _r1112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteCardEvent", function VehicleRouteInfoComponent_card_4_Template_card_deleteCardEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1112); const ctx_r1111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1111.ShowRouteDetails = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-new-route", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Vehicle Route Details")("subTitle", "View vehicle route details and stoppages list.")("refreshButton", false)("headerBorader", false)("popUpMode", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("changeModeId", ctx_r1108.form.get("routeId").value)("showHeader", false)("childCard", true)("isViewMode", true);
} }
class VehicleRouteInfoComponent {
    constructor(sharedService, http) {
        this.sharedService = sharedService;
        this.http = http;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.initialFormValues = null;
        this.isViewMode = false;
        this.isRequired = false;
        this.console = console;
        this.isLoading = false;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_2__["MasterData"];
        this.routeChanged$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ShowRouteDetails = false;
        this.stoppageList = null;
    }
    ngOnInit() {
        this.fieldsConfig = [
            {
                isViewMode: this.isViewMode,
                type: "select",
                label: "Route",
                name: "routeId",
                icon: "map",
                value: this.initialFormValues ? this.initialFormValues.routeId : null,
                onValueChange: this.routeChanged$,
                validations: this.isRequired ? [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()] : null
            }
        ];
        this.registerDropdownChangeEvents();
        this.fetchRouteDdl();
    }
    registerDropdownChangeEvents() {
        this.routeChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe(val => {
            // this.routeChanged()
        });
    }
    fetchRouteDdl() {
        this.isLoading = true;
        this.fieldsConfig[0].options = []; // make route list empty
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "api/Route/" + "GetRouteDdl")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe(val => {
            this.fieldsConfig[0].options = val;
            this.isLoading = false;
        }, error => {
            this.isLoading = false;
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
VehicleRouteInfoComponent.ɵfac = function VehicleRouteInfoComponent_Factory(t) { return new (t || VehicleRouteInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
VehicleRouteInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehicleRouteInfoComponent, selectors: [["app-vehicle-route-info"]], inputs: { form: "form", fieldsConfig: "fieldsConfig", initialFormValues: "initialFormValues", isViewMode: "isViewMode", isRequired: "isRequired" }, decls: 5, vars: 4, consts: [[3, "gap"], ["fxFlex", "", 3, "form", "fields", "addEmptyDiv", 4, "ngIf"], ["fxFlex", ""], ["type", "button", "class", "pointer", "value", "View Route Details", 3, "click", 4, "ngIf"], [3, "title", "subTitle", "refreshButton", "headerBorader", "popUpMode", "deleteCardEvent", 4, "ngIf"], ["fxFlex", "", 3, "form", "fields", "addEmptyDiv"], ["type", "button", "value", "View Route Details", 1, "pointer", 3, "click"], [3, "title", "subTitle", "refreshButton", "headerBorader", "popUpMode", "deleteCardEvent"], [3, "changeModeId", "showHeader", "childCard", "isViewMode"]], template: function VehicleRouteInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "responsive", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VehicleRouteInfoComponent_dynamic_form_1_Template, 1, 3, "dynamic-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VehicleRouteInfoComponent_input_3_Template, 1, 0, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VehicleRouteInfoComponent_card_4_Template, 2, 9, "card", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gap", "14%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("routeId") && ctx.form.get("routeId").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.ShowRouteDetails);
    } }, directives: [_shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_7__["ResponsiveComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_10__["DynamicFormComponent"], _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"], _routes_new_route_new_route_component__WEBPACK_IMPORTED_MODULE_12__["NewRouteComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vdHJhbnNwb3J0L3ZlaGljbGUvbmV3LXZlaGljbGUvdmVoaWNsZS1yb3V0ZS1pbmZvL3ZlaGljbGUtcm91dGUtaW5mby5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleRouteInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vehicle-route-info',
                templateUrl: './vehicle-route-info.component.html',
                styleUrls: ['./vehicle-route-info.component.css']
            }]
    }], function () { return [{ type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fieldsConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], initialFormValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isViewMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isRequired: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/transport/vehicle/vehicle-list/vehicle-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/post-login/transport/vehicle/vehicle-list/vehicle-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: VehicleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleListComponent", function() { return VehicleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/vehicle.service */ "./src/app/post-login/transport/services/vehicle.service.ts");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/post-login/post-login.service */ "./src/app/post-login/post-login.service.ts");
/* harmony import */ var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/component/boxes/card/card.component */ "./src/app/shared/component/boxes/card/card.component.ts");
/* harmony import */ var _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/component/boxes/large-screen/large-screen.component */ "./src/app/shared/component/boxes/large-screen/large-screen.component.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/fesm2015/sort.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_component_boxes_small_screen_small_screen_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/component/boxes/small-screen/small-screen.component */ "./src/app/shared/component/boxes/small-screen/small-screen.component.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/fesm2015/paginator.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/directives/tool-tip.directive */ "./src/app/shared/directives/tool-tip.directive.ts");
/* harmony import */ var _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/component/boxes/row/row.component */ "./src/app/shared/component/boxes/row/row.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/component/boxes/no-record-found/no-record-found.component */ "./src/app/shared/component/boxes/no-record-found/no-record-found.component.ts");
/* harmony import */ var _shared_pipe_master_data_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/pipe/master-data.pipe */ "./src/app/shared/pipe/master-data.pipe.ts");






















function VehicleListComponent_tr_29_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r1002 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleListComponent_tr_29_button_20_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1002); const vehicle_r996 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r1000 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1000.editClicked(vehicle_r996._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleListComponent_tr_29_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r1005 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleListComponent_tr_29_button_21_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1005); const vehicle_r996 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r1003 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1003.deleteClicked(vehicle_r996._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleListComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r1007 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "masterData");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "masterData");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleListComponent_tr_29_Template_button_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1007); const vehicle_r996 = ctx.$implicit; const ctx_r1006 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1006.viewClicked(vehicle_r996._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, VehicleListComponent_tr_29_button_20_Template, 3, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, VehicleListComponent_tr_29_button_21_Template, 3, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vehicle_r996 = ctx.$implicit;
    const idx_r997 = ctx.index;
    const ctx_r993 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r993.paging.pageIndex * ctx_r993.paging.pageSize + idx_r997 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vehicle_r996.basicInfo.customName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vehicle_r996.basicInfo.registrationNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vehicle_r996.basicInfo.seatCapacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 8, vehicle_r996.basicInfo.vehicleTypeId, "vehicleType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 11, vehicle_r996.basicInfo.fuelTypeId, "fuelType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r993.editPermissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r993.editPermissions);
} }
function VehicleListComponent_ng_container_31_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r1015 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleListComponent_ng_container_31_button_10_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1015); const vehicle_r1008 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r1013 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1013.editClicked(vehicle_r1008._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleListComponent_ng_container_31_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r1018 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleListComponent_ng_container_31_button_11_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1018); const vehicle_r1008 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r1016 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1016.deleteClicked(vehicle_r1008._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleListComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    const _r1020 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "row", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleListComponent_ng_container_31_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1020); const vehicle_r1008 = ctx.$implicit; const ctx_r1019 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1019.viewClicked(vehicle_r1008._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, VehicleListComponent_ng_container_31_button_10_Template, 3, 0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, VehicleListComponent_ng_container_31_button_11_Template, 3, 0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "row", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "directions_bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Custom Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "directions_bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Vehicle No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "commute");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "masterData");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "local_gas_station");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Fuel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "masterData");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "airline_seat_recline_normal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Seats ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const vehicle_r1008 = ctx.$implicit;
    const idx_r1009 = ctx.index;
    const ctx_r994 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childCard", true)("header", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("# ", ctx_r994.paging.pageIndex * ctx_r994.paging.pageSize + idx_r1009 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r994.editPermissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r994.editPermissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vehicle_r1008.basicInfo.customName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vehicle_r1008.basicInfo.registrationNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](35, 10, vehicle_r1008.basicInfo.vehicleTypeId, "vehicleType"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](43, 13, vehicle_r1008.basicInfo.fuelTypeId, "fuelType"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vehicle_r1008.basicInfo.seatCapacity, " ");
} }
function VehicleListComponent_no_record_found_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "no-record-found");
} }
class VehicleListComponent {
    constructor(vehicleService, changeDetector, sharedService, plService) {
        this.vehicleService = vehicleService;
        this.changeDetector = changeDetector;
        this.sharedService = sharedService;
        this.plService = plService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.viewButtonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editButtonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteButtonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageTitle = "";
        this.isLoading = false;
        this.environment = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_2__["MasterData"];
        this.vehicles = [];
        this.viewUser = false;
        this.editPermissions = false;
        this.searchParams = null;
        this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
        };
        this.sortParams = {
            fieldName: "basicInfo.firstName",
            isAsc: true
        };
        this.editPermissions = this.plService.getPageEntitlements(7, 2) == 2;
    }
    ngOnInit() {
        this.getList();
    }
    getList() {
        this.isLoading = true;
        let SearchObject = {
            SearchParameters: this.searchParams,
            paging: {
                "pageIndex": this.paging.pageIndex,
                "pageSize": this.paging.pageSize
            },
            sorting: {
                "fieldName": this.sortParams.fieldName,
                "isAsc": this.sortParams.isAsc
            }
        };
        this.vehicleService
            .getVehicleList(SearchObject)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe$))
            .subscribe((result) => {
            this.isLoading = false;
            this.vehicles = result.data;
            this.paging.length = result.count;
        }, (error) => {
            this.isLoading = false;
            console.log(error);
        });
    }
    viewClicked(id) {
        this.viewButtonEvent.emit(id);
    }
    editClicked(id) {
        this.editButtonEvent.emit(id);
    }
    deleteClicked(id) {
        this.deleteButtonEvent.emit(id);
    }
    CardCrossEvent_ViewUser() {
        this.viewUser = false;
    }
    sortClicked(sort) {
        this.paging.pageIndex = 0;
        this.sortParams.fieldName = sort.active;
        this.sortParams.isAsc = sort.direction === 'asc';
        this.getList();
        this.changeDetector.detectChanges();
    }
    pagingClicked(paginator) {
        this.paging.pageIndex = paginator.pageIndex;
        this.paging.pageSize = paginator.pageSize;
        this.getList();
        this.changeDetector.detectChanges();
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
VehicleListComponent.ɵfac = function VehicleListComponent_Factory(t) { return new (t || VehicleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_6__["PostLoginService"])); };
VehicleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehicleListComponent, selectors: [["app-vehicle-list"]], inputs: { pageTitle: "pageTitle", roleId: "roleId" }, outputs: { viewButtonEvent: "viewButtonEvent", editButtonEvent: "editButtonEvent", deleteButtonEvent: "deleteButtonEvent" }, decls: 34, vars: 10, consts: [[3, "loading", "title", "subTitle", "refresh"], ["matSort", "", 1, "table", 3, "matSortChange"], [1, "thead"], ["colspan", "2", 1, "sr"], ["matRipple", "", "mat-sort-header", "basicInfo.customName"], ["matRipple", "", "mat-sort-header", "basicInfo.registrationNo"], ["matRipple", "", "mat-sort-header", "basicInfo.seatCapacity"], ["matRipple", "", "mat-sort-header", "basicInfo.vehicleTypeId"], ["matRipple", "", "mat-sort-header", "basicInfo.fuelTypeId"], [1, "action"], ["class", "tr", 4, "ngFor", "ngForOf"], [1, "default-font"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "length", "showFirstLastButtons", "pageSize", "pageSizeOptions", "page"], [1, "tr"], [1, "sr-col"], [1, "rt"], ["mat-icon-button", "", "appToolTip", "'View Vehicle'", 1, "icon-view", 3, "click"], ["mat-icon-button", ""], ["mat-icon-button", "", "appToolTip", "'Edit Vehicle'", "class", "icon-edit", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "appToolTip", "'Delete Vehicle'", "class", "icon-delete", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "appToolTip", "'Edit Vehicle'", 1, "icon-edit", 3, "click"], ["mat-icon-button", "", "appToolTip", "'Delete Vehicle'", 1, "icon-delete", 3, "click"], [3, "childCard", "header"], ["gap", "2px"], ["fxFlex", "30%"], ["fxFlex", "", 1, "rt"], ["mat-icon-button", "", "appToolTip", "'View Vehicle'", 1, "big-icon-view", 3, "click"], ["mat-icon-button", "", "appToolTip", "'Edit Vehicle'", "class", "big-icon-edit", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "appToolTip", "'Delete Vehicle'", "class", "big-icon-delete", 3, "click", 4, "ngIf"], ["gap", "20px"], ["fxFlex", "60%"], [1, "small-screen-data"], ["mat-icon-button", "", "appToolTip", "'Edit Vehicle'", 1, "big-icon-edit", 3, "click"], ["mat-icon-button", "", "appToolTip", "'Delete Vehicle'", 1, "big-icon-delete", 3, "click"]], template: function VehicleListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function VehicleListComponent_Template_card_refresh_0_listener($event) { return ctx.getList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "large-screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function VehicleListComponent_Template_table_matSortChange_2_listener($event) { return ctx.sortClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Custom Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "directions_bus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Registration No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "directions_bus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Seat Capacity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "airline_seat_recline_normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "commute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Fuel Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "local_gas_station");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, VehicleListComponent_tr_29_Template, 22, 14, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "small-screen", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, VehicleListComponent_ng_container_31_Template, 52, 16, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, VehicleListComponent_no_record_found_32_Template, 1, 0, "no-record-found", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-paginator", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function VehicleListComponent_Template_mat_paginator_page_33_listener($event) { return ctx.pagingClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.isLoading)("title", "Vehicle List")("subTitle", "Manage your vehicles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vehicles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vehicles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vehicles.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.paging.length)("showFirstLastButtons", ctx.masterData.paging.showFirstLastButtons)("pageSize", ctx.paging.pageSize)("pageSizeOptions", ctx.masterData.paging.pageSizeOptions);
    } }, directives: [_shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_8__["LargeScreenComponent"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRipple"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortHeader"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _shared_component_boxes_small_screen_small_screen_component__WEBPACK_IMPORTED_MODULE_13__["SmallScreenComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_16__["ToolTipDirective"], _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_17__["ROWComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultFlexDirective"], _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_19__["NoRecordFoundComponent"]], pipes: [_shared_pipe_master_data_pipe__WEBPACK_IMPORTED_MODULE_20__["MasterDataPipe"]], styles: [".small-screen-data[_ngcontent-%COMP%]{\r\n    margin: 5px 0px 0px 10px;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi90cmFuc3BvcnQvdmVoaWNsZS92ZWhpY2xlLWxpc3QvdmVoaWNsZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vdHJhbnNwb3J0L3ZlaGljbGUvdmVoaWNsZS1saXN0L3ZlaGljbGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNtYWxsLXNjcmVlbi1kYXRhe1xyXG4gICAgbWFyZ2luOiA1cHggMHB4IDBweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vehicle-list',
                templateUrl: './vehicle-list.component.html',
                styleUrls: ['./vehicle-list.component.css']
            }]
    }], function () { return [{ type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }, { type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_6__["PostLoginService"] }]; }, { viewButtonEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], editButtonEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteButtonEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], roleId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/transport/vehicle/vehicle-management/vehicle-management.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/post-login/transport/vehicle/vehicle-management/vehicle-management.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: VehicleManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleManagementComponent", function() { return VehicleManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vehicle-list/vehicle-list.component */ "./src/app/post-login/transport/vehicle/vehicle-list/vehicle-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/vehicle.service */ "./src/app/post-login/transport/services/vehicle.service.ts");
/* harmony import */ var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/post-login/post-login.service */ "./src/app/post-login/post-login.service.ts");
/* harmony import */ var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/component/boxes/responsive/responsive.component */ "./src/app/shared/component/boxes/responsive/responsive.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_component_boxes_card_bottom_card_bottom_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/component/boxes/card-bottom/card-bottom.component */ "./src/app/shared/component/boxes/card-bottom/card-bottom.component.ts");
/* harmony import */ var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/component/boxes/card/card.component */ "./src/app/shared/component/boxes/card/card.component.ts");
/* harmony import */ var _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/component/dynamic-form/dynamic-form/dynamic-form.component */ "./src/app/shared/component/dynamic-form/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/component/buttons/form-buttons/form-buttons.component */ "./src/app/shared/component/buttons/form-buttons/form-buttons.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/directives/tool-tip.directive */ "./src/app/shared/directives/tool-tip.directive.ts");
/* harmony import */ var _new_vehicle_new_vehicle_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../new-vehicle/new-vehicle.component */ "./src/app/post-login/transport/vehicle/new-vehicle/new-vehicle.component.ts");






















const _c0 = ["searchCard"];
function VehicleManagementComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r1027 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleManagementComponent_button_2_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1027); const ctx_r1026 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1026.addNewClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "commute");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add New Vehicle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleManagementComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r1029 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleManagementComponent_button_12_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1029); const ctx_r1028 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1028.backToListClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_return");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Back to Vehicle List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleManagementComponent_app_new_vehicle_15_Template(rf, ctx) { if (rf & 1) {
    const _r1031 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-new-vehicle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSaveSuccess", function VehicleManagementComponent_app_new_vehicle_15_Template_app_new_vehicle_onSaveSuccess_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1031); const ctx_r1030 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1030.onSaveSuccess($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1024 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("changeModeId", ctx_r1024.Id)("isViewMode", ctx_r1024.showViewPage);
} }
function VehicleManagementComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r1033 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleManagementComponent_button_18_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1033); const ctx_r1032 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1032.deleteVehiclePermanently(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Delete And Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class VehicleManagementComponent {
    constructor(fb, sharedService, vehicleService, plService) {
        this.fb = fb;
        this.sharedService = sharedService;
        this.vehicleService = vehicleService;
        this.plService = plService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.showViewPage = false;
        this.showAddChangePage = false;
        this.showListPage = true;
        this.showDeleteButton = false;
        this.editPermissions = false;
        this.isLoading = false;
        this.Id = null;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_2__["MasterData"];
        this.searchConfig = [
            {
                isViewMode: false,
                type: "input",
                label: "Registration No",
                inputType: "text",
                name: "registrationNo",
                icon: "directions_bus"
            },
            {
                isViewMode: false,
                type: "select",
                label: "Vehicle Type",
                name: "vehicleTypeId",
                icon: "commute",
                options: this.masterData.vehicleTypes
            },
            {
                isViewMode: false,
                type: "select",
                label: "Fuel Type",
                name: "fuelTypeId",
                icon: "local_gas_station",
                options: this.masterData.fuelTypes
            },
            {
                isViewMode: false,
                type: "select",
                label: "Is Rental",
                name: "isRental",
                icon: "local_taxi",
                options: this.masterData.booleanFlag
            },
            {
                isViewMode: false,
                type: "select",
                label: "Is Only For Office",
                name: "isOnlyForOffice",
                icon: "emoji_transportation",
                options: this.masterData.booleanFlag
            }
        ];
        this.searchForm = this.fb.group({});
        this.editPermissions = this.plService.getPageEntitlements(7, 2) === 2;
    }
    ngOnInit() {
    }
    onSearchClick() {
        this._ListPage.searchParams = this.searchForm.value;
        this._ListPage.paging.pageIndex = 0;
        this._ListPage.getList();
        this.searchCard.hide();
    }
    addNewClick() {
        this.Id = null;
        this.showAddChangePage = true;
        this.showViewPage = this.showListPage = false;
    }
    backToListClick() {
        this.showListPage = true;
        this.showViewPage = this.showAddChangePage = false;
    }
    onSaveSuccess(event) {
        this.backToListClick();
        if (this._ListPage) {
            this._ListPage.getList();
        }
    }
    viewButtonEvent(event) {
        this.Id = event;
        this.showViewPage = true;
        this.showDeleteButton = this.showListPage = this.showAddChangePage = false;
    }
    editButtonEvent(event) {
        this.showAddChangePage = true;
        this.Id = event;
        this.showDeleteButton = this.showViewPage = this.showListPage = false;
    }
    deleteButtonEvent(event) {
        this.viewButtonEvent(event);
        this.showDeleteButton = true;
    }
    deleteVehiclePermanently() {
        let dialogRef = this.sharedService.openConfirmDialog("You want to delete this 'Vehicle'?");
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
            .subscribe((confirmed) => {
            if (confirmed) {
                this.isLoading = true;
                this.vehicleService.deleteVehicle(this.Id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
                    .subscribe((result) => {
                    this.backToListClick();
                    this._ListPage.getList();
                    this.isLoading = false;
                }, (error) => {
                    this.isLoading = false;
                });
            }
        }, (error) => {
            this.isLoading = false;
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
VehicleManagementComponent.ɵfac = function VehicleManagementComponent_Factory(t) { return new (t || VehicleManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_vehicle_service__WEBPACK_IMPORTED_MODULE_7__["VehicleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_8__["PostLoginService"])); };
VehicleManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehicleManagementComponent, selectors: [["vehicle-management"]], viewQuery: function VehicleManagementComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_4__["VehicleListComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._ListPage = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchCard = _t.first);
    } }, decls: 19, vars: 14, consts: [["colGap", "50px"], ["fxFlex", "30"], ["type", "button", "mat-raised-button", "", "class", "btn", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 3, "click", 4, "ngIf"], ["fxFlex", ""], [3, "form", "hidden", "title"], ["searchCard", ""], [3, "header"], [3, "formGroup", "ngSubmit"], [3, "form", "fields"], [3, "form", "isSearchForm", "onReset"], ["type", "button", "class", "btn", "mat-raised-button", "", "appToolTip", "'Go back to Vehicle List'", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 3, "click", 4, "ngIf"], [3, "changeModeId", "isViewMode", "onSaveSuccess", 4, "ngIf"], [3, "hidden", "viewButtonEvent", "editButtonEvent", "deleteButtonEvent"], ["type", "button", "mat-raised-button", "", "class", "delete-button padding", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", "mat-raised-button", "", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 1, "btn", 3, "click"], ["type", "button", "mat-raised-button", "", "appToolTip", "'Go back to Vehicle List'", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 1, "btn", 3, "click"], [3, "changeModeId", "isViewMode", "onSaveSuccess"], ["type", "button", "mat-raised-button", "", "type", "button", 1, "delete-button", "padding", 3, "click"]], template: function VehicleManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "responsive", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VehicleManagementComponent_button_2_Template, 4, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "card-bottom", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function VehicleManagementComponent_Template_form_ngSubmit_7_listener($event) { return ctx.onSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dynamic-form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form-buttons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onReset", function VehicleManagementComponent_Template_form_buttons_onReset_9_listener($event) { return ctx.onSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VehicleManagementComponent_button_12_Template, 4, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, VehicleManagementComponent_app_new_vehicle_15_Template, 1, 2, "app-new-vehicle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-vehicle-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewButtonEvent", function VehicleManagementComponent_Template_app_vehicle_list_viewButtonEvent_16_listener($event) { return ctx.viewButtonEvent($event); })("editButtonEvent", function VehicleManagementComponent_Template_app_vehicle_list_editButtonEvent_16_listener($event) { return ctx.editButtonEvent($event); })("deleteButtonEvent", function VehicleManagementComponent_Template_app_vehicle_list_deleteButtonEvent_16_listener($event) { return ctx.deleteButtonEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, VehicleManagementComponent_button_18_Template, 4, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showListPage && ctx.editPermissions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.searchForm)("hidden", !ctx.showListPage)("title", "Search Vehicle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.searchForm)("fields", ctx.searchConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.searchForm)("isSearchForm", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddChangePage || ctx.showViewPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddChangePage || ctx.showViewPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showListPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDeleteButton && ctx.showViewPage);
    } }, directives: [_shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__["ResponsiveComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _shared_component_boxes_card_bottom_card_bottom_component__WEBPACK_IMPORTED_MODULE_12__["CardBottomComponent"], _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_14__["DynamicFormComponent"], _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_15__["FormButtonsComponent"], _vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_4__["VehicleListComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_18__["ToolTipDirective"], _new_vehicle_new_vehicle_component__WEBPACK_IMPORTED_MODULE_19__["NewVehicleComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vdHJhbnNwb3J0L3ZlaGljbGUvdmVoaWNsZS1tYW5hZ2VtZW50L3ZlaGljbGUtbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vehicle-management',
                templateUrl: './vehicle-management.component.html',
                styleUrls: ['./vehicle-management.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }, { type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_7__["VehicleService"] }, { type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_8__["PostLoginService"] }]; }, { _ListPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_4__["VehicleListComponent"]]
        }], searchCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchCard']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=transport-transport-module-es2015.js.map