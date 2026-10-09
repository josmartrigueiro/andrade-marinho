# Configuração de e-mails em produção

Configure estas variáveis no ambiente de produção da hospedagem e faça um novo deploy:

- `RESEND_API_KEY`: chave de API do Resend com permissão de envio.
- `CONTACT_EMAIL_FROM`: remetente autorizado no Resend (domínio verificado).
- `CONTACT_EMAIL_TO`: endereço que recebe os contatos e cadastros de corretores.

As variáveis são exclusivas do servidor. Não use o prefixo `NEXT_PUBLIC_` nem coloque valores secretos no repositório.

O build não exige essas variáveis. Se alguma estiver ausente, os endpoints de formulário respondem HTTP 503 e não confirmam o recebimento nem enviam e-mails. Com a configuração presente, o envio acontece normalmente pelo Resend.
