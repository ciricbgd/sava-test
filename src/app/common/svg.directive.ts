import { Directive, SimpleChanges, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSvg]',
})
export class SvgDirective {
  @Input('appSvg') params: string;
  element: ElementRef;

  icons = new Map();

  constructor(private el: ElementRef) {
    // Magnify Icon
    this.icons.set(
      'magnify',
      `<path
      fill="#C3CDDB"
      d="M29.79 31.56l1.769-1.77c.587-.587.587-1.537.006-2.124l-6.232-6.23c-.281-.282-.662-.438-1.062-.438h-1.02c1.726-2.206 2.75-4.98 2.75-8 0-7.18-5.818-12.998-13-12.998S0 5.818 0 12.999c0 7.18 5.82 12.998 13.001 12.998 3.019 0 5.794-1.024 8-2.75v1.02c0 .4.157.78.438 1.062l6.232 6.23c.587.588 1.537.588 2.119 0zM13 20.997c-4.42 0-8-3.575-8-8C5 8.58 8.575 5 13 5c4.419 0 8 3.574 8 7.999 0 4.418-3.575 7.999-8 7.999z"
    />`
    );
    // Close icon
    this.icons.set(
      'close',
      `<path
      fill="#333539"
      d="M2.451 15.281l5.049-5.05 5.05 5.05c.291.292.765.292 1.058 0l1.173-1.174c.292-.292.292-.766 0-1.058L9.731 8l5.05-5.05c.292-.291.292-.765 0-1.058L13.607.72c-.292-.292-.766-.292-1.058 0L7.5 5.769 2.45.719C2.16.427 1.686.427 1.393.72L.22 1.892c-.292.292-.292.766 0 1.059L5.27 8l-5.05 5.05c-.292.291-.292.765 0 1.058l1.174 1.173c.292.292.766.292 1.058 0z"
    />`
    );

    //Element
    this.element = el;
  }

  ngOnInit() {
    this.el.nativeElement.innerHTML = this.icons.get(this.params);
    this.element = this.el;
  }
}
