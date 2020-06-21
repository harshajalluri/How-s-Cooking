import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Items in';
  errorMessage = '';
  ItemID:number;
  ItemName:string;
  watchlive: boolean = false;
  items : Array<Object>=[
    {
      ItemID:1,
      ItemName:"Swagat Grand"
  },
  {
    ItemID:2,
    ItemName:"Santhosh Family Dabha"
  },
    {
      ItemID: 3,
      ItemName: "Dosa Delight"
    },
    {
      ItemID: 4,
      ItemName: "Bhadras"
    }
  ];
  agree : boolean;
  agree1 : boolean;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
  btnClick(): void {
    this.watchlive = ! this.watchlive;
  }
}