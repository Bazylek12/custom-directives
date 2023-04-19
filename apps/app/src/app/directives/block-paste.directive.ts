import { Directive, HostListener } from '@angular/core';

@Directive({ selector: 'input[blockPaste], textarea[blockPaste]' })
export class BlockPasteDirective {

  @HostListener('paste', ['$event'])
  block(e: ClipboardEvent) {
    e.preventDefault()
  }
}
