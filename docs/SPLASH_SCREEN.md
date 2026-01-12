# Splash Screen - Documentação

Sistema avançado de splash screen com animações fluidas, preload de assets e suporte a acessibilidade.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Arquitetura](#arquitetura)
- [API de Componentes](#api-de-componentes)
- [Integração](#integração)
- [Performance](#performance)
- [Acessibilidade](#acessibilidade)
- [Customização](#customização)

## 🎯 Visão Geral

A splash screen implementada oferece:

- **Animações suaves e performáticas** usando transform (GPU-accelerated)
- **Zero tearing, flicker ou jitter** na troca de logos
- **Timeline coordenada** de 3-5 segundos com preload inteligente
- **Suporte completo a prefers-reduced-motion**
- **Preload de imagens críticas** para experiência otimizada
- **API de controle** para exibir/ocultar programaticamente

### Timeline da Animação

```
0s ────────────────────────────────────────────────────────────> 4s
│                                                                 │
│  Logo Azul    │ Gaveta  │      Logo Branco      │   Gaveta    │
│   Aparece     │  Desce  │     Visível           │    Sobe     │
│               │  +Swap  │                        │             │
│   0.8s        │  0.7s   │        0.8s            │    0.7s     │
│               │  0.3s   │                        │             │
└───────────────┴─────────┴────────────────────────┴─────────────┘
    Fase 1         Fase 2          Fase 3             Fase 4
 (bg-background)              (bg-primary)
  (logo-blue)                 (logo-white)
```

## 🏗️ Arquitetura

### Componentes Principais

```
src/
├── components/
│   └── splash-screen.tsx       # Componente visual da splash
├── providers/
│   └── splash-provider.tsx     # Provider de controle e estado
├── hooks/
│   ├── use-image-preload.ts    # Hook de preload de imagens
│   └── use-reduced-motion.ts   # Hook de detecção de reduced motion
└── app/
    └── layout.tsx              # Integração no layout raiz
```

### Fluxo de Dados

```
┌─────────────────┐
│  SplashProvider │ ─── Estado global (isVisible)
└────────┬────────┘
         │
         ├─── API: showSplash(), hideSplash()
         │
         v
┌─────────────────┐
│  SplashScreen   │ ─── Timeline de animações
└────────┬────────┘
         │
         ├─── useImagePreload (preload de assets)
         ├─── useReducedMotion (acessibilidade)
         └─── onComplete() → hideSplash()
```

## 📚 API de Componentes

### SplashScreen

Componente visual que executa a animação da splash.

#### Props

```typescript
interface SplashScreenProps {
  // Callback quando finaliza
  onComplete?: () => void;

  // Imagens para preload
  preloadImages?: string[];

  // Assets de logos
  logoBlue?: string;        // Default: "/logo-blue.png"
  logoWhite?: string;       // Default: "/logo-white.png"

  // Cores de fundo (classes Tailwind)
  backgroundColorLight?: string;  // Default: "bg-background"
  backgroundColorDark?: string;   // Default: "bg-primary"

  // Duração
  minDuration?: number;     // Default: 3000ms
  maxDuration?: number;     // Default: 5000ms
}
```

#### Exemplo de uso direto

```tsx
import { SplashScreen } from "@/components/splash-screen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && (
        <SplashScreen
          onComplete={() => setShowSplash(false)}
          preloadImages={["/hero.jpg", "/section-1.jpg"]}
        />
      )}
      <YourContent />
    </>
  );
}
```

### SplashProvider

Provider que gerencia o estado e fornece API de controle.

#### Props

```typescript
interface SplashProviderProps {
  children: ReactNode;

  // Configuração
  showOnMount?: boolean;           // Default: true
  preloadImages?: string[];        // Imagens para preload
  
  // Props do SplashScreen
  splashProps?: Omit<SplashScreenProps, "onComplete" | "preloadImages">;
  
  // Callback
  onComplete?: () => void;
}
```

#### Exemplo de uso

```tsx
import { SplashProvider } from "@/providers/splash-provider";

function RootLayout({ children }) {
  return (
    <SplashProvider
      showOnMount={true}
      preloadImages={["/hero-bg.jpg", "/section-1.jpg"]}
      splashProps={{
        logoBlue: "/logo-blue.png",
        logoWhite: "/logo-white.png",
        backgroundColorLight: "bg-background",
        backgroundColorDark: "bg-primary",
        minDuration: 3000,
        maxDuration: 5000,
      }}
      onComplete={() => console.log("Splash concluída")}
    >
      {children}
    </SplashProvider>
  );
}
```

### useSplash Hook

Hook para controle programático da splash.

#### API

```typescript
interface SplashContextValue {
  isVisible: boolean;
  showSplash: () => void;
  hideSplash: () => void;
}
```

#### Exemplo

```tsx
import { useSplash } from "@/providers/splash-provider";

function MyComponent() {
  const { showSplash, hideSplash, isVisible } = useSplash();

  return (
    <button onClick={showSplash}>
      Mostrar Splash Novamente
    </button>
  );
}
```

## 🔧 Integração

### Passo 1: Adicionar ao Layout Raiz

Em `src/app/layout.tsx`:

```tsx
import { SplashProvider } from "@/providers/splash-provider";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <SplashProvider
          showOnMount={true}
          preloadImages={[
            "/hero-background.jpg",
            "/section-image.jpg",
          ]}
        >
          {children}
        </SplashProvider>
      </body>
    </html>
  );
}
```

### Passo 2: Configurar Assets

Certifique-se de que os logos estão em `/public`:

```
public/
├── logo-blue.png    # Logo para fundo claro
└── logo-white.png   # Logo para fundo escuro
```

### Passo 3: Adicionar Imagens para Preload

Liste as imagens críticas que devem ser carregadas:

```tsx
preloadImages={[
  "/hero-background.jpg",
  "/section-1-image.jpg",
  "/section-2-image.jpg",
  "/product-showcase.jpg",
]}
```

## ⚡ Performance

### Otimizações Implementadas

1. **GPU Acceleration**
   - Uso de `transform` em vez de `top/left`
   - `will-change: transform` em elementos animados
   - `perspective` para animações 3D

2. **Frame Rate Estável**
   - Easings otimizados para 60fps/120fps
   - Sem animações baseadas em `layout` (que causam reflow)
   - Timeline precisa com durations calculadas

3. **Preload Inteligente**
   - Carregamento paralelo de assets
   - Timeout máximo para evitar bloqueio
   - Duração mínima garantida para UX consistente

4. **Código Otimizado**
   - Zero re-renders desnecessários
   - Cleanup de event listeners
   - Image components otimizados do Next.js

### Benchmarks Esperados

- **Frame Rate**: 60fps constante (120fps em dispositivos compatíveis)
- **Tempo de Load**: 3-5 segundos (configurável)
- **Bundle Size**: ~8KB (componentes + hooks)
- **First Paint**: < 100ms

## ♿ Acessibilidade

### Prefers Reduced Motion

O sistema detecta automaticamente `prefers-reduced-motion: reduce` e:

1. Desativa todas as animações complexas
2. Exibe versão estática do logo
3. Reduz duração para ~500ms
4. Mantém funcionalidade de preload

### Como Testar

**macOS:**
```
System Preferences > Accessibility > Display > Reduce motion
```

**Windows:**
```
Settings > Ease of Access > Display > Show animations
```

**Chrome DevTools:**
```
CMD+Shift+P > "reduced motion" > Emulate CSS prefers-reduced-motion
```

### Implementação

```tsx
const prefersReducedMotion = useReducedMotion();

if (prefersReducedMotion) {
  // Renderiza versão simplificada
  return <StaticLogo />;
}

// Renderiza versão completa com animações
return <AnimatedSplash />;
```

## 🎨 Customização

### Alterar Duração da Timeline

```tsx
<SplashProvider
  splashProps={{
    minDuration: 4000,  // 4 segundos mínimo
    maxDuration: 6000,  // 6 segundos máximo
  }}
/>
```

### Customizar Cores

```tsx
<SplashProvider
  splashProps={{
    backgroundColorLight: "bg-slate-50",
    backgroundColorDark: "bg-indigo-900",
  }}
/>
```

### Trocar Logos

```tsx
<SplashProvider
  splashProps={{
    logoBlue: "/custom-logo-dark.svg",
    logoWhite: "/custom-logo-light.svg",
  }}
/>
```

### Ajustar Velocidade das Animações

Edite `ANIMATION_CONFIG` em `src/components/splash-screen.tsx`:

```typescript
const ANIMATION_CONFIG = {
  logoBlueReveal: 0.6,    // Mais rápido (0.8s → 0.6s)
  logoBlueStay: 0.4,      // Menos tempo visível
  drawerSlideDown: 0.5,   // Gaveta desce mais rápido
  logoSwap: 0.2,          // Troca instantânea
  logoWhiteStay: 0.6,     // Menos tempo
  drawerSlideUp: 0.5,     // Sobe mais rápido
};
```

### Customizar Easings

```typescript
const ANIMATION_CONFIG = {
  // ... durations
  easeSmooth: [0.4, 0.0, 0.2, 1],     // Material Design easing
  easeDrawer: [0.7, 0, 0.3, 1],       // easeInOutCubic
  easeLogo: [0.68, -0.55, 0.265, 1.55], // easeOutBack mais pronunciado
};
```

## 🐛 Troubleshooting

### Logo não aparece

Verifique se os arquivos existem:
```bash
ls -la public/logo-blue.png
ls -la public/logo-white.png
```

### Animação travando

1. Verifique o console do navegador
2. Teste em modo reduced motion
3. Reduza o número de imagens em `preloadImages`

### Splash não desaparece

1. Verifique se `onComplete` está sendo chamado
2. Confirme que `AnimatePresence` está no provider
3. Teste aumentar `maxDuration`

### Performance ruim em mobile

1. Reduza tamanho dos logos (use WebP)
2. Diminua o número de `preloadImages`
3. Considere aumentar `minDuration` para dar tempo de load

## 📝 Notas Técnicas

### Por que Transform em vez de Top/Left?

Propriedades `transform` são aceleradas por GPU e não causam reflow:

```tsx
// ❌ Ruim - causa reflow/repaint
<div style={{ top: animatedValue }} />

// ✅ Bom - GPU accelerated
<div style={{ transform: `translateY(${animatedValue})` }} />
```

### Por que Variants do Motion?

Variants centralizam configuração e melhoram performance:

```tsx
// Variants são pré-compiladas e otimizadas
const variants: Variants = {
  visible: { opacity: 1, transition: { ... } }
};

<motion.div variants={variants} animate="visible" />
```

### Por que Dois Logos?

Para evitar flash/flicker na troca de cores:
- Logo azul (escuro) em fundo claro → bom contraste
- Logo branco (claro) em fundo escuro → bom contraste

A troca é feita com crossfade suave durante a descida da gaveta.

## 📄 Licença

Este componente faz parte do projeto Andrade Marinho LP.

---

**Última atualização:** 2026-01-10  
**Versão:** 1.0.0  
**Mantido por:** Time de Desenvolvimento Andrade Marinho
