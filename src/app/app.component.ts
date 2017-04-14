import { Component } from '@angular/core';

import { remote } from 'electron';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(
		
	) { }


	closeBrowserWindow(): void {

		const remote = require('electron').remote;
		// const BrowserWindow = remote.BrowserWindow;
		// new BrowserWindow({ width: 800, height: 600, show: false});

		// remote.getCurrentWindow().close();

	}

}
