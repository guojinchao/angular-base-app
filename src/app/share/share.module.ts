import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
// 第三方modules
import { NgZorroAntdModule, NZ_I18N, zh_CN } from "ng-zorro-antd";

// 基础模块
const COMMON_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule
];
const COMMON_COMPONENTS = [];
const COMMON_SERVICES = [];
const COMMON_PIPES = [];

// 第三方模块
const PARTY_MODULES = [NgZorroAntdModule];
const PARTY_COMPONENTS = [];
const PARTY_SERVICES = [{ provide: NZ_I18N, useValue: zh_CN }];
const PARTY_PIPES = [];

// 自定义模块
const CUSTOM_MODULES = [];
const CUSTOM_COMPONENTS = [];
const CUSTOM_SERVICES = [];
const CUSTOM_PIPES = [];

@NgModule({
  exports: [...COMMON_MODULES, ...PARTY_MODULES, ...CUSTOM_MODULES],
  imports: [...COMMON_MODULES, ...PARTY_MODULES, ...CUSTOM_MODULES],
  providers: [
    ...COMMON_SERVICES,
    ...COMMON_PIPES,
    ...PARTY_SERVICES,
    ...PARTY_PIPES,
    ...CUSTOM_SERVICES,
    ...CUSTOM_PIPES
  ],
  declarations: [
    ...COMMON_COMPONENTS,
    ...PARTY_COMPONENTS,
    ...CUSTOM_COMPONENTS
  ]
})
export class ShareModule {}
