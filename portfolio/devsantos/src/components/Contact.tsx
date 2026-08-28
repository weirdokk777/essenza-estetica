import { useState, FormEvent, ChangeEvent } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { projectTypes, budgets, siteConfig } from '../config/site'
import Reveal from './Reveal'

interface FormData {
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  message: '',
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Nome deve ter pelo menos 3 caracteres'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres'
    }

    return newErrors
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const newErrors = validate()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setStatus({ type: 'error', message: 'Por favor, corrija os campos destacados.' })
      return
    }

    setErrors({})
    setIsSubmitting(true)
    setStatus(null)

    // Simulate API call - replace with actual API integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log('Form data:', formData)
      setStatus({
        type: 'success',
        message: 'Proposta enviada com sucesso! Entraremos em contato em breve.',
      })
      setFormData(initialFormData)
    } catch {
      setStatus({
        type: 'error',
        message: 'Erro ao enviar a proposta. Tente novamente.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: keyof FormData) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <section id="contato" className="section-padding bg-gray-50/50 dark:bg-dark-900/50">
      <div className="container-custom">
        <Reveal className="text-center">
          <span className="section-tag">Contato</span>
          <h2 className="section-title">
            Vamos <span className="gradient-text">conversar</span>
          </h2>
          <p className="section-subtitle">
            Tem um projeto em mente? Envie uma mensagem e retornaremos em breve.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-card p-8" noValidate>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange('name')}
                  className={`input-field ${errors.name ? 'input-error' : ''}`}
                  placeholder="Seu nome completo"
                  autoComplete="name"
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                  className={`input-field ${errors.email ? 'input-error' : ''}`}
                  placeholder="seu@email.com"
                  autoComplete="email"
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Empresa <span className="text-gray-400">(opcional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleChange('company')}
                  className="input-field"
                  placeholder="Nome da empresa"
                  autoComplete="organization"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                  Tipo de projeto
                </label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={handleChange('projectType')}
                  className="input-field"
                >
                  <option value="">Selecione o tipo</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="budget" className="block text-sm font-medium mb-2">
                  Orçamento aproximado
                </label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={handleChange('budget')}
                  className="input-field"
                >
                  <option value="">Selecione a faixa</option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange('message')}
                  className={`input-field ${errors.message ? 'input-error' : ''}`}
                  placeholder="Conte-nos sobre seu projeto..."
                />
                {errors.message && <p className="error-message">{errors.message}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full mt-8"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Enviar proposta
                </>
              )}
            </button>

            {status && (
              <div
                className={`mt-4 p-4 rounded-lg flex items-start gap-3 ${
                  status.type === 'success'
                    ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                    : 'bg-red-500/10 border border-red-500/30 text-red-400'
                }`}
                role="status"
                aria-live="polite"
              >
                {status.type === 'success' ? (
                  <CheckCircle2 size={20} className="shrink-0" />
                ) : (
                  <AlertCircle size={20} className="shrink-0" />
                )}
                <p className="text-sm">{status.message}</p>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}