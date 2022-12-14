import './polyfills';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { CdkDragDropSortingExample } from './app/cdk-drag-drop-sorting-example';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  entryComponents: [CdkDragDropSortingExample],
  declarations: [CdkDragDropSortingExample],
  bootstrap: [CdkDragDropSortingExample],
  providers: []
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */