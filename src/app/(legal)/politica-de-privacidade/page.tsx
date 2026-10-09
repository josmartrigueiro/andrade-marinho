import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Política de Privacidade — Portal do Cliente",
  description:
    "Saiba como o Portal do Cliente Andrade Marinho trata seus dados pessoais e como entrar em contato.",
  alternates: { canonical: "/politica-de-privacidade" },
  openGraph: {
    title: "Política de Privacidade — Portal do Cliente",
    description:
      "Política de Privacidade do Portal do Cliente Andrade Marinho.",
    url: "/politica-de-privacidade",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Política de Privacidade</h1>
      <p className={styles.updated}>
        Aplicativo Portal do Cliente · Última atualização:{" "}
        <time dateTime="2026-10-09">9 de outubro de 2026</time>
      </p>

      <div className={styles.intro}>
        <p>
          Esta Política de Privacidade explica como o{" "}
          <strong>Grupo Andrade Marinho</strong> coleta, usa, armazena e protege
          os dados pessoais de quem usa o aplicativo{" "}
          <strong>Portal do Cliente Andrade Marinho</strong> (o "Aplicativo").
          Ela segue a Lei Geral de Proteção de Dados Pessoais (Lei nº
          13.709/2018 — LGPD). Ao usar o Aplicativo, você declara que leu e
          entendeu este documento.
        </p>
      </div>

      <h2>
        <span>1.</span>Quem é o controlador dos dados
      </h2>
      <p>
        O controlador dos dados pessoais tratados no Aplicativo é o Grupo
        Andrade Marinho, inscrito no CNPJ sob o nº{" "}
        <strong>20.650.041/0001-30</strong>, com sede em{" "}
        <strong>
          Av. João Cirilo da Silva, 221 – Bloco B, Sala 1501, CXPST 11 –
          Altiplano Cabo Branco – João Pessoa/PB – CEP 58.046-005
        </strong>
        . Os canais de contato estão na seção 12.
      </p>

      <h2>
        <span>2.</span>Para quem é o Aplicativo
      </h2>
      <p>
        O Aplicativo é destinado a clientes que têm contrato de compra de imóvel
        ou de prestação de serviços com o Grupo Andrade Marinho. Ele permite
        consultar contratos, parcelas e boletos, acompanhar o andamento das
        obras, acessar documentos e abrir chamados de atendimento. O Aplicativo
        não é voltado a menores de 18 anos.
      </p>

      <h2>
        <span>3.</span>Quais dados coletamos
      </h2>
      <section
        className={styles["table-wrap"]}
        aria-label="Categorias de dados pessoais coletados"
        // biome-ignore lint/a11y/noNoninteractiveTabindex: Enables keyboard scrolling of the data table.
        tabIndex={0}
      >
        <table>
          <thead>
            <tr>
              <th>Categoria</th>
              <th>Dados</th>
              <th>Origem</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Identificação e cadastro</td>
              <td>
                Nome, CPF ou CNPJ, e-mail, telefone, código de cliente e senha
                (guardada apenas de forma criptografada, sem possibilidade de
                leitura)
              </td>
              <td>
                Informados por você ou já existentes no nosso cadastro de
                clientes
              </td>
            </tr>
            <tr>
              <td>Contratuais e financeiros</td>
              <td>
                Contratos, unidades adquiridas, valores, parcelas, vencimentos,
                status de pagamento, boletos, extratos e informes de rendimentos
              </td>
              <td>Nossos sistemas internos de gestão</td>
            </tr>
            <tr>
              <td>Imagem de perfil</td>
              <td>Foto que você escolher para o seu perfil (opcional)</td>
              <td>Enviada por você</td>
            </tr>
            <tr>
              <td>Atendimento</td>
              <td>
                Mensagens, fotos, vídeos e arquivos anexados a chamados de
                suporte e a solicitações de documentos
              </td>
              <td>Enviados por você</td>
            </tr>
            <tr>
              <td>Dados de uso e técnicos</td>
              <td>
                Data e hora de acesso, endereço IP, tipo de dispositivo e
                registros técnicos necessários à segurança e ao funcionamento do
                serviço
              </td>
              <td>Gerados automaticamente pelo uso do Aplicativo</td>
            </tr>
          </tbody>
        </table>
      </section>
      <p>
        O Aplicativo <strong>não</strong> coleta sua localização,{" "}
        <strong>não</strong> lê seus contatos e <strong>não</strong> usa
        ferramentas de publicidade ou de rastreamento de terceiros.
      </p>

      <h2>
        <span>4.</span>Permissões do dispositivo
      </h2>
      <p>
        O Aplicativo só pede acesso a recursos do seu aparelho quando você usa a
        função correspondente. Você pode negar ou revogar essas permissões a
        qualquer momento nas configurações do dispositivo.
      </p>
      <ul>
        <li>
          <strong>Fotos e arquivos:</strong> para escolher a foto do perfil e
          anexar imagens a chamados.
        </li>
        <li>
          <strong>Câmera:</strong> para tirar fotos e anexá-las a chamados.
        </li>
        <li>
          <strong>Microfone:</strong> apenas para gravar vídeos com áudio para
          anexar a chamados, se você quiser.
        </li>
        <li>
          <strong>Internet:</strong> para comunicação com nossos servidores.
        </li>
      </ul>

      <h2>
        <span>5.</span>Para que usamos os dados
      </h2>
      <ul>
        <li>Identificar você e permitir o acesso seguro à sua conta;</li>
        <li>
          Mostrar informações dos seus contratos, parcelas, boletos, extratos e
          documentos;
        </li>
        <li>
          Informar o andamento das obras dos empreendimentos vinculados aos seus
          contratos;
        </li>
        <li>Responder a chamados de suporte e solicitações de documentos;</li>
        <li>
          Enviar notificações e e-mails sobre sua conta, como confirmação de
          e-mail, recuperação de senha, vencimentos e novidades dos seus
          contratos;
        </li>
        <li>
          Garantir a segurança do serviço, prevenir fraudes e cumprir obrigações
          legais e regulatórias.
        </li>
      </ul>

      <h2>
        <span>6.</span>Bases legais
      </h2>
      <p>
        Tratamos seus dados com base nas hipóteses previstas no art. 7º da LGPD,
        em especial:
      </p>
      <ul>
        <li>
          <strong>Execução de contrato</strong> e procedimentos preliminares
          relacionados ao contrato do qual você é parte;
        </li>
        <li>
          <strong>Cumprimento de obrigação legal ou regulatória</strong>, como
          obrigações fiscais e contábeis;
        </li>
        <li>
          <strong>Exercício regular de direitos</strong> em processos judiciais,
          administrativos ou arbitrais;
        </li>
        <li>
          <strong>Legítimo interesse</strong>, para segurança, prevenção a
          fraudes e melhoria do atendimento, sempre respeitando seus direitos;
        </li>
        <li>
          <strong>Consentimento</strong>, quando exigido, como no envio opcional
          de foto de perfil e anexos.
        </li>
      </ul>

      <h2>
        <span>7.</span>Com quem compartilhamos
      </h2>
      <p>
        Não vendemos nem alugamos seus dados pessoais. Podemos compartilhá-los
        apenas com:
      </p>
      <ul>
        <li>
          <strong>Prestadores de serviço</strong> que nos ajudam a operar o
          Aplicativo, como hospedagem de servidores, armazenamento de arquivos e
          envio de e-mails, sempre sob obrigação de confidencialidade e
          segurança;
        </li>
        <li>
          <strong>Instituições financeiras</strong> responsáveis pela emissão e
          pelo processamento de boletos e pagamentos;
        </li>
        <li>
          <strong>Autoridades públicas</strong>, quando houver obrigação legal
          ou ordem judicial.
        </li>
      </ul>
      <p>
        Links para boletos, extratos ou documentos podem abrir fora do
        Aplicativo, no navegador do seu aparelho. Nesses casos, também se
        aplicam as políticas do serviço acessado.
      </p>

      <h2>
        <span>8.</span>Armazenamento e segurança
      </h2>
      <p>
        Seus dados ficam em servidores protegidos, e a comunicação entre o
        Aplicativo e nossos servidores é criptografada (HTTPS). As senhas são
        guardadas apenas em forma criptografada (hash). No seu aparelho, as
        credenciais de acesso ficam no armazenamento seguro do sistema
        operacional (Keychain no iOS e Keystore no Android). Adotamos medidas
        técnicas e administrativas para proteger os dados contra acessos não
        autorizados, perda ou alteração. Mesmo assim, nenhum sistema é
        totalmente imune a riscos. Se ocorrer um incidente de segurança
        relevante, avisaremos você e a Autoridade Nacional de Proteção de Dados
        (ANPD), conforme a lei.
      </p>

      <h2>
        <span>9.</span>Por quanto tempo guardamos os dados
      </h2>
      <p>
        Guardamos seus dados enquanto houver relação contratual com você ou
        enquanto sua conta estiver ativa. Depois disso, eles são mantidos apenas
        pelo prazo necessário para cumprir obrigações legais, regulatórias ou
        contratuais e para o exercício regular de direitos. Ao fim desses
        prazos, os dados são excluídos ou anonimizados.
      </p>

      <h2>
        <span>10.</span>Seus direitos
      </h2>
      <p>Conforme o art. 18 da LGPD, você pode solicitar a qualquer momento:</p>
      <ul>
        <li>Confirmação de que tratamos seus dados e acesso a eles;</li>
        <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>
          Anonimização, bloqueio ou eliminação de dados desnecessários,
          excessivos ou tratados em desconformidade com a lei;
        </li>
        <li>
          Portabilidade dos dados a outro fornecedor, nos termos da
          regulamentação;
        </li>
        <li>
          Eliminação dos dados tratados com base no seu consentimento e
          revogação desse consentimento;
        </li>
        <li>
          Informação sobre as entidades com quem compartilhamos seus dados;
        </li>
        <li>
          Revisão de decisões tomadas unicamente com base em tratamento
          automatizado.
        </li>
      </ul>
      <p>
        Para exercer esses direitos, use os canais da seção 12. Também é
        possível apresentar reclamação à ANPD (
        <a href="https://www.gov.br/anpd" rel="noopener">
          www.gov.br/anpd
        </a>
        ).
      </p>

      <h2>
        <span>11.</span>Exclusão da conta
      </h2>
      <p>
        Você pode pedir a exclusão da sua conta no Aplicativo a qualquer
        momento, pelo e-mail indicado na seção 12 ou abrindo um chamado no
        próprio Aplicativo. Após a confirmação da sua identidade, sua conta de
        acesso e os dados associados a ela serão excluídos. Ficam guardados
        apenas os dados que precisamos manter por obrigação legal ou contratual,
        como registros fiscais e informações do contrato de compra, pelo prazo
        previsto na lei.
      </p>

      <h2>
        <span>12.</span>Contato e Encarregado de Dados (DPO)
      </h2>
      <div className={styles.contact}>
        <p>
          <strong>Grupo Andrade Marinho</strong> · CNPJ 20.650.041/0001-30
        </p>
        <p>
          Encarregado pelo tratamento de dados:{" "}
          <strong>Aderaldo da Silva Lima Neto</strong>
        </p>
        <p>
          E-mail:{" "}
          <a href="mailto:ti@andrademarinho.com.br">
            <strong>ti@andrademarinho.com.br</strong>
          </a>
        </p>
        <p>
          Telefone:{" "}
          <a href="tel:+558340090500">
            <strong>(83) 4009-0500</strong>
          </a>
        </p>
        <p>
          Endereço:{" "}
          <strong>
            Av. João Cirilo da Silva, 221 – Bloco B, Sala 1501, CXPST 11 –
            Altiplano Cabo Branco – João Pessoa/PB – CEP 58.046-005
          </strong>
        </p>
      </div>

      <h2>
        <span>13.</span>Alterações desta política
      </h2>
      <p>
        Esta política pode ser atualizada para refletir mudanças no Aplicativo
        ou na legislação. A versão em vigor estará sempre nesta página, com a
        data da última atualização no topo. Se as mudanças forem relevantes,
        avisaremos você pelo Aplicativo ou por e-mail.
      </p>
    </>
  );
}
