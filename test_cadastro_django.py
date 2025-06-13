from django.test import TestCase
from django.contrib.auth.models import User
from django.urls import reverse

class CadastroUsuarioTestCase(TestCase):
    def setUp(self):
        self.url = reverse('cadastro')  # A URL deve estar configurada no urls.py com o nome 'cadastro'
        self.user_data = {
            'username': 'testuser',
            'email': 'testuser@verdemoney.com',
            'password1': 'SenhaSegura123!',
            'password2': 'SenhaSegura123!',
        }

    def test_cadastro_com_dados_validos(self):
        response = self.client.post(self.url, self.user_data)
        self.assertEqual(response.status_code, 302)  # Redirecionamento esperado após cadastro
        self.assertTrue(User.objects.filter(username='testuser').exists())

    def test_cadastro_com_senhas_diferentes(self):
        self.user_data['password2'] = 'SenhaDiferente!'
        response = self.client.post(self.url, self.user_data)
        self.assertEqual(response.status_code, 200)
        self.assertFormError(response, 'form', 'password2', "As senhas não coincidem.")

    def test_cadastro_com_email_duplicado(self):
        User.objects.create_user(username='existinguser', email='testuser@verdemoney.com', password='123456')
        response = self.client.post(self.url, self.user_data)
        self.assertEqual(response.status_code, 200)
        self.assertFormError(response, 'form', 'email', "Email já cadastrado.")

    def test_cadastro_com_campos_vazios(self):
        response = self.client.post(self.url, {})
        self.assertEqual(response.status_code, 200)
        self.assertFormError(response, 'form', 'username', "Este campo é obrigatório.")
