export default function DevOps() {
  return (
    <section className="bg-slate-900/50 p-12 rounded-3xl border border-white/5">
      <h2 className="text-3xl font-bold text-white mb-12">
        DevOps & Delivery Pipeline
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center font-bold text-white">
              01
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">Staging Audits</h4>
              <p className="text-sm text-slate-400">
                Automated testing, security scanning, and linting on every push.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center font-bold text-white">
              02
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">Canary Rollouts</h4>
              <p className="text-sm text-slate-400">
                Traffic splitting via Istio to ensure zero-downtime upgrades.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 bg-slate-950 p-8 rounded-xl border border-white/10 font-mono text-xs overflow-x-auto text-blue-400">
          <p className="mb-2 text-slate-600"># github-actions/deploy.yml</p>
          <p>jobs:</p>
          <p className="ml-4">terraform-apply:</p>
          <p className="ml-8">runs-on: ubuntu-latest</p>
          <p className="ml-8">steps:</p>
          <p className="ml-12">- name: Provision Infra</p>
          <p className="ml-16">run: terraform apply -auto-approve</p>
          <p className="ml-12 text-cyan-400 animate-pulse">
            _ deploying to k8s_cluster_prod...
          </p>
        </div>
      </div>
    </section>
  );
}
