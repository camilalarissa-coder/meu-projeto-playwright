import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private email: Locator;
  private password: Locator;
  private loginBtn: Locator;
  private errorMessage: Locator;
  private statusMessage: Locator;

  constructor(private page: Page) {
    this.email = page.locator('#email');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#loginBtn');
    this.errorMessage = page.locator('#errorMessage');
    this.statusMessage = page.locator('#statusMessage');
  }

  async goto() {
    await this.page.goto(
      'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/login.html'
    );
  }

  async login(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
  }

  get botaoEntrar() {
    return this.loginBtn;
  }

  get mensagemErro() {
    return this.errorMessage;
  }

  get mensagemStatus() {
    return this.statusMessage;
  }

  get campoEmail() {
    return this.email;
  }

  get campoSenha() {
    return this.password;
  }
}