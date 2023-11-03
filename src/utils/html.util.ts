export class HtmlUtils {
  public static hideElement(id: string): void {
    const el = document.getElementById(id);

    if (el != null) {
      el.style.display = 'none';
    }
  }

  public static showElement(id: string): void {
    const el = document.getElementById(id);

    if (el != null) {
      el.style.display = 'block';
    }
  }
}
