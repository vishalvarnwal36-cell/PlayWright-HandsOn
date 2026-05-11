import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';

test.describe.serial('Orange Login', () => {



  test('has title', async ({ page }) => {
    await page.goto('/');
    const loginPage = new LoginPage(page);

    await expect(loginPage.loginhead).toBeVisible();
    await loginPage.loginWithUsernamePassword("Admin", "admin123");
    await expect(loginPage.dashboard).toBeVisible();

  });

  test('Wrong input', async ({ page }) => {
    await page.goto('/');
    const loginPage = new LoginPage(page);

    await loginPage.loginWithUsernamePassword("Vishal" , "admin123");


  });

  test('Wrong password', async ({ page }) => {
    await page.goto('/');
    const loginPage = new LoginPage(page);

    await loginPage.loginWithUsernamePassword("Vishal" , "admin1234");
    await expect(loginPage.dashboard).not.toBeVisible();

    const errorMessage = page.locator('[class*="oxd-alert-content-text"]');
    await expect(errorMessage).toHaveText('Invalid credentials');
  });


  test('Forgot Password', async({page}) => {

    await page.goto('/');
    const loginPage = new LoginPage(page);

    await loginPage.forgetpassword.click();
    const reset = await page.getByRole('heading', {name: 'Reset Password'});
    await expect(reset).toBeVisible();  
  
    await loginPage.inputuser.fill('Vishal');
    await loginPage.resetpassword.click();
    const resetpass = await page.getByRole('heading', {name: 'Reset Password link sent successfully'});
    await expect(resetpass).toHaveText('Reset Password link sent successfully');

  });

});
