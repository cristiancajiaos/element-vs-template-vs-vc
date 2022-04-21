import { Component, ElementRef, OnInit, QueryList, Renderer2, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @ViewChildren("el", { read: ElementRef }) children: QueryList<ElementRef>;

  @ViewChild("tpl", { read: TemplateRef }) tpl: TemplateRef<null>;

  @ViewChild("c", { read: ViewContainerRef }) vcr: ViewContainerRef;

  constructor(
    private renderer: Renderer2,
    private host: ElementRef
  ) { }

  ngAfterViewInit(): void {
    this.vcr.createEmbeddedView(this.tpl);
    this.vcr.createEmbeddedView(this.tpl);
  }

  ngDoCheck(): void {
    console.log('ng doCheck called');
  }

  ngAfterViewChecked(): void {
    console.log(`View added ${this.children.length} ${this.children.first}`)
  }

  ngOnInit(): void {
  }

  remove() {
    this.vcr.remove();
  }

  add() {
    this.vcr.createEmbeddedView(this.tpl);
  }

}
