import {Page, Locator} from '@playwright/test';


export class LoginPage {

readonly page: Page;

readonly inputuser: Locator;
readonly inputpassword: Locator;
readonly loginbtn: Locator;
readonly loginhead: Locator;
readonly dashboard: Locator;
readonly forgetpassword: Locator;
readonly resetpassword: Locator;

   constructor(page: Page){

    this.page = page;
    this.inputuser = page.getByPlaceholder('Username');
    this.inputpassword = page.getByPlaceholder('Password');
    this.loginbtn = page.getByRole('button', { name: 'Login'});
    this.loginhead = page.getByRole('heading', { name: 'Login' });
    this.dashboard = page.getByRole('heading', { name: 'Dashboard' });
    this.forgetpassword = page.getByText('Forgot your password?');
    this.resetpassword = page.getByRole('button', {name: ' Reset Password '});
   

   }

   async loginWithUsernamePassword(username: string, password: string){

    await this.inputuser.fill(username);
    await this.inputpassword.fill(password);
    await this.loginbtn.click();

}





}

