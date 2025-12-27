import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {

  async ngAfterViewInit() {
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'https://fortelegram.app.n8n.cloud/webhook/00b93be9-b9bd-4c27-af94-bfc4ca8b1c23/chat',

        container: document.querySelector('.chat')
      });
    `;
    document.body.appendChild(script);
  }
  title = 'hotelsProject';
  
}
