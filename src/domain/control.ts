export class Control {
    public right: boolean = false;
    public left: boolean = false;
  
    private static instance: Control;
  
    private constructor() {
      this.initControlListeners();
    }
  
    public static getInstance(): Control {
      if (!Control.instance) {
        Control.instance = new Control();
      }
  
      return Control.instance;
    }
  
    private initControlListeners(): void {
      this.initKeydownListener();
      this.initKeyupListener();
    }
  
    private initKeydownListener(): void {
      document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key == 'Right' || e.key == 'ArrowRight') {
          this.right = true;
        } else if (e.key == 'Left' || e.key == 'ArrowLeft') {
          this.left = true;
        }
      });
    }
  
    private initKeyupListener(): void {
      document.addEventListener('keyup', (e: KeyboardEvent) => {
        if (e.key == 'Right' || e.key == 'ArrowRight') {
          this.right = false;
        } else if (e.key == 'Left' || e.key == 'ArrowLeft') {
          this.left = false;
        }
      });
    }
  }
  