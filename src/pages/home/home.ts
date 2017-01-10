import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import * as Crafty from '../../lib/crafty-min.js';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
 
  }

  
  ionViewDidLoad()
  {

  
      // http://www.thatsoftwaredude.com/content/6209/how-to-make-a-game-using-crafty-js-part-1
      Crafty.init(500,350, document.getElementById('game'));

      Crafty.e('Floor, 2D, DOM, Color').attr({x: 0, y: 300, w: 800, h: 10}).color('#F00');

      var player = Crafty.e('Player, 2D, Canvas, Color, Solid, Twoway, Gravity')
              .attr({x: 0, y: 0, w: 30, h: 30})
              .color('#F00')
              .twoway(200)
              .gravity('Floor')
              .gravityConst(20);

  }

}
