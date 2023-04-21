import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'lib-d3-lib',
  template: `
    <p>
      d3-lib works!
    </p>
  `,
  styles: [
  ]
})
export class D3LibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  zoom: any;
  d3() {
    this.zoom = d3.zoom().scaleExtent([0.2, 2])
  }

}
