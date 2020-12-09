import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  leader: Leader;
  promotion: Promotion;
  constructor(private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService) { }

  ngOnInit(): void {
    this.dishService.getfeaturedDish()
      .subscribe((dish) => dish = this.dish )
    this.promotionService.getfeaturedPromotion()
    .subscribe((promotion) => this.promotion = promotion)
    this.leaderService.getFeaturedLeader()
      .subscribe((leader) => this.leader = leader)
  }

}
