

class User {


    isLoggedIn = () => this.get('firebase:authUser:AIzaSyCWsLlER-JJlGaiNznGZ1RdgE1bbbiLFww:[DEFAULT]') === 'true';
  
    set = (key, value) => indexedDB.setItem(key, value);
  
    get = (key) => this.getLocalStorage(key);
  
    getLocalStorage = (key) => {
      const ret = indexedDB.getItem(key);
      if (ret) {
        console.log(ret);
        return ret;

      }
      return null;
    };
  
    login = async (e) => {
  
      // ログイン処理
      // ログインエラー時には、falseを返してもいいし、returnを別の用途で利用したかったら
      // 例外を出しして呼び出し元でcatchしてもいいかと思います。

    

      this.set('firebase:authUser:AIzaSyCWsLlER-JJlGaiNznGZ1RdgE1bbbiLFww:[DEFAULT]', true);
        // console.log(email-password);
      return true;
      
    };
  
    logout = async () => {
      if (this.isLoggedIn()) {
        this.set('firebase:authUser:AIzaSyCWsLlER-JJlGaiNznGZ1RdgE1bbbiLFww:[DEFAULT]', false);
  
        // ログアウト処理
        //　他に必要な処理があるのならこちら
  
      }
    };
  }
  
  export default new User();