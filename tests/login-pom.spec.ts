import { test, expect } from '../fixtures/auth.fixture';

test.describe('Login da LojaQA com POM', () => {
  test('deve entrar com cliente válido', async ({ loginPage, page }) => {
    await loginPage.login('user@system.com', 'UserPassword123');

    await expect(page).toHaveURL(/painel/i);
  });

  test('deve mostrar erro com senha incorreta', async ({ loginPage }) => {
    await loginPage.login('user@system.com', 'SenhaErrada123');

    await expect(loginPage.mensagemErro).toBeVisible();
  });

  test('o botão entrar deve iniciar desabilitado', async ({ loginPage }) => {
    await expect(loginPage.botaoEntrar).toBeDisabled();
  });
});