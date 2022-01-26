import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json'

export default function chatPage(){
    return(
        <Box
        styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary["050"],
            backgroundImage: 'url(https://www.stockvault.net/data/2016/08/23/208216/preview16.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        
        >
            <Box
            styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {xs: 'column', sm: 'row',},
            width: '100%', maxWidth: '700px', minHeight:'500px',
            borderRadius: '20px', padding: '32px', margin: '16px',
            boxShadow: '0 5px 10px 0 rgb(0 0 0 / 90%)',
            backgroundColor: appConfig.theme.colors.neutrals["500"], opacity: '0.9',
          }}
            >
                <h1>Aqui será a janela do chat</h1>
            </Box>
        </Box>
    )
}