export class HtmlUtils {
  public static isMobileDevice(): boolean {
    let isMobile = false;
    const windowWidth: number = window.innerWidth;
    const userAgent = navigator.userAgent;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(userAgent) || windowWidth < 992){
      isMobile = true;
    }

    return isMobile;
  }
}
