import { Component, OnInit } from '@angular/core';
import {GameFile} from '../../model';
import {GameService} from '../../service/game.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  jsFiles: GameFile[] = [
    {id: 's1', src: './assets/testGame/js/libs/pixi.js'},
    {id: 's2', src: './assets/testGame/js/libs/pixi-tilemap.js'},
    {id: 's3', src: './assets/testGame/js/libs/pixi-picture.js'},
    {id: 's4', src: './assets/testGame/js/libs/fpsmeter.js'},
    {id: 's5', src: './assets/testGame/js/libs/lz-string.js'},
    {id: 's6', src: './assets/testGame/js/libs/iphone-inline-video.browser.js'},
    {id: 's7', src: './assets/testGame/js/rpg_core.js'},
    {id: 's8', src: './assets/testGame/js/rpg_managers.js'},
    {id: 's9', src: './assets/testGame/js/rpg_objects.js'},
    {id: 's10', src: './assets/testGame/js/rpg_scenes.js'},
    {id: 's11', src: './assets/testGame/js/rpg_sprites.js'},
    {id: 's12', src: './assets/testGame/js/rpg_windows.js'},
    {id: 's13', src: './assets/testGame/js/plugins.js'},
    {id: 's14', src: './assets/testGame/js/main.js'},
  ];

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    document.body.setAttribute('style', 'background:black');
    this.gameService.startGame(this.jsFiles);
  }

  /**
   * Reload the current page.
   */
  refresh(): void {
    window.location.reload();
  }

  /**
   * Remove the white strip.
   */
  remove(): void {
    document.getElementById('container').remove();
  }

}
