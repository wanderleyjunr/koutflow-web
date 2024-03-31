// Next Imports
import type { Metadata } from 'next'

// Component Imports
import Register from '@views/Register'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

export const metadata: Metadata = {
  title: 'Criar nova conta',
  description: 'Crie sua conta na KoutFlow e abra as portas do empreendedorismo digital a seu favor!'
}

const RegisterPage = () => {
  // Vars
  const mode = getServerMode()

  return <Register mode={mode} />
}

export default RegisterPage
