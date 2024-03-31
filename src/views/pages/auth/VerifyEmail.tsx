'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Component Imports
import Logo from '@components/layout/shared/Logo'

// Styled Component Imports
import AuthIllustrationWrapper from '../../AuthIllustrationWrapper'

const VerifyEmailV1 = () => {
  return (
    <AuthIllustrationWrapper>
      <Card className='flex flex-col sm:is-[450px]'>
        <CardContent className='sm:!p-12'>
          <div className='flex justify-center mbe-6'>
            <Logo />
          </div>
          <div className='flex flex-col gap-1 mbe-6'>
            <Typography variant='h4'>Verifique se Email ✉️</Typography>
            <Typography>
              Link de ativação da conta enviado para seu endereço de e-mail::{' '}
              <span className='font-medium text-textPrimary'>seuemail@email.com</span> Por favor, siga o link dentro
              para continuar.
            </Typography>
          </div>
          <Button fullWidth variant='contained' type='submit' className='mbe-6'>
            Pular por enquanto
          </Button>
          <div className='flex justify-center items-center flex-wrap gap-2'>
            <Typography>Não recebeu o e-mail?</Typography>
            <Typography color='primary' component={Link} href='/' onClick={e => e.preventDefault()}>
              Reenviar
            </Typography>
          </div>
        </CardContent>
      </Card>
    </AuthIllustrationWrapper>
  )
}

export default VerifyEmailV1
