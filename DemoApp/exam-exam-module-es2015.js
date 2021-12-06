(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exam-exam-module"],{

/***/ "./src/app/post-login/exam/exam-management/exam-list/exam-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/post-login/exam/exam-management/exam-list/exam-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ExamListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamListComponent", function() { return ExamListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_exam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/exam.service */ "./src/app/post-login/exam/services/exam.service.ts");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services/shared-api.service */ "./src/app/shared/services/shared-api.service.ts");
/* harmony import */ var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/post-login/post-login.service */ "./src/app/post-login/post-login.service.ts");
/* harmony import */ var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/component/boxes/card/card.component */ "./src/app/shared/component/boxes/card/card.component.ts");
/* harmony import */ var _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/component/boxes/large-screen/large-screen.component */ "./src/app/shared/component/boxes/large-screen/large-screen.component.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/fesm2015/sort.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_component_boxes_small_screen_small_screen_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/component/boxes/small-screen/small-screen.component */ "./src/app/shared/component/boxes/small-screen/small-screen.component.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/fesm2015/paginator.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/directives/tool-tip.directive */ "./src/app/shared/directives/tool-tip.directive.ts");
/* harmony import */ var _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/component/boxes/row/row.component */ "./src/app/shared/component/boxes/row/row.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/component/boxes/no-record-found/no-record-found.component */ "./src/app/shared/component/boxes/no-record-found/no-record-found.component.ts");
/* harmony import */ var _shared_pipe_master_data_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/pipe/master-data.pipe */ "./src/app/shared/pipe/master-data.pipe.ts");
/* harmony import */ var _shared_pipe_exam_type_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/pipe/exam-type.pipe */ "./src/app/shared/pipe/exam-type.pipe.ts");
/* harmony import */ var _shared_pipe_class_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/pipe/class.pipe */ "./src/app/shared/pipe/class.pipe.ts");

























function ExamListComponent_tr_21_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamListComponent_tr_21_button_22_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r851); const exam_r845 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r849 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r849.editClicked(exam_r845._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamListComponent_tr_21_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r854 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamListComponent_tr_21_button_23_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r854); const exam_r845 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r852 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r852.deleteClicked(exam_r845._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamListComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r856 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "masterData");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "examType");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "class");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamListComponent_tr_21_Template_button_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r856); const exam_r845 = ctx.$implicit; const ctx_r855 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r855.examTabularReportCardClicked(exam_r845._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "table_chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamListComponent_tr_21_Template_button_click_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r856); const exam_r845 = ctx.$implicit; const ctx_r857 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r857.examReportCardClicked(exam_r845._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "face");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamListComponent_tr_21_Template_button_click_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r856); const exam_r845 = ctx.$implicit; const ctx_r858 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r858.viewClicked(exam_r845._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ExamListComponent_tr_21_button_22_Template, 3, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ExamListComponent_tr_21_button_23_Template, 3, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exam_r845 = ctx.$implicit;
    const idx_r846 = ctx.index;
    const ctx_r842 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r842.paging.pageIndex * ctx_r842.paging.pageSize + idx_r846 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, exam_r845.academicSessionId, "academicSession"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, exam_r845.examTypeId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, exam_r845.classId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r842.editPermissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r842.editPermissions);
} }
function ExamListComponent_ng_container_23_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r866 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamListComponent_ng_container_23_button_16_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r866); const exam_r859 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r864 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r864.editClicked(exam_r859._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamListComponent_ng_container_23_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r869 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamListComponent_ng_container_23_button_17_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r869); const exam_r859 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r867 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r867.deleteClicked(exam_r859._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamListComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    const _r871 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "row", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamListComponent_ng_container_23_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r871); const exam_r859 = ctx.$implicit; const ctx_r870 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r870.examTabularReportCardClicked(exam_r859._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "table_chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamListComponent_ng_container_23_Template_button_click_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r871); const exam_r859 = ctx.$implicit; const ctx_r872 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r872.examReportCardClicked(exam_r859._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "face");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamListComponent_ng_container_23_Template_button_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r871); const exam_r859 = ctx.$implicit; const ctx_r873 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r873.viewClicked(exam_r859._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ExamListComponent_ng_container_23_button_16_Template, 3, 0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ExamListComponent_ng_container_23_button_17_Template, 3, 0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "ballot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Academic Session: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "masterData");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "developer_board");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Exam Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "examType");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "ballot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Class ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "class");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const exam_r859 = ctx.$implicit;
    const idx_r860 = ctx.index;
    const ctx_r843 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childCard", true)("header", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("# ", ctx_r843.paging.pageIndex * ctx_r843.paging.pageSize + idx_r860 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r843.editPermissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r843.editPermissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 8, exam_r859.academicSessionId, "academicSession"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 11, exam_r859.examTypeId), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 13, exam_r859.classId), " ");
} }
function ExamListComponent_no_record_found_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "no-record-found");
} }
class ExamListComponent {
    constructor(examService, changeDetector, sharedService, sharedApiService, plService) {
        this.examService = examService;
        this.changeDetector = changeDetector;
        this.sharedService = sharedService;
        this.sharedApiService = sharedApiService;
        this.plService = plService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.viewButtonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editButtonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteButtonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reportCardButtonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabularReportCardButtonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageTitle = "";
        this.isLoading = false;
        this.environment = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_3__["MasterData"];
        this.exams = [];
        this.viewUser = false;
        this.searchParams = null;
        this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
        };
        this.sortParams = {
            fieldName: "_id",
            isAsc: false
        };
        this.editPermissions = this.plService.getPageEntitlements(9, 1) == 2;
    }
    ngOnInit() {
        this.getClassSubjectObject();
        this.getList();
    }
    getClassSubjectObject() {
        this.sharedApiService.getClassSubjectSectionDdl()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe$))
            .subscribe(val => {
            this.allClassSubjectObject = val;
        }, error => {
        });
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
        this.examService
            .getSchoolExamList(SearchObject)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe$))
            .subscribe((result) => {
            this.isLoading = false;
            this.exams = result.data;
            this.paging.length = result.count;
        }, (error) => {
            this.isLoading = false;
            console.log(error);
        });
    }
    examTabularReportCardClicked(id) {
        this.tabularReportCardButtonEvent.emit(id);
    }
    examReportCardClicked(id) {
        this.reportCardButtonEvent.emit(id);
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
ExamListComponent.ɵfac = function ExamListComponent_Factory(t) { return new (t || ExamListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_exam_service__WEBPACK_IMPORTED_MODULE_4__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_6__["SharedApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_7__["PostLoginService"])); };
ExamListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamListComponent, selectors: [["app-exam-list"]], inputs: { pageTitle: "pageTitle", roleId: "roleId" }, outputs: { viewButtonEvent: "viewButtonEvent", editButtonEvent: "editButtonEvent", deleteButtonEvent: "deleteButtonEvent", reportCardButtonEvent: "reportCardButtonEvent", tabularReportCardButtonEvent: "tabularReportCardButtonEvent" }, decls: 26, vars: 10, consts: [[3, "loading", "title", "subTitle", "refresh"], ["matSort", "", 1, "table", 3, "matSortChange"], [1, "thead"], [1, "sr"], ["matRipple", "", "mat-sort-header", "academicSessionId"], ["matRipple", "", "mat-sort-header", "examTypeId"], ["matRipple", "", "mat-sort-header", "classId"], ["class", "tr", 4, "ngFor", "ngForOf"], [1, "default-font"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "length", "showFirstLastButtons", "pageSize", "pageSizeOptions", "page"], [1, "tr"], [1, "sr-col"], [1, "rt"], ["mat-icon-button", "", "appToolTip", "'Tabular Report Card'", 1, "icon-view", 3, "click"], ["mat-icon-button", ""], ["mat-icon-button", "", "appToolTip", "'Report Card'", 1, "icon-view", 3, "click"], ["mat-icon-button", "", "appToolTip", "'View Exam'", 1, "icon-view", 3, "click"], ["mat-icon-button", "", "appToolTip", "'Edit Exam'", "class", "icon-edit", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "appToolTip", "'Delete Exam'", "class", "icon-delete", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "appToolTip", "'Edit Exam'", 1, "icon-edit", 3, "click"], ["mat-icon-button", "", "appToolTip", "'Delete Exam'", 1, "icon-delete", 3, "click"], [3, "childCard", "header"], ["gap", "2px"], ["fxFlex", "10%"], ["fxFlex", "", 1, "rt"], ["mat-icon-button", "", "appToolTip", "'Tabular Report Card'", 1, "big-icon-view", 3, "click"], ["mat-icon-button", "", "appToolTip", "'Report Card'", 1, "big-icon-view", 3, "click"], ["mat-icon-button", "", "appToolTip", "'View Exam'", 1, "big-icon-view", 3, "click"], ["mat-icon-button", "", "appToolTip", "'Edit Exam'", "class", "big-icon-edit", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "appToolTip", "'Delete Exam'", "class", "big-icon-delete", 3, "click", 4, "ngIf"], ["fxFlex", ""], [1, "small-screen-data"], [1, "bold"], ["mat-icon-button", "", "appToolTip", "'Edit Exam'", 1, "big-icon-edit", 3, "click"], ["mat-icon-button", "", "appToolTip", "'Delete Exam'", 1, "big-icon-delete", 3, "click"]], template: function ExamListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function ExamListComponent_Template_card_refresh_0_listener($event) { return ctx.getList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "large-screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function ExamListComponent_Template_table_matSortChange_2_listener($event) { return ctx.sortClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Academic Session ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ballot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Exam Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "developer_board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ballot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ExamListComponent_tr_21_Template, 24, 13, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "small-screen", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ExamListComponent_ng_container_23_Template, 46, 15, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ExamListComponent_no_record_found_24_Template, 1, 0, "no-record-found", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-paginator", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ExamListComponent_Template_mat_paginator_page_25_listener($event) { return ctx.pagingClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.isLoading)("title", "Exam List")("subTitle", "Manage your exam for School");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.exams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.exams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exams.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.paging.length)("showFirstLastButtons", ctx.masterData.paging.showFirstLastButtons)("pageSize", ctx.paging.pageSize)("pageSizeOptions", ctx.masterData.paging.pageSizeOptions);
    } }, directives: [_shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_9__["LargeScreenComponent"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSort"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRipple"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortHeader"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _shared_component_boxes_small_screen_small_screen_component__WEBPACK_IMPORTED_MODULE_14__["SmallScreenComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_17__["ToolTipDirective"], _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_18__["ROWComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultFlexDirective"], _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_20__["NoRecordFoundComponent"]], pipes: [_shared_pipe_master_data_pipe__WEBPACK_IMPORTED_MODULE_21__["MasterDataPipe"], _shared_pipe_exam_type_pipe__WEBPACK_IMPORTED_MODULE_22__["ExamTypePipe"], _shared_pipe_class_pipe__WEBPACK_IMPORTED_MODULE_23__["ClassPipe"]], styles: [".small-screen-data[_ngcontent-%COMP%]{\r\n    margin: 5px 0px 0px 10px;\r\n    font-size: 12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi9leGFtL2V4YW0tbWFuYWdlbWVudC9leGFtLWxpc3QvZXhhbS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vZXhhbS9leGFtLW1hbmFnZW1lbnQvZXhhbS1saXN0L2V4YW0tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNtYWxsLXNjcmVlbi1kYXRhe1xyXG4gICAgbWFyZ2luOiA1cHggMHB4IDBweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exam-list',
                templateUrl: './exam-list.component.html',
                styleUrls: ['./exam-list.component.css']
            }]
    }], function () { return [{ type: _services_exam_service__WEBPACK_IMPORTED_MODULE_4__["ExamService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }, { type: _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_6__["SharedApiService"] }, { type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_7__["PostLoginService"] }]; }, { viewButtonEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], editButtonEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteButtonEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], reportCardButtonEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tabularReportCardButtonEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], roleId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/exam/exam-management/exam-management.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/post-login/exam/exam-management/exam-management.component.ts ***!
  \******************************************************************************/
/*! exports provided: ExamManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamManagementComponent", function() { return ExamManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _exam_list_exam_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exam-list/exam-list.component */ "./src/app/post-login/exam/exam-management/exam-list/exam-list.component.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/services/shared-api.service */ "./src/app/shared/services/shared-api.service.ts");
/* harmony import */ var _services_exam_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/exam.service */ "./src/app/post-login/exam/services/exam.service.ts");
/* harmony import */ var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/post-login/post-login.service */ "./src/app/post-login/post-login.service.ts");
/* harmony import */ var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/component/boxes/responsive/responsive.component */ "./src/app/shared/component/boxes/responsive/responsive.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_component_boxes_card_bottom_card_bottom_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/component/boxes/card-bottom/card-bottom.component */ "./src/app/shared/component/boxes/card-bottom/card-bottom.component.ts");
/* harmony import */ var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/component/boxes/card/card.component */ "./src/app/shared/component/boxes/card/card.component.ts");
/* harmony import */ var _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/component/buttons/form-buttons/form-buttons.component */ "./src/app/shared/component/buttons/form-buttons/form-buttons.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/component/dynamic-form/dynamic-form/dynamic-form.component */ "./src/app/shared/component/dynamic-form/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/directives/tool-tip.directive */ "./src/app/shared/directives/tool-tip.directive.ts");
/* harmony import */ var _new_exam_new_exam_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./new-exam/new-exam.component */ "./src/app/post-login/exam/exam-management/new-exam/new-exam.component.ts");
/* harmony import */ var _shared_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/component/loader/loader.component */ "./src/app/shared/component/loader/loader.component.ts");
/* harmony import */ var _exam_report_card_exam_report_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./exam-report-card/exam-report-card.component */ "./src/app/post-login/exam/exam-management/exam-report-card/exam-report-card.component.ts");

























const _c0 = ["searchCard"];
function ExamManagementComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r882 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamManagementComponent_button_2_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r882); const ctx_r881 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r881.addNewClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "chrome_reader_mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add New Exam ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamManagementComponent_dynamic_form_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dynamic-form", 15);
} if (rf & 2) {
    const ctx_r876 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r876.searchForm)("fields", ctx_r876.searchConfig);
} }
function ExamManagementComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r884 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamManagementComponent_button_12_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r884); const ctx_r883 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r883.backToListClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_return");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Back to Exam List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamManagementComponent_div_15_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r889 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-new-exam", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSaveSuccess", function ExamManagementComponent_div_15_ng_container_1_Template_app_new_exam_onSaveSuccess_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r889); const ctx_r888 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r888.onSaveSuccess($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r885 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("changeModeId", ctx_r885.Id)("isViewMode", ctx_r885.showViewPage)("ClassSectionWiseStudents", ctx_r885.ClassSectionWiseStudents);
} }
function ExamManagementComponent_div_15_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "We are loading some important data.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-loader");
} }
function ExamManagementComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExamManagementComponent_div_15_ng_container_1_Template, 2, 3, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExamManagementComponent_div_15_ng_template_2_Template, 6, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r886 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r878 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r878.ClassSectionWiseStudents)("ngIfElse", _r886);
} }
function ExamManagementComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-exam-report-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r879 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isTabularReportCard", ctx_r879.isTabularReportCard)("examId", ctx_r879.Id);
} }
function ExamManagementComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r891 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamManagementComponent_button_19_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r891); const ctx_r890 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r890.deleteExamPermanently(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Delete And Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ExamManagementComponent {
    constructor(fb, sharedService, sharedApiService, examService, plService) {
        this.fb = fb;
        this.sharedService = sharedService;
        this.sharedApiService = sharedApiService;
        this.examService = examService;
        this.plService = plService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.showReportCardPage = false;
        this.showViewPage = false;
        this.showAddChangePage = false;
        this.showListPage = true;
        this.showDeleteButton = false;
        this.isLoading = false;
        this.Id = null;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_3__["MasterData"];
        this.searchForm = this.fb.group({});
        this.editPermissions = this.plService.getPageEntitlements(9, 1) === 2;
    }
    ngOnInit() {
        this.loadClassSubjectSectionDdl();
        this.sharedApiService.ClassSectionWiseStudents()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe((result) => {
            this.ClassSectionWiseStudents = result;
        }, (error) => {
            console.log(error);
        });
    }
    loadClassSubjectSectionDdl() {
        this.sharedApiService.getClassSubjectSectionDdl()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe((result) => {
            this.loadExamTypeDdl(result);
        }, (error) => {
            console.log(error);
        });
    }
    loadExamTypeDdl(classObject) {
        this.sharedApiService.getExamTypeDdl()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe((result) => {
            this.setSearchConfig(classObject, result);
        }, (error) => {
            console.log(error);
        });
    }
    setSearchConfig(classObject, examTypeObject) {
        this.searchConfig = [
            {
                isViewMode: false,
                type: "select",
                label: "Academic Session",
                name: "academicSessionId",
                icon: "ballot",
                options: this.masterData.academicSessions
            },
            {
                isViewMode: false,
                type: "select",
                label: "Exam type",
                name: "examTypeId",
                icon: "developer_board",
                options: examTypeObject
            },
            {
                isViewMode: false,
                type: "select",
                label: "Class",
                name: "classId",
                icon: "ballot",
                options: classObject
            }
        ];
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
        this.showReportCardPage = this.showViewPage = this.showListPage = false;
    }
    backToListClick() {
        this.showListPage = true;
        this.showReportCardPage = this.showViewPage = this.showAddChangePage = false;
    }
    onSaveSuccess(event) {
        this.backToListClick();
        if (this._ListPage) {
            this._ListPage.getList();
        }
    }
    tabularReportCardButtonEvent(event) {
        this.isTabularReportCard = true;
        this.Id = event;
        this.showReportCardPage = true;
        this.showDeleteButton = this.showListPage = this.showAddChangePage = this.showViewPage = false;
    }
    reportCardButtonEvent(event) {
        this.isTabularReportCard = false;
        this.Id = event;
        this.showReportCardPage = true;
        this.showDeleteButton = this.showListPage = this.showAddChangePage = this.showViewPage = false;
    }
    viewButtonEvent(event) {
        this.Id = event;
        this.showViewPage = true;
        this.showDeleteButton = this.showListPage = this.showAddChangePage = this.showReportCardPage = false;
    }
    editButtonEvent(event) {
        this.showAddChangePage = true;
        this.Id = event;
        this.showDeleteButton = this.showViewPage = this.showListPage = this.showReportCardPage = false;
    }
    deleteButtonEvent(event) {
        this.viewButtonEvent(event);
        this.showDeleteButton = true;
    }
    deleteExamPermanently() {
        let dialogRef = this.sharedService.openConfirmDialog("You want to delete this 'Exam'?");
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe((confirmed) => {
            if (confirmed) {
                this.isLoading = true;
                this.examService.deleteSchoolExam(this.Id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
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
ExamManagementComponent.ɵfac = function ExamManagementComponent_Factory(t) { return new (t || ExamManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_7__["SharedApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_exam_service__WEBPACK_IMPORTED_MODULE_8__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_9__["PostLoginService"])); };
ExamManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamManagementComponent, selectors: [["app-exam-management"]], viewQuery: function ExamManagementComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_exam_list_exam_list_component__WEBPACK_IMPORTED_MODULE_2__["ExamListComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._ListPage = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchCard = _t.first);
    } }, decls: 20, vars: 14, consts: [["colGap", "50px"], ["fxFlex", "30"], ["type", "button", "mat-raised-button", "", "matTooltipShowDelay", "100", "class", "btn", "matTooltipHideDelay", "100", 3, "click", 4, "ngIf"], ["fxFlex", ""], [3, "form", "hidden", "title"], ["searchCard", ""], [3, "header"], [3, "formGroup", "ngSubmit"], [3, "form", "fields", 4, "ngIf"], [3, "form", "isSearchForm", "onReset"], ["type", "button", "mat-raised-button", "", "class", "btn", "appToolTip", "'Go back to Exam List'", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 3, "click", 4, "ngIf"], [4, "ngIf"], [3, "hidden", "tabularReportCardButtonEvent", "reportCardButtonEvent", "viewButtonEvent", "editButtonEvent", "deleteButtonEvent"], ["mat-raised-button", "", "class", "delete-button padding", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", "mat-raised-button", "", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 1, "btn", 3, "click"], [3, "form", "fields"], ["type", "button", "mat-raised-button", "", "appToolTip", "'Go back to Exam List'", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 1, "btn", 3, "click"], [4, "ngIf", "ngIfElse"], ["loadigImpData", ""], [3, "changeModeId", "isViewMode", "ClassSectionWiseStudents", "onSaveSuccess"], [3, "isTabularReportCard", "examId"], ["mat-raised-button", "", "type", "button", 1, "delete-button", "padding", 3, "click"]], template: function ExamManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "responsive", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExamManagementComponent_button_2_Template, 4, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "card-bottom", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ExamManagementComponent_Template_form_ngSubmit_7_listener($event) { return ctx.onSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExamManagementComponent_dynamic_form_8_Template, 1, 2, "dynamic-form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form-buttons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onReset", function ExamManagementComponent_Template_form_buttons_onReset_9_listener($event) { return ctx.onSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExamManagementComponent_button_12_Template, 4, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExamManagementComponent_div_15_Template, 4, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ExamManagementComponent_div_16_Template, 2, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-exam-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tabularReportCardButtonEvent", function ExamManagementComponent_Template_app_exam_list_tabularReportCardButtonEvent_17_listener($event) { return ctx.tabularReportCardButtonEvent($event); })("reportCardButtonEvent", function ExamManagementComponent_Template_app_exam_list_reportCardButtonEvent_17_listener($event) { return ctx.reportCardButtonEvent($event); })("viewButtonEvent", function ExamManagementComponent_Template_app_exam_list_viewButtonEvent_17_listener($event) { return ctx.viewButtonEvent($event); })("editButtonEvent", function ExamManagementComponent_Template_app_exam_list_editButtonEvent_17_listener($event) { return ctx.editButtonEvent($event); })("deleteButtonEvent", function ExamManagementComponent_Template_app_exam_list_deleteButtonEvent_17_listener($event) { return ctx.deleteButtonEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ExamManagementComponent_button_19_Template, 4, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showListPage && ctx.editPermissions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.searchForm)("hidden", !ctx.showListPage)("title", "Search Exam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.searchForm)("isSearchForm", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddChangePage || ctx.showViewPage || ctx.showReportCardPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddChangePage || ctx.showViewPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showReportCardPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showListPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDeleteButton && ctx.showViewPage);
    } }, directives: [_shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_10__["ResponsiveComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _shared_component_boxes_card_bottom_card_bottom_component__WEBPACK_IMPORTED_MODULE_13__["CardBottomComponent"], _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_14__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_15__["FormButtonsComponent"], _exam_list_exam_list_component__WEBPACK_IMPORTED_MODULE_2__["ExamListComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_18__["DynamicFormComponent"], _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_19__["ToolTipDirective"], _new_exam_new_exam_component__WEBPACK_IMPORTED_MODULE_20__["NewExamComponent"], _shared_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_21__["LoaderComponent"], _exam_report_card_exam_report_card_component__WEBPACK_IMPORTED_MODULE_22__["ExamReportCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vZXhhbS9leGFtLW1hbmFnZW1lbnQvZXhhbS1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exam-management',
                templateUrl: './exam-management.component.html',
                styleUrls: ['./exam-management.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }, { type: _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_7__["SharedApiService"] }, { type: _services_exam_service__WEBPACK_IMPORTED_MODULE_8__["ExamService"] }, { type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_9__["PostLoginService"] }]; }, { _ListPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_exam_list_exam_list_component__WEBPACK_IMPORTED_MODULE_2__["ExamListComponent"]]
        }], searchCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchCard']
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/exam/exam-management/exam-report-card/exam-report-card.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/post-login/exam/exam-management/exam-report-card/exam-report-card.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ExamReportCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamReportCardComponent", function() { return ExamReportCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_exam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/exam.service */ "./src/app/post-login/exam/services/exam.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/fesm2015/radio.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/fesm2015/button-toggle.js");
/* harmony import */ var _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/component/boxes/row/row.component */ "./src/app/shared/component/boxes/row/row.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _tabular_format_tabular_format_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tabular-format/tabular-format.component */ "./src/app/post-login/exam/exam-management/exam-report-card/tabular-format/tabular-format.component.ts");
/* harmony import */ var _panel_format_panel_format_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./panel-format/panel-format.component */ "./src/app/post-login/exam/exam-management/exam-report-card/panel-format/panel-format.component.ts");
/* harmony import */ var _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/component/boxes/no-record-found/no-record-found.component */ "./src/app/shared/component/boxes/no-record-found/no-record-found.component.ts");
/* harmony import */ var _shared_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/component/loader/loader.component */ "./src/app/shared/component/loader/loader.component.ts");
/* harmony import */ var _shared_pipe_class_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/pipe/class.pipe */ "./src/app/shared/pipe/class.pipe.ts");
/* harmony import */ var _shared_pipe_master_data_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/pipe/master-data.pipe */ "./src/app/shared/pipe/master-data.pipe.ts");


















const _c0 = ["selectedSectionToggleButton"];
function ExamReportCardComponent_div_0_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "class");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r966 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Class ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r966.dbData[0] == null ? null : ctx_r966.dbData[0]._id.classId), " Exam results ");
} }
function ExamReportCardComponent_div_0_mat_button_toggle_12_Template(rf, ctx) { if (rf & 1) {
    const _r972 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ExamReportCardComponent_div_0_mat_button_toggle_12_Template_mat_button_toggle_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r972); const ctx_r971 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r971.onSectionChange($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "masterData");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r970 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", section_r970);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Section ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, section_r970, "classsections"), "");
} }
function ExamReportCardComponent_div_0_ng_container_13_app_tabular_format_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-tabular-format", 18);
} if (rf & 2) {
    const ctx_r973 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedSectionId", ctx_r973.selectedSectionId)("resultData", ctx_r973.resultData);
} }
function ExamReportCardComponent_div_0_ng_container_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-panel-format", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r974 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedSectionId", ctx_r974.selectedSectionId)("resultData", ctx_r974.resultData);
} }
function ExamReportCardComponent_div_0_ng_container_13_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "no-record-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "active-report-type": a0 }; };
function ExamReportCardComponent_div_0_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r977 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExamReportCardComponent_div_0_ng_container_13_app_tabular_format_1_Template, 1, 2, "app-tabular-format", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExamReportCardComponent_div_0_ng_container_13_div_2_Template, 2, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExamReportCardComponent_div_0_ng_container_13_div_3_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamReportCardComponent_div_0_ng_container_13_Template_mat_icon_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r977); const ctx_r976 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r976.isTabularReportCard = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "table_chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamReportCardComponent_div_0_ng_container_13_Template_mat_icon_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r977); const ctx_r978 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r978.isTabularReportCard = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "face");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r969 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r969.isTabularReportCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r969.isTabularReportCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r969.resultData.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r969.isTabularReportCard));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, !ctx_r969.isTabularReportCard));
} }
function ExamReportCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r980 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExamReportCardComponent_div_0_span_1_Template, 3, 3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-radio-group", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-radio-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamReportCardComponent_div_0_Template_mat_radio_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r980); const ctx_r979 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r979.showOnlyFailed(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All Students");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-radio-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamReportCardComponent_div_0_Template_mat_radio_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r980); const ctx_r981 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r981.showOnlyFailed(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Failed in any subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-button-toggle-group", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExamReportCardComponent_div_0_mat_button_toggle_12_Template, 4, 5, "mat-button-toggle", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExamReportCardComponent_div_0_ng_container_13_Template, 14, 9, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r964 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r964.dbData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r964.sections[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r964.sections);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r964.selectedSectionId);
} }
function ExamReportCardComponent_app_loader_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class ExamReportCardComponent {
    constructor(examService) {
        this.examService = examService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_3__["MasterData"];
    }
    ngOnInit() {
        this.getExamResult();
    }
    getExamResult() {
        this.isLoading = true;
        this.examService.getExamResultStudentWise(this.examId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$))
            .subscribe((result) => {
            this.dbData = result;
            this.resultData = result;
            this.isLoading = false;
            this.getSectonList();
        }, (error) => {
            this.isLoading = false;
            console.log(error);
        });
    }
    showOnlyFailed(value) {
        if (!value) {
            this.resultData = this.dbData;
        }
        else {
            let tempData = [];
            this.dbData.forEach(result => {
                let failedSubject = result.subjects.filter(x => x.marksGained < x.passingMarks);
                if (failedSubject.length > 0) {
                    tempData.push(result);
                }
            });
            this.resultData = tempData;
        }
        this.getSectonList();
    }
    getSectonList() {
        let allSections = [];
        this.resultData.forEach(element => {
            allSections.push(element["_id"]["sectionId"]);
        });
        this.sections = Array.from(new Set(allSections)).sort();
        if (this.sections.length > 0) {
            this.selectedSectionId = this.sections[0];
            if (this.selectedSectionToggleButton) {
                this.selectedSectionToggleButton.value = this.selectedSectionId;
            }
        }
    }
    onSectionChange(sectionId) {
        this.selectedSectionId = sectionId;
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
ExamReportCardComponent.ɵfac = function ExamReportCardComponent_Factory(t) { return new (t || ExamReportCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_exam_service__WEBPACK_IMPORTED_MODULE_4__["ExamService"])); };
ExamReportCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamReportCardComponent, selectors: [["app-exam-report-card"]], viewQuery: function ExamReportCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectedSectionToggleButton = _t.first);
    } }, inputs: { examId: "examId", isTabularReportCard: "isTabularReportCard" }, decls: 2, vars: 2, consts: [["class", "custom-page-mainDiv", 4, "ngIf"], [4, "ngIf"], [1, "custom-page-mainDiv"], ["class", "custom-page-header", 4, "ngIf"], ["aria-label", "Select an option", "value", "all"], ["value", "all", 3, "click"], ["value", "failed", 3, "click"], [1, "section-tabs"], [3, "value"], ["selectedSectionToggleButton", "matButtonToggleGroup"], [3, "value", "change", 4, "ngFor", "ngForOf"], [1, "custom-page-header"], [3, "value", "change"], [1, "section-name"], [3, "selectedSectionId", "resultData", 4, "ngIf"], ["class", "section-details", 4, "ngIf"], [1, "fill-space"], ["mat-icon-button", "", 1, "report-type-icons", "pointer", 3, "ngClass", "click"], [3, "selectedSectionId", "resultData"], [1, "section-details"]], template: function ExamReportCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExamReportCardComponent_div_0_Template, 14, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExamReportCardComponent_app_loader_1_Template, 1, 0, "app-loader", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioButton"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggle"], _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_8__["ROWComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultClassDirective"], _tabular_format_tabular_format_component__WEBPACK_IMPORTED_MODULE_11__["TabularFormatComponent"], _panel_format_panel_format_component__WEBPACK_IMPORTED_MODULE_12__["PanelFormatComponent"], _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_13__["NoRecordFoundComponent"], _shared_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"]], pipes: [_shared_pipe_class_pipe__WEBPACK_IMPORTED_MODULE_15__["ClassPipe"], _shared_pipe_master_data_pipe__WEBPACK_IMPORTED_MODULE_16__["MasterDataPipe"]], styles: [".mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\r\n    margin-left: 16px;\r\n  }\r\n\r\n.section-name[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n}\r\n\r\n.mat-button-toggle-checked[_ngcontent-%COMP%]{\r\n    background-color: var(--main-color) !important;\r\n}\r\n\r\n.mat-button-toggle-checked[_ngcontent-%COMP%]   .section-name[_ngcontent-%COMP%]{\r\n    color: white !important;\r\n    font-size: 14px !important;\r\n}\r\n\r\n.section-tabs[_ngcontent-%COMP%]{\r\n    margin: 0px; \r\n    overflow: auto;\r\n}\r\n\r\n.section-details[_ngcontent-%COMP%]{\r\n    border-style: solid;\r\n    border-width: 10px;\r\n    border-color: var(--main-color);\r\n    margin-top: -1px;\r\n    border-radius: 5px;\r\n    border-top-left-radius: 0px;\r\n}\r\n\r\n.mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{\r\n    border-color: var(--main-color);\r\n    border-bottom-left-radius: 0px !important;\r\n    border-bottom-right-radius: 0px !important;\r\n}\r\n\r\n.report-type-icons[_ngcontent-%COMP%]{\r\n    color: #666;\r\n    opacity: 0.5;\r\n}\r\n\r\n.active-report-type[_ngcontent-%COMP%]{\r\n    border-width: 1px;\r\n    color: black;\r\n    opacity: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi9leGFtL2V4YW0tbWFuYWdlbWVudC9leGFtLXJlcG9ydC1jYXJkL2V4YW0tcmVwb3J0LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtFQUNuQjs7QUFFRjtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQix5Q0FBeUM7SUFDekMsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vZXhhbS9leGFtLW1hbmFnZW1lbnQvZXhhbS1yZXBvcnQtY2FyZC9leGFtLXJlcG9ydC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXJhZGlvLWJ1dHRvbiB+IC5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gIH1cclxuXHJcbi5zZWN0aW9uLW5hbWV7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2Vke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQgLnNlY3Rpb24tbmFtZXtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRhYnN7XHJcbiAgICBtYXJnaW46IDBweDsgXHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnNlY3Rpb24tZGV0YWlsc3tcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDEwcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxufVxyXG5cclxuLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQsIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZXBvcnQtdHlwZS1pY29uc3tcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uYWN0aXZlLXJlcG9ydC10eXBle1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamReportCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exam-report-card',
                templateUrl: './exam-report-card.component.html',
                styleUrls: ['./exam-report-card.component.css']
            }]
    }], function () { return [{ type: _services_exam_service__WEBPACK_IMPORTED_MODULE_4__["ExamService"] }]; }, { selectedSectionToggleButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['selectedSectionToggleButton']
        }], examId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isTabularReportCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/exam/exam-management/exam-report-card/panel-format/panel-format.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/post-login/exam/exam-management/exam-report-card/panel-format/panel-format.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PanelFormatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelFormatComponent", function() { return PanelFormatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_component_user_small_pic_user_small_pic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/component/user-small-pic/user-small-pic.component */ "./src/app/shared/component/user-small-pic/user-small-pic.component.ts");
/* harmony import */ var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/component/boxes/responsive/responsive.component */ "./src/app/shared/component/boxes/responsive/responsive.component.ts");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _shared_pipe_number_data_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/pipe/number-data.pipe */ "./src/app/shared/pipe/number-data.pipe.ts");
/* harmony import */ var _shared_pipe_subject_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/pipe/subject.pipe */ "./src/app/shared/pipe/subject.pipe.ts");










const _c0 = function (a0) { return { "fail": a0 }; };
function PanelFormatComponent_ng_container_2_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r992 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, subject_r992.subjectId), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subject_r992.maxMarks, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subject_r992.passingMarks, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, subject_r992.marksGained < subject_r992.passingMarks));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subject_r992.marksGained, " ");
} }
function PanelFormatComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "user-small-pic", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "responsive", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Roll.No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "numberData");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Subject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Total Marks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Passing Marks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Marks Gained ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PanelFormatComponent_ng_container_2_tr_26_Template, 10, 9, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const result_r990 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", result_r990._id.studentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colGap", "5px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 6, result_r990.studentDetails.rollNo), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", result_r990.studentDetails.firstName, " ", result_r990.studentDetails.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", result_r990.subjects);
} }
class PanelFormatComponent {
    constructor() {
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"];
    }
    set selectedSectionId(value) {
        this.sectionId = value;
        this.processFilter();
    }
    set resultData(value) {
        this.orgData = value;
        this.processFilter();
    }
    ngOnInit() {
    }
    processFilter() {
        this.filteredData = this.orgData ? this.orgData.filter(x => x._id.sectionId === this.sectionId) : null;
    }
}
PanelFormatComponent.ɵfac = function PanelFormatComponent_Factory(t) { return new (t || PanelFormatComponent)(); };
PanelFormatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelFormatComponent, selectors: [["app-panel-format"]], inputs: { selectedSectionId: "selectedSectionId", resultData: "resultData" }, decls: 3, vars: 2, consts: [[1, "details-div"], ["hideToggle", "true", 3, "multi"], [4, "ngFor", "ngForOf"], [1, "appear-animate"], [3, "userId"], [3, "colGap"], ["border", "1", "cellspacing", "0", 1, "score-table"], ["class", "tr", 4, "ngFor", "ngForOf"], [1, "tr"], [3, "ngClass"]], template: function PanelFormatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelFormatComponent_ng_container_2_Template, 27, 8, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multi", ctx.masterData.expendMultiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredData);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _shared_component_user_small_pic_user_small_pic_component__WEBPACK_IMPORTED_MODULE_4__["UserSmallPicComponent"], _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_5__["ResponsiveComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"]], pipes: [_shared_pipe_number_data_pipe__WEBPACK_IMPORTED_MODULE_7__["NumberDataPipe"], _shared_pipe_subject_pipe__WEBPACK_IMPORTED_MODULE_8__["SubjectPipe"]], styles: [".details-div[_ngcontent-%COMP%]{\r\n    background-color: #2222221a;\r\n}\r\n\r\n.fail[_ngcontent-%COMP%]{\r\n    background-color: red !important;\r\n    color: whitesmoke !important;\r\n}\r\n\r\n.not-in-use----mat-expansion-panel-spacing[_ngcontent-%COMP%]{\r\n    margin-top: 10px !important;\r\n    margin-bottom: 10px !important;\r\n}\r\n\r\n.mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded), .mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expansion-panel-spacing){\r\n    margin-bottom: 2px;\r\n}\r\n\r\n.score-table[_ngcontent-%COMP%]{\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-radius: 5px;\r\n    border-color: #222;\r\n}\r\n\r\nth[_ngcontent-%COMP%]{\r\n    padding: 10px 2px 10px 2px;\r\n\tmargin-bottom: 10px;\r\n\tfont-size: 80%;\r\n\tcolor: whitesmoke;\r\n    background-color: #222 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi9leGFtL2V4YW0tbWFuYWdlbWVudC9leGFtLXJlcG9ydC1jYXJkL3BhbmVsLWZvcm1hdC9wYW5lbC1mb3JtYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMEJBQTBCO0NBQzdCLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsaUJBQWlCO0lBQ2QsaUNBQWlDO0FBQ3JDIiwiZmlsZSI6InNyYy9hcHAvcG9zdC1sb2dpbi9leGFtL2V4YW0tbWFuYWdlbWVudC9leGFtLXJlcG9ydC1jYXJkL3BhbmVsLWZvcm1hdC9wYW5lbC1mb3JtYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzLWRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjIxYTtcclxufVxyXG5cclxuLmZhaWx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ub3QtaW4tdXNlLS0tLW1hdC1leHBhbnNpb24tcGFuZWwtc3BhY2luZ3tcclxuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1hY2NvcmRpb24gLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpLCAubWF0LWFjY29yZGlvbiAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbnNpb24tcGFuZWwtc3BhY2luZyl7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbi5zY29yZS10YWJsZXtcclxuICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1jb2xvcjogIzIyMjtcclxufVxyXG5cclxudGh7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDJweCAxMHB4IDJweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdGZvbnQtc2l6ZTogODAlO1xyXG5cdGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMiAhaW1wb3J0YW50O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelFormatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-panel-format',
                templateUrl: './panel-format.component.html',
                styleUrls: ['./panel-format.component.css']
            }]
    }], function () { return []; }, { selectedSectionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resultData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/exam/exam-management/exam-report-card/tabular-format/tabular-format.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/post-login/exam/exam-management/exam-report-card/tabular-format/tabular-format.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: TabularFormatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabularFormatComponent", function() { return TabularFormatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_component_user_small_pic_user_small_pic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/component/user-small-pic/user-small-pic.component */ "./src/app/shared/component/user-small-pic/user-small-pic.component.ts");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _shared_pipe_subject_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/pipe/subject.pipe */ "./src/app/shared/pipe/subject.pipe.ts");
/* harmony import */ var _shared_pipe_number_data_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/pipe/number-data.pipe */ "./src/app/shared/pipe/number-data.pipe.ts");







function TabularFormatComponent_table_0_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r985 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, subject_r985.subjectId), " ");
} }
const _c0 = function (a0) { return { "fail": a0 }; };
function TabularFormatComponent_table_0_tr_7_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r988 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, subject_r988.marksGained < subject_r988.passingMarks));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subject_r988.marksGained, " ");
} }
function TabularFormatComponent_table_0_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "user-small-pic", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Roll.No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "numberData");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TabularFormatComponent_table_0_tr_7_td_10_Template, 2, 4, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r986 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", result_r986._id.studentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, result_r986.studentDetails.rollNo), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", result_r986.studentDetails.firstName, " ", result_r986.studentDetails.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", result_r986.subjects);
} }
function TabularFormatComponent_table_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Student Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TabularFormatComponent_table_0_th_5_Template, 3, 3, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TabularFormatComponent_table_0_tr_7_Template, 11, 7, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r982 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r982.filteredData[0].subjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r982.filteredData);
} }
class TabularFormatComponent {
    constructor() {
    }
    set selectedSectionId(value) {
        this.sectionId = value;
        this.processFilter();
    }
    set resultData(value) {
        this.orgData = value;
        this.processFilter();
    }
    ngOnInit() {
    }
    processFilter() {
        this.filteredData = this.orgData ? this.orgData.filter(x => x._id.sectionId === this.sectionId) : null;
    }
    sortData() {
    }
    sortNodes(a, b) {
        if (a[0]._id.distance < b[0].distance)
            return -1;
        if (a[0].distance > b[0].distance)
            return 1;
        return 0;
    }
}
TabularFormatComponent.ɵfac = function TabularFormatComponent_Factory(t) { return new (t || TabularFormatComponent)(); };
TabularFormatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabularFormatComponent, selectors: [["app-tabular-format"]], inputs: { selectedSectionId: "selectedSectionId", resultData: "resultData" }, decls: 1, vars: 1, consts: [["class", "table", 4, "ngIf"], [1, "table"], [1, "thead", 2, "zoom", "110%"], ["colspan", "2"], [4, "ngFor", "ngForOf"], ["class", "tr appear-animate", 4, "ngFor", "ngForOf"], [1, "tr", "appear-animate"], [1, "td", 2, "width", "40px"], [3, "userId"], [1, "td", 2, "zoom", "120%", "padding-left", "5px"], ["class", "td", "style", "zoom: 120%;", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "td", 2, "zoom", "120%", 3, "ngClass"]], template: function TabularFormatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TabularFormatComponent_table_0_Template, 8, 2, "table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_component_user_small_pic_user_small_pic_component__WEBPACK_IMPORTED_MODULE_2__["UserSmallPicComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"]], pipes: [_shared_pipe_subject_pipe__WEBPACK_IMPORTED_MODULE_4__["SubjectPipe"], _shared_pipe_number_data_pipe__WEBPACK_IMPORTED_MODULE_5__["NumberDataPipe"]], styles: [".fail[_ngcontent-%COMP%]{\r\n    color: red !important;\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n}\r\n\r\n.td[_ngcontent-%COMP%]{\r\n    border-color: #00000012;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    padding-bottom: 2px;\r\n    padding-top: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi9leGFtL2V4YW0tbWFuYWdlbWVudC9leGFtLXJlcG9ydC1jYXJkL3RhYnVsYXItZm9ybWF0L3RhYnVsYXItZm9ybWF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcG9zdC1sb2dpbi9leGFtL2V4YW0tbWFuYWdlbWVudC9leGFtLXJlcG9ydC1jYXJkL3RhYnVsYXItZm9ybWF0L3RhYnVsYXItZm9ybWF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFpbHtcclxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4udGR7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDAwMDAxMjtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabularFormatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tabular-format',
                templateUrl: './tabular-format.component.html',
                styleUrls: ['./tabular-format.component.css']
            }]
    }], function () { return []; }, { selectedSectionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resultData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/exam/exam-management/new-exam/class-subject/class-subject.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/post-login/exam/exam-management/new-exam/class-subject/class-subject.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ClassSubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassSubjectComponent", function() { return ClassSubjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/component/dynamic-form/field.interface */ "./src/app/shared/component/dynamic-form/field.interface.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/shared-api.service */ "./src/app/shared/services/shared-api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/component/dynamic-form/dynamic-form/dynamic-form.component */ "./src/app/shared/component/dynamic-form/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_component_boxes_smart_div_smart_div_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/component/boxes/smart-div/smart-div.component */ "./src/app/shared/component/boxes/smart-div/smart-div.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _shared_component_form_templates_form_time_range_form_time_range_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/component/form-templates/form-time-range/form-time-range.component */ "./src/app/shared/component/form-templates/form-time-range/form-time-range.component.ts");
/* harmony import */ var _exam_basic_info_exam_basic_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../exam-basic-info/exam-basic-info.component */ "./src/app/post-login/exam/exam-management/new-exam/exam-basic-info/exam-basic-info.component.ts");
/* harmony import */ var _subject_exam_result_subject_exam_result_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./subject-exam-result/subject-exam-result.component */ "./src/app/post-login/exam/exam-management/new-exam/class-subject/subject-exam-result/subject-exam-result.component.ts");
/* harmony import */ var _shared_pipe_subject_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../shared/pipe/subject.pipe */ "./src/app/shared/pipe/subject.pipe.ts");
/* harmony import */ var _shared_pipe_is_today_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../shared/pipe/is-today.pipe */ "./src/app/shared/pipe/is-today.pipe.ts");



















function ClassSubjectComponent_ng_container_3_app_subject_exam_result_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-subject-exam-result", 9);
} if (rf & 2) {
    const ctx_r943 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const subject_r940 = ctx_r943.$implicit;
    const idxSubject_r941 = ctx_r943.index;
    const ctx_r942 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", subject_r940.controls["sections"])("examId", ctx_r942.examId)("isViewMode", ctx_r942.isViewMode)("subject", subject_r940)("initialFormValues", ctx_r942.initialFormValues == null ? null : ctx_r942.initialFormValues.subject[idxSubject_r941].sections)("studentDetails", ctx_r942.initialFormValues == null ? null : ctx_r942.initialFormValues.studentDetails);
} }
const _c0 = function (a0) { return { "blink-animate": a0 }; };
function ClassSubjectComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "smart-div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "menu_book");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "isToday");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "form-time-range", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "exam-basic-info", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ClassSubjectComponent_ng_container_3_app_subject_exam_result_15_Template, 1, 6, "app-subject-exam-result", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const subject_r940 = ctx.$implicit;
    const idxSubject_r941 = ctx.index;
    const ctx_r939 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", subject_r940);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 16, subject_r940.controls["subjectId"] == null ? null : subject_r940.controls["subjectId"].value), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 18, subject_r940.controls["examDate"] == null ? null : subject_r940.controls["examDate"].value)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 20, subject_r940.controls["examDate"] == null ? null : subject_r940.controls["examDate"].value, "fullDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", subject_r940)("isViewMode", ctx_r939.isViewMode)("fromLabel", "Start Time")("toLabel", "End Time")("Required", true)("initialFormValues", ctx_r939.initialFormValues == null ? null : ctx_r939.initialFormValues.subject[idxSubject_r941]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", subject_r940)("isViewMode", ctx_r939.isViewMode)("classObject", ctx_r939.classObject)("subjectId", subject_r940.controls["subjectId"] == null ? null : subject_r940.controls["subjectId"].value)("initialFormValues", ctx_r939.initialFormValues == null ? null : ctx_r939.initialFormValues.subject[idxSubject_r941]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r939.isEditMode);
} }
class ClassSubjectComponent {
    constructor(sharedApiService, fb) {
        this.sharedApiService = sharedApiService;
        this.fb = fb;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.initialFormValues = null;
        this.isViewMode = false;
        this.isLoading = false;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_3__["MasterData"];
        this.sectionList = null;
        this.subjectList = null;
        this.branchClassChanged$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sectionChanged$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        if (this.initialFormValues) {
            this.isEditMode = true;
        }
        this.form.addControl("classSection", this.fb.control({}));
        this.form.addControl("subject", this.fb.array([]));
        this.fieldsConfig = [
            {
                isViewMode: this.isViewMode || this.isEditMode,
                type: "select",
                label: "Class",
                name: "classId",
                icon: "ballot",
                onValueChange: this.branchClassChanged$,
                options: null,
                value: this.initialFormValues ? this.initialFormValues.classId : null,
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_2__["validationType"].required()]
            },
            {
                isViewMode: this.isViewMode || this.isEditMode,
                type: "select",
                label: "Academic Session",
                name: "academicSessionId",
                icon: "ballot",
                options: this.masterData.academicSessions,
                value: this.initialFormValues ? this.initialFormValues.academicSessionId : null,
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_2__["validationType"].required()]
            },
            {
                isViewMode: this.isViewMode || this.isEditMode,
                type: "select",
                label: "Exam type",
                name: "examTypeId",
                icon: "developer_board",
                value: this.initialFormValues ? this.initialFormValues.examTypeId : null,
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_2__["validationType"].required()]
            }
        ];
        this.registerDropdownChangeEvents();
        this.fetchExamTypeDdl();
        this.fetchClassDdl();
    }
    registerDropdownChangeEvents() {
        this.branchClassChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe(val => {
            this.branchClassChanged(val);
        });
    }
    fetchExamTypeDdl() {
        this.isLoading = true;
        this.fieldsConfig[2].options = []; // make exam type list empty    
        this.sharedApiService.getExamTypeDdl()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe(val => {
            this.fieldsConfig[2].options = val;
            this.isLoading = false;
        }, error => {
            this.isLoading = false;
        });
    }
    fetchClassDdl() {
        this.isLoading = true;
        this.fieldsConfig[0].options = []; // make class list empty    
        this.sharedApiService.getClassSubjectSectionDdl()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe(val => {
            this.allClassSubjectObject = val;
            this.populateClassDdl(val);
            this.isLoading = false;
        }, error => {
            this.isLoading = false;
        });
    }
    populateClassDdl(values) {
        this.fieldsConfig[0].options = values;
        if (this.isViewMode || this.isEditMode) {
            this.loadClassWiseExam(this.initialFormValues.classId);
        }
    }
    branchClassChanged(classId) {
        this.loadClassWiseExam(classId);
    }
    loadClassWiseExam(classId) {
        this.isLoading = true;
        this.sectionList = null;
        this.subjectList = null;
        this.form.get('subject').clear();
        this.form.get('classSection').setValue(null);
        if (this.initialFormValues) {
            // In case of update we only show those sections and subjects of the class, which was available add the time of creating this exam.
            this.sectionList = this.initialFormValues.classSection;
            this.subjectList = this.initialFormValues.subject.sort((a, b) => a.examDate > b.examDate ? 1 : -1);
            this.subjectList && this.subjectList.forEach(subject => {
                this.addSubject(classId, subject.subjectId, subject.sections);
            });
        }
        else {
            // When creating new exam, we will show all the current sections and subjects of the selected class.
            this.classObject = this.allClassSubjectObject.filter(x => x._id.$oid === classId.$oid);
            if (this.classObject.length > 0) {
                this.classObject = this.classObject[0];
                this.sectionList = this.classObject.classSection;
                this.subjectList = this.classObject.subject.filter(x => x.status == 1);
                this.filterUniqueSubjects();
                this.subjectList && this.subjectList.forEach(subject => {
                    this.addSubject(classId, subject._id, subject.sections);
                });
            }
        }
        this.sectionList && this.form.get('classSection').setValue(this.sectionList);
        this.isLoading = false;
    }
    filterUniqueSubjects() {
        let uniqueSubjects = [];
        this.subjectList.forEach(sub => {
            let filtered = uniqueSubjects.filter(x => x["_id"]["$oid"] === sub["_id"]["$oid"]);
            // If subject is not present their already
            if (filtered.length === 0) {
                let subObject = {
                    _id: sub["_id"],
                    sections: [sub.sectionId]
                };
                uniqueSubjects.push(subObject);
            }
            else {
                filtered[0].sections.push(sub.sectionId);
            }
        });
        this.subjectList = uniqueSubjects;
    }
    addSubject(classId, id, sections) {
        let subjectForm = this.fb.group({
            "subjectId": this.fb.control(id),
            "sections": this.fb.array([])
        });
        if (sections && sections.length > 0) {
            sections.forEach(section => {
                // In case of update section.sectionId will work
                let sectionId = section.sectionId ? section.sectionId : section;
                let fbGroup = this.fb.group({
                    "sectionId": this.fb.control(sectionId),
                    "students": this.fb.array([])
                });
                if (this.initialFormValues) {
                    let sub = this.initialFormValues.subject && this.initialFormValues.subject.find(x => x["subjectId"]["$oid"] === id["$oid"]);
                    let sec = sub && sub.sections.find(x => x.sectionId === sectionId);
                    let students = sec && sec.students;
                    this.mapStudentForSubject(students, fbGroup.get("students"));
                }
                else {
                    // When creating new Exam
                    let filteredData = this.ClassSectionWiseStudents.find(x => x["_id"]["classId"]["$oid"] === classId["$oid"] && x["_id"]["sectionId"] === sectionId);
                    let students = filteredData && filteredData.students ? filteredData.students : null;
                    this.mapStudentForSubject(students, fbGroup.get("students"));
                }
                subjectForm.get("sections").push(fbGroup);
            });
        }
        // Finally add this subject in the subject array
        this.form.get('subject').push(subjectForm);
    }
    mapStudentForSubject(students, studentsControl) {
        if (!(students && studentsControl)) {
            return;
        }
        students.forEach(stu => {
            let studentId = stu.studentId ? stu.studentId : stu;
            let marksGained = stu.marksGained;
            let fbGroup = this.fb.group({
                "studentId": this.fb.control(studentId),
                "marksGained": this.fb.control(marksGained)
            });
            studentsControl.push(fbGroup);
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
ClassSubjectComponent.ɵfac = function ClassSubjectComponent_Factory(t) { return new (t || ClassSubjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_5__["SharedApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"])); };
ClassSubjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClassSubjectComponent, selectors: [["class-subject"]], inputs: { form: "form", examId: "examId", fieldsConfig: "fieldsConfig", initialFormValues: "initialFormValues", isViewMode: "isViewMode", isEditMode: "isEditMode", ClassSectionWiseStudents: "ClassSectionWiseStudents" }, decls: 4, vars: 4, consts: [[3, "form", "fields"], ["hideToggle", "true", 3, "multi"], [4, "ngFor", "ngForOf"], [1, "no-shadow"], [1, "negative-margin", 3, "form"], [1, "color-black", 3, "ngClass"], [3, "form", "isViewMode", "fromLabel", "toLabel", "Required", "initialFormValues"], [3, "form", "isViewMode", "classObject", "subjectId", "initialFormValues"], [3, "form", "examId", "isViewMode", "subject", "initialFormValues", "studentDetails", 4, "ngIf"], [3, "form", "examId", "isViewMode", "subject", "initialFormValues", "studentDetails"]], template: function ClassSubjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dynamic-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-accordion", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ClassSubjectComponent_ng_container_3_Template, 16, 25, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.form)("fields", ctx.fieldsConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multi", ctx.masterData.expendMultiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.form["controls"].subject["controls"]);
    } }, directives: [_shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_7__["DynamicFormComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelTitle"], _shared_component_boxes_smart_div_smart_div_component__WEBPACK_IMPORTED_MODULE_10__["SmartDivComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultClassDirective"], _shared_component_form_templates_form_time_range_form_time_range_component__WEBPACK_IMPORTED_MODULE_13__["FormTimeRangeComponent"], _exam_basic_info_exam_basic_info_component__WEBPACK_IMPORTED_MODULE_14__["ExamBasicInfoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _subject_exam_result_subject_exam_result_component__WEBPACK_IMPORTED_MODULE_15__["SubjectExamResultComponent"]], pipes: [_shared_pipe_subject_pipe__WEBPACK_IMPORTED_MODULE_16__["SubjectPipe"], _shared_pipe_is_today_pipe__WEBPACK_IMPORTED_MODULE_17__["IsTodayPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".color-black[_ngcontent-%COMP%]{\r\n    color: black !important;\r\n}\r\n\r\n.mat-expansion-panel-spacing[_ngcontent-%COMP%]{\r\n    border-width: 5px !important;\r\n    margin-bottom: 40px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi9leGFtL2V4YW0tbWFuYWdlbWVudC9uZXctZXhhbS9jbGFzcy1zdWJqZWN0L2NsYXNzLXN1YmplY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9wb3N0LWxvZ2luL2V4YW0vZXhhbS1tYW5hZ2VtZW50L25ldy1leGFtL2NsYXNzLXN1YmplY3QvY2xhc3Mtc3ViamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yLWJsYWNre1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLXNwYWNpbmd7XHJcbiAgICBib3JkZXItd2lkdGg6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweCAhaW1wb3J0YW50O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassSubjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'class-subject',
                templateUrl: './class-subject.component.html',
                styleUrls: ['./class-subject.component.css']
            }]
    }], function () { return [{ type: _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_5__["SharedApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }]; }, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], examId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fieldsConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], initialFormValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isViewMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isEditMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ClassSectionWiseStudents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/exam/exam-management/new-exam/class-subject/subject-exam-result/subject-exam-result-graph/subject-exam-result-graph.component.ts":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/post-login/exam/exam-management/new-exam/class-subject/subject-exam-result/subject-exam-result-graph/subject-exam-result-graph.component.ts ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: SubjectExamResultGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectExamResultGraphComponent", function() { return SubjectExamResultGraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_component_chart_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/component/chart/chart.component */ "./src/app/shared/component/chart/chart.component.ts");




const _c0 = function () { return ["Failed", "Passed"]; };
const _c1 = function (a0, a1) { return [a0, a1]; };
class SubjectExamResultGraphComponent {
    constructor() {
        this.passingMarks = 0;
        this.passedStudents = 0;
        this.failedStudents = 0;
        this.isGraphCalculationsDone = false;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"];
        this.setChartColors();
    }
    ngOnInit() {
        this.subjectId = this.subject.get("subjectId").value;
        this.passingMarks = this.subject.controls['passingMarks'].value;
        this.calculate();
    }
    setChartColors() {
        this.chartColors = [
            {
                backgroundColor: ['red', 'green', 'yellow'],
            }
        ];
    }
    calculate() {
        this.isGraphCalculationsDone = false;
        this.passedStudents = 0;
        this.failedStudents = 0;
        let sectionsArray = this.form.controls;
        sectionsArray.forEach(section => {
            let sectionId = section.get('sectionId').value;
            if (sectionId === this.sectionId) {
                let students = section.get('students');
                students.controls.forEach(student => {
                    student.get('marksGained').value < this.passingMarks ? this.failedStudents++ : this.passedStudents++;
                });
            }
        });
        if (this.passedStudents > 0) {
            let total = this.passedStudents + this.failedStudents;
            this.passedPercentage = (this.passedStudents * 100) / total;
            this.passedPercentage = this.passedPercentage.toFixed(2);
        }
        else {
            this.passedPercentage = "0.00";
        }
        this.isGraphCalculationsDone = true;
    }
}
SubjectExamResultGraphComponent.ɵfac = function SubjectExamResultGraphComponent_Factory(t) { return new (t || SubjectExamResultGraphComponent)(); };
SubjectExamResultGraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubjectExamResultGraphComponent, selectors: [["app-subject-exam-result-graph"]], inputs: { form: "form", sectionId: "sectionId", subject: "subject" }, decls: 1, vars: 8, consts: [[3, "chartLabels", "chartColors", "filter", "chartData"]], template: function SubjectExamResultGraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartLabels", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("chartColors", ctx.chartColors)("filter", false)("chartData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c1, ctx.failedStudents, ctx.passedStudents));
    } }, directives: [_shared_component_chart_chart_component__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vZXhhbS9leGFtLW1hbmFnZW1lbnQvbmV3LWV4YW0vY2xhc3Mtc3ViamVjdC9zdWJqZWN0LWV4YW0tcmVzdWx0L3N1YmplY3QtZXhhbS1yZXN1bHQtZ3JhcGgvc3ViamVjdC1leGFtLXJlc3VsdC1ncmFwaC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubjectExamResultGraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subject-exam-result-graph',
                templateUrl: './subject-exam-result-graph.component.html',
                styleUrls: ['./subject-exam-result-graph.component.css']
            }]
    }], function () { return []; }, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sectionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/exam/exam-management/new-exam/class-subject/subject-exam-result/subject-exam-result.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/post-login/exam/exam-management/new-exam/class-subject/subject-exam-result/subject-exam-result.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: SubjectExamResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectExamResultComponent", function() { return SubjectExamResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/post-login/post-login.service */ "./src/app/post-login/post-login.service.ts");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _app_post_login_exam_services_exam_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/post-login/exam/services/exam.service */ "./src/app/post-login/exam/services/exam.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/component/boxes/card/card.component */ "./src/app/shared/component/boxes/card/card.component.ts");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/fesm2015/button-toggle.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../shared/component/boxes/responsive/responsive.component */ "./src/app/shared/component/boxes/responsive/responsive.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _shared_component_user_small_pic_user_small_pic_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../shared/component/user-small-pic/user-small-pic.component */ "./src/app/shared/component/user-small-pic/user-small-pic.component.ts");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _shared_directives_trim_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../shared/directives/trim.directive */ "./src/app/shared/directives/trim.directive.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _subject_exam_result_graph_subject_exam_result_graph_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./subject-exam-result-graph/subject-exam-result-graph.component */ "./src/app/post-login/exam/exam-management/new-exam/class-subject/subject-exam-result/subject-exam-result-graph/subject-exam-result-graph.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _shared_pipe_master_data_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../shared/pipe/master-data.pipe */ "./src/app/shared/pipe/master-data.pipe.ts");
/* harmony import */ var _shared_pipe_number_data_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../shared/pipe/number-data.pipe */ "./src/app/shared/pipe/number-data.pipe.ts");
/* harmony import */ var _shared_pipe_object_filter_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../shared/pipe/object-filter.pipe */ "./src/app/shared/pipe/object-filter.pipe.ts");
/* harmony import */ var _shared_pipe_subject_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../shared/pipe/subject.pipe */ "./src/app/shared/pipe/subject.pipe.ts");
























const _c0 = ["stumarksGainedTextBoxRef"];
function SubjectExamResultComponent_mat_button_toggle_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "masterData");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r948 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", section_r948);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Section ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, section_r948, "classsections"), "");
} }
function SubjectExamResultComponent_responsive_6_tr_13_input_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 22);
} if (rf & 2) {
    const student_r952 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", student_r952.get("marksGained"));
} }
function SubjectExamResultComponent_responsive_6_tr_13_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const student_r952 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r952.get("marksGained").value);
} }
const _c1 = function (a0) { return { "fail": a0 }; };
function SubjectExamResultComponent_responsive_6_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "user-small-pic", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "numberData");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "objectFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "objectFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "objectFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SubjectExamResultComponent_responsive_6_tr_13_input_12_Template, 1, 1, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SubjectExamResultComponent_responsive_6_tr_13_span_13_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const student_r952 = ctx.$implicit;
    const ctx_r950 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    var tmp_4_0 = null;
    const currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c1, student_r952.get("marksGained").value < ((tmp_4_0 = ctx_r950.subject.get("passingMarks")) == null ? null : tmp_4_0.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", student_r952.get("studentId").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](6, 10, student_r952.get("studentId").value, ctx_r950.studentDetails, "studentId", "rollNo")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](9, 15, student_r952.get("studentId").value, ctx_r950.studentDetails, "studentId", "firstName"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](10, 20, student_r952.get("studentId").value, ctx_r950.studentDetails, "studentId", "lastName"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", student_r952)("ngClass", currVal_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r950.isViewMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r950.isViewMode);
} }
function SubjectExamResultComponent_responsive_6_app_subject_exam_result_graph_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-subject-exam-result-graph", 23);
} if (rf & 2) {
    const section_r949 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r951 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("subject", ctx_r951.subject)("sectionId", section_r949.get("sectionId").value)("form", ctx_r951.form);
} }
function SubjectExamResultComponent_responsive_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "responsive", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Roll No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SubjectExamResultComponent_responsive_6_tr_13_Template, 14, 27, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SubjectExamResultComponent_responsive_6_app_subject_exam_result_graph_16_Template, 1, 3, "app-subject-exam-result-graph", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r949 = ctx.$implicit;
    const ctx_r946 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r944 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r944.value != section_r949.get("sectionId").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", section_r949.get("students").controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r944.value != section_r949.get("sectionId").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r946.isViewMode && ctx_r946.subject.get("passingMarks"));
} }
function SubjectExamResultComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r959 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubjectExamResultComponent_button_7_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r959); const ctx_r958 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r944 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx_r958.saveSectionResult(_r944.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "masterData");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r947 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r944 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Save only ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r947.subjectId), "-", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, _r944.value, "classsections"), " result ");
} }
class SubjectExamResultComponent {
    constructor(plService, sharedService, examService, fb) {
        this.plService = plService;
        this.sharedService = sharedService;
        this.examService = examService;
        this.fb = fb;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.initialFormValues = null;
        this.isViewMode = false;
        this.editPermissions = false;
        this.isLoading = false;
        this.title = "View Exam Result";
        this.subTitle = "View student marksheet for this subject";
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_2__["MasterData"];
        this.sections = [];
        this.showResult = false;
        this.editPermissions = this.plService.getPageEntitlements(9, 1) === 2;
    }
    ngOnInit() {
        this.subjectId = this.subject.get("subjectId").value;
        this.computeClassSections();
        if (this.isViewMode) {
            this.form.disable();
        }
    }
    computeClassSections() {
        this.form.controls.forEach(sec => {
            this.sections.push(sec.get('sectionId').value);
        });
        this.sections.sort();
    }
    saveSectionResult(sectionId) {
        this.form.markAllAsTouched();
        if (this.form.valid) {
            this.isLoading = true;
            let sectionResult = null;
            this.form.controls.forEach(element => {
                if (element.get('sectionId').value === sectionId) {
                    sectionResult = element.value;
                }
            });
            let data = {
                sectionResult: sectionResult,
                subjectId: this.sharedService.serializeMongoObjectId(this.subjectId),
                examId: this.sharedService.serializeMongoObjectId(this.examId)
            };
            let finalData = JSON.parse(JSON.stringify(data));
            this.examService.saveSpecificSubjectSectionExamResult(finalData)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
                .subscribe((result) => {
                this.isLoading = false;
                let sectionName = this.masterData.classSections.find(x => x.id === sectionId).name;
                this.sharedService.openSnackBar("Section-" + sectionName + " result get saved Successfully.", "x", "success");
                this.showExamResult = false;
            }, (error) => {
                this.isLoading = false;
                console.log(error);
            });
        }
        else {
            this.sharedService.openSnackBar("Some fields are invalid. Please fill them properly.", "x", "fail");
        }
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
SubjectExamResultComponent.ɵfac = function SubjectExamResultComponent_Factory(t) { return new (t || SubjectExamResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_4__["PostLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_exam_services_exam_service__WEBPACK_IMPORTED_MODULE_6__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"])); };
SubjectExamResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubjectExamResultComponent, selectors: [["app-subject-exam-result"]], viewQuery: function SubjectExamResultComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stumarksGainedTextBoxRef = _t.first);
    } }, inputs: { form: "form", initialFormValues: "initialFormValues", studentDetails: "studentDetails", fieldsConfig: "fieldsConfig", isViewMode: "isViewMode", subject: "subject", examId: "examId" }, decls: 8, vars: 6, consts: [["title", "Result", "subTitle", "Update student exam result", 3, "refreshButton"], [3, "formGroup"], [1, "section-tabs"], [3, "value"], ["selectedSectionToggleButton", "matButtonToggleGroup"], [3, "value", 4, "ngFor", "ngForOf"], [3, "hidden", 4, "ngFor", "ngForOf"], ["style", "max-width: 99%;", "class", "btn-submit padding generic-buttons", "type", "button", "mat-raised-button", "", 3, "click", 4, "ngIf"], [1, "section-name"], [3, "hidden"], ["fxFlex", ""], [1, "table"], [1, "thead"], ["class", "tr appear-animate", 4, "ngFor", "ngForOf"], ["fxFlex", "", 1, "appear-animate", 2, "padding-left", "26px", "padding-right", "6px", 3, "hidden"], [3, "subject", "sectionId", "form", 4, "ngIf"], [1, "tr", "appear-animate"], [1, "td"], [3, "userId"], [1, "td", "rt", "marksTd", 3, "formGroup", "ngClass"], ["class", "marksGainedTextbox", "trim", "", "matInput", "", "type", "number", "min", "0", "max", "100", 3, "formControl", 4, "ngIf"], [4, "ngIf"], ["trim", "", "matInput", "", "type", "number", "min", "0", "max", "100", 1, "marksGainedTextbox", 3, "formControl"], [3, "subject", "sectionId", "form"], ["type", "button", "mat-raised-button", "", 1, "btn-submit", "padding", "generic-buttons", 2, "max-width", "99%", 3, "click"]], template: function SubjectExamResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-button-toggle-group", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SubjectExamResultComponent_mat_button_toggle_5_Template, 4, 5, "mat-button-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SubjectExamResultComponent_responsive_6_Template, 17, 4, "responsive", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SubjectExamResultComponent_button_7_Template, 4, 7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("refreshButton", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sections);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.form.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isViewMode && ctx.editPermissions);
    } }, directives: [_shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggle"], _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_11__["ResponsiveComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _shared_component_user_small_pic_user_small_pic_component__WEBPACK_IMPORTED_MODULE_13__["UserSmallPicComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["DefaultClassDirective"], _shared_directives_trim_directive__WEBPACK_IMPORTED_MODULE_15__["TrimDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlDirective"], _subject_exam_result_graph_subject_exam_result_graph_component__WEBPACK_IMPORTED_MODULE_17__["SubjectExamResultGraphComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"]], pipes: [_shared_pipe_master_data_pipe__WEBPACK_IMPORTED_MODULE_19__["MasterDataPipe"], _shared_pipe_number_data_pipe__WEBPACK_IMPORTED_MODULE_20__["NumberDataPipe"], _shared_pipe_object_filter_pipe__WEBPACK_IMPORTED_MODULE_21__["ObjectFilterPipe"], _shared_pipe_subject_pipe__WEBPACK_IMPORTED_MODULE_22__["SubjectPipe"]], styles: [".section-tabs[_ngcontent-%COMP%]{\r\n  margin: 0px 0px -1px 0px; \r\n  overflow: auto;\r\n}\r\n\r\n.td[_ngcontent-%COMP%]{\r\n  border-color: #00000012;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n}\r\n\r\nmat-icon.pass[_ngcontent-%COMP%]{\r\n    color: #38a913 !important;\r\n}\r\n\r\nmat-icon.fail[_ngcontent-%COMP%]{\r\n    color: red !important;\r\n}\r\n\r\n.btn-saveExamResult[_ngcontent-%COMP%]{\r\n  max-width: 98% !important;\r\n  background-color: green;\r\n  color: white;\r\n}\r\n\r\n.stuMarks[_ngcontent-%COMP%]{\r\n    width: 45px;\r\n}\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\ninput[type=number][_ngcontent-%COMP%] {\r\n  -moz-appearance:textfield;\r\n}\r\n\r\n.marksTd[_ngcontent-%COMP%]{\r\n  width: 50px;\r\n  margin-right: 5px;\r\n  font-size: 16px;\r\n}\r\n\r\n.fail[_ngcontent-%COMP%]{\r\n  background-color: red;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.marksGainedTextbox[_ngcontent-%COMP%]{\r\n    width: 45px;\r\n    border-style: solid;\r\n    border-color: #777;\r\n    border-width: 2px;\r\n    padding: 2px 4px 2px 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi9leGFtL2V4YW0tbWFuYWdlbWVudC9uZXctZXhhbS9jbGFzcy1zdWJqZWN0L3N1YmplY3QtZXhhbS1yZXN1bHQvc3ViamVjdC1leGFtLXJlc3VsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBLGdDQUFnQzs7QUFDaEM7O0VBRUUsd0JBQXdCO0VBQ3hCLFNBQVM7QUFDWDs7QUFFQSxZQUFZOztBQUNaO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvcG9zdC1sb2dpbi9leGFtL2V4YW0tbWFuYWdlbWVudC9uZXctZXhhbS9jbGFzcy1zdWJqZWN0L3N1YmplY3QtZXhhbS1yZXN1bHQvc3ViamVjdC1leGFtLXJlc3VsdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tdGFic3tcclxuICBtYXJnaW46IDBweCAwcHggLTFweCAwcHg7IFxyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4udGR7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwMTI7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxufVxyXG5cclxubWF0LWljb24ucGFzc3tcclxuICAgIGNvbG9yOiAjMzhhOTEzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1hdC1pY29uLmZhaWx7XHJcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tc2F2ZUV4YW1SZXN1bHR7XHJcbiAgbWF4LXdpZHRoOiA5OCUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zdHVNYXJrc3tcclxuICAgIHdpZHRoOiA0NXB4O1xyXG59XHJcblxyXG4vKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cclxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBGaXJlZm94ICovXHJcbmlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZDtcclxufVxyXG5cclxuLm1hcmtzVGR7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZmFpbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubWFya3NHYWluZWRUZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNzc3O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBwYWRkaW5nOiAycHggNHB4IDJweCAycHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubjectExamResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subject-exam-result',
                templateUrl: './subject-exam-result.component.html',
                styleUrls: ['./subject-exam-result.component.css']
            }]
    }], function () { return [{ type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_4__["PostLoginService"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }, { type: _app_post_login_exam_services_exam_service__WEBPACK_IMPORTED_MODULE_6__["ExamService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }]; }, { stumarksGainedTextBoxRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stumarksGainedTextBoxRef']
        }], form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], initialFormValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], studentDetails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fieldsConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isViewMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], examId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/exam/exam-management/new-exam/exam-basic-info/exam-basic-info.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/post-login/exam/exam-management/new-exam/exam-basic-info/exam-basic-info.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ExamBasicInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamBasicInfoComponent", function() { return ExamBasicInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/component/dynamic-form/field.interface */ "./src/app/shared/component/dynamic-form/field.interface.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services/shared-api.service */ "./src/app/shared/services/shared-api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/component/dynamic-form/dynamic-form/dynamic-form.component */ "./src/app/shared/component/dynamic-form/dynamic-form/dynamic-form.component.ts");










function ExamBasicInfoComponent_dynamic_form_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dynamic-form", 1);
} if (rf & 2) {
    const ctx_r938 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r938.form)("fields", ctx_r938.fieldsConfig)("addEmptyDiv", false);
} }
class ExamBasicInfoComponent {
    constructor(sharedService, sharedApiService) {
        this.sharedService = sharedService;
        this.sharedApiService = sharedApiService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.initialFormValues = null;
        this.isViewMode = false;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_2__["MasterData"];
        this.loadAllTeachers();
    }
    ngOnInit() {
        let maxMarks = 33;
        let passingMarks = 100;
        if (this.classObject) {
            let sub = this.classObject.subject.find(x => x["_id"]["$oid"] === this.subjectId["$oid"]);
            maxMarks = sub.maxMarks;
            passingMarks = sub.passingMarks;
        }
        this.fieldsConfig = [
            {
                isViewMode: this.isViewMode,
                type: "input",
                label: "Maximum marks",
                inputType: "number",
                name: "maxMarks",
                value: maxMarks,
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
            },
            {
                isViewMode: this.isViewMode,
                type: "input",
                label: "Passing marks",
                inputType: "number",
                name: "passingMarks",
                value: passingMarks,
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
            },
            {
                isViewMode: this.isViewMode,
                type: "date",
                label: "Exam Date",
                name: "examDate",
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
            },
            {
                isViewMode: this.isViewMode,
                type: "select",
                label: "Exam Teacher",
                name: "teacherId",
                icon: "account_circle",
                options: this.allteachersList,
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
            },
            {
                isViewMode: this.isViewMode,
                type: "input",
                label: "Exam Room",
                inputType: "text",
                name: "room",
                icon: "meeting_room",
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
            },
            {
                isViewMode: this.isViewMode,
                type: "textarea",
                label: "Comments",
                inputType: "textarea",
                name: "comments"
            }
        ];
        this.sharedService.setFormInitialValueForChangeMode(this.fieldsConfig, this.initialFormValues);
    }
    loadAllTeachers() {
        this.sharedApiService.teacherDdl()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
            .subscribe(val => {
            this.allteachersList = val;
        }, error => {
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
ExamBasicInfoComponent.ɵfac = function ExamBasicInfoComponent_Factory(t) { return new (t || ExamBasicInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_6__["SharedApiService"])); };
ExamBasicInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamBasicInfoComponent, selectors: [["exam-basic-info"]], inputs: { form: "form", initialFormValues: "initialFormValues", fieldsConfig: "fieldsConfig", isViewMode: "isViewMode", classObject: "classObject", subjectId: "subjectId" }, decls: 1, vars: 1, consts: [[3, "form", "fields", "addEmptyDiv", 4, "ngIf"], [3, "form", "fields", "addEmptyDiv"]], template: function ExamBasicInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExamBasicInfoComponent_dynamic_form_0_Template, 1, 3, "dynamic-form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allteachersList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_8__["DynamicFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vZXhhbS9leGFtLW1hbmFnZW1lbnQvbmV3LWV4YW0vZXhhbS1iYXNpYy1pbmZvL2V4YW0tYmFzaWMtaW5mby5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamBasicInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'exam-basic-info',
                templateUrl: './exam-basic-info.component.html',
                styleUrls: ['./exam-basic-info.component.css']
            }]
    }], function () { return [{ type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }, { type: _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_6__["SharedApiService"] }]; }, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], initialFormValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fieldsConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isViewMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classObject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subjectId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/exam/exam-management/new-exam/new-exam.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/post-login/exam/exam-management/new-exam/new-exam.component.ts ***!
  \********************************************************************************/
/*! exports provided: NewExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewExamComponent", function() { return NewExamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _services_exam_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/exam.service */ "./src/app/post-login/exam/services/exam.service.ts");
/* harmony import */ var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/component/boxes/card/card.component */ "./src/app/shared/component/boxes/card/card.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _class_subject_class_subject_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./class-subject/class-subject.component */ "./src/app/post-login/exam/exam-management/new-exam/class-subject/class-subject.component.ts");
/* harmony import */ var _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/component/buttons/form-buttons/form-buttons.component */ "./src/app/shared/component/buttons/form-buttons/form-buttons.component.ts");













function NewExamComponent_form_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " If you press below 'Update' button then it will override the result for all the subjects and all the sections and also the exam information. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewExamComponent_form_1_form_buttons_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "form-buttons", 7);
} if (rf & 2) {
    const ctx_r935 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r935.mainForm)("isChangeMode", ctx_r935.changeModeId);
} }
function NewExamComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r937 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewExamComponent_form_1_Template_form_ngSubmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r937); const ctx_r936 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r936.confirmSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "class-subject", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewExamComponent_form_1_div_2_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewExamComponent_form_1_form_buttons_3_Template, 1, 2, "form-buttons", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r933 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r933.mainForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("examId", ctx_r933.changeModeId)("isViewMode", ctx_r933.isViewMode)("initialFormValues", ctx_r933.initialFormValues)("form", ctx_r933.mainForm)("ClassSectionWiseStudents", ctx_r933.ClassSectionWiseStudents);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r933.isViewMode && ctx_r933.changeModeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r933.isViewMode);
} }
class NewExamComponent {
    constructor(fb, changeDetector, sharedService, examService) {
        this.fb = fb;
        this.changeDetector = changeDetector;
        this.sharedService = sharedService;
        this.examService = examService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onSaveSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initialFormValues = null;
        this.changeModeId = null;
        this.isViewMode = false;
        this.showHeader = true;
        this.childCard = false;
        this.ClassSectionWiseStudents = null; // Class section wise student list, Will be used only when creating new Exam
        this.mainForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.title = "New Exam";
        this.subTitle = "Add a new exam";
        this.isLoading = false;
        this.isPopulatingFormDb = false;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_3__["MasterData"];
        this.open = false;
        this.stoppageCount = 0;
    }
    ngOnInit() {
        this.setTitleMessages();
        this.sharedService.setFormCommonFields(this.mainForm);
        if (this.changeModeId) {
            this.populateFromDB();
        }
    }
    setTitleMessages() {
        if (this.changeModeId) {
            this.title = "Update Exam.";
            this.subTitle = "Please update following details of exam.";
            if (this.isViewMode) {
                this.title = "View Exam.";
                this.subTitle = "View following details of exam.";
            }
        }
    }
    populateFromDB() {
        //--- Fill Exam information for View/Edit mode from Database
        this.isLoading = true;
        this.isPopulatingFormDb = true;
        this.examService.getSchoolExam(this.changeModeId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe((result) => {
            result.forEach(element => {
                this.initialFormValues = element;
                this.mainForm.get('_id').setValue(this.initialFormValues._id);
                this.mainForm.get('status').setValue(this.initialFormValues.status);
            });
            this.isLoading = false;
            this.isPopulatingFormDb = false;
        }, (error) => {
            this.isLoading = false;
            this.isPopulatingFormDb = false;
            console.log(error);
        });
    }
    confirmSubmit(exam) {
        // In edit mode only, take the confirmation before saving the exam details.
        if (this.changeModeId) {
            let dialogRef = this.sharedService.openConfirmDialog("You want to Update the Exam results of all the subject and the exam info ?");
            dialogRef.afterClosed()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
                .subscribe((confirmed) => {
                if (confirmed) {
                    this.onSubmit(exam);
                }
            }, (error) => {
                this.isLoading = false;
            });
        }
        else {
            this.onSubmit(exam);
        }
    }
    onSubmit(exam) {
        this.mainForm.markAllAsTouched();
        exam.preventDefault();
        exam.stopPropagation();
        if (this.mainForm.valid) {
            this.isLoading = true;
            this.examService.saveSchoolExam(this.mainForm.getRawValue())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
                .subscribe((result) => {
                this.isLoading = false;
                this.onSaveSuccess.emit(true);
                this.sharedService.openSnackBar("Exam's information saved Successfully.", "x", "success");
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
    loadClassWiseStudents() {
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
NewExamComponent.ɵfac = function NewExamComponent_Factory(t) { return new (t || NewExamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_exam_service__WEBPACK_IMPORTED_MODULE_6__["ExamService"])); };
NewExamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewExamComponent, selectors: [["app-new-exam"]], inputs: { initialFormValues: "initialFormValues", changeModeId: "changeModeId", isViewMode: "isViewMode", showHeader: "showHeader", childCard: "childCard", ClassSectionWiseStudents: "ClassSectionWiseStudents" }, outputs: { onSaveSuccess: "onSaveSuccess" }, decls: 2, vars: 6, consts: [[3, "loading", "title", "subTitle", "cardButtons", "header"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [3, "examId", "isViewMode", "initialFormValues", "form", "ClassSectionWiseStudents"], ["class", "info", 4, "ngIf"], [3, "form", "isChangeMode", 4, "ngIf"], [1, "info"], [3, "form", "isChangeMode"]], template: function NewExamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewExamComponent_form_1_Template, 4, 8, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.isLoading)("title", ctx.title)("subTitle", ctx.subTitle)("cardButtons", false)("header", ctx.showHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainForm && !ctx.isPopulatingFormDb);
    } }, directives: [_shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _class_subject_class_subject_component__WEBPACK_IMPORTED_MODULE_9__["ClassSubjectComponent"], _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_10__["FormButtonsComponent"]], styles: [".info[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n    font-size: 14px;\r\n    background-color: yellow;\r\n    color: black;\r\n    padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi9leGFtL2V4YW0tbWFuYWdlbWVudC9uZXctZXhhbS9uZXctZXhhbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wb3N0LWxvZ2luL2V4YW0vZXhhbS1tYW5hZ2VtZW50L25ldy1leGFtL25ldy1leGFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb3tcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewExamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-exam',
                templateUrl: './new-exam.component.html',
                styleUrls: ['./new-exam.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }, { type: _services_exam_service__WEBPACK_IMPORTED_MODULE_6__["ExamService"] }]; }, { onSaveSuccess: [{
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
        }], ClassSectionWiseStudents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/exam/exam-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/post-login/exam/exam-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ExamRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamRoutingModule", function() { return ExamRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _exam_management_exam_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exam-management/exam-management.component */ "./src/app/post-login/exam/exam-management/exam-management.component.ts");
/* harmony import */ var _exam_type_management_exam_type_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exam-type-management/exam-type-management.component */ "./src/app/post-login/exam/exam-type-management/exam-type-management.component.ts");






const routes = [
    {
        path: 'exammgmt',
        component: _exam_management_exam_management_component__WEBPACK_IMPORTED_MODULE_2__["ExamManagementComponent"],
        outlet: 'postLoginOutlet'
    },
    {
        path: 'examtypemgmt',
        component: _exam_type_management_exam_type_management_component__WEBPACK_IMPORTED_MODULE_3__["ExamTypeManagementComponent"],
        outlet: 'postLoginOutlet'
    }
];
class ExamRoutingModule {
}
ExamRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExamRoutingModule });
ExamRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExamRoutingModule_Factory(t) { return new (t || ExamRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExamRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/post-login/exam/exam-type-management/exam-type-list/exam-type-list.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/post-login/exam/exam-type-management/exam-type-list/exam-type-list.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ExamTypeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamTypeListComponent", function() { return ExamTypeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_exam_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/exam-type.service */ "./src/app/post-login/exam/services/exam-type.service.ts");
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





















function ExamTypeListComponent_tr_17_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r901 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamTypeListComponent_tr_17_button_11_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r901); const examType_r895 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r899 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r899.editClicked(examType_r895._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamTypeListComponent_tr_17_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r904 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamTypeListComponent_tr_17_button_12_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r904); const examType_r895 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r902 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r902.deleteClicked(examType_r895._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamTypeListComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r906 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamTypeListComponent_tr_17_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r906); const examType_r895 = ctx.$implicit; const ctx_r905 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r905.viewClicked(examType_r895._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExamTypeListComponent_tr_17_button_11_Template, 3, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExamTypeListComponent_tr_17_button_12_Template, 3, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const examType_r895 = ctx.$implicit;
    const idx_r896 = ctx.index;
    const ctx_r892 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r892.paging.pageIndex * ctx_r892.paging.pageSize + idx_r896 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](examType_r895.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](examType_r895.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r892.editPermissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r892.editPermissions);
} }
function ExamTypeListComponent_ng_container_19_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r914 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamTypeListComponent_ng_container_19_button_10_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r914); const examType_r907 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r912 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r912.editClicked(examType_r907._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamTypeListComponent_ng_container_19_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r917 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamTypeListComponent_ng_container_19_button_11_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r917); const examType_r907 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r915 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r915.deleteClicked(examType_r907._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamTypeListComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r919 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "row", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamTypeListComponent_ng_container_19_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r919); const examType_r907 = ctx.$implicit; const ctx_r918 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r918.viewClicked(examType_r907._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExamTypeListComponent_ng_container_19_button_10_Template, 3, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExamTypeListComponent_ng_container_19_button_11_Template, 3, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "developer_board");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const examType_r907 = ctx.$implicit;
    const idx_r908 = ctx.index;
    const ctx_r893 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childCard", true)("header", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("# ", ctx_r893.paging.pageIndex * ctx_r893.paging.pageSize + idx_r908 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r893.editPermissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r893.editPermissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", examType_r907.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", examType_r907.name, " ");
} }
function ExamTypeListComponent_no_record_found_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "no-record-found");
} }
class ExamTypeListComponent {
    constructor(examTypeService, changeDetector, sharedService, plService) {
        this.examTypeService = examTypeService;
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
        this.examTypes = [];
        this.viewUser = false;
        this.searchParams = null;
        this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
        };
        this.sortParams = {
            fieldName: "name",
            isAsc: true
        };
        this.editPermissions = this.plService.getPageEntitlements(9, 2) == 2;
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
        this.examTypeService
            .getSchoolExamTypeList(SearchObject)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
            .subscribe((result) => {
            this.isLoading = false;
            this.examTypes = result.data;
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
ExamTypeListComponent.ɵfac = function ExamTypeListComponent_Factory(t) { return new (t || ExamTypeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_exam_type_service__WEBPACK_IMPORTED_MODULE_4__["ExamTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_6__["PostLoginService"])); };
ExamTypeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamTypeListComponent, selectors: [["app-exam-type-list"]], inputs: { pageTitle: "pageTitle", roleId: "roleId" }, outputs: { viewButtonEvent: "viewButtonEvent", editButtonEvent: "editButtonEvent", deleteButtonEvent: "deleteButtonEvent" }, decls: 22, vars: 10, consts: [[3, "loading", "title", "subTitle", "refresh"], ["matSort", "", 1, "table", 3, "matSortChange"], [1, "thead"], [1, "sr"], ["matRipple", "", "mat-sort-header", "code"], ["matRipple", "", "mat-sort-header", "name"], [1, "action"], ["class", "tr", 4, "ngFor", "ngForOf"], [1, "default-font"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "length", "showFirstLastButtons", "pageSize", "pageSizeOptions", "page"], [1, "tr"], [1, "sr-col"], [1, "rt"], ["mat-icon-button", "", "appToolTip", "'View Subject'", 1, "icon-view", 3, "click"], ["mat-icon-button", ""], ["mat-icon-button", "", "appToolTip", "'Edit Subject'", "class", "icon-edit", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "appToolTip", "'Delete Subject'", "class", "icon-delete", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "appToolTip", "'Edit Subject'", 1, "icon-edit", 3, "click"], ["mat-icon-button", "", "appToolTip", "'Delete Subject'", 1, "icon-delete", 3, "click"], [3, "childCard", "header"], ["gap", "2px"], ["fxFlex", "30%"], ["fxFlex", "", 1, "rt"], ["mat-icon-button", "", "appToolTip", "'View Subject'", 1, "big-icon-view", 3, "click"], ["mat-icon-button", "", "appToolTip", "'Edit Subject'", "class", "big-icon-edit", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "appToolTip", "'Delete Subject'", "class", "big-icon-delete", 3, "click", 4, "ngIf"], [1, "bold"], [1, "small-screen-data"], ["mat-icon-button", "", "appToolTip", "'Edit Subject'", 1, "big-icon-edit", 3, "click"], ["mat-icon-button", "", "appToolTip", "'Delete Subject'", 1, "big-icon-delete", 3, "click"]], template: function ExamTypeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function ExamTypeListComponent_Template_card_refresh_0_listener($event) { return ctx.getList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "large-screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function ExamTypeListComponent_Template_table_matSortChange_2_listener($event) { return ctx.sortClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Exam Type Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "developer_board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Exam Type Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "developer_board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ExamTypeListComponent_tr_17_Template, 13, 5, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small-screen", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ExamTypeListComponent_ng_container_19_Template, 20, 7, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ExamTypeListComponent_no_record_found_20_Template, 1, 0, "no-record-found", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-paginator", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ExamTypeListComponent_Template_mat_paginator_page_21_listener($event) { return ctx.pagingClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.isLoading)("title", "Exam Type List")("subTitle", "Manage your Exam Type for School");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.examTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.examTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.examTypes.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.paging.length)("showFirstLastButtons", ctx.masterData.paging.showFirstLastButtons)("pageSize", ctx.paging.pageSize)("pageSizeOptions", ctx.masterData.paging.pageSizeOptions);
    } }, directives: [_shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_8__["LargeScreenComponent"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRipple"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortHeader"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _shared_component_boxes_small_screen_small_screen_component__WEBPACK_IMPORTED_MODULE_13__["SmallScreenComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_16__["ToolTipDirective"], _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_17__["ROWComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultFlexDirective"], _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_19__["NoRecordFoundComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vZXhhbS9leGFtLXR5cGUtbWFuYWdlbWVudC9leGFtLXR5cGUtbGlzdC9leGFtLXR5cGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamTypeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exam-type-list',
                templateUrl: './exam-type-list.component.html',
                styleUrls: ['./exam-type-list.component.css']
            }]
    }], function () { return [{ type: _services_exam_type_service__WEBPACK_IMPORTED_MODULE_4__["ExamTypeService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }, { type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_6__["PostLoginService"] }]; }, { viewButtonEvent: [{
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

/***/ "./src/app/post-login/exam/exam-type-management/exam-type-management.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/post-login/exam/exam-type-management/exam-type-management.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ExamTypeManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamTypeManagementComponent", function() { return ExamTypeManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _exam_type_list_exam_type_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exam-type-list/exam-type-list.component */ "./src/app/post-login/exam/exam-type-management/exam-type-list/exam-type-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _services_exam_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/exam-type.service */ "./src/app/post-login/exam/services/exam-type.service.ts");
/* harmony import */ var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/post-login/post-login.service */ "./src/app/post-login/post-login.service.ts");
/* harmony import */ var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/component/boxes/responsive/responsive.component */ "./src/app/shared/component/boxes/responsive/responsive.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_component_boxes_card_bottom_card_bottom_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/component/boxes/card-bottom/card-bottom.component */ "./src/app/shared/component/boxes/card-bottom/card-bottom.component.ts");
/* harmony import */ var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/component/boxes/card/card.component */ "./src/app/shared/component/boxes/card/card.component.ts");
/* harmony import */ var _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/component/dynamic-form/dynamic-form/dynamic-form.component */ "./src/app/shared/component/dynamic-form/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/component/buttons/form-buttons/form-buttons.component */ "./src/app/shared/component/buttons/form-buttons/form-buttons.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/directives/tool-tip.directive */ "./src/app/shared/directives/tool-tip.directive.ts");
/* harmony import */ var _new_exam_type_new_exam_type_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./new-exam-type/new-exam-type.component */ "./src/app/post-login/exam/exam-type-management/new-exam-type/new-exam-type.component.ts");






















const _c0 = ["searchCard"];
function ExamTypeManagementComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r926 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamTypeManagementComponent_button_2_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r926); const ctx_r925 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r925.addNewClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "developer_board");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add New Exam Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamTypeManagementComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r928 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamTypeManagementComponent_button_12_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r928); const ctx_r927 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r927.backToListClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_return");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Back to Exam Type List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamTypeManagementComponent_app_new_exam_type_15_Template(rf, ctx) { if (rf & 1) {
    const _r930 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-new-exam-type", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSaveSuccess", function ExamTypeManagementComponent_app_new_exam_type_15_Template_app_new_exam_type_onSaveSuccess_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r930); const ctx_r929 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r929.onSaveSuccess($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r923 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("changeModeId", ctx_r923.Id)("isViewMode", ctx_r923.showViewPage);
} }
function ExamTypeManagementComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r932 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamTypeManagementComponent_button_18_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r932); const ctx_r931 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r931.deleteExamTypePermanently(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Delete And Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ExamTypeManagementComponent {
    constructor(fb, sharedService, examTypeService, plService) {
        this.fb = fb;
        this.sharedService = sharedService;
        this.examTypeService = examTypeService;
        this.plService = plService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.showViewPage = false;
        this.showAddChangePage = false;
        this.showListPage = true;
        this.showDeleteButton = false;
        this.isLoading = false;
        this.Id = null;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_2__["MasterData"];
        this.searchConfig = [
            {
                isViewMode: false,
                type: "input",
                label: "Exam Type Name",
                inputType: "text",
                name: "name",
                icon: "developer_board"
            }
        ];
        this.searchForm = this.fb.group({});
        this.editPermissions = this.plService.getPageEntitlements(9, 2) === 2;
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
    deleteExamTypePermanently() {
        let dialogRef = this.sharedService.openConfirmDialog("You want to delete this 'ExamType'?");
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
            .subscribe((confirmed) => {
            if (confirmed) {
                this.isLoading = true;
                this.examTypeService.deleteSchoolExamType(this.Id)
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
ExamTypeManagementComponent.ɵfac = function ExamTypeManagementComponent_Factory(t) { return new (t || ExamTypeManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_exam_type_service__WEBPACK_IMPORTED_MODULE_7__["ExamTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_8__["PostLoginService"])); };
ExamTypeManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamTypeManagementComponent, selectors: [["app-exam-type-management"]], viewQuery: function ExamTypeManagementComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_exam_type_list_exam_type_list_component__WEBPACK_IMPORTED_MODULE_4__["ExamTypeListComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._ListPage = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchCard = _t.first);
    } }, decls: 19, vars: 14, consts: [["colGap", "50px"], ["fxFlex", "30"], ["type", "button", "mat-raised-button", "", "matTooltipShowDelay", "100", "class", "btn", "matTooltipHideDelay", "100", 3, "click", 4, "ngIf"], ["fxFlex", ""], [3, "form", "hidden", "title"], ["searchCard", ""], [3, "header"], [3, "formGroup", "ngSubmit"], [3, "form", "fields"], [3, "form", "isSearchForm", "onReset"], ["type", "button", "mat-raised-button", "", "class", "btn", "appToolTip", "'Go back to Exam Type List'", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 3, "click", 4, "ngIf"], [3, "changeModeId", "isViewMode", "onSaveSuccess", 4, "ngIf"], [3, "hidden", "viewButtonEvent", "editButtonEvent", "deleteButtonEvent"], ["mat-raised-button", "", "class", "delete-button padding", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", "mat-raised-button", "", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 1, "btn", 3, "click"], ["type", "button", "mat-raised-button", "", "appToolTip", "'Go back to Exam Type List'", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 1, "btn", 3, "click"], [3, "changeModeId", "isViewMode", "onSaveSuccess"], ["mat-raised-button", "", "type", "button", 1, "delete-button", "padding", 3, "click"]], template: function ExamTypeManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "responsive", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExamTypeManagementComponent_button_2_Template, 4, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "card-bottom", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ExamTypeManagementComponent_Template_form_ngSubmit_7_listener($event) { return ctx.onSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dynamic-form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form-buttons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onReset", function ExamTypeManagementComponent_Template_form_buttons_onReset_9_listener($event) { return ctx.onSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExamTypeManagementComponent_button_12_Template, 4, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExamTypeManagementComponent_app_new_exam_type_15_Template, 1, 2, "app-new-exam-type", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-exam-type-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewButtonEvent", function ExamTypeManagementComponent_Template_app_exam_type_list_viewButtonEvent_16_listener($event) { return ctx.viewButtonEvent($event); })("editButtonEvent", function ExamTypeManagementComponent_Template_app_exam_type_list_editButtonEvent_16_listener($event) { return ctx.editButtonEvent($event); })("deleteButtonEvent", function ExamTypeManagementComponent_Template_app_exam_type_list_deleteButtonEvent_16_listener($event) { return ctx.deleteButtonEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ExamTypeManagementComponent_button_18_Template, 4, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showListPage && ctx.editPermissions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.searchForm)("hidden", !ctx.showListPage)("title", "Search Exam Type");
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
    } }, directives: [_shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__["ResponsiveComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _shared_component_boxes_card_bottom_card_bottom_component__WEBPACK_IMPORTED_MODULE_12__["CardBottomComponent"], _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_14__["DynamicFormComponent"], _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_15__["FormButtonsComponent"], _exam_type_list_exam_type_list_component__WEBPACK_IMPORTED_MODULE_4__["ExamTypeListComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_18__["ToolTipDirective"], _new_exam_type_new_exam_type_component__WEBPACK_IMPORTED_MODULE_19__["NewExamTypeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vZXhhbS9leGFtLXR5cGUtbWFuYWdlbWVudC9leGFtLXR5cGUtbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamTypeManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exam-type-management',
                templateUrl: './exam-type-management.component.html',
                styleUrls: ['./exam-type-management.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }, { type: _services_exam_type_service__WEBPACK_IMPORTED_MODULE_7__["ExamTypeService"] }, { type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_8__["PostLoginService"] }]; }, { _ListPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_exam_type_list_exam_type_list_component__WEBPACK_IMPORTED_MODULE_4__["ExamTypeListComponent"]]
        }], searchCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchCard']
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/exam/exam-type-management/new-exam-type/exam-type-basic-info/exam-type-basic-info.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/post-login/exam/exam-type-management/new-exam-type/exam-type-basic-info/exam-type-basic-info.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ExamTypeBasicInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamTypeBasicInfoComponent", function() { return ExamTypeBasicInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_component_form_templates_form_code_name_form_code_name_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/component/form-templates/form-code-name/form-code-name.component */ "./src/app/shared/component/form-templates/form-code-name/form-code-name.component.ts");





class ExamTypeBasicInfoComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
        this.initialFormValues = null;
        this.isViewMode = false;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"];
    }
    ngOnInit() {
        this.sharedService.setFormInitialValueForChangeMode(this.fieldsConfig, this.initialFormValues);
    }
}
ExamTypeBasicInfoComponent.ɵfac = function ExamTypeBasicInfoComponent_Factory(t) { return new (t || ExamTypeBasicInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"])); };
ExamTypeBasicInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamTypeBasicInfoComponent, selectors: [["exam-type-basic-info"]], inputs: { form: "form", initialFormValues: "initialFormValues", fieldsConfig: "fieldsConfig", isViewMode: "isViewMode" }, decls: 1, vars: 7, consts: [[3, "Required", "labelPrefix", "codeIcon", "nameIcon", "form", "isViewMode", "initialFormValues"]], template: function ExamTypeBasicInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "form-code-name", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Required", true)("labelPrefix", "Exam Type")("codeIcon", "developer_board")("nameIcon", "developer_board")("form", ctx.form)("isViewMode", ctx.isViewMode)("initialFormValues", ctx.initialFormValues);
    } }, directives: [_shared_component_form_templates_form_code_name_form_code_name_component__WEBPACK_IMPORTED_MODULE_3__["FormCodeNameComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vZXhhbS9leGFtLXR5cGUtbWFuYWdlbWVudC9uZXctZXhhbS10eXBlL2V4YW0tdHlwZS1iYXNpYy1pbmZvL2V4YW0tdHlwZS1iYXNpYy1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamTypeBasicInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'exam-type-basic-info',
                templateUrl: './exam-type-basic-info.component.html',
                styleUrls: ['./exam-type-basic-info.component.css']
            }]
    }], function () { return [{ type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }]; }, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], initialFormValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fieldsConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isViewMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/exam/exam-type-management/new-exam-type/new-exam-type.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/post-login/exam/exam-type-management/new-exam-type/new-exam-type.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NewExamTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewExamTypeComponent", function() { return NewExamTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _services_exam_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/exam-type.service */ "./src/app/post-login/exam/services/exam-type.service.ts");
/* harmony import */ var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/component/boxes/card/card.component */ "./src/app/shared/component/boxes/card/card.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _exam_type_basic_info_exam_type_basic_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exam-type-basic-info/exam-type-basic-info.component */ "./src/app/post-login/exam/exam-type-management/new-exam-type/exam-type-basic-info/exam-type-basic-info.component.ts");
/* harmony import */ var _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/component/buttons/form-buttons/form-buttons.component */ "./src/app/shared/component/buttons/form-buttons/form-buttons.component.ts");













function NewExamTypeComponent_form_1_form_buttons_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "form-buttons", 5);
} if (rf & 2) {
    const ctx_r961 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r961.mainForm)("isChangeMode", ctx_r961.changeModeId);
} }
function NewExamTypeComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r963 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewExamTypeComponent_form_1_Template_form_ngSubmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r963); const ctx_r962 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r962.onSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "exam-type-basic-info", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewExamTypeComponent_form_1_form_buttons_2_Template, 1, 2, "form-buttons", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r960 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r960.mainForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r960.mainForm)("isViewMode", ctx_r960.isViewMode)("initialFormValues", ctx_r960.initialFormValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r960.isViewMode);
} }
class NewExamTypeComponent {
    constructor(fb, changeDetector, sharedService, examTypeService) {
        this.fb = fb;
        this.changeDetector = changeDetector;
        this.sharedService = sharedService;
        this.examTypeService = examTypeService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onSaveSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initialFormValues = null;
        this.changeModeId = null;
        this.isViewMode = false;
        this.showHeader = true;
        this.childCard = false;
        this.mainForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.title = "New Exam Type";
        this.subTitle = "Add a new Exam Type";
        this.isLoading = false;
        this.isPopulatingFormDb = false;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_3__["MasterData"];
        this.open = false;
        this.stoppageCount = 0;
    }
    ngOnInit() {
        this.setTitleMessages();
        this.sharedService.setFormCommonFields(this.mainForm);
        if (this.changeModeId) {
            this.populateFromDB();
        }
    }
    setTitleMessages() {
        if (this.changeModeId) {
            this.title = "Update Exam Type.";
            this.subTitle = "Please update following details of Exam Type.";
            if (this.isViewMode) {
                this.title = "View Exam Type.";
                this.subTitle = "View following details of Exam Type.";
            }
        }
    }
    populateFromDB() {
        //--- Fill ExamType information for View/Edit mode from Database
        this.isLoading = true;
        this.isPopulatingFormDb = true;
        this.examTypeService.getSchoolExamType(this.changeModeId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe((result) => {
            result.forEach(element => {
                this.initialFormValues = element;
                this.mainForm.get('_id').setValue(this.initialFormValues._id);
                this.mainForm.get('status').setValue(this.initialFormValues.status);
            });
            this.isLoading = false;
            this.isPopulatingFormDb = false;
        }, (error) => {
            this.isLoading = false;
            this.isPopulatingFormDb = false;
            console.log(error);
        });
    }
    onSubmit(examType) {
        this.mainForm.markAllAsTouched();
        examType.preventDefault();
        examType.stopPropagation();
        if (this.mainForm.valid) {
            this.isLoading = true;
            this.examTypeService.saveSchoolExamType(this.mainForm.getRawValue())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
                .subscribe((result) => {
                this.isLoading = false;
                this.onSaveSuccess.emit(true);
                this.sharedService.openSnackBar("Exam Type information saved Successfully.", "x", "success");
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
NewExamTypeComponent.ɵfac = function NewExamTypeComponent_Factory(t) { return new (t || NewExamTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_exam_type_service__WEBPACK_IMPORTED_MODULE_6__["ExamTypeService"])); };
NewExamTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewExamTypeComponent, selectors: [["app-new-exam-type"]], inputs: { initialFormValues: "initialFormValues", changeModeId: "changeModeId", isViewMode: "isViewMode", showHeader: "showHeader", childCard: "childCard" }, outputs: { onSaveSuccess: "onSaveSuccess" }, decls: 2, vars: 6, consts: [[3, "loading", "title", "subTitle", "cardButtons", "header"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [3, "form", "isViewMode", "initialFormValues"], [3, "form", "isChangeMode", 4, "ngIf"], [3, "form", "isChangeMode"]], template: function NewExamTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewExamTypeComponent_form_1_Template, 3, 5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.isLoading)("title", ctx.title)("subTitle", ctx.subTitle)("cardButtons", false)("header", ctx.showHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainForm && !ctx.isPopulatingFormDb);
    } }, directives: [_shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _exam_type_basic_info_exam_type_basic_info_component__WEBPACK_IMPORTED_MODULE_9__["ExamTypeBasicInfoComponent"], _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_10__["FormButtonsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vZXhhbS9leGFtLXR5cGUtbWFuYWdlbWVudC9uZXctZXhhbS10eXBlL25ldy1leGFtLXR5cGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewExamTypeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-exam-type',
                templateUrl: './new-exam-type.component.html',
                styleUrls: ['./new-exam-type.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }, { type: _services_exam_type_service__WEBPACK_IMPORTED_MODULE_6__["ExamTypeService"] }]; }, { onSaveSuccess: [{
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

/***/ "./src/app/post-login/exam/exam.module.ts":
/*!************************************************!*\
  !*** ./src/app/post-login/exam/exam.module.ts ***!
  \************************************************/
/*! exports provided: ExamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamModule", function() { return ExamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _exam_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-routing.module */ "./src/app/post-login/exam/exam-routing.module.ts");
/* harmony import */ var _exam_management_exam_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exam-management/exam-management.component */ "./src/app/post-login/exam/exam-management/exam-management.component.ts");
/* harmony import */ var _exam_management_exam_list_exam_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exam-management/exam-list/exam-list.component */ "./src/app/post-login/exam/exam-management/exam-list/exam-list.component.ts");
/* harmony import */ var _exam_management_new_exam_new_exam_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exam-management/new-exam/new-exam.component */ "./src/app/post-login/exam/exam-management/new-exam/new-exam.component.ts");
/* harmony import */ var _exam_management_new_exam_exam_basic_info_exam_basic_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exam-management/new-exam/exam-basic-info/exam-basic-info.component */ "./src/app/post-login/exam/exam-management/new-exam/exam-basic-info/exam-basic-info.component.ts");
/* harmony import */ var _services_exam_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/exam.service */ "./src/app/post-login/exam/services/exam.service.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _exam_management_new_exam_class_subject_class_subject_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exam-management/new-exam/class-subject/class-subject.component */ "./src/app/post-login/exam/exam-management/new-exam/class-subject/class-subject.component.ts");
/* harmony import */ var _exam_management_new_exam_class_subject_subject_exam_result_subject_exam_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exam-management/new-exam/class-subject/subject-exam-result/subject-exam-result.component */ "./src/app/post-login/exam/exam-management/new-exam/class-subject/subject-exam-result/subject-exam-result.component.ts");
/* harmony import */ var _exam_type_management_exam_type_management_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./exam-type-management/exam-type-management.component */ "./src/app/post-login/exam/exam-type-management/exam-type-management.component.ts");
/* harmony import */ var _exam_type_management_new_exam_type_new_exam_type_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./exam-type-management/new-exam-type/new-exam-type.component */ "./src/app/post-login/exam/exam-type-management/new-exam-type/new-exam-type.component.ts");
/* harmony import */ var _exam_type_management_exam_type_list_exam_type_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./exam-type-management/exam-type-list/exam-type-list.component */ "./src/app/post-login/exam/exam-type-management/exam-type-list/exam-type-list.component.ts");
/* harmony import */ var _exam_type_management_new_exam_type_exam_type_basic_info_exam_type_basic_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./exam-type-management/new-exam-type/exam-type-basic-info/exam-type-basic-info.component */ "./src/app/post-login/exam/exam-type-management/new-exam-type/exam-type-basic-info/exam-type-basic-info.component.ts");
/* harmony import */ var _services_exam_type_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/exam-type.service */ "./src/app/post-login/exam/services/exam-type.service.ts");
/* harmony import */ var _exam_management_exam_report_card_exam_report_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./exam-management/exam-report-card/exam-report-card.component */ "./src/app/post-login/exam/exam-management/exam-report-card/exam-report-card.component.ts");
/* harmony import */ var _exam_management_new_exam_class_subject_subject_exam_result_subject_exam_result_graph_subject_exam_result_graph_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./exam-management/new-exam/class-subject/subject-exam-result/subject-exam-result-graph/subject-exam-result-graph.component */ "./src/app/post-login/exam/exam-management/new-exam/class-subject/subject-exam-result/subject-exam-result-graph/subject-exam-result-graph.component.ts");
/* harmony import */ var _exam_management_exam_report_card_tabular_format_tabular_format_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./exam-management/exam-report-card/tabular-format/tabular-format.component */ "./src/app/post-login/exam/exam-management/exam-report-card/tabular-format/tabular-format.component.ts");
/* harmony import */ var _exam_management_exam_report_card_panel_format_panel_format_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./exam-management/exam-report-card/panel-format/panel-format.component */ "./src/app/post-login/exam/exam-management/exam-report-card/panel-format/panel-format.component.ts");




















class ExamModule {
}
ExamModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExamModule });
ExamModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExamModule_Factory(t) { return new (t || ExamModule)(); }, providers: [_services_exam_service__WEBPACK_IMPORTED_MODULE_6__["ExamService"], _services_exam_type_service__WEBPACK_IMPORTED_MODULE_14__["ExamTypeService"]], imports: [[
            _exam_routing_module__WEBPACK_IMPORTED_MODULE_1__["ExamRoutingModule"],
            _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExamModule, { declarations: [_exam_management_exam_management_component__WEBPACK_IMPORTED_MODULE_2__["ExamManagementComponent"],
        _exam_management_exam_list_exam_list_component__WEBPACK_IMPORTED_MODULE_3__["ExamListComponent"], _exam_management_new_exam_new_exam_component__WEBPACK_IMPORTED_MODULE_4__["NewExamComponent"], _exam_management_new_exam_exam_basic_info_exam_basic_info_component__WEBPACK_IMPORTED_MODULE_5__["ExamBasicInfoComponent"], _exam_management_new_exam_class_subject_class_subject_component__WEBPACK_IMPORTED_MODULE_8__["ClassSubjectComponent"], _exam_management_new_exam_class_subject_subject_exam_result_subject_exam_result_component__WEBPACK_IMPORTED_MODULE_9__["SubjectExamResultComponent"], _exam_type_management_exam_type_management_component__WEBPACK_IMPORTED_MODULE_10__["ExamTypeManagementComponent"], _exam_type_management_new_exam_type_new_exam_type_component__WEBPACK_IMPORTED_MODULE_11__["NewExamTypeComponent"],
        _exam_type_management_exam_type_list_exam_type_list_component__WEBPACK_IMPORTED_MODULE_12__["ExamTypeListComponent"], _exam_type_management_new_exam_type_exam_type_basic_info_exam_type_basic_info_component__WEBPACK_IMPORTED_MODULE_13__["ExamTypeBasicInfoComponent"], _exam_management_exam_report_card_exam_report_card_component__WEBPACK_IMPORTED_MODULE_15__["ExamReportCardComponent"], _exam_management_new_exam_class_subject_subject_exam_result_subject_exam_result_graph_subject_exam_result_graph_component__WEBPACK_IMPORTED_MODULE_16__["SubjectExamResultGraphComponent"], _exam_management_exam_report_card_tabular_format_tabular_format_component__WEBPACK_IMPORTED_MODULE_17__["TabularFormatComponent"], _exam_management_exam_report_card_panel_format_panel_format_component__WEBPACK_IMPORTED_MODULE_18__["PanelFormatComponent"]], imports: [_exam_routing_module__WEBPACK_IMPORTED_MODULE_1__["ExamRoutingModule"],
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_exam_management_exam_management_component__WEBPACK_IMPORTED_MODULE_2__["ExamManagementComponent"],
                    _exam_management_exam_list_exam_list_component__WEBPACK_IMPORTED_MODULE_3__["ExamListComponent"], _exam_management_new_exam_new_exam_component__WEBPACK_IMPORTED_MODULE_4__["NewExamComponent"], _exam_management_new_exam_exam_basic_info_exam_basic_info_component__WEBPACK_IMPORTED_MODULE_5__["ExamBasicInfoComponent"], _exam_management_new_exam_class_subject_class_subject_component__WEBPACK_IMPORTED_MODULE_8__["ClassSubjectComponent"], _exam_management_new_exam_class_subject_subject_exam_result_subject_exam_result_component__WEBPACK_IMPORTED_MODULE_9__["SubjectExamResultComponent"], _exam_type_management_exam_type_management_component__WEBPACK_IMPORTED_MODULE_10__["ExamTypeManagementComponent"], _exam_type_management_new_exam_type_new_exam_type_component__WEBPACK_IMPORTED_MODULE_11__["NewExamTypeComponent"],
                    _exam_type_management_exam_type_list_exam_type_list_component__WEBPACK_IMPORTED_MODULE_12__["ExamTypeListComponent"], _exam_type_management_new_exam_type_exam_type_basic_info_exam_type_basic_info_component__WEBPACK_IMPORTED_MODULE_13__["ExamTypeBasicInfoComponent"], _exam_management_exam_report_card_exam_report_card_component__WEBPACK_IMPORTED_MODULE_15__["ExamReportCardComponent"], _exam_management_new_exam_class_subject_subject_exam_result_subject_exam_result_graph_subject_exam_result_graph_component__WEBPACK_IMPORTED_MODULE_16__["SubjectExamResultGraphComponent"], _exam_management_exam_report_card_tabular_format_tabular_format_component__WEBPACK_IMPORTED_MODULE_17__["TabularFormatComponent"], _exam_management_exam_report_card_panel_format_panel_format_component__WEBPACK_IMPORTED_MODULE_18__["PanelFormatComponent"]],
                imports: [
                    _exam_routing_module__WEBPACK_IMPORTED_MODULE_1__["ExamRoutingModule"],
                    _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
                ],
                providers: [_services_exam_service__WEBPACK_IMPORTED_MODULE_6__["ExamService"], _services_exam_type_service__WEBPACK_IMPORTED_MODULE_14__["ExamTypeService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/post-login/exam/services/exam-type.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/post-login/exam/services/exam-type.service.ts ***!
  \***************************************************************/
/*! exports provided: ExamTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamTypeService", function() { return ExamTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");





class ExamTypeService {
    constructor(_http, _sharedService) {
        this._http = _http;
        this._sharedService = _sharedService;
        this.apiPrefix = "api/examType/";
    }
    getSchoolExamTypeList(searchParams) {
        return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "getSchoolExamTypeList", searchParams);
    }
    getSchoolExamType(subjectId) {
        return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "getSchoolExamType?id=" + subjectId);
    }
    saveSchoolExamType(subjectData) {
        return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "saveSchoolExamType", subjectData);
    }
    deleteSchoolExamType(id) {
        return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "deleteSchoolExamType?id=" + this._sharedService.serializeMongoObjectId(id));
    }
}
ExamTypeService.ɵfac = function ExamTypeService_Factory(t) { return new (t || ExamTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"])); };
ExamTypeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExamTypeService, factory: ExamTypeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamTypeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/post-login/exam/services/exam.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/post-login/exam/services/exam.service.ts ***!
  \**********************************************************/
/*! exports provided: ExamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamService", function() { return ExamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");





class ExamService {
    constructor(_http, _sharedService) {
        this._http = _http;
        this._sharedService = _sharedService;
        this.apiPrefix = "api/exam/";
    }
    getSchoolExamList(searchParams) {
        return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "getSchoolExamList", searchParams);
    }
    getSchoolExam(examId) {
        return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "getSchoolExam?id=" + examId);
    }
    getExamResultStudentWise(examId) {
        return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "getExamResultStudentWise?id=" + examId);
    }
    saveSpecificSubjectSectionExamResult(data) {
        return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "saveSpecificSubjectSectionExamResult", data);
    }
    saveSchoolExam(examData) {
        return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "saveSchoolExam", examData);
    }
    getSchoolExamByDateRange(startDate, endDate) {
        return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "getSchoolExamByDateRange?startDate =" + startDate + "&endDate =" + endDate);
    }
    getSchoolExamByDate(examDate) {
        return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "getSchoolExamByDate?agendaDate=" + examDate);
    }
    deleteSchoolExam(id) {
        return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "deleteSchoolExam?id=" + this._sharedService.serializeMongoObjectId(id));
    }
}
ExamService.ɵfac = function ExamService_Factory(t) { return new (t || ExamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"])); };
ExamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExamService, factory: ExamService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=exam-exam-module-es2015.js.map