import confirm from '../../../core/utils/confirm'
import info from '../../../core/utils/info'
import Logo from '../../components/Logo'
import NavBar from '../../components/NavBar'
import SessionController from '../../components/SessionController'
import * as DL from './DefaultLayout.styles'

interface DefaultLayoutProps { 
    children: React.ReactNode
}

function DefaultLayout (props: DefaultLayoutProps) {
    return <DL.Wrapper>
        <DL.Header>
            <Logo />
        </DL.Header>
        <DL.Main>
            <DL.Navigation>
                <NavBar />
            </DL.Navigation>
            <DL.FeaturedContent>
                { props.children }
            </DL.FeaturedContent>
            <DL.Aside>
                <SessionController 
                    name='Renato Ramos'
                    description='editor há 2 anos'
                    onLogout={() => {
                        confirm({
                            title: 'Deseja realmente sair?',
                            onConfirm: () => {
                                info({
                                    title: 'Você foi deslogado',
                                    description: 'Você será redirecionado para a página de login.'
                                })
                            },
                            onCancel: () => window.alert('cancelou'),
                        })
                    }}
                />
            </DL.Aside>
        </DL.Main>
    </DL.Wrapper>
}

export default DefaultLayout