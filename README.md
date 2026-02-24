This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.













| Gateway        | Meio de pagamento     | Taxa suposta           | Gateway fica    | Sobra no app (líquido) | Sua comissão (10%) | Vai pro trabalhador |
|----------------|-----------------------|------------------------|-----------------|------------------------|--------------------|---------------------|
| Pagar.me       | Pix                   | 1,5%                   | R$ 1.500,00     | R$ 98.500,00           | R$ 10.000,00       | R$ 88.500,00        |
| Pagar.me       | Cartão crédito        | 3,5%                   | R$ 3.500,00     | R$ 96.500,00           | R$ 10.000,00       | R$ 86.500,00        |
| Pagar.me       | Boleto                | R$ 3,00 fixo           | R$ 3,00         | R$ 99.997,00           | R$ 10.000,00       | R$ 89.997,00        |
| Stripe         | Cartão crédito        | 4%                     | R$ 4.000,00     | R$ 96.000,00           | R$ 10.000,00       | R$ 86.000,00        |
| Stripe         | Pix (via parceiro BR) | 2%                     | R$ 2.000,00     | R$ 98.000,00           | R$ 10.000,00       | R$ 88.000,00        |
| Mercado Pago   | Pix cobrança          | 1%                     | R$ 1.000,00     | R$ 99.000,00           | R$ 10.000,00       | R$ 89.000,00        |
| Mercado Pago   | Cartão crédito        | 4%                     | R$ 4.000,00     | R$ 96.000,00           | R$ 10.000,00       | R$ 86.000,00        |
| Mercado Pago   | Boleto                | R$ 3,50 fixo           | R$ 3,50         | R$ 99.996,50           | R$ 10.000,00       | R$ 89.996,50        |
| Celcoin / infra| Pix                   | 1%                     | R$ 1.000,00     | R$ 99.000,00           | R$ 10.000,00       | R$ 89.000,00        |
| Celcoin / infra| Cartão (via gateway)  | 3,5%                   | R$ 3.500,00     | R$ 96.500,00           | R$ 10.000,00       | R$ 86.500,00        |
