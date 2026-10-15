import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-8 gap-12">
        {/* Secção de Teste de Tipografia e Cores Base */}
        <section className="bg-surface p-10 rounded-2xl border border-subtle shadow-sm max-w-3xl w-full text-center">
          <h1 className="display-hero text-title mb-2">DOCES GUERRA</h1>
          <h2 className="display-sub text-muted mb-8">CONHEÇA OS PRODUTOS</h2>

          <p className="body-large text-body mb-4">
            Doces e salgados feitos com qualidade e carinho. Produtos com opção
            sem lactose.
          </p>
          <p className="body-caption text-muted mb-10">
            Pode conter: castanha, glúten, lactose.
          </p>

          {/* Secção de Teste de Botões */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="button-primary button-primary-hover px-8 py-4 rounded-lg label-large transition-colors">
              Adicionar ao Carrinho
            </button>
            <button className="button-secondary button-secondary-hover text-link px-8 py-4 rounded-lg label-large transition-colors border border-focus">
              Ver Detalhes
            </button>
          </div>
        </section>

        {/* Secção de Teste de Status */}
        <section className="bg-surface-light p-8 rounded-xl border border-default max-w-3xl w-full flex flex-col gap-6">
          <h3 className="heading-h3 text-title border-b border-default pb-4">
            Cores de Status
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="status-success status-success-text p-4 rounded-md text-center label-medium">
              Sucesso Forte
            </div>
            <div className="status-success-soft status-success-text p-4 rounded-md text-center label-medium">
              Sucesso Suave
            </div>
            <div className="status-danger status-danger-text p-4 rounded-md text-center label-medium text-white">
              Erro Forte
            </div>
            <div className="status-warning-soft status-warning-text p-4 rounded-md text-center label-medium">
              Aviso Suave
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
