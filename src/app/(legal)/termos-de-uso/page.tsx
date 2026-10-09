import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Termos de Uso — Portal do Cliente",
  description:
    "Condições de acesso e utilização do aplicativo Portal do Cliente Andrade Marinho.",
  alternates: { canonical: "/termos-de-uso" },
  openGraph: {
    title: "Termos de Uso — Portal do Cliente",
    description: "Condições de uso do Portal do Cliente Andrade Marinho.",
    url: "/termos-de-uso",
  },
};

export default function TermsPage() {
  return (
    <>
      <h1>Termos de Uso</h1>
      <p className={styles.updated}>
        Aplicativo Portal do Cliente · Última atualização:{" "}
        <time dateTime="2026-10-09">9 de outubro de 2026</time>
      </p>
      <div className={styles.intro}>
        <p>
          Estes Termos de Uso apresentam as condições para acessar e utilizar o{" "}
          <strong>Portal do Cliente Andrade Marinho</strong> (o “Aplicativo”),
          oferecido pelo <strong>Grupo Andrade Marinho</strong>, CNPJ{" "}
          <strong>20.650.041/0001-30</strong>. Leia este documento e a{" "}
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>{" "}
          antes de utilizar o serviço. Em caso de dúvida, entre em contato pelos
          canais abaixo.
        </p>
      </div>

      <h2>1. Responsável pelo Aplicativo</h2>
      <p>
        O Aplicativo é disponibilizado pelo Grupo Andrade Marinho, CNPJ
        20.650.041/0001-30, com sede na Av. João Cirilo da Silva, 221 – Bloco B,
        Sala 1501, CXPST 11 – Altiplano Cabo Branco – João Pessoa/PB – CEP
        58.046-005.
      </p>

      <h2>2. Finalidade e público</h2>
      <p>
        O Aplicativo é destinado a clientes maiores de 18 anos que possuem
        contrato de compra de imóvel ou de prestação de serviços com o Grupo
        Andrade Marinho. Conforme o vínculo contratual e os recursos
        disponíveis, permite consultar contratos, parcelas e boletos, acompanhar
        obras, acessar documentos e abrir chamados de atendimento.
      </p>
      <p>
        Estes termos regulam o uso do Aplicativo. O contrato de compra do imóvel
        ou de prestação de serviços continua a regular a relação contratual
        correspondente, incluindo valores, prazos e obrigações das partes.
      </p>

      <h2>3. Acesso e segurança da conta</h2>
      <ul>
        <li>
          Forneça informações corretas e mantenha seus dados de contato
          atualizados.
        </li>
        <li>
          Mantenha suas credenciais em sigilo e não compartilhe o acesso à sua
          conta.
        </li>
        <li>
          Utilize apenas contas e informações às quais você tenha acesso
          autorizado.
        </li>
        <li>
          Comunique suspeitas de acesso indevido ou comprometimento das
          credenciais pelos canais de atendimento.
        </li>
      </ul>
      <p>
        Podem ser necessárias verificações de identidade para proteger sua conta
        e os dados vinculados aos seus contratos.
      </p>

      <h2>4. Uso permitido</h2>
      <p>
        Utilize o Aplicativo para consultar suas informações e se comunicar com
        o Grupo Andrade Marinho. Não é permitido:
      </p>
      <ul>
        <li>
          Acessar ou tentar acessar dados de outras pessoas sem autorização;
        </li>
        <li>
          Fraudar informações, se passar por terceiros ou praticar atos
          ilícitos;
        </li>
        <li>
          Interferir no funcionamento do serviço, explorar vulnerabilidades ou
          enviar arquivos maliciosos;
        </li>
        <li>
          Enviar conteúdo ofensivo, ilegal ou que viole direitos de terceiros;
        </li>
        <li>
          Copiar ou explorar comercialmente o Aplicativo e seus elementos
          protegidos sem autorização, ressalvados os usos permitidos por lei.
        </li>
      </ul>

      <h2>5. Consultas, documentos e pagamentos</h2>
      <p>
        As informações apresentadas são provenientes dos sistemas de gestão do
        Grupo Andrade Marinho e podem depender de atualização ou processamento.
        Se identificar divergência em valores, documentos, parcelas ou status de
        pagamento, entre em contato para conferência e correção.
      </p>
      <p>
        Antes de realizar um pagamento, confira os dados do beneficiário e do
        boleto. Em caso de dúvida, confirme a autenticidade pelos canais
        oficiais. A indisponibilidade do Aplicativo não altera, por si só, as
        condições do contrato; caso ela impeça o acesso a um documento
        necessário, solicite atendimento.
      </p>

      <h2>6. Conteúdos e permissões do dispositivo</h2>
      <p>
        Ao enviar fotos, vídeos, mensagens ou documentos, limite o conteúdo ao
        necessário para sua solicitação e certifique-se de que pode
        compartilhá-lo. Evite incluir dados de terceiros sem necessidade.
      </p>
      <p>
        O acesso à câmera, às fotos ou ao microfone depende da funcionalidade
        utilizada e das permissões do dispositivo. A recusa de uma permissão
        pode impedir o uso do recurso correspondente. O tratamento desses
        conteúdos é descrito na Política de Privacidade.
      </p>

      <h2>7. Disponibilidade e alterações do serviço</h2>
      <p>
        O Aplicativo pode passar por manutenção, correções e atualizações.
        Interrupções também podem decorrer de falhas de conexão ou de serviços
        externos. Quando possível, manutenções programadas que afetem o acesso
        serão comunicadas.
      </p>
      <p>
        Recursos podem ser aprimorados ou modificados, respeitados os direitos
        dos clientes e as obrigações contratuais. Durante indisponibilidades,
        utilize os canais de atendimento para solicitar suporte.
      </p>

      <h2>8. Propriedade intelectual e serviços externos</h2>
      <p>
        Marcas, identidade visual, software e demais elementos do Aplicativo
        pertencem aos seus respectivos titulares. O acesso ao serviço permite
        seu uso pessoal para as finalidades previstas nestes termos e não
        transfere direitos de propriedade intelectual.
      </p>
      <p>
        Alguns documentos e serviços podem abrir no navegador ou em plataformas
        de terceiros, sujeitos às condições e políticas desses serviços. A
        distribuição pela App Store também está sujeita aos termos aplicáveis da
        plataforma e à licença de uso do aplicativo.
      </p>

      <h2>9. Privacidade e proteção de dados</h2>
      <p>
        As informações sobre dados coletados, finalidades, compartilhamento,
        segurança, retenção e direitos dos titulares estão na{" "}
        <Link href="/politica-de-privacidade">Política de Privacidade</Link>. A
        utilização do Aplicativo não representa consentimento genérico para
        qualquer tratamento de dados; quando necessário, serão solicitadas
        autorizações específicas.
      </p>

      <h2>10. Restrição de acesso e encerramento</h2>
      <p>
        O acesso poderá ser temporariamente restringido quando necessário para
        investigar suspeitas de fraude, proteger dados ou conter uso indevido.
        As medidas deverão ser proporcionais à situação, e o cliente poderá
        buscar esclarecimentos e revisão pelos canais de atendimento.
      </p>
      <p>
        Você pode solicitar a exclusão da conta conforme descrito na Política de
        Privacidade. O encerramento do acesso não cancela automaticamente
        contratos de compra de imóvel ou de prestação de serviços, nem extingue
        obrigações existentes. Dados sujeitos a deveres de conservação serão
        mantidos conforme indicado na política.
      </p>

      <h2>11. Responsabilidades e direitos</h2>
      <p>
        Cada parte responde por seus atos nos termos da legislação aplicável.
        Nenhuma disposição deste documento afasta direitos assegurados ao
        consumidor ou ao titular de dados pessoais, nem exclui responsabilidades
        que não possam ser limitadas por lei.
      </p>

      <h2>12. Alterações destes termos</h2>
      <p>
        Estes termos podem ser atualizados para refletir mudanças no serviço ou
        na legislação. A versão vigente ficará disponível nesta página, com sua
        data de atualização. Alterações relevantes serão comunicadas pelo
        Aplicativo ou pelos canais de contato cadastrados, com solicitação de
        aceite quando aplicável.
      </p>

      <h2>13. Contato</h2>
      <div className={styles.contact}>
        <p>
          <strong>Grupo Andrade Marinho</strong> · CNPJ 20.650.041/0001-30
        </p>
        <p>
          E-mail:{" "}
          <a href="mailto:ti@andrademarinho.com.br">ti@andrademarinho.com.br</a>
        </p>
        <p>
          Telefone: <a href="tel:+558340090500">(83) 4009-0500</a>
        </p>
        <p>
          Av. João Cirilo da Silva, 221 – Bloco B, Sala 1501, CXPST 11 –
          Altiplano Cabo Branco – João Pessoa/PB – CEP 58.046-005
        </p>
      </div>

      <h2>14. Legislação aplicável</h2>
      <p>
        Estes termos são regidos pela legislação brasileira. Eventuais conflitos
        poderão ser encaminhados aos órgãos e ao juízo competentes, preservados
        os direitos do consumidor e as regras legais de competência.
      </p>
    </>
  );
}
