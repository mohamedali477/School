function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-guardian-student-guardian-module"], {
  /***/
  "./src/app/post-login/student-guardian/guardian-list/guardian-list.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/post-login/student-guardian/guardian-list/guardian-list.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: GuardianListComponent */

  /***/
  function srcAppPostLoginStudentGuardianGuardianListGuardianListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuardianListComponent", function () {
      return GuardianListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_guardian_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/guardian.service */
    "./src/app/post-login/student-guardian/services/guardian.service.ts");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/post-login/post-login.service */
    "./src/app/post-login/post-login.service.ts");
    /* harmony import */


    var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/component/boxes/card/card.component */
    "./src/app/shared/component/boxes/card/card.component.ts");
    /* harmony import */


    var _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/component/boxes/large-screen/large-screen.component */
    "./src/app/shared/component/boxes/large-screen/large-screen.component.ts");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_component_boxes_small_screen_small_screen_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../shared/component/boxes/small-screen/small-screen.component */
    "./src/app/shared/component/boxes/small-screen/small-screen.component.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/fesm2015/paginator.js");
    /* harmony import */


    var _shared_component_user_small_pic_user_small_pic_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../shared/component/user-small-pic/user-small-pic.component */
    "./src/app/shared/component/user-small-pic/user-small-pic.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../shared/directives/tool-tip.directive */
    "./src/app/shared/directives/tool-tip.directive.ts");
    /* harmony import */


    var _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../shared/component/boxes/row/row.component */
    "./src/app/shared/component/boxes/row/row.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _shared_component_form_templates_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../../shared/component/form-templates/user-card/user-card.component */
    "./src/app/shared/component/form-templates/user-card/user-card.component.ts");
    /* harmony import */


    var _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../../shared/component/boxes/no-record-found/no-record-found.component */
    "./src/app/shared/component/boxes/no-record-found/no-record-found.component.ts");
    /* harmony import */


    var _shared_pipe_master_data_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../../../shared/pipe/master-data.pipe */
    "./src/app/shared/pipe/master-data.pipe.ts");

    function GuardianListComponent_tr_31_button_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r399 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuardianListComponent_tr_31_button_23_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r399);

          var guardian_r394 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r397 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r397.editClicked(guardian_r394._id, guardian_r394.guardianId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GuardianListComponent_tr_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r401 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "user-small-pic", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "masterData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuardianListComponent_tr_31_Template_button_click_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r401);

          var guardian_r394 = ctx.$implicit;

          var ctx_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r400.viewClicked(guardian_r394._id, guardian_r394.guardianId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "visibility");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, GuardianListComponent_tr_31_button_23_Template, 3, 0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var guardian_r394 = ctx.$implicit;
        var idx_r395 = ctx.index;

        var ctx_r391 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r391.paging.pageIndex * ctx_r391.paging.pageSize + idx_r395 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", guardian_r394.guardianId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](guardian_r394.basicInfo.firstName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](guardian_r394.basicInfo.lastName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](guardian_r394.contactInfo.contactNo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](guardian_r394.contactInfo.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, guardian_r394.basicInfo.dob));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 11, guardian_r394.basicInfo.genderId, "gender"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r391.editPermissions);
      }
    }

    function GuardianListComponent_ng_container_33_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuardianListComponent_ng_container_33_button_10_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r408);

          var guardian_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r406.editClicked(guardian_r402._id, guardian_r402.guardianId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GuardianListComponent_ng_container_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r410 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuardianListComponent_ng_container_33_Template_button_click_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r410);

          var guardian_r402 = ctx.$implicit;

          var ctx_r409 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r409.viewClicked(guardian_r402._id, guardian_r402.guardianId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "visibility");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GuardianListComponent_ng_container_33_button_10_Template, 3, 0, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "user-card", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var guardian_r402 = ctx.$implicit;
        var idx_r403 = ctx.index;

        var ctx_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childCard", true)("header", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("# ", ctx_r392.paging.pageIndex * ctx_r392.paging.pageSize + idx_r403 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r392.editPermissions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", guardian_r402.guardianId)("firstName", guardian_r402.basicInfo.firstName)("lastName", guardian_r402.basicInfo.lastName)("contactNo", guardian_r402.contactInfo.contactNo)("email", guardian_r402.contactInfo.email)("dob", guardian_r402.basicInfo.dob)("genderId", guardian_r402.basicInfo.genderId);
      }
    }

    function GuardianListComponent_no_record_found_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "no-record-found");
      }
    }

    var GuardianListComponent =
    /*#__PURE__*/
    function () {
      function GuardianListComponent(guardianService, changeDetector, sharedService, plService) {
        _classCallCheck(this, GuardianListComponent);

        this.guardianService = guardianService;
        this.changeDetector = changeDetector;
        this.sharedService = sharedService;
        this.plService = plService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.viewButtonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editButtonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageTitle = "";
        this.currentTime = Date.now();
        this.editPermissions = false;
        this.isLoading = false;
        this.environment = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_3__["MasterData"];
        this.guardians = [];
        this.viewUser = false;
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
        this.editPermissions = this.plService.getPageEntitlements(6, 1) === 2;
      }

      _createClass(GuardianListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getList();
        }
      }, {
        key: "getList",
        value: function getList() {
          var _this = this;

          this.isLoading = true;
          var SearchObject = {
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
          this.guardianService.getGuardianList(SearchObject).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe$)).subscribe(function (result) {
            _this.isLoading = false;
            _this.guardians = result.data;
            _this.paging.length = result.count;
          }, function (error) {
            _this.isLoading = false;
            console.log(error);
          });
        }
      }, {
        key: "viewClicked",
        value: function viewClicked(id, guardianId) {
          var idObj = {
            id: id,
            focusId: guardianId
          };
          this.viewButtonEvent.emit(idObj);
        }
      }, {
        key: "editClicked",
        value: function editClicked(id, guardianId) {
          var idObj = {
            id: id,
            focusId: guardianId
          };
          this.editButtonEvent.emit(idObj);
        }
      }, {
        key: "deleteClicked",
        value: function deleteClicked(guardianId) {
          var _this2 = this;

          var dialogRef = this.sharedService.openConfirmDialog("You want to delete this Guardian?");
          dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe$)).subscribe(function (confirmed) {
            if (confirmed) {
              _this2.isLoading = true;

              _this2.guardianService.deleteGuardian(guardianId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(_this2.unsubscribe$)).subscribe(function (result) {
                _this2.getList();

                _this2.isLoading = false;
              }, function (error) {
                _this2.isLoading = false;
              });
            }
          }, function (error) {
            _this2.isLoading = false;
          });
        }
      }, {
        key: "CardCrossEvent_ViewUser",
        value: function CardCrossEvent_ViewUser() {
          this.viewUser = false;
        }
      }, {
        key: "sortClicked",
        value: function sortClicked(sort) {
          this.paging.pageIndex = 0;
          this.sortParams.fieldName = sort.active;
          this.sortParams.isAsc = sort.direction === 'asc';
          this.getList();
          this.changeDetector.detectChanges();
        }
      }, {
        key: "pagingClicked",
        value: function pagingClicked(paginator) {
          this.paging.pageIndex = paginator.pageIndex;
          this.paging.pageSize = paginator.pageSize;
          this.getList();
          this.changeDetector.detectChanges();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next(true);
          this.unsubscribe$.complete();
        }
      }]);

      return GuardianListComponent;
    }();

    GuardianListComponent.ɵfac = function GuardianListComponent_Factory(t) {
      return new (t || GuardianListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_guardian_service__WEBPACK_IMPORTED_MODULE_4__["GuardianService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_6__["PostLoginService"]));
    };

    GuardianListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GuardianListComponent,
      selectors: [["app-guardian-list"]],
      inputs: {
        pageTitle: "pageTitle",
        roleId: "roleId"
      },
      outputs: {
        viewButtonEvent: "viewButtonEvent",
        editButtonEvent: "editButtonEvent"
      },
      decls: 36,
      vars: 10,
      consts: [[3, "loading", "title", "subTitle", "refresh"], ["matSort", "", 1, "table", 3, "matSortChange"], [1, "thead"], ["colspan", "2", 1, "sr"], ["matRipple", "", "mat-sort-header", "basicInfo.firstName"], ["matRipple", "", "mat-sort-header", "basicInfo.lastName"], ["matRipple", "", "mat-sort-header", "contactInfo.contactNo"], ["matRipple", "", "mat-sort-header", "contactInfo.email"], ["matRipple", "", "mat-sort-header", "basicInfo.dob"], ["matRipple", "", "mat-sort-header", "basicInfo.genderId"], [1, "action"], ["class", "tr", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "length", "showFirstLastButtons", "pageSize", "pageSizeOptions", "page"], [1, "tr"], [1, "sr-col"], [3, "userId"], [1, "rt"], ["mat-icon-button", "", "appToolTip", "'View Guardian'", 1, "icon-view", 3, "click"], ["mat-icon-button", ""], ["mat-icon-button", "", "appToolTip", "'Edit Guardian'", "class", "icon-edit", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "appToolTip", "'Edit Guardian'", 1, "icon-edit", 3, "click"], [3, "childCard", "header"], ["gap", "2px"], ["fxFlex", "30%"], ["fxFlex", "", 1, "rt"], ["mat-icon-button", "", "appToolTip", "'View Guardian'", 1, "big-icon-view", 3, "click"], ["mat-icon-button", "", "appToolTip", "'Edit Guardian'", "class", "big-icon-edit", 3, "click", 4, "ngIf"], [3, "userId", "firstName", "lastName", "contactNo", "email", "dob", "genderId"], ["mat-icon-button", "", "appToolTip", "'Edit Guardian'", 1, "big-icon-edit", 3, "click"]],
      template: function GuardianListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function GuardianListComponent_Template_card_refresh_0_listener($event) {
            return ctx.getList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "large-screen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function GuardianListComponent_Template_table_matSortChange_2_listener($event) {
            return ctx.sortClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " First Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Last Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Mob No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "phone_iphone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Email Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " DOB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, GuardianListComponent_tr_31_Template, 24, 14, "tr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "small-screen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, GuardianListComponent_ng_container_33_Template, 13, 11, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, GuardianListComponent_no_record_found_34_Template, 1, 0, "no-record-found", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-paginator", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function GuardianListComponent_Template_mat_paginator_page_35_listener($event) {
            return ctx.pagingClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.isLoading)("title", "Guardian List")("subTitle", "Manage your guardian for students");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.guardians);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.guardians);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.guardians.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.paging.length)("showFirstLastButtons", ctx.masterData.paging.showFirstLastButtons)("pageSize", ctx.paging.pageSize)("pageSizeOptions", ctx.masterData.paging.pageSizeOptions);
        }
      },
      directives: [_shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_8__["LargeScreenComponent"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRipple"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortHeader"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _shared_component_boxes_small_screen_small_screen_component__WEBPACK_IMPORTED_MODULE_13__["SmallScreenComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginator"], _shared_component_user_small_pic_user_small_pic_component__WEBPACK_IMPORTED_MODULE_15__["UserSmallPicComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_17__["ToolTipDirective"], _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_18__["ROWComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultFlexDirective"], _shared_component_form_templates_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_20__["UserCardComponent"], _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_21__["NoRecordFoundComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], _shared_pipe_master_data_pipe__WEBPACK_IMPORTED_MODULE_22__["MasterDataPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vc3R1ZGVudC1ndWFyZGlhbi9ndWFyZGlhbi1saXN0L2d1YXJkaWFuLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuardianListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-guardian-list',
          templateUrl: './guardian-list.component.html',
          styleUrls: ['./guardian-list.component.css']
        }]
      }], function () {
        return [{
          type: _services_guardian_service__WEBPACK_IMPORTED_MODULE_4__["GuardianService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }, {
          type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_6__["PostLoginService"]
        }];
      }, {
        viewButtonEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        editButtonEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        pageTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        roleId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/post-login/student-guardian/guardian-management/guardian-management.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/post-login/student-guardian/guardian-management/guardian-management.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: GuardianManagementComponent */

  /***/
  function srcAppPostLoginStudentGuardianGuardianManagementGuardianManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuardianManagementComponent", function () {
      return GuardianManagementComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _guardian_list_guardian_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../guardian-list/guardian-list.component */
    "./src/app/post-login/student-guardian/guardian-list/guardian-list.component.ts");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _services_student_guardian_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/student-guardian.service */
    "./src/app/post-login/student-guardian/services/student-guardian.service.ts");
    /* harmony import */


    var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/post-login/post-login.service */
    "./src/app/post-login/post-login.service.ts");
    /* harmony import */


    var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/component/boxes/responsive/responsive.component */
    "./src/app/shared/component/boxes/responsive/responsive.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_component_boxes_card_bottom_card_bottom_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../shared/component/boxes/card-bottom/card-bottom.component */
    "./src/app/shared/component/boxes/card-bottom/card-bottom.component.ts");
    /* harmony import */


    var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../shared/component/boxes/card/card.component */
    "./src/app/shared/component/boxes/card/card.component.ts");
    /* harmony import */


    var _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../shared/component/dynamic-form/dynamic-form/dynamic-form.component */
    "./src/app/shared/component/dynamic-form/dynamic-form/dynamic-form.component.ts");
    /* harmony import */


    var _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../shared/component/buttons/form-buttons/form-buttons.component */
    "./src/app/shared/component/buttons/form-buttons/form-buttons.component.ts");
    /* harmony import */


    var _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../shared/component/boxes/row/row.component */
    "./src/app/shared/component/boxes/row/row.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../shared/directives/tool-tip.directive */
    "./src/app/shared/directives/tool-tip.directive.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _new_student_guardian_registration_new_student_guardian_registration_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../new-student-guardian-registration/new-student-guardian-registration.component */
    "./src/app/post-login/student-guardian/new-student-guardian-registration/new-student-guardian-registration.component.ts");

    var _c0 = ["searchCard"];

    function GuardianManagementComponent_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r417 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuardianManagementComponent_button_2_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r417);

          var ctx_r416 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r416.addNewClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "person_add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add New Student and Guardian ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GuardianManagementComponent_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r419 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuardianManagementComponent_button_12_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r419);

          var ctx_r418 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r418.backToListClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_return");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Back to Guardian List ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GuardianManagementComponent_button_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r421 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuardianManagementComponent_button_15_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r421);

          var ctx_r420 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r420.deleteClicked(ctx_r420.Id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_forever");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Delete this hierarchy ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GuardianManagementComponent_app_new_student_guardian_registration_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r423 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-new-student-guardian-registration", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSaveSuccess", function GuardianManagementComponent_app_new_student_guardian_registration_18_Template_app_new_student_guardian_registration_onSaveSuccess_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r423);

          var ctx_r422 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r422.onSaveSuccess($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("changeModeId", ctx_r415.Id)("focusId", ctx_r415.focusId)("tabSelectedIndex", 1)("isViewMode", ctx_r415.showViewPage);
      }
    }

    var GuardianManagementComponent =
    /*#__PURE__*/
    function () {
      function GuardianManagementComponent(fb, sharedService, studentGuardianService, plService) {
        _classCallCheck(this, GuardianManagementComponent);

        this.fb = fb;
        this.sharedService = sharedService;
        this.studentGuardianService = studentGuardianService;
        this.plService = plService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.showViewPage = false;
        this.showAddChangePage = false;
        this.showListPage = true;
        this.editPermissions = false;
        this.isLoading = false;
        this.Id = null;
        this.focusId = null;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_2__["MasterData"];
        this.searchConfig = [{
          isViewMode: false,
          type: "input",
          label: "First Name",
          inputType: "text",
          name: "firstName",
          icon: "accessibility_new"
        }, {
          isViewMode: false,
          type: "input",
          label: "Last Name",
          inputType: "text",
          name: "lastName",
          icon: "accessibility"
        }, {
          isViewMode: false,
          type: "date",
          label: "DOB",
          name: "dob"
        }, {
          isViewMode: false,
          type: "select",
          label: "Gender",
          name: "genderId",
          options: this.masterData.genders
        }, {
          isViewMode: false,
          type: "select",
          label: "Religion",
          name: "religionId",
          options: this.masterData.religions
        }, {
          isViewMode: false,
          type: "select",
          label: "Cast",
          name: "castId",
          options: this.masterData.casts
        }, {
          isViewMode: false,
          type: "select",
          label: "Relation",
          name: "relationId",
          options: this.masterData.relations
        }];
        this.searchForm = this.fb.group({});
        this.editPermissions = this.plService.getPageEntitlements(6, 1) == 2;
      }

      _createClass(GuardianManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSearchClick",
        value: function onSearchClick() {
          this._ListPage.searchParams = this.searchForm.value;
          this._ListPage.paging.pageIndex = 0;

          this._ListPage.getList();

          this.searchCard.hide();
        }
      }, {
        key: "addNewClick",
        value: function addNewClick() {
          this.Id = null;
          this.showAddChangePage = true;
          this.showViewPage = this.showListPage = false;
        }
      }, {
        key: "backToListClick",
        value: function backToListClick() {
          this.showListPage = true;
          this.showViewPage = this.showAddChangePage = false;
        }
      }, {
        key: "onSaveSuccess",
        value: function onSaveSuccess(event) {
          this.backToListClick();

          if (this._ListPage) {
            this._ListPage.getList();
          }
        }
      }, {
        key: "viewButtonEvent",
        value: function viewButtonEvent(event) {
          this.Id = event.id;
          this.focusId = event.focusId;
          this.showViewPage = true;
          this.showListPage = this.showAddChangePage = false;
        }
      }, {
        key: "editButtonEvent",
        value: function editButtonEvent(event) {
          this.showAddChangePage = true;
          this.Id = event.id;
          this.focusId = event.focusId;
          this.showViewPage = this.showListPage = false;
        }
      }, {
        key: "deleteClicked",
        value: function deleteClicked(id) {
          var _this3 = this;

          var dialogRef = this.sharedService.openConfirmDialog("You want to delete this 'Student Guardian hierarchy'?");
          dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$)).subscribe(function (confirmed) {
            if (confirmed) {
              _this3.isLoading = true;

              _this3.studentGuardianService.deleteStudentGuardian(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this3.unsubscribe$)).subscribe(function (result) {
                _this3.backToListClick();

                _this3._ListPage.getList();

                _this3.isLoading = false;
              }, function (error) {
                _this3.isLoading = false;
              });
            }
          }, function (error) {
            _this3.isLoading = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next(true);
          this.unsubscribe$.complete();
        }
      }]);

      return GuardianManagementComponent;
    }();

    GuardianManagementComponent.ɵfac = function GuardianManagementComponent_Factory(t) {
      return new (t || GuardianManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_guardian_service__WEBPACK_IMPORTED_MODULE_7__["StudentGuardianService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_8__["PostLoginService"]));
    };

    GuardianManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GuardianManagementComponent,
      selectors: [["app-guardian-management"]],
      viewQuery: function GuardianManagementComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_guardian_list_guardian_list_component__WEBPACK_IMPORTED_MODULE_1__["GuardianListComponent"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._ListPage = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchCard = _t.first);
        }
      },
      decls: 20,
      vars: 14,
      consts: [["colGap", "50px"], ["fxFlex", "30"], ["type", "button", "mat-raised-button", "", "class", "btn", "appToolTip", "'Add new Student and Guardian'", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 3, "click", 4, "ngIf"], ["fxFlex", ""], [3, "form", "hidden", "title"], ["searchCard", ""], [3, "header"], [3, "formGroup", "ngSubmit"], [3, "form", "fields"], [3, "form", "isSearchForm", "onReset"], ["type", "button", "class", "btn", "mat-raised-button", "", "appToolTip", "'Go back to Guardian List'", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 3, "click", 4, "ngIf"], [1, "fill-space"], ["type", "button", "appToolTip", "'Delete Guardian'", "class", "delete-button", "mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "changeModeId", "focusId", "tabSelectedIndex", "isViewMode", "onSaveSuccess", 4, "ngIf"], [3, "hidden", "viewButtonEvent", "editButtonEvent"], ["type", "button", "mat-raised-button", "", "appToolTip", "'Add new Student and Guardian'", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 1, "btn", 3, "click"], ["type", "button", "mat-raised-button", "", "appToolTip", "'Go back to Guardian List'", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 1, "btn", 3, "click"], ["type", "button", "appToolTip", "'Delete Guardian'", "mat-raised-button", "", 1, "delete-button", 3, "click"], [3, "changeModeId", "focusId", "tabSelectedIndex", "isViewMode", "onSaveSuccess"]],
      template: function GuardianManagementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "responsive", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GuardianManagementComponent_button_2_Template, 4, 0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "card-bottom", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GuardianManagementComponent_Template_form_ngSubmit_7_listener($event) {
            return ctx.onSearchClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dynamic-form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form-buttons", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onReset", function GuardianManagementComponent_Template_form_buttons_onReset_9_listener($event) {
            return ctx.onSearchClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GuardianManagementComponent_button_12_Template, 4, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GuardianManagementComponent_button_15_Template, 4, 0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, GuardianManagementComponent_app_new_student_guardian_registration_18_Template, 1, 4, "app-new-student-guardian-registration", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "app-guardian-list", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewButtonEvent", function GuardianManagementComponent_Template_app_guardian_list_viewButtonEvent_19_listener($event) {
            return ctx.viewButtonEvent($event);
          })("editButtonEvent", function GuardianManagementComponent_Template_app_guardian_list_editButtonEvent_19_listener($event) {
            return ctx.editButtonEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showListPage && ctx.editPermissions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.searchForm)("hidden", !ctx.showListPage)("title", "Search Guardian");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddChangePage && ctx.Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddChangePage || ctx.showViewPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showListPage);
        }
      },
      directives: [_shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__["ResponsiveComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _shared_component_boxes_card_bottom_card_bottom_component__WEBPACK_IMPORTED_MODULE_12__["CardBottomComponent"], _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_14__["DynamicFormComponent"], _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_15__["FormButtonsComponent"], _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_16__["ROWComponent"], _guardian_list_guardian_list_component__WEBPACK_IMPORTED_MODULE_1__["GuardianListComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_18__["ToolTipDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _new_student_guardian_registration_new_student_guardian_registration_component__WEBPACK_IMPORTED_MODULE_20__["NewStudentguardianRegistrationComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vc3R1ZGVudC1ndWFyZGlhbi9ndWFyZGlhbi1tYW5hZ2VtZW50L2d1YXJkaWFuLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuardianManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-guardian-management',
          templateUrl: './guardian-management.component.html',
          styleUrls: ['./guardian-management.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }, {
          type: _services_student_guardian_service__WEBPACK_IMPORTED_MODULE_7__["StudentGuardianService"]
        }, {
          type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_8__["PostLoginService"]
        }];
      }, {
        _ListPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_guardian_list_guardian_list_component__WEBPACK_IMPORTED_MODULE_1__["GuardianListComponent"]]
        }],
        searchCard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['searchCard']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/post-login/student-guardian/my-profile/my-profile.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/post-login/student-guardian/my-profile/my-profile.component.ts ***!
    \********************************************************************************/

  /*! exports provided: MyProfileComponent */

  /***/
  function srcAppPostLoginStudentGuardianMyProfileMyProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function () {
      return MyProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _new_student_guardian_registration_new_student_guardian_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../new-student-guardian-registration/new-student-guardian-registration.component */
    "./src/app/post-login/student-guardian/new-student-guardian-registration/new-student-guardian-registration.component.ts");

    var MyProfileComponent =
    /*#__PURE__*/
    function () {
      function MyProfileComponent(sharedService) {
        _classCallCheck(this, MyProfileComponent);

        this.sharedService = sharedService;
        this.Id = null;
        this.isViewMode = true;
      }

      _createClass(MyProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var isStudent = _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"].studentRoleId['$oid'] === this.sharedService.currentUserRoleId()['$oid'];
          var isGuardian = _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"].guardianRoleId['$oid'] === this.sharedService.currentUserRoleId()['$oid'];

          if (isGuardian || isStudent) {
            var data = JSON.parse(this.sharedService.loggedInData());
            this.Id = this.sharedService.serializeMongoObjectId(data["_id"]);
            this.isViewMode = isGuardian ? false : true;
          }
        }
      }]);

      return MyProfileComponent;
    }();

    MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) {
      return new (t || MyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]));
    };

    MyProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyProfileComponent,
      selectors: [["app-my-profile"]],
      decls: 1,
      vars: 3,
      consts: [[3, "changeModeId", "isComingFromMyProfile", "isViewMode"]],
      template: function MyProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-new-student-guardian-registration", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("changeModeId", ctx.Id)("isComingFromMyProfile", true)("isViewMode", ctx.isViewMode);
        }
      },
      directives: [_new_student_guardian_registration_new_student_guardian_registration_component__WEBPACK_IMPORTED_MODULE_3__["NewStudentguardianRegistrationComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vc3R1ZGVudC1ndWFyZGlhbi9teS1wcm9maWxlL215LXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-profile',
          templateUrl: './my-profile.component.html',
          styleUrls: ['./my-profile.component.css']
        }]
      }], function () {
        return [{
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/post-login/student-guardian/new-student-guardian-registration/guardian-info/guardian-info.component.ts":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/post-login/student-guardian/new-student-guardian-registration/guardian-info/guardian-info.component.ts ***!
    \************************************************************************************************************************/

  /*! exports provided: GuardianInfoComponent */

  /***/
  function srcAppPostLoginStudentGuardianNewStudentGuardianRegistrationGuardianInfoGuardianInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuardianInfoComponent", function () {
      return GuardianInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/component/boxes/card/card.component */
    "./src/app/shared/component/boxes/card/card.component.ts");
    /* harmony import */


    var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/component/boxes/responsive/responsive.component */
    "./src/app/shared/component/boxes/responsive/responsive.component.ts");
    /* harmony import */


    var _shared_component_form_templates_form_profile_pic_form_profile_pic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/component/form-templates/form-profile-pic/form-profile-pic.component */
    "./src/app/shared/component/form-templates/form-profile-pic/form-profile-pic.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _shared_component_dropdowns_ddl_relation_ddl_relation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/component/dropdowns/ddl-relation/ddl-relation.component */
    "./src/app/shared/component/dropdowns/ddl-relation/ddl-relation.component.ts");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/fesm2015/expansion.js");
    /* harmony import */


    var _shared_component_boxes_smart_div_smart_div_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/component/boxes/smart-div/smart-div.component */
    "./src/app/shared/component/boxes/smart-div/smart-div.component.ts");
    /* harmony import */


    var _shared_component_form_templates_form_user_basic_info_form_user_basic_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/component/form-templates/form-user-basic-info/form-user-basic-info.component */
    "./src/app/shared/component/form-templates/form-user-basic-info/form-user-basic-info.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_component_form_templates_form_contact_info_form_contact_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../shared/component/form-templates/form-contact-info/form-contact-info.component */
    "./src/app/shared/component/form-templates/form-contact-info/form-contact-info.component.ts");
    /* harmony import */


    var _shared_component_form_templates_form_occupation_info_form_occupation_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../shared/component/form-templates/form-occupation-info/form-occupation-info.component */
    "./src/app/shared/component/form-templates/form-occupation-info/form-occupation-info.component.ts");
    /* harmony import */


    var _shared_component_form_templates_form_user_government_ids_form_user_government_ids_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../shared/component/form-templates/form-user-government-ids/form-user-government-ids.component */
    "./src/app/shared/component/form-templates/form-user-government-ids/form-user-government-ids.component.ts");
    /* harmony import */


    var _shared_component_form_templates_form_user_credentials_form_user_credentials_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../shared/component/form-templates/form-user-credentials/form-user-credentials.component */
    "./src/app/shared/component/form-templates/form-user-credentials/form-user-credentials.component.ts");

    function GuardianInfoComponent_mat_expansion_panel_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "smart-div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "form-user-credentials", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r499 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r499.guardian.controls["credentialInfo"])("icon", "security");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r499.guardian.controls["basicInfo"].controls["firstName"] == null ? null : ctx_r499.guardian.controls["basicInfo"].controls["firstName"].value, " Credential Details ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r499.guardian.controls["credentialInfo"])("isViewMode", ctx_r499.isViewMode)("initialFormValues", (ctx_r499.initialFormValues == null ? null : ctx_r499.initialFormValues.guardians.length) > ctx_r499.idxGuardian && (ctx_r499.initialFormValues == null ? null : ctx_r499.initialFormValues.guardians[ctx_r499.idxGuardian].credentialInfo));
      }
    }

    var _c0 = ["*"];

    var GuardianInfoComponent =
    /*#__PURE__*/
    function () {
      function GuardianInfoComponent() {
        _classCallCheck(this, GuardianInfoComponent);

        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"];
      }

      _createClass(GuardianInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GuardianInfoComponent;
    }();

    GuardianInfoComponent.ɵfac = function GuardianInfoComponent_Factory(t) {
      return new (t || GuardianInfoComponent)();
    };

    GuardianInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GuardianInfoComponent,
      selectors: [["guardian-info"]],
      inputs: {
        guardian: "guardian",
        idxGuardian: "idxGuardian",
        initialFormValues: "initialFormValues",
        guardianSubTitle: "guardianSubTitle",
        focusId: "focusId",
        isViewMode: "isViewMode",
        changeModeId: "changeModeId",
        canSeeSensitiveInfo: "canSeeSensitiveInfo",
        editPermissions: "editPermissions",
        isComingFromMyProfile: "isComingFromMyProfile"
      },
      ngContentSelectors: _c0,
      decls: 32,
      vars: 37,
      consts: [[3, "childCard", "refreshButton", "title", "subTitle", "open"], ["fxFlex", "", 3, "form", "isViewMode"], ["fxFlex", "2 2 auto"], [3, "form", "isViewMode", "value"], ["hideToggle", "true", "hideToggle", "true", 3, "multi"], [1, "no-shadow"], [3, "form", "icon"], [3, "form", "isViewMode", "initialFormValues"], ["class", "no-shadow", 4, "ngIf"], [3, "Required", "form", "isViewMode", "initialFormValues"]],
      template: function GuardianInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "responsive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "form-profile-pic", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-ddl-relation", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-accordion", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-expansion-panel", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "smart-div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "form-user-basic-info", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GuardianInfoComponent_mat_expansion_panel_13_Template, 6, 6, "mat-expansion-panel", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-expansion-panel", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "smart-div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "form-contact-info", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-expansion-panel", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "smart-div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "form-occupation-info", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-expansion-panel", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "smart-div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "form-user-government-ids", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childCard", true)("refreshButton", false)("title", "Guardian- " + (ctx.guardian.controls["basicInfo"].controls["firstName"] == null ? null : ctx.guardian.controls["basicInfo"].controls["firstName"].value) + " " + (ctx.guardian.controls["basicInfo"].controls["lastName"] == null ? null : ctx.guardian.controls["basicInfo"].controls["lastName"].value))("subTitle", ctx.guardianSubTitle)("open", ctx.guardian.controls["_id"].value["$oid"] === ctx.focusId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.guardian)("isViewMode", ctx.isViewMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.guardian)("isViewMode", ctx.isViewMode)("value", (ctx.initialFormValues == null ? null : ctx.initialFormValues.guardians.length) > ctx.idxGuardian && (ctx.initialFormValues == null ? null : ctx.initialFormValues.guardians[ctx.idxGuardian].relationId));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multi", ctx.masterData.expendMultiple);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.guardian.controls["basicInfo"])("icon", "account_box");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.guardian.controls["basicInfo"].controls["firstName"] == null ? null : ctx.guardian.controls["basicInfo"].controls["firstName"].value, " Basic Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.guardian.controls["basicInfo"])("isViewMode", ctx.isViewMode)("initialFormValues", (ctx.initialFormValues == null ? null : ctx.initialFormValues.guardians.length) > ctx.idxGuardian && (ctx.initialFormValues == null ? null : ctx.initialFormValues.guardians[ctx.idxGuardian].basicInfo));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canSeeSensitiveInfo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.guardian.controls["contactInfo"])("icon", "contact_phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.guardian.controls["basicInfo"].controls["firstName"] == null ? null : ctx.guardian.controls["basicInfo"].controls["firstName"].value, " Contact Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Required", true)("form", ctx.guardian.controls["contactInfo"])("isViewMode", ctx.isViewMode)("initialFormValues", (ctx.initialFormValues == null ? null : ctx.initialFormValues.guardians.length) > ctx.idxGuardian && (ctx.initialFormValues == null ? null : ctx.initialFormValues.guardians[ctx.idxGuardian].contactInfo));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.guardian.controls["occupationInfo"])("icon", "work_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.guardian.controls["basicInfo"].controls["firstName"] == null ? null : ctx.guardian.controls["basicInfo"].controls["firstName"].value, " Occupation Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.guardian.controls["occupationInfo"])("isViewMode", ctx.isViewMode)("initialFormValues", (ctx.initialFormValues == null ? null : ctx.initialFormValues.guardians.length) > ctx.idxGuardian && (ctx.initialFormValues == null ? null : ctx.initialFormValues.guardians[ctx.idxGuardian].occupationInfo));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.guardian.controls["governmentIds"])("icon", "local_activity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.guardian.controls["basicInfo"].controls["firstName"] == null ? null : ctx.guardian.controls["basicInfo"].controls["firstName"].value, " Government Ids ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.guardian.controls["governmentIds"])("isViewMode", ctx.isViewMode)("initialFormValues", (ctx.initialFormValues == null ? null : ctx.initialFormValues.guardians.length) > ctx.idxGuardian && (ctx.initialFormValues == null ? null : ctx.initialFormValues.guardians[ctx.idxGuardian].governmentIds));
        }
      },
      directives: [_shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_3__["ResponsiveComponent"], _shared_component_form_templates_form_profile_pic_form_profile_pic_component__WEBPACK_IMPORTED_MODULE_4__["FormProfilePicComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _shared_component_dropdowns_ddl_relation_ddl_relation_component__WEBPACK_IMPORTED_MODULE_6__["DdlRelationComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelTitle"], _shared_component_boxes_smart_div_smart_div_component__WEBPACK_IMPORTED_MODULE_8__["SmartDivComponent"], _shared_component_form_templates_form_user_basic_info_form_user_basic_info_component__WEBPACK_IMPORTED_MODULE_9__["FormUserBasicInfoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _shared_component_form_templates_form_contact_info_form_contact_info_component__WEBPACK_IMPORTED_MODULE_11__["FormContactInfoComponent"], _shared_component_form_templates_form_occupation_info_form_occupation_info_component__WEBPACK_IMPORTED_MODULE_12__["FormOccupationInfoComponent"], _shared_component_form_templates_form_user_government_ids_form_user_government_ids_component__WEBPACK_IMPORTED_MODULE_13__["FormUserGovernmentIdsComponent"], _shared_component_form_templates_form_user_credentials_form_user_credentials_component__WEBPACK_IMPORTED_MODULE_14__["FormUserCredentialsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vc3R1ZGVudC1ndWFyZGlhbi9uZXctc3R1ZGVudC1ndWFyZGlhbi1yZWdpc3RyYXRpb24vZ3VhcmRpYW4taW5mby9ndWFyZGlhbi1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuardianInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'guardian-info',
          templateUrl: './guardian-info.component.html',
          styleUrls: ['./guardian-info.component.css']
        }]
      }], function () {
        return [];
      }, {
        guardian: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        idxGuardian: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        initialFormValues: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        guardianSubTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        focusId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isViewMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        changeModeId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        canSeeSensitiveInfo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        editPermissions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isComingFromMyProfile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/post-login/student-guardian/new-student-guardian-registration/new-student-guardian-registration.component.ts":
  /*!******************************************************************************************************************************!*\
    !*** ./src/app/post-login/student-guardian/new-student-guardian-registration/new-student-guardian-registration.component.ts ***!
    \******************************************************************************************************************************/

  /*! exports provided: NewStudentguardianRegistrationComponent */

  /***/
  function srcAppPostLoginStudentGuardianNewStudentGuardianRegistrationNewStudentGuardianRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewStudentguardianRegistrationComponent", function () {
      return NewStudentguardianRegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _services_student_guardian_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/student-guardian.service */
    "./src/app/post-login/student-guardian/services/student-guardian.service.ts");
    /* harmony import */


    var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/post-login/post-login.service */
    "./src/app/post-login/post-login.service.ts");
    /* harmony import */


    var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/component/boxes/card/card.component */
    "./src/app/shared/component/boxes/card/card.component.ts");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/fesm2015/tabs.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_component_boxes_smart_div_smart_div_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../shared/component/boxes/smart-div/smart-div.component */
    "./src/app/shared/component/boxes/smart-div/smart-div.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/fesm2015/badge.js");
    /* harmony import */


    var _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../shared/component/boxes/large-screen/large-screen.component */
    "./src/app/shared/component/boxes/large-screen/large-screen.component.ts");
    /* harmony import */


    var _student_info_student_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./student-info/student-info.component */
    "./src/app/post-login/student-guardian/new-student-guardian-registration/student-info/student-info.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _shared_component_buttons_link_button_link_button_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../shared/component/buttons/link-button/link-button.component */
    "./src/app/shared/component/buttons/link-button/link-button.component.ts");
    /* harmony import */


    var _guardian_info_guardian_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./guardian-info/guardian-info.component */
    "./src/app/post-login/student-guardian/new-student-guardian-registration/guardian-info/guardian-info.component.ts");
    /* harmony import */


    var _shared_component_boxes_section_section_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../../shared/component/boxes/section/section.component */
    "./src/app/shared/component/boxes/section/section.component.ts");
    /* harmony import */


    var _shared_component_form_templates_form_address_info_form_address_info_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../../shared/component/form-templates/form-address-info/form-address-info.component */
    "./src/app/shared/component/form-templates/form-address-info/form-address-info.component.ts");
    /* harmony import */


    var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../../../shared/component/boxes/responsive/responsive.component */
    "./src/app/shared/component/boxes/responsive/responsive.component.ts");
    /* harmony import */


    var _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../../../shared/component/buttons/form-buttons/form-buttons.component */
    "./src/app/shared/component/buttons/form-buttons/form-buttons.component.ts");

    function NewStudentguardianRegistrationComponent_mat_tab_5_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "smart-div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "emoji_people");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "large-screen");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Children");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r429 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r429.mainForm["controls"].students);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", ctx_r429.noOfActiveStudent);
      }
    }

    function NewStudentguardianRegistrationComponent_mat_tab_5_div_4_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r437 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewStudentguardianRegistrationComponent_mat_tab_5_div_4_div_3_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r437);

          var ctx_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var idxStudent_r433 = ctx_r436.index;
          var student_r432 = ctx_r436.$implicit;

          var ctx_r435 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r435.deleteStudentClicked(idxStudent_r433, student_r432.controls["status"]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete_forever");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewStudentguardianRegistrationComponent_mat_tab_5_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "student-info", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewStudentguardianRegistrationComponent_mat_tab_5_div_4_div_3_Template, 4, 0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var student_r432 = ctx.$implicit;
        var idxStudent_r433 = ctx.index;

        var ctx_r430 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formGroupName", idxStudent_r433);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isComingFromMyProfile", ctx_r430.isComingFromMyProfile)("student", student_r432)("idxStudent", idxStudent_r433)("initialFormValues", ctx_r430.initialFormValues)("studentSubTitle", ctx_r430.studentSubTitle)("focusId", ctx_r430.focusId)("changeModeId", ctx_r430.changeModeId)("isViewMode", ctx_r430.isViewMode)("canSeeSensitiveInfo", ctx_r430.canSeeSensitiveInfo)("editPermissions", ctx_r430.editPermissions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r430.isViewMode && ctx_r430.noOfActiveStudent > 1);
      }
    }

    function NewStudentguardianRegistrationComponent_mat_tab_5_p_5_link_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r440 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "link-button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewStudentguardianRegistrationComponent_mat_tab_5_p_5_link_button_1_Template_link_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r440);

          var ctx_r439 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r439.addStudentClicked();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewStudentguardianRegistrationComponent_mat_tab_5_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewStudentguardianRegistrationComponent_mat_tab_5_p_5_link_button_1_Template, 1, 0, "link-button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r431 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r431.mainForm["controls"].students["controls"].length < 5);
      }
    }

    function NewStudentguardianRegistrationComponent_mat_tab_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewStudentguardianRegistrationComponent_mat_tab_5_ng_template_1_Template, 5, 2, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NewStudentguardianRegistrationComponent_mat_tab_5_div_4_Template, 4, 12, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NewStudentguardianRegistrationComponent_mat_tab_5_p_5_Template, 2, 1, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r424 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r424.mainForm["controls"].students["controls"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r424.isViewMode);
      }
    }

    function NewStudentguardianRegistrationComponent_mat_tab_6_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "smart-div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "wc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "large-screen");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Guardian");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r441 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r441.mainForm["controls"].guardians);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", ctx_r441.noOfActiveGuardian);
      }
    }

    function NewStudentguardianRegistrationComponent_mat_tab_6_div_4_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r449 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewStudentguardianRegistrationComponent_mat_tab_6_div_4_div_3_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r449);

          var ctx_r448 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var idxGuardian_r445 = ctx_r448.index;
          var guardian_r444 = ctx_r448.$implicit;

          var ctx_r447 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r447.deleteGuardianClicked(idxGuardian_r445, guardian_r444.controls["status"]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete_forever");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewStudentguardianRegistrationComponent_mat_tab_6_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "guardian-info", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewStudentguardianRegistrationComponent_mat_tab_6_div_4_div_3_Template, 4, 0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var guardian_r444 = ctx.$implicit;
        var idxGuardian_r445 = ctx.index;

        var ctx_r442 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formGroupName", idxGuardian_r445);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isComingFromMyProfile", ctx_r442.isComingFromMyProfile)("guardian", guardian_r444)("idxGuardian", idxGuardian_r445)("initialFormValues", ctx_r442.initialFormValues)("guardianSubTitle", ctx_r442.guardianSubTitle)("focusId", ctx_r442.focusId)("changeModeId", ctx_r442.changeModeId)("isViewMode", ctx_r442.isViewMode)("canSeeSensitiveInfo", ctx_r442.canSeeSensitiveInfo)("editPermissions", ctx_r442.editPermissions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r442.isViewMode && ctx_r442.noOfActiveGuardian > 1);
      }
    }

    function NewStudentguardianRegistrationComponent_mat_tab_6_p_5_link_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r452 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "link-button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewStudentguardianRegistrationComponent_mat_tab_6_p_5_link_button_1_Template_link_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r452);

          var ctx_r451 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r451.addGuardianClicked();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewStudentguardianRegistrationComponent_mat_tab_6_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewStudentguardianRegistrationComponent_mat_tab_6_p_5_link_button_1_Template, 1, 0, "link-button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r443 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r443.mainForm["controls"].guardians["controls"].length < 10);
      }
    }

    function NewStudentguardianRegistrationComponent_mat_tab_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewStudentguardianRegistrationComponent_mat_tab_6_ng_template_1_Template, 5, 2, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NewStudentguardianRegistrationComponent_mat_tab_6_div_4_Template, 4, 12, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NewStudentguardianRegistrationComponent_mat_tab_6_p_5_Template, 2, 1, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r425 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r425.mainForm["controls"].guardians["controls"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r425.isViewMode);
      }
    }

    function NewStudentguardianRegistrationComponent_mat_tab_7_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "smart-div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "room");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "large-screen");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Permanent Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r453 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r453.mainForm["controls"].address);
      }
    }

    function NewStudentguardianRegistrationComponent_mat_tab_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewStudentguardianRegistrationComponent_mat_tab_7_ng_template_1_Template, 5, 1, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-section", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "form-address-info", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r426 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Permanent Address Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r426.mainForm["controls"].address)("initialFormValues", ctx_r426.initialFormValues == null ? null : ctx_r426.initialFormValues.address)("isViewMode", ctx_r426.isViewMode);
      }
    }

    function NewStudentguardianRegistrationComponent_responsive_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "responsive", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "smart-div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Children/student infromation ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "smart-div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Guardian infromation ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "smart-div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Permanent address infromation ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r427 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gap", "5%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r427.mainForm["controls"].students)("isFormStatus", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r427.mainForm["controls"].guardians)("isFormStatus", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r427.mainForm["controls"].address)("isFormStatus", true);
      }
    }

    function NewStudentguardianRegistrationComponent_form_buttons_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "form-buttons", 30);
      }

      if (rf & 2) {
        var ctx_r428 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r428.mainForm)("isChangeMode", ctx_r428.changeModeId);
      }
    }

    var NewStudentguardianRegistrationComponent =
    /*#__PURE__*/
    function () {
      function NewStudentguardianRegistrationComponent(fb, changeDetector, sharedService, studentGuardianService, plService) {
        _classCallCheck(this, NewStudentguardianRegistrationComponent);

        this.fb = fb;
        this.changeDetector = changeDetector;
        this.sharedService = sharedService;
        this.studentGuardianService = studentGuardianService;
        this.plService = plService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.onSaveSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeModeId = null;
        this.isViewMode = false;
        this.open = true;
        this.stayOnPage = true;
        this.isComingFromMyProfile = false;
        this.tabSelectedIndex = 0;
        this.mainForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_2__["MasterData"];
        this.isLoading = false;
        this.initialFormValues = null;
        this.noOfActiveStudent = 0;
        this.noOfActiveGuardian = 0;
        this.title = "Add Children and their Guardian Details.";
        this.subTitle = "Please provide following details of student and his/her sibling and their guardians.";
        this.studentSubTitle = "Please add following details of 'Children'.";
        this.guardianSubTitle = "Please add following details of 'Guardian'.";
        this.addressSubTitle = "Please add following details of 'Address'.";
      }

      _createClass(NewStudentguardianRegistrationComponent, [{
        key: "checkSensitiveInfoPermissions",
        value: function checkSensitiveInfoPermissions() {
          this.userAccessPolicy = this.plService.getPageEntitlements(4, 2);
          this.editPermissions = this.userAccessPolicy === 2;
          var user = JSON.parse(this.sharedService.loggedInData());
          this.canSeeSensitiveInfo = this.userAccessPolicy === 2 || this.changeModeId === user["_id"]["$oid"];
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.changeModeId);
          this.checkSensitiveInfoPermissions();
          this.setTitleMessages();
          this.mainForm = this.fb.group({
            students: this.fb.array([]),
            guardians: this.fb.array([])
          });
          this.sharedService.setFormCommonFields(this.mainForm);

          if (this.changeModeId) {
            this.populateFromDB();
          } else {
            this.addStudent();
            this.addGuardian();
            this.addAddress();
            this.setActiveStudentGuardianCount();
          }
        }
      }, {
        key: "setTitleMessages",
        value: function setTitleMessages() {
          if (this.changeModeId) {
            this.title = "Update Children and their Guardian Details.";
            this.subTitle = "Please update following details of student and his/her sibling and their guardians.";
            this.studentSubTitle = "Please update following details of 'Children'.";
            this.guardianSubTitle = "Please update following details of 'Guardian'.";
            this.addressSubTitle = "Please update following details of 'Address'.";

            if (this.isViewMode) {
              this.title = "View Children and their Guardian Details.";
              this.subTitle = "View following details of student and his/her sibling and their guardians.";
              this.studentSubTitle = "View following details of 'Children'.";
              this.guardianSubTitle = "View following details of 'Guardian'.";
              this.addressSubTitle = "View following details of 'Address'.";
            }
          }
        }
      }, {
        key: "populateFromDB",
        value: function populateFromDB() {
          var _this4 = this;

          //--- Fill students and guardian information for View/Edit mode from Database
          this.isLoading = true;
          this.studentGuardianService.getStudentGuardian(this.changeModeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (result) {
            _this4.isLoading = false;
            result.forEach(function (element) {
              _this4.initialFormValues = element;

              _this4.mainForm.get('_id').setValue(_this4.initialFormValues._id);

              _this4.mainForm.get('status').setValue(_this4.initialFormValues.status); //--- Fill students for View/Edit mode


              for (var idx = 0; idx < element["students"].length; idx++) {
                var id = element["students"][idx]["_id"];
                var status = element["students"][idx]["status"];

                _this4.addStudent(id, status);
              } //--- Fill guardians for View/Edit mode


              for (var _idx = 0; _idx < element["guardians"].length; _idx++) {
                var _id = element["guardians"][_idx]["_id"];
                var _status = element["guardians"][_idx]["status"];

                _this4.addGuardian(_id, _status);
              }
            }); //--- Fill address for View/Edit mode

            _this4.addAddress();

            _this4.setActiveStudentGuardianCount();
          }, function (error) {
            _this4.isLoading = false;
            console.log(error);
          });
        }
      }, {
        key: "addStudentClicked",
        value: function addStudentClicked() {
          this.addStudent();
          this.sharedService.pageLevelSave("New children form");
          this.noOfActiveStudent++;
        }
      }, {
        key: "addStudent",
        value: function addStudent() {
          var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          this.mainForm.get('students').push(this.sharedService.setFormCommonFields(this.fb.group({
            basicInfo: this.fb.group({}),
            credentialInfo: this.fb.group({}),
            transportInfo: this.fb.group({}),
            academicInfo: this.fb.group({}),
            contactInfo: this.fb.group({}),
            medicalInfo: this.fb.group({}),
            governmentIds: this.fb.group({})
          }), id, status));
        }
      }, {
        key: "addGuardianClicked",
        value: function addGuardianClicked() {
          this.addGuardian();
          this.sharedService.pageLevelSave("New guardian form");
          this.noOfActiveGuardian++;
        }
      }, {
        key: "addGuardian",
        value: function addGuardian() {
          var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          this.mainForm.get('guardians').push(this.sharedService.setFormCommonFields(this.fb.group({
            basicInfo: this.fb.group({}),
            contactInfo: this.fb.group({}),
            credentialInfo: this.fb.group({}),
            occupationInfo: this.fb.group({}),
            governmentIds: this.fb.group({})
          }), id, status));
        }
      }, {
        key: "addAddress",
        value: function addAddress() {
          this.mainForm.addControl("address", this.fb.group({}));
        }
      }, {
        key: "deleteStudentClicked",
        value: function deleteStudentClicked(idx, control) {
          this.permanentDeleteStudent(idx);
        }
      }, {
        key: "permanentDeleteStudent",
        value: function permanentDeleteStudent(idx) {
          var _this5 = this;

          var dialogRef = this.sharedService.openConfirmDialog();
          dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (confirmed) {
            if (confirmed) {
              _this5.mainForm.get('students').removeAt(idx);

              _this5.noOfActiveStudent--;

              _this5.sharedService.pageLevelDelete("Student/Children");
            }
          });
        }
      }, {
        key: "deleteGuardianClicked",
        value: function deleteGuardianClicked(idx, control) {
          this.permanentDeleteGuardian(idx);
        }
      }, {
        key: "permanentDeleteGuardian",
        value: function permanentDeleteGuardian(idx) {
          var _this6 = this;

          var dialogRef = this.sharedService.openConfirmDialog();
          dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (confirmed) {
            if (confirmed) {
              _this6.mainForm.get('guardians').removeAt(idx);

              _this6.noOfActiveGuardian--;

              _this6.sharedService.pageLevelDelete("Guardian");
            }
          });
        }
      }, {
        key: "setActiveStudentGuardianCount",
        value: function setActiveStudentGuardianCount() {
          this.noOfActiveGuardian = 0;
          this.noOfActiveStudent = 0;
          var guardiansArray = this.mainForm.controls["guardians"];
          var studentsArray = this.mainForm.controls["students"];

          for (var idx = 0; idx < guardiansArray.length; idx++) {
            var gp = guardiansArray.controls[idx];

            if (gp.get('status').value === 1) {
              this.noOfActiveGuardian++;
            }
          }

          for (var _idx2 = 0; _idx2 < studentsArray.length; _idx2++) {
            var _gp = studentsArray.controls[_idx2];

            if (_gp.get('status').value === 1) {
              this.noOfActiveStudent++;
            }
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(event) {
          var _this7 = this;

          this.mainForm.markAllAsTouched();
          event.preventDefault();
          event.stopPropagation();

          if (this.mainForm.valid) {
            this.isLoading = true;
            this.studentGuardianService.studentGuardianRegistration(this.mainForm.getRawValue(), this.changeModeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (result) {
              _this7.isLoading = false;

              if (result.isSuccess) {
                _this7.onSaveSuccess.emit(true);

                _this7.sharedService.openSnackBar(result.message, "x", "success");

                if (!_this7.isComingFromMyProfile) {
                  _this7.sharedService.resetFormControls(_this7.mainForm);
                }
              } else {
                _this7.sharedService.openSnackBar(result.message, "x", "fail");
              }
            }, function (error) {
              _this7.isLoading = false;
              console.log(error);
            });
          } else {
            this.sharedService.openSnackBar("Some fields are invalid. Please fill them properly.", "x", "fail");
          }
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.changeDetector.detectChanges();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next(true);
          this.unsubscribe$.complete();
        }
      }]);

      return NewStudentguardianRegistrationComponent;
    }();

    NewStudentguardianRegistrationComponent.ɵfac = function NewStudentguardianRegistrationComponent_Factory(t) {
      return new (t || NewStudentguardianRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_guardian_service__WEBPACK_IMPORTED_MODULE_6__["StudentGuardianService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_7__["PostLoginService"]));
    };

    NewStudentguardianRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewStudentguardianRegistrationComponent,
      selectors: [["app-new-student-guardian-registration"]],
      inputs: {
        changeModeId: "changeModeId",
        focusId: "focusId",
        isViewMode: "isViewMode",
        open: "open",
        stayOnPage: "stayOnPage",
        roleId: "roleId",
        isComingFromMyProfile: "isComingFromMyProfile",
        tabSelectedIndex: "tabSelectedIndex"
      },
      outputs: {
        onSaveSuccess: "onSaveSuccess"
      },
      decls: 11,
      vars: 15,
      consts: [[1, "gridview-label"], [3, "loading", "header", "title", "subTitle", "cardButtons"], [3, "formGroup", "ngSubmit"], [3, "backgroundColor", "selectedIndex", "selectedIndexChange"], [4, "ngIf"], ["class", "formStatus", 3, "gap", 4, "ngIf"], [3, "form", "isChangeMode", 4, "ngIf"], ["mat-tab-label", ""], ["formArrayName", "students"], ["class", "dynamicSection", 4, "ngFor", "ngForOf"], ["highlighPass", "true", 3, "form"], ["matBadgePosition", "before", "matBadgeColor", "default", "matBadgeOverlap", "false", 1, "example-tab-icon", 3, "matBadge"], [1, "dynamicSection"], [3, "formGroupName"], [3, "isComingFromMyProfile", "student", "idxStudent", "initialFormValues", "studentSubTitle", "focusId", "changeModeId", "isViewMode", "canSeeSensitiveInfo", "editPermissions"], ["class", "rt", 4, "ngIf"], [1, "rt"], ["type", "button", "mat-raised-button", "", 1, "delete-button", 3, "click"], ["matSuffix", ""], ["title", "Add more students", 3, "click", 4, "ngIf"], ["title", "Add more students", 3, "click"], ["formArrayName", "guardians"], [3, "isComingFromMyProfile", "guardian", "idxGuardian", "initialFormValues", "guardianSubTitle", "focusId", "changeModeId", "isViewMode", "canSeeSensitiveInfo", "editPermissions"], ["title", "Add more guardians", 3, "click", 4, "ngIf"], ["title", "Add more guardians", 3, "click"], [3, "title"], [3, "form", "initialFormValues", "isViewMode"], [1, "formStatus", 3, "gap"], ["highlighPass", "true", 3, "form", "isFormStatus"], [1, "fill-space"], [3, "form", "isChangeMode"]],
      template: function NewStudentguardianRegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewStudentguardianRegistrationComponent_Template_form_ngSubmit_3_listener($event) {
            return ctx.onSubmit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab-group", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function NewStudentguardianRegistrationComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) {
            return ctx.tabSelectedIndex = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NewStudentguardianRegistrationComponent_mat_tab_5_Template, 6, 2, "mat-tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NewStudentguardianRegistrationComponent_mat_tab_6_Template, 6, 2, "mat-tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewStudentguardianRegistrationComponent_mat_tab_7_Template, 8, 4, "mat-tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NewStudentguardianRegistrationComponent_responsive_8_Template, 11, 7, "responsive", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NewStudentguardianRegistrationComponent_form_buttons_9_Template, 1, 2, "form-buttons", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.isLoading)("header", false)("title", ctx.title)("subTitle", ctx.subTitle)("cardButtons", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mainForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backgroundColor", "primary")("@.disabled", true)("selectedIndex", ctx.tabSelectedIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainForm["controls"].students);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainForm["controls"].guardians);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainForm["controls"].address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isViewMode && false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editPermissions && !ctx.isViewMode);
        }
      },
      directives: [_shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _shared_component_boxes_smart_div_smart_div_component__WEBPACK_IMPORTED_MODULE_11__["SmartDivComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadge"], _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_14__["LargeScreenComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _student_info_student_info_component__WEBPACK_IMPORTED_MODULE_15__["StudentInfoComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatSuffix"], _shared_component_buttons_link_button_link_button_component__WEBPACK_IMPORTED_MODULE_18__["LinkButtonComponent"], _guardian_info_guardian_info_component__WEBPACK_IMPORTED_MODULE_19__["GuardianInfoComponent"], _shared_component_boxes_section_section_component__WEBPACK_IMPORTED_MODULE_20__["SectionComponent"], _shared_component_form_templates_form_address_info_form_address_info_component__WEBPACK_IMPORTED_MODULE_21__["FormAddressInfoComponent"], _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_22__["ResponsiveComponent"], _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_23__["FormButtonsComponent"]],
      styles: [".dynamicSection{\r\npadding-bottom: 25px;\r\nmargin-bottom: 20px;\r\nborder-bottom: 0px;\r\nborder-bottom-style: dotted;\r\nborder-bottom-color:whitesmoke;\r\n}\r\n\r\n.deleteButton{\r\n    font-weight: bold;\r\n    font-size: 25px;\r\n    color: rgb(243, 50, 50);\r\n    cursor: pointer;\r\n}\r\n\r\n.count{\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n}\r\n\r\n.from-db{\r\n    background-color: rgba(240, 220, 80, 0.145) !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi9zdHVkZW50LWd1YXJkaWFuL25ldy1zdHVkZW50LWd1YXJkaWFuLXJlZ2lzdHJhdGlvbi9uZXctc3R1ZGVudC1ndWFyZGlhbi1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLDJCQUEyQjtBQUMzQiw4QkFBOEI7QUFDOUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQiLCJmaWxlIjoic3JjL2FwcC9wb3N0LWxvZ2luL3N0dWRlbnQtZ3VhcmRpYW4vbmV3LXN0dWRlbnQtZ3VhcmRpYW4tcmVnaXN0cmF0aW9uL25ldy1zdHVkZW50LWd1YXJkaWFuLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmR5bmFtaWNTZWN0aW9ue1xyXG5wYWRkaW5nLWJvdHRvbTogMjVweDtcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxuYm9yZGVyLWJvdHRvbTogMHB4O1xyXG5ib3JkZXItYm90dG9tLXN0eWxlOiBkb3R0ZWQ7XHJcbmJvcmRlci1ib3R0b20tY29sb3I6d2hpdGVzbW9rZTtcclxufVxyXG5cclxuLmRlbGV0ZUJ1dHRvbntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IHJnYigyNDMsIDUwLCA1MCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb3VudHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZnJvbS1kYntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyMjAsIDgwLCAwLjE0NSkgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewStudentguardianRegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-student-guardian-registration',
          templateUrl: './new-student-guardian-registration.component.html',
          styleUrls: ['./new-student-guardian-registration.component.css'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }, {
          type: _services_student_guardian_service__WEBPACK_IMPORTED_MODULE_6__["StudentGuardianService"]
        }, {
          type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_7__["PostLoginService"]
        }];
      }, {
        onSaveSuccess: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        changeModeId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        focusId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isViewMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        stayOnPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        roleId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isComingFromMyProfile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tabSelectedIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/post-login/student-guardian/new-student-guardian-registration/student-info/student-info.component.ts":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/post-login/student-guardian/new-student-guardian-registration/student-info/student-info.component.ts ***!
    \**********************************************************************************************************************/

  /*! exports provided: StudentInfoComponent */

  /***/
  function srcAppPostLoginStudentGuardianNewStudentGuardianRegistrationStudentInfoStudentInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentInfoComponent", function () {
      return StudentInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/component/boxes/card/card.component */
    "./src/app/shared/component/boxes/card/card.component.ts");
    /* harmony import */


    var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/component/boxes/responsive/responsive.component */
    "./src/app/shared/component/boxes/responsive/responsive.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _shared_component_form_templates_form_profile_pic_form_profile_pic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/component/form-templates/form-profile-pic/form-profile-pic.component */
    "./src/app/shared/component/form-templates/form-profile-pic/form-profile-pic.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_component_dropdowns_ddl_status_ddl_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/component/dropdowns/ddl-status/ddl-status.component */
    "./src/app/shared/component/dropdowns/ddl-status/ddl-status.component.ts");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/fesm2015/expansion.js");
    /* harmony import */


    var _shared_component_boxes_smart_div_smart_div_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/component/boxes/smart-div/smart-div.component */
    "./src/app/shared/component/boxes/smart-div/smart-div.component.ts");
    /* harmony import */


    var _shared_component_form_templates_form_user_basic_info_form_user_basic_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../shared/component/form-templates/form-user-basic-info/form-user-basic-info.component */
    "./src/app/shared/component/form-templates/form-user-basic-info/form-user-basic-info.component.ts");
    /* harmony import */


    var _student_academic_info_student_academic_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../student-academic-info/student-academic-info.component */
    "./src/app/post-login/student-guardian/student-academic-info/student-academic-info.component.ts");
    /* harmony import */


    var _shared_module_transport_route_ddl_route_ddl_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../shared/module/transport/route-ddl/route-ddl.component */
    "./src/app/shared/module/transport/route-ddl/route-ddl.component.ts");
    /* harmony import */


    var _shared_component_form_templates_form_contact_info_form_contact_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../shared/component/form-templates/form-contact-info/form-contact-info.component */
    "./src/app/shared/component/form-templates/form-contact-info/form-contact-info.component.ts");
    /* harmony import */


    var _shared_component_form_templates_form_user_medical_info_form_user_medical_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../shared/component/form-templates/form-user-medical-info/form-user-medical-info.component */
    "./src/app/shared/component/form-templates/form-user-medical-info/form-user-medical-info.component.ts");
    /* harmony import */


    var _shared_component_form_templates_form_user_government_ids_form_user_government_ids_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../../shared/component/form-templates/form-user-government-ids/form-user-government-ids.component */
    "./src/app/shared/component/form-templates/form-user-government-ids/form-user-government-ids.component.ts");
    /* harmony import */


    var _shared_component_buttons_link_button_link_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../shared/component/buttons/link-button/link-button.component */
    "./src/app/shared/component/buttons/link-button/link-button.component.ts");
    /* harmony import */


    var _shared_component_form_templates_form_user_credentials_form_user_credentials_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../../shared/component/form-templates/form-user-credentials/form-user-credentials.component */
    "./src/app/shared/component/form-templates/form-user-credentials/form-user-credentials.component.ts");
    /* harmony import */


    var _shared_component_user_small_pic_user_small_pic_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../../shared/component/user-small-pic/user-small-pic.component */
    "./src/app/shared/component/user-small-pic/user-small-pic.component.ts");
    /* harmony import */


    var _shared_module_rating_student_whole_rating_student_whole_rating_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../../../shared/module/rating/student-whole-rating/student-whole-rating.component */
    "./src/app/shared/module/rating/student-whole-rating/student-whole-rating.component.ts");

    function StudentInfoComponent_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r496 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "link-button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentInfoComponent_ng_container_5_Template_link_button_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r496);

          var ctx_r495 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r495.viewStudentRatings();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function StudentInfoComponent_mat_expansion_panel_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "smart-div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "form-user-credentials", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r493 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r493.student.controls["credentialInfo"])("icon", "security");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r493.student.controls["basicInfo"].controls["firstName"] == null ? null : ctx_r493.student.controls["basicInfo"].controls["firstName"].value, " Credential Details ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r493.student.controls["credentialInfo"])("isViewMode", ctx_r493.isViewMode)("initialFormValues", (ctx_r493.initialFormValues == null ? null : ctx_r493.initialFormValues.students.length) > ctx_r493.idxStudent && (ctx_r493.initialFormValues == null ? null : ctx_r493.initialFormValues.students[ctx_r493.idxStudent].credentialInfo));
      }
    }

    function StudentInfoComponent_card_46_Template(rf, ctx) {
      if (rf & 1) {
        var _r498 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteCardEvent", function StudentInfoComponent_card_46_Template_card_deleteCardEvent_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r498);

          var ctx_r497 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r497.isViewRating = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "user-small-pic", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-student-whole-rating", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r494 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popUpMode", true)("refreshButton", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", ctx_r494.selectedStudentId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("studentId", ctx_r494.selectedStudentId);
      }
    }

    var _c0 = ["*"];

    var StudentInfoComponent =
    /*#__PURE__*/
    function () {
      function StudentInfoComponent() {
        _classCallCheck(this, StudentInfoComponent);

        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"];
      }

      _createClass(StudentInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "viewStudentRatings",
        value: function viewStudentRatings() {
          this.selectedStudentId = this.student.get('_id').value;
          this.isViewRating = true;
        }
      }]);

      return StudentInfoComponent;
    }();

    StudentInfoComponent.ɵfac = function StudentInfoComponent_Factory(t) {
      return new (t || StudentInfoComponent)();
    };

    StudentInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentInfoComponent,
      selectors: [["student-info"]],
      inputs: {
        student: "student",
        idxStudent: "idxStudent",
        initialFormValues: "initialFormValues",
        studentSubTitle: "studentSubTitle",
        focusId: "focusId",
        isViewMode: "isViewMode",
        changeModeId: "changeModeId",
        canSeeSensitiveInfo: "canSeeSensitiveInfo",
        editPermissions: "editPermissions",
        isComingFromMyProfile: "isComingFromMyProfile"
      },
      ngContentSelectors: _c0,
      decls: 47,
      vars: 50,
      consts: [[3, "childCard", "refreshButton", "title", "subTitle", "open"], ["fxFlex", "", 1, "center"], ["fxLayoutAlign", "end", 3, "form", "isViewMode"], [4, "ngIf"], ["fxFlex", "2 2 auto"], [3, "form", "isViewMode", "value"], ["hideToggle", "true", 3, "multi"], [1, "no-shadow"], [3, "form", "icon"], ["minAge", "2", 3, "form", "isViewMode", "initialFormValues"], ["class", "no-shadow", 4, "ngIf"], [3, "form", "isViewMode", "initialFormValues"], ["title", "Student Ratings", 3, "popUpMode", "refreshButton", "deleteCardEvent", 4, "ngIf"], ["icon", "star", "title", "View Ratings", 3, "click"], ["title", "Student Ratings", 3, "popUpMode", "refreshButton", "deleteCardEvent"], ["cardHeader", "", 3, "userId"], [3, "studentId"]],
      template: function StudentInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "responsive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "form-profile-pic", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StudentInfoComponent_ng_container_5_Template, 4, 0, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-ddl-status", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-accordion", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-expansion-panel", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "smart-div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "form-user-basic-info", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, StudentInfoComponent_mat_expansion_panel_15_Template, 6, 6, "mat-expansion-panel", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-expansion-panel", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "smart-div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-student-academic-info", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-expansion-panel", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "smart-div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-route-ddl", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-expansion-panel", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "smart-div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "form-contact-info", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-expansion-panel", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "smart-div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "form-user-medical-info", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-expansion-panel", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "smart-div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "form-user-government-ids", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, StudentInfoComponent_card_46_Template, 3, 4, "card", 12);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childCard", true)("refreshButton", false)("title", "Student- " + (ctx.student.controls["basicInfo"].controls["firstName"] == null ? null : ctx.student.controls["basicInfo"].controls["firstName"].value) + " " + (ctx.student.controls["basicInfo"].controls["lastName"] == null ? null : ctx.student.controls["basicInfo"].controls["lastName"].value))("subTitle", ctx.studentSubTitle)("open", ctx.student.controls["_id"].value["$oid"] === ctx.focusId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.student)("isViewMode", ctx.isViewMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changeModeId || ctx.isViewMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.student)("isViewMode", ctx.isViewMode)("value", (ctx.initialFormValues == null ? null : ctx.initialFormValues.students.length) > ctx.idxStudent && (ctx.initialFormValues == null ? null : ctx.initialFormValues.students[ctx.idxStudent].status));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multi", ctx.masterData.expendMultiple);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.student.controls["basicInfo"])("icon", "face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.student.controls["basicInfo"].controls["firstName"] == null ? null : ctx.student.controls["basicInfo"].controls["firstName"].value, " Basic Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.student.controls["basicInfo"])("isViewMode", ctx.isViewMode)("initialFormValues", (ctx.initialFormValues == null ? null : ctx.initialFormValues.students.length) > ctx.idxStudent && (ctx.initialFormValues == null ? null : ctx.initialFormValues.students[ctx.idxStudent].basicInfo));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canSeeSensitiveInfo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.student.controls["academicInfo"])("icon", "school");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.student.controls["basicInfo"].controls["firstName"] == null ? null : ctx.student.controls["basicInfo"].controls["firstName"].value, " Academic Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.student.controls["academicInfo"])("isViewMode", ctx.isViewMode || ctx.isComingFromMyProfile)("initialFormValues", (ctx.initialFormValues == null ? null : ctx.initialFormValues.students.length) > ctx.idxStudent && (ctx.initialFormValues == null ? null : ctx.initialFormValues.students[ctx.idxStudent].academicInfo));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.student.controls["transportInfo"])("icon", "directions_bus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.student.controls["basicInfo"].controls["firstName"] == null ? null : ctx.student.controls["basicInfo"].controls["firstName"].value, " Transport Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.student.controls["transportInfo"])("isViewMode", ctx.isViewMode || ctx.isComingFromMyProfile)("initialFormValues", (ctx.initialFormValues == null ? null : ctx.initialFormValues.students.length) > ctx.idxStudent && (ctx.initialFormValues == null ? null : ctx.initialFormValues.students[ctx.idxStudent].transportInfo));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.student.controls["contactInfo"])("icon", "contact_phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.student.controls["basicInfo"].controls["firstName"] == null ? null : ctx.student.controls["basicInfo"].controls["firstName"].value, " Contact Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.student.controls["contactInfo"])("isViewMode", ctx.isViewMode)("initialFormValues", (ctx.initialFormValues == null ? null : ctx.initialFormValues.students.length) > ctx.idxStudent && (ctx.initialFormValues == null ? null : ctx.initialFormValues.students[ctx.idxStudent].contactInfo));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.student.controls["medicalInfo"])("icon", "local_hospital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.student.controls["basicInfo"].controls["firstName"] == null ? null : ctx.student.controls["basicInfo"].controls["firstName"].value, " Medical Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.student.controls["medicalInfo"])("isViewMode", ctx.isViewMode)("initialFormValues", (ctx.initialFormValues == null ? null : ctx.initialFormValues.students.length) > ctx.idxStudent && (ctx.initialFormValues == null ? null : ctx.initialFormValues.students[ctx.idxStudent].medicalInfo));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.student.controls["governmentIds"])("icon", "local_activity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.student.controls["basicInfo"].controls["firstName"] == null ? null : ctx.student.controls["basicInfo"].controls["firstName"].value, " Government Ids ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.student.controls["governmentIds"])("isViewMode", ctx.isViewMode)("initialFormValues", (ctx.initialFormValues == null ? null : ctx.initialFormValues.students.length) > ctx.idxStudent && (ctx.initialFormValues == null ? null : ctx.initialFormValues.students[ctx.idxStudent].governmentIds));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isViewRating);
        }
      },
      directives: [_shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_3__["ResponsiveComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _shared_component_form_templates_form_profile_pic_form_profile_pic_component__WEBPACK_IMPORTED_MODULE_5__["FormProfilePicComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_component_dropdowns_ddl_status_ddl_status_component__WEBPACK_IMPORTED_MODULE_7__["DdlStatusComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelTitle"], _shared_component_boxes_smart_div_smart_div_component__WEBPACK_IMPORTED_MODULE_9__["SmartDivComponent"], _shared_component_form_templates_form_user_basic_info_form_user_basic_info_component__WEBPACK_IMPORTED_MODULE_10__["FormUserBasicInfoComponent"], _student_academic_info_student_academic_info_component__WEBPACK_IMPORTED_MODULE_11__["StudentAcademicInfoComponent"], _shared_module_transport_route_ddl_route_ddl_component__WEBPACK_IMPORTED_MODULE_12__["RouteDdlComponent"], _shared_component_form_templates_form_contact_info_form_contact_info_component__WEBPACK_IMPORTED_MODULE_13__["FormContactInfoComponent"], _shared_component_form_templates_form_user_medical_info_form_user_medical_info_component__WEBPACK_IMPORTED_MODULE_14__["FormUserMedicalInfoComponent"], _shared_component_form_templates_form_user_government_ids_form_user_government_ids_component__WEBPACK_IMPORTED_MODULE_15__["FormUserGovernmentIdsComponent"], _shared_component_buttons_link_button_link_button_component__WEBPACK_IMPORTED_MODULE_16__["LinkButtonComponent"], _shared_component_form_templates_form_user_credentials_form_user_credentials_component__WEBPACK_IMPORTED_MODULE_17__["FormUserCredentialsComponent"], _shared_component_user_small_pic_user_small_pic_component__WEBPACK_IMPORTED_MODULE_18__["UserSmallPicComponent"], _shared_module_rating_student_whole_rating_student_whole_rating_component__WEBPACK_IMPORTED_MODULE_19__["StudentWholeRatingComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vc3R1ZGVudC1ndWFyZGlhbi9uZXctc3R1ZGVudC1ndWFyZGlhbi1yZWdpc3RyYXRpb24vc3R1ZGVudC1pbmZvL3N0dWRlbnQtaW5mby5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'student-info',
          templateUrl: './student-info.component.html',
          styleUrls: ['./student-info.component.css']
        }]
      }], function () {
        return [];
      }, {
        student: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        idxStudent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        initialFormValues: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        studentSubTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        focusId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isViewMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        changeModeId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        canSeeSensitiveInfo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        editPermissions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isComingFromMyProfile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/post-login/student-guardian/services/guardian.service.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/post-login/student-guardian/services/guardian.service.ts ***!
    \**************************************************************************/

  /*! exports provided: GuardianService */

  /***/
  function srcAppPostLoginStudentGuardianServicesGuardianServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuardianService", function () {
      return GuardianService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");

    var GuardianService =
    /*#__PURE__*/
    function () {
      function GuardianService(_http, _storage, _sharedService) {
        _classCallCheck(this, GuardianService);

        this._http = _http;
        this._storage = _storage;
        this._sharedService = _sharedService;
        this.apiPrefix = "api/guardian/";
      }

      _createClass(GuardianService, [{
        key: "getGuardianList",
        value: function getGuardianList(searchParams) {
          return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "getlist", searchParams);
        }
      }, {
        key: "deleteGuardian",
        value: function deleteGuardian(id) {
          return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "Deactivate?id=" + this._sharedService.serializeMongoObjectId(id));
        }
      }]);

      return GuardianService;
    }();

    GuardianService.ɵfac = function GuardianService_Factory(t) {
      return new (t || GuardianService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]));
    };

    GuardianService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GuardianService,
      factory: GuardianService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuardianService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
        }, {
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/post-login/student-guardian/services/student-guardian.service.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/post-login/student-guardian/services/student-guardian.service.ts ***!
    \**********************************************************************************/

  /*! exports provided: StudentGuardianService */

  /***/
  function srcAppPostLoginStudentGuardianServicesStudentGuardianServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentGuardianService", function () {
      return StudentGuardianService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");

    var StudentGuardianService =
    /*#__PURE__*/
    function () {
      function StudentGuardianService(_http, _storage, _sharedService) {
        _classCallCheck(this, StudentGuardianService);

        this._http = _http;
        this._storage = _storage;
        this._sharedService = _sharedService;
        this.apiPrefix = "api/StudentGuardian/";
      }

      _createClass(StudentGuardianService, [{
        key: "studentGuardianRegistration",
        value: function studentGuardianRegistration(studentParentdata) {
          var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "saveStudentGuardian", studentParentdata);
        }
      }, {
        key: "getStudentGuardian",
        value: function getStudentGuardian(id) {
          return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "getStudentGuardian?id=" + this._sharedService.serializeMongoObjectId(id));
        }
      }, {
        key: "deleteStudentGuardian",
        value: function deleteStudentGuardian(id) {
          return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "DeleteStudentGuardian?id=" + this._sharedService.serializeMongoObjectId(id));
        }
      }]);

      return StudentGuardianService;
    }();

    StudentGuardianService.ɵfac = function StudentGuardianService_Factory(t) {
      return new (t || StudentGuardianService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]));
    };

    StudentGuardianService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StudentGuardianService,
      factory: StudentGuardianService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentGuardianService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
        }, {
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/post-login/student-guardian/services/student.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/post-login/student-guardian/services/student.service.ts ***!
    \*************************************************************************/

  /*! exports provided: StudentService */

  /***/
  function srcAppPostLoginStudentGuardianServicesStudentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentService", function () {
      return StudentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");

    var StudentService =
    /*#__PURE__*/
    function () {
      function StudentService(_http, _storage, _sharedService) {
        _classCallCheck(this, StudentService);

        this._http = _http;
        this._storage = _storage;
        this._sharedService = _sharedService;
        this.apiPrefix = "api/student/";
      }

      _createClass(StudentService, [{
        key: "getStudentList",
        value: function getStudentList(searchParams) {
          return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "getlist", searchParams);
        }
      }, {
        key: "deleteStudent",
        value: function deleteStudent(id) {
          return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "Deactivate?id=" + this._sharedService.serializeMongoObjectId(id));
        }
      }]);

      return StudentService;
    }();

    StudentService.ɵfac = function StudentService_Factory(t) {
      return new (t || StudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]));
    };

    StudentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StudentService,
      factory: StudentService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
        }, {
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/post-login/student-guardian/student-academic-info/student-academic-info.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/post-login/student-guardian/student-academic-info/student-academic-info.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: StudentAcademicInfoComponent */

  /***/
  function srcAppPostLoginStudentGuardianStudentAcademicInfoStudentAcademicInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentAcademicInfoComponent", function () {
      return StudentAcademicInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/shared/component/dynamic-form/field.interface */
    "./src/app/shared/component/dynamic-form/field.interface.ts");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/component/dynamic-form/dynamic-form/dynamic-form.component */
    "./src/app/shared/component/dynamic-form/dynamic-form/dynamic-form.component.ts");
    /* harmony import */


    var _shared_module_school_class_section_ddl_class_section_ddl_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/module/school/class-section-ddl/class-section-ddl.component */
    "./src/app/shared/module/school/class-section-ddl/class-section-ddl.component.ts");

    var StudentAcademicInfoComponent =
    /*#__PURE__*/
    function () {
      function StudentAcademicInfoComponent(sharedService) {
        _classCallCheck(this, StudentAcademicInfoComponent);

        this.sharedService = sharedService;
        this.initialFormValues = null;
        this.isViewMode = false;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_2__["MasterData"];
      }

      _createClass(StudentAcademicInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fieldsConfig = [{
            isViewMode: this.isViewMode,
            type: "input",
            label: "Registration No",
            inputType: "text",
            name: "registrationNo",
            icon: "receipt",
            validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
          }, {
            isViewMode: this.isViewMode,
            type: "input",
            label: "Roll No",
            inputType: "text",
            name: "rollNo",
            icon: "emoji_people",
            validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
          }];
          this.fieldsConfig = this.sharedService.setFormInitialValueForChangeMode(this.fieldsConfig, this.initialFormValues);
        }
      }]);

      return StudentAcademicInfoComponent;
    }();

    StudentAcademicInfoComponent.ɵfac = function StudentAcademicInfoComponent_Factory(t) {
      return new (t || StudentAcademicInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]));
    };

    StudentAcademicInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentAcademicInfoComponent,
      selectors: [["app-student-academic-info"]],
      inputs: {
        form: "form",
        initialFormValues: "initialFormValues",
        fieldsConfig: "fieldsConfig",
        isViewMode: "isViewMode"
      },
      decls: 2,
      vars: 7,
      consts: [[3, "form", "fields", "addEmptyDiv"], [3, "isViewMode", "Required", "form", "initialFormValues"]],
      template: function StudentAcademicInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dynamic-form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-class-section-ddl", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.form)("fields", ctx.fieldsConfig)("addEmptyDiv", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isViewMode", ctx.isViewMode)("Required", true)("form", ctx.form)("initialFormValues", ctx.initialFormValues);
        }
      },
      directives: [_shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"], _shared_module_school_class_section_ddl_class_section_ddl_component__WEBPACK_IMPORTED_MODULE_5__["ClassSectionDdlComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vc3R1ZGVudC1ndWFyZGlhbi9zdHVkZW50LWFjYWRlbWljLWluZm8vc3R1ZGVudC1hY2FkZW1pYy1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentAcademicInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-student-academic-info',
          templateUrl: './student-academic-info.component.html',
          styleUrls: ['./student-academic-info.component.css']
        }]
      }], function () {
        return [{
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }];
      }, {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        initialFormValues: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fieldsConfig: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isViewMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/post-login/student-guardian/student-guardian-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/post-login/student-guardian/student-guardian-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: StudentGuardianRoutingModule */

  /***/
  function srcAppPostLoginStudentGuardianStudentGuardianRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentGuardianRoutingModule", function () {
      return StudentGuardianRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _guardian_management_guardian_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./guardian-management/guardian-management.component */
    "./src/app/post-login/student-guardian/guardian-management/guardian-management.component.ts");
    /* harmony import */


    var _new_student_guardian_registration_new_student_guardian_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./new-student-guardian-registration/new-student-guardian-registration.component */
    "./src/app/post-login/student-guardian/new-student-guardian-registration/new-student-guardian-registration.component.ts");
    /* harmony import */


    var _student_management_student_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./student-management/student-management.component */
    "./src/app/post-login/student-guardian/student-management/student-management.component.ts");
    /* harmony import */


    var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-profile/my-profile.component */
    "./src/app/post-login/student-guardian/my-profile/my-profile.component.ts");

    var routes = [{
      path: 'newStuGuardianReg',
      component: _new_student_guardian_registration_new_student_guardian_registration_component__WEBPACK_IMPORTED_MODULE_3__["NewStudentguardianRegistrationComponent"],
      outlet: 'postLoginOutlet'
    }, {
      path: 'myProfile',
      component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_5__["MyProfileComponent"],
      outlet: 'postLoginOutlet'
    }, {
      path: 'guardianMgmt',
      component: _guardian_management_guardian_management_component__WEBPACK_IMPORTED_MODULE_2__["GuardianManagementComponent"],
      outlet: 'postLoginOutlet'
    }, {
      path: 'studentMgmt',
      component: _student_management_student_management_component__WEBPACK_IMPORTED_MODULE_4__["StudentManagementComponent"],
      outlet: 'postLoginOutlet'
    }];

    var StudentGuardianRoutingModule = function StudentGuardianRoutingModule() {
      _classCallCheck(this, StudentGuardianRoutingModule);
    };

    StudentGuardianRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StudentGuardianRoutingModule
    });
    StudentGuardianRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function StudentGuardianRoutingModule_Factory(t) {
        return new (t || StudentGuardianRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentGuardianRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentGuardianRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/post-login/student-guardian/student-guardian.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/post-login/student-guardian/student-guardian.module.ts ***!
    \************************************************************************/

  /*! exports provided: StudentGuardianModule */

  /***/
  function srcAppPostLoginStudentGuardianStudentGuardianModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentGuardianModule", function () {
      return StudentGuardianModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _guardian_list_guardian_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guardian-list/guardian-list.component */
    "./src/app/post-login/student-guardian/guardian-list/guardian-list.component.ts");
    /* harmony import */


    var _services_guardian_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/guardian.service */
    "./src/app/post-login/student-guardian/services/guardian.service.ts");
    /* harmony import */


    var _guardian_management_guardian_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./guardian-management/guardian-management.component */
    "./src/app/post-login/student-guardian/guardian-management/guardian-management.component.ts");
    /* harmony import */


    var _new_student_guardian_registration_new_student_guardian_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./new-student-guardian-registration/new-student-guardian-registration.component */
    "./src/app/post-login/student-guardian/new-student-guardian-registration/new-student-guardian-registration.component.ts");
    /* harmony import */


    var _student_guardian_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./student-guardian-routing.module */
    "./src/app/post-login/student-guardian/student-guardian-routing.module.ts");
    /* harmony import */


    var _services_student_guardian_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/student-guardian.service */
    "./src/app/post-login/student-guardian/services/student-guardian.service.ts");
    /* harmony import */


    var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./student-list/student-list.component */
    "./src/app/post-login/student-guardian/student-list/student-list.component.ts");
    /* harmony import */


    var _student_management_student_management_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./student-management/student-management.component */
    "./src/app/post-login/student-guardian/student-management/student-management.component.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/student.service */
    "./src/app/post-login/student-guardian/services/student.service.ts");
    /* harmony import */


    var _student_academic_info_student_academic_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./student-academic-info/student-academic-info.component */
    "./src/app/post-login/student-guardian/student-academic-info/student-academic-info.component.ts");
    /* harmony import */


    var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./my-profile/my-profile.component */
    "./src/app/post-login/student-guardian/my-profile/my-profile.component.ts");
    /* harmony import */


    var _new_student_guardian_registration_student_info_student_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./new-student-guardian-registration/student-info/student-info.component */
    "./src/app/post-login/student-guardian/new-student-guardian-registration/student-info/student-info.component.ts");
    /* harmony import */


    var _new_student_guardian_registration_guardian_info_guardian_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./new-student-guardian-registration/guardian-info/guardian-info.component */
    "./src/app/post-login/student-guardian/new-student-guardian-registration/guardian-info/guardian-info.component.ts");

    var StudentGuardianModule = function StudentGuardianModule() {
      _classCallCheck(this, StudentGuardianModule);
    };

    StudentGuardianModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StudentGuardianModule
    });
    StudentGuardianModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function StudentGuardianModule_Factory(t) {
        return new (t || StudentGuardianModule)();
      },
      providers: [_services_student_guardian_service__WEBPACK_IMPORTED_MODULE_8__["StudentGuardianService"], _services_guardian_service__WEBPACK_IMPORTED_MODULE_4__["GuardianService"], _services_student_service__WEBPACK_IMPORTED_MODULE_11__["StudentService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _student_guardian_routing_module__WEBPACK_IMPORTED_MODULE_7__["StudentGuardianRoutingModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentGuardianModule, {
        declarations: [_new_student_guardian_registration_new_student_guardian_registration_component__WEBPACK_IMPORTED_MODULE_6__["NewStudentguardianRegistrationComponent"], _guardian_list_guardian_list_component__WEBPACK_IMPORTED_MODULE_3__["GuardianListComponent"], _guardian_management_guardian_management_component__WEBPACK_IMPORTED_MODULE_5__["GuardianManagementComponent"], _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_9__["StudentListComponent"], _student_management_student_management_component__WEBPACK_IMPORTED_MODULE_10__["StudentManagementComponent"], _student_academic_info_student_academic_info_component__WEBPACK_IMPORTED_MODULE_12__["StudentAcademicInfoComponent"], _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_13__["MyProfileComponent"], _new_student_guardian_registration_student_info_student_info_component__WEBPACK_IMPORTED_MODULE_14__["StudentInfoComponent"], _new_student_guardian_registration_guardian_info_guardian_info_component__WEBPACK_IMPORTED_MODULE_15__["GuardianInfoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _student_guardian_routing_module__WEBPACK_IMPORTED_MODULE_7__["StudentGuardianRoutingModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentGuardianModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_new_student_guardian_registration_new_student_guardian_registration_component__WEBPACK_IMPORTED_MODULE_6__["NewStudentguardianRegistrationComponent"], _guardian_list_guardian_list_component__WEBPACK_IMPORTED_MODULE_3__["GuardianListComponent"], _guardian_management_guardian_management_component__WEBPACK_IMPORTED_MODULE_5__["GuardianManagementComponent"], _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_9__["StudentListComponent"], _student_management_student_management_component__WEBPACK_IMPORTED_MODULE_10__["StudentManagementComponent"], _student_academic_info_student_academic_info_component__WEBPACK_IMPORTED_MODULE_12__["StudentAcademicInfoComponent"], _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_13__["MyProfileComponent"], _new_student_guardian_registration_student_info_student_info_component__WEBPACK_IMPORTED_MODULE_14__["StudentInfoComponent"], _new_student_guardian_registration_guardian_info_guardian_info_component__WEBPACK_IMPORTED_MODULE_15__["GuardianInfoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _student_guardian_routing_module__WEBPACK_IMPORTED_MODULE_7__["StudentGuardianRoutingModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
          providers: [_services_student_guardian_service__WEBPACK_IMPORTED_MODULE_8__["StudentGuardianService"], _services_guardian_service__WEBPACK_IMPORTED_MODULE_4__["GuardianService"], _services_student_service__WEBPACK_IMPORTED_MODULE_11__["StudentService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/post-login/student-guardian/student-list/student-list.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/post-login/student-guardian/student-list/student-list.component.ts ***!
    \************************************************************************************/

  /*! exports provided: StudentListComponent */

  /***/
  function srcAppPostLoginStudentGuardianStudentListStudentListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentListComponent", function () {
      return StudentListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/student.service */
    "./src/app/post-login/student-guardian/services/student.service.ts");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/post-login/post-login.service */
    "./src/app/post-login/post-login.service.ts");
    /* harmony import */


    var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/component/boxes/card/card.component */
    "./src/app/shared/component/boxes/card/card.component.ts");
    /* harmony import */


    var _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/component/boxes/large-screen/large-screen.component */
    "./src/app/shared/component/boxes/large-screen/large-screen.component.ts");
    /* harmony import */


    var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/component/boxes/responsive/responsive.component */
    "./src/app/shared/component/boxes/responsive/responsive.component.ts");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_component_boxes_small_screen_small_screen_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../shared/component/boxes/small-screen/small-screen.component */
    "./src/app/shared/component/boxes/small-screen/small-screen.component.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/fesm2015/paginator.js");
    /* harmony import */


    var _shared_component_user_small_pic_user_small_pic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../shared/component/user-small-pic/user-small-pic.component */
    "./src/app/shared/component/user-small-pic/user-small-pic.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../shared/directives/tool-tip.directive */
    "./src/app/shared/directives/tool-tip.directive.ts");
    /* harmony import */


    var _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../../shared/component/boxes/row/row.component */
    "./src/app/shared/component/boxes/row/row.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _shared_component_form_templates_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../../shared/component/form-templates/user-card/user-card.component */
    "./src/app/shared/component/form-templates/user-card/user-card.component.ts");
    /* harmony import */


    var _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../../../shared/component/boxes/no-record-found/no-record-found.component */
    "./src/app/shared/component/boxes/no-record-found/no-record-found.component.ts");
    /* harmony import */


    var _shared_module_rating_student_whole_rating_student_whole_rating_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../../../shared/module/rating/student-whole-rating/student-whole-rating.component */
    "./src/app/shared/module/rating/student-whole-rating/student-whole-rating.component.ts");
    /* harmony import */


    var _shared_pipe_class_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../../../shared/pipe/class.pipe */
    "./src/app/shared/pipe/class.pipe.ts");
    /* harmony import */


    var _shared_pipe_master_data_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../../../shared/pipe/master-data.pipe */
    "./src/app/shared/pipe/master-data.pipe.ts");
    /* harmony import */


    var _shared_pipe_number_data_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../../../shared/pipe/number-data.pipe */
    "./src/app/shared/pipe/number-data.pipe.ts");

    function StudentListComponent_tr_40_button_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r463 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_tr_40_button_33_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r463);

          var student_r458 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r461 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r461.editClicked(student_r458._id, student_r458.studentId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentListComponent_tr_40_Template(rf, ctx) {
      if (rf & 1) {
        var _r465 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "user-small-pic", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "class");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "masterData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "numberData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "masterData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_tr_40_Template_button_click_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r465);

          var student_r458 = ctx.$implicit;

          var ctx_r464 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r464.ratingClicked(student_r458.studentId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_tr_40_Template_button_click_30_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r465);

          var student_r458 = ctx.$implicit;

          var ctx_r466 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r466.viewClicked(student_r458._id, student_r458.studentId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "visibility");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, StudentListComponent_tr_40_button_33_Template, 3, 0, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var student_r458 = ctx.$implicit;
        var idx_r459 = ctx.index;

        var ctx_r454 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r454.paging.pageIndex * ctx_r454.paging.pageSize + idx_r459 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", student_r458.studentId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r458.basicInfo.firstName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r458.basicInfo.lastName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r458.academicInfo.registrationNo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, student_r458.academicInfo.classId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 13, student_r458.academicInfo.sectionId, "classSections"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 16, student_r458.academicInfo.rollNo));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 18, student_r458.basicInfo.dob));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 20, student_r458.basicInfo.genderId, "gender"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r454.editPermissions);
      }
    }

    function StudentListComponent_ng_container_42_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r473 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_ng_container_42_button_13_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r473);

          var student_r467 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r471 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r471.editClicked(student_r467._id, student_r467.studentId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentListComponent_ng_container_42_Template(rf, ctx) {
      if (rf & 1) {
        var _r475 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "row", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_ng_container_42_Template_button_click_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r475);

          var student_r467 = ctx.$implicit;

          var ctx_r474 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r474.ratingClicked(student_r467.studentId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_ng_container_42_Template_button_click_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r475);

          var student_r467 = ctx.$implicit;

          var ctx_r476 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r476.viewClicked(student_r467._id, student_r467.studentId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "visibility");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StudentListComponent_ng_container_42_button_13_Template, 3, 0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "user-card", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Class: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "class");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Section: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "masterData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var student_r467 = ctx.$implicit;
        var idx_r468 = ctx.index;

        var ctx_r455 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childCard", true)("header", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("# ", ctx_r455.paging.pageIndex * ctx_r455.paging.pageSize + idx_r468 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r455.editPermissions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", student_r467.studentId)("firstName", student_r467.basicInfo.firstName)("lastName", student_r467.basicInfo.lastName)("registrationNo", student_r467.academicInfo.registrationNo)("rollNo", student_r467.academicInfo.rollNo)("dob", student_r467.basicInfo.dob)("genderId", student_r467.basicInfo.genderId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 13, student_r467.academicInfo.classId), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 15, student_r467.academicInfo.sectionId, "classSections"), " ");
      }
    }

    function StudentListComponent_no_record_found_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "no-record-found");
      }
    }

    function StudentListComponent_card_45_Template(rf, ctx) {
      if (rf & 1) {
        var _r478 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteCardEvent", function StudentListComponent_card_45_Template_card_deleteCardEvent_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r478);

          var ctx_r477 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r477.isViewRating = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "user-small-pic", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-student-whole-rating", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r457 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Student Ratings")("popUpMode", true)("refreshButton", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", ctx_r457.selectedStudentId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("studentId", ctx_r457.selectedStudentId);
      }
    }

    var StudentListComponent =
    /*#__PURE__*/
    function () {
      function StudentListComponent(studentService, changeDetector, sharedService, plService) {
        _classCallCheck(this, StudentListComponent);

        this.studentService = studentService;
        this.changeDetector = changeDetector;
        this.sharedService = sharedService;
        this.plService = plService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.viewButtonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editButtonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageTitle = "";
        this.currentTime = Date.now();
        this.isLoading = false;
        this.editPermissions = false;
        this.environment = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_3__["MasterData"];
        this.students = [];
        this.isViewRating = false;
        this.searchParams = null;
        this.paging = {
          pageIndex: this.masterData.paging.pageIndex,
          pageSize: this.masterData.paging.pageSize,
          length: 1
        };
        this.sortParams = {
          fieldName: " basicInfo.firstName",
          isAsc: true
        };
        this.editPermissions = this.plService.getPageEntitlements(4, 1) === 2;
      }

      _createClass(StudentListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getList();
        }
      }, {
        key: "getList",
        value: function getList() {
          var _this8 = this;

          this.isLoading = true;
          var SearchObject = {
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
          this.studentService.getStudentList(SearchObject).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe$)).subscribe(function (result) {
            _this8.isLoading = false;
            _this8.students = result.data;
            _this8.paging.length = result.count;
          }, function (error) {
            _this8.isLoading = false;
            console.log(error);
          });
        }
      }, {
        key: "ratingClicked",
        value: function ratingClicked(id) {
          this.selectedStudentId = id;
          this.isViewRating = true;
        }
      }, {
        key: "viewClicked",
        value: function viewClicked(id, stuId) {
          var idObj = {
            id: id,
            focusId: stuId
          };
          this.viewButtonEvent.emit(idObj);
        }
      }, {
        key: "editClicked",
        value: function editClicked(id, stuId) {
          var idObj = {
            id: id,
            focusId: stuId
          };
          this.editButtonEvent.emit(idObj);
        }
      }, {
        key: "sortClicked",
        value: function sortClicked(sort) {
          this.paging.pageIndex = 0;
          this.sortParams.fieldName = sort.active;
          this.sortParams.isAsc = sort.direction === 'asc';
          this.getList();
          this.changeDetector.detectChanges();
        }
      }, {
        key: "pagingClicked",
        value: function pagingClicked(paginator) {
          this.paging.pageIndex = paginator.pageIndex;
          this.paging.pageSize = paginator.pageSize;
          this.getList();
          this.changeDetector.detectChanges();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next(true);
          this.unsubscribe$.complete();
        }
      }]);

      return StudentListComponent;
    }();

    StudentListComponent.ɵfac = function StudentListComponent_Factory(t) {
      return new (t || StudentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_6__["PostLoginService"]));
    };

    StudentListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentListComponent,
      selectors: [["app-student-list"]],
      inputs: {
        pageTitle: "pageTitle",
        roleId: "roleId"
      },
      outputs: {
        viewButtonEvent: "viewButtonEvent",
        editButtonEvent: "editButtonEvent"
      },
      decls: 46,
      vars: 11,
      consts: [[3, "loading", "title", "subTitle", "refresh"], ["matSort", "", 1, "table", 3, "matSortChange"], [1, "thead"], ["colspan", "2", 1, "sr"], ["matRipple", "", "mat-sort-header", "basicInfo.firstName"], ["matRipple", "", "mat-sort-header", "basicInfo.lastName"], ["matRipple", "", "mat-sort-header", "academicInfo.registrationNo"], ["matRipple", "", "mat-sort-header", "academicInfo.classId"], ["matRipple", "", "mat-sort-header", "academicInfo.sectionId"], ["matRipple", "", "mat-sort-header", "academicInfo.rollNo"], ["matRipple", "", "mat-sort-header", "basicInfo.dob"], ["matRipple", "", "mat-sort-header", "basicInfo.genderId"], [1, "action"], ["class", "tr", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "length", "showFirstLastButtons", "pageSize", "pageSizeOptions", "page"], [3, "title", "popUpMode", "refreshButton", "deleteCardEvent", 4, "ngIf"], [1, "tr"], [1, "sr-col"], [3, "userId"], [1, "rt"], ["mat-icon-button", "", "appToolTip", "'View Student Rating'", 1, "icon-view", 3, "click"], ["mat-icon-button", ""], ["mat-icon-button", "", "appToolTip", "'View Student'", 1, "icon-view", 3, "click"], ["mat-icon-button", "", "appToolTip", "'Edit Student'", "class", "icon-edit", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "appToolTip", "'Edit Student'", 1, "icon-edit", 3, "click"], [3, "childCard", "header"], ["gap", "2px"], ["fxFlex", "30%"], ["fxFlex", "", 1, "rt"], ["mat-icon-button", "", "appToolTip", "'View Student rating'", 1, "big-icon-view", 3, "click"], ["mat-icon-button", "", "appToolTip", "'View Student'", 1, "big-icon-view", 3, "click"], ["mat-icon-button", "", "appToolTip", "'Edit Student'", "class", "big-icon-edit", 3, "click", 4, "ngIf"], [3, "userId", "firstName", "lastName", "registrationNo", "rollNo", "dob", "genderId"], [1, "small-font"], ["mat-icon-button", "", "appToolTip", "'Edit Student'", 1, "big-icon-edit", 3, "click"], [3, "title", "popUpMode", "refreshButton", "deleteCardEvent"], ["cardHeader", "", 3, "userId"], [3, "studentId"]],
      template: function StudentListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function StudentListComponent_Template_card_refresh_0_listener($event) {
            return ctx.getList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "large-screen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "responsive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function StudentListComponent_Template_table_matSortChange_3_listener($event) {
            return ctx.sortClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " First Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Last Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Reg No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "receipt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ballot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "list_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Roll No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "emoji_people");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " DOB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, StudentListComponent_tr_40_Template, 34, 23, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "small-screen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, StudentListComponent_ng_container_42_Template, 26, 18, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, StudentListComponent_no_record_found_43_Template, 1, 0, "no-record-found", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-paginator", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function StudentListComponent_Template_mat_paginator_page_44_listener($event) {
            return ctx.pagingClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, StudentListComponent_card_45_Template, 3, 5, "card", 17);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.isLoading)("title", "Student List")("subTitle", "Manage your student for students");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.students);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.students);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.students.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.paging.length)("showFirstLastButtons", ctx.masterData.paging.showFirstLastButtons)("pageSize", ctx.paging.pageSize)("pageSizeOptions", ctx.masterData.paging.pageSizeOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isViewRating);
        }
      },
      directives: [_shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_8__["LargeScreenComponent"], _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__["ResponsiveComponent"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSort"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRipple"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortHeader"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _shared_component_boxes_small_screen_small_screen_component__WEBPACK_IMPORTED_MODULE_14__["SmallScreenComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginator"], _shared_component_user_small_pic_user_small_pic_component__WEBPACK_IMPORTED_MODULE_16__["UserSmallPicComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_18__["ToolTipDirective"], _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_19__["ROWComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexDirective"], _shared_component_form_templates_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_21__["UserCardComponent"], _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_22__["NoRecordFoundComponent"], _shared_module_rating_student_whole_rating_student_whole_rating_component__WEBPACK_IMPORTED_MODULE_23__["StudentWholeRatingComponent"]],
      pipes: [_shared_pipe_class_pipe__WEBPACK_IMPORTED_MODULE_24__["ClassPipe"], _shared_pipe_master_data_pipe__WEBPACK_IMPORTED_MODULE_25__["MasterDataPipe"], _shared_pipe_number_data_pipe__WEBPACK_IMPORTED_MODULE_26__["NumberDataPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vc3R1ZGVudC1ndWFyZGlhbi9zdHVkZW50LWxpc3Qvc3R1ZGVudC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-student-list',
          templateUrl: './student-list.component.html',
          styleUrls: ['./student-list.component.css']
        }]
      }], function () {
        return [{
          type: _services_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }, {
          type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_6__["PostLoginService"]
        }];
      }, {
        viewButtonEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        editButtonEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        pageTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        roleId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/post-login/student-guardian/student-management/student-management.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/post-login/student-guardian/student-management/student-management.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: StudentManagementComponent */

  /***/
  function srcAppPostLoginStudentGuardianStudentManagementStudentManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentManagementComponent", function () {
      return StudentManagementComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../student-list/student-list.component */
    "./src/app/post-login/student-guardian/student-list/student-list.component.ts");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _services_student_guardian_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/student-guardian.service */
    "./src/app/post-login/student-guardian/services/student-guardian.service.ts");
    /* harmony import */


    var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/post-login/post-login.service */
    "./src/app/post-login/post-login.service.ts");
    /* harmony import */


    var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/component/boxes/responsive/responsive.component */
    "./src/app/shared/component/boxes/responsive/responsive.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_component_boxes_card_bottom_card_bottom_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../shared/component/boxes/card-bottom/card-bottom.component */
    "./src/app/shared/component/boxes/card-bottom/card-bottom.component.ts");
    /* harmony import */


    var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../shared/component/boxes/card/card.component */
    "./src/app/shared/component/boxes/card/card.component.ts");
    /* harmony import */


    var _shared_module_school_class_section_ddl_class_section_ddl_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../shared/module/school/class-section-ddl/class-section-ddl.component */
    "./src/app/shared/module/school/class-section-ddl/class-section-ddl.component.ts");
    /* harmony import */


    var _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../shared/component/dynamic-form/dynamic-form/dynamic-form.component */
    "./src/app/shared/component/dynamic-form/dynamic-form/dynamic-form.component.ts");
    /* harmony import */


    var _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../shared/component/buttons/form-buttons/form-buttons.component */
    "./src/app/shared/component/buttons/form-buttons/form-buttons.component.ts");
    /* harmony import */


    var _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../shared/component/boxes/row/row.component */
    "./src/app/shared/component/boxes/row/row.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../../shared/directives/tool-tip.directive */
    "./src/app/shared/directives/tool-tip.directive.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _new_student_guardian_registration_new_student_guardian_registration_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../new-student-guardian-registration/new-student-guardian-registration.component */
    "./src/app/post-login/student-guardian/new-student-guardian-registration/new-student-guardian-registration.component.ts");

    var _c0 = ["searchCard"];

    function StudentManagementComponent_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r485 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentManagementComponent_button_2_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r485);

          var ctx_r484 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r484.addNewClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "person_add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add New Student and Guardian ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentManagementComponent_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r487 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentManagementComponent_button_13_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r487);

          var ctx_r486 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r486.backToListClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_return");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Back to Student List ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentManagementComponent_button_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r489 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentManagementComponent_button_16_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r489);

          var ctx_r488 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r488.deleteClicked(ctx_r488.Id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_forever");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Delete this hierarchy ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentManagementComponent_app_new_student_guardian_registration_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r491 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-new-student-guardian-registration", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSaveSuccess", function StudentManagementComponent_app_new_student_guardian_registration_19_Template_app_new_student_guardian_registration_onSaveSuccess_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r491);

          var ctx_r490 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r490.onSaveSuccess($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r483 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("changeModeId", ctx_r483.Id)("focusId", ctx_r483.focusId)("isViewMode", ctx_r483.showViewPage);
      }
    }

    var StudentManagementComponent =
    /*#__PURE__*/
    function () {
      function StudentManagementComponent(fb, sharedService, studentGuardianService, plService) {
        _classCallCheck(this, StudentManagementComponent);

        this.fb = fb;
        this.sharedService = sharedService;
        this.studentGuardianService = studentGuardianService;
        this.plService = plService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.showViewPage = false;
        this.showAddChangePage = false;
        this.showListPage = true;
        this.editPermissions = false;
        this.isLoading = false;
        this.Id = null;
        this.focusId = null;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_2__["MasterData"];
        this.searchConfig = [{
          isViewMode: false,
          type: "input",
          label: "First Name",
          inputType: "text",
          name: "firstName",
          icon: "accessibility_new"
        }, {
          isViewMode: false,
          type: "input",
          label: "Last Name",
          inputType: "text",
          name: "lastName",
          icon: "accessibility"
        }, {
          isViewMode: false,
          type: "date",
          label: "DOB",
          name: "dob"
        }, {
          isViewMode: false,
          type: "select",
          label: "Gender",
          name: "genderId",
          options: this.masterData.genders
        }, {
          isViewMode: false,
          type: "select",
          label: "Religion",
          name: "religionId",
          options: this.masterData.religions
        }, {
          isViewMode: false,
          type: "select",
          label: "Cast",
          name: "castId",
          options: this.masterData.casts
        }];
        this.searchForm = this.fb.group({});
        this.editPermissions = this.plService.getPageEntitlements(4, 1) == 2;
      }

      _createClass(StudentManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSearchClick",
        value: function onSearchClick() {
          this._ListPage.searchParams = this.searchForm.value;
          this._ListPage.paging.pageIndex = 0;

          this._ListPage.getList();

          this.searchCard.hide();
        }
      }, {
        key: "addNewClick",
        value: function addNewClick() {
          this.Id = null;
          this.showAddChangePage = true;
          this.showViewPage = this.showListPage = false;
        }
      }, {
        key: "backToListClick",
        value: function backToListClick() {
          this.showListPage = true;
          this.showViewPage = this.showAddChangePage = false;
        }
      }, {
        key: "onSaveSuccess",
        value: function onSaveSuccess(event) {
          this.backToListClick();

          if (this._ListPage) {
            this._ListPage.getList();
          }
        }
      }, {
        key: "viewButtonEvent",
        value: function viewButtonEvent(event) {
          this.Id = event.id;
          this.focusId = event.focusId;
          this.showViewPage = true;
          this.showListPage = this.showAddChangePage = false;
        }
      }, {
        key: "editButtonEvent",
        value: function editButtonEvent(event) {
          this.showAddChangePage = true;
          this.Id = event.id;
          this.focusId = event.focusId;
          this.showViewPage = this.showListPage = false;
        }
      }, {
        key: "deleteClicked",
        value: function deleteClicked(id) {
          var _this9 = this;

          var dialogRef = this.sharedService.openConfirmDialog("You want to delete this 'Student Guardian hierarchy'?");
          dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (confirmed) {
            if (confirmed) {
              _this9.isLoading = true;

              _this9.studentGuardianService.deleteStudentGuardian(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this9.unsubscribe$)).subscribe(function (result) {
                _this9.backToListClick();

                _this9._ListPage.getList();

                _this9.isLoading = false;
              }, function (error) {
                _this9.isLoading = false;
              });
            }
          }, function (error) {
            _this9.isLoading = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next(true);
          this.unsubscribe$.complete();
        }
      }]);

      return StudentManagementComponent;
    }();

    StudentManagementComponent.ɵfac = function StudentManagementComponent_Factory(t) {
      return new (t || StudentManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_guardian_service__WEBPACK_IMPORTED_MODULE_7__["StudentGuardianService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_8__["PostLoginService"]));
    };

    StudentManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentManagementComponent,
      selectors: [["app-student-management"]],
      viewQuery: function StudentManagementComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_1__["StudentListComponent"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._ListPage = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchCard = _t.first);
        }
      },
      decls: 21,
      vars: 16,
      consts: [["colGap", "50px"], ["fxFlex", "30"], ["type", "button", "class", "btn", "mat-raised-button", "", "appToolTip", "'Add new Student and Guardian'", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 3, "click", 4, "ngIf"], ["fxFlex", ""], [3, "form", "hidden", "title"], ["searchCard", ""], [3, "header"], [3, "formGroup", "ngSubmit"], [3, "form", "NothingRequired"], [3, "form", "fields"], [3, "form", "isSearchForm", "onReset"], ["type", "button", "mat-raised-button", "", "class", "btn", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 3, "click", 4, "ngIf"], [1, "fill-space"], ["type", "button", "class", "delete-button", "mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "changeModeId", "focusId", "isViewMode", "onSaveSuccess", 4, "ngIf"], [3, "hidden", "viewButtonEvent", "editButtonEvent"], ["type", "button", "mat-raised-button", "", "appToolTip", "'Add new Student and Guardian'", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 1, "btn", 3, "click"], ["type", "button", "mat-raised-button", "", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 1, "btn", 3, "click"], ["type", "button", "mat-raised-button", "", 1, "delete-button", 3, "click"], [3, "changeModeId", "focusId", "isViewMode", "onSaveSuccess"]],
      template: function StudentManagementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "responsive", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StudentManagementComponent_button_2_Template, 4, 0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "card-bottom", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function StudentManagementComponent_Template_form_ngSubmit_7_listener($event) {
            return ctx.onSearchClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-class-section-ddl", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "dynamic-form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form-buttons", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onReset", function StudentManagementComponent_Template_form_buttons_onReset_10_listener($event) {
            return ctx.onSearchClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StudentManagementComponent_button_13_Template, 4, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, StudentManagementComponent_button_16_Template, 4, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, StudentManagementComponent_app_new_student_guardian_registration_19_Template, 1, 3, "app-new-student-guardian-registration", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-student-list", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewButtonEvent", function StudentManagementComponent_Template_app_student_list_viewButtonEvent_20_listener($event) {
            return ctx.viewButtonEvent($event);
          })("editButtonEvent", function StudentManagementComponent_Template_app_student_list_editButtonEvent_20_listener($event) {
            return ctx.editButtonEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showListPage && ctx.editPermissions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.searchForm)("hidden", !ctx.showListPage)("title", "Search Student");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.searchForm)("NothingRequired", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.searchForm)("fields", ctx.searchConfig);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.searchForm)("isSearchForm", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddChangePage || ctx.showViewPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddChangePage && ctx.Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddChangePage || ctx.showViewPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showListPage);
        }
      },
      directives: [_shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__["ResponsiveComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _shared_component_boxes_card_bottom_card_bottom_component__WEBPACK_IMPORTED_MODULE_12__["CardBottomComponent"], _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _shared_module_school_class_section_ddl_class_section_ddl_component__WEBPACK_IMPORTED_MODULE_14__["ClassSectionDdlComponent"], _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_15__["DynamicFormComponent"], _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_16__["FormButtonsComponent"], _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_17__["ROWComponent"], _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_1__["StudentListComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_19__["ToolTipDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _new_student_guardian_registration_new_student_guardian_registration_component__WEBPACK_IMPORTED_MODULE_21__["NewStudentguardianRegistrationComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vc3R1ZGVudC1ndWFyZGlhbi9zdHVkZW50LW1hbmFnZW1lbnQvc3R1ZGVudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-student-management',
          templateUrl: './student-management.component.html',
          styleUrls: ['./student-management.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }, {
          type: _services_student_guardian_service__WEBPACK_IMPORTED_MODULE_7__["StudentGuardianService"]
        }, {
          type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_8__["PostLoginService"]
        }];
      }, {
        _ListPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_1__["StudentListComponent"]]
        }],
        searchCard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['searchCard']
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=student-guardian-student-guardian-module-es5.js.map