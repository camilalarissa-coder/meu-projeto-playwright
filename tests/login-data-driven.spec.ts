import { test, expect } from '../fixtures/auth.fixture';

const cenarios = [
  {
    nome: 'cliente válido',
    email: 'user@system.com',
    senha: 'UserPassword123',
    sucesso: true,
  },
  {
    nome: 'administrador válido',
    email: 'admin@system.com',
    senha: 'AdminPassword123',
    sucesso: true,
  },
  {
    nome: 'senha incorreta',
    email: 'user@system.com',
    senha: 'SenhaErrada123',
    sucesso: false,
  },
];

for (const cenario of cenarios) {
  test(`Data-driven: ${cenario.nome}`, async ({ loginPage, page }) => {
    await loginPage.login(cenario.email, cenario.senha);

    if (cenario.sucesso) {
      await expect(page).toHaveURL(/painel/i);
    } else {
      await expect(loginPage.mensagemErro).toBeVisible();
    }
  });
}