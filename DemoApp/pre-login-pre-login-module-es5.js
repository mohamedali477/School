function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pre-login-pre-login-module"], {
  /***/
  "./src/app/pre-login/about-us/about-us.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pre-login/about-us/about-us.component.ts ***!
    \**********************************************************/

  /*! exports provided: AboutUsComponent */

  /***/
  function srcAppPreLoginAboutUsAboutUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
      return AboutUsComponent;
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


    var _shared_component_boxes_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/component/boxes/carousel/carousel.component */
    "./src/app/shared/component/boxes/carousel/carousel.component.ts");
    /* harmony import */


    var _common_sections_our_vision_our_vision_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common-sections/our-vision/our-vision.component */
    "./src/app/pre-login/common-sections/our-vision/our-vision.component.ts");
    /* harmony import */


    var _common_sections_our_mission_our_mission_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common-sections/our-mission/our-mission.component */
    "./src/app/pre-login/common-sections/our-mission/our-mission.component.ts");
    /* harmony import */


    var _common_sections_director_speak_director_speak_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../common-sections/director-speak/director-speak.component */
    "./src/app/pre-login/common-sections/director-speak/director-speak.component.ts");
    /* harmony import */


    var _common_sections_principal_speak_principal_speak_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../common-sections/principal-speak/principal-speak.component */
    "./src/app/pre-login/common-sections/principal-speak/principal-speak.component.ts");
    /* harmony import */


    var _common_sections_what_we_offer_what_we_offer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common-sections/what-we-offer/what-we-offer.component */
    "./src/app/pre-login/common-sections/what-we-offer/what-we-offer.component.ts");

    var AboutUsComponent =
    /*#__PURE__*/
    function () {
      function AboutUsComponent() {
        _classCallCheck(this, AboutUsComponent);

        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"];
      }

      _createClass(AboutUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.slides = [{
            image: "assets/images/bg_aboutUs.jpg"
          }, {
            image: "assets/images/bg_aboutUs2.jpg"
          }];
        }
      }]);

      return AboutUsComponent;
    }();

    AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) {
      return new (t || AboutUsComponent)();
    };

    AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutUsComponent,
      selectors: [["app-about-us"]],
      decls: 16,
      vars: 2,
      consts: [[3, "proportion", "slides"], [1, "public-quote", "center"]],
      template: function AboutUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-carousel", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \"School is a building which has four walls with tomorrow inside.\"\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-our-vision");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-our-mission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-director-speak");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-principal-speak");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-what-we-offer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("proportion", 30)("slides", ctx.slides);
        }
      },
      directives: [_shared_component_boxes_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], _common_sections_our_vision_our_vision_component__WEBPACK_IMPORTED_MODULE_3__["OurVisionComponent"], _common_sections_our_mission_our_mission_component__WEBPACK_IMPORTED_MODULE_4__["OurMissionComponent"], _common_sections_director_speak_director_speak_component__WEBPACK_IMPORTED_MODULE_5__["DirectorSpeakComponent"], _common_sections_principal_speak_principal_speak_component__WEBPACK_IMPORTED_MODULE_6__["PrincipalSpeakComponent"], _common_sections_what_we_offer_what_we_offer_component__WEBPACK_IMPORTED_MODULE_7__["WhatWeOfferComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZS1sb2dpbi9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-us',
          templateUrl: './about-us.component.html',
          styleUrls: ['./about-us.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pre-login/common-sections/admission-process/admission-process.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/pre-login/common-sections/admission-process/admission-process.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: AdmissionProcessComponent */

  /***/
  function srcAppPreLoginCommonSectionsAdmissionProcessAdmissionProcessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmissionProcessComponent", function () {
      return AdmissionProcessComponent;
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


    var _shared_component_boxes_fancy_box_fancy_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/component/boxes/fancy-box/fancy-box.component */
    "./src/app/shared/component/boxes/fancy-box/fancy-box.component.ts");

    var AdmissionProcessComponent =
    /*#__PURE__*/
    function () {
      function AdmissionProcessComponent() {
        _classCallCheck(this, AdmissionProcessComponent);

        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"];
      }

      _createClass(AdmissionProcessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdmissionProcessComponent;
    }();

    AdmissionProcessComponent.ɵfac = function AdmissionProcessComponent_Factory(t) {
      return new (t || AdmissionProcessComponent)();
    };

    AdmissionProcessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdmissionProcessComponent,
      selectors: [["app-admission-process"]],
      decls: 22,
      vars: 0,
      consts: [["theme", "theme3", "icon", "device_hub"], ["title", ""], ["simpleContent", ""], [1, "gap", "justify"]],
      template: function AdmissionProcessComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fancy-box", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Admission process ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " The school is open to all boys and girls, irrespective of the caste, creed or social status subject, of course, to the availability of seats. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " After registration the child will have to face interview of a general kind. The date of test can be ascertained from the school. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " A pupil coming from a recognized school must produce the school leaving certificate/ T.C. duly counter signed by the concerned authority. At the time of the seeking admission. Municipal birth certificate or a certificate from hospital duly signed by C.M.O. is essential for others who are seeking in Nursery and K.G. classes. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " A child selected for admission must pay the fees within three days, of the notification to the parents. If dues are not paid within three days, the admission is automatically cancelled. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " The admission of a child to the school will mean a complete acceptance by the parent/ guardian of all rules as are enforced or as they are amended from time to time. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " The Principal reserves the right to refuse admission to a child without furnishing any reason. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_component_boxes_fancy_box_fancy_box_component__WEBPACK_IMPORTED_MODULE_2__["FancyBoxComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZS1sb2dpbi9jb21tb24tc2VjdGlvbnMvYWRtaXNzaW9uLXByb2Nlc3MvYWRtaXNzaW9uLXByb2Nlc3MuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdmissionProcessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admission-process',
          templateUrl: './admission-process.component.html',
          styleUrls: ['./admission-process.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pre-login/common-sections/director-speak/director-speak.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pre-login/common-sections/director-speak/director-speak.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: DirectorSpeakComponent */

  /***/
  function srcAppPreLoginCommonSectionsDirectorSpeakDirectorSpeakComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectorSpeakComponent", function () {
      return DirectorSpeakComponent;
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


    var _shared_component_boxes_fancy_box_fancy_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/component/boxes/fancy-box/fancy-box.component */
    "./src/app/shared/component/boxes/fancy-box/fancy-box.component.ts");

    var DirectorSpeakComponent =
    /*#__PURE__*/
    function () {
      function DirectorSpeakComponent() {
        _classCallCheck(this, DirectorSpeakComponent);

        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"];
      }

      _createClass(DirectorSpeakComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DirectorSpeakComponent;
    }();

    DirectorSpeakComponent.ɵfac = function DirectorSpeakComponent_Factory(t) {
      return new (t || DirectorSpeakComponent)();
    };

    DirectorSpeakComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DirectorSpeakComponent,
      selectors: [["app-director-speak"]],
      decls: 17,
      vars: 0,
      consts: [["theme", "theme3", "icon", "record_voice_over"], ["title", ""], ["simpleContent", ""], [1, "line-height", "justify"]],
      template: function DirectorSpeakComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fancy-box", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " From Director's Desk ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " At Demo School Branch, we pride ourselves on our commitment to the education of the whole child. We offer our children the opportunity to think for themselves, wonder, explore, experiment, take decisions and build on their knowledge through their own experiences. We give equal importance to our children's social development. For us, each child, boy or girl, is an individual and our confidence in this belief fosters a sense of citizenship and personal responsibility in them. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Our team of motivated staff, the availability of excellent learning resources and a very child-friendly environment, makes all this possible. Our teacher enrichment programmes have helped our teachers to design exciting learning opportunities for our students. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " We encourage a warm and open relationship with parents as we feel it is vital to the educational process. Together we can help our children grow and adapt in an ever changing world. We firmly believe that\"Children are the prettiest flowers in God's Garden.\"And as parents and teachers we need to join hands to help them blossom. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Looking forward to utmost co-operation from your side. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Always in the service of children. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_component_boxes_fancy_box_fancy_box_component__WEBPACK_IMPORTED_MODULE_2__["FancyBoxComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZS1sb2dpbi9jb21tb24tc2VjdGlvbnMvZGlyZWN0b3Itc3BlYWsvZGlyZWN0b3Itc3BlYWsuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectorSpeakComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-director-speak',
          templateUrl: './director-speak.component.html',
          styleUrls: ['./director-speak.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pre-login/common-sections/general-school-rules/general-school-rules.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/pre-login/common-sections/general-school-rules/general-school-rules.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: GeneralSchoolRulesComponent */

  /***/
  function srcAppPreLoginCommonSectionsGeneralSchoolRulesGeneralSchoolRulesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralSchoolRulesComponent", function () {
      return GeneralSchoolRulesComponent;
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


    var _shared_component_boxes_fancy_box_fancy_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/component/boxes/fancy-box/fancy-box.component */
    "./src/app/shared/component/boxes/fancy-box/fancy-box.component.ts");

    var GeneralSchoolRulesComponent =
    /*#__PURE__*/
    function () {
      function GeneralSchoolRulesComponent() {
        _classCallCheck(this, GeneralSchoolRulesComponent);

        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"];
      }

      _createClass(GeneralSchoolRulesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GeneralSchoolRulesComponent;
    }();

    GeneralSchoolRulesComponent.ɵfac = function GeneralSchoolRulesComponent_Factory(t) {
      return new (t || GeneralSchoolRulesComponent)();
    };

    GeneralSchoolRulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GeneralSchoolRulesComponent,
      selectors: [["app-general-school-rules"]],
      decls: 38,
      vars: 0,
      consts: [["theme", "theme1", "icon", "gavel"], ["title", ""], ["simpleContent", ""], [1, "gap", "justify"]],
      template: function GeneralSchoolRulesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fancy-box", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " General school rules ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Every student must carry his/ her Almanac (Diary) to school everyday and use it productively. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Students should move from one classroom to another classroom between periods without wasting time, in an orderly and quite manner. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Students should be habitually clean and always neatly dressed. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Non- Sikh boys should get their hair cut at regular intervals and ensure that it remains combed and tidy. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " No shouting or whistling is allowed in or around the school building. Running in corridors is strictly prohibited. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " It is strictly forbidden to throw any waste and wrappers here and there. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Bullying and the use of foul language are punishable offences, whether in or out of school. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Care must be taken of all school property and no student should scratch or spoil the desks or chairs, or damage any school furniture, or write or draw anything on the walls. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " The cost of any willful damage done will be made good by the concerned student, who will also be liable to pay a fine for any such offence. Anyone who notices something damaged should kindly report the same to a teacher, even if he or she does not know who has done it. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " No irrelevant book (other then books or library books), magazines or other publication may be brought to the School without the class-teacher\u2019s explicit permission. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Lending or borrowing of money or other articles is not permitted. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Mobile phones, Audio and Video CDs, DVDs, Computer Games, are strictly banned in the School premises, Bringing of these articles to the school will lead to suspension/rustication from the School. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " The school will not be responsible for the articles lost. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Students are not allowed to leave the School premises during the School hours without permission. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_component_boxes_fancy_box_fancy_box_component__WEBPACK_IMPORTED_MODULE_2__["FancyBoxComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZS1sb2dpbi9jb21tb24tc2VjdGlvbnMvZ2VuZXJhbC1zY2hvb2wtcnVsZXMvZ2VuZXJhbC1zY2hvb2wtcnVsZXMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralSchoolRulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-general-school-rules',
          templateUrl: './general-school-rules.component.html',
          styleUrls: ['./general-school-rules.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pre-login/common-sections/guardian-reviews/guardian-reviews.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pre-login/common-sections/guardian-reviews/guardian-reviews.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: GuardianReviewsComponent */

  /***/
  function srcAppPreLoginCommonSectionsGuardianReviewsGuardianReviewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuardianReviewsComponent", function () {
      return GuardianReviewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_component_boxes_fancy_box_fancy_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/component/boxes/fancy-box/fancy-box.component */
    "./src/app/shared/component/boxes/fancy-box/fancy-box.component.ts");

    var GuardianReviewsComponent =
    /*#__PURE__*/
    function () {
      function GuardianReviewsComponent() {
        _classCallCheck(this, GuardianReviewsComponent);
      }

      _createClass(GuardianReviewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GuardianReviewsComponent;
    }();

    GuardianReviewsComponent.ɵfac = function GuardianReviewsComponent_Factory(t) {
      return new (t || GuardianReviewsComponent)();
    };

    GuardianReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GuardianReviewsComponent,
      selectors: [["guardian-reviews"]],
      decls: 27,
      vars: 0,
      consts: [["icon", "people", "theme", "theme2"], ["title", ""], ["content", ""], [1, "gap", "justify"]],
      template: function GuardianReviewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fancy-box", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " What Guardian Says About Us ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " 'My child is very happy, the teaching staff are very good at nurturing and developing the children's academic skills as well as social interaction and productive play.' ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " 'My child has had some ups and downs in year, but his teacher and the school have helped.' ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 'I am really happy with the progress my child is making at this school, all of his teachers have been lovely and always there to help.' ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 'Very good school, you have helped my child so much with her speech.' ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 'I am happy that my child is happy in school.' ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " 'All staff at this school are really helpful and I feel that my child is receiving everything he needs at this school and his teachers have been great at keeping us updated with his school life.' ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " 'My child likes this school. All teachers are polite and friendly.' ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " 'I couldn't think of a better school for my children to be in.' ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " 'My child has improved so much since starting in Reception. She has loads of confidence and is always happy to come to school.' ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " 'My child is very happy at this school and they love how they do not get bullied.' ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_component_boxes_fancy_box_fancy_box_component__WEBPACK_IMPORTED_MODULE_1__["FancyBoxComponent"]],
      styles: [".guardianReviewDiv[_ngcontent-%COMP%]{\r\n    padding: 6% 10%;    \r\n    background-color: whitesmoke;\r\n    color: #444;\r\n}\r\n\r\n.sectionBoxDiv-title[_ngcontent-%COMP%]{\r\n    font-size: 28px;\r\n    font-style: italic;\r\n    font-weight: bold;\r\n    margin-bottom: 28px;\r\n    padding: 0px 2px 0px 5px;\r\n    color: var(--main-color)\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlLWxvZ2luL2NvbW1vbi1zZWN0aW9ucy9ndWFyZGlhbi1yZXZpZXdzL2d1YXJkaWFuLXJldmlld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcHJlLWxvZ2luL2NvbW1vbi1zZWN0aW9ucy9ndWFyZGlhbi1yZXZpZXdzL2d1YXJkaWFuLXJldmlld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ndWFyZGlhblJldmlld0RpdntcclxuICAgIHBhZGRpbmc6IDYlIDEwJTsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbn1cclxuXHJcbi5zZWN0aW9uQm94RGl2LXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDJweCAwcHggNXB4O1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuardianReviewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'guardian-reviews',
          templateUrl: './guardian-reviews.component.html',
          styleUrls: ['./guardian-reviews.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pre-login/common-sections/our-mission/our-mission.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pre-login/common-sections/our-mission/our-mission.component.ts ***!
    \********************************************************************************/

  /*! exports provided: OurMissionComponent */

  /***/
  function srcAppPreLoginCommonSectionsOurMissionOurMissionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OurMissionComponent", function () {
      return OurMissionComponent;
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


    var _shared_component_boxes_fancy_box_fancy_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/component/boxes/fancy-box/fancy-box.component */
    "./src/app/shared/component/boxes/fancy-box/fancy-box.component.ts");
    /* harmony import */


    var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/component/boxes/responsive/responsive.component */
    "./src/app/shared/component/boxes/responsive/responsive.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");

    var OurMissionComponent =
    /*#__PURE__*/
    function () {
      function OurMissionComponent() {
        _classCallCheck(this, OurMissionComponent);

        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"];
      }

      _createClass(OurMissionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OurMissionComponent;
    }();

    OurMissionComponent.ɵfac = function OurMissionComponent_Factory(t) {
      return new (t || OurMissionComponent)();
    };

    OurMissionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OurMissionComponent,
      selectors: [["app-our-mission"]],
      decls: 10,
      vars: 0,
      consts: [["theme", "theme2", "icon", "school"], ["title", ""], ["content", ""], ["fxFlex", ""], [1, "cursive", "bold", "line-height", "justify"], ["src", "assets/images/mission.jpg", 2, "width", "350px", "height", "200px"]],
      template: function OurMissionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fancy-box", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Our Mission ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "responsive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Each individual at Demo School Branch shall seek the highest in all areas of Endeavour and try to become an ever improving Total Quality Person (TQP). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_component_boxes_fancy_box_fancy_box_component__WEBPACK_IMPORTED_MODULE_2__["FancyBoxComponent"], _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_3__["ResponsiveComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZS1sb2dpbi9jb21tb24tc2VjdGlvbnMvb3VyLW1pc3Npb24vb3VyLW1pc3Npb24uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurMissionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-our-mission',
          templateUrl: './our-mission.component.html',
          styleUrls: ['./our-mission.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pre-login/common-sections/our-vision/our-vision.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pre-login/common-sections/our-vision/our-vision.component.ts ***!
    \******************************************************************************/

  /*! exports provided: OurVisionComponent */

  /***/
  function srcAppPreLoginCommonSectionsOurVisionOurVisionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OurVisionComponent", function () {
      return OurVisionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_component_boxes_fancy_box_fancy_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/component/boxes/fancy-box/fancy-box.component */
    "./src/app/shared/component/boxes/fancy-box/fancy-box.component.ts");
    /* harmony import */


    var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/component/boxes/responsive/responsive.component */
    "./src/app/shared/component/boxes/responsive/responsive.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");

    var OurVisionComponent =
    /*#__PURE__*/
    function () {
      function OurVisionComponent() {
        _classCallCheck(this, OurVisionComponent);
      }

      _createClass(OurVisionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OurVisionComponent;
    }();

    OurVisionComponent.ɵfac = function OurVisionComponent_Factory(t) {
      return new (t || OurVisionComponent)();
    };

    OurVisionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OurVisionComponent,
      selectors: [["app-our-vision"]],
      decls: 13,
      vars: 0,
      consts: [["theme", "theme1", "icon", "emoji_objects"], ["title", ""], ["content", ""], ["fxFlex", ""], ["src", "assets/images/vision.jpg", 2, "width", "350px", "height", "200px"], [1, "cursive", "justify"]],
      template: function OurVisionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fancy-box", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Our Vision ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "responsive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " A Journey from ordinary to extra- ordinary, we have vision to see their potential and faith to believe that they can and then courage to act with conviction to become \"TOTAL QUALITY PERSONS\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_component_boxes_fancy_box_fancy_box_component__WEBPACK_IMPORTED_MODULE_1__["FancyBoxComponent"], _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_2__["ResponsiveComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZS1sb2dpbi9jb21tb24tc2VjdGlvbnMvb3VyLXZpc2lvbi9vdXItdmlzaW9uLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurVisionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-our-vision',
          templateUrl: './our-vision.component.html',
          styleUrls: ['./our-vision.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pre-login/common-sections/principal-speak/principal-speak.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pre-login/common-sections/principal-speak/principal-speak.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: PrincipalSpeakComponent */

  /***/
  function srcAppPreLoginCommonSectionsPrincipalSpeakPrincipalSpeakComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrincipalSpeakComponent", function () {
      return PrincipalSpeakComponent;
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


    var _shared_component_boxes_fancy_box_fancy_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/component/boxes/fancy-box/fancy-box.component */
    "./src/app/shared/component/boxes/fancy-box/fancy-box.component.ts");

    var PrincipalSpeakComponent =
    /*#__PURE__*/
    function () {
      function PrincipalSpeakComponent() {
        _classCallCheck(this, PrincipalSpeakComponent);

        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"];
      }

      _createClass(PrincipalSpeakComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrincipalSpeakComponent;
    }();

    PrincipalSpeakComponent.ɵfac = function PrincipalSpeakComponent_Factory(t) {
      return new (t || PrincipalSpeakComponent)();
    };

    PrincipalSpeakComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrincipalSpeakComponent,
      selectors: [["app-principal-speak"]],
      decls: 6,
      vars: 0,
      consts: [["theme", "theme4", "icon", "record_voice_over"], ["title", ""], ["simpleContent", ""], [1, "line-height", "justify"]],
      template: function PrincipalSpeakComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fancy-box", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Principal Speaks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " The destiny of man is shaped in a school. To prepare the leaders of tomorrow to face the challenges of the 21st Century, we are preparing children for a world outside the classroom- a world that is constantly changing andchallenging. For this, apart from a dedicated team of teachers, we have provided excellent infrastructure with state-of-theart labs, spacious playground and a very efficient transport system. All our efforts are directed towards the all round development of personality of each child. We always believe that selecting a school for a child is of prime importance. For, in doing so parents are taking a decision about their child's future and the kind of person they would expect the child to become. A decision on behalf of the child who trusts them. I am sure you will never regret choosing Demo School Branch as the dream school of your Child. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_component_boxes_fancy_box_fancy_box_component__WEBPACK_IMPORTED_MODULE_2__["FancyBoxComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZS1sb2dpbi9jb21tb24tc2VjdGlvbnMvcHJpbmNpcGFsLXNwZWFrL3ByaW5jaXBhbC1zcGVhay5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrincipalSpeakComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-principal-speak',
          templateUrl: './principal-speak.component.html',
          styleUrls: ['./principal-speak.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pre-login/common-sections/what-we-offer/what-we-offer.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pre-login/common-sections/what-we-offer/what-we-offer.component.ts ***!
    \************************************************************************************/

  /*! exports provided: WhatWeOfferComponent */

  /***/
  function srcAppPreLoginCommonSectionsWhatWeOfferWhatWeOfferComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WhatWeOfferComponent", function () {
      return WhatWeOfferComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/component/boxes/responsive/responsive.component */
    "./src/app/shared/component/boxes/responsive/responsive.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/component/boxes/row/row.component */
    "./src/app/shared/component/boxes/row/row.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");

    var WhatWeOfferComponent =
    /*#__PURE__*/
    function () {
      function WhatWeOfferComponent() {
        _classCallCheck(this, WhatWeOfferComponent);
      }

      _createClass(WhatWeOfferComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WhatWeOfferComponent;
    }();

    WhatWeOfferComponent.ɵfac = function WhatWeOfferComponent_Factory(t) {
      return new (t || WhatWeOfferComponent)();
    };

    WhatWeOfferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WhatWeOfferComponent,
      selectors: [["app-what-we-offer"]],
      decls: 71,
      vars: 0,
      consts: [[1, "offerDiv"], [1, "maintitle"], [1, "center"], [1, "fill-space"], ["fxFlex", "90%"], ["colGap", "32px"], ["fxFlex", "", 1, "offer-item"], ["gap", "10px"], [1, "offer-icon"], [1, "lt"], [1, "title"]],
      template: function WhatWeOfferComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " What We Offer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "responsive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "responsive", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "row", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "security");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Safety First ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " We ensure the safety of students in school on high priority. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "row", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "watch_later");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Regular Classes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Our teachers are very punctual and they take their classes regularly. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "responsive", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "row", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "school");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Certified Teachers ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Our Teachers are well trained and they convert study burden into fun. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "row", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "meeting_room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Sufficient Classrooms ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " We have separate classroom for each class and section, so that students can concentrate on their subjects. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "responsive", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "row", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "local_library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Creative Lessons ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " We teach the students out of the box and make them creative through our regular events. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "row", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "sports_kabaddi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Sports Facilities ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " We keep our students healty and fit through our sports activities. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_1__["ResponsiveComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_3__["ROWComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      styles: [".offerDiv[_ngcontent-%COMP%]{\r\n    padding: 5% 10% 10% 10%;\r\n    color: #444;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.offer-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n    border-radius: 50%;\r\n    border-width: 2px;\r\n    border-color: white;\r\n    border-style: solid;\r\n    height: 50px;\r\n    width: 50px;\r\n    font-size: 50px;\r\n    color: var(--main-color);\r\n    background-color: white;    \r\n}\r\n\r\n.maintitle[_ngcontent-%COMP%]{\r\n    font-style: italic;\r\n    color: var(--main-color);\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    font-style: italic;\r\n    margin-top: 8px;\r\n    margin-bottom: 10px;\r\n    color: var(--main-color);\r\n}\r\n\r\n.offer-item[_ngcontent-%COMP%]{\r\n    padding-top: 5px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.offer-item[_ngcontent-%COMP%]:hover{\r\n    background-color: white;\r\n    border-color: white;\r\n    border-radius: 10px;\r\n    border-width: 1px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlLWxvZ2luL2NvbW1vbi1zZWN0aW9ucy93aGF0LXdlLW9mZmVyL3doYXQtd2Utb2ZmZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3ByZS1sb2dpbi9jb21tb24tc2VjdGlvbnMvd2hhdC13ZS1vZmZlci93aGF0LXdlLW9mZmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub2ZmZXJEaXZ7XHJcbiAgICBwYWRkaW5nOiA1JSAxMCUgMTAlIDEwJTtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLm9mZmVyLWljb24gbWF0LWljb257XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICAgIFxyXG59XHJcblxyXG4ubWFpbnRpdGxle1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1cclxuXHJcbi5vZmZlci1pdGVte1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ub2ZmZXItaXRlbTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhatWeOfferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-what-we-offer',
          templateUrl: './what-we-offer.component.html',
          styleUrls: ['./what-we-offer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pre-login/contact-us/contact-us.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pre-login/contact-us/contact-us.component.ts ***!
    \**************************************************************/

  /*! exports provided: ContactUsComponent */

  /***/
  function srcAppPreLoginContactUsContactUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
      return ContactUsComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _services_pre_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/pre-login.service */
    "./src/app/pre-login/services/pre-login.service.ts");
    /* harmony import */


    var _shared_component_boxes_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/component/boxes/carousel/carousel.component */
    "./src/app/shared/component/boxes/carousel/carousel.component.ts");
    /* harmony import */


    var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/component/boxes/responsive/responsive.component */
    "./src/app/shared/component/boxes/responsive/responsive.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/component/boxes/card/card.component */
    "./src/app/shared/component/boxes/card/card.component.ts");
    /* harmony import */


    var _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared/component/dynamic-form/dynamic-form/dynamic-form.component */
    "./src/app/shared/component/dynamic-form/dynamic-form/dynamic-form.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _common_sections_what_we_offer_what_we_offer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../common-sections/what-we-offer/what-we-offer.component */
    "./src/app/pre-login/common-sections/what-we-offer/what-we-offer.component.ts");
    /* harmony import */


    var _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../shared/component/buttons/form-buttons/form-buttons.component */
    "./src/app/shared/component/buttons/form-buttons/form-buttons.component.ts");

    function ContactUsComponent_form_buttons_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "form-buttons", 10);
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r13.mainForm);
      }
    }

    var ContactUsComponent =
    /*#__PURE__*/
    function () {
      function ContactUsComponent(sharedService, preLoginService) {
        _classCallCheck(this, ContactUsComponent);

        this.sharedService = sharedService;
        this.preLoginService = preLoginService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.mainForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
      }

      _createClass(ContactUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ConfigureSlides();
          this.configureFields();
        }
      }, {
        key: "ConfigureSlides",
        value: function ConfigureSlides() {
          this.slides = [{
            image: "assets/images/contactUs.jpg"
          }, {
            image: "assets/images/contactUs2.jpg"
          }];
        }
      }, {
        key: "configureFields",
        value: function configureFields() {
          this.fieldsConfig = [{
            isViewMode: true,
            type: "date",
            label: "Inquiry date",
            name: "inquiryDate",
            options: {
              selectToday: true
            },
            validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
          }, {
            isViewMode: false,
            type: "input",
            label: "Name",
            inputType: "text",
            name: "name",
            icon: "person",
            validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
          }, {
            isViewMode: false,
            type: "input",
            label: "Email Address",
            inputType: "email",
            name: "email",
            validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required(), _app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].email()]
          }, {
            isViewMode: false,
            type: "input",
            label: "Contact No",
            inputType: "text",
            name: "contactNo",
            icon: "phone_iphone",
            validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
          }, {
            isViewMode: false,
            type: "input",
            label: "Subject",
            inputType: "text",
            name: "subject",
            icon: "subject",
            validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
          }, {
            isViewMode: false,
            type: "textarea",
            label: "Description",
            inputType: "textarea",
            name: "description",
            validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
          }];
        }
      }, {
        key: "confirmSubmit",
        value: function confirmSubmit(formData) {
          var _this = this;

          var dialogRef = this.sharedService.openConfirmDialog("You want to send the inquiry?");
          dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$)).subscribe(function (confirmed) {
            if (confirmed) {
              _this.onSubmit(formData);
            }
          }, function (error) {
            _this.isLoading = false;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(formData) {
          this.mainForm.markAllAsTouched();
          formData.preventDefault();
          formData.stopPropagation();

          if (this.mainForm.valid) {//this.isLoading = true
          } else {
            this.sharedService.openSnackBar("Some fields are invalid. Please fill them properly.", "x", "fail");
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next(true);
          this.unsubscribe$.complete();
        }
      }]);

      return ContactUsComponent;
    }();

    ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) {
      return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pre_login_service__WEBPACK_IMPORTED_MODULE_6__["PreLoginService"]));
    };

    ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactUsComponent,
      selectors: [["app-contact-us"]],
      inputs: {
        fieldsConfig: "fieldsConfig"
      },
      decls: 19,
      vars: 12,
      consts: [[2, "background-color", "white"], ["proportion", "30", 3, "slides"], [1, "contactDiv"], ["colGap", "25px"], ["fxFlex", ""], [1, "public-quote", "center"], [3, "headerBorader", "icon", "title", "subTitle", "loading", "cardButtons"], [3, "formGroup", "ngSubmit"], [3, "form", "fields", "onlyColumn"], [3, "form", 4, "ngIf"], [3, "form"]],
      template: function ContactUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "responsive", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \"You may be disappointed if you fail, but you\u2019ll be doomed if you don\u2019t try.\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactUsComponent_Template_form_ngSubmit_15_listener($event) {
            return ctx.isCaptchaVerified && ctx.confirmSubmit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "dynamic-form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContactUsComponent_form_buttons_17_Template, 1, 1, "form-buttons", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-what-we-offer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slides", ctx.slides);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerBorader", true)("icon", "perm_phone_msg")("title", "Contact Us")("subTitle", "Please enter your enquiry details.")("loading", ctx.isLoading)("cardButtons", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mainForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.mainForm)("fields", ctx.fieldsConfig)("onlyColumn", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCaptchaVerified);
        }
      },
      directives: [_shared_component_boxes_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_8__["ResponsiveComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_11__["DynamicFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _common_sections_what_we_offer_what_we_offer_component__WEBPACK_IMPORTED_MODULE_13__["WhatWeOfferComponent"], _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_14__["FormButtonsComponent"]],
      styles: [".contactDiv[_ngcontent-%COMP%]{\r\n    padding: 2% 2% 10% 2%;\r\n    background-color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlLWxvZ2luL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3ByZS1sb2dpbi9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0RGl2e1xyXG4gICAgcGFkZGluZzogMiUgMiUgMTAlIDIlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-us',
          templateUrl: './contact-us.component.html',
          styleUrls: ['./contact-us.component.css']
        }]
      }], function () {
        return [{
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }, {
          type: _services_pre_login_service__WEBPACK_IMPORTED_MODULE_6__["PreLoginService"]
        }];
      }, {
        fieldsConfig: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pre-login/faculty/faculty.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pre-login/faculty/faculty.component.ts ***!
    \********************************************************/

  /*! exports provided: FacultyComponent */

  /***/
  function srcAppPreLoginFacultyFacultyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacultyComponent", function () {
      return FacultyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_pre_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/pre-login.service */
    "./src/app/pre-login/services/pre-login.service.ts");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_component_boxes_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/component/boxes/carousel/carousel.component */
    "./src/app/shared/component/boxes/carousel/carousel.component.ts");
    /* harmony import */


    var _shared_component_boxes_fancy_box_fancy_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/component/boxes/fancy-box/fancy-box.component */
    "./src/app/shared/component/boxes/fancy-box/fancy-box.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _common_sections_what_we_offer_what_we_offer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../common-sections/what-we-offer/what-we-offer.component */
    "./src/app/pre-login/common-sections/what-we-offer/what-we-offer.component.ts");
    /* harmony import */


    var _shared_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/component/loader/loader.component */
    "./src/app/shared/component/loader/loader.component.ts");

    function FacultyComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var FacultyComponent =
    /*#__PURE__*/
    function () {
      function FacultyComponent(preLoginService, sharedService) {
        _classCallCheck(this, FacultyComponent);

        this.preLoginService = preLoginService;
        this.sharedService = sharedService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_2__["MasterData"];
        this.teachers = [];
      }

      _createClass(FacultyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.populateCarousel();
        }
      }, {
        key: "populateCarousel",
        value: function populateCarousel() {
          this.slides = [{
            image: "assets/images/faculty.jpg"
          }, {
            image: "assets/images/faculty2.jpg"
          }];
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next(true);
          this.unsubscribe$.complete();
        }
      }]);

      return FacultyComponent;
    }();

    FacultyComponent.ɵfac = function FacultyComponent_Factory(t) {
      return new (t || FacultyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pre_login_service__WEBPACK_IMPORTED_MODULE_3__["PreLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]));
    };

    FacultyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacultyComponent,
      selectors: [["app-faculty"]],
      decls: 25,
      vars: 3,
      consts: [[3, "proportion", "slides"], [1, "public-quote", "center"], ["theme", "theme3", "icon", "people"], ["title", ""], ["content", "", 1, "line-height", "justify"], [4, "ngIf"]],
      template: function FacultyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-carousel", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \"You don\u2019t have to be great to get started, but you have to get started to be great.\"\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "fancy-box", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Certified Faculty ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " The school has on its rolls qualified and committed staff. At Demo School Branch, the teachers- the jewels of the school are ever improving personalities.They are innovative and interactive in their teaching. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " We believe that the teachers are who gives you something to take home to think about besides homework. Our teaching is not jsut limited to books. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Teacher at Demo School Branch motivate the students and teach them how to work together. Everyone who remembers his own education remembers teachers, not methods and techniques. The teachers are the heart of our educational system. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FacultyComponent_div_23_Template, 4, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-what-we-offer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("proportion", 30)("slides", ctx.slides);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      directives: [_shared_component_boxes_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"], _shared_component_boxes_fancy_box_fancy_box_component__WEBPACK_IMPORTED_MODULE_6__["FancyBoxComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _common_sections_what_we_offer_what_we_offer_component__WEBPACK_IMPORTED_MODULE_8__["WhatWeOfferComponent"], _shared_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"]],
      styles: [".facultyInfoBox[_ngcontent-%COMP%]{\r\n    border-style: solid;\r\n    border-width: 0px;\r\n    border-color: var(--main-color);\r\n    padding: 0px;\r\n}\r\n\r\n.divBottomborder[_ngcontent-%COMP%]{\r\n    border-width: 0px 0px 0px 0px;\r\n    border-style: solid;\r\n    padding-bottom: 2px;\r\n    margin-bottom: 2px;\r\n    border-color: whitesmoke;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlLWxvZ2luL2ZhY3VsdHkvZmFjdWx0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9wcmUtbG9naW4vZmFjdWx0eS9mYWN1bHR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFjdWx0eUluZm9Cb3h7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uZGl2Qm90dG9tYm9yZGVye1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGVzbW9rZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacultyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-faculty',
          templateUrl: './faculty.component.html',
          styleUrls: ['./faculty.component.css']
        }]
      }], function () {
        return [{
          type: _services_pre_login_service__WEBPACK_IMPORTED_MODULE_3__["PreLoginService"]
        }, {
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pre-login/gallery/gallery.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pre-login/gallery/gallery.component.ts ***!
    \********************************************************/

  /*! exports provided: GalleryComponent */

  /***/
  function srcAppPreLoginGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
      return GalleryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_component_boxes_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/component/boxes/carousel/carousel.component */
    "./src/app/shared/component/boxes/carousel/carousel.component.ts");
    /* harmony import */


    var _common_sections_what_we_offer_what_we_offer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common-sections/what-we-offer/what-we-offer.component */
    "./src/app/pre-login/common-sections/what-we-offer/what-we-offer.component.ts");

    var GalleryComponent =
    /*#__PURE__*/
    function () {
      function GalleryComponent() {
        _classCallCheck(this, GalleryComponent);
      }

      _createClass(GalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.slides = [{
            image: "assets/images/gallery.jpg"
          }, {
            image: "assets/images/gallery2.jpg"
          }];
        }
      }]);

      return GalleryComponent;
    }();

    GalleryComponent.ɵfac = function GalleryComponent_Factory(t) {
      return new (t || GalleryComponent)();
    };

    GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalleryComponent,
      selectors: [["app-gallery"]],
      decls: 12,
      vars: 2,
      consts: [[3, "proportion", "slides"], [1, "public-quote", "center"]],
      template: function GalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-carousel", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \"Don\u2019t stress. Do your best. Forget the rest.\"\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-what-we-offer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("proportion", 30)("slides", ctx.slides);
        }
      },
      directives: [_shared_component_boxes_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _common_sections_what_we_offer_what_we_offer_component__WEBPACK_IMPORTED_MODULE_2__["WhatWeOfferComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZS1sb2dpbi9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gallery',
          templateUrl: './gallery.component.html',
          styleUrls: ['./gallery.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pre-login/home/home.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pre-login/home/home.component.ts ***!
    \**************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPreLoginHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_component_boxes_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/component/boxes/carousel/carousel.component */
    "./src/app/shared/component/boxes/carousel/carousel.component.ts");
    /* harmony import */


    var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/component/boxes/responsive/responsive.component */
    "./src/app/shared/component/boxes/responsive/responsive.component.ts");
    /* harmony import */


    var _shared_component_boxes_fancy_box_fancy_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/component/boxes/fancy-box/fancy-box.component */
    "./src/app/shared/component/boxes/fancy-box/fancy-box.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _common_sections_admission_process_admission_process_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../common-sections/admission-process/admission-process.component */
    "./src/app/pre-login/common-sections/admission-process/admission-process.component.ts");
    /* harmony import */


    var _common_sections_guardian_reviews_guardian_reviews_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../common-sections/guardian-reviews/guardian-reviews.component */
    "./src/app/pre-login/common-sections/guardian-reviews/guardian-reviews.component.ts");
    /* harmony import */


    var _common_sections_general_school_rules_general_school_rules_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common-sections/general-school-rules/general-school-rules.component */
    "./src/app/pre-login/common-sections/general-school-rules/general-school-rules.component.ts");
    /* harmony import */


    var _common_sections_what_we_offer_what_we_offer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../common-sections/what-we-offer/what-we-offer.component */
    "./src/app/pre-login/common-sections/what-we-offer/what-we-offer.component.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.slides = [{
            image: "assets/images/bg_1.jpg"
          }, {
            image: "assets/images/bg_2.jpg"
          }, {
            image: "assets/images/bg_3.jpg"
          }, {
            image: "assets/images/bg_4.jpg"
          }];
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 39,
      vars: 4,
      consts: [[1, "main-page-div"], [3, "proportion", "slides"], [1, "public-quote", "center"], [3, "gap", "colGap"], ["fxFlex", "", "theme", "theme1", "icon", "people"], ["title", ""], ["content", ""], ["fxFlex", "", "theme", "theme2", "icon", "local_library"], ["fxFlex", "", "theme", "theme3", "icon", "sports_kabaddi"], ["fxFlex", "", "theme", "theme4", "icon", "remove_red_eye"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \"Intelligence plus character that is the goal of true education.\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "responsive", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "fancy-box", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Certified Teachers ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Our teachers are professionals and certified in their own subjects. Children enjoy the classes and share their doubts with their teacher. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "fancy-box", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Special Education ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Education is not just limited to books, so we also aware children about outside world activities. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "fancy-box", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Sports ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Sports are equaly important as education, We keep your children active through our sports activities. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "fancy-box", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Smart Monitoring ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " We keep track of student performance through our smart web application. Application also helps guardians to track their children performance. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-admission-process");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "guardian-reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-general-school-rules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-what-we-offer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("proportion", 30)("slides", ctx.slides);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gap", "0px")("colGap", "0px");
        }
      },
      directives: [_shared_component_boxes_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_2__["ResponsiveComponent"], _shared_component_boxes_fancy_box_fancy_box_component__WEBPACK_IMPORTED_MODULE_3__["FancyBoxComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _common_sections_admission_process_admission_process_component__WEBPACK_IMPORTED_MODULE_5__["AdmissionProcessComponent"], _common_sections_guardian_reviews_guardian_reviews_component__WEBPACK_IMPORTED_MODULE_6__["GuardianReviewsComponent"], _common_sections_general_school_rules_general_school_rules_component__WEBPACK_IMPORTED_MODULE_7__["GeneralSchoolRulesComponent"], _common_sections_what_we_offer_what_we_offer_component__WEBPACK_IMPORTED_MODULE_8__["WhatWeOfferComponent"]],
      styles: [".home-page-card[_ngcontent-%COMP%], .main-page-div[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlLWxvZ2luL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcHJlLWxvZ2luL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtcGFnZS1jYXJkLFxyXG4ubWFpbi1wYWdlLWRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pre-login/pre-login-footer/pre-login-footer.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pre-login/pre-login-footer/pre-login-footer.component.ts ***!
    \**************************************************************************/

  /*! exports provided: PreLoginFooterComponent */

  /***/
  function srcAppPreLoginPreLoginFooterPreLoginFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreLoginFooterComponent", function () {
      return PreLoginFooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angularx_qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angularx-qrcode */
    "./node_modules/angularx-qrcode/fesm2015/angularx-qrcode.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_google_map_map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/google-map/map/map.component */
    "./src/app/shared/google-map/map/map.component.ts");
    /* harmony import */


    var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/component/boxes/card/card.component */
    "./src/app/shared/component/boxes/card/card.component.ts");
    /* harmony import */


    var _shared_component_quotes_all_quotes_all_quotes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/component/quotes/all-quotes/all-quotes.component */
    "./src/app/shared/component/quotes/all-quotes/all-quotes.component.ts");

    function PreLoginFooterComponent_app_map_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-map");
      }
    }

    function PreLoginFooterComponent_card_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-all-quotes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PreLoginFooterComponent =
    /*#__PURE__*/
    function () {
      function PreLoginFooterComponent() {
        _classCallCheck(this, PreLoginFooterComponent);

        this.showMap = false;
        this.showQuotes = false;
        this.websiteUrl = window.location.href;
      }

      _createClass(PreLoginFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PreLoginFooterComponent;
    }();

    PreLoginFooterComponent.ɵfac = function PreLoginFooterComponent_Factory(t) {
      return new (t || PreLoginFooterComponent)();
    };

    PreLoginFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreLoginFooterComponent,
      selectors: [["app-pre-login-footer"]],
      decls: 6,
      vars: 3,
      consts: [[1, "prelogin-footer"], [3, "qrdata"], ["type", "button", "value", "Toggle Map", 3, "click"], [4, "ngIf"], ["type", "button", "value", "Toggle Quotes", 3, "click"]],
      template: function PreLoginFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "qrcode", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreLoginFooterComponent_Template_input_click_2_listener($event) {
            return ctx.showMap = !ctx.showMap;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PreLoginFooterComponent_app_map_3_Template, 1, 0, "app-map", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreLoginFooterComponent_Template_input_click_4_listener($event) {
            return ctx.showQuotes = !ctx.showQuotes;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PreLoginFooterComponent_card_5_Template, 2, 0, "card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qrdata", ctx.websiteUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showQuotes);
        }
      },
      directives: [angularx_qrcode__WEBPACK_IMPORTED_MODULE_1__["QRCodeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_google_map_map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], _shared_component_quotes_all_quotes_all_quotes_component__WEBPACK_IMPORTED_MODULE_5__["AllQuotesComponent"]],
      styles: [".prelogin-footer[_ngcontent-%COMP%]{\r\n    min-height: 150px;\r\n    background-color: black;\r\n    color: white;\r\n    padding: 20px 10px 20px 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlLWxvZ2luL3ByZS1sb2dpbi1mb290ZXIvcHJlLWxvZ2luLWZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvcHJlLWxvZ2luL3ByZS1sb2dpbi1mb290ZXIvcHJlLWxvZ2luLWZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZWxvZ2luLWZvb3RlcntcclxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHggMjBweCAxMHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreLoginFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pre-login-footer',
          templateUrl: './pre-login-footer.component.html',
          styleUrls: ['./pre-login-footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pre-login/pre-login-header/pre-login-header.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pre-login/pre-login-header/pre-login-header.component.ts ***!
    \**************************************************************************/

  /*! exports provided: PreLoginHeaderComponent */

  /***/
  function srcAppPreLoginPreLoginHeaderPreLoginHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreLoginHeaderComponent", function () {
      return PreLoginHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/component/boxes/large-screen/large-screen.component */
    "./src/app/shared/component/boxes/large-screen/large-screen.component.ts");
    /* harmony import */


    var _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/component/boxes/row/row.component */
    "./src/app/shared/component/boxes/row/row.component.ts");

    var _c0 = ["*"];

    var PreLoginHeaderComponent =
    /*#__PURE__*/
    function () {
      function PreLoginHeaderComponent() {
        _classCallCheck(this, PreLoginHeaderComponent);
      }

      _createClass(PreLoginHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PreLoginHeaderComponent;
    }();

    PreLoginHeaderComponent.ɵfac = function PreLoginHeaderComponent_Factory(t) {
      return new (t || PreLoginHeaderComponent)();
    };

    PreLoginHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreLoginHeaderComponent,
      selectors: [["app-pre-login-header"]],
      ngContentSelectors: _c0,
      decls: 9,
      vars: 0,
      consts: [[1, "appHeaderTitle"], [1, "hidden-div"], [1, "fill-space"], [1, "header-text"]],
      template: function PreLoginHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "large-screen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Welcome to Pre-Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_1__["LargeScreenComponent"], _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_2__["ROWComponent"]],
      styles: [".header-text[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    padding-top: 8px;    \r\n    margin-bottom: 10px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlLWxvZ2luL3ByZS1sb2dpbi1oZWFkZXIvcHJlLWxvZ2luLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL3ByZS1sb2dpbi9wcmUtbG9naW4taGVhZGVyL3ByZS1sb2dpbi1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItdGV4dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy10b3A6IDhweDsgICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreLoginHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pre-login-header',
          templateUrl: './pre-login-header.component.html',
          styleUrls: ['./pre-login-header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pre-login/pre-login-menu/pre-login-menu.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pre-login/pre-login-menu/pre-login-menu.component.ts ***!
    \**********************************************************************/

  /*! exports provided: PreLoginMenuComponent */

  /***/
  function srcAppPreLoginPreLoginMenuPreLoginMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreLoginMenuComponent", function () {
      return PreLoginMenuComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/component/boxes/responsive/responsive.component */
    "./src/app/shared/component/boxes/responsive/responsive.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");

    var _c0 = function _c0(a0) {
      return {
        "activeMenu small-shadow": a0
      };
    };

    var _c1 = function _c1(a0) {
      return [a0];
    };

    var _c2 = function _c2(a0) {
      return {
        preLoginOutlet: a0
      };
    };

    var _c3 = function _c3(a0) {
      return {
        outlets: a0
      };
    };

    function PreLoginMenuComponent_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r268 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreLoginMenuComponent_a_1_Template_a_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r268);

          var ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r267.menuClicked();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menu_r266 = ctx.$implicit;

        var ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r265.router.url.includes(menu_r266.url) && ctx_r265.router.url.includes(menu_r266.modelUrl)))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, menu_r266.url)))));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r266.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menu_r266.name, " ");
      }
    }

    var PreLoginMenuComponent =
    /*#__PURE__*/
    function () {
      function PreLoginMenuComponent(router) {
        _classCallCheck(this, PreLoginMenuComponent);

        this.router = router;
        this.toggleSideMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"];
        this.menuList = [{
          name: 'Home',
          url: 'home',
          modelUrl: 'guest',
          icon: 'home'
        }, {
          name: 'About Us',
          url: 'aboutUs',
          modelUrl: 'guest',
          icon: 'speaker'
        }, {
          name: 'Faculty',
          url: 'faculty',
          modelUrl: 'guest',
          icon: 'person'
        }, {
          name: 'Gallery',
          url: 'gallery',
          modelUrl: 'guest',
          icon: 'photo_album'
        }, {
          name: 'ContactUs',
          url: 'contactUs',
          modelUrl: 'guest',
          icon: 'perm_phone_msg'
        }, {
          name: 'login',
          url: 'signin',
          modelUrl: 'guest',
          icon: 'lock'
        }];
      }

      _createClass(PreLoginMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "menuClicked",
        value: function menuClicked() {
          this.toggleSideMenu.emit();
        }
      }]);

      return PreLoginMenuComponent;
    }();

    PreLoginMenuComponent.ɵfac = function PreLoginMenuComponent_Factory(t) {
      return new (t || PreLoginMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    PreLoginMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreLoginMenuComponent,
      selectors: [["app-pre-login-menu"]],
      outputs: {
        toggleSideMenu: "toggleSideMenu"
      },
      decls: 3,
      vars: 1,
      consts: [["gap", "0px"], ["class", "pointer", 3, "ngClass", "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "fill-space"], [1, "pointer", 3, "ngClass", "routerLink", "click"]],
      template: function PreLoginMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "responsive", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreLoginMenuComponent_a_1_Template, 4, 14, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuList);
        }
      },
      directives: [_shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_3__["ResponsiveComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]],
      styles: ["a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: white;\r\n    padding: 12px 18px;\r\n  }\r\n\r\n  a[_ngcontent-%COMP%]:hover{\r\n    background-color: dimgrey;\r\n  }\r\n\r\n  .activeMenu[_ngcontent-%COMP%], .activeMenu[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{\r\n    background-color: black !important;\r\n    color: rgb(66, 228, 66) !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlLWxvZ2luL3ByZS1sb2dpbi1tZW51L3ByZS1sb2dpbi1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTs7SUFFRSxrQ0FBa0M7SUFDbEMsa0NBQWtDO0VBQ3BDIiwiZmlsZSI6InNyYy9hcHAvcHJlLWxvZ2luL3ByZS1sb2dpbi1tZW51L3ByZS1sb2dpbi1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE4cHg7XHJcbiAgfVxyXG5cclxuICBhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGltZ3JleTtcclxuICB9XHJcblxyXG4gIC5hY3RpdmVNZW51LFxyXG4gIC5hY3RpdmVNZW51PiAubWF0LWljb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHJnYig2NiwgMjI4LCA2NikgIWltcG9ydGFudDtcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreLoginMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pre-login-menu',
          templateUrl: './pre-login-menu.component.html',
          styleUrls: ['./pre-login-menu.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        toggleSideMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pre-login/pre-login-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pre-login/pre-login-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: PreLoginRoutingModule */

  /***/
  function srcAppPreLoginPreLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreLoginRoutingModule", function () {
      return PreLoginRoutingModule;
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


    var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sign-in/sign-in.component */
    "./src/app/pre-login/sign-in/sign-in.component.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/pre-login/sign-up/sign-up.component.ts");
    /* harmony import */


    var _pre_login_pre_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pre-login/pre-login.component */
    "./src/app/pre-login/pre-login/pre-login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/pre-login/home/home.component.ts");
    /* harmony import */


    var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about-us/about-us.component */
    "./src/app/pre-login/about-us/about-us.component.ts");
    /* harmony import */


    var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./contact-us/contact-us.component */
    "./src/app/pre-login/contact-us/contact-us.component.ts");
    /* harmony import */


    var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./faculty/faculty.component */
    "./src/app/pre-login/faculty/faculty.component.ts");
    /* harmony import */


    var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./gallery/gallery.component */
    "./src/app/pre-login/gallery/gallery.component.ts");

    var routes = [{
      path: 'guest',
      component: _pre_login_pre_login_component__WEBPACK_IMPORTED_MODULE_4__["PreLoginComponent"],
      children: [{
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        outlet: "preLoginOutlet"
      }, {
        path: 'aboutUs',
        component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__["AboutUsComponent"],
        outlet: "preLoginOutlet"
      }, {
        path: 'contactUs',
        component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__["ContactUsComponent"],
        outlet: "preLoginOutlet"
      }, {
        path: 'faculty',
        component: _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_8__["FacultyComponent"],
        outlet: "preLoginOutlet"
      }, {
        path: 'gallery',
        component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"],
        outlet: "preLoginOutlet"
      }, {
        path: 'signin',
        component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"],
        outlet: "preLoginOutlet"
      }, {
        path: 'singup',
        component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"],
        outlet: "preLoginOutlet"
      }]
    }];

    var PreLoginRoutingModule = function PreLoginRoutingModule() {
      _classCallCheck(this, PreLoginRoutingModule);
    };

    PreLoginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PreLoginRoutingModule
    });
    PreLoginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PreLoginRoutingModule_Factory(t) {
        return new (t || PreLoginRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PreLoginRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreLoginRoutingModule, [{
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
  "./src/app/pre-login/pre-login.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pre-login/pre-login.module.ts ***!
    \***********************************************/

  /*! exports provided: PreLoginModule */

  /***/
  function srcAppPreLoginPreLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreLoginModule", function () {
      return PreLoginModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _pre_login_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pre-login-routing.module */
    "./src/app/pre-login/pre-login-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sign-in/sign-in.component */
    "./src/app/pre-login/sign-in/sign-in.component.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/pre-login/sign-up/sign-up.component.ts");
    /* harmony import */


    var _services_pre_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/pre-login.service */
    "./src/app/pre-login/services/pre-login.service.ts");
    /* harmony import */


    var _pre_login_pre_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pre-login/pre-login.component */
    "./src/app/pre-login/pre-login/pre-login.component.ts");
    /* harmony import */


    var _pre_login_menu_pre_login_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pre-login-menu/pre-login-menu.component */
    "./src/app/pre-login/pre-login-menu/pre-login-menu.component.ts");
    /* harmony import */


    var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/sign-in.service */
    "./src/app/pre-login/services/sign-in.service.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/pre-login/home/home.component.ts");
    /* harmony import */


    var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./about-us/about-us.component */
    "./src/app/pre-login/about-us/about-us.component.ts");
    /* harmony import */


    var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./contact-us/contact-us.component */
    "./src/app/pre-login/contact-us/contact-us.component.ts");
    /* harmony import */


    var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./faculty/faculty.component */
    "./src/app/pre-login/faculty/faculty.component.ts");
    /* harmony import */


    var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./gallery/gallery.component */
    "./src/app/pre-login/gallery/gallery.component.ts");
    /* harmony import */


    var _pre_login_footer_pre_login_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pre-login-footer/pre-login-footer.component */
    "./src/app/pre-login/pre-login-footer/pre-login-footer.component.ts");
    /* harmony import */


    var _pre_login_header_pre_login_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pre-login-header/pre-login-header.component */
    "./src/app/pre-login/pre-login-header/pre-login-header.component.ts");
    /* harmony import */


    var _common_sections_admission_process_admission_process_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./common-sections/admission-process/admission-process.component */
    "./src/app/pre-login/common-sections/admission-process/admission-process.component.ts");
    /* harmony import */


    var _common_sections_director_speak_director_speak_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./common-sections/director-speak/director-speak.component */
    "./src/app/pre-login/common-sections/director-speak/director-speak.component.ts");
    /* harmony import */


    var _common_sections_general_school_rules_general_school_rules_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./common-sections/general-school-rules/general-school-rules.component */
    "./src/app/pre-login/common-sections/general-school-rules/general-school-rules.component.ts");
    /* harmony import */


    var _common_sections_guardian_reviews_guardian_reviews_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./common-sections/guardian-reviews/guardian-reviews.component */
    "./src/app/pre-login/common-sections/guardian-reviews/guardian-reviews.component.ts");
    /* harmony import */


    var _common_sections_our_mission_our_mission_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./common-sections/our-mission/our-mission.component */
    "./src/app/pre-login/common-sections/our-mission/our-mission.component.ts");
    /* harmony import */


    var _common_sections_our_vision_our_vision_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./common-sections/our-vision/our-vision.component */
    "./src/app/pre-login/common-sections/our-vision/our-vision.component.ts");
    /* harmony import */


    var _common_sections_principal_speak_principal_speak_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./common-sections/principal-speak/principal-speak.component */
    "./src/app/pre-login/common-sections/principal-speak/principal-speak.component.ts");
    /* harmony import */


    var _common_sections_what_we_offer_what_we_offer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./common-sections/what-we-offer/what-we-offer.component */
    "./src/app/pre-login/common-sections/what-we-offer/what-we-offer.component.ts");

    var PreLoginModule = function PreLoginModule() {
      _classCallCheck(this, PreLoginModule);
    };

    PreLoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PreLoginModule
    });
    PreLoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PreLoginModule_Factory(t) {
        return new (t || PreLoginModule)();
      },
      providers: [_services_pre_login_service__WEBPACK_IMPORTED_MODULE_5__["PreLoginService"], _services_sign_in_service__WEBPACK_IMPORTED_MODULE_8__["SignInService"]],
      imports: [[_pre_login_routing_module__WEBPACK_IMPORTED_MODULE_1__["PreLoginRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PreLoginModule, {
        declarations: [_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"], _pre_login_pre_login_component__WEBPACK_IMPORTED_MODULE_6__["PreLoginComponent"], _pre_login_menu_pre_login_menu_component__WEBPACK_IMPORTED_MODULE_7__["PreLoginMenuComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_11__["ContactUsComponent"], _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_12__["FacultyComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_13__["GalleryComponent"], _pre_login_footer_pre_login_footer_component__WEBPACK_IMPORTED_MODULE_14__["PreLoginFooterComponent"], _pre_login_header_pre_login_header_component__WEBPACK_IMPORTED_MODULE_15__["PreLoginHeaderComponent"], _common_sections_admission_process_admission_process_component__WEBPACK_IMPORTED_MODULE_16__["AdmissionProcessComponent"], _common_sections_director_speak_director_speak_component__WEBPACK_IMPORTED_MODULE_17__["DirectorSpeakComponent"], _common_sections_general_school_rules_general_school_rules_component__WEBPACK_IMPORTED_MODULE_18__["GeneralSchoolRulesComponent"], _common_sections_guardian_reviews_guardian_reviews_component__WEBPACK_IMPORTED_MODULE_19__["GuardianReviewsComponent"], _common_sections_our_mission_our_mission_component__WEBPACK_IMPORTED_MODULE_20__["OurMissionComponent"], _common_sections_our_vision_our_vision_component__WEBPACK_IMPORTED_MODULE_21__["OurVisionComponent"], _common_sections_principal_speak_principal_speak_component__WEBPACK_IMPORTED_MODULE_22__["PrincipalSpeakComponent"], _common_sections_what_we_offer_what_we_offer_component__WEBPACK_IMPORTED_MODULE_23__["WhatWeOfferComponent"]],
        imports: [_pre_login_routing_module__WEBPACK_IMPORTED_MODULE_1__["PreLoginRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreLoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_pre_login_routing_module__WEBPACK_IMPORTED_MODULE_1__["PreLoginRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
          declarations: [_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"], _pre_login_pre_login_component__WEBPACK_IMPORTED_MODULE_6__["PreLoginComponent"], _pre_login_menu_pre_login_menu_component__WEBPACK_IMPORTED_MODULE_7__["PreLoginMenuComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_11__["ContactUsComponent"], _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_12__["FacultyComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_13__["GalleryComponent"], _pre_login_footer_pre_login_footer_component__WEBPACK_IMPORTED_MODULE_14__["PreLoginFooterComponent"], _pre_login_header_pre_login_header_component__WEBPACK_IMPORTED_MODULE_15__["PreLoginHeaderComponent"], _common_sections_admission_process_admission_process_component__WEBPACK_IMPORTED_MODULE_16__["AdmissionProcessComponent"], _common_sections_director_speak_director_speak_component__WEBPACK_IMPORTED_MODULE_17__["DirectorSpeakComponent"], _common_sections_general_school_rules_general_school_rules_component__WEBPACK_IMPORTED_MODULE_18__["GeneralSchoolRulesComponent"], _common_sections_guardian_reviews_guardian_reviews_component__WEBPACK_IMPORTED_MODULE_19__["GuardianReviewsComponent"], _common_sections_our_mission_our_mission_component__WEBPACK_IMPORTED_MODULE_20__["OurMissionComponent"], _common_sections_our_vision_our_vision_component__WEBPACK_IMPORTED_MODULE_21__["OurVisionComponent"], _common_sections_principal_speak_principal_speak_component__WEBPACK_IMPORTED_MODULE_22__["PrincipalSpeakComponent"], _common_sections_what_we_offer_what_we_offer_component__WEBPACK_IMPORTED_MODULE_23__["WhatWeOfferComponent"]],
          exports: [],
          providers: [_services_pre_login_service__WEBPACK_IMPORTED_MODULE_5__["PreLoginService"], _services_sign_in_service__WEBPACK_IMPORTED_MODULE_8__["SignInService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pre-login/pre-login/pre-login.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pre-login/pre-login/pre-login.component.ts ***!
    \************************************************************/

  /*! exports provided: PreLoginComponent */

  /***/
  function srcAppPreLoginPreLoginPreLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreLoginComponent", function () {
      return PreLoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_component_boxes_small_screen_small_screen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/component/boxes/small-screen/small-screen.component */
    "./src/app/shared/component/boxes/small-screen/small-screen.component.ts");
    /* harmony import */


    var _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/component/boxes/row/row.component */
    "./src/app/shared/component/boxes/row/row.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _pre_login_menu_pre_login_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../pre-login-menu/pre-login-menu.component */
    "./src/app/pre-login/pre-login-menu/pre-login-menu.component.ts");
    /* harmony import */


    var _pre_login_header_pre_login_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../pre-login-header/pre-login-header.component */
    "./src/app/pre-login/pre-login-header/pre-login-header.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/component/boxes/large-screen/large-screen.component */
    "./src/app/shared/component/boxes/large-screen/large-screen.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pre_login_footer_pre_login_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../pre-login-footer/pre-login-footer.component */
    "./src/app/pre-login/pre-login-footer/pre-login-footer.component.ts");

    var PreLoginComponent =
    /*#__PURE__*/
    function () {
      function PreLoginComponent() {
        _classCallCheck(this, PreLoginComponent);

        this.showShideNav = false;
      }

      _createClass(PreLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PreLoginComponent;
    }();

    PreLoginComponent.ɵfac = function PreLoginComponent_Factory(t) {
      return new (t || PreLoginComponent)();
    };

    PreLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreLoginComponent,
      selectors: [["app-pre-login"]],
      decls: 20,
      vars: 1,
      consts: [[3, "hidden"], ["fxFlex", "300px", 1, "sideNav", "sideMenuColors"], [3, "toggleSideMenu"], ["fxFlex", "", 1, "closeSideNavDiv", 3, "click"], [2, "font-size", "30px", 3, "click"], [1, "fixedHeader", "preLoginHeader"], [1, "preLoginContent", "contentBgImage"], ["name", "preLoginOutlet"]],
      template: function PreLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small-screen", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-pre-login-menu", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSideMenu", function PreLoginComponent_Template_app_pre_login_menu_toggleSideMenu_3_listener($event) {
            return ctx.showShideNav = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreLoginComponent_Template_div_click_8_listener($event) {
            return ctx.showShideNav = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-pre-login-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small-screen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreLoginComponent_Template_mat_icon_click_12_listener($event) {
            return ctx.showShideNav = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "large-screen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-pre-login-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-pre-login-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showShideNav);
        }
      },
      directives: [_shared_component_boxes_small_screen_small_screen_component__WEBPACK_IMPORTED_MODULE_1__["SmallScreenComponent"], _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_2__["ROWComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _pre_login_menu_pre_login_menu_component__WEBPACK_IMPORTED_MODULE_4__["PreLoginMenuComponent"], _pre_login_header_pre_login_header_component__WEBPACK_IMPORTED_MODULE_5__["PreLoginHeaderComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_7__["LargeScreenComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _pre_login_footer_pre_login_footer_component__WEBPACK_IMPORTED_MODULE_9__["PreLoginFooterComponent"]],
      styles: [".preLoginHeader[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n.preLoginContent[_ngcontent-%COMP%]{\r\n    min-height: 80vh;\r\n    padding: 10px 5px 25px 5px;\r\n    background-color: var(--main-bg-color);\r\n}\r\n\r\n.sidenavContainer[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 0px;\r\n    bottom: 0px;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n\r\n.sideNavContent[_ngcontent-%COMP%]{\r\n  color: var(--main-bg-color);\r\n  }\r\n\r\n.sideNavDiv[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 999;\r\n  }\r\n\r\n.sideNav[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    position: fixed;\r\n    z-index: 999;\r\n    height: 100vh;\r\n    overflow: auto;\r\n  }\r\n\r\n.closeSideNavDiv[_ngcontent-%COMP%]{\r\n    background-color: #000000a1;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    z-index: 900;\r\n  }\r\n\r\n.sideMenuColors[_ngcontent-%COMP%]{\r\n    background-color: var(--sidemenu-color);\r\n    color: var(--sidemenu-text-color);\r\n  }\r\n\r\n.loadingData[_ngcontent-%COMP%]{\r\n    padding: 50px 20px 50px 25px;\r\n  }\r\n\r\n.loadingPage[_ngcontent-%COMP%]{\r\n    background-color: #000000b8;\r\n  }\r\n\r\n.lowOpacity[_ngcontent-%COMP%]{\r\n    opacity: 0.5 !important;\r\n  }\r\n\r\n.hide-overflow[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    height: 100vh;\r\n    width: 100%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlLWxvZ2luL3ByZS1sb2dpbi9wcmUtbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsT0FBTztJQUNQLFFBQVE7RUFDVjs7QUFFQTtFQUNBLDJCQUEyQjtFQUMzQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7RUFDZDs7QUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7RUFDZDs7QUFFQTtJQUNFLHVDQUF1QztJQUN2QyxpQ0FBaUM7RUFDbkM7O0FBRUE7SUFDRSw0QkFBNEI7RUFDOUI7O0FBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0FBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL3ByZS1sb2dpbi9wcmUtbG9naW4vcHJlLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJlTG9naW5IZWFkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByZUxvZ2luQ29udGVudHtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweCAyNXB4IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xyXG59XHJcblxyXG4uc2lkZW5hdkNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlTmF2Q29udGVudHtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlTmF2RGl2e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgfVxyXG5cclxuICAuc2lkZU5hdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlU2lkZU5hdkRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBhMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTAwO1xyXG4gIH1cclxuXHJcbiAgLnNpZGVNZW51Q29sb3Jze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZW1lbnUtY29sb3IpO1xyXG4gICAgY29sb3I6IHZhcigtLXNpZGVtZW51LXRleHQtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgLmxvYWRpbmdEYXRhe1xyXG4gICAgcGFkZGluZzogNTBweCAyMHB4IDUwcHggMjVweDtcclxuICB9XHJcblxyXG4gIC5sb2FkaW5nUGFnZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBiODtcclxuICB9XHJcblxyXG4gIC5sb3dPcGFjaXR5e1xyXG4gICAgb3BhY2l0eTogMC41ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaGlkZS1vdmVyZmxvd3tcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pre-login',
          templateUrl: './pre-login.component.html',
          styleUrls: ['./pre-login.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pre-login/services/pre-login.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pre-login/services/pre-login.service.ts ***!
    \*********************************************************/

  /*! exports provided: PreLoginService */

  /***/
  function srcAppPreLoginServicesPreLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreLoginService", function () {
      return PreLoginService;
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

    var PreLoginService =
    /*#__PURE__*/
    function () {
      function PreLoginService(_http) {
        _classCallCheck(this, PreLoginService);

        this._http = _http;
      }

      _createClass(PreLoginService, [{
        key: "signIn",
        value: function signIn(loginId, password) {
          return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "signin");
        }
      }, {
        key: "signOut",
        value: function signOut() {}
      }]);

      return PreLoginService;
    }();

    PreLoginService.ɵfac = function PreLoginService_Factory(t) {
      return new (t || PreLoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    PreLoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PreLoginService,
      factory: PreLoginService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreLoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pre-login/services/sign-in.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pre-login/services/sign-in.service.ts ***!
    \*******************************************************/

  /*! exports provided: SignInService */

  /***/
  function srcAppPreLoginServicesSignInServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInService", function () {
      return SignInService;
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

    var SignInService =
    /*#__PURE__*/
    function () {
      function SignInService(_http) {
        _classCallCheck(this, SignInService);

        this._http = _http;
        this.apiPrefix = "api/SignIn/";
      }

      _createClass(SignInService, [{
        key: "SignIn",
        value: function SignIn(loginData) {
          return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "authenticate", loginData);
        }
      }]);

      return SignInService;
    }();

    SignInService.ɵfac = function SignInService_Factory(t) {
      return new (t || SignInService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    SignInService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SignInService,
      factory: SignInService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pre-login/sign-in/sign-in.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pre-login/sign-in/sign-in.component.ts ***!
    \********************************************************/

  /*! exports provided: SignInComponent */

  /***/
  function srcAppPreLoginSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
      return SignInComponent;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/shared/component/dynamic-form/field.interface */
    "./src/app/shared/component/dynamic-form/field.interface.ts");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/sign-in.service */
    "./src/app/pre-login/services/sign-in.service.ts");
    /* harmony import */


    var _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/component/boxes/row/row.component */
    "./src/app/shared/component/boxes/row/row.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/component/boxes/card/card.component */
    "./src/app/shared/component/boxes/card/card.component.ts");
    /* harmony import */


    var _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../shared/component/dynamic-form/dynamic-form/dynamic-form.component */
    "./src/app/shared/component/dynamic-form/dynamic-form/dynamic-form.component.ts");
    /* harmony import */


    var _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../shared/component/buttons/form-buttons/form-buttons.component */
    "./src/app/shared/component/buttons/form-buttons/form-buttons.component.ts");

    var SignInComponent =
    /*#__PURE__*/
    function () {
      function SignInComponent(signService, _storage, sharedService, _router) {
        _classCallCheck(this, SignInComponent);

        this.signService = signService;
        this._storage = _storage;
        this.sharedService = sharedService;
        this._router = _router;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.fieldsConfig = [{
          isViewMode: false,
          type: "select",
          label: "User Type",
          name: "userType",
          icon: "nature_people",
          options: _env_environment__WEBPACK_IMPORTED_MODULE_5__["MasterData"].signInType,
          validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_4__["validationType"].required()]
        }, {
          isViewMode: false,
          type: "input",
          label: "Login Id",
          inputType: "text",
          name: "loginId",
          icon: "security",
          validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_4__["validationType"].required()]
        }, {
          isViewMode: false,
          type: "input",
          label: "Password",
          inputType: "password",
          name: "password",
          validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_4__["validationType"].required()]
        }];
        this.hide = true;
        this._isLoading = false;
        this.mainForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_5__["MasterData"]; //--- Clear previous storages if any ---

        this._storage.removeAllItems();
      }

      _createClass(SignInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.sharedService.currentSchoolId("293535a80000000000000000");
          this.sharedService.currentSchoolBranchId("293543f50000000000000000");
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(event) {
          var _this2 = this;

          this.mainForm.markAllAsTouched();
          event.preventDefault();
          event.stopPropagation();

          if (this.mainForm.valid) {
            this._isLoading = true;
            this.signService.SignIn(this.mainForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$)).subscribe(function (data) {
              if (data.length > 0) {
                data = data[0];

                _this2.setUpUserSession(data);

                _this2.sharedService.openSnackBar("Login Id and Password verified successfully.", "x", "success", 2000);
              } else {
                _this2.sharedService.openSnackBar("Invalid login details.", "x", "fail");
              }

              _this2._isLoading = false;
            }, function (error) {
              _this2._isLoading = false;
              alert("Sorry! Unable to login." + error);
            });
          } else {
            this.sharedService.openSnackBar("Please enter your credentials properly.", "x", "fail");
          }
        }
      }, {
        key: "setUpUserSession",
        value: function setUpUserSession(data) {
          this.sharedService.loggedInData(JSON.stringify(data));
          this.sharedService.currentSchoolId(data["schoolId"]);
          this.sharedService.currentSchoolBranchId(data["schoolBranchId"]);
          this.setupUserIdAndRoleId(data);
        }
      }, {
        key: "setupUserIdAndRoleId",
        value: function setupUserIdAndRoleId(data) {
          switch (this.mainForm.controls["userType"].value) {
            case "employee":
            case "devTeam":
              {
                console.log("employee Logged in");
                this.sharedService.CurrentUserId(data["_id"]);

                if (data["roles"].length === 1) {
                  this.sharedService.currentUserRoleId(data["roles"][0]);
                  this.navigateTODashboard();
                } else {
                  this.sharedService.currentUserRoleId(null);

                  this._storage.switchRole();
                }

                break;
              }

            case "student":
              {
                console.log("student Logged in");
                this.sharedService.CurrentUserId(data["studentId"]);
                this.sharedService.currentUserRoleId(this.masterData.studentRoleId);
                this.navigateTODashboard();
                break;
              }

            case "guardian":
              {
                console.log("guardian Logged in");
                this.sharedService.CurrentUserId(data["guardianId"]);
                this.sharedService.currentUserRoleId(this.masterData.guardianRoleId);
                this.navigateTODashboard();
                break;
              }
          }
        }
      }, {
        key: "navigateTODashboard",
        value: function navigateTODashboard() {
          this._storage.navigateTODashboard();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next(true);
          this.unsubscribe$.complete();
        }
      }]);

      return SignInComponent;
    }();

    SignInComponent.ɵfac = function SignInComponent_Factory(t) {
      return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sign_in_service__WEBPACK_IMPORTED_MODULE_6__["SignInService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]));
    };

    SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignInComponent,
      selectors: [["app-sign-in"]],
      decls: 11,
      vars: 14,
      consts: [["fxFlex", ""], ["fxFlex.gt-sm", "40%", "fxFlex.sm", "60%", "fxFlex", "80%", 3, "icon", "title", "subTitle", "bgImage", "loading", "cardButtons"], [3, "formGroup", "ngSubmit"], [3, "onlyColumn", "form", "fields", "addEmptyDiv"], [3, "form", "iconSave", "saveLabel"]],
      template: function SignInComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_7_listener($event) {
            return ctx.onSubmit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dynamic-form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "form-buttons", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "lock")("title", "Login")("subTitle", "Please enter your Login Id and Password.")("bgImage", "bg-google-phone")("loading", ctx._isLoading)("cardButtons", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mainForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("onlyColumn", true)("form", ctx.mainForm)("fields", ctx.fieldsConfig)("addEmptyDiv", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.mainForm)("iconSave", "vpn_key")("saveLabel", "Login");
        }
      },
      directives: [_shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_10__["ROWComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_12__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_13__["DynamicFormComponent"], _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_14__["FormButtonsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZS1sb2dpbi9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sign-in',
          templateUrl: './sign-in.component.html',
          styleUrls: ['./sign-in.component.css']
        }]
      }], function () {
        return [{
          type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_6__["SignInService"]
        }, {
          type: _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
        }, {
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pre-login/sign-up/sign-up.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pre-login/sign-up/sign-up.component.ts ***!
    \********************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppPreLoginSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");

    var SignUpComponent =
    /*#__PURE__*/
    function () {
      function SignUpComponent(_sessionService) {
        _classCallCheck(this, SignUpComponent);

        this._sessionService = _sessionService;
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
      return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]));
    };

    SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignUpComponent,
      selectors: [["app-sign-up"]],
      decls: 2,
      vars: 0,
      template: function SignUpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\nsign-up works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["div[_ngcontent-%COMP%]{\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlLWxvZ2luL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvcHJlLWxvZ2luL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gIFxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sign-up',
          templateUrl: './sign-up.component.html',
          styleUrls: ['./sign-up.component.css']
        }]
      }], function () {
        return [{
          type: _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pre-login-pre-login-module-es5.js.map